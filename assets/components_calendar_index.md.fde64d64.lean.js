import{C as l,f as y}from"./chunks/Calendar.d3c68e8c.js";import{B as F}from"./chunks/Banner.aa27a74e.js";import{j as h,r as u,o as m,c as _,a as s,w as n,h as a,y as i,u as p,b as t,J as D,e as d}from"./app.149185f1.js";import"./chunks/Button.568309a4.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.61c2a28a.js";import"./chunks/Card.b099673a.js";import"./chunks/16.a64c59aa.js";import"./chunks/utils-6ba05f5b.f4b31ac9.js";import"./chunks/Heading.101dc47b.js";import"./chunks/20.cd66da1f.js";import"./chunks/index.5ad253f4.js";import"./chunks/index.5a999dbb.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.f4e68c06.js";import"./chunks/20.081c0146.js";const g=t("",3),C=t("",3),v=t("",4),A=t("",2),b=t("",2),f=t("",2),T=t("",2),x={class:"max-w-full truncate"},S=a("div",{class:"font-semibold"}," Info ",-1),E=a("div",{class:"text-sm"},[d(" value is a native "),a("code",null,"Date"),d(" instance, Component doesn't provide any date formatting. if you want change the format, you can use "),a("a",{href:"https://date-fns.org/"},"date-fns"),d(" or "),a("a",{href:"https://momentjs.com/"},"moment.js")],-1),V=a("p",null,"Example:",-1),k=t("",10),K=JSON.parse('{"title":"Calendar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Limiting Date","slug":"limiting-date","link":"#limiting-date","children":[]},{"level":2,"title":"Mode Variant","slug":"mode-variant","link":"#mode-variant","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly state","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/calendar/index.md"}'),P={name:"components/calendar/index.md"},Q=Object.assign(P,{setup(I){const e=h();return(N,c)=>{const o=u("preview");return m(),_("div",null,[g,s(o,null,{default:n(()=>[s(l)]),_:1}),C,s(o,null,{default:n(()=>[s(l,{min:new Date(2022,0,1),max:new Date(2022,11,31)},null,8,["min","max"])]),_:1}),v,s(o,{class:"flex-col items-center space-y-2"},{default:n(()=>[s(l,{mode:"date"}),s(l,{mode:"month"}),s(l,{mode:"year"})]),_:1}),A,s(o,{class:"flex-col items-center space-y-2"},{default:n(()=>[s(l,{disabled:""})]),_:1}),b,s(o,null,{default:n(()=>[s(l,{readonly:""})]),_:1}),f,s(o,null,{default:n(()=>[s(l,{modelValue:p(e),"onUpdate:modelValue":c[0]||(c[0]=r=>D(e)?e.value=r:null)},null,8,["modelValue"])]),_:1}),T,a("pre",x,[a("code",null,i(p(e)??"-"),1)]),s(F,{class:"mt-4"},{default:n(()=>[S,E]),_:1}),V,s(o,null,{default:n(()=>[a("div",null,[s(l,{modelValue:p(e),"onUpdate:modelValue":c[1]||(c[1]=r=>D(e)?e.value=r:null)},null,8,["modelValue"]),a("div",null," Result: "+i(p(e)&&p(y)(p(e),"dd-MM-yyyy")),1)])]),_:1}),k])}}});export{K as __pageData,Q as default};