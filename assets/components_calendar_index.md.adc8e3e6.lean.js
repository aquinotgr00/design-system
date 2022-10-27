import{C as e}from"./chunks/Calendar.2fed704f.js";import{B as D}from"./chunks/Banner.d3a80d04.js";import{f as F}from"./chunks/index.e2432ff2.js";import{g as y,b as u,o as h,c as _,d as s,w as n,a,t as i,e as l,u as m,k as r}from"./app.0f0a7ab1.js";import"./chunks/Button.7cbf5034.js";import"./chunks/20.8513337f.js";import"./chunks/utils-6ba05f5b.966f5c87.js";import"./chunks/commonjsHelpers.cd000407.js";import"./chunks/index.36f8c2c5.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.2f1a912a.js";import"./chunks/20.32c21e9e.js";import"./chunks/16.e8611f95.js";const C=l("",3),g=l("",3),A=l("",4),v=l("",2),b=l("",2),f=l("",2),T=l("",2),x={class:"max-w-full truncate"},S=a("div",{class:"font-semibold"}," Info ",-1),E=a("div",{class:"text-sm"},[r(" value is a native "),a("code",null,"Date"),r(" instance, Component doesn't provide any date formatting. if you want change the format, you can use "),a("a",{href:"https://date-fns.org/"},"date-fns"),r(" or "),a("a",{href:"https://momentjs.com/"},"moment.js")],-1),V=a("p",null,"Example:",-1),P=l("",8),G=JSON.parse('{"title":"Calendar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Limiting Date","slug":"limiting-date","link":"#limiting-date","children":[]},{"level":2,"title":"Mode Variant","slug":"mode-variant","link":"#mode-variant","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly state","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/calendar/index.md"}'),I={name:"components/calendar/index.md"},H=Object.assign(I,{setup(N){const t=y();return(k,p)=>{var d;const o=u("preview");return h(),_("div",null,[C,s(o,null,{default:n(()=>[s(e)]),_:1}),g,s(o,null,{default:n(()=>[s(e,{min:new Date(2022,0,1),max:new Date(2022,11,31)},null,8,["min","max"])]),_:1}),A,s(o,{class:"flex-col items-center gap-2"},{default:n(()=>[s(e,{mode:"date"}),s(e,{mode:"month"}),s(e,{mode:"year"})]),_:1}),v,s(o,{class:"flex-col items-center gap-2"},{default:n(()=>[s(e,{disabled:""})]),_:1}),b,s(o,null,{default:n(()=>[s(e,{readonly:""})]),_:1}),f,s(o,null,{default:n(()=>[s(e,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=c=>t.value=c)},null,8,["modelValue"])]),_:1}),T,a("pre",x,[a("code",null,i((d=t.value)!=null?d:"-"),1)]),s(D,{class:"mt-4"},{default:n(()=>[S,E]),_:1}),V,s(o,null,{default:n(()=>[a("div",null,[s(e,{modelValue:t.value,"onUpdate:modelValue":p[1]||(p[1]=c=>t.value=c)},null,8,["modelValue"]),a("div",null," Result: "+i(t.value&&m(F)(t.value,"dd-MM-yyyy")),1)])]),_:1}),P])}}});export{G as __pageData,H as default};
