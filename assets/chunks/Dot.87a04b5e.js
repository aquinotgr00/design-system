import{i as s,k as n,f as o,o as r,c,n as l}from"../app.149185f1.js";const i=s({props:{color:{type:String,default:"default"},variant:{type:String,default:"default"}},setup(t){return{classNames:n(()=>{const e=["dot"];return t.color&&e.push(`dot--${t.color}`),t.variant&&e.push(`dot--variant-${t.variant}`),e})}}});function u(t,a,e,d,_,f){return r(),c("span",{"data-testid":"dot",class:l(t.classNames)},null,2)}const m=o(i,[["render",u]]);export{m as D};