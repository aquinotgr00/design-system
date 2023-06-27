import{D as P}from"./chunks/Dropdown.b90a656b.js";import{p as V}from"./chunks/Input.e1d0f6fd.js";import{C as I,f as v,i as M,s as R,e as N,a as w}from"./chunks/Calendar.5816cc78.js";import{u as B}from"./chunks/index.ce054078.js";import{_ as E,x as f,p as S,F as n,m as U,r as _,c as q,K as h,H as Y,I as l,M as e,v as O,z as A,u as d,Y as r,y as x,i as m}from"./chunks/framework.91e0efa6.js";import{p as $}from"./chunks/Banner.7b9576c3.js";import"./chunks/theme.96d0fdcb.js";import"./chunks/Button.fd2868e0.js";import"./chunks/index.a3ecab28.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.b41e9581.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/utils-6ba05f5b.79940067.js";import"./chunks/use-focus.ae494a4f.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/floating-ui.dom.browser.min.b27d3e90.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.22f10ce6.js";import"./chunks/16.b52b2cd6.js";import"./chunks/Heading.bfca30db.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/context.46407538.js";import"./chunks/defu.573334b8.js";import"./chunks/baseSlice.cf92e063.js";import"./chunks/isIterateeCall.05518614.js";import"./chunks/eq.83a0dc05.js";import"./chunks/isArrayLike.740cb4e2.js";import"./chunks/toInteger.cccd26ae.js";import"./chunks/20.09cadfea.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.4ed993c7.js";const H={},L={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",class:"persona-icon"},j=n("path",{fill:"currentColor",d:"M5.816 1.5c0-.276-.218-.5-.488-.5a.494.494 0 0 0-.488.5v.868h-.848C2.616 2.368 1.5 3.511 1.5 4.921v7.526C1.5 13.857 2.616 15 3.992 15h8.016c1.376 0 2.492-1.143 2.492-2.553V4.921c0-1.41-1.116-2.553-2.492-2.553h-.848V1.5c0-.276-.219-.5-.488-.5a.494.494 0 0 0-.488.5v.868H5.816V1.5Zm7.708 4.29H2.476V4.92c0-.857.679-1.553 1.516-1.553h.848v.869c0 .276.219.5.488.5.27 0 .488-.224.488-.5v-.869h4.368v.869c0 .276.218.5.488.5s.488-.224.488-.5v-.869h.848c.837 0 1.516.696 1.516 1.553v.868Zm-11.048 1h11.048v5.657c0 .858-.679 1.553-1.516 1.553H3.992c-.837 0-1.516-.695-1.516-1.553V6.79Z"},null,-1),Z=[j];function z(a,t){return f(),S("svg",L,Z)}const J=E(H,[["render",z]]),K=U({components:{Dropdown:P,Input:V,Calendar:I,IconCalendar:J},props:{modelValue:{type:[Date,Array],default:void 0},start:{type:Date,default:void 0},end:{type:Date,default:void 0},placeholder:{type:String,default:""},format:{type:String,default:"dd/MM/yyyy"},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},error:{type:Boolean,default:void 0},max:{type:Date,default:void 0},min:{type:Date,default:void 0},mode:{type:String,default:"date"},range:{type:Boolean,default:!1},minRange:{type:String,default:void 0},maxRange:{type:String,default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["change","update:modelValue","update:start","update:end"],setup(a,{emit:t}){const c=B(a),i=_(!1),F=q(()=>a.range&&Array.isArray(c.value)?`${v(c.value[0],a.format)} - ${v(c.value[1],a.format)}`:M(c.value)?v(c.value,a.format):""),g=q(()=>{const s=[];return i.value&&s.push("datepicker--open"),a.disabled&&s.push("datepicker--disabled"),a.readonly&&s.push("datepicker--readonly"),a.error&&s.push("datepicker--error","state--error"),s});function u(){!a.disabled&&!a.readonly&&(i.value=!0)}function C(s){i.value=!1,t("change",s)}return{isOpen:i,classNames:g,model:c,value:F,onFocus:u,onSelected:C}}});function G(a,t,c,i,F,g){const u=h("IconCalendar"),C=h("Input"),s=h("Calendar"),o=h("Dropdown");return f(),Y(o,{modelValue:a.isOpen,"onUpdate:modelValue":t[3]||(t[3]=y=>a.isOpen=y),class:O(["datepicker",a.classNames]),"data-testid":"datepicker","aria-label":"datepicker",disabled:a.disabled},{activator:l(()=>[e(C,{value:a.value,"model-value":a.value,"data-testid":"datepicker-input",class:"datepicker__input",placeholder:a.placeholder,disabled:a.disabled,readonly:"",onFocus:a.onFocus},{append:l(()=>[e(u,{class:"datepicker__icon"})]),_:1},8,["value","model-value","placeholder","disabled","onFocus"])]),default:l(()=>[e(s,{modelValue:a.model,"onUpdate:modelValue":t[0]||(t[0]=y=>a.model=y),start:a.start,end:a.end,disabled:a.disabled,readonly:a.readonly,max:a.max,min:a.min,mode:a.mode,range:a.range,"min-range":a.minRange,"max-range":a.maxRange,class:"datepicker__calendar",onChange:a.onSelected,"onUpdate:start":t[1]||(t[1]=y=>a.$emit("update:start",y)),"onUpdate:end":t[2]||(t[2]=y=>a.$emit("update:end",y))},null,8,["modelValue","start","end","disabled","readonly","max","min","mode","range","min-range","max-range","onChange"])]),_:1},8,["modelValue","class","disabled"])}const p=E(K,[["render",G]]),Q=r('<h1 id="datepicker" tabindex="-1">Datepicker <a class="header-anchor" href="#datepicker" aria-label="Permalink to &quot;Datepicker&quot;">​</a></h1><blockquote><p>Base input type date</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),W=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="placeholder" tabindex="-1">Placeholder <a class="header-anchor" href="#placeholder" aria-label="Permalink to &quot;Placeholder&quot;">​</a></h2><p>You can set input placeholder via <code>placeholder</code> props</p>`,3),X=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pick A Date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="display-format" tabindex="-1">Display Format <a class="header-anchor" href="#display-format" aria-label="Permalink to &quot;Display Format&quot;">​</a></h2><p>You can date via prop <code>format</code>. default is <code>dd/MM/yyyy</code></p>`,3),aa=n("strong",null,"Please note",-1),ea=n("b",null,"date-fns",-1),sa=n("a",{href:"https://date-fns.org/docs/format",target:"_blank"},"date-fns",-1),ta=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yyyy-MM-dd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="limiting-date" tabindex="-1">Limiting Date <a class="header-anchor" href="#limiting-date" aria-label="Permalink to &quot;Limiting Date&quot;">​</a></h2><p>You can limit the date via <code>min</code> or <code>max</code> props</p>`,3),na=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Limit this year only --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:min</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">min</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">max</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">startOfYear</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endOfYear</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">date-fns</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> min </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">startOfYear</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">endOfYear</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="mode-variant" tabindex="-1">Mode Variant <a class="header-anchor" href="#mode-variant" aria-label="Permalink to &quot;Mode Variant&quot;">​</a></h2><p>There 3 available mode: <code>date</code> , <code>month</code>, <code>year</code>. default is <code>date</code>. it will limit user input the date.</p><p>for example, mode <code>month</code> make user can only select the month, but can&#39;t select what spesific date.</p>`,4),la=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dd MMM yyyy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MMM yyyy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">month</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">format</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yyyy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="range-picker" tabindex="-1">Range Picker <a class="header-anchor" href="#range-picker" aria-label="Permalink to &quot;Range Picker&quot;">​</a></h2><p>Set prop <code>range</code> to <code>true</code> to enable date range picker mode.</p>`,3),oa=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">range</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="min-and-max-range" tabindex="-1">Min and Max Range <a class="header-anchor" href="#min-and-max-range" aria-label="Permalink to &quot;Min and Max Range&quot;">​</a></h3><p>You can limit minimal and maximal date range to pick using prop <code>min-range</code> and <code>max-range</code>.</p>`,3),pa=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Limit min 3 days and max 7 days --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">range</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">min-range</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">max-range</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>👉 See <a href="/design-system/components/calendar/#min-and-max-range-format">here</a> to more information about range format value.</p><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h2>`,3),ra=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="readonly-state" tabindex="-1">Readonly state <a class="header-anchor" href="#readonly-state" aria-label="Permalink to &quot;Readonly state&quot;">​</a></h2>`,2),ca=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="error-state" tabindex="-1">Error state <a class="header-anchor" href="#error-state" aria-label="Permalink to &quot;Error state&quot;">​</a></h2>`,2),da=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2>`,2),ia=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-vmodel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>Result :</strong></p>`,2),ya={class:"max-w-full truncate"},Da=r('<h3 id="v-model-in-range-mode" tabindex="-1">v-model in range mode <a class="header-anchor" href="#v-model-in-range-mode" aria-label="Permalink to &quot;v-model in range mode&quot;">​</a></h3><p>There are 2 ways to use v-model in <code>range</code> mode.</p><h4 id="_1-using-basic-v-model" tabindex="-1">1. Using basic v-model <a class="header-anchor" href="#_1-using-basic-v-model" aria-label="Permalink to &quot;1. Using basic v-model&quot;">​</a></h4><p>You can use basic <code>v-model</code> to handle date range input, The value will be tuple of Date, <code>[start, end]</code></p>',4),Fa=n("p",null,[n("strong",null,"result:")],-1),ua={class:"truncate"},ma=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">range</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_2-using-v-model-start-and-v-model-end" tabindex="-1">2. using v-model:start and v-model:end <a class="header-anchor" href="#_2-using-v-model-start-and-v-model-end" aria-label="Permalink to &quot;2. using v-model:start and v-model:end&quot;">​</a></h4><p>You can specific binding the value using <code>v-model:start</code> or <code>v-model:end</code></p>`,3),_a=n("p",null,[n("strong",null,"start:")],-1),ha={class:"truncate"},ga=n("p",null,[n("strong",null,"end:")],-1),Ca={class:"truncate"},Aa=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-datepicker</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model:start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model:end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">range</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;"><code>-</code></td><td><code>v-model</code> value</td></tr><tr><td><code>start</code></td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;"><code>-</code></td><td><code>v-model:start</code> value</td></tr><tr><td><code>end</code></td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;"><code>-</code></td><td><code>v-model:end</code> value</td></tr><tr><td><code>placeholder</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Input placeholder</td></tr><tr><td><code>format</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>dd/MM/yyyy</code></td><td>Date format</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr><tr><td><code>readonly</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Readonly state</td></tr><tr><td><code>error</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Error state</td></tr><tr><td><code>mode</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Calendar mode valid value: <code>date</code>, <code>month</code>, <code>year</code></td></tr><tr><td><code>min</code></td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;"><code>-</code></td><td>Minimum date can be selected</td></tr><tr><td><code>max</code></td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;"><code>-</code></td><td>Maximum date can be selected</td></tr><tr><td><code>range</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Enable range picker mode</td></tr><tr><td><code>minRange</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Minimum range date should be selected</td></tr><tr><td><code>maxRange</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Maximum range date should be selected</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td>Native Date object</td><td>Event when date selected</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><ul><li><a href="/design-system/components/calendar/">Calendar</a></li></ul>`,10),se=JSON.parse('{"title":"Datepicker · Components","description":"Base button component","frontmatter":{"title":"Datepicker · Components","description":"Base button component"},"headers":[],"relativePath":"components/datepicker/index.md","filePath":"components/datepicker/index.md"}'),va={name:"components/datepicker/index.md"},te=Object.assign(va,{setup(a){const t=_(),c=_(),i=_(),F=_(),g=R(new Date),u=N(new Date);return w(new Date),(C,s)=>{var y,b,T,k;const o=h("preview");return f(),S("div",null,[Q,e(o,null,{default:l(()=>[e(p)]),_:1}),W,e(o,null,{default:l(()=>[e(p,{placeholder:"Pick A Date"})]),_:1}),X,e($,null,{default:l(()=>[aa,x(", this component internally use "),ea,x(" for date formatting. The format tokens differ from Moment.js. See: "),sa]),_:1}),e(o,null,{default:l(()=>[e(p,{modelValue:d(t),"onUpdate:modelValue":s[0]||(s[0]=D=>m(t)?t.value=D:null),format:"yyyy-MM-dd"},null,8,["modelValue"])]),_:1}),ta,e(o,null,{default:l(()=>[e(p,{min:d(g),max:d(u)},null,8,["min","max"])]),_:1}),na,e(o,{class:"flex-col items-center space-y-2"},{default:l(()=>[e(p,{format:"dd MMM yyyy",mode:"date"}),e(p,{format:"MMM yyyy",mode:"month"}),e(p,{format:"yyyy",mode:"year"})]),_:1}),la,e(o,null,{default:l(()=>[e(p,{range:""})]),_:1}),oa,e(o,null,{default:l(()=>[e(p,{range:"","min-range":"3D","max-range":"7D"})]),_:1}),pa,e(o,{class:"flex-col items-center space-y-2"},{default:l(()=>[e(p,{disabled:""})]),_:1}),ra,e(o,null,{default:l(()=>[e(p,{readonly:""})]),_:1}),ca,e(o,null,{default:l(()=>[e(p,{error:""})]),_:1}),da,e(o,null,{default:l(()=>[e(p,{modelValue:d(t),"onUpdate:modelValue":s[1]||(s[1]=D=>m(t)?t.value=D:null)},null,8,["modelValue"])]),_:1}),ia,n("pre",ya,[n("code",null,A((y=d(t))!=null?y:"-"),1)]),Da,e(o,{class:"flex-col"},{default:l(()=>[e(p,{modelValue:d(c),"onUpdate:modelValue":s[2]||(s[2]=D=>m(c)?c.value=D:null),range:""},null,8,["modelValue"])]),_:1}),Fa,n("pre",ua,[n("code",null,A((b=d(c))!=null?b:"-"),1)]),ma,e(o,{class:"flex-col"},{default:l(()=>[e(p,{start:d(i),"onUpdate:start":s[3]||(s[3]=D=>m(i)?i.value=D:null),end:d(F),"onUpdate:end":s[4]||(s[4]=D=>m(F)?F.value=D:null),range:""},null,8,["start","end"])]),_:1}),_a,n("pre",ha,[n("code",null,A((T=d(i))!=null?T:"-"),1)]),ga,n("pre",Ca,[n("code",null,A((k=d(F))!=null?k:"-"),1)]),Aa])}}});export{se as __pageData,te as default};
