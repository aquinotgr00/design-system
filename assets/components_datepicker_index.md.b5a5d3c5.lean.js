import{D as f}from"./chunks/Dropdown.f25994ab.js";import{p as A}from"./chunks/Input.79106684.js";import{C as b}from"./chunks/Calendar.2fed704f.js";import{u as T}from"./chunks/index.36f8c2c5.js";import{u as V}from"./chunks/utils-6ba05f5b.966f5c87.js";import{i as k,f as S}from"./chunks/index.e2432ff2.js";import{f as x,g as _,h as m,_ as E,b as y,o as g,l as M,w as n,d as a,n as P,c as I,a as D,t as q,e as p,k as h}from"./app.0f0a7ab1.js";import{B as w}from"./chunks/Banner.d3a80d04.js";import"./chunks/index.734690a2.js";import"./chunks/Button.7cbf5034.js";import"./chunks/use-popper.a06417a7.js";import"./chunks/16.f4ca7518.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.104fc20b.js";import"./chunks/20.8513337f.js";import"./chunks/commonjsHelpers.cd000407.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.2f1a912a.js";import"./chunks/20.32c21e9e.js";import"./chunks/16.e8611f95.js";var N=V,v=N.createSVGComponent(v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"}}]),R=v;const B=R,U=x({components:{Dropdown:f,Input:A,Calendar:b,IconCalendar:B},props:{modelValue:{type:Date,default:void 0},placeholder:{type:String,default:""},format:{type:String,default:"dd/MM/yyyy"},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},max:{type:Date,default:void 0},min:{type:Date,default:void 0},mode:{type:String,default:"date"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["change","update:modelValue"],setup(e,{emit:s}){const r=T(e),l=_(!1),t=m(()=>k(r.value)?S(r.value,e.format):""),i=m(()=>{const c=[];return l.value&&c.push("datepicker--open"),e.disabled&&c.push("datepicker--disabled"),e.readonly&&c.push("datepicker--readonly"),c});function d(){!e.disabled&&!e.readonly&&(l.value=!0)}function F(c){l.value=!1,s("change",c)}return{isOpen:l,classNames:i,model:r,value:t,onFocus:d,onSelected:F}}});function O(e,s,r,l,t,i){const d=y("Input"),F=y("IconCalendar"),c=y("Calendar"),C=y("Dropdown");return g(),M(C,{modelValue:e.isOpen,"onUpdate:modelValue":s[1]||(s[1]=u=>e.isOpen=u),class:P(["datepicker",e.classNames]),"data-testid":"datepicker","aria-label":"datepicker",disabled:e.disabled},{activator:n(()=>[a(d,{value:e.value,"model-value":e.value,"data-testid":"datepicker-input",class:"datepicker__input",placeholder:e.placeholder,disabled:e.disabled,readonly:"",onFocus:e.onFocus},null,8,["value","model-value","placeholder","disabled","onFocus"]),a(F,{class:"datepicker__icon"})]),default:n(()=>[a(c,{modelValue:e.model,"onUpdate:modelValue":s[0]||(s[0]=u=>e.model=u),disabled:e.disabled,readonly:e.readonly,max:e.max,min:e.min,mode:e.mode,class:"datepicker__calendar",onChange:e.onSelected},null,8,["modelValue","disabled","readonly","max","min","mode","onChange"])]),_:1},8,["modelValue","class","disabled"])}const o=E(U,[["render",O]]),$=p("",3),z=p("",3),j=p("",3),H=D("strong",null,"Please note",-1),L=D("b",null,"date-fns",-1),Y=D("a",{href:"https://date-fns.org/docs/format",target:"_blank"},"date-fns",-1),J=p("",3),G=p("",4),K=p("",2),Q=p("",2),W=p("",2),X=p("",2),Z={class:"max-w-full truncate"},ee=p("",7),ve=JSON.parse('{"title":"Datepicker","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Placeholder","slug":"placeholder","link":"#placeholder","children":[]},{"level":2,"title":"Display Format","slug":"display-format","link":"#display-format","children":[]},{"level":2,"title":"Limiting Date","slug":"limiting-date","link":"#limiting-date","children":[]},{"level":2,"title":"Mode Variant","slug":"mode-variant","link":"#mode-variant","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly state","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/datepicker/index.md"}'),ae={name:"components/datepicker/index.md"},Ce=Object.assign(ae,{setup(e){const s=_();return(r,l)=>{var i;const t=y("preview");return g(),I("div",null,[$,a(t,null,{default:n(()=>[a(o,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=d=>s.value=d)},null,8,["modelValue"])]),_:1}),z,a(t,null,{default:n(()=>[a(o,{placeholder:"Pick A Date"})]),_:1}),j,a(w,null,{default:n(()=>[H,h(", this component internally use "),L,h(" for date formatting. The format tokens differ from Moment.js. See: "),Y]),_:1}),a(t,null,{default:n(()=>[a(o,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=d=>s.value=d),format:"yyyy-MM-dd"},null,8,["modelValue"])]),_:1}),J,a(t,null,{default:n(()=>[a(o,{min:new Date(2022,0,1),max:new Date(2022,11,31)},null,8,["min","max"])]),_:1}),G,a(t,{class:"flex-col items-center gap-2"},{default:n(()=>[a(o,{format:"dd MMM yyyy",mode:"date"}),a(o,{format:"MMM yyyy",mode:"month"}),a(o,{format:"yyyy",mode:"year"})]),_:1}),K,a(t,{class:"flex-col items-center gap-2"},{default:n(()=>[a(o,{disabled:""})]),_:1}),Q,a(t,null,{default:n(()=>[a(o,{readonly:""})]),_:1}),W,a(t,null,{default:n(()=>[a(o,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=d=>s.value=d)},null,8,["modelValue"])]),_:1}),X,D("pre",Z,[D("code",null,q((i=s.value)!=null?i:"-"),1)]),ee])}}});export{ve as __pageData,Ce as default};
