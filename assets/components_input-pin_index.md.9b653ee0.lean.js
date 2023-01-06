import{p as k}from"./chunks/Input.691197a4.js";import{t as I}from"./chunks/index.c8f9a057.js";import{u as E}from"./chunks/use-focus.0e5a5d4b.js";import{i as N,C as B,j as C,k as f,f as R,r as T,o as h,c as D,P as w,Q as q,q as $,a2 as U,a0 as F,n as j,a,w as r,h as y,y as K,u as b,b as p,J as O}from"./app.9536caf3.js";import{j as G,s as J}from"./chunks/index.35064abe.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.0b21c04d.js";import"./chunks/index.d692cd26.js";import"./chunks/utils-6ba05f5b.a568a454.js";import"./chunks/toNumber.685f5789.js";import"./chunks/isSymbol.b765f5ee.js";import"./chunks/isObjectLike.46b91259.js";const L=N({components:{pInput:k},inheritAttrs:!1,props:{modelValue:{type:String,default:""},length:{type:[Number,String],default:5},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","clear"],setup(e,{emit:l}){const d=I("root"),n=G(B(e,"length")),t=C([...e.modelValue].slice(0,n.value).map(s=>s.trim())),c=f(()=>{const s=[];return e.disabled&&s.push("input-pin--disabled"),e.readonly&&s.push("input-pin--readonly"),e.error&&s.push("input-pin--error","state--error"),s}),{next:u,prev:o}=E(d,!1),g=f({get(){return[...e.modelValue].slice(0,n.value)},set(s){const _=s.map(m=>m||" ").join("").trimEnd();l("update:modelValue",_)}});J(t,g,{deep:!0});function A(s){return t.value.at(s)}function S(s,_){const v=_.target.value;t.value[s]=v,d.value&&(v?u():o())}function P(s){s.target.select()}function V(s){d.value&&!s.target.value&&o()}function x(s){t.value=[...s.clipboardData.getData("Text")].slice(0,n.value)}return{classNames:c,num:n,localModel:t,getValue:A,setValue:S,onFocus:P,onDelete:V,onPaste:x,nextFocus:u,prevFocus:o}}});function z(e,l,d,n,t,c){const u=T("p-input");return h(),D("div",{ref:"root","data-testid":"input-pin",class:j(["input-pin",e.classNames])},[(h(!0),D(w,null,q(e.num,o=>(h(),$(u,U({key:o,maxlength:"1"},e.$attrs,{"model-value":e.getValue(o-1),clearable:!1,readonly:e.readonly,disabled:e.disabled,error:e.error,onInput:g=>e.setValue(o-1,g),onFocusPassive:e.onFocus,onKeyupPassive:[F(e.onDelete,["delete"]),F(e.prevFocus,["left"]),F(e.nextFocus,["right"])],onPastePassive:e.onPaste}),null,16,["model-value","readonly","disabled","error","onInput","onFocusPassive","onKeyupPassive","onPastePassive"]))),128))],2)}const i=R(L,[["render",z]]),M=p("",4),Q=p("",3),Y=p("",2),H=p("",2),W=p("",2),X=p("",3),Z=y("p",null,[y("strong",null,"result:")],-1),ee={class:"truncate"},se=p("",11),ye=JSON.parse('{"title":"Input Pin","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Number of Input","slug":"number-of-input","link":"#number-of-input","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly State","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Error State","slug":"error-state","link":"#error-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model-1","link":"#binding-v-model-1","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/input-pin/index.md"}'),te={name:"components/input-pin/index.md"},ge=Object.assign(te,{setup(e){const l=C("");return(d,n)=>{const t=T("preview");return h(),D("div",null,[M,a(t,null,{default:r(()=>[a(i)]),_:1}),Q,a(t,null,{default:r(()=>[a(i,{length:"3"})]),_:1}),Y,a(t,null,{default:r(()=>[a(i,{disabled:""})]),_:1}),H,a(t,null,{default:r(()=>[a(i,{readonly:""})]),_:1}),W,a(t,null,{default:r(()=>[a(i,{error:""})]),_:1}),X,a(t,null,{default:r(()=>[a(i,{modelValue:b(l),"onUpdate:modelValue":n[0]||(n[0]=c=>O(l)?l.value=c:null)},null,8,["modelValue"])]),_:1}),Z,y("pre",ee,[y("code",null,K(b(l)||"-"),1)]),se])}}});export{ye as __pageData,ge as default};
