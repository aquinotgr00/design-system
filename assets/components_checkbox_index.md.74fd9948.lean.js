import{B as x}from"./chunks/Banner.2f712e41.js";import{C as p}from"./chunks/Checkbox.5dffd9c7.js";import{C as f}from"./chunks/Caption.561bbd86.js";import{r as F,c as _,g as k,a as h,b as g,h as l,i as s,f as a,t as y,j as c,u as v,S as T,M as E,N as V,l as S,k as o}from"./app.5d60bad4.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.2abc7aac.js";import"./chunks/utils-6ba05f5b.063d2e00.js";import"./chunks/16.5f0f6165.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.cf94739c.js";import"./chunks/use-checkbox.2d800ddc.js";import"./chunks/value.27565d8f.js";const q=c("",3),I=o("Checklist Label"),P=c("",2),N=a("div",null,"Checklist Label",-1),R=o("Text"),w=c("",2),B=o(" Checkbox Label "),U=c("",2),L=o(" Checkbox Label "),j=c("",2),O=o("Checkbox Label"),W=a("p",null,[a("strong",null,"Result :")],-1),G=c("",3),J=o(" I agree with Term and Condition "),M=a("p",null,[a("strong",null,"Result :")],-1),z=c("",3),H=a("strong",null,"Warn!",-1),K=o(" selected order is not guaranteed"),Q={class:"flex flex-col gap-3"},X=o("Apple"),Y=o("Grape"),Z=o("Pineapple"),$=o("Object"),ss=o("Array"),ls=a("p",null,[a("strong",null,"Selected :")],-1),as={class:"whitespace-normal"},ns=c("",3),es={class:"flex flex-col gap-3"},os=o(" Select All "),ps=a("p",null,[a("strong",null,"Result :")],-1),ts={class:"whitespace-normal"},cs=c("",10),vs=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"With Subtext","slug":"with-subtext","link":"#with-subtext","children":[]}]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly State","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Custom v-model value","slug":"custom-v-model-value","link":"#custom-v-model-value","children":[]},{"level":3,"title":"Array v-model","slug":"array-v-model","link":"#array-v-model","children":[]}]},{"level":2,"title":"Indeterminate (3-state)","slug":"indeterminate-3-state","link":"#indeterminate-3-state","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/checkbox/index.md"}'),rs={name:"components/checkbox/index.md"},ms=Object.assign(rs,{setup(Ds){F(!1),F(!1);const u=F(!1),A=F("disagree"),t=F([]),d=F(["apple","grape","orange"]),D=F(["apple"]),i=_({get(){return D.value.length===d.value.length},set(C){i.value!==C&&(D.value=C?[...d.value]:[])}}),m=_(()=>D.value.length>0&&D.value.length<d.value.length);return(C,n)=>{const r=k("preview");return h(),g("div",null,[q,l(r,null,{default:s(()=>[l(p,null,{default:s(()=>[I]),_:1})]),_:1}),P,l(r,null,{default:s(()=>[l(p,null,{default:s(()=>[N,l(f,null,{default:s(()=>[R]),_:1})]),_:1})]),_:1}),w,l(r,null,{default:s(()=>[l(p,{disabled:""},{default:s(()=>[B]),_:1})]),_:1}),U,l(r,null,{default:s(()=>[l(p,{readonly:""},{default:s(()=>[L]),_:1})]),_:1}),j,l(r,{class:"flex-col items-center gap-3"},{default:s(()=>[l(p,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=e=>u.value=e)},{default:s(()=>[O]),_:1},8,["modelValue"])]),_:1}),W,a("pre",null,[a("code",null,y(u.value),1)]),G,l(r,{class:"flex-col items-center gap-3"},{default:s(()=>[l(p,{modelValue:A.value,"onUpdate:modelValue":n[1]||(n[1]=e=>A.value=e),value:"agree","unchecked-value":"disagree"},{default:s(()=>[J]),_:1},8,["modelValue"])]),_:1}),M,a("pre",null,[a("code",null,y(A.value),1)]),z,l(x,null,{default:s(()=>[H,K]),_:1}),l(r,{class:"flex-col items-center"},{default:s(()=>[a("div",Q,[l(p,{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=e=>t.value=e),value:"apple"},{default:s(()=>[X]),_:1},8,["modelValue"]),l(p,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value=e),value:"grape"},{default:s(()=>[Y]),_:1},8,["modelValue"]),l(p,{modelValue:t.value,"onUpdate:modelValue":n[4]||(n[4]=e=>t.value=e),value:"pineapple"},{default:s(()=>[Z]),_:1},8,["modelValue"]),l(p,{modelValue:t.value,"onUpdate:modelValue":n[5]||(n[5]=e=>t.value=e),value:{id:1,name:"Tarjono"}},{default:s(()=>[$]),_:1},8,["modelValue"]),l(p,{modelValue:t.value,"onUpdate:modelValue":n[6]||(n[6]=e=>t.value=e),value:["Item 1"]},{default:s(()=>[ss]),_:1},8,["modelValue"])])]),_:1}),ls,a("pre",as,[a("code",null,y(t.value),1)]),ns,l(r,{class:"flex-col items-center"},{default:s(()=>[a("div",es,[l(p,{modelValue:v(i),"onUpdate:modelValue":n[7]||(n[7]=e=>T(i)?i.value=e:null),indeterminate:v(m)},{default:s(()=>[os]),_:1},8,["modelValue","indeterminate"]),(h(!0),g(E,null,V(d.value,e=>(h(),S(p,{modelValue:D.value,"onUpdate:modelValue":n[8]||(n[8]=b=>D.value=b),value:e,class:"ml-4"},{default:s(()=>[o(y(e),1)]),_:2},1032,["modelValue","value"]))),256))])]),_:1}),ps,a("pre",ts,[a("code",null,y(D.value),1)]),cs])}}});export{vs as __pageData,ms as default};
