import{p as e}from"./chunks/ProgressIndicator.0dc51e5b.js";import{r as i,K as d,p as D,M as s,I as n,F as l,z as h,u as r,Y as a,x as F,i as y}from"./chunks/framework.d1aba3cb.js";import"./chunks/index.06875a09.js";import"./chunks/theme.e6ed61fa.js";import"./chunks/index.1fd353c3.js";const _=a('<h1 id="progress-indicator" tabindex="-1">Progress Indicator <a class="header-anchor" href="#progress-indicator" aria-label="Permalink to &quot;Progress Indicator&quot;">​</a></h1><blockquote><p>Sub-component for Carousel</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),u=a(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-progress-indicator</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="number-of-dots" tabindex="-1">Number of Dots <a class="header-anchor" href="#number-of-dots" aria-label="Permalink to &quot;Number of Dots&quot;">​</a></h2>`,2),g=a(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-progress-indicator</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-progress-indicator</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-progress-indicator</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="vertical-mode" tabindex="-1">Vertical Mode <a class="header-anchor" href="#vertical-mode" aria-label="Permalink to &quot;Vertical Mode&quot;">​</a></h2><p>Set prop <code>direction</code> to <code>vertical</code> to enable Vertical Mode.</p>`,3),m={class:"h-36"},b=a(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-progress-indicator</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">direction</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vertical</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2><p>You can binding current active with v-model</p>`,3),v=a(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-progress-indicator</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>Active :</strong></p>`,2),C=a('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>direction</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>horizontal</code></td><td>Indicator direction, valid values is <code>horizontal</code>, <code>vertical</code></td></tr><tr><td><code>length</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>6</code></td><td>Number of dots</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1</code></td><td>v-model value</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>String</code></td><td>Event when value changed</td></tr></tbody></table>',7),I=JSON.parse('{"title":"Progress Indicator · Components","description":"Sub-component for Carousel.","frontmatter":{"title":"Progress Indicator · Components","description":"Sub-component for Carousel."},"headers":[],"relativePath":"components/progress-indicator/index.md","filePath":"components/progress-indicator/index.md"}'),A={name:"components/progress-indicator/index.md"},E=Object.assign(A,{setup(T){const t=i();return(f,p)=>{const o=d("preview");return F(),D("div",null,[_,s(o,null,{default:n(()=>[s(e)]),_:1}),u,s(o,{class:"flex-col space-y-3"},{default:n(()=>[s(e,{length:"3"}),s(e,{length:"5"}),s(e,{length:"7"})]),_:1}),g,s(o,null,{default:n(()=>[l("div",m,[s(e,{direction:"vertical"})])]),_:1}),b,s(o,null,{default:n(()=>[s(e,{modelValue:r(t),"onUpdate:modelValue":p[0]||(p[0]=c=>y(t)?t.value=c:null)},null,8,["modelValue"])]),_:1}),v,l("pre",null,[l("code",null,h(r(t)),1)]),C])}}});export{I as __pageData,E as default};
