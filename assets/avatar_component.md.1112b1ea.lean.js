import{d as f,c as r,a as q}from"./chunks/create-image.78cc0c95.js";import{l as A}from"./chunks/load-image.ffccb3e8.js";import{d as T,r as S,c as d,w as y,o as b,_ as x,a as k,b as h,e as z,f as w,n as g,g as t,h as p,i as o,j as C,u as I}from"./app.2d74820a.js";import{u as V}from"./chunks/utils-6ba05f5b.0e20eecd.js";const P=T({props:{variant:{type:String,default:void 0},src:{type:String,default:void 0},fallbackSrc:{type:String,default:f()},name:{type:String,default:void 0},size:{type:String,default:"md"},imgClass:{type:[String,Array,Object],default:void 0}},emits:["imgloaded","imgerror"],setup(a,{emit:c}){const e=S(r(50)),n=d(()=>{const l=["avatar"];return a.size&&l.push(`avatar--${a.size}`),l}),i=d(()=>a.variant?a.variant:!a.src&&a.name?"alias":"image");function u(){i.value==="alias"?_():v()}function v(){e.value=r(50),A(a.src).then(()=>{e.value=a.src,c("imgloaded",a.src)}).catch(l=>{e.value=a.fallbackSrc,c("imgerror",l)})}function _(){e.value=q(a.name)}return y(()=>[a.src,a.name,a.variant],()=>{u()}),b(()=>{u()}),{classNames:n,type:i,imageSrc:e}}}),E=["data-type","src"];function N(a,c,e,n,i,u){return k(),h("div",{"data-testid":"avatar",class:g(a.classNames)},[z(a.$slots,"default",{},()=>[w("img",{"data-testid":"avatar-image",class:g(["avatar__image",a.imgClass]),"data-type":a.type,src:a.imageSrc,alt:"Avatar Image"},null,10,E)])],2)}var s=x(P,[["render",N]]),U=V,m=U.createSVGComponent(m,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M26 14H24v2h2a3.0033 3.0033 0 013 3v4h2V19A5.0058 5.0058 0 0026 14zM24 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 2zM23 30H21V28a3.0033 3.0033 0 00-3-3H14a3.0033 3.0033 0 00-3 3v2H9V28a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM16 13a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0016 11zM8 14H6a5.0059 5.0059 0 00-5 5v4H3V19a3.0033 3.0033 0 013-3H8zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"}}]),D=m,j=D;const R=o("",3),M=o("",2),$=o("",2),H=o("",3),B=o("",3),O=o("",6),L=o("",7),W='{"title":"Avatar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Using image","slug":"using-image"},{"level":3,"title":"Using alias","slug":"using-alias"},{"level":3,"title":"Using icon","slug":"using-icon"},{"level":2,"title":"Sizing","slug":"sizing"},{"level":2,"title":"Variant","slug":"variant"},{"level":3,"title":"Auto-detect variant","slug":"auto-detect-variant"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"avatar/component.md"}',F={},X=Object.assign(F,{setup(a){return(c,e)=>{const n=C("preview");return k(),h("div",null,[R,t(n,null,{default:p(()=>[t(s,{src:"https://picsum.photos/50"})]),_:1}),M,t(n,null,{default:p(()=>[t(s,{variant:"alias",name:"Tarjono Smith"})]),_:1}),$,t(n,null,{default:p(()=>[t(s,null,{default:p(()=>[t(I(j))]),_:1})]),_:1}),H,t(n,{class:"flex-col items-center gap-3 lg:flex-row"},{default:p(()=>[t(s,{src:"https://picsum.photos/24",size:"xs"}),t(s,{src:"https://picsum.photos/32",size:"sm"}),t(s,{src:"https://picsum.photos/40",size:"md"}),t(s,{src:"https://picsum.photos/56",size:"lg"}),t(s,{src:"https://picsum.photos/96",size:"xl"})]),_:1}),B,t(n,{class:"gap-3"},{default:p(()=>[t(s,{variant:"image",src:"https://picsum.photos/40"}),t(s,{variant:"alias",name:"Tarjono Smith"})]),_:1}),O,t(n,{class:"gap-3"},{default:p(()=>[t(s,{variant:"image",src:"https://picsum.photos/40"}),t(s,{variant:"alias",name:"Tarjono Smith"}),t(s)]),_:1}),L])}}});export{W as __pageData,X as default};
