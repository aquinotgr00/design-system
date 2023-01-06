import{S as A,a as r}from"./chunks/Step.82621c2a.js";import{p as D}from"./chunks/Card.751d18d4.js";import{p}from"./chunks/Button.f547129d.js";import{p as u}from"./chunks/Input.691197a4.js";import{B as v}from"./chunks/Banner.dbc62f9c.js";import"./chunks/use-singleton.bd3723e9.js";import"./chunks/Overlay.vue_vue_type_style_index_0_lang.241c9ff2.js";import{a as h}from"./chunks/index.da6ba3ea.js";import"./chunks/browser.dabd21d2.js";import{j as _,a6 as E,r as x,o as b,c as q,a as s,w as l,h as n,y as k,u as F,b as i,e as a,J as S}from"./app.9536caf3.js";import"./chunks/vnode.41771454.js";import"./chunks/index.d692cd26.js";import"./chunks/index.35064abe.js";import"./chunks/index.63d11201.js";import"./chunks/hook.faed1da3.js";import"./chunks/16.a5f7e9c4.js";import"./chunks/utils-6ba05f5b.a568a454.js";import"./chunks/Heading.9cb09633.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.5fbdb328.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.0b21c04d.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.657b8cd1.js";import"./chunks/20.788d1f62.js";import"./chunks/use-loading.73691be8.js";const T=i("",4),P={class:"flex flex-col h-52"},N=n("div",{class:"flex-grow"},"Step 1",-1),w={class:"space-gap-2"},V={class:"flex flex-col h-52"},I=n("div",{class:"flex-grow"},"Step 2",-1),B={class:"space-gap-2"},U={class:"flex flex-col h-52"},H=n("div",{class:"flex-grow"},"Step 3",-1),R={class:"space-gap-2"},j=i("",4),z={class:"flex flex-col h-52"},O={class:"flex-grow"},J=n("label",null,"Name",-1),W={class:"space-gap-2"},K={class:"flex flex-col h-52"},Y={class:"flex-grow"},$=n("label",null,"Email",-1),G={class:"space-gap-2"},L=i("",5),M={class:"flex flex-col h-52"},Q={class:"flex-grow"},X=n("label",null,"Name",-1),Z={class:"space-gap-2"},ss={class:"flex flex-col h-52"},ls={class:"flex-grow"},ns=n("label",null,"Email",-1),as={class:"space-gap-2"},os=i("",3),ps=n("code",null,"toStep()",-1),ts={class:"flex flex-col h-52"},es=n("div",{class:"flex-grow"},"Step 1",-1),cs={class:"space-gap-2"},rs={class:"flex flex-col h-52"},Ds=n("div",{class:"flex-grow"},"Step 2",-1),Fs={class:"space-gap-2"},ys={class:"flex flex-col h-52"},is=n("div",{class:"flex-grow"},"Step 3",-1),Cs={class:"space-gap-2"},ds=n("p",null,[n("strong",null,"Step :")],-1),As=i("",15),Js=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Hooks","slug":"hooks","link":"#hooks","children":[{"level":3,"title":"on-before-next hook","slug":"on-before-next-hook","link":"#on-before-next-hook","children":[]},{"level":3,"title":"on-before-prev hook","slug":"on-before-prev-hook","link":"#on-before-prev-hook","children":[]},{"level":3,"title":"on-finished hook","slug":"on-finished-hook","link":"#on-finished-hook","children":[]}]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-steps>","slug":"props-p-steps","link":"#props-p-steps","children":[]},{"level":3,"title":"Slot <p-steps>","slug":"slot-p-steps","link":"#slot-p-steps","children":[]},{"level":3,"title":"Events <p-steps>","slug":"events-p-steps","link":"#events-p-steps","children":[]},{"level":3,"title":"Props <p-step>","slug":"props-p-step","link":"#props-p-step","children":[]},{"level":3,"title":"Slots <p-step>","slug":"slots-p-step","link":"#slots-p-step","children":[]},{"level":3,"title":"Events <p-step>","slug":"events-p-step","link":"#events-p-step","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/steps/index.md"}'),us={name:"components/steps/index.md"},Ws=Object.assign(us,{setup(hs){const C=_(1),c=E({name:"",email:""});function g(m,e){return e===1&&!c.name?(h({text:"Name is required"}),!1):e===2&&(!c.email||!c.email.includes("@"))?(h({text:"Email must be valid email"}),!1):!0}function f(){h({text:"Success"})}return(m,e)=>{const d=x("preview");return b(),q("div",null,[T,s(d,null,{default:l(()=>[s(A,null,{default:l(()=>[s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",P,[N,n("div",w,[s(p,{disabled:"",color:"primary"},{default:l(()=>[a("Prev")]),_:1}),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Next")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1}),s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",V,[I,n("div",B,[s(p,{onClick:t,color:"primary"},{default:l(()=>[a("Prev")]),_:2},1032,["onClick"]),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Next")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1}),s(r,null,{default:l(({next:o,prev:t,toStep:y})=>[s(D,null,{default:l(()=>[n("div",U,[H,n("div",R,[s(p,{onClick:t,color:"primary"},{default:l(()=>[a("Prev")]),_:2},1032,["onClick"]),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Finish")]),_:2},1032,["onClick"]),s(p,{onClick:gs=>y(1),color:"primary"},{default:l(()=>[a("To Step 1")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1})]),_:1})]),_:1}),j,s(d,null,{default:l(()=>[s(A,{"on-before-next":g},{default:l(()=>[s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",z,[n("div",O,[J,s(u,{modelValue:F(c).name,"onUpdate:modelValue":e[0]||(e[0]=y=>F(c).name=y),placeholder:"Fill to next"},null,8,["modelValue"])]),n("div",W,[s(p,{disabled:"",color:"primary"},{default:l(()=>[a("Prev")]),_:1}),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Next")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1}),s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",K,[n("div",Y,[$,s(u,{modelValue:F(c).email,"onUpdate:modelValue":e[1]||(e[1]=y=>F(c).email=y),placeholder:"Fill to next"},null,8,["modelValue"])]),n("div",G,[s(p,{onClick:t,color:"primary"},{default:l(()=>[a("Prev")]),_:2},1032,["onClick"]),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Next")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1})]),_:1})]),_:1}),L,s(d,null,{default:l(()=>[s(A,{"on-before-next":g,"on-finished":f},{default:l(()=>[s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",M,[n("div",Q,[X,s(u,{modelValue:F(c).name,"onUpdate:modelValue":e[2]||(e[2]=y=>F(c).name=y),placeholder:"Fill to next"},null,8,["modelValue"])]),n("div",Z,[s(p,{disabled:"",color:"primary"},{default:l(()=>[a("Prev")]),_:1}),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Next")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1}),s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",ss,[n("div",ls,[ns,s(u,{modelValue:F(c).email,"onUpdate:modelValue":e[3]||(e[3]=y=>F(c).email=y),placeholder:"Fill to next"},null,8,["modelValue"])]),n("div",as,[s(p,{onClick:t,color:"primary"},{default:l(()=>[a("Prev")]),_:2},1032,["onClick"]),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Next")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1})]),_:1})]),_:1}),os,s(v,{variant:"danger",dismissable:!1},{default:l(()=>[a(" Changing the step using v-model, will skip all hooks. Use "),ps,a(" instead if you want to keep all hooks. ")]),_:1}),s(d,null,{default:l(()=>[s(A,{modelValue:F(C),"onUpdate:modelValue":e[4]||(e[4]=o=>S(C)?C.value=o:null)},{default:l(()=>[s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",ts,[es,n("div",cs,[s(p,{disabled:"",color:"primary"},{default:l(()=>[a("Prev")]),_:1}),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Next")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1}),s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",rs,[Ds,n("div",Fs,[s(p,{onClick:t,color:"primary"},{default:l(()=>[a("Prev")]),_:2},1032,["onClick"]),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Next")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1}),s(r,null,{default:l(({next:o,prev:t})=>[s(D,null,{default:l(()=>[n("div",ys,[is,n("div",Cs,[s(p,{onClick:t,color:"primary"},{default:l(()=>[a("Prev")]),_:2},1032,["onClick"]),s(p,{onClick:o,color:"primary"},{default:l(()=>[a("Finish")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:1})]),_:1},8,["modelValue"])]),_:1}),ds,n("pre",null,[n("code",null,k(F(C)),1)]),As])}}});export{Js as __pageData,Ws as default};
