import{_ as i}from"./Radio.vue_vue_type_style_index_0_lang.6ce0c5ce.js";import{k as d,r,o as s,c as a,m as o,q as c,l as p,n as h,B as _}from"../app.b96ee9a3.js";const m={class:"radio__icon"},w={key:1,width:"10",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g=o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.81581 8.48528L5.23002 9.8995L6.64423 8.48528L13.7153 1.41421L12.3011 0L5.23002 7.07107L1.69449 3.53553L0.280273 4.94975L3.81581 8.48528Z"},null,-1),k=[g],u={key:2,width:"10",height:"10",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v=o("circle",{cx:"7",cy:"7",r:"6.25"},null,-1),f=[v],L={class:"radio__label"},B=["value","name","disabled"];function b(e,n,y,C,$,I){const l=r("IconCheck");return s(),a("label",{"data-testid":"radio",class:h(["radio",e.classNames]),onClick:n[0]||(n[0]=_((...t)=>e.toggle&&e.toggle(...t),["prevent"]))},[o("span",m,[e.appearance==="option"?(s(),c(l,{key:0})):e.appearance==="checkbox"?(s(),a("svg",w,k)):(s(),a("svg",u,f))]),o("span",L,[p(e.$slots,"default",{isChecked:e.model})]),o("input",{type:"radio",value:e.model,name:e.name,disabled:e.disabled||e.readonly},null,8,B)],2)}const R=d(i,[["render",b]]);export{R};