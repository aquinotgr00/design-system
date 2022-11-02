import{u as d}from"./chunks/use-singleton.d64883b2.js";import{_ as y}from"./chunks/Overlay.vue_vue_type_style_index_0_lang.c91875b2.js";import{f as r,o as p,c as i,h as e,t as _,j as u,m as F,r as D,a as s,w as o,b as v,e as m,Y as g,Z as A}from"./app.fdfa60f6.js";import{B as C}from"./chunks/Button.94d8bb99.js";import"./chunks/use-loading.73d32ce8.js";const x={key:0,"data-testid":"overlay",class:"overlay"},w={class:"overlay__icon"},T=["src"];function b(a,t,l,f,h,c){return a.loading?(p(),i("div",x,[e("div",w,[e("img",{src:a.icon,alt:"overlay-icon"},null,8,T)])])):_("",!0)}const n=r(y,[["render",b]]);async function O(){(await d(n)).show()}async function S(){(await d(n)).hide()}const k=a=>(g("data-v-1f45c899"),a=a(),A(),a),I=v('<h1 id="overlay" tabindex="-1" data-v-1f45c899>Overlay <a class="header-anchor" href="#overlay" aria-hidden="true" data-v-1f45c899>#</a></h1><h2 id="usage" tabindex="-1" data-v-1f45c899>Usage <a class="header-anchor" href="#usage" aria-hidden="true" data-v-1f45c899>#</a></h2><h3 id="simple-usage" tabindex="-1" data-v-1f45c899>Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true" data-v-1f45c899>#</a></h3>',3),P=k(()=>e("p",null,[e("strong",null,"Try it:")],-1)),V=v(`<div class="language-ts" data-v-1f45c899><button title="Copy Code" class="copy" data-v-1f45c899></button><span class="lang" data-v-1f45c899>ts</span><pre class="shiki" data-v-1f45c899><code data-v-1f45c899><span class="line" data-v-1f45c899><span style="color:#89DDFF;" data-v-1f45c899>import</span><span style="color:#A6ACCD;" data-v-1f45c899> </span><span style="color:#89DDFF;" data-v-1f45c899>{</span><span style="color:#F07178;" data-v-1f45c899> </span><span style="color:#A6ACCD;" data-v-1f45c899>showOverlay</span><span style="color:#89DDFF;" data-v-1f45c899>,</span><span style="color:#F07178;" data-v-1f45c899> </span><span style="color:#A6ACCD;" data-v-1f45c899>hideOverlay</span><span style="color:#F07178;" data-v-1f45c899> </span><span style="color:#89DDFF;" data-v-1f45c899>}</span><span style="color:#A6ACCD;" data-v-1f45c899> </span><span style="color:#89DDFF;" data-v-1f45c899>from</span><span style="color:#A6ACCD;" data-v-1f45c899> </span><span style="color:#89DDFF;" data-v-1f45c899>&#39;</span><span style="color:#C3E88D;" data-v-1f45c899>@privyid/persona/core</span><span style="color:#89DDFF;" data-v-1f45c899>&#39;</span></span>
<span class="line" data-v-1f45c899></span>
<span class="line" data-v-1f45c899><span style="color:#C792EA;" data-v-1f45c899>function</span><span style="color:#A6ACCD;" data-v-1f45c899> </span><span style="color:#82AAFF;" data-v-1f45c899>onClick</span><span style="color:#A6ACCD;" data-v-1f45c899> </span><span style="color:#89DDFF;" data-v-1f45c899>()</span><span style="color:#A6ACCD;" data-v-1f45c899> </span><span style="color:#89DDFF;" data-v-1f45c899>{</span></span>
<span class="line" data-v-1f45c899><span style="color:#F07178;" data-v-1f45c899>  </span><span style="color:#82AAFF;" data-v-1f45c899>showOverlay</span><span style="color:#F07178;" data-v-1f45c899>()</span></span>
<span class="line" data-v-1f45c899></span>
<span class="line" data-v-1f45c899><span style="color:#F07178;" data-v-1f45c899>  </span><span style="color:#82AAFF;" data-v-1f45c899>setTimeout</span><span style="color:#F07178;" data-v-1f45c899>(</span><span style="color:#89DDFF;" data-v-1f45c899>()</span><span style="color:#F07178;" data-v-1f45c899> </span><span style="color:#C792EA;" data-v-1f45c899>=&gt;</span><span style="color:#F07178;" data-v-1f45c899> </span><span style="color:#89DDFF;" data-v-1f45c899>{</span></span>
<span class="line" data-v-1f45c899><span style="color:#F07178;" data-v-1f45c899>    </span><span style="color:#82AAFF;" data-v-1f45c899>hideOverlay</span><span style="color:#F07178;" data-v-1f45c899>()</span></span>
<span class="line" data-v-1f45c899><span style="color:#F07178;" data-v-1f45c899>  </span><span style="color:#89DDFF;" data-v-1f45c899>},</span><span style="color:#F07178;" data-v-1f45c899> </span><span style="color:#F78C6C;" data-v-1f45c899>3000</span><span style="color:#F07178;" data-v-1f45c899>)</span></span>
<span class="line" data-v-1f45c899><span style="color:#89DDFF;" data-v-1f45c899>}</span></span>
<span class="line" data-v-1f45c899></span></code></pre></div><h2 id="api" tabindex="-1" data-v-1f45c899>API <a class="header-anchor" href="#api" aria-hidden="true" data-v-1f45c899>#</a></h2><h3 id="showoverlay" tabindex="-1" data-v-1f45c899>showOverlay <a class="header-anchor" href="#showoverlay" aria-hidden="true" data-v-1f45c899>#</a></h3><p data-v-1f45c899><code data-v-1f45c899>showOverlay(): Promise&lt;void&gt;</code></p><table data-v-1f45c899><thead data-v-1f45c899><tr data-v-1f45c899><th data-v-1f45c899>Options</th><th style="text-align:center;" data-v-1f45c899>Type</th><th style="text-align:center;" data-v-1f45c899>Default</th><th data-v-1f45c899>Description</th></tr></thead><tbody data-v-1f45c899><tr data-v-1f45c899><td colspan="4" class="text-center" data-v-1f45c899>There no options here</td></tr></tbody></table><h3 id="hideoverlay" tabindex="-1" data-v-1f45c899>hideOverlay <a class="header-anchor" href="#hideoverlay" aria-hidden="true" data-v-1f45c899>#</a></h3><p data-v-1f45c899><code data-v-1f45c899>hideOverlay(): Promise&lt;void&gt;</code></p><table data-v-1f45c899><thead data-v-1f45c899><tr data-v-1f45c899><th data-v-1f45c899>Options</th><th style="text-align:center;" data-v-1f45c899>Type</th><th style="text-align:center;" data-v-1f45c899>Default</th><th data-v-1f45c899>Description</th></tr></thead><tbody data-v-1f45c899><tr data-v-1f45c899><td colspan="4" class="text-center" data-v-1f45c899>There no options here</td></tr></tbody></table><h2 id="see-also" tabindex="-1" data-v-1f45c899>See Also <a class="header-anchor" href="#see-also" aria-hidden="true" data-v-1f45c899>#</a></h2><ul data-v-1f45c899><li data-v-1f45c899><a href="/design-system/components/spinner/index.html" data-v-1f45c899>Spinner</a></li></ul>`,10),J=JSON.parse('{"title":"Overlay","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"showOverlay","slug":"showoverlay","link":"#showoverlay","children":[]},{"level":3,"title":"hideOverlay","slug":"hideoverlay","link":"#hideoverlay","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/overlay/index.md"}'),N={name:"components/overlay/index.md"},E=Object.assign(N,{setup(a){const t=u();function l(){O(),setTimeout(()=>{S()},3e3)}return F(()=>{t.value.show()}),(f,h)=>{const c=D("preview");return p(),i("div",null,[I,s(c,null,{default:o(()=>[s(n,{ref_key:"overlay",ref:t},null,512)]),_:1}),P,e("div",null,[s(C,{onClick:l},{default:o(()=>[m(" Show ")]),_:1})]),V])}}}),M=r(E,[["__scopeId","data-v-1f45c899"]]);export{J as __pageData,M as default};
