import{t as y,h as S}from"./index.601b502e.js";import{S as f}from"./NavSubItem.4bb4bde0.js";import{u as V}from"./use-selector.80b01776.js";import{u as H}from"./index.800b94f2.js";import{d,V as w,l as _,_ as c,o as r,c as u,z as B,r as l,I as M,n as g,U as z,D as C,A as N,B as p,G as A}from"./framework.6feb5f37.js";import{N as G}from"./NavItem.90179a27.js";import{g as m}from"./commonjsHelpers.042e6b4d.js";import{u as v}from"./utils-6ba05f5b.b8bf33fb.js";const ae="/design-system/assets/images/logo-privy.svg",te="/design-system/assets/images/logo-privy-icon.svg",I=d({props:{variant:{type:String,default:"pills"},align:{type:String,default:"left"},type:{type:String,default:"wide"},fixed:{type:Boolean,default:!1},toggleable:{type:String,default:void 0},modelValue:{type:Boolean,default:!0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){w(f,{variant:e.variant,align:e.align,type:e.type});const a=y("sidebarContainer"),s=V(".sidebar__bottom",a),{height:o}=S(s),n=H(e);return{classNames:_(()=>{const t=[""];return e.type&&t.push(`sidebar--${e.type}`),e.align&&t.push(`sidebar--${e.align}`),e.variant&&t.push(`sidebar--${e.variant}`),e.fixed&&t.push("sidebar--fixed"),e.toggleable&&t.push(`sidebar--toggleable sidebar--toggleable-${e.toggleable}`),e.toggleable&&e.fixed&&n.value&&t.push("sidebar--show"),t}),height:o}}});function k(e,a,s,o,n,i){return r(),u("aside",{"data-testid":"sidebar",class:g(["sidebar",e.classNames])},[B("div",{ref:"sidebarContainer",class:"sidebar__container",style:M(`padding-bottom: ${e.height+40}px`)},[l(e.$slots,"default")],4)],2)}const se=c(I,[["render",k]]),D=d({components:{Nav:G},props:{title:{type:String,default:void 0},bottom:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(e){const a=z(f,void 0,!0),s=a==null?void 0:a.variant,o=a==null?void 0:a.align,n=_(()=>{const i=[""];return e.bottom&&i.push("sidebar__nav--bottom"),i});return{variant:s,align:o,classNames:n}}});const E={key:1,class:"sidebar__bottom"};function x(e,a,s,o,n,i){const t=C("Nav");return e.bottom?(r(),u("div",E,[A(t,{class:g(["sidebar__nav",e.classNames]),"data-testid":"sidebar-nav",title:e.title,vertical:"",variant:e.variant,condensed:e.condensed,align:e.align},{default:p(()=>[l(e.$slots,"default")]),_:3},8,["title","variant","condensed","align","class"])])):(r(),N(t,{key:0,class:"sidebar__nav","data-testid":"sidebar-nav",title:e.title,vertical:"",variant:e.variant,condensed:e.condensed,align:e.align},{default:p(()=>[l(e.$slots,"default")]),_:3},8,["title","variant","condensed","align"]))}const oe=c(D,[["render",x]]),Z=d({props:{href:{type:String,default:void 0}}});const j=["href"];function R(e,a,s,o,n,i){return r(),u("a",{href:e.href,"data-testid":"sidebar-brand",class:"sidebar__brand"},[l(e.$slots,"default")],8,j)}const ne=c(Z,[["render",R]]);var T=v,b=T.createSVGComponent(b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M24 21H26V26H24zM20 16H22V26H20zM11 26a5.0059 5.0059 0 01-5-5H8a3 3 0 103-3V16a5 5 0 010 10z"}},{elem:"path",attrs:{d:"M28,2H4A2.002,2.002,0,0,0,2,4V28a2.0023,2.0023,0,0,0,2,2H28a2.0027,2.0027,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2Zm0,9H14V4H28ZM12,4v7H4V4ZM4,28V13H28.0007l.0013,15Z"}}]),F=b;const ie=m(F);var U=v,h=U.createSVGComponent(h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M31 30H29V27a3 3 0 00-3-3H22a3 3 0 00-3 3v3H17V27a5 5 0 015-5h4a5 5 0 015 5zM24 12a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 10zM15 22H13V19a3 3 0 00-3-3H6a3 3 0 00-3 3v3H1V19a5 5 0 015-5h4a5 5 0 015 5zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"}}]),q=h;const re=m(q);var J=v,$=J.createSVGComponent($,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zM21 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S22.7 12 21 12zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2V24zM11 20c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S9.3 20 11 20z"}}]),K=$;const le=m(K);export{ie as I,ae as _,te as a,re as b,le as c,se as d,oe as e,ne as p};
