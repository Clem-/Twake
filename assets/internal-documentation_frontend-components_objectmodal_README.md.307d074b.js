import{_ as s,c as a,o as t,a as n}from"./app.73ebf130.js";const e="/Twake/assets/screenshot-2020-07-15-at-17.00.48.a3d21e23.png",u=JSON.parse('{"title":"ObjectModal","description":"A beautiful, centered, medium modal with all you need to structure its content.","frontmatter":{"description":"A beautiful, centered, medium modal with all you need to structure its content."},"headers":[],"relativePath":"internal-documentation/frontend-components/objectmodal/README.md"}'),o={name:"internal-documentation/frontend-components/objectmodal/README.md"},l=n(`<h1 id="objectmodal" tabindex="-1">ObjectModal <a class="header-anchor" href="#objectmodal" aria-hidden="true">#</a></h1><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> ObjectModal </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">components/ObjectModal/ObjectModal.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ObjectModal</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#FFCB6B;">ObjectModalTitle</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">My awesome title !</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">ObjectModalTitle</span><span style="color:#89DDFF;">&gt;}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">onClose</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> myComponent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closeSomething</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">disabled</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">footer</span><span style="color:#89DDFF;">={&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Definitly not usefull</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;}</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">FirstChild</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Some text</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">ObjectModal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th><strong>name</strong></th><th><strong>Description</strong></th><th><strong>Type</strong></th><th><strong>Default</strong></th></tr></thead><tbody><tr><td><strong>disabled</strong></td><td>Disable scrollbar X axis (need to rename for a better clarity)</td><td>Boolean</td><td>false</td></tr><tr><td><strong>footer</strong></td><td>Define a footer component</td><td>ReactNode</td><td>null</td></tr><tr><td><strong>onClose</strong></td><td>Add close icon in the component, waiting for a function</td><td>Function</td><td>null</td></tr><tr><td><strong>title</strong></td><td><em>Define a title component</em></td><td>ReactNode</td><td>null</td></tr></tbody></table><h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h4><h4 id="preview" tabindex="-1">Preview <a class="header-anchor" href="#preview" aria-hidden="true">#</a></h4><p><img src="`+e+'" alt="Modal example with task editor"></p><hr>',11),p=[l];function r(c,d,i,D,F,y){return t(),a("div",null,p)}const g=s(o,[["render",r]]);export{u as __pageData,g as default};
