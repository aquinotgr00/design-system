import{I as f}from"./20.3594280d.js";import{g as h}from"./commonjsHelpers.042e6b4d.js";import{u as C}from"./utils-6ba05f5b.5b33f0d1.js";import{I as _}from"./16.c6691d60.js";import{m as g,r as I,c as l,_ as $,K as w,x as a,p as m,F as d,q as p,H as y,R as B,J as t,v as u,M as k}from"./framework.0401cdf8.js";import"./Banner.vue_vue_type_style_index_0_lang.4ed993c7.js";var z=C,v=z.createSVGComponent(v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"}},{elem:"path",attrs:{d:"M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z","data-icon-path":"inner-path",opacity:"0"}}]),M=v;const b=h(M),S={danger:b,info:f},V=g({components:{IconInfo:f,IconClose:_,IconDanger:b},props:{variant:{type:String,default:"info"},dismissable:{type:Boolean,default:!0}},emits:["dismissed"],setup(e,{emit:s}){const o=I(!0),r=l(()=>{const n=["banner"];return e.variant&&n.push(`banner--${e.variant}`),n}),i=l(()=>S[e.variant]);function c(){o.value=!1,s("dismissed")}return{classNames:r,show:o,icon:i,close:c}}}),N={class:"banner__body"};function D(e,s,o,r,i,c){const n=w("IconClose");return e.show?(a(),m("div",{key:0,"data-testid":"banner",class:u(e.classNames)},[d("div",{class:u(["banner__icon",{"banner__icon--custom":e.$slots.icon}]),"data-testid":"banner-icon"},[p(e.$slots,"icon",{},()=>[e.icon?(a(),y(B(e.icon),{key:0})):t("",!0)])],2),d("div",N,[p(e.$slots,"default",{close:e.close})]),e.dismissable?(a(),m("div",{key:0,"data-testid":"banner-close",class:"banner__close",onClick:s[0]||(s[0]=F=>e.close())},[k(n)])):t("",!0)],2)):t("",!0)}const K=$(V,[["render",D]]);export{K as p};
