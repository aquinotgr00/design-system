import{d as u,c as l,a as f}from"./create-image.28dfb74f.js";import{l as v}from"./load-image.265b152a.js";import{d as g,h as _,f as c,w as y,j as S,_ as h,o as A,c as $,r as k,n as d,x as p}from"./framework.76afac0a.js";const z=g({props:{variant:{type:String,default:void 0},src:{type:String,default:void 0},fallbackSrc:{type:String,default:u()},name:{type:String,default:void 0},size:{type:String,default:"md"},imgClass:{type:[String,Array,Object],default:void 0}},emits:["imgloaded","imgerror"],setup(a,{emit:r}){const e=_(l(50)),i=c(()=>{const t=["avatar"];return a.size&&t.push(`avatar--${a.size}`),t}),s=c(()=>a.variant?a.variant:!a.src&&a.name?"alias":"image");function n(){s.value==="alias"?m():o()}function o(){e.value=l(50),v(a.src).then(()=>{e.value=a.src,r("imgloaded",a.src)}).catch(t=>{e.value=a.fallbackSrc,r("imgerror",t)})}function m(){e.value=f(a.name)}return y(()=>[a.src,a.name,a.variant],()=>{n()}),S(()=>{n()}),{classNames:i,type:s,imageSrc:e}}});const C=["data-type","src"];function b(a,r,e,i,s,n){return A(),$("div",{"data-testid":"avatar",class:d(a.classNames)},[k(a.$slots,"default",{},()=>[p("img",{"data-testid":"avatar-image",class:d(["avatar__image",a.imgClass]),"data-type":a.type,src:a.imageSrc,alt:"Avatar Image"},null,10,C)])],2)}const w=h(z,[["render",b]]);export{w as p};
