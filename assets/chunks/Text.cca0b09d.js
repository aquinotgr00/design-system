import{d as s,f as r,_ as i,o,y as f,z as c,r as l,n as u,J as d}from"./framework.76afac0a.js";const p=s({props:{variant:{type:String,default:"body"},href:{type:String,default:void 0}},setup(e){const a=r(()=>e.href?"a":"span"),n=r(()=>{const t=[""];return e.variant&&t.push(`freetext--${e.variant}`),e.href&&t.push("freetext--hyperlink"),e.href&&(e.variant==="caption"||e.variant==="caption2")&&t.push("freetext--medium"),t});return{hyperlink:a,classNames:n}}});function h(e,a,n,t,_,m){return o(),f(d(e.hyperlink),{"data-testid":"freetext",class:u(["freetext",e.classNames]),href:e.href},{default:c(()=>[l(e.$slots,"default")]),_:3},8,["class","href"])}const v=i(p,[["render",h]]);export{v as p};
