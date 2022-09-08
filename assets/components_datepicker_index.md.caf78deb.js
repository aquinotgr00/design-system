import{D as f}from"./chunks/Dropdown.ee4dd5e9.js";import{I as A}from"./chunks/Input.fa168785.js";import{C as b,i as T,f as V}from"./chunks/Calendar.1401168b.js";import{u as k}from"./chunks/use-input.d0cb73a2.js";import{u as S}from"./chunks/utils-6ba05f5b.063d2e00.js";import{d as x,r as h,c as m,_ as E,g as y,a as _,l as M,i as t,h as a,n as P,b as I,f as D,t as q,j as p,k as g}from"./app.5d60bad4.js";import{B as w}from"./chunks/Banner.2f712e41.js";import"./chunks/index.ee3a225e.js";import"./chunks/Button.35c66a38.js";import"./chunks/16.e992ae0e.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.6c1d985a.js";import"./chunks/20.db498aa8.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.2abc7aac.js";import"./chunks/16.5f0f6165.js";var N=S,v=N.createSVGComponent(v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"}}]),R=v;const B=R,U=x({components:{Dropdown:f,Input:A,Calendar:b,IconCalendar:B},props:{modelValue:{type:Date,default:void 0},placeholder:{type:String,default:""},format:{type:String,default:"dd/MM/yyyy"},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},max:{type:Date,default:void 0},min:{type:Date,default:void 0},mode:{type:String,default:"date"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["change","update:modelValue"],setup(e,{emit:s}){const r=k(e),l=h(!1),n=m(()=>T(r.value)?V(r.value,e.format):""),i=m(()=>{const c=[];return l.value&&c.push("datepicker--open"),e.disabled&&c.push("datepicker--disabled"),e.readonly&&c.push("datepicker--readonly"),c});function d(){!e.disabled&&!e.readonly&&(l.value=!0)}function F(c){l.value=!1,s("change",c)}return{isOpen:l,classNames:i,model:r,value:n,onFocus:d,onSelected:F}}});function O(e,s,r,l,n,i){const d=y("Input"),F=y("IconCalendar"),c=y("Calendar"),C=y("Dropdown");return _(),M(C,{modelValue:e.isOpen,"onUpdate:modelValue":s[1]||(s[1]=u=>e.isOpen=u),class:P(["datepicker",e.classNames]),"data-testid":"datepicker","aria-label":"datepicker",disabled:e.disabled},{activator:t(()=>[a(d,{value:e.value,"model-value":e.value,"data-testid":"datepicker-input",class:"datepicker__input",placeholder:e.placeholder,disabled:e.disabled,readonly:"",onFocus:e.onFocus},null,8,["value","model-value","placeholder","disabled","onFocus"]),a(F,{class:"datepicker__icon"})]),default:t(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":s[0]||(s[0]=u=>e.model=u),disabled:e.disabled,readonly:e.readonly,max:e.max,min:e.min,mode:e.mode,class:"datepicker__calendar",onChange:e.onSelected},null,8,["modelValue","disabled","readonly","max","min","mode","onChange"])]),_:1},8,["modelValue","class","disabled"])}const o=E(U,[["render",O]]),$=p('<h1 id="datepicker" tabindex="-1">Datepicker <a class="header-anchor" href="#datepicker" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h3>',3),j=p(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="placeholder" tabindex="-1">Placeholder <a class="header-anchor" href="#placeholder" aria-hidden="true">#</a></h2><p>You can set input placeholder via <code>placeholder</code> props</p>`,3),z=p(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pick A Date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="display-format" tabindex="-1">Display Format <a class="header-anchor" href="#display-format" aria-hidden="true">#</a></h2><p>You can date via prop <code>format</code>. default is <code>dd/MM/yyyy</code></p>`,3),H=D("strong",null,"Please note",-1),L=g(", this component internally use "),Y=D("b",null,"date-fns",-1),J=g(" for date formatting. The format tokens differ from Moment.js. See: "),G=D("a",{href:"https://date-fns.org/docs/format",target:"_blank"},"date-fns",-1),K=p(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yyyy-MM-dd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="limiting-date" tabindex="-1">Limiting Date <a class="header-anchor" href="#limiting-date" aria-hidden="true">#</a></h2><p>You can limit the date via <code>min</code> or <code>max</code> props</p>`,3),Q=p(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- Limit 1 Jan - 31 Dec 2022 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">min</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">new </span><span style="color:#82AAFF;">Date</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">new </span><span style="color:#82AAFF;">Date</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="mode-variant" tabindex="-1">Mode Variant <a class="header-anchor" href="#mode-variant" aria-hidden="true">#</a></h2><p>There 3 available mode: <code>date</code> , <code>month</code>, <code>year</code>. default is <code>date</code>. it will limit user input the date.</p><p>for example, mode <code>month</code> make user can only select the month, but can&#39;t select what spesific date.</p>`,4),W=p(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dd MMM yyyy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MMM yyyy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">month</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yyyy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-hidden="true">#</a></h2>`,2),X=p(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="readonly-state" tabindex="-1">Readonly state <a class="header-anchor" href="#readonly-state" aria-hidden="true">#</a></h2>`,2),Z=p(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-hidden="true">#</a></h2>`,2),ee=p(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-vmodel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Result :</strong></p>`,2),ae={class:"max-w-full truncate"},se=p('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;"><code>-</code></td><td><code>v-model</code> value</td></tr><tr><td><code>placeholder</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Input placeholder</td></tr><tr><td><code>format</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>dd/MM/yyyy</code></td><td>Date format</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr><tr><td><code>readonly</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Readonly state</td></tr><tr><td><code>mode</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Calendar mode valid value: <code>date</code>, <code>month</code>, <code>year</code></td></tr><tr><td><code>max</code></td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;"><code>-</code></td><td>Maximum date can be selected</td></tr><tr><td><code>min</code></td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;"><code>-</code></td><td>Minimum date can be selected</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td>Native Date object</td><td>Event when date selected</td></tr></tbody></table>',7),_e=JSON.parse('{"title":"Datepicker","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Placeholder","slug":"placeholder","link":"#placeholder","children":[]},{"level":2,"title":"Display Format","slug":"display-format","link":"#display-format","children":[]},{"level":2,"title":"Limiting Date","slug":"limiting-date","link":"#limiting-date","children":[]},{"level":2,"title":"Mode Variant","slug":"mode-variant","link":"#mode-variant","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly state","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/datepicker/index.md"}'),le={name:"components/datepicker/index.md"},ge=Object.assign(le,{setup(e){const s=h();return(r,l)=>{var i;const n=y("preview");return _(),I("div",null,[$,a(n,null,{default:t(()=>[a(o,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=d=>s.value=d)},null,8,["modelValue"])]),_:1}),j,a(n,null,{default:t(()=>[a(o,{placeholder:"Pick A Date"})]),_:1}),z,a(w,null,{default:t(()=>[H,L,Y,J,G]),_:1}),a(n,null,{default:t(()=>[a(o,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=d=>s.value=d),format:"yyyy-MM-dd"},null,8,["modelValue"])]),_:1}),K,a(n,null,{default:t(()=>[a(o,{min:new Date(2022,0,1),max:new Date(2022,11,31)},null,8,["min","max"])]),_:1}),Q,a(n,{class:"flex-col items-center gap-2"},{default:t(()=>[a(o,{format:"dd MMM yyyy",mode:"date"}),a(o,{format:"MMM yyyy",mode:"month"}),a(o,{format:"yyyy",mode:"year"})]),_:1}),W,a(n,{class:"flex-col items-center gap-2"},{default:t(()=>[a(o,{disabled:""})]),_:1}),X,a(n,null,{default:t(()=>[a(o,{readonly:""})]),_:1}),Z,a(n,null,{default:t(()=>[a(o,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=d=>s.value=d)},null,8,["modelValue"])]),_:1}),ee,D("pre",ae,[D("code",null,q((i=s.value)!=null?i:"-"),1)]),se])}}});export{_e as __pageData,ge as default};
