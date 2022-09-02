import"./chunks/Input.9ae54692.js";import{u as x}from"./chunks/use-input.83c2ad75.js";import{c as v}from"./chunks/create-image.78cc0c95.js";import{W as q,d as T,r as m,c as h,w as S,o as b,_ as w,a as _,b as f,g as s,h as r,f as g,t as y,i as u,j as I}from"./app.2d74820a.js";import"./chunks/index.b8bbdf5d.js";function C(t){return String(t).toLowerCase().replace(/^\w|([\s,.])(\w)/gm,a=>a.toUpperCase())}function V(t){return t?C(String(t).trim().replace(/[^\s,.A-z]+/g,"")):""}async function L(t){const a=await q(()=>import("./chunks/webfontloader.c7ccf8df.js").then(function(n){return n.w}),[]);return await new Promise((n,e)=>{a.load({google:{families:[t]},fontactive(){n()},fontinactive(){e(new Error("FONTLOADER_TIMEOUT"))}})})}function A(t,a){const n=document.createElement("canvas");return n.width=t,n.height=a,n}async function P(t){await L(t.font);const a=t.text,n=t.width,e=t.height,o=t.color,c=t.font,k=A(n,e),p=k.getContext("2d");p.fillStyle=o,p.font=`100px ${c}`,p.textBaseline="middle";let i=100,d=p.measureText(a);return d.width>n?(i=Math.floor(i/d.width*(n-16)),p.font=`${i}px ${c}`,d=p.measureText(a)):i>=e&&(i=e-16,p.font=`${i}px ${c}`,d=p.measureText(a)),p.fillText(a,(n-d.width)/2,e/2+16),k.toDataURL()}const N=T({props:{modelValue:{type:String,default:void 0},width:{type:Number,default:430},height:{type:Number,default:230},text:{type:String,default:""},limit:{type:Number,default:2},font:{type:String,default:"Herr Von Muellerhoff"},color:{type:String,default:"#000000"}},setup(t){const a=m(!1),n=x(t),e=h(()=>a.value?n.value:v(t.width,t.height)),o=h(()=>t.text?V(String(t.text).split(" ").filter(Boolean).slice(0,t.limit).join(" ")):"- No Image -");S(()=>[t.text,t.font,t.color,t.width,t.height,t.limit],()=>{c()}),b(()=>{c()});function c(){a.value=!1;const k={text:o.value,font:t.font,width:t.width,height:t.height,color:t.color};P(k).then(p=>{n.value=p,a.value=!0}).catch(console.error)}return{src:e}}}),D=["width","height","src"];function E(t,a,n,e,o,c){return _(),f("img",{"data-testid":"signature-text",class:"signature--text",width:t.width,height:t.height,src:t.src},null,8,D)}var l=w(N,[["render",E]]);const R=u('<h1 id="signature-text" tabindex="-1">Signature Text <a class="header-anchor" href="#signature-text" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h3>',3),U=u(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem Ipsum<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="for-initial" tabindex="-1">for Initial <a class="header-anchor" href="#for-initial" aria-hidden="true">#</a></h3>`,2),$=u(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem Ipsum<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>230<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="change-font" tabindex="-1">Change Font <a class="header-anchor" href="#change-font" aria-hidden="true">#</a></h2><p>You can the font using prop <code>font</code>, it importing font from <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Font</a>, default is <code>Herr Von Muellerhoff</code></p>`,3),M=u(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem Ipsum<span class="token punctuation">&quot;</span></span> <span class="token attr-name">font</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Herr Von Muellerhoff<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem Ipsum<span class="token punctuation">&quot;</span></span> <span class="token attr-name">font</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Satisfy<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="limit-word" tabindex="-1">Limit Word <a class="header-anchor" href="#limit-word" aria-hidden="true">#</a></h2><p>Truncate the text by word, default is <code>2</code></p>`,3),B=u(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem ipsum dolor sit amet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem ipsum dolor sit amet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem ipsum dolor sit amet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-hidden="true">#</a></h2>`,2),F=u(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem ipsum<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#004C9D<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem ipsum<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#23B242<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem ipsum<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#E42E2C<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-hidden="true">#</a></h2><p>Result of generated image is store in <code>v-model</code> value. It&#39;s encoded in <a href="https://en.wikipedia.org/wiki/Data_URI_scheme" target="_blank" rel="noopener noreferrer">base64-dataURI</a> format.</p>`,3),H=g("p",null,[g("strong",null,"result")],-1),O={class:"truncate"},j=u(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p-signature-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Lorem ipsum<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>width</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>430</code></td><td>Image&#39;s width</td></tr><tr><td><code>height</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>230</code></td><td>Image&#39;s width</td></tr><tr><td><code>text</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Image&#39;s text</td></tr><tr><td><code>limit</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>2</code></td><td>Maximal word to be generated</td></tr><tr><td><code>font</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>Herr Von Muellerhoff</code></td><td>Text font, imported from <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Font</a></td></tr><tr><td><code>color</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>#000000</code></td><td>Text color</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Result of generated image, in <a href="https://en.wikipedia.org/wiki/Data_URI_scheme" target="_blank" rel="noopener noreferrer">base64-dataURI</a></td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td colspan="3" class="text-center">There no props here</td></tr></tbody></table>`,8),Q='{"title":"Signature Text","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":3,"title":"for Initial","slug":"for-initial"},{"level":2,"title":"Change Font","slug":"change-font"},{"level":2,"title":"Limit Word","slug":"limit-word"},{"level":2,"title":"Color","slug":"color"},{"level":2,"title":"Binding v-model","slug":"binding-v-model"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"signature-text/component.md"}',W={},X=Object.assign(W,{setup(t){const a=m("");return(n,e)=>{const o=I("preview");return _(),f("div",null,[R,s(o,{class:"flex-col"},{default:r(()=>[s(l,{text:"Lorem Ipsum"})]),_:1}),U,s(o,{class:"flex-col"},{default:r(()=>[s(l,{text:"Lorem Ipsum",width:230,limit:1})]),_:1}),$,s(o,{class:"flex-col"},{default:r(()=>[s(l,{text:"Lorem Ipsum",font:"Herr Von Muellerhoff"}),s(l,{text:"Lorem Ipsum",font:"Satisfy"})]),_:1}),M,s(o,{class:"flex-col"},{default:r(()=>[s(l,{text:"Lorem ipsum dolor sit amet",limit:3}),s(l,{text:"Lorem ipsum dolor sit amet",limit:2}),s(l,{text:"Lorem ipsum dolor sit amet",limit:1})]),_:1}),B,s(o,{class:"flex-col"},{default:r(()=>[s(l,{text:"Lorem ipsum",color:"#004C9D"}),s(l,{text:"Lorem ipsum",color:"#23B242"}),s(l,{text:"Lorem ipsum",color:"#E42E2C"})]),_:1}),F,s(o,{class:"flex-col"},{default:r(()=>[s(l,{text:"Lorem ipsum",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=c=>a.value=c)},null,8,["modelValue"])]),_:1}),H,g("pre",O,[g("code",null,y(a.value),1)]),j])}}});export{Q as __pageData,X as default};
