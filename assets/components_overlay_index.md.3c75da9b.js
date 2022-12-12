import{u as d}from"./chunks/use-singleton.e98ea11e.js";import{_ as y}from"./chunks/Overlay.vue_vue_type_style_index_0_lang.023ff9bf.js";import{f as r,o as p,c as i,h as e,t as _,j as u,m as F,r as D,a as s,w as b,b as c,e as m,Z as g,$ as A}from"./app.34a3cf55.js";import{p as f}from"./chunks/Button.7ec005f9.js";import"./chunks/use-loading.36ce1176.js";const C={key:0,"data-testid":"overlay",class:"overlay"},x={class:"overlay__icon"},w=["src"];function T(a,t,l,v,h,o){return a.loading?(p(),i("div",C,[e("div",x,[e("img",{src:a.icon,alt:"overlay-icon"},null,8,w)])])):_("",!0)}const n=r(y,[["render",T]]);async function O(){(await d(n)).show()}async function S(){(await d(n)).hide()}const k=a=>(g("data-v-23bb9721"),a=a(),A(),a),I=c('<h1 id="overlay" tabindex="-1" data-v-23bb9721>Overlay <a class="header-anchor" href="#overlay" aria-hidden="true" data-v-23bb9721>#</a></h1><h2 id="usage" tabindex="-1" data-v-23bb9721>Usage <a class="header-anchor" href="#usage" aria-hidden="true" data-v-23bb9721>#</a></h2><h3 id="simple-usage" tabindex="-1" data-v-23bb9721>Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true" data-v-23bb9721>#</a></h3>',3),P=k(()=>e("p",null,[e("strong",null,"Try it:")],-1)),V=c(`<div class="language-ts" data-v-23bb9721><button title="Copy Code" class="copy" data-v-23bb9721></button><span class="lang" data-v-23bb9721>ts</span><pre class="shiki" data-v-23bb9721><code data-v-23bb9721><span class="line" data-v-23bb9721><span style="color:#89DDFF;" data-v-23bb9721>import</span><span style="color:#A6ACCD;" data-v-23bb9721> </span><span style="color:#89DDFF;" data-v-23bb9721>{</span><span style="color:#F07178;" data-v-23bb9721> </span><span style="color:#A6ACCD;" data-v-23bb9721>showOverlay</span><span style="color:#89DDFF;" data-v-23bb9721>,</span><span style="color:#F07178;" data-v-23bb9721> </span><span style="color:#A6ACCD;" data-v-23bb9721>hideOverlay</span><span style="color:#F07178;" data-v-23bb9721> </span><span style="color:#89DDFF;" data-v-23bb9721>}</span><span style="color:#A6ACCD;" data-v-23bb9721> </span><span style="color:#89DDFF;" data-v-23bb9721>from</span><span style="color:#A6ACCD;" data-v-23bb9721> </span><span style="color:#89DDFF;" data-v-23bb9721>&#39;</span><span style="color:#C3E88D;" data-v-23bb9721>@privyid/persona/core</span><span style="color:#89DDFF;" data-v-23bb9721>&#39;</span></span>
<span class="line" data-v-23bb9721></span>
<span class="line" data-v-23bb9721><span style="color:#C792EA;" data-v-23bb9721>function</span><span style="color:#A6ACCD;" data-v-23bb9721> </span><span style="color:#82AAFF;" data-v-23bb9721>onClick</span><span style="color:#A6ACCD;" data-v-23bb9721> </span><span style="color:#89DDFF;" data-v-23bb9721>()</span><span style="color:#A6ACCD;" data-v-23bb9721> </span><span style="color:#89DDFF;" data-v-23bb9721>{</span></span>
<span class="line" data-v-23bb9721><span style="color:#F07178;" data-v-23bb9721>  </span><span style="color:#82AAFF;" data-v-23bb9721>showOverlay</span><span style="color:#F07178;" data-v-23bb9721>()</span></span>
<span class="line" data-v-23bb9721></span>
<span class="line" data-v-23bb9721><span style="color:#F07178;" data-v-23bb9721>  </span><span style="color:#82AAFF;" data-v-23bb9721>setTimeout</span><span style="color:#F07178;" data-v-23bb9721>(</span><span style="color:#89DDFF;" data-v-23bb9721>()</span><span style="color:#F07178;" data-v-23bb9721> </span><span style="color:#C792EA;" data-v-23bb9721>=&gt;</span><span style="color:#F07178;" data-v-23bb9721> </span><span style="color:#89DDFF;" data-v-23bb9721>{</span></span>
<span class="line" data-v-23bb9721><span style="color:#F07178;" data-v-23bb9721>    </span><span style="color:#82AAFF;" data-v-23bb9721>hideOverlay</span><span style="color:#F07178;" data-v-23bb9721>()</span></span>
<span class="line" data-v-23bb9721><span style="color:#F07178;" data-v-23bb9721>  </span><span style="color:#89DDFF;" data-v-23bb9721>},</span><span style="color:#F07178;" data-v-23bb9721> </span><span style="color:#F78C6C;" data-v-23bb9721>3000</span><span style="color:#F07178;" data-v-23bb9721>)</span></span>
<span class="line" data-v-23bb9721><span style="color:#89DDFF;" data-v-23bb9721>}</span></span>
<span class="line" data-v-23bb9721></span></code></pre></div><h2 id="api" tabindex="-1" data-v-23bb9721>API <a class="header-anchor" href="#api" aria-hidden="true" data-v-23bb9721>#</a></h2><h3 id="showoverlay" tabindex="-1" data-v-23bb9721>showOverlay <a class="header-anchor" href="#showoverlay" aria-hidden="true" data-v-23bb9721>#</a></h3><p data-v-23bb9721><code data-v-23bb9721>showOverlay(): Promise&lt;void&gt;</code></p><table data-v-23bb9721><thead data-v-23bb9721><tr data-v-23bb9721><th data-v-23bb9721>Options</th><th style="text-align:center;" data-v-23bb9721>Type</th><th style="text-align:center;" data-v-23bb9721>Default</th><th data-v-23bb9721>Description</th></tr></thead><tbody data-v-23bb9721><tr data-v-23bb9721><td colspan="4" class="text-center" data-v-23bb9721>There no options here</td></tr></tbody></table><h3 id="hideoverlay" tabindex="-1" data-v-23bb9721>hideOverlay <a class="header-anchor" href="#hideoverlay" aria-hidden="true" data-v-23bb9721>#</a></h3><p data-v-23bb9721><code data-v-23bb9721>hideOverlay(): Promise&lt;void&gt;</code></p><table data-v-23bb9721><thead data-v-23bb9721><tr data-v-23bb9721><th data-v-23bb9721>Options</th><th style="text-align:center;" data-v-23bb9721>Type</th><th style="text-align:center;" data-v-23bb9721>Default</th><th data-v-23bb9721>Description</th></tr></thead><tbody data-v-23bb9721><tr data-v-23bb9721><td colspan="4" class="text-center" data-v-23bb9721>There no options here</td></tr></tbody></table><h2 id="see-also" tabindex="-1" data-v-23bb9721>See Also <a class="header-anchor" href="#see-also" aria-hidden="true" data-v-23bb9721>#</a></h2><ul data-v-23bb9721><li data-v-23bb9721><a href="/design-system/components/spinner/index.html" data-v-23bb9721>Spinner</a></li></ul>`,10),J=JSON.parse('{"title":"Overlay","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"showOverlay","slug":"showoverlay","link":"#showoverlay","children":[]},{"level":3,"title":"hideOverlay","slug":"hideoverlay","link":"#hideoverlay","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/overlay/index.md"}'),N={name:"components/overlay/index.md"},$=Object.assign(N,{setup(a){const t=u();function l(){O(),setTimeout(()=>{S()},3e3)}return F(()=>{t.value.show()}),(v,h)=>{const o=D("preview");return p(),i("div",null,[I,s(o,null,{default:b(()=>[s(n,{ref_key:"overlay",ref:t},null,512)]),_:1}),P,e("div",null,[s(f,{onClick:l,color:"primary"},{default:b(()=>[m(" Show ")]),_:1})]),V])}}}),M=r($,[["__scopeId","data-v-23bb9721"]]);export{J as __pageData,M as default};
