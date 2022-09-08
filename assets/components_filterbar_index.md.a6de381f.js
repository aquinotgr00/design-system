import{D as k}from"./chunks/Dropdown.ee4dd5e9.js";import{B as P}from"./chunks/Button.35c66a38.js";import{C as O}from"./chunks/Caption.561bbd86.js";import{p as I}from"./chunks/Radio.8d354873.js";import{u as U}from"./chunks/adapter.995c1570.js";import{u as E}from"./chunks/use-input.d0cb73a2.js";import{i as N}from"./chunks/value.27565d8f.js";import{d as _,r as T,c as $,_ as g,g as F,a as r,l as A,i as p,k as y,t as d,h as D,b as C,N as B,M as f,n as S,e as w,Y as R,m as M,j as v,u as h}from"./app.5d60bad4.js";import{u as J}from"./chunks/use-checkbox.2d800ddc.js";import{B as Y}from"./chunks/Badge.7b6645bc.js";import{C as z}from"./chunks/Checkbox.5dffd9c7.js";import{C as L,i as G,f as H}from"./chunks/Calendar.1401168b.js";import{d as K}from"./chunks/defu.087119af.js";import{s as Q}from"./chunks/startCase.2ba40b83.js";import"./chunks/index.ee3a225e.js";import"./chunks/utils-6ba05f5b.063d2e00.js";import"./chunks/16.e992ae0e.js";import"./chunks/16.16fc687d.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.3b169d2d.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.cf94739c.js";import"./chunks/20.db498aa8.js";import"./chunks/isSymbol.c5543846.js";const W=_({components:{Caption:O,Dropdown:k,Radio:I},props:{schema:{type:Object,required:!0},options:{type:Array,default:()=>[]},modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const a=U(s),e=T(!1),t=E(s),c=$(()=>a.value.find(l=>N(l.value,t.value)));function i(){e.value=!1}return{model:t,items:a,isOpen:e,selected:c,close:i}}});function X(s,a,e,t,c,i){const l=F("Caption"),n=F("Radio"),u=F("Dropdown");return r(),A(u,{modelValue:s.isOpen,"onUpdate:modelValue":a[1]||(a[1]=o=>s.isOpen=o),variant:"input",class:S(["filterbar__select",{"filterbar--active":s.selected!==void 0}]),caret:""},{"button-content":p(()=>[y(d(s.selected?s.selected.text:s.schema.label),1)]),default:p(()=>[D(l,{class:"px-3 py-2",bold:""},{default:p(()=>[y(d(s.schema.label),1)]),_:1}),(r(!0),C(f,null,B(s.items,(o,m)=>(r(),A(n,{key:m,modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=q=>s.model=q),apperance:"option",value:o.value,onClick:s.close},{default:p(()=>[y(d(o.text),1)]),_:2},1032,["modelValue","value","onClick"]))),128))]),_:1},8,["modelValue","class"])}const Z=g(W,[["render",X]]),x=_({components:{Button:P},props:{schema:{type:Object,required:!0},modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:!1},value:{type:[String,Number,Boolean,Array,Object,Date],default:!0},uncheckedValue:{type:[String,Number,Boolean,Array,Object,Date],default:!1},checked:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change"],setup(s){const a=J(s);function e(){a.value=!a.value}return{model:a,toggle:e}}});function ss(s,a,e,t,c,i){const l=F("Button");return r(),A(l,{class:S(["filterbar__item filterbar--pinned",{"filterbar--active":s.model}]),variant:"input",onClick:s.toggle},{default:p(()=>[y(d(s.schema.label),1)]),_:1},8,["class","onClick"])}const as=g(x,[["render",ss]]),ns=_({components:{Badge:Y,Caption:O,Dropdown:k,Checkbox:z},props:{schema:{type:Object,required:!0},options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const a=U(s),e=T(!1),t=E(s),c=$(()=>a.value.filter(l=>Array.isArray(t.value)&&t.value.some(n=>N(l.value,n))));function i(){e.value=!1}return{model:t,items:a,isOpen:e,selected:c,close:i}}});function ls(s,a,e,t,c,i){const l=F("Badge"),n=F("Caption"),u=F("Checkbox"),o=F("Dropdown");return r(),A(o,{modelValue:s.isOpen,"onUpdate:modelValue":a[1]||(a[1]=m=>s.isOpen=m),variant:"input",class:S(["filterbar__multiselect-badge",{"filterbar--active":s.selected.length>0}]),caret:""},{"button-content":p(()=>[s.selected.length>1?(r(),C(f,{key:0},[y(d(s.schema.label)+": ",1),D(l,{class:"filterbar__multiselect-badge"},{default:p(()=>[y(d(s.selected.length),1)]),_:1})],64)):s.selected.length===1?(r(),C(f,{key:1},[y(d(s.selected.at(0).text),1)],64)):(r(),C(f,{key:2},[y(d(s.schema.label),1)],64))]),default:p(()=>[D(n,{class:"px-3 py-2",bold:""},{default:p(()=>[y(d(s.schema.label),1)]),_:1}),(r(!0),C(f,null,B(s.items,(m,q)=>(r(),A(u,{key:q,modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=j=>s.model=j),apperance:"option",value:m.value},{default:p(()=>[y(d(m.text),1)]),_:2},1032,["modelValue","value"]))),128))]),_:1},8,["modelValue","class"])}const es=g(ns,[["render",ls]]),os=_({components:{Caption:O,Dropdown:k,Calendar:L},props:{schema:{type:Object,required:!0},modelValue:{type:Date,default:void 0},format:{type:String,default:"dd/MM/yyyy"},max:{type:Date,default:void 0},min:{type:Date,default:void 0},mode:{type:String,default:"date"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const a=T(!1),e=E(s),t=$(()=>G(e.value)?H(e.value,s.format):"");function c(){a.value=!1}return{model:e,value:t,isOpen:a,close:c}}});function ps(s,a,e,t,c,i){const l=F("Caption"),n=F("Calendar"),u=F("Dropdown");return r(),A(u,{modelValue:s.isOpen,"onUpdate:modelValue":a[1]||(a[1]=o=>s.isOpen=o),variant:"input",class:S(["filterbar__date",{"filterbar--active":!!s.value}]),caret:""},{"button-content":p(()=>[y(d(s.value?s.value:s.schema.label),1)]),default:p(()=>[D(l,{class:"px-3 py-2",bold:""},{default:p(()=>[y(d(s.schema.label),1)]),_:1}),D(n,{modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=o=>s.model=o),min:s.min,max:s.max,mode:s.mode,onChange:s.close},null,8,["modelValue","min","max","mode","onChange"])]),_:1},8,["modelValue","class"])}const ts=g(os,[["render",ps]]),rs=_({components:{Button:P,Dropdown:k,Date:ts,Select:Z,Multiselect:es,Toggle:as},props:{schema:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>({})}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const a=E(s),e=$(()=>s.schema.filter(l=>l.pinned!==!1));function t(l){return a.value[l]}function c(l,n){a.value={...a.value,[l]:n}}function i(){a.value=Object.fromEntries(s.schema.map(l=>[l.key,l.default]))}return{model:a,pinnedItems:e,getValue:t,setValue:c,reset:i}}});const cs={class:"filterbar"},Ds=y(" Reset ");function ys(s,a,e,t,c,i){const l=F("Button");return r(),C("div",cs,[(r(!0),C(f,null,B(s.pinnedItems,n=>w(s.$slots,`cell(${n.key})`,{key:n.key},()=>[(r(),A(M(n.type),R({class:"filterbar__item",schema:n,"model-value":s.getValue(n.key)},n,{"onUpdate:modelValue":u=>s.setValue(n.key,u)}),null,16,["schema","model-value","onUpdate:modelValue"]))])),128)),D(l,{variant:"link",onClick:s.reset},{default:p(()=>[Ds]),_:1},8,["onClick"])])}const b=g(rs,[["render",ys]]);function V(s){return s.map(a=>K(a,{label:Q(a.key),pinned:!0}))}const Fs=v('<h1 id="filterbar" tabindex="-1">Filterbar <a class="header-anchor" href="#filterbar" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h3>',3),is=v(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-filterbar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">schema</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">schema</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/filterbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> query  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineFilter</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">toggle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">is_active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">created_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type   </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Draft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Pending</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Completed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><h3 id="toggle" tabindex="-1"><code>toggle</code> <a class="header-anchor" href="#toggle" aria-hidden="true">#</a></h3>`,3),us=v(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-filterbar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">schema</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">schema</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/filterbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineFilter</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">toggle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">is_active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="select" tabindex="-1"><code>select</code> <a class="header-anchor" href="#select" aria-hidden="true">#</a></h3>`,2),ds=v(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-filterbar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">schema</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">schema</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/filterbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineFilter</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type   </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">location</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Jakarta</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Bandung</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Yogyakarta</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="multiselect" tabindex="-1"><code>multiselect</code> <a class="header-anchor" href="#multiselect" aria-hidden="true">#</a></h3>`,2),Cs=v(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-filterbar</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">schema</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">schema</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/filterbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineFilter</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type   </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multiselect</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Draft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Pending</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Completed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),Rs=JSON.parse('{"title":"Filterbar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Types","slug":"types","link":"#types","children":[{"level":3,"title":"toggle","slug":"toggle","link":"#toggle","children":[]},{"level":3,"title":"select","slug":"select","link":"#select","children":[]},{"level":3,"title":"multiselect","slug":"multiselect","link":"#multiselect","children":[]}]}],"relativePath":"components/filterbar/index.md"}'),As={name:"components/filterbar/index.md"},Ms=Object.assign(As,{setup(s){const a=T({}),e=V([{type:"toggle",key:"is_active"},{type:"date",key:"created_at"},{type:"multiselect",key:"status",options:["Draft","Pending","Completed"]}]),t=V([{type:"toggle",key:"is_active"}]),c=V([{type:"select",key:"location",options:["Jakarta","Bandung","Yogyakarta"]}]),i=V([{type:"multiselect",key:"status",options:["Draft","Pending","Completed"]}]);return(l,n)=>{const u=F("preview");return r(),C("div",null,[Fs,D(u,null,{default:p(()=>[D(b,{schema:h(e),modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=o=>a.value=o)},null,8,["schema","modelValue"])]),_:1}),is,D(u,null,{default:p(()=>[D(b,{schema:h(t),modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=o=>a.value=o)},null,8,["schema","modelValue"])]),_:1}),us,D(u,null,{default:p(()=>[D(b,{schema:h(c),modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=o=>a.value=o)},null,8,["schema","modelValue"])]),_:1}),ds,D(u,null,{default:p(()=>[D(b,{schema:h(i),modelValue:a.value,"onUpdate:modelValue":n[3]||(n[3]=o=>a.value=o)},null,8,["schema","modelValue"])]),_:1}),Cs])}}});export{Rs as __pageData,Ms as default};
