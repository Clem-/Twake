import * as mongo from "mongodb";
import { UpsertOptions } from "..";
import { ListResult, Paginable, Pagination } from "../../../../../../framework/api/crud-service";
import { FindOptions } from "../../repository/repository";
import { ColumnDefinition, EntityDefinition, ObjectType } from "../../types";
import { getEntityDefinition, unwrapPrimarykey } from "../../utils";
import { AbstractConnector } from "../abstract-connector";
import { buildSelectQuery } from "./query-builder";
import { transformValueFromDbString, transformValueToDbString } from "./typeTransforms";
import { logger } from "../../../../../../framework";

export { MongoPagination } from "./pagination";

export interface MongoConnectionOptions {
  // TODO: More options
  uri: string;
  database: string;
}

export class MongoConnector extends AbstractConnector<MongoConnectionOptions, mongo.MongoClient> {
  private client: mongo.MongoClient;

  async init(): Promise<this> {
    if (!this.client) {
      await this.connect();
    }
    return this;
  }

  async connect(): Promise<this> {
    if (this.client && this.client.isConnected()) {
      return this;
    }

    this.client = await mongo.connect(this.options.uri);

    return this;
  }

  getClient(): mongo.MongoClient {
    return this.client;
  }

  async getDatabase(): Promise<mongo.Db> {
    await this.connect();

    return this.client.db(this.options.database);
  }

  async drop(): Promise<this> {
    const db = await this.getDatabase();

    db.dropDatabase();

    return this;
  }

  async createTable(
    _entity: EntityDefinition,
    _columns: { [name: string]: ColumnDefinition },
  ): Promise<boolean> {
    const db = await this.getDatabase();
    const collection = db.collection(`${_entity.name}`);

    //Mongo only need to create an index if ttl defined for entity
    if (_entity.options.ttl && _entity.options.ttl > 0) {
      const primaryKey = unwrapPrimarykey(_entity);
      const filter: any = {};
      primaryKey.forEach(key => {
        filter[key] = 1;
      });
      collection.createIndex(filter, { expireAfterSeconds: _entity.options.ttl });
    }

    return true;
  }
  async upsert(entities: any[], options: UpsertOptions = {}): Promise<boolean[]> {
    return new Promise(async resolve => {
      const promises: Promise<mongo.UpdateWriteOpResult>[] = [];

      const db = await this.getDatabase();

      entities.forEach(entity => {
        const { columnsDefinition, entityDefinition } = getEntityDefinition(entity);
        const primaryKey = unwrapPrimarykey(entityDefinition);

        //Set updated content
        const set: any = {};
        Object.keys(columnsDefinition)
          .filter(key => primaryKey.indexOf(key) === -1)
          .filter(key => columnsDefinition[key].nodename !== undefined)
          .forEach(key => {
            set[key] = transformValueToDbString(
              entity[columnsDefinition[key].nodename],
              columnsDefinition[key].type,
              { columns: columnsDefinition[key].options, secret: this.secret },
            );
          });

        //Set primary key
        const where: any = {};
        primaryKey.forEach(key => {
          where[key] = transformValueToDbString(
            entity[columnsDefinition[key].nodename],
            columnsDefinition[key].type,
            { columns: columnsDefinition[key].options, secret: this.secret },
          );
        });

        const collection = db.collection(`${entityDefinition.name}`);
        promises.push(collection.updateOne(where, { $set: { set } }, { upsert: true }));
      });

      Promise.all(promises).then(results => {
        resolve(results.map(result => result.result.ok === 1));
      });
    });
  }

  async remove(entities: any[]): Promise<boolean[]> {
    return new Promise(async resolve => {
      const promises: Promise<mongo.DeleteWriteOpResultObject>[] = [];
      const db = await this.getDatabase();

      entities.forEach(entity => {
        const { columnsDefinition, entityDefinition } = getEntityDefinition(entity);
        const primaryKey = unwrapPrimarykey(entityDefinition);

        //Set primary key
        const where: any = {};
        primaryKey.forEach(key => {
          where[key] = transformValueToDbString(
            entity[columnsDefinition[key].nodename],
            columnsDefinition[key].type,
            { columns: columnsDefinition[key].options, secret: this.secret },
          );
        });

        const collection = db.collection(`${entityDefinition.name}`);
        promises.push(collection.deleteOne(where));
      });

      Promise.all(promises).then(results => {
        resolve(results.map(result => result.result.ok === 1));
      });
    });
  }

  async find<Table>(
    entityType: Table,
    filters: any,
    options: FindOptions = {},
  ): Promise<ListResult<Table>> {
    const instance = new (entityType as any)();
    const { columnsDefinition, entityDefinition } = getEntityDefinition(instance);

    const pk = unwrapPrimarykey(entityDefinition);
    if (Object.keys(filters).some(key => pk.indexOf(key) < 0)) {
      //Filter not in primary key
      throw Error(
        "All filter parameters must be defined in entity primary key, got: " +
          JSON.stringify(Object.keys(filters)) +
          " on table " +
          entityDefinition.name +
          " but pk is " +
          JSON.stringify(pk),
      );
    }

    const db = await this.getDatabase();
    const collection = db.collection(`${entityDefinition.name}`);

    const query = buildSelectQuery<Table>(
      (entityType as unknown) as ObjectType<Table>,
      filters,
      options,
    );

    logger.debug(`services.database.orm.mongodb.find - Query: ${JSON.stringify(query)}`);

    const cursor = await collection
      .find(query)
      .skip(parseInt(options.pagination.page_token))
      .limit(parseInt(options.pagination.limitStr));

    const entities: Table[] = [];
    while (await cursor.hasNext()) {
      let row = await cursor.next();
      row = { ...row.set, ...row };
      const entity = new (entityType as any)();
      Object.keys(row)
        .filter(key => columnsDefinition[key] !== undefined)
        .forEach(key => {
          entity[columnsDefinition[key].nodename] = transformValueFromDbString(
            row[key],
            columnsDefinition[key].type,
            { columns: columnsDefinition[key].options, secret: this.secret },
          );
        });
      entities.push(entity);
    }

    const nextToken =
      entities.length === parseInt(options.pagination.limitStr) &&
      (parseInt(options.pagination.page_token) + 1).toString(10);
    const nextPage: Paginable = new Pagination(nextToken, options.pagination.limitStr || "100");
    return new ListResult<Table>(entityDefinition.type, entities, nextPage);
  }
}
