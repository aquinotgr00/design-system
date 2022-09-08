import{B as e}from"./chunks/Badge.7b6645bc.js";import{g as t,a as p,b as c,h as s,i as a,j as l,k as n}from"./app.5d60bad4.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.3b169d2d.js";const r=l('<h1 id="badge" tabindex="-1">Badge <a class="header-anchor" href="#badge" aria-hidden="true">#</a></h1><p>Badges are placed before/after the label of the thing they&#39;re quantifying, such as the number of notification/document received.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',4),d=n("25"),D=l(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">25</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-hidden="true">#</a></h2><p>Badge available in 7 different colors. There are <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code>, <code>danger</code> and <code>gold</code>. Default color is <code>primary</code></p>`,3),F=n("25"),i=n("7K"),y=n("999+"),g=n("25"),h=n("7K"),_=n("999+"),u=n("25"),C=l(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">25</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">7K</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">999+</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">25</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">7K</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">999+</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gold</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">25</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="variants" tabindex="-1">Variants <a class="header-anchor" href="#variants" aria-hidden="true">#</a></h2><p>Badge has 3 variants namely <code>default</code>, <code>light</code> and <code>inverse</code>. When variant is not set, badge will looks as a <code>default</code></p>`,3),A=n("25"),b=n("7K"),v=n("999+"),f=l(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">25</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">7K</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inverse</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">999+</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>color</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>primary</code></td><td>Badge color variant, valid value is <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>info</code>, <code>warning</code>, <code>danger</code>, <code>gold</code></td></tr><tr><td><code>variant</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>default</code></td><td>Badge variant, valid value is <code>default</code>, <code>light</code> and <code>inverse</code>. If need badge in <code>default</code> variant, just leave badge without setting up the variant.</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to place in badge</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td colspan="3" class="text-center">There is no event here</td></tr></tbody></table>`,8),B=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]}]},{"level":2,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/badge/index.md"}'),m={name:"components/badge/index.md"},V=Object.assign(m,{setup(T){return(E,x)=>{const o=t("preview");return p(),c("div",null,[r,s(o,null,{default:a(()=>[s(e,null,{default:a(()=>[d]),_:1})]),_:1}),D,s(o,{class:"gap-4"},{default:a(()=>[s(e,{color:"primary"},{default:a(()=>[F]),_:1}),s(e,{color:"secondary"},{default:a(()=>[i]),_:1}),s(e,{color:"success"},{default:a(()=>[y]),_:1}),s(e,{color:"info"},{default:a(()=>[g]),_:1}),s(e,{color:"warning"},{default:a(()=>[h]),_:1}),s(e,{color:"danger"},{default:a(()=>[_]),_:1}),s(e,{color:"gold"},{default:a(()=>[u]),_:1})]),_:1}),C,s(o,{class:"gap-4"},{default:a(()=>[s(e,null,{default:a(()=>[A]),_:1}),s(e,{variant:"light"},{default:a(()=>[b]),_:1}),s(e,{variant:"inverse"},{default:a(()=>[v]),_:1})]),_:1}),f])}}});export{B as __pageData,V as default};
