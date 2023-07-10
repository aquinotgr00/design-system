import{p as I}from"./chunks/Input.b89594d1.js";import{t as k,e as E,s as N}from"./chunks/theme.0ede34c8.js";import{u as R}from"./chunks/use-focus.ae494a4f.js";import{m as w,t as B,r as P,c as v,_ as $,K as T,x as h,p as g,G as O,V as U,H as K,L as G,a2 as F,a5 as D,v as L,M as s,I as r,F as y,z as M,u as C,Y as p,i as j}from"./chunks/framework.d1aba3cb.js";import"./chunks/index.7ec55cbf.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/utils-6ba05f5b.bfd05ad6.js";import"./chunks/index.a3ecab28.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";const z=w({components:{pInput:I},inheritAttrs:!1,props:{modelValue:{type:String,default:""},length:{type:[Number,String],default:5},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","clear"],setup(e,{emit:l}){const d=k("root"),n=E(B(e,"length")),a=P([...e.modelValue.padEnd(n.value)].slice(0,n.value)),c=v(()=>{const t=[];return e.disabled&&t.push("input-pin--disabled"),e.readonly&&t.push("input-pin--readonly"),e.error&&t.push("input-pin--error","state--error"),t}),{next:u,prev:o}=R(d,!1),m=v({get(){return[...e.modelValue.padEnd(n.value)].slice(0,n.value)},set(t){const _=t.map(b=>b||" ").join("").trimEnd();l("update:modelValue",_)}});N(a,m,{deep:!0});function A(t){return a.value.at(t)}function S(t,_){const f=_.target.value;a.value[t]=f,d.value&&(f?u():o())}function V(t){t.target.select()}function q(t){d.value&&!t.target.value.trim()&&o()}function x(t){a.value=[...t.clipboardData.getData("Text")].slice(0,n.value)}return{classNames:c,num:n,localModel:a,getValue:A,setValue:S,onFocus:V,onDelete:q,onPaste:x,nextFocus:u,prevFocus:o}}});function Y(e,l,d,n,a,c){const u=T("p-input");return h(),g("div",{ref:"root","data-testid":"input-pin",class:L(["input-pin",e.classNames])},[(h(!0),g(O,null,U(e.num,o=>(h(),K(u,G({key:o,maxlength:"1"},e.$attrs,{"model-value":e.getValue(o-1),clearable:!1,readonly:e.readonly,disabled:e.disabled,error:e.error,onInput:m=>e.setValue(o-1,m),onFocusPassive:e.onFocus,onKeyup:[F(D(e.onDelete,["stop","prevent"]),["delete"]),F(D(e.prevFocus,["stop","prevent"]),["left"]),F(D(e.nextFocus,["stop","prevent"]),["right"])],onPastePassive:e.onPaste}),null,16,["model-value","readonly","disabled","error","onInput","onFocusPassive","onKeyup","onPastePassive"]))),128))],2)}const i=$(z,[["render",Y]]),H=p('<h1 id="input-pin" tabindex="-1">Input Pin <a class="header-anchor" href="#input-pin" aria-label="Permalink to &quot;Input Pin&quot;">​</a></h1><blockquote><p>One at time input form.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),J=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="number-of-input" tabindex="-1">Number of Input <a class="header-anchor" href="#number-of-input" aria-label="Permalink to &quot;Number of Input&quot;">​</a></h2><p>You can set how many input digit do you want with prop <code>length</code>, default is <code>5</code>.</p>`,3),Q=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h2>`,2),W=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="readonly-state" tabindex="-1">Readonly State <a class="header-anchor" href="#readonly-state" aria-label="Permalink to &quot;Readonly State&quot;">​</a></h2>`,2),X=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="error-state" tabindex="-1">Error State <a class="header-anchor" href="#error-state" aria-label="Permalink to &quot;Error State&quot;">​</a></h2>`,2),Z=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2><p>Like other input, input value can be binding with <code>v-model</code>.</p>`,3),ee=y("p",null,[y("strong",null,"result:")],-1),te={class:"truncate whitespace-pre"},ae=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-pin</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>length</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>5</code></td><td>Number of input</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr><tr><td><code>readonly</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Readonly state</td></tr><tr><td><code>error</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Error state</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>v-model value</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>String</code></td><td>Event when value changed</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><ul><li><a href="/design-system/components/form-group/">Form Group</a></li><li><a href="/design-system/components/input-group/">Input Group</a></li></ul>`,10),_e=JSON.parse('{"title":"Input Password · Components","description":"One at time input form.","frontmatter":{"title":"Input Password · Components","description":"One at time input form."},"headers":[],"relativePath":"components/input-pin/index.md","filePath":"components/input-pin/index.md"}'),se={name:"components/input-pin/index.md"},Fe=Object.assign(se,{setup(e){const l=P("");return(d,n)=>{const a=T("preview");return h(),g("div",null,[H,s(a,null,{default:r(()=>[s(i)]),_:1}),J,s(a,null,{default:r(()=>[s(i,{length:"3"})]),_:1}),Q,s(a,null,{default:r(()=>[s(i,{disabled:""})]),_:1}),W,s(a,null,{default:r(()=>[s(i,{readonly:""})]),_:1}),X,s(a,null,{default:r(()=>[s(i,{error:""})]),_:1}),Z,s(a,null,{default:r(()=>[s(i,{modelValue:C(l),"onUpdate:modelValue":n[0]||(n[0]=c=>j(l)?l.value=c:null)},null,8,["modelValue"])]),_:1}),ee,y("p",null,[y("code",te,M(C(l)||"-"),1)]),ae])}}});export{_e as __pageData,Fe as default};