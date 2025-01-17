import { Type } from "class-transformer";
import { merge } from "lodash";
import { Column, Entity } from "../../../core/platform/services/database/services/orm/decorators";

export const TYPE = "threads";
@Entity(TYPE, {
  primaryKey: [["company_id"], "id"],
  type: TYPE,
})
export class Thread {
  @Type(() => String)
  @Column("company_id", "uuid")
  company_id: string;

  @Type(() => String)
  @Column("id", "timeuuid")
  id: string;

  @Type(() => String)
  @Column("created_by", "string")
  created_by: string;

  @Type(() => Number)
  @Column("created_at", "number")
  created_at: number;

  @Type(() => Number)
  @Column("last_activity", "number")
  last_activity: number;

  @Type(() => Number)
  @Column("answers", "number")
  answers: number;

  @Column("answers", "encoded_json")
  participants: ParticipantObject[];
}

export type ParticipantObject = {
  type: "user" | "channel";
  created_at: number;
  created_by: string;
  id: string;
};

export type ThreadPrimaryKey = Pick<Thread, "company_id" | "id">;

export function getInstance(thread: Thread): Thread {
  return merge(new Thread(), thread);
}
