import{u as c}from"./index.1eca2a34.js";import{N as f}from"./index.fe135e19.js";import{d as o}from"./index.f76bdc21.js";import{d as v,l as d,U as _,_ as g,o as h,A as N,B as w,a4 as B,z as V,n as b,r as T,a8 as y,T as C}from"./framework.e03f6a99.js";const $=v({props:{modelValue:{type:Boolean,default:!1},isNav:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(a){const l=c(a),e=_(f,void 0,!0),t=o("(min-width: 1024px)"),r=o("(min-width: 768px)"),n=o("(min-width: 640px)"),p=d(()=>{var s,u,i;return((s=e==null?void 0:e.toggleable)==null?void 0:s.value)==="lg"?t.value:((u=e==null?void 0:e.toggleable)==null?void 0:u.value)==="md"?r.value:((i=e==null?void 0:e.toggleable)==null?void 0:i.value)==="sm"?n.value:l.value}),m=d(()=>{const s=[""];return l.value&&s.push("collapse--show"),a.isNav&&s.push("navbar--collapse"),s});return{model:l,classNames:m,isToggleable:p}}});function S(a,l,e,t,r,n){return h(),N(C,{name:"fade",mode:"out-in"},{default:w(()=>[B(V("div",{"data-testid":"collapse",class:b(["collapse",a.classNames])},[T(a.$slots,"default")],2),[[y,a.model||a.isToggleable]])]),_:3})}const j=g($,[["render",S]]);export{j as p};