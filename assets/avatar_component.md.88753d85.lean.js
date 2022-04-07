import{d as f,r as y,c as g,w as x,o as b,_ as A,a as k,b as m,e as T,n as q,f as p,g as s,h as w,i as l,j as S,u as C}from"./app.abcd1188.js";import{u as F}from"./chunks/utils-6ba05f5b.6ca2362f.js";var E="/design-system/assets/avatar.fa17e344.png?inline";const d=[["#F2F7FD","#0065D1"],["#F8F8F8","#737373"],["#F4FBF6","#23B242"],["#F2FBFC","#02AEC5"],["#FFFBF4","#F5A623"],["#FEF5F4","#E42E2C"],["#FBFAF2","#B79A00"],["#FEFDF4","#EFD52C"],["#FAFEF5","#A3E635"],["#F3FBFA","#12B89C"],["#F7F2FD","#5E00D1"]];function I(a){let t=0;for(let n=0;n<a.length;++n)t=(t<<5)-t+a.charCodeAt(n)|0;return d.at(Math.abs(t)%d.length)}function N(){return d.at(Math.floor(Math.random()*d.length))}function V(a,t,n,o){return`data:image/svg+xml,<svg height="${t}" width="${t}" xmlns="http://www.w3.org/2000/svg"><rect fill="${encodeURIComponent(n)}" x="0" y="0" height="${t}" width="${t}"></rect><text fill="${encodeURIComponent(o)}" dominant-baseline="central" text-anchor="middle" x="50%" y="50%" font-family="sans-serif" font-weight="600">${encodeURIComponent(a)}</text></svg>`}function h(a=50,t=a){return`data:image/svg+xml,<svg class="lds-spinner" width="${a}" height="${t}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:0 0"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(30 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(60 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(90 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(120 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(150 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(180 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(210 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(240 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(270 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(300 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(330 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/></rect></svg>`}function z(a){return a.split(" ").slice(0,2).map(t=>t.at(0)).join("").toUpperCase()}function D(a,t=50){const n=a?z(a):"\uFF65\u1D17\uFF65",[o,c]=a?I(a):N();return V(n,t,o,c)}function P(){return E}function R(a){return a?new Promise((t,n)=>{const o=new window.Image,c=()=>{u(),t(a)},r=()=>{u(),n(new Error("ERR_FAILED_LOAD_IMAGE"))},u=()=>{o.removeEventListener("load",c),o.removeEventListener("error",r)};o.addEventListener("load",c),o.addEventListener("error",r),o.src=a}):Promise.reject(new Error("ERR_INVALID_IMAGE_SRC"))}const $=f({props:{variant:{type:String},src:{type:String},fallbackSrc:{type:String,default:P()},name:{type:String},size:{type:String,default:"md"}},emits:["imgloaded","imgloadfail"],setup(a,{emit:t}){const n=y(h(50)),o=g(()=>{const i=["avatar"];return a.size&&i.push(`avatar--${a.size}`),i}),c=g(()=>a.variant?a.variant:!a.src&&a.name?"alias":"image");function r(){c.value==="alias"?_():u()}function u(){n.value=h(50),R(a.src).then(i=>{n.value=i,t("imgloaded",i)}).catch(i=>{n.value=a.fallbackSrc,t("imgloadfail",i)})}function _(){n.value=D(a.name)}return x(()=>[a.src,a.name,a.variant],()=>{r()}),b(()=>{r()}),{classNames:o,type:c,imageSrc:n}}}),U=["data-type","src"];function M(a,t,n,o,c,r){return k(),m("div",{"data-testid":"avatar",class:q(a.classNames)},[T(a.$slots,"default",{},()=>[p("img",{"data-testid":"avatar-image",class:"avatar__image","data-type":a.type,src:a.imageSrc,alt:"Avatar Image"},null,8,U)])],2)}var e=A($,[["render",M]]),B=F,v=B.createSVGComponent(v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M26 14H24v2h2a3.0033 3.0033 0 013 3v4h2V19A5.0058 5.0058 0 0026 14zM24 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 2zM23 30H21V28a3.0033 3.0033 0 00-3-3H14a3.0033 3.0033 0 00-3 3v2H9V28a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM16 13a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0016 11zM8 14H6a5.0059 5.0059 0 00-5 5v4H3V19a3.0033 3.0033 0 013-3H8zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"}}]),j=v,L=j;const H=l("",3),O={class:"flex gap-1 mt-3"},G=l("",2),Y={class:"flex gap-1 mt-3"},J=l("",2),K={class:"flex gap-1 mt-3"},Q=l("",3),W={class:"flex gap-1 mt-3"},X=l("",3),Z={class:"flex gap-1 mt-3"},aa=l("",5),ta=p("strong",null,"Result",-1),na=S(": "),sa={class:"flex gap-1 mt-3"},ea=l("",7),ia='{"title":"Avatar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Using image","slug":"using-image"},{"level":3,"title":"Using alias","slug":"using-alias"},{"level":3,"title":"Using icon","slug":"using-icon"},{"level":2,"title":"Sizing","slug":"sizing"},{"level":2,"title":"Variant","slug":"variant"},{"level":3,"title":"Auto-detect variant","slug":"auto-detect-variant"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"avatar/component.md"}',oa={},la=Object.assign(oa,{setup(a){return(t,n)=>(k(),m("div",null,[H,p("div",O,[s(e,{src:"https://picsum.photos/50"})]),G,p("div",Y,[s(e,{variant:"alias",name:"Tarjono Smith"})]),J,p("div",K,[s(e,null,{default:w(()=>[s(C(L))]),_:1})]),Q,p("div",W,[s(e,{src:"https://picsum.photos/24",size:"xs"}),s(e,{src:"https://picsum.photos/32",size:"sm"}),s(e,{src:"https://picsum.photos/40",size:"md"}),s(e,{src:"https://picsum.photos/56",size:"lg"}),s(e,{src:"https://picsum.photos/96",size:"xl"})]),X,p("div",Z,[s(e,{variant:"image",src:"https://picsum.photos/40"}),s(e,{variant:"alias",name:"Tarjono Smith"})]),aa,p("p",null,[ta,na,p("div",sa,[s(e,{variant:"image",src:"https://picsum.photos/40"}),s(e,{variant:"alias",name:"Tarjono Smith"}),s(e)])]),ea]))}});export{ia as __pageData,la as default};
