import{I as u}from"./index.a3ecab28.js";import{d,U as p,a5 as i,f as l,_ as a,o as n,c as o,r,n as _}from"./framework.76afac0a.js";const c=d({props:{size:{type:String,default:"md"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},setup(e){return p(u,{size:i(e,"size")}),{classNames:l(()=>{const s=[];return e.size&&s.push(`input-group--${e.size}`),e.disabled&&s.push("input-group--disabled","state--disabled"),e.readonly&&s.push("input-group--readonly"),e.error&&s.push("input-group--error","state--error"),s})}}});function f(e,t,s,$,h,v){return n(),o("div",{class:_(["input-group",e.classNames]),"data-testid":"input-group"},[r(e.$slots,"default")],2)}const G=a(c,[["render",f]]);const m={},y={class:"input-group__addon"};function g(e,t){return n(),o("div",y,[r(e.$slots,"default")])}const B=a(m,[["render",g]]);export{B as a,G as p};
