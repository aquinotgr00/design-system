import{D as A}from"./chunks/Dropdown.ad4eea7a.js";import{p as T}from"./chunks/Input.55490814.js";import{C as k,i as V,f as S}from"./chunks/Calendar.15c33b44.js";import{u as E}from"./chunks/index.b7e7b7cb.js";import{u as x}from"./chunks/utils-6ba05f5b.5160683a.js";import{i as P,j as v,k as _,f as I,r as i,o as C,q as M,w as l,a,n as q,c as w,h as y,y as N,u as D,b as p,K as m,e as g}from"./app.98882f81.js";import{B as R}from"./chunks/Banner.0527dfe8.js";import"./chunks/Button.50d435cd.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.c06aea1c.js";import"./chunks/use-focus.0e5a5d4b.js";import"./chunks/toNumber.685f5789.js";import"./chunks/isSymbol.b765f5ee.js";import"./chunks/isObjectLike.46b91259.js";import"./chunks/floating-ui.dom.esm.4e25a8ce.js";import"./chunks/16.ba0af3c7.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4c97a4dc.js";import"./chunks/Card.7ac715bb.js";import"./chunks/16.972ad843.js";import"./chunks/Heading.c17fc4ca.js";import"./chunks/20.f2f5735a.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.9a7de1ce.js";import"./chunks/20.f51e8fe4.js";var B=x,f=B.createSVGComponent(f,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"}}]),U=f;const O=U,$=P({components:{Dropdown:A,Input:T,Calendar:k,IconCalendar:O},props:{modelValue:{type:Date,default:void 0},placeholder:{type:String,default:""},format:{type:String,default:"dd/MM/yyyy"},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},error:{type:Boolean,default:void 0},max:{type:Date,default:void 0},min:{type:Date,default:void 0},mode:{type:String,default:"date"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["change","update:modelValue"],setup(e,{emit:s}){const c=E(e),t=v(!1),n=_(()=>V(c.value)?S(c.value,e.format):""),d=_(()=>{const r=[];return t.value&&r.push("datepicker--open"),e.disabled&&r.push("datepicker--disabled"),e.readonly&&r.push("datepicker--readonly"),e.error&&r.push("datepicker--error","state--error"),r});function F(){!e.disabled&&!e.readonly&&(t.value=!0)}function u(r){t.value=!1,s("change",r)}return{isOpen:t,classNames:d,model:c,value:n,onFocus:F,onSelected:u}}});function j(e,s,c,t,n,d){const F=i("IconCalendar"),u=i("Input"),r=i("Calendar"),b=i("Dropdown");return C(),M(b,{modelValue:e.isOpen,"onUpdate:modelValue":s[1]||(s[1]=h=>e.isOpen=h),class:q(["datepicker",e.classNames]),"data-testid":"datepicker","aria-label":"datepicker",disabled:e.disabled},{activator:l(()=>[a(u,{value:e.value,"model-value":e.value,"data-testid":"datepicker-input",class:"datepicker__input",placeholder:e.placeholder,disabled:e.disabled,readonly:"",onFocus:e.onFocus},{append:l(()=>[a(F,{class:"datepicker__icon"})]),_:1},8,["value","model-value","placeholder","disabled","onFocus"])]),default:l(()=>[a(r,{modelValue:e.model,"onUpdate:modelValue":s[0]||(s[0]=h=>e.model=h),disabled:e.disabled,readonly:e.readonly,max:e.max,min:e.min,mode:e.mode,class:"datepicker__calendar",onChange:e.onSelected},null,8,["modelValue","disabled","readonly","max","min","mode","onChange"])]),_:1},8,["modelValue","class","disabled"])}const o=I($,[["render",j]]),z=p("",3),H=p("",3),L=p("",3),Y=y("strong",null,"Please note",-1),J=y("b",null,"date-fns",-1),G=y("a",{href:"https://date-fns.org/docs/format",target:"_blank"},"date-fns",-1),K=p("",3),Q=p("",4),W=p("",2),X=p("",2),Z=p("",2),ee=p("",2),ae=p("",2),se={class:"max-w-full truncate"},le=p("",9),Ve=JSON.parse('{"title":"Datepicker","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Placeholder","slug":"placeholder","link":"#placeholder","children":[]},{"level":2,"title":"Display Format","slug":"display-format","link":"#display-format","children":[]},{"level":2,"title":"Limiting Date","slug":"limiting-date","link":"#limiting-date","children":[]},{"level":2,"title":"Mode Variant","slug":"mode-variant","link":"#mode-variant","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly state","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Error state","slug":"error-state","link":"#error-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/datepicker/index.md"}'),te={name:"components/datepicker/index.md"},Se=Object.assign(te,{setup(e){const s=v();return(c,t)=>{const n=i("preview");return C(),w("div",null,[z,a(n,null,{default:l(()=>[a(o,{modelValue:D(s),"onUpdate:modelValue":t[0]||(t[0]=d=>m(s)?s.value=d:null)},null,8,["modelValue"])]),_:1}),H,a(n,null,{default:l(()=>[a(o,{placeholder:"Pick A Date"})]),_:1}),L,a(R,null,{default:l(()=>[Y,g(", this component internally use "),J,g(" for date formatting. The format tokens differ from Moment.js. See: "),G]),_:1}),a(n,null,{default:l(()=>[a(o,{modelValue:D(s),"onUpdate:modelValue":t[1]||(t[1]=d=>m(s)?s.value=d:null),format:"yyyy-MM-dd"},null,8,["modelValue"])]),_:1}),K,a(n,null,{default:l(()=>[a(o,{min:new Date(2022,0,1),max:new Date(2022,11,31)},null,8,["min","max"])]),_:1}),Q,a(n,{class:"flex-col items-center space-y-2"},{default:l(()=>[a(o,{format:"dd MMM yyyy",mode:"date"}),a(o,{format:"MMM yyyy",mode:"month"}),a(o,{format:"yyyy",mode:"year"})]),_:1}),W,a(n,{class:"flex-col items-center space-y-2"},{default:l(()=>[a(o,{disabled:""})]),_:1}),X,a(n,null,{default:l(()=>[a(o,{readonly:""})]),_:1}),Z,a(n,null,{default:l(()=>[a(o,{error:""})]),_:1}),ee,a(n,null,{default:l(()=>[a(o,{modelValue:D(s),"onUpdate:modelValue":t[2]||(t[2]=d=>m(s)?s.value=d:null)},null,8,["modelValue"])]),_:1}),ae,y("pre",se,[y("code",null,N(D(s)??"-"),1)]),le])}}});export{Ve as __pageData,Se as default};
