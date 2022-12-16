import{p as x}from"./chunks/Input.568936f2.js";import{t as k}from"./chunks/index.0ae26b57.js";import{u as I}from"./chunks/use-focus.9ded5383.js";import{i as E,C as N,j as f,k as b,f as B,r as C,o as h,c as D,Q as R,R as w,q,a5 as $,a1 as g,n as U,a,w as r,h as y,y as j,b as o}from"./app.12128179.js";import{j as K,s as O}from"./chunks/index.d402bf23.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.7791e277.js";import"./chunks/index.4e1771ed.js";import"./chunks/utils-6ba05f5b.68aa6bf9.js";import"./chunks/toNumber.b7089ae3.js";import"./chunks/isSymbol.467490bf.js";import"./chunks/isObjectLike.bee3dca1.js";const G=E({components:{pInput:x},inheritAttrs:!1,props:{modelValue:{type:String,default:""},length:{type:[Number,String],default:5},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","clear"],setup(e,{emit:p}){const i=k("root"),n=K(N(e,"length")),t=f([...e.modelValue].slice(0,n.value).map(s=>s.trim())),c=b(()=>{const s=[];return e.disabled&&s.push("input-pin--disabled"),e.readonly&&s.push("input-pin--readonly"),e.error&&s.push("input-pin--error","state--error"),s}),{next:u,prev:l}=I(i,!1),_=b({get(){return[...e.modelValue].slice(0,n.value)},set(s){const F=s.map(m=>m||" ").join("").trimEnd();p("update:modelValue",F)}});O(t,_,{deep:!0});function A(s){return t.value.at(s)}function T(s,F){const v=F.target.value;t.value[s]=v,i.value&&(v?u():l())}function S(s){s.target.select()}function P(s){i.value&&!s.target.value&&l()}function V(s){t.value=[...s.clipboardData.getData("Text")].slice(0,n.value)}return{classNames:c,num:n,localModel:t,getValue:A,setValue:T,onFocus:S,onDelete:P,onPaste:V,nextFocus:u,prevFocus:l}}});function L(e,p,i,n,t,c){const u=C("p-input");return h(),D("div",{ref:"root","data-testid":"input-pin",class:U(["input-pin",e.classNames])},[(h(!0),D(R,null,w(e.num,l=>(h(),q(u,$({key:l,maxlength:"1"},e.$attrs,{"model-value":e.getValue(l-1),clearable:!1,readonly:e.readonly,disabled:e.disabled,error:e.error,onInput:_=>e.setValue(l-1,_),onFocusPassive:e.onFocus,onKeyupPassive:[g(e.onDelete,["delete"]),g(e.prevFocus,["left"]),g(e.nextFocus,["right"])],onPastePassive:e.onPaste}),null,16,["model-value","readonly","disabled","error","onInput","onFocusPassive","onKeyupPassive","onPastePassive"]))),128))],2)}const d=B(G,[["render",L]]),z=o('<h1 id="input-pin" tabindex="-1">Input Pin <a class="header-anchor" href="#input-pin" aria-hidden="true">#</a></h1><blockquote><p>One at time input form.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h3>',4),J=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="number-of-input" tabindex="-1">Number of Input <a class="header-anchor" href="#number-of-input" aria-hidden="true">#</a></h2><p>You can set how many input digit do you want with prop <code>length</code>, default is <code>5</code>.</p>`,3),M=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-hidden="true">#</a></h2>`,2),Q=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="readonly-state" tabindex="-1">Readonly State <a class="header-anchor" href="#readonly-state" aria-hidden="true">#</a></h2>`,2),Y=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="error-state" tabindex="-1">Error State <a class="header-anchor" href="#error-state" aria-hidden="true">#</a></h2>`,2),H=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-hidden="true">#</a></h2><p>Like other input, input value can be binding with <code>v-model</code>.</p>`,3),W=y("p",null,[y("strong",null,"result:")],-1),X={class:"truncate"},Z=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="binding-v-model-1" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model-1" aria-hidden="true">#</a></h2><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>length</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>5</code></td><td>Number of input</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr><tr><td><code>readonly</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Readonly state</td></tr><tr><td><code>error</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Error state</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>v-model value</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>String</code></td><td>Event when value changed</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-hidden="true">#</a></h2><ul><li><a href="/design-system/components/form-group/">Form Group</a></li><li><a href="/design-system/components/input-group/">Input Group</a></li></ul>`,11),ue=JSON.parse('{"title":"Input Pin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Number of Input","slug":"number-of-input","link":"#number-of-input","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly State","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Error State","slug":"error-state","link":"#error-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model-1","link":"#binding-v-model-1","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/input-pin/index.md"}'),ee={name:"components/input-pin/index.md"},he=Object.assign(ee,{setup(e){const p=f("");return(i,n)=>{const t=C("preview");return h(),D("div",null,[z,a(t,null,{default:r(()=>[a(d)]),_:1}),J,a(t,null,{default:r(()=>[a(d,{length:"3"})]),_:1}),M,a(t,null,{default:r(()=>[a(d,{disabled:""})]),_:1}),Q,a(t,null,{default:r(()=>[a(d,{readonly:""})]),_:1}),Y,a(t,null,{default:r(()=>[a(d,{error:""})]),_:1}),H,a(t,null,{default:r(()=>[a(d,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=c=>p.value=c)},null,8,["modelValue"])]),_:1}),W,y("pre",X,[y("code",null,j(p.value||"-"),1)]),Z])}}});export{ue as __pageData,he as default};
