import{d as y,r as x,c as g,w as b,o as A,_ as T,a as m,b as v,e as q,n as k,f as i,g as n,h as w,i as l,u as S}from"./app.210079e1.js";import{u as C}from"./chunks/utils-6ba05f5b.b936c80d.js";var F="/design-system/assets/avatar.fa17e344.png";const d=[["#F2F7FD","#0065D1"],["#F8F8F8","#737373"],["#F4FBF6","#23B242"],["#F2FBFC","#02AEC5"],["#FFFBF4","#F5A623"],["#FEF5F4","#E42E2C"],["#FBFAF2","#B79A00"],["#FEFDF4","#EFD52C"],["#FAFEF5","#A3E635"],["#F3FBFA","#12B89C"],["#F7F2FD","#5E00D1"]];function E(a){let t=0;for(let s=0;s<a.length;++s)t=(t<<5)-t+a.charCodeAt(s)|0;return d.at(Math.abs(t)%d.length)}function I(){return d.at(Math.floor(Math.random()*d.length))}function N(a,t,s,o){return`data:image/svg+xml,<svg height="${t}" width="${t}" xmlns="http://www.w3.org/2000/svg"><rect fill="${encodeURIComponent(s)}" x="0" y="0" height="${t}" width="${t}"></rect><text fill="${encodeURIComponent(o)}" dominant-baseline="central" text-anchor="middle" x="50%" y="50%" font-family="sans-serif" font-weight="600">${encodeURIComponent(a)}</text></svg>`}function h(a=50,t=a){return`data:image/svg+xml,<svg class="lds-spinner" width="${a}" height="${t}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:0 0"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(30 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(60 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(90 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(120 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(150 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(180 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(210 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(240 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(270 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(300 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(330 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/></rect></svg>`}function z(a){return a.split(" ").slice(0,2).map(t=>t.at(0)).join("").toUpperCase()}function V(a,t=50){const s=a?z(a):"\uFF65\u1D17\uFF65",[o,p]=a?E(a):I();return N(s,t,o,p)}function D(){return F}function P(a){return a?new Promise((t,s)=>{const o=new window.Image,p=()=>{u(),t(a)},r=()=>{u(),s(new Error("ERR_FAILED_LOAD_IMAGE"))},u=()=>{o.removeEventListener("load",p),o.removeEventListener("error",r)};o.addEventListener("load",p),o.addEventListener("error",r),o.src=a}):Promise.reject(new Error("ERR_INVALID_IMAGE_SRC"))}const R=y({props:{variant:{type:String},src:{type:String},fallbackSrc:{type:String,default:D()},name:{type:String},size:{type:String,default:"md"},imgClass:{}},emits:["imgloaded","imgerror"],setup(a,{emit:t}){const s=x(h(50)),o=g(()=>{const c=["avatar"];return a.size&&c.push(`avatar--${a.size}`),c}),p=g(()=>a.variant?a.variant:!a.src&&a.name?"alias":"image");function r(){p.value==="alias"?f():u()}function u(){s.value=h(50),P(a.src).then(c=>{s.value=c,t("imgloaded",c)}).catch(c=>{s.value=a.fallbackSrc,t("imgerror",c)})}function f(){s.value=V(a.name)}return b(()=>[a.src,a.name,a.variant],()=>{r()}),A(()=>{r()}),{classNames:o,type:p,imageSrc:s}}}),U=["data-type","src"];function $(a,t,s,o,p,r){return m(),v("div",{"data-testid":"avatar",class:k(a.classNames)},[q(a.$slots,"default",{},()=>[i("img",{"data-testid":"avatar-image",class:k(["avatar__image",a.imgClass]),"data-type":a.type,src:a.imageSrc,alt:"Avatar Image"},null,10,U)])],2)}var e=T(R,[["render",$]]),M=C,_=M.createSVGComponent(_,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M26 14H24v2h2a3.0033 3.0033 0 013 3v4h2V19A5.0058 5.0058 0 0026 14zM24 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 2zM23 30H21V28a3.0033 3.0033 0 00-3-3H14a3.0033 3.0033 0 00-3 3v2H9V28a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM16 13a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0016 11zM8 14H6a5.0059 5.0059 0 00-5 5v4H3V19a3.0033 3.0033 0 013-3H8zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"}}]),B=_,L=B;const j=l('<h1 id="avatar" tabindex="-1">Avatar <a class="header-anchor" href="#avatar" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="using-image" tabindex="-1">Using image <a class="header-anchor" href="#using-image" aria-hidden="true">#</a></h3>',3),H={class:"flex gap-1 mt-3"},O=l(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/50<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="using-alias" tabindex="-1">Using alias <a class="header-anchor" href="#using-alias" aria-hidden="true">#</a></h3>`,2),G={class:"flex gap-1 mt-3"},Y=l(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alias<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tarjono Smith<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="using-icon" tabindex="-1">Using icon <a class="header-anchor" href="#using-icon" aria-hidden="true">#</a></h3>`,2),J={class:"flex gap-1 mt-3"},K=l(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconUser</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> IconUser <span class="token keyword">from</span> <span class="token string">&#39;@carbon/icons-vue/lib/events/20&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="sizing" tabindex="-1">Sizing <a class="header-anchor" href="#sizing" aria-hidden="true">#</a></h2><p>There available 5 size variant: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>. default is <code>md</code></p>`,3),Q={class:"flex gap-1 mt-3"},W=l(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/24<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/32<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/40<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/56<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/96<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="variant" tabindex="-1">Variant <a class="header-anchor" href="#variant" aria-hidden="true">#</a></h2><p>Avatar has 2 style variant: <code>image</code> and <code>alias</code></p>`,3),X={class:"flex gap-1 mt-3"},Z=l(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/40<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alias<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tarjono Smith<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="auto-detect-variant" tabindex="-1">Auto-detect variant <a class="header-anchor" href="#auto-detect-variant" aria-hidden="true">#</a></h3><p>If prop <code>variant</code> not set, it will detect the variant with some caveats:</p><ul><li>if <code>src</code> is provided, it will use <code>image</code></li><li>if <code>name</code> is provided, it will use <code>alias</code></li><li>Otherwise, it will use <code>image</code></li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- This will use \`image\` --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://picsum.photos/40<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- This will use \`alias\` --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tarjono Smith<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- This will use \`image\` --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>Result</strong>:</p>`,6),aa={class:"flex gap-1 mt-3"},ta=l('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>image</code></td><td>Avatar type variant, valid value: <code>avatar</code>, <code>alias</code>. default value is determine by some caveats, see <a href="#auto-detect-variant">this</a></td></tr><tr><td><code>src</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">-</td><td>Image URL, <strong>required if using variant <code>image</code></strong></td></tr><tr><td><code>fallbackSrc</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">-</td><td>Fallback image url for broken link</td></tr><tr><td><code>name</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">-</td><td>Avatar name which would be generate into alias, <strong>required if using variant <code>alias</code></strong></td></tr><tr><td><code>size</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>md</code></td><td>Avatar size, valid value: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></td></tr><tr><td><code>imgClass</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">-</td><td>Additional class for image element</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to replace default avatar image element</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>imgloaded</code></td><td>Image URL</td><td>Event when image loaded</td></tr><tr><td><code>imgerror</code></td><td>Error</td><td>Event when image fail to load</td></tr></tbody></table>',7),oa='{"title":"Avatar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Using image","slug":"using-image"},{"level":3,"title":"Using alias","slug":"using-alias"},{"level":3,"title":"Using icon","slug":"using-icon"},{"level":2,"title":"Sizing","slug":"sizing"},{"level":2,"title":"Variant","slug":"variant"},{"level":3,"title":"Auto-detect variant","slug":"auto-detect-variant"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"avatar/component.md"}',sa={},pa=Object.assign(sa,{setup(a){return(t,s)=>(m(),v("div",null,[j,i("div",H,[n(e,{src:"https://picsum.photos/50"})]),O,i("div",G,[n(e,{variant:"alias",name:"Tarjono Smith"})]),Y,i("div",J,[n(e,null,{default:w(()=>[n(S(L))]),_:1})]),K,i("div",Q,[n(e,{src:"https://picsum.photos/24",size:"xs"}),n(e,{src:"https://picsum.photos/32",size:"sm"}),n(e,{src:"https://picsum.photos/40",size:"md"}),n(e,{src:"https://picsum.photos/56",size:"lg"}),n(e,{src:"https://picsum.photos/96",size:"xl"})]),W,i("div",X,[n(e,{variant:"image",src:"https://picsum.photos/40"}),n(e,{variant:"alias",name:"Tarjono Smith"})]),Z,i("div",aa,[n(e,{variant:"image",src:"https://picsum.photos/40"}),n(e,{variant:"alias",name:"Tarjono Smith"}),n(e)]),ta]))}});export{oa as __pageData,pa as default};
