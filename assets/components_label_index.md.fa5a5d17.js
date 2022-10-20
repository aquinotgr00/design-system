import{D as h}from"./chunks/Dot.45806b0d.js";import{I as C}from"./chunks/16.d4caf96f.js";import{f as g,g as A,h as m,_ as i,b as v,o as c,c as D,l as f,p as r,r as L,d as a,n as E,k as s,w as e,e as n}from"./app.ee7072c2.js";import"./chunks/utils-6ba05f5b.fea0a609.js";const T=g({components:{Dot:h,IconClose:C},props:{color:{type:String,default:"primary"},variant:{type:String,default:"default"},size:{type:String,default:"md"},dismissable:{type:Boolean,default:!1}},emits:["dismissed"],setup(l,{emit:d}){const b=A(!0),o=m(()=>{const p=["label"];return l.color&&p.push(`label--${l.color}`),l.variant&&p.push(`label--${l.variant}`),l.size&&p.push(`label--${l.size}`),p});function F(){b.value=!1,d("dismissed")}return{classNames:o,show:b,close:F}}});const q=s();function S(l,d,b,o,F,p){const y=v("Dot"),_=v("IconClose");return l.show?(c(),D("div",{key:0,"data-testid":"label",class:E(l.classNames)},[l.variant==="dot"?(c(),f(y,{key:0,"data-testid":"dot",color:l.color},null,8,["color"])):r("",!0),q,L(l.$slots,"default"),l.dismissable?(c(),D("span",{key:1,"data-testid":"label-dismiss",class:"label__dismiss",onClick:d[0]||(d[0]=(...u)=>l.close&&l.close(...u))},[a(_)])):r("",!0)],2)):r("",!0)}const t=i(T,[["render",S]]);const x=n('<h1 id="label" tabindex="-1" data-v-4eb65241>Label <a class="header-anchor" href="#label" aria-hidden="true" data-v-4eb65241>#</a></h1><h2 id="usage" tabindex="-1" data-v-4eb65241>Usage <a class="header-anchor" href="#usage" aria-hidden="true" data-v-4eb65241>#</a></h2><h3 id="basic-usage" tabindex="-1" data-v-4eb65241>Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true" data-v-4eb65241>#</a></h3>',3),z=s("Label"),I=n(`<div class="language-vue" data-v-4eb65241><button title="Copy Code" class="copy" data-v-4eb65241></button><span class="lang" data-v-4eb65241>vue</span><pre data-v-4eb65241><code data-v-4eb65241><span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241></span></code></pre></div><h2 id="colors" tabindex="-1" data-v-4eb65241>Colors <a class="header-anchor" href="#colors" aria-hidden="true" data-v-4eb65241>#</a></h2><p data-v-4eb65241>Label available in 7 different colors. There are <code data-v-4eb65241>primary</code>, <code data-v-4eb65241>secondary</code>, <code data-v-4eb65241>success</code>, <code data-v-4eb65241>info</code>, <code data-v-4eb65241>warning</code>, <code data-v-4eb65241>danger</code> and <code data-v-4eb65241>gold</code>. Default color is <code data-v-4eb65241>primary</code></p>`,3),k=s("Label"),P=s("Label"),V=s("Label"),w=s("Label"),N=s("Label"),$=s("Label"),B=s("Label"),R=n(`<div class="language-vue" data-v-4eb65241><button title="Copy Code" class="copy" data-v-4eb65241></button><span class="lang" data-v-4eb65241>vue</span><pre data-v-4eb65241><code data-v-4eb65241><span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>color</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>primary</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>color</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>secondary</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>color</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>success</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>color</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>info</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>color</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>warning</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>color</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>danger</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>color</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>gold</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241></span></code></pre></div><h2 id="variants" tabindex="-1" data-v-4eb65241>Variants <a class="header-anchor" href="#variants" aria-hidden="true" data-v-4eb65241>#</a></h2><p data-v-4eb65241>Label has 3 variants namely <code data-v-4eb65241>default</code>, <code data-v-4eb65241>light</code> and <code data-v-4eb65241>dot</code>. When variant is not set, label will looks as a <code data-v-4eb65241>default</code></p>`,3),U=s("Label"),O=s("Label"),W=s("Label"),j=n(`<div class="language-vue" data-v-4eb65241><button title="Copy Code" class="copy" data-v-4eb65241></button><span class="lang" data-v-4eb65241>vue</span><pre data-v-4eb65241><code data-v-4eb65241><span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>variant</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>light</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>variant</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>dot</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241></span></code></pre></div><h2 id="sizing" tabindex="-1" data-v-4eb65241>Sizing <a class="header-anchor" href="#sizing" aria-hidden="true" data-v-4eb65241>#</a></h2><p data-v-4eb65241>Label has 4 size, namely <code data-v-4eb65241>lg</code>, <code data-v-4eb65241>md</code>, <code data-v-4eb65241>sm</code> and <code data-v-4eb65241>xs</code>. When size is not set, default label is <code data-v-4eb65241>md</code></p>`,3),H=s("Label"),J=s("Label"),G=s("Label"),K=s("Label"),M=n(`<div class="language-vue" data-v-4eb65241><button title="Copy Code" class="copy" data-v-4eb65241></button><span class="lang" data-v-4eb65241>vue</span><pre data-v-4eb65241><code data-v-4eb65241><span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>size</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>lg</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>size</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>md</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>size</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>sm</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>size</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>xs</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241></span></code></pre></div><h2 id="dismissible" tabindex="-1" data-v-4eb65241>Dismissible <a class="header-anchor" href="#dismissible" aria-hidden="true" data-v-4eb65241>#</a></h2><p data-v-4eb65241>Label has dismiss feature. It can be show or hide by <code data-v-4eb65241>dismissable</code> props. If <code data-v-4eb65241>dismissable</code> set to <code data-v-4eb65241>true</code>, dismiss button will show.</p>`,3),Q=s("Label"),X=s("Label"),Y=s("Label"),Z=n(`<div class="language-vue" data-v-4eb65241><button title="Copy Code" class="copy" data-v-4eb65241></button><span class="lang" data-v-4eb65241>vue</span><pre data-v-4eb65241><code data-v-4eb65241><span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> :</span><span style="color:#C792EA;" data-v-4eb65241>dismissable</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#FF9CAC;" data-v-4eb65241>true</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>variant</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>light</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241> :</span><span style="color:#C792EA;" data-v-4eb65241>dismissable</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#FF9CAC;" data-v-4eb65241>true</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#A6ACCD;" data-v-4eb65241>  </span><span style="color:#89DDFF;" data-v-4eb65241>&lt;</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241> </span><span style="color:#C792EA;" data-v-4eb65241>variant</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#C3E88D;" data-v-4eb65241>dot</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241> :</span><span style="color:#C792EA;" data-v-4eb65241>dismissable</span><span style="color:#89DDFF;" data-v-4eb65241>=</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#FF9CAC;" data-v-4eb65241>true</span><span style="color:#89DDFF;" data-v-4eb65241>&quot;</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span><span style="color:#A6ACCD;" data-v-4eb65241>Label</span><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>p-label</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241><span style="color:#89DDFF;" data-v-4eb65241>&lt;/</span><span style="color:#F07178;" data-v-4eb65241>template</span><span style="color:#89DDFF;" data-v-4eb65241>&gt;</span></span>
<span class="line" data-v-4eb65241></span></code></pre></div><h2 id="api" tabindex="-1" data-v-4eb65241>API <a class="header-anchor" href="#api" aria-hidden="true" data-v-4eb65241>#</a></h2><h3 id="props" tabindex="-1" data-v-4eb65241>Props <a class="header-anchor" href="#props" aria-hidden="true" data-v-4eb65241>#</a></h3><table data-v-4eb65241><thead data-v-4eb65241><tr data-v-4eb65241><th data-v-4eb65241>Props</th><th style="text-align:center;" data-v-4eb65241>Type</th><th style="text-align:center;" data-v-4eb65241>Default</th><th data-v-4eb65241>Description</th></tr></thead><tbody data-v-4eb65241><tr data-v-4eb65241><td data-v-4eb65241><code data-v-4eb65241>color</code></td><td style="text-align:center;" data-v-4eb65241><code data-v-4eb65241>String</code></td><td style="text-align:center;" data-v-4eb65241><code data-v-4eb65241>primary</code></td><td data-v-4eb65241>Label color variant, valid value is <code data-v-4eb65241>primary</code>, <code data-v-4eb65241>secondary</code>, <code data-v-4eb65241>success</code>, <code data-v-4eb65241>info</code>, <code data-v-4eb65241>warning</code>, <code data-v-4eb65241>danger</code>, <code data-v-4eb65241>gold</code></td></tr><tr data-v-4eb65241><td data-v-4eb65241><code data-v-4eb65241>variant</code></td><td style="text-align:center;" data-v-4eb65241><code data-v-4eb65241>String</code></td><td style="text-align:center;" data-v-4eb65241><code data-v-4eb65241>default</code></td><td data-v-4eb65241>Label variant, valid value is <code data-v-4eb65241>default</code>, <code data-v-4eb65241>light</code> and <code data-v-4eb65241>dot</code>.</td></tr><tr data-v-4eb65241><td data-v-4eb65241><code data-v-4eb65241>size</code></td><td style="text-align:center;" data-v-4eb65241><code data-v-4eb65241>String</code></td><td style="text-align:center;" data-v-4eb65241><code data-v-4eb65241>md</code></td><td data-v-4eb65241>Label variant, valid value is <code data-v-4eb65241>lg</code>, <code data-v-4eb65241>md</code>, <code data-v-4eb65241>sm</code> and <code data-v-4eb65241>xs</code>.</td></tr><tr data-v-4eb65241><td data-v-4eb65241><code data-v-4eb65241>dismissable</code></td><td style="text-align:center;" data-v-4eb65241><code data-v-4eb65241>Boolean</code></td><td style="text-align:center;" data-v-4eb65241><code data-v-4eb65241>false</code></td><td data-v-4eb65241>Show / Hide dismiss button</td></tr></tbody></table><h3 id="slots" tabindex="-1" data-v-4eb65241>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-4eb65241>#</a></h3><table data-v-4eb65241><thead data-v-4eb65241><tr data-v-4eb65241><th data-v-4eb65241>Name</th><th data-v-4eb65241>Description</th></tr></thead><tbody data-v-4eb65241><tr data-v-4eb65241><td data-v-4eb65241><code data-v-4eb65241>default</code></td><td data-v-4eb65241>Content to place in badge</td></tr></tbody></table><h3 id="events" tabindex="-1" data-v-4eb65241>Events <a class="header-anchor" href="#events" aria-hidden="true" data-v-4eb65241>#</a></h3><table data-v-4eb65241><thead data-v-4eb65241><tr data-v-4eb65241><th data-v-4eb65241>Name</th><th data-v-4eb65241>Arguments</th><th data-v-4eb65241>Description</th></tr></thead><tbody data-v-4eb65241><tr data-v-4eb65241><td data-v-4eb65241><code data-v-4eb65241>dismissed</code></td><td data-v-4eb65241>-</td><td data-v-4eb65241>Event when close button clicked</td></tr></tbody></table>`,8),na=JSON.parse('{"title":"Label","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]}]},{"level":2,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":2,"title":"Sizing","slug":"sizing","link":"#sizing","children":[]},{"level":2,"title":"Dismissible","slug":"dismissible","link":"#dismissible","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/label/index.md"}'),aa={name:"components/label/index.md"},ea=Object.assign(aa,{setup(l){return(d,b)=>{const o=v("preview");return c(),D("div",null,[x,a(o,null,{default:e(()=>[a(t,null,{default:e(()=>[z]),_:1})]),_:1}),I,a(o,null,{default:e(()=>[a(t,{color:"primary"},{default:e(()=>[k]),_:1}),a(t,{color:"secondary"},{default:e(()=>[P]),_:1}),a(t,{color:"success"},{default:e(()=>[V]),_:1}),a(t,{color:"info"},{default:e(()=>[w]),_:1}),a(t,{color:"warning"},{default:e(()=>[N]),_:1}),a(t,{color:"danger"},{default:e(()=>[$]),_:1}),a(t,{color:"gold"},{default:e(()=>[B]),_:1})]),_:1}),R,a(o,null,{default:e(()=>[a(t,null,{default:e(()=>[U]),_:1}),a(t,{variant:"light"},{default:e(()=>[O]),_:1}),a(t,{variant:"dot"},{default:e(()=>[W]),_:1})]),_:1}),j,a(o,null,{default:e(()=>[a(t,{size:"lg"},{default:e(()=>[H]),_:1}),a(t,{size:"md"},{default:e(()=>[J]),_:1}),a(t,{size:"sm"},{default:e(()=>[G]),_:1}),a(t,{size:"xs"},{default:e(()=>[K]),_:1})]),_:1}),M,a(o,null,{default:e(()=>[a(t,{dismissable:!0},{default:e(()=>[Q]),_:1}),a(t,{variant:"light",dismissable:!0},{default:e(()=>[X]),_:1}),a(t,{variant:"dot",dismissable:!0},{default:e(()=>[Y]),_:1})]),_:1}),Z])}}}),da=i(ea,[["__scopeId","data-v-4eb65241"]]);export{na as __pageData,da as default};