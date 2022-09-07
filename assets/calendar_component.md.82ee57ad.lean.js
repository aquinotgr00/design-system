import{C as n,f as r}from"./chunks/Calendar.3acdc825.js";import{B as k}from"./chunks/Banner.44f8d435.js";import{r as g,b as _,g as a,h as s,f as t,t as u,i as e,j as m,a as h,u as v,k as d}from"./app.8641e7e5.js";import"./chunks/Button.20e36873.js";import"./chunks/20.ffd9b3c9.js";import"./chunks/utils-6ba05f5b.d89047cc.js";import"./chunks/_commonjsHelpers.c0431a10.js";import"./chunks/use-input.c771b888.js";import"./chunks/index.7e1d9549.js";import"./chunks/16.3cd4fb83.js";const f=e("",3),T=e("",3),y=e("",4),b=e("",2),x=e("",2),C=e("",2),S=e("",2),D={class:"max-w-full truncate"},V=t("div",{class:"font-semibold"}," Info ",-1),A=t("div",{class:"text-sm"},[d(" value is a native "),t("code",null,"Date"),d(" instance, Component doesn't provide any date formatting. if you want change the format, you can use "),t("a",{href:"https://date-fns.org/"},"date-fns"),d(" or "),t("a",{href:"https://momentjs.com/"},"moment.js")],-1),P=t("p",null,"Example:",-1),q=e("",8),z='{"title":"Calendar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":2,"title":"Limiting Date","slug":"limiting-date"},{"level":2,"title":"Mode Variant","slug":"mode-variant"},{"level":2,"title":"Disabled State","slug":"disabled-state"},{"level":2,"title":"Readonly state","slug":"readonly-state"},{"level":2,"title":"Binding v-model","slug":"binding-v-model"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"calendar/component.md"}',I={},F=Object.assign(I,{setup(N){const o=g();return(w,l)=>{var i;const p=m("preview");return h(),_("div",null,[f,a(p,null,{default:s(()=>[a(n)]),_:1}),T,a(p,null,{default:s(()=>[a(n,{min:new Date(2022,0,1),max:new Date(2022,11,31)},null,8,["min","max"])]),_:1}),y,a(p,{class:"flex-col items-center gap-2"},{default:s(()=>[a(n,{mode:"date"}),a(n,{mode:"month"}),a(n,{mode:"year"})]),_:1}),b,a(p,{class:"flex-col items-center gap-2"},{default:s(()=>[a(n,{disabled:""})]),_:1}),x,a(p,null,{default:s(()=>[a(n,{readonly:""})]),_:1}),C,a(p,null,{default:s(()=>[a(n,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c)},null,8,["modelValue"])]),_:1}),S,t("pre",D,[t("code",null,u((i=o.value)!=null?i:"-"),1)]),a(k,{class:"mt-4"},{default:s(()=>[V,A]),_:1}),P,a(p,null,{default:s(()=>[t("div",null,[a(n,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=c=>o.value=c)},null,8,["modelValue"]),t("div",null," Result: "+u(o.value&&v(r)(o.value,"dd-MM-yyyy")),1)])]),_:1}),q])}}});export{z as __pageData,F as default};
