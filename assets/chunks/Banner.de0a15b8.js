import{u as o}from"./utils-6ba05f5b.6ca2362f.js";import{d as w,r as C,c,_ as g,k as b,a as n,b as d,f as v,l as B,m as $,e as y,g as H,p as m,n as M}from"../app.abcd1188.js";var S=o,u=S.createSVGComponent(u,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{fill:"none",d:"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z","data-icon-path":"inner-path"}},{elem:"path",attrs:{d:"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}}]),V=u,p=V,k=o,f=k.createSVGComponent(f,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"}},{elem:"path",attrs:{d:"M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z","data-icon-path":"inner-path",opacity:"0"}}]),z=f,h=z,I=o,_=I.createSVGComponent(_,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}}]),N=_,Z=N;const x=w({components:{IconInfo:p,IconClose:Z,IconDanger:h},props:{variant:{type:String,default:"info"},dismissable:{type:Boolean,default:!0}},emits:["dismissed"],setup(e,{emit:a}){const s=C(!0),r=c(()=>{const t=["banner"];return e.variant&&t.push(`banner--${e.variant}`),t}),l=c(()=>e.variant==="danger"?h:p);function i(){s.value=!1,a("dismissed")}return{classNames:r,show:s,icon:l,close:i}}}),A={class:"banner__icon"},G={class:"banner__body"};function D(e,a,s,r,l,i){const t=b("IconClose");return e.show?(n(),d("div",{key:0,"data-testid":"banner",class:M(e.classNames)},[v("div",A,[(n(),B($(e.icon)))]),v("div",G,[y(e.$slots,"default",{close:e.close})]),e.dismissable?(n(),d("div",{key:0,"data-testid":"banner-close",class:"banner__close",onClick:a[0]||(a[0]=F=>e.close())},[H(t)])):m("",!0)],2)):m("",!0)}var W=g(x,[["render",D]]);export{W as B};
