import{_ as s,c as a,o as n,a as e}from"./app.73ebf130.js";const D=JSON.parse('{"title":"","description":"Tags API","frontmatter":{"description":"Tags API"},"headers":[{"level":2,"title":"GET a tag","slug":"get-a-tag","link":"#get-a-tag","children":[{"level":3,"title":"Success Response","slug":"success-response","link":"#success-response","children":[]}]},{"level":2,"title":"LIST a tags","slug":"list-a-tags","link":"#list-a-tags","children":[{"level":3,"title":"Success Response","slug":"success-response-1","link":"#success-response-1","children":[]}]},{"level":2,"title":"Create a tag","slug":"create-a-tag","link":"#create-a-tag","children":[{"level":3,"title":"Success Response","slug":"success-response-2","link":"#success-response-2","children":[]}]},{"level":2,"title":"Update a tag","slug":"update-a-tag","link":"#update-a-tag","children":[{"level":3,"title":"Success Response","slug":"success-response-3","link":"#success-response-3","children":[]}]},{"level":2,"title":"Delete a tag","slug":"delete-a-tag","link":"#delete-a-tag","children":[{"level":3,"title":"Success Response","slug":"success-response-4","link":"#success-response-4","children":[]}]}],"relativePath":"internal-documentation/backend-services/tags/rest-apis.md"}'),p={name:"internal-documentation/backend-services/tags/rest-apis.md"},o=e(`<h2 id="get-a-tag" tabindex="-1">GET a tag <a class="header-anchor" href="#get-a-tag" aria-hidden="true">#</a></h2><p>Used to get a tag</p><p><strong>URL</strong> : <code>/internal/services/tags/v1/companies/:company_id/tags/:tag_id</code></p><p><strong>Method</strong> : <code>GET</code></p><p><strong>Auth required</strong> : Yes</p><h3 id="success-response" tabindex="-1">Success Response <a class="header-anchor" href="#success-response" aria-hidden="true">#</a></h3><p><strong>Code</strong> : <code>200 OK</code></p><p><strong>Content example</strong></p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">company_id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">tag_id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">colour</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="list-a-tags" tabindex="-1">LIST a tags <a class="header-anchor" href="#list-a-tags" aria-hidden="true">#</a></h2><p>Used to get a tag</p><p><strong>URL</strong> : <code>/internal/services/tags/v1/companies/:company_id/tags</code></p><p><strong>Method</strong> : <code>LIST</code></p><p><strong>Auth required</strong> : Yes</p><h3 id="success-response-1" tabindex="-1">Success Response <a class="header-anchor" href="#success-response-1" aria-hidden="true">#</a></h3><p><strong>Code</strong> : <code>200 OK</code></p><p><strong>Content example</strong></p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">company_id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">tag_id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">colour</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="create-a-tag" tabindex="-1">Create a tag <a class="header-anchor" href="#create-a-tag" aria-hidden="true">#</a></h2><p>Used to create a tag</p><p><strong>URL</strong> : <code>/internal/services/tags/v1/companies/:company_id/tags</code></p><p><strong>Method</strong> : <code>POST</code></p><p><strong>Auth required</strong> : Yes</p><p><strong>Owner/admin right required</strong> : Yes</p><p><strong>Data constraints</strong></p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">colour</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="success-response-2" tabindex="-1">Success Response <a class="header-anchor" href="#success-response-2" aria-hidden="true">#</a></h3><p><strong>Code</strong> : <code>201 CREATED</code></p><h2 id="update-a-tag" tabindex="-1">Update a tag <a class="header-anchor" href="#update-a-tag" aria-hidden="true">#</a></h2><p>Used to update a tag</p><p><strong>URL</strong> : <code>/internal/services/tags/v1/companies/:company_id/tag/:tag_id</code></p><p><strong>Method</strong> : <code>POST</code></p><p><strong>Auth required</strong> : Yes</p><p><strong>Owner/admin right required</strong> : Yes</p><p><strong>Data constraints</strong></p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">colour</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="success-response-3" tabindex="-1">Success Response <a class="header-anchor" href="#success-response-3" aria-hidden="true">#</a></h3><p><strong>Code</strong> : <code>201 OK</code></p><h2 id="delete-a-tag" tabindex="-1">Delete a tag <a class="header-anchor" href="#delete-a-tag" aria-hidden="true">#</a></h2><p>Used to delete a tag</p><p><strong>URL</strong> : <code>/internal/services/tags/v1/companies/:company_id/tags/:tag_id</code></p><p><strong>Method</strong> : <code>DELETE</code></p><p><strong>Auth required</strong> : Yes</p><p><strong>Owner/admin right required</strong> : Yes</p><h3 id="success-response-4" tabindex="-1">Success Response <a class="header-anchor" href="#success-response-4" aria-hidden="true">#</a></h3><p><strong>Code</strong> : <code>200 OK</code></p>`,46),t=[o];function l(c,r,i,d,g,F){return n(),a("div",null,t)}const u=s(p,[["render",l]]);export{D as __pageData,u as default};