import{I as r}from"./chunks/20.b6086f3e.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.d4541533.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.0109ac6b.js";import{D as e,a as o,p as l}from"./chunks/Dropdown.d08a1afc.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.ccc62e3b.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.31272733.js";import{g as c,r as D,o as F,c as y,a as s,w as n,b as t,e as a,u as d}from"./app.5d0b0c3f.js";import"./chunks/utils-6ba05f5b.48bdda76.js";import"./chunks/index.0447d4be.js";import"./chunks/index.cc846abb.js";import"./chunks/index.71be0f73.js";import"./chunks/Button.d0695185.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.01bba6ad.js";import"./chunks/use-focus.0e5a5d4b.js";import"./chunks/toNumber.685f5789.js";import"./chunks/isSymbol.b765f5ee.js";import"./chunks/isObjectLike.46b91259.js";import"./chunks/floating-ui.dom.esm.cdffabbd.js";import"./chunks/16.5b63cf4f.js";import"./chunks/20.7d70b0ab.js";import"./chunks/16.f48a43d1.js";import"./chunks/index.c96b66cc.js";import"./chunks/value.830bdabd.js";const i=t('<h1 id="dropdown-subitem" tabindex="-1">Dropdown Subitem <a class="header-anchor" href="#dropdown-subitem" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h3>',3),u=t(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fruit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fruit A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Apple</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Avocado</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fruit B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Banana</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Blueberry</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="multi-level-subitem" tabindex="-1">Multi Level Subitem <a class="header-anchor" href="#multi-level-subitem" aria-hidden="true">#</a></h3>`,2),A=t(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Multi Level</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Level A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Item A-1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Item A-2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Level AA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Item AA-1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Item AA-2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-button-content" tabindex="-1">Custom Button Content <a class="header-anchor" href="#custom-button-content" aria-hidden="true">#</a></h2><p>Similar to <a href="/design-system/components/dropdown/index.html">Dropdown</a>, You can change button content via slot <code>button-content</code></p>`,3),C=t(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Custom Content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">button-content</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">IconBee</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline-block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;"> Fruit A</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Apple</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Avocado</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fruit B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Banana</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Blueberry</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="hide-caret" tabindex="-1">Hide Caret <a class="header-anchor" href="#hide-caret" aria-hidden="true">#</a></h2><p>Similar with <a href="/design-system/components/dropdown/index.html">Dropdown</a>, you can hide caret icon with <code>no-caret</code> props.</p>`,3),m=t(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fruit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">with Caret</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Apple</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Avocado</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">without Caret</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">no-caret</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Banana</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Blueberry</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown-subitem</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-dropdown</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>text</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Text content</td></tr><tr><td><code>no-caret</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Hide caret icon</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to place in button</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td>Native DOM Event object</td><td>Event when button is clicked</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-hidden="true">#</a></h2><ul><li><a href="/design-system/components/dropdown/index.html">Dropdown</a></li></ul>`,10),Y=JSON.parse('{"title":"Dropdown Subitem","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"Multi Level Subitem","slug":"multi-level-subitem","link":"#multi-level-subitem","children":[]}]},{"level":2,"title":"Custom Button Content","slug":"custom-button-content","link":"#custom-button-content","children":[]},{"level":2,"title":"Hide Caret","slug":"hide-caret","link":"#hide-caret","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/dropdown-subitem/index.md"}'),h={name:"components/dropdown-subitem/index.md"},z=Object.assign(h,{setup(g){return c(!1),(_,b)=>{const p=D("preview");return F(),y("div",null,[i,s(p,null,{default:n(()=>[s(e,{text:"Fruit"},{default:n(()=>[s(o,{text:"Fruit A"},{default:n(()=>[s(l,null,{default:n(()=>[a("Apple")]),_:1}),s(l,null,{default:n(()=>[a("Avocado")]),_:1})]),_:1}),s(o,{text:"Fruit B"},{default:n(()=>[s(l,null,{default:n(()=>[a("Banana")]),_:1}),s(l,null,{default:n(()=>[a("Blueberry")]),_:1})]),_:1})]),_:1})]),_:1}),u,s(p,null,{default:n(()=>[s(e,{text:"Multi Level"},{default:n(()=>[s(o,{text:"Level A",backText:"Kembali"},{default:n(()=>[s(l,null,{default:n(()=>[a("Item A-1")]),_:1}),s(l,null,{default:n(()=>[a("Item A-2")]),_:1}),s(o,{text:"Level AA"},{default:n(()=>[s(l,null,{default:n(()=>[a("Item AA-1")]),_:1}),s(l,null,{default:n(()=>[a("Item AA-2")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),A,s(p,null,{default:n(()=>[s(e,{text:"Custom Content"},{default:n(()=>[s(o,null,{"button-content":n(()=>[s(d(r),{class:"inline-block"}),a(" Fruit A ")]),default:n(()=>[s(l,null,{default:n(()=>[a("Apple")]),_:1}),s(l,null,{default:n(()=>[a("Avocado")]),_:1})]),_:1}),s(o,{text:"Fruit B"},{default:n(()=>[s(l,null,{default:n(()=>[a("Banana")]),_:1}),s(l,null,{default:n(()=>[a("Blueberry")]),_:1})]),_:1})]),_:1})]),_:1}),C,s(p,null,{default:n(()=>[s(e,{text:"Fruit"},{default:n(()=>[s(o,{text:"with Caret"},{default:n(()=>[s(l,null,{default:n(()=>[a("Apple")]),_:1}),s(l,null,{default:n(()=>[a("Avocado")]),_:1})]),_:1}),s(o,{text:"without Caret","no-caret":""},{default:n(()=>[s(l,null,{default:n(()=>[a("Banana")]),_:1}),s(l,null,{default:n(()=>[a("Blueberry")]),_:1})]),_:1})]),_:1})]),_:1}),m])}}});export{Y as __pageData,z as default};