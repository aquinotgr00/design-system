import{d as t,_ as l,A as d,Q as n,b as s,a as u}from"../app.a5bbd9db.js";import{u as p}from"./use-input.ed345430.js";const r=t({props:{modelValue:{type:[String,Number],default:""},disabled:{type:Boolean},readonly:{type:Boolean}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){return{value:p(e)}}}),i=["disabled","readonly"];function m(e,a,_,v,y,f){return d((u(),s("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),disabled:e.disabled,readonly:e.readonly,"data-testid":"input",class:"input"},null,8,i)),[[n,e.value]])}var V=l(r,[["render",m]]);export{V as I};