import{_ as a,c as e,o as t,a as n}from"./app.73ebf130.js";const _=JSON.parse('{"title":"Authentication","description":"How to manage authentification on API call","frontmatter":{"description":"How to manage authentification on API call"},"headers":[{"level":2,"title":"Authencate your app in Twake","slug":"authencate-your-app-in-twake","link":"#authencate-your-app-in-twake","children":[]},{"level":2,"title":"Authencate your app in a company","slug":"authencate-your-app-in-a-company","link":"#authencate-your-app-in-a-company","children":[]}],"relativePath":"developers-api/api-reference/auth.md"}'),o={name:"developers-api/api-reference/auth.md"},s=n(`<h1 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-hidden="true">#</a></h1><h2 id="authencate-your-app-in-twake" tabindex="-1">Authencate your app in Twake <a class="header-anchor" href="#authencate-your-app-in-twake" aria-hidden="true">#</a></h2><p><strong>All your connections</strong> should respect the Basic access authentication protocol, which must be used via HTTPS, except in development mode. In order to make an API call with this method, you must add an HTTP header:</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Authorization: Basic base64(public_id:private_api_key)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>You must concatenate</strong> your <a href="./../get-started/README.html#identity-and-api-settings">public_id and private_api_key</a> , <strong>then convert</strong> the whole <strong>to base64</strong>. Your HTTP header will therefore look like:</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;"># For the keys &#39;public_id&#39; and &#39;private_key&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Authorization: Basic cHVibGljX2lkOnByaXZhdGVfYXBpX2tleQ==</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="authencate-your-app-in-a-company" tabindex="-1">Authencate your app in a company <a class="header-anchor" href="#authencate-your-app-in-a-company" aria-hidden="true">#</a></h2><p><strong>All your requests should have at least a &quot;group_id&quot; key with the company id you</strong></p>`,8),i=[s];function p(c,r,l,u,h,d){return t(),e("div",null,i)}const A=a(o,[["render",p]]);export{_ as __pageData,A as default};