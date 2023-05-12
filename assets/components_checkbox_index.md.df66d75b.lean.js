import{p as E}from"./chunks/Banner.bb3d0dc9.js";import{p as c}from"./chunks/Checkbox.f762dbda.js";import{p as h}from"./chunks/Caption.dd34e473.js";import{C as v}from"./chunks/Card.e3f0cf9d.js";import{I as _}from"./chunks/20.06b6c97c.js";import{j as d,l as x,D as T,o as b,c as f,G as s,B as a,z as l,t as i,e as p,R as D,a as t,a5 as r,F as V,N as S,A as P}from"./chunks/framework.6feb5f37.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.82e88bb4.js";import"./chunks/20.21ffed40.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/utils-6ba05f5b.b8bf33fb.js";import"./chunks/16.bb0c41ce.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.729edfb3.js";import"./chunks/index.88d5a599.js";import"./chunks/index.835981ad.js";import"./chunks/value.830bdabd.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.0fa046df.js";import"./chunks/Heading.959af086.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.10d26973.js";const I=D("",4),w=D("",2),B=l("div",null,"Checklist Label",-1),R=D("",2),N=D("",2),U=D("",2),j=l("p",null,[l("strong",null,"Result :")],-1),L=D("",3),O=l("p",null,[l("strong",null,"Result :")],-1),W=D("",3),H=l("strong",null,"Warn!",-1),K={class:"flex flex-col space-y-3"},M=l("p",null,[l("strong",null,"Selected :")],-1),G={class:"whitespace-normal"},z=D("",3),J={class:"flex flex-col space-y-3"},Q=l("p",null,[l("strong",null,"Result :")],-1),X={class:"whitespace-normal"},Y=D("",3),Z={class:"flex flex-col space-y-3"},$={class:"flex items-center space-x-3"},ss={class:"flex items-center space-x-3"},as={class:"flex items-center space-x-3"},ls=l("p",null,[l("strong",null,"Selected :")],-1),ns=D("",10),xs=JSON.parse('{"title":"Checkbox · Components","description":"Base checkbox form","frontmatter":{"title":"Checkbox · Components","description":"Base checkbox form"},"headers":[],"relativePath":"components/checkbox/index.md"}'),os={name:"components/checkbox/index.md"},fs=Object.assign(os,{setup(es){d(!1),d(!1);const C=d(!1),u=d("disagree"),n=d([]),A=d(["apple","grape","orange"]),y=d(["apple"]),m=x({get(){return y.value.length===A.value.length},set(g){m.value!==g&&(y.value=g?[...A.value]:[])}}),q=x(()=>y.value.length>0&&y.value.length<A.value.length);return(g,o)=>{const F=T("preview");return b(),f("div",null,[I,s(F,null,{default:a(()=>[s(c,null,{default:a(()=>[t("Checklist Label")]),_:1})]),_:1}),w,s(F,null,{default:a(()=>[s(c,null,{default:a(()=>[B,s(h,null,{default:a(()=>[t("Text")]),_:1})]),_:1})]),_:1}),R,s(F,null,{default:a(()=>[s(c,{disabled:""},{default:a(()=>[t(" Checkbox Label ")]),_:1})]),_:1}),N,s(F,null,{default:a(()=>[s(c,{readonly:""},{default:a(()=>[t(" Checkbox Label ")]),_:1})]),_:1}),U,s(F,{class:"flex-col items-center"},{default:a(()=>[s(c,{modelValue:p(C),"onUpdate:modelValue":o[0]||(o[0]=e=>r(C)?C.value=e:null)},{default:a(()=>[t("Checkbox Label")]),_:1},8,["modelValue"])]),_:1}),j,l("pre",null,[l("code",null,i(p(C)),1)]),L,s(F,{class:"flex-col items-center"},{default:a(()=>[s(c,{modelValue:p(u),"onUpdate:modelValue":o[1]||(o[1]=e=>r(u)?u.value=e:null),value:"agree","unchecked-value":"disagree"},{default:a(()=>[t(" I agree with Term and Condition ")]),_:1},8,["modelValue"])]),_:1}),O,l("pre",null,[l("code",null,i(p(u)),1)]),W,s(E,null,{default:a(()=>[H,t(" selected order is not guaranteed")]),_:1}),s(F,{class:"flex-col items-center"},{default:a(()=>[l("div",K,[s(c,{modelValue:p(n),"onUpdate:modelValue":o[2]||(o[2]=e=>r(n)?n.value=e:null),value:"apple"},{default:a(()=>[t("Apple")]),_:1},8,["modelValue"]),s(c,{modelValue:p(n),"onUpdate:modelValue":o[3]||(o[3]=e=>r(n)?n.value=e:null),value:"grape"},{default:a(()=>[t("Grape")]),_:1},8,["modelValue"]),s(c,{modelValue:p(n),"onUpdate:modelValue":o[4]||(o[4]=e=>r(n)?n.value=e:null),value:"pineapple"},{default:a(()=>[t("Pineapple")]),_:1},8,["modelValue"]),s(c,{modelValue:p(n),"onUpdate:modelValue":o[5]||(o[5]=e=>r(n)?n.value=e:null),value:{id:1,name:"Tarjono"}},{default:a(()=>[t("Object")]),_:1},8,["modelValue"]),s(c,{modelValue:p(n),"onUpdate:modelValue":o[6]||(o[6]=e=>r(n)?n.value=e:null),value:["Item 1"]},{default:a(()=>[t("Array")]),_:1},8,["modelValue"])])]),_:1}),M,l("pre",G,[l("code",null,i(p(n)),1)]),z,s(F,{class:"flex-col items-center"},{default:a(()=>[l("div",J,[s(c,{modelValue:p(m),"onUpdate:modelValue":o[7]||(o[7]=e=>r(m)?m.value=e:null),indeterminate:p(q)},{default:a(()=>[t(" Select All ")]),_:1},8,["modelValue","indeterminate"]),(b(!0),f(V,null,S(p(A),e=>(b(),P(c,{modelValue:p(y),"onUpdate:modelValue":o[8]||(o[8]=k=>r(y)?y.value=k:null),value:e,class:"ml-4"},{default:a(()=>[t(i(e),1)]),_:2},1032,["modelValue","value"]))),256))])]),_:1}),Q,l("pre",X,[l("code",null,i(p(y)),1)]),Y,s(F,{class:"justify-center"},{default:a(()=>[l("div",Z,[s(c,{appearance:"none",modelValue:p(n),"onUpdate:modelValue":o[9]||(o[9]=e=>r(n)?n.value=e:null),value:"Olivia Withness"},{default:a(()=>[s(v,{element:"div",class:"px-4 py-2 hover:shadow-md hover:border-subtle hover:dark:border-dark-subtle ease-in-out duration-200 min-w-[223px]",sectioned:""},{default:a(()=>[l("div",$,[s(p(_),{class:"text-muted dark:text-dark-muted"}),l("div",null,[t(" Olivia Withness "),s(h,null,{default:a(()=>[t("olivia@eth.com")]),_:1})])])]),_:1})]),_:1},8,["modelValue"]),s(c,{appearance:"none",modelValue:p(n),"onUpdate:modelValue":o[10]||(o[10]=e=>r(n)?n.value=e:null),value:"Hyuga Kojiro"},{default:a(()=>[s(v,{element:"div",class:"px-4 py-2 hover:shadow-md hover:border-subtle hover:dark:border-dark-subtle ease-in-out duration-200 min-w-[223px]",sectioned:""},{default:a(()=>[l("div",ss,[s(p(_),{class:"text-muted dark:text-dark-muted"}),l("div",null,[t(" Hyuga Kojiro "),s(h,null,{default:a(()=>[t("hyuga@gmail.com")]),_:1})])])]),_:1})]),_:1},8,["modelValue"]),s(c,{appearance:"none",modelValue:p(n),"onUpdate:modelValue":o[11]||(o[11]=e=>r(n)?n.value=e:null),value:"Marsha Timoty",disabled:""},{default:a(()=>[s(v,{element:"div",class:"px-4 py-2 hover:shadow-md hover:border-subtle hover:dark:border-dark-subtle ease-in-out duration-200 min-w-[223px]",sectioned:""},{default:a(()=>[l("div",as,[s(p(_),{class:"text-muted dark:text-dark-muted"}),l("div",null,[t(" Marsha Timoty "),s(h,null,{default:a(()=>[t("timoty@marsha.com")]),_:1})])])]),_:1})]),_:1},8,["modelValue"])])]),_:1}),ls,l("pre",null,[l("code",null,i(p(n)),1)]),ns])}}});export{xs as __pageData,fs as default};
