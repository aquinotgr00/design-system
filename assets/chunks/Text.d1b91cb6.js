import{d as s,l as r,_ as f,o as i,A as o,B as l,r as u,n as c,L as h}from"./framework.e03f6a99.js";const d=s({props:{variant:{type:String,default:"body"},href:{type:String,default:void 0},weight:{type:String,default:"normal"},transform:{type:String,default:"normalcase"}},setup(e){const a=r(()=>e.href?"a":"span"),n=r(()=>{const t=[""];return e.variant&&t.push(`freetext--${e.variant}`),e.weight&&t.push(`freetext--${e.weight}`),e.transform&&t.push(`freetext--${e.transform}`),e.href&&t.push("freetext--hyperlink"),e.href&&(e.variant==="caption"||e.variant==="caption2")&&t.push("freetext--medium"),t});return{hyperlink:a,classNames:n}}});function m(e,a,n,t,_,p){return i(),o(h(e.hyperlink),{"data-testid":"freetext",class:c(["freetext",e.classNames]),href:e.href},{default:l(()=>[u(e.$slots,"default")]),_:3},8,["class","href"])}const g=f(d,[["render",m]]);export{g as p};
