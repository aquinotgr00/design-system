import{d,c as l,a as f}from"./create-image.19720f32.js";import{l as o}from"./load-image.5a7761ed.js";import{f as v,g,h as c,i as y,j as S}from"../app.18e941ec.js";const b=v({props:{variant:{type:String,default:void 0},src:{type:String,default:void 0},fallbackSrc:{type:String,default:d()},name:{type:String,default:void 0},size:{type:String,default:"md"},imgClass:{type:[String,Array,Object],default:void 0}},emits:["imgloaded","imgerror"],setup(a,{emit:i}){const e=g(l(50)),s=c(()=>{const t=["avatar"];return a.size&&t.push(`avatar--${a.size}`),t}),n=c(()=>a.variant?a.variant:!a.src&&a.name?"alias":"image");function r(){n.value==="alias"?m():u()}function u(){e.value=l(50),o(a.src).then(()=>{e.value=a.src,i("imgloaded",a.src)}).catch(t=>{e.value=a.fallbackSrc,i("imgerror",t)})}function m(){e.value=f(a.name)}return y(()=>[a.src,a.name,a.variant],()=>{r()}),S(()=>{r()}),{classNames:s,type:n,imageSrc:e}}});export{b as _};
