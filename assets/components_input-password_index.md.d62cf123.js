import{p as a}from"./chunks/InputPassword.21c64a29.js";import{h as d,B as i,o as D,c as y,D as s,z as l,x as o,t as F,b as r,Q as e,a4 as u}from"./chunks/framework.76afac0a.js";import"./chunks/Input.b10f36db.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.c13e464c.js";import"./chunks/index.66044519.js";import"./chunks/index.d997e305.js";import"./chunks/utils-6ba05f5b.d8ec137d.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/index.a3ecab28.js";import"./chunks/16.2ea89be4.js";const h=e('<h1 id="input-password" tabindex="-1">Input Password <a class="header-anchor" href="#input-password" aria-label="Permalink to &quot;Input Password&quot;">​</a></h1><blockquote><p>Base password-input form.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),_=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="sizing" tabindex="-1">Sizing <a class="header-anchor" href="#sizing" aria-label="Permalink to &quot;Sizing&quot;">​</a></h2>`,2),g=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">md</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h2>`,2),m=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="readonly-state" tabindex="-1">Readonly State <a class="header-anchor" href="#readonly-state" aria-label="Permalink to &quot;Readonly State&quot;">​</a></h2>`,2),b=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="error-state" tabindex="-1">Error State <a class="header-anchor" href="#error-state" aria-label="Permalink to &quot;Error State&quot;">​</a></h2>`,2),C=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="clearable" tabindex="-1">Clearable <a class="header-anchor" href="#clearable" aria-label="Permalink to &quot;Clearable&quot;">​</a></h2>`,2),A=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">clearable</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2><p>Like other input, input value can be binding with <code>v-model</code>.</p>`,3),v=o("p",null,[o("strong",null,"result:")],-1),T={class:"truncate"},S=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-input-password</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>size</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>md</code></td><td>Input size variant, valid value: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code></td></tr><tr><td><code>placeholder</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Input placeholder</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr><tr><td><code>readonly</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Readonly state</td></tr><tr><td><code>error</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Error state</td></tr><tr><td><code>clearable</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Enable clear button</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>v-model value</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>String</code></td><td>Event when value changed</td></tr><tr><td><code>clear</code></td><td><code>-</code></td><td>Event when clear button clicked</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><ul><li><a href="/design-system/components/input/">Input</a></li><li><a href="/design-system/components/input-group/">Input Group</a></li><li><a href="/design-system/components/strengthbar/">Strengthbar</a></li></ul>`,10),U=JSON.parse('{"title":"Input Password · Components","description":"Base password-input form.","frontmatter":{"title":"Input Password · Components","description":"Base password-input form."},"headers":[],"relativePath":"components/input-password/index.md"}'),f={name:"components/input-password/index.md"},O=Object.assign(f,{setup(x){const n=d();return(P,p)=>{const t=i("preview");return D(),y("div",null,[h,s(t,null,{default:l(()=>[s(a)]),_:1}),_,s(t,{class:"flex-col space-y-3"},{default:l(()=>[s(a,{size:"xs"}),s(a,{size:"sm"}),s(a,{size:"md"}),s(a,{size:"lg"})]),_:1}),g,s(t,{class:"flex-col space-y-3"},{default:l(()=>[s(a,{disabled:""})]),_:1}),m,s(t,{class:"flex-col space-y-3"},{default:l(()=>[s(a,{readonly:""})]),_:1}),b,s(t,{class:"flex-col space-y-3"},{default:l(()=>[s(a,{error:""})]),_:1}),C,s(t,null,{default:l(()=>[s(a,{clearable:""})]),_:1}),A,s(t,null,{default:l(()=>[s(a,{modelValue:r(n),"onUpdate:modelValue":p[0]||(p[0]=c=>u(n)?n.value=c:null)},null,8,["modelValue"])]),_:1}),v,o("pre",T,[o("code",null,F(r(n)||"-"),1)]),S])}}});export{U as __pageData,O as default};
