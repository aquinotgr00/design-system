import{d as r,c as u,_ as h,a as i,b as d,e as _,n as g,g as t,h as s,i as l,j as k,k as p}from"./app.ef643c2a.js";const b=r({props:{bold:{type:Boolean,default:!1}},setup(a){return{classNames:u(()=>{const e=["caption"];return a.bold&&e.push("caption--bold"),e})}}});function f(a,c,e,n,S,P){return i(),d("span",{"data-testid":"caption",class:g(a.classNames)},[_(a.$slots,"default")],2)}var o=h(b,[["render",f]]);const v=l('<h1 id="caption" tabindex="-1">Caption <a class="header-anchor" href="#caption" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',3),m=p(" Any caption should here "),C=l(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Caption</span><span class="token punctuation">&gt;</span></span>
    Any caption should here
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Caption</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="bold" tabindex="-1">Bold <a class="header-anchor" href="#bold" aria-hidden="true">#</a></h2>`,2),T=p(" Default caption should here "),x=p(" Bold caption should here "),y=l(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Caption</span><span class="token punctuation">&gt;</span></span>
    Default caption should here
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Caption</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Caption</span> <span class="token attr-name">bold</span><span class="token punctuation">&gt;</span></span>
    Bold caption should here
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Caption</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>bold</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Weight of caption, if <code>true</code> caption will turn into bold</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to place in caption</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td colspan="3" class="text-center">There no event here</td></tr></tbody></table>`,8),B='{"title":"Caption","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":2,"title":"Bold","slug":"bold"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"caption/component.md"}',A={},D=Object.assign(A,{setup(a){return(c,e)=>{const n=k("preview");return i(),d("div",null,[v,t(n,null,{default:s(()=>[t(o,null,{default:s(()=>[m]),_:1})]),_:1}),C,t(n,{class:"flex-col"},{default:s(()=>[t(o,null,{default:s(()=>[T]),_:1}),t(o,{bold:""},{default:s(()=>[x]),_:1})]),_:1}),y])}}});export{B as __pageData,D as default};
