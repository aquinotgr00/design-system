import{d as m,c as d,a as _}from"./chunks/create-image.6d8615aa.js";import{l as A}from"./chunks/load-image.5a7761ed.js";import{d as C,r as f,c as D,w as E,o as T,_ as S,a as y,b as u,e as b,f as x,n as F,g as q,h as a,i as l,j as o,u as z}from"./app.5d60bad4.js";import{u as w}from"./chunks/utils-6ba05f5b.063d2e00.js";import"./chunks/color-hash.fa715313.js";const I=C({props:{variant:{type:String,default:void 0},src:{type:String,default:void 0},fallbackSrc:{type:String,default:m()},name:{type:String,default:void 0},size:{type:String,default:"md"},imgClass:{type:[String,Array,Object],default:void 0}},emits:["imgloaded","imgerror"],setup(s,{emit:p}){const e=f(d(50)),n=D(()=>{const r=["avatar"];return s.size&&r.push(`avatar--${s.size}`),r}),c=D(()=>s.variant?s.variant:!s.src&&s.name?"alias":"image");function i(){c.value==="alias"?v():g()}function g(){e.value=d(50),A(s.src).then(()=>{e.value=s.src,p("imgloaded",s.src)}).catch(r=>{e.value=s.fallbackSrc,p("imgerror",r)})}function v(){e.value=_(s.name)}return E(()=>[s.src,s.name,s.variant],()=>{i()}),T(()=>{i()}),{classNames:n,type:c,imageSrc:e}}});const V=["data-type","src"];function P(s,p,e,n,c,i){return y(),u("div",{"data-testid":"avatar",class:F(s.classNames)},[b(s.$slots,"default",{},()=>[x("img",{"data-testid":"avatar-image",class:F(["avatar__image",s.imgClass]),"data-type":s.type,src:s.imageSrc,alt:"Avatar Image"},null,10,V)])],2)}const t=S(I,[["render",P]]);var k=w,h=k.createSVGComponent(h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M26 14H24v2h2a3.0033 3.0033 0 013 3v4h2V19A5.0058 5.0058 0 0026 14zM24 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 2zM23 30H21V28a3.0033 3.0033 0 00-3-3H14a3.0033 3.0033 0 00-3 3v2H9V28a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM16 13a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0016 11zM8 14H6a5.0059 5.0059 0 00-5 5v4H3V19a3.0033 3.0033 0 013-3H8zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"}}]),N=h;const U=N,R=o("",3),j=o("",2),M=o("",2),$=o("",3),H=o("",3),B=o("",6),O=o("",7),X=JSON.parse('{"title":"Avatar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Using image","slug":"using-image","link":"#using-image","children":[]},{"level":3,"title":"Using alias","slug":"using-alias","link":"#using-alias","children":[]},{"level":3,"title":"Using icon","slug":"using-icon","link":"#using-icon","children":[]}]},{"level":2,"title":"Sizing","slug":"sizing","link":"#sizing","children":[]},{"level":2,"title":"Variant","slug":"variant","link":"#variant","children":[{"level":3,"title":"Auto-detect variant","slug":"auto-detect-variant","link":"#auto-detect-variant","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/avatar/index.md"}'),L={name:"components/avatar/index.md"},Y=Object.assign(L,{setup(s){return(p,e)=>{const n=q("preview");return y(),u("div",null,[R,a(n,null,{default:l(()=>[a(t,{src:"https://picsum.photos/50"})]),_:1}),j,a(n,null,{default:l(()=>[a(t,{variant:"alias",name:"Tarjono Smith"})]),_:1}),M,a(n,null,{default:l(()=>[a(t,null,{default:l(()=>[a(z(U))]),_:1})]),_:1}),$,a(n,{class:"flex-col items-center gap-3 lg:flex-row"},{default:l(()=>[a(t,{src:"https://picsum.photos/24",size:"xs"}),a(t,{src:"https://picsum.photos/32",size:"sm"}),a(t,{src:"https://picsum.photos/40",size:"md"}),a(t,{src:"https://picsum.photos/56",size:"lg"}),a(t,{src:"https://picsum.photos/96",size:"xl"})]),_:1}),H,a(n,{class:"gap-3"},{default:l(()=>[a(t,{variant:"image",src:"https://picsum.photos/40"}),a(t,{variant:"alias",name:"Tarjono Smith"})]),_:1}),B,a(n,{class:"gap-3"},{default:l(()=>[a(t,{variant:"image",src:"https://picsum.photos/40"}),a(t,{variant:"alias",name:"Tarjono Smith"}),a(t)]),_:1}),O])}}});export{X as __pageData,Y as default};
