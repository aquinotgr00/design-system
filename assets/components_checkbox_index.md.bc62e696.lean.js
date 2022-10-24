import{B as x}from"./chunks/Banner.9a945726.js";import{C as p}from"./chunks/Checkbox.96100e94.js";import{C as f}from"./chunks/Caption.fd5eeeee.js";import{g as F,h as g,b as k,o as h,c as m,d as l,w as s,a,t as y,e as c,k as o,u as v,K as T,O as E,P as V,l as S}from"./app.32e5ad64.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.f3907e84.js";import"./chunks/20.9e9150bb.js";import"./chunks/utils-6ba05f5b.e05eb0d9.js";import"./chunks/16.8558adb0.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.e4cd9420.js";import"./chunks/use-checkbox.174d11fe.js";import"./chunks/value.27565d8f.js";const q=c("",3),I=c("",2),P=a("div",null,"Checklist Label",-1),w=c("",2),R=c("",2),B=c("",2),N=a("p",null,[a("strong",null,"Result :")],-1),U=c("",3),L=a("p",null,[a("strong",null,"Result :")],-1),j=c("",3),O=a("strong",null,"Warn!",-1),W={class:"flex flex-col gap-3"},G=a("p",null,[a("strong",null,"Selected :")],-1),J={class:"whitespace-normal"},K=c("",3),z={class:"flex flex-col gap-3"},H=a("p",null,[a("strong",null,"Result :")],-1),M={class:"whitespace-normal"},Q=c("",10),rs=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"With Subtext","slug":"with-subtext","link":"#with-subtext","children":[]}]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly State","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Custom v-model value","slug":"custom-v-model-value","link":"#custom-v-model-value","children":[]},{"level":3,"title":"Array v-model","slug":"array-v-model","link":"#array-v-model","children":[]}]},{"level":2,"title":"Indeterminate (3-state)","slug":"indeterminate-3-state","link":"#indeterminate-3-state","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/checkbox/index.md"}'),X={name:"components/checkbox/index.md"},Ds=Object.assign(X,{setup(Y){F(!1),F(!1);const u=F(!1),C=F("disagree"),t=F([]),d=F(["apple","grape","orange"]),D=F(["apple"]),i=g({get(){return D.value.length===d.value.length},set(A){i.value!==A&&(D.value=A?[...d.value]:[])}}),_=g(()=>D.value.length>0&&D.value.length<d.value.length);return(A,n)=>{const r=k("preview");return h(),m("div",null,[q,l(r,null,{default:s(()=>[l(p,null,{default:s(()=>[o("Checklist Label")]),_:1})]),_:1}),I,l(r,null,{default:s(()=>[l(p,null,{default:s(()=>[P,l(f,null,{default:s(()=>[o("Text")]),_:1})]),_:1})]),_:1}),w,l(r,null,{default:s(()=>[l(p,{disabled:""},{default:s(()=>[o(" Checkbox Label ")]),_:1})]),_:1}),R,l(r,null,{default:s(()=>[l(p,{readonly:""},{default:s(()=>[o(" Checkbox Label ")]),_:1})]),_:1}),B,l(r,{class:"flex-col items-center gap-3"},{default:s(()=>[l(p,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=e=>u.value=e)},{default:s(()=>[o("Checkbox Label")]),_:1},8,["modelValue"])]),_:1}),N,a("pre",null,[a("code",null,y(u.value),1)]),U,l(r,{class:"flex-col items-center gap-3"},{default:s(()=>[l(p,{modelValue:C.value,"onUpdate:modelValue":n[1]||(n[1]=e=>C.value=e),value:"agree","unchecked-value":"disagree"},{default:s(()=>[o(" I agree with Term and Condition ")]),_:1},8,["modelValue"])]),_:1}),L,a("pre",null,[a("code",null,y(C.value),1)]),j,l(x,null,{default:s(()=>[O,o(" selected order is not guaranteed")]),_:1}),l(r,{class:"flex-col items-center"},{default:s(()=>[a("div",W,[l(p,{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=e=>t.value=e),value:"apple"},{default:s(()=>[o("Apple")]),_:1},8,["modelValue"]),l(p,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value=e),value:"grape"},{default:s(()=>[o("Grape")]),_:1},8,["modelValue"]),l(p,{modelValue:t.value,"onUpdate:modelValue":n[4]||(n[4]=e=>t.value=e),value:"pineapple"},{default:s(()=>[o("Pineapple")]),_:1},8,["modelValue"]),l(p,{modelValue:t.value,"onUpdate:modelValue":n[5]||(n[5]=e=>t.value=e),value:{id:1,name:"Tarjono"}},{default:s(()=>[o("Object")]),_:1},8,["modelValue"]),l(p,{modelValue:t.value,"onUpdate:modelValue":n[6]||(n[6]=e=>t.value=e),value:["Item 1"]},{default:s(()=>[o("Array")]),_:1},8,["modelValue"])])]),_:1}),G,a("pre",J,[a("code",null,y(t.value),1)]),K,l(r,{class:"flex-col items-center"},{default:s(()=>[a("div",z,[l(p,{modelValue:v(i),"onUpdate:modelValue":n[7]||(n[7]=e=>T(i)?i.value=e:null),indeterminate:v(_)},{default:s(()=>[o(" Select All ")]),_:1},8,["modelValue","indeterminate"]),(h(!0),m(E,null,V(d.value,e=>(h(),S(p,{modelValue:D.value,"onUpdate:modelValue":n[8]||(n[8]=b=>D.value=b),value:e,class:"ml-4"},{default:s(()=>[o(y(e),1)]),_:2},1032,["modelValue","value"]))),256))])]),_:1}),H,a("pre",M,[a("code",null,y(D.value),1)]),Q])}}});export{rs as __pageData,Ds as default};
