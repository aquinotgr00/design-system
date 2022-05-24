import{I}from"./chunks/16.f5a94c7b.js";import{H as B}from"./chunks/Heading.52fe5946.js";import{d as q,r as $,c as y,_ as w,j as g,a as c,l as A,h as t,b as e,e as o,g as n,k as s,q as C,p as u,n as S,m as x,f,i as k,D as N,E as H}from"./app.c3e9a2ef.js";import{B as v}from"./chunks/Button.f9a55b09.js";import{S as W}from"./chunks/Subheading.b17eeb0a.js";import"./chunks/utils-6ba05f5b.c197738d.js";var P="/design-system/assets/img-card-callout-01.c5d31835.svg";const D=q({components:{Heading:B,IconClose:I},props:{element:{type:String,default:"section"},title:{type:String,default:null},sectioned:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},callout:{type:Boolean,default:!1},dismissable:{type:Boolean,default:!0}},emits:["dismissed"],setup(a,{emit:i}){const p=$(!0),d=y(()=>{const l=["card"];return a.sectioned&&l.push("card--sectioned"),a.disabled&&l.push("card--disabled"),a.callout&&l.push("card--callout"),l}),_=y(()=>a.element);function m(){p.value=!1,i("dismissed")}return{classNames:d,elementNames:_,show:p,close:m}}}),E={key:0,"data-testid":"card-header",class:"card__header"},V={key:1,class:"card__header card__header--default"},R={key:0,"data-testid":"card-header-action",class:"card__header__action"},j={key:2,class:"card__body"},U={key:4,"data-testid":"card-footer",class:"card__footer"};function Y(a,i,p,d,_,m){const l=g("Heading"),T=g("IconClose");return a.show?(c(),A(x(a.elementNames),{key:0,"data-testid":"card",class:S(a.classNames)},{default:t(()=>[a.$slots.header?(c(),e("header",E,[o(a.$slots,"header")])):a.title?(c(),e("header",V,[n(l,{element:"h6"},{default:t(()=>[s(C(a.title),1)]),_:1}),a.$slots.action&&!a.callout?(c(),e("span",R,[o(a.$slots,"action")])):u("",!0),a.dismissable&&a.callout?(c(),e("span",{key:1,"data-testid":"card-callout-dismiss",class:"card__header__dismiss",onClick:i[0]||(i[0]=ba=>a.close())},[n(T)])):u("",!0)])):u("",!0),a.sectioned?o(a.$slots,"default",{key:3}):(c(),e("div",j,[o(a.$slots,"default")])),a.$slots.footer?(c(),e("footer",U,[o(a.$slots,"footer")])):u("",!0)]),_:3},8,["class"])):u("",!0)}var r=w(D,[["render",Y]]);const z=q({components:{Subheading:W},props:{title:{type:String,default:null},disabled:{type:Boolean,default:!1}},setup(a){return{classNames:y(()=>{const p=["card__section"];return a.disabled&&p.push("card__section--disabled"),p})}}}),F={key:0,"data-testid":"card-header",class:"card__header"},L={key:1,class:"card__header card__header--default"},M={key:0,"data-testid":"card-header-action",class:"card__header__action"},O={class:"card__body"},G={key:2,"data-testid":"card-footer",class:"card__footer"};function J(a,i,p,d,_,m){const l=g("Subheading");return c(),e("div",{"data-testid":"card-section",class:S(a.classNames)},[a.$slots.header?(c(),e("div",F,[o(a.$slots,"header")])):a.title?(c(),e("div",L,[n(l,{overline:"medium"},{default:t(()=>[s(C(a.title),1)]),_:1}),a.$slots.action?(c(),e("span",M,[o(a.$slots,"action")])):u("",!0)])):u("",!0),f("div",O,[o(a.$slots,"default")]),a.$slots.footer?(c(),e("footer",G,[o(a.$slots,"footer")])):u("",!0)],2)}var h=w(z,[["render",J]]);const b=a=>(N("data-v-5d98ccf6"),a=a(),H(),a),K=k('<h1 id="card" tabindex="-1" data-v-5d98ccf6>Card <a class="header-anchor" href="#card" aria-hidden="true" data-v-5d98ccf6>#</a></h1><h2 id="usage" tabindex="-1" data-v-5d98ccf6>Usage <a class="header-anchor" href="#usage" aria-hidden="true" data-v-5d98ccf6>#</a></h2><h3 id="basic-usage" tabindex="-1" data-v-5d98ccf6>Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true" data-v-5d98ccf6>#</a></h3>',3),Q=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),X=k(`<div class="language-vue" data-v-5d98ccf6><pre data-v-5d98ccf6><code data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    While here you will see the content of cards, everything goes here. 
    If you need custom cards, take the component which more represent to 
    what you need and detach it.
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
</code></pre></div><h3 id="card-with-header" tabindex="-1" data-v-5d98ccf6>Card with Header <a class="header-anchor" href="#card-with-header" aria-hidden="true" data-v-5d98ccf6>#</a></h3>`,2),Z=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),aa=s("Button Text"),ta=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),na=k(`<div class="language-vue" data-v-5d98ccf6><pre data-v-5d98ccf6><code data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card</span>
    <span class="token attr-name" data-v-5d98ccf6>title</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>Any Title Should Here<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    While here you will see the content of cards, everything goes here. 
    If you need custom cards, take the component which more represent to 
    what you need and detach it.
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card</span>
    <span class="token attr-name" data-v-5d98ccf6>title</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>Any Title Should Here<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span> <span class="token attr-name" data-v-5d98ccf6>#action</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Button</span> <span class="token attr-name" data-v-5d98ccf6>color</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>primary<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span> <span class="token attr-name" data-v-5d98ccf6>variant</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>link<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>Button Text<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Button</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    While here you will see the content of cards, everything goes here. 
    If you need custom cards, take the component which more represent to 
    what you need and detach it.
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
</code></pre></div><h3 id="card-with-footer" tabindex="-1" data-v-5d98ccf6>Card with Footer <a class="header-anchor" href="#card-with-footer" aria-hidden="true" data-v-5d98ccf6>#</a></h3>`,2),sa=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),ca=s("Enable Sample Button"),ea=s("Button Text"),da=k(`<div class="language-vue" data-v-5d98ccf6><pre data-v-5d98ccf6><code data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card</span> 
    <span class="token attr-name" data-v-5d98ccf6>title</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>Any Title Should Here<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    While here you will see the content of cards, everything goes here. 
    If you need custom cards, take the component which more represent to 
    what you need and detach it.
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span> <span class="token attr-name" data-v-5d98ccf6>#footer</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Button</span> <span class="token attr-name" data-v-5d98ccf6>variant</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>outline<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span> <span class="token attr-name" data-v-5d98ccf6>color</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>primary<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>Enable Sample Button<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Button</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Button</span> <span class="token attr-name" data-v-5d98ccf6>variant</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>link<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span> <span class="token attr-name" data-v-5d98ccf6>color</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>primary<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>Button Text<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Button</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
</code></pre></div><h2 id="sectioned" tabindex="-1" data-v-5d98ccf6>Sectioned <a class="header-anchor" href="#sectioned" aria-hidden="true" data-v-5d98ccf6>#</a></h2>`,2),oa=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),pa=b(()=>f("a",{href:"#",class:"text-primary-100 hover:text-primary-hovered underline"},"Edit",-1)),la=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),ua=s("Button Text"),ia=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),ra=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),fa=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),va=k(`<div class="language-vue" data-v-5d98ccf6><pre data-v-5d98ccf6><code data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card</span> 
    <span class="token attr-name" data-v-5d98ccf6>title</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>Card Section<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span>
    <span class="token attr-name" data-v-5d98ccf6>sectioned</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card-Section</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      While here you will see the content of cards, everything goes here. 
      If you need custom cards, take the component which more represent to 
      what you need and detach it.
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card-Section</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card-Section</span> 
      <span class="token attr-name" data-v-5d98ccf6>title</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>Subtitle supposedly here<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span> <span class="token attr-name" data-v-5d98ccf6>#action</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
        <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>a</span> <span class="token attr-name" data-v-5d98ccf6>href</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>#<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span> <span class="token attr-name" data-v-5d98ccf6>class</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>text-primary-100 hover:text-primary-hovered underline<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>Edit<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>a</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      While here you will see the content of cards, everything goes here. 
      If you need custom cards, take the component which more represent to 
      what you need and detach it.
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card-Section</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>

  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card</span> 
    <span class="token attr-name" data-v-5d98ccf6>title</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>Card Sub-Section<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span>
    <span class="token attr-name" data-v-5d98ccf6>sectioned</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span> <span class="token attr-name" data-v-5d98ccf6>#action</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Button</span> <span class="token attr-name" data-v-5d98ccf6>variant</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>link<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span> <span class="token attr-name" data-v-5d98ccf6>color</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>primary<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>Button Text<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Button</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card-Section</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      While here you will see the content of cards, everything goes here. 
      If you need custom cards, take the component which more represent to 
      what you need and detach it.
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card-Section</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card-Section</span> 
      <span class="token attr-name" data-v-5d98ccf6>title</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>Subtitle supposedly here<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      While here you will see the content of cards, everything goes here. 
      If you need custom cards, take the component which more represent to 
      what you need and detach it.
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card-Section</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
        While here you will see the content of cards, everything goes here. 
        If you need custom cards, take the component which more represent to 
        what you need and detach it.
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card-Section</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card-Section</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
</code></pre></div><h2 id="callout" tabindex="-1" data-v-5d98ccf6>Callout <a class="header-anchor" href="#callout" aria-hidden="true" data-v-5d98ccf6>#</a></h2>`,2),ka={class:"flex items-start gap-x-8"},ha={class:"w-3/4"},ga=s(" What amazing growth you achieved this year, Tarjono! You deserve every bit of it and we\u2019re sure you\u2019ll do even better next year. There\u2019s a 30% membership renewal discount waiting for you when you come back. "),_a={class:"pt-8"},ma=s("Collect Discount"),ya=s("Learn More"),wa=b(()=>f("div",{class:"w-1/4"},[f("img",{src:P})],-1)),qa=k(`<div class="language-vue" data-v-5d98ccf6><pre data-v-5d98ccf6><code data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Card</span> 
    <span class="token attr-name" data-v-5d98ccf6>title</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>Hello and Happy New Year!<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span>
    <span class="token attr-name" data-v-5d98ccf6>element</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>div<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span>
    <span class="token attr-name" data-v-5d98ccf6>callout</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>div</span> <span class="token attr-name" data-v-5d98ccf6>class</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>flex items-start gap-x-8<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>div</span> <span class="token attr-name" data-v-5d98ccf6>class</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>w-3/4<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
        What amazing growth you achieved this year, Tarjono! You deserve 
        every bit of it and we\u2019re sure you\u2019ll do even better next year. 
        There\u2019s a 30% membership renewal discount waiting for you when you come back.
        <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>div</span> <span class="token attr-name" data-v-5d98ccf6>class</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>pt-8<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
          <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Button</span> <span class="token attr-name" data-v-5d98ccf6>variant</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>outline<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span> <span class="token attr-name" data-v-5d98ccf6>color</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>secondary<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>Collect Discount<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Button</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
          <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>Button</span> <span class="token attr-name" data-v-5d98ccf6>variant</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>link<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span> <span class="token attr-name" data-v-5d98ccf6>color</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>primary<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>Learn More<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Button</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
        <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>div</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>div</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>div</span> <span class="token attr-name" data-v-5d98ccf6>class</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>w-1/4<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
        <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;</span>img</span> <span class="token attr-name" data-v-5d98ccf6>src</span><span class="token attr-value" data-v-5d98ccf6><span class="token punctuation attr-equals" data-v-5d98ccf6>=</span><span class="token punctuation" data-v-5d98ccf6>&quot;</span>./assets/images/img-card-callout-01.svg<span class="token punctuation" data-v-5d98ccf6>&quot;</span></span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
      <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>div</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
    <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>div</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
  <span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>Card</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
<span class="token tag" data-v-5d98ccf6><span class="token tag" data-v-5d98ccf6><span class="token punctuation" data-v-5d98ccf6>&lt;/</span>template</span><span class="token punctuation" data-v-5d98ccf6>&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1" data-v-5d98ccf6>API <a class="header-anchor" href="#api" aria-hidden="true" data-v-5d98ccf6>#</a></h2><h3 id="props" tabindex="-1" data-v-5d98ccf6>Props <a class="header-anchor" href="#props" aria-hidden="true" data-v-5d98ccf6>#</a></h3><table data-v-5d98ccf6><thead data-v-5d98ccf6><tr data-v-5d98ccf6><th data-v-5d98ccf6>Props</th><th style="text-align:center;" data-v-5d98ccf6>Type</th><th style="text-align:center;" data-v-5d98ccf6>Default</th><th data-v-5d98ccf6>Description</th></tr></thead><tbody data-v-5d98ccf6><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>element</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>String</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>section</code></td><td data-v-5d98ccf6>Card element, valid value is <code data-v-5d98ccf6>div</code>, <code data-v-5d98ccf6>section</code>, and <code data-v-5d98ccf6>article</code></td></tr><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>title</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>String</code></td><td style="text-align:center;" data-v-5d98ccf6>-</td><td data-v-5d98ccf6>Card Header Title</td></tr><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>sectioned</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>Boolean</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>false</code></td><td data-v-5d98ccf6>Enable Card Section</td></tr><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>disabled</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>Boolean</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>false</code></td><td data-v-5d98ccf6>Disable (look-like) Card</td></tr><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>callout</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>Boolean</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>false</code></td><td data-v-5d98ccf6>Enable Callout</td></tr><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>dismissable</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>Boolean</code></td><td style="text-align:center;" data-v-5d98ccf6><code data-v-5d98ccf6>true</code></td><td data-v-5d98ccf6>Show / Hide dismiss button</td></tr></tbody></table><h3 id="slots" tabindex="-1" data-v-5d98ccf6>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-5d98ccf6>#</a></h3><table data-v-5d98ccf6><thead data-v-5d98ccf6><tr data-v-5d98ccf6><th data-v-5d98ccf6>Name</th><th data-v-5d98ccf6>Description</th></tr></thead><tbody data-v-5d98ccf6><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>action </code></td><td data-v-5d98ccf6>Action (permalink or button) to place in Card/Card-Section Header just if <code data-v-5d98ccf6>header</code> slot inactive</td></tr><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>header </code></td><td data-v-5d98ccf6>Content (in the form of\u2014 permalink or button) to place in Card/Card-Section Header</td></tr><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>footer </code></td><td data-v-5d98ccf6>Content (in the form of\u2014 permalink or button) to place in Card/Card-Section Footer</td></tr></tbody></table><h3 id="events" tabindex="-1" data-v-5d98ccf6>Events <a class="header-anchor" href="#events" aria-hidden="true" data-v-5d98ccf6>#</a></h3><table data-v-5d98ccf6><thead data-v-5d98ccf6><tr data-v-5d98ccf6><th data-v-5d98ccf6>Name</th><th data-v-5d98ccf6>Arguments</th><th data-v-5d98ccf6>Description</th></tr></thead><tbody data-v-5d98ccf6><tr data-v-5d98ccf6><td data-v-5d98ccf6><code data-v-5d98ccf6>dismissed</code></td><td data-v-5d98ccf6>-</td><td data-v-5d98ccf6>Event when close button clicked</td></tr></tbody></table>`,8),Na='{"title":"Card","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Card with Header","slug":"card-with-header"},{"level":3,"title":"Card with Footer","slug":"card-with-footer"},{"level":2,"title":"Sectioned","slug":"sectioned"},{"level":2,"title":"Callout","slug":"callout"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"card/component.md"}',Ca={},Sa=Object.assign(Ca,{setup(a){return(i,p)=>{const d=g("preview");return c(),e("div",null,[K,n(d,null,{default:t(()=>[n(r,null,{default:t(()=>[Q]),_:1})]),_:1}),X,n(d,null,{default:t(()=>[n(r,{title:"Any Title Should Here"},{default:t(()=>[Z]),_:1}),n(r,{title:"Any Title Should Here"},{action:t(()=>[n(v,{color:"primary",variant:"link"},{default:t(()=>[aa]),_:1})]),default:t(()=>[ta]),_:1})]),_:1}),na,n(d,null,{default:t(()=>[n(r,{title:"Any Title Should Here"},{footer:t(()=>[n(v,{variant:"outline",color:"primary"},{default:t(()=>[ca]),_:1}),n(v,{variant:"link",color:"primary"},{default:t(()=>[ea]),_:1})]),default:t(()=>[sa]),_:1})]),_:1}),da,n(d,null,{default:t(()=>[n(r,{title:"Card with Section",sectioned:""},{default:t(()=>[n(h,null,{default:t(()=>[oa]),_:1}),n(h,{title:"Subtitle supposedly here"},{action:t(()=>[pa]),default:t(()=>[la]),_:1})]),_:1}),n(r,{title:"Card with Sub-Section",sectioned:""},{action:t(()=>[n(v,{variant:"link",color:"primary"},{default:t(()=>[ua]),_:1})]),default:t(()=>[n(h,null,{default:t(()=>[ia]),_:1}),n(h,{title:"Subtitle supposedly here"},{default:t(()=>[ra,n(h,null,{default:t(()=>[fa]),_:1})]),_:1})]),_:1})]),_:1}),va,n(d,null,{default:t(()=>[n(r,{title:"Hello and Happy New Year!",element:"div",callout:""},{default:t(()=>[f("div",ka,[f("div",ha,[ga,f("div",_a,[n(v,{variant:"outline",color:"secondary"},{default:t(()=>[ma]),_:1}),n(v,{variant:"link",color:"primary"},{default:t(()=>[ya]),_:1})])]),wa])]),_:1})]),_:1}),qa])}}});var Ha=w(Sa,[["__scopeId","data-v-5d98ccf6"]]);export{Na as __pageData,Ha as default};
