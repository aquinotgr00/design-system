import{S as p}from"./NavSubItem.77e5e6df.js";import{u as $}from"./index.1eca2a34.js";import{d as r,V as y,l as v,_ as i,o as l,c as m,r as d,n as f,U as S,D as V,A as H,B as w}from"./framework.e03f6a99.js";import{N as M}from"./NavItem.03ca28c4.js";import{g as c}from"./commonjsHelpers.042e6b4d.js";import{u}from"./utils-6ba05f5b.e505c784.js";const K="/design-system/assets/images/logo-privy.svg",L="/design-system/assets/images/logo-privy-icon.svg",B=r({props:{variant:{type:String,default:"pills"},align:{type:String,default:"left"},type:{type:String,default:"wide"},fixed:{type:Boolean,default:!1},toggleable:{type:String,default:void 0},modelValue:{type:Boolean,default:!0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){y(p,{variant:e.variant,align:e.align,type:e.type});const t=$(e);return{classNames:v(()=>{const a=[""];return e.type&&a.push(`sidebar--${e.type}`),e.align&&a.push(`sidebar--${e.align}`),e.variant&&a.push(`sidebar--${e.variant}`),e.fixed&&a.push("sidebar--fixed"),e.toggleable&&a.push(`sidebar--toggleable sidebar--toggleable-${e.toggleable}`),e.toggleable&&e.fixed&&t.value&&a.push("sidebar--show"),a})}}});function z(e,t,s,a,o,n){return l(),m("aside",{"data-testid":"sidebar",class:f(["sidebar",e.classNames])},[d(e.$slots,"default")],2)}const O=i(B,[["render",z]]),N=r({components:{Nav:M},props:{title:{type:String,default:void 0},bottom:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(e){const t=S(p,void 0,!0),s=t==null?void 0:t.variant,a=t==null?void 0:t.align,o=v(()=>{const n=[""];return e.bottom&&n.push("sidebar__nav--bottom"),n});return{variant:s,align:a,classNames:o}}});function C(e,t,s,a,o,n){const b=V("Nav");return l(),H(b,{class:f(["sidebar__nav",e.classNames]),"data-testid":"sidebar-nav",title:e.title,vertical:"",variant:e.variant,condensed:e.condensed,align:e.align},{default:w(()=>[d(e.$slots,"default")]),_:3},8,["title","variant","condensed","align","class"])}const P=i(N,[["render",C]]),x=r({props:{href:{type:String,default:void 0}}});const A=["href"];function G(e,t,s,a,o,n){return l(),m("a",{href:e.href,"data-testid":"sidebar-brand",class:"sidebar__brand"},[d(e.$slots,"default")],8,A)}const Q=i(x,[["render",G]]);var I=u,_=I.createSVGComponent(_,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M24 21H26V26H24zM20 16H22V26H20zM11 26a5.0059 5.0059 0 01-5-5H8a3 3 0 103-3V16a5 5 0 010 10z"}},{elem:"path",attrs:{d:"M28,2H4A2.002,2.002,0,0,0,2,4V28a2.0023,2.0023,0,0,0,2,2H28a2.0027,2.0027,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2Zm0,9H14V4H28ZM12,4v7H4V4ZM4,28V13H28.0007l.0013,15Z"}}]),D=_;const W=c(D);var E=u,g=E.createSVGComponent(g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M31 30H29V27a3 3 0 00-3-3H22a3 3 0 00-3 3v3H17V27a5 5 0 015-5h4a5 5 0 015 5zM24 12a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 10zM15 22H13V19a3 3 0 00-3-3H6a3 3 0 00-3 3v3H1V19a5 5 0 015-5h4a5 5 0 015 5zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"}}]),Z=g;const X=c(Z);var j=u,h=j.createSVGComponent(h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zM21 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S22.7 12 21 12zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2V24zM11 20c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S9.3 20 11 20z"}}]),k=h;const Y=c(k);export{W as I,K as _,L as a,X as b,Y as c,O as d,P as e,Q as p};