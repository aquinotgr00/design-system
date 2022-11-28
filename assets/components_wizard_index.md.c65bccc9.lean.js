import{f as z}from"./chunks/vnode.bf6d5776.js";import{a as P,P as N}from"./chunks/ProgressItem.6e3edb84.js";import{i as h,Y as E,ac as g,k as V,f as k,r as u,o as d,q as f,w as a,c as x,M as T,N as B,s as $,as as I,t as W,h as n,a as s,g as b,ak as H,b as v,u as U,e}from"./app.9fa2f258.js";import{S as R,a as j}from"./chunks/Step.60535d95.js";import{u as M}from"./chunks/index.6f44f4cd.js";import{p as c}from"./chunks/Button.b959fdd7.js";import{p as w}from"./chunks/Input.5ca2e1f0.js";import{I as O}from"./chunks/16.32fef9b2.js";import"./chunks/use-singleton.e127c4fc.js";import"./chunks/Overlay.vue_vue_type_style_index_0_lang.26e7897f.js";import{a as m}from"./chunks/index.aa07dda1.js";import"./chunks/index.69a8ee88.js";import"./chunks/BrowserQRCodeReader.9511080e.js";import"./chunks/browser.2363ef91.js";import"./chunks/isObjectLike.bee3dca1.js";import"./chunks/toNumber.b7089ae3.js";import"./chunks/isSymbol.467490bf.js";import"./chunks/isArray.81deb5cd.js";import"./chunks/toString.11fb0831.js";import"./chunks/index.a3c68db2.js";import"./chunks/hook.a81fdfb0.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.758e5a6a.js";import"./chunks/utils-6ba05f5b.6586f662.js";import"./chunks/use-loading.43c80df0.js";import"./chunks/Modal.e31aef0b.js";import"./chunks/Heading.d73c2312.js";import"./chunks/16.41ff8142.js";const G=h({props:{active:{type:Number,default:0}},setup(o,{slots:t}){return()=>{const i=z(t.default(),"WizardStep");return E(N,{"data-testid":"wizard-progress"},{default:()=>i.map((y,C)=>{var p,l;const r=g(y.props,{active:C<=o.active,"data-testid":"wizard-progress-item"}),D={icon:(p=y.children)==null?void 0:p.icon,title:(l=y.children)==null?void 0:l.title};return E(P,r,D)})})}}}),J=h({components:{Steps:R,Step:j},props:{modelValue:{type:Number,default:1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(o,{slots:t}){return{steps:V(()=>z(t.default(),"WizardStep"))}}});function K(o,t,i,y,C,r){const D=u("Step"),p=u("Steps");return d(),f(p,g(o.$attrs,{"model-value":o.modelValue,"onUpdate:modelValue":t[0]||(t[0]=l=>o.$emit("update:modelValue",l))}),{default:a(()=>[(d(!0),x(T,null,B(o.steps,(l,A)=>(d(),f(D,g({key:A},l.props,{"data-testid":"wizard-step"}),{default:a(S=>{var q;return[(q=l.children)!=null&&q.default?(d(),f($(l.children.default),I(g({key:0},S)),null,16)):W("",!0)]}),_:2},1040))),128))]),_:1},16,["model-value"])}const L=k(J,[["render",K]]),Y=h({components:{WizardHeader:G,WizardBody:L},props:{modelValue:{type:Number,default:1},variant:{type:String,default:"dot"},titleVariant:{type:String,default:"specific"},keepAlive:{type:Boolean,default:!1},onBeforePrev:{type:Function,default:void 0},onBeforeNext:{type:Function,default:void 0},onFinished:{type:Function,default:void 0}},setup(o){return{model:M(o)}}});const Q={class:"wizard","data-testid":"wizard"},X={class:"wizard__header"},Z={class:"wizard__body"};function ss(o,t,i,y,C,r){const D=u("WizardHeader"),p=u("WizardBody");return d(),x("div",Q,[n("div",X,[s(D,{active:o.model-1,variant:o.variant,"title-variant":o.titleVariant},{default:a(()=>[b(o.$slots,"default")]),_:3},8,["active","variant","title-variant"])]),n("div",Z,[s(p,{modelValue:o.model,"onUpdate:modelValue":t[0]||(t[0]=l=>o.model=l),"keep-alive":o.keepAlive,"on-before-prev":o.onBeforePrev,"on-before-next":o.onBeforeNext,"on-finished":o.onFinished},{default:a(()=>[b(o.$slots,"default")]),_:3},8,["modelValue","keep-alive","on-before-prev","on-before-next","on-finished"])])])}const _=k(Y,[["render",ss]]),F=h({name:"WizardStep",props:{title:{type:String,default:""},onBeforePrev:{type:Function,default:void 0},onBeforeNext:{type:Function,default:void 0}}}),as=v("",4),ns={class:"flex flex-col h-52"},ls=n("div",{class:"flex-grow"},"Step 1",-1),os={class:"space-x-2"},ps={class:"flex flex-col h-52"},ts=n("div",{class:"flex-grow"},"Step 2",-1),es={class:"space-x-2"},cs={class:"flex flex-col h-52"},rs=n("div",{class:"flex-grow"},"Step 3",-1),Ds={class:"space-x-2"},Fs=v("",3),ys={class:"flex flex-col h-52"},is=n("div",{class:"flex-grow"},"Step 1",-1),ds={class:"space-x-2"},Cs={class:"flex flex-col h-52"},As=n("div",{class:"flex-grow"},"Step 2",-1),us={class:"space-x-2"},gs={class:"flex flex-col h-52"},hs=n("div",{class:"flex-grow"},"Step 3",-1),vs={class:"space-x-2"},fs=v("",3),ms={class:"flex flex-col h-52"},_s={class:"flex-grow"},xs=n("label",null,"Name",-1),qs={class:"space-x-2"},Es={class:"flex flex-col h-52"},bs={class:"flex-grow"},ws=n("label",null,"Email",-1),zs={class:"space-x-2"},ks=v("",17),pa=JSON.parse('{"title":"Wizard","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Variant","slug":"variant","link":"#variant","children":[]},{"level":2,"title":"Hooks","slug":"hooks","link":"#hooks","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-wizard>","slug":"props-p-wizard","link":"#props-p-wizard","children":[]},{"level":3,"title":"Slot <p-wizard>","slug":"slot-p-wizard","link":"#slot-p-wizard","children":[]},{"level":3,"title":"Events <p-wizard>","slug":"events-p-wizard","link":"#events-p-wizard","children":[]},{"level":3,"title":"Props <p-wizard-step>","slug":"props-p-wizard-step","link":"#props-p-wizard-step","children":[]},{"level":3,"title":"Slots <p-wizard-step>","slug":"slots-p-wizard-step","link":"#slots-p-wizard-step","children":[]},{"level":3,"title":"Events <p-wizard-step>","slug":"events-p-wizard-step","link":"#events-p-wizard-step","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/wizard/index.md"}'),Ss={name:"components/wizard/index.md"},ta=Object.assign(Ss,{setup(o){const t=H({name:"",email:""});function i(C,r){return r===1&&!t.name?(m({text:"Name is required"}),!1):r===2&&(!t.email||!t.email.includes("@"))?(m({text:"Email must be valid email"}),!1):!0}function y(){m({text:"Success"})}return(C,r)=>{const D=u("preview");return d(),x("div",null,[as,s(D,null,{default:a(()=>[s(_,{variant:"counter"},{default:a(()=>[s(F,{title:"Step 1"},{icon:a(()=>[s(U(O))]),default:a(({next:p,prev:l})=>[n("div",ns,[ls,n("div",os,[s(c,{disabled:""},{default:a(()=>[e("Prev")]),_:1}),s(c,{onClick:p},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 2"},{default:a(({next:p,prev:l})=>[n("div",ps,[ts,n("div",es,[s(c,{onClick:l},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 3"},{default:a(({next:p,prev:l})=>[n("div",cs,[rs,n("div",Ds,[s(c,{onClick:l},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1})]),_:1})]),_:1}),Fs,s(D,null,{default:a(()=>[s(_,{variant:"counter","title-variant":"general"},{default:a(()=>[s(F,{title:"Step 1"},{default:a(({next:p,prev:l})=>[n("div",ys,[is,n("div",ds,[s(c,{disabled:""},{default:a(()=>[e("Prev")]),_:1}),s(c,{onClick:p},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 2"},{default:a(({next:p,prev:l})=>[n("div",Cs,[As,n("div",us,[s(c,{onClick:l},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 3"},{default:a(({next:p,prev:l})=>[n("div",gs,[hs,n("div",vs,[s(c,{onClick:l},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1})]),_:1})]),_:1}),fs,s(D,null,{default:a(()=>[s(_,{"on-before-next":i,"on-finished":y},{default:a(()=>[s(F,{title:"Step 1"},{default:a(({next:p,prev:l})=>[n("div",ms,[n("div",_s,[xs,s(w,{modelValue:t.name,"onUpdate:modelValue":r[0]||(r[0]=A=>t.name=A),placeholder:"Fill to next"},null,8,["modelValue"])]),n("div",qs,[s(c,{disabled:""},{default:a(()=>[e("Prev")]),_:1}),s(c,{onClick:p},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 2"},{default:a(({next:p,prev:l})=>[n("div",Es,[n("div",bs,[ws,s(w,{modelValue:t.email,"onUpdate:modelValue":r[1]||(r[1]=A=>t.email=A),placeholder:"Fill to next"},null,8,["modelValue"])]),n("div",zs,[s(c,{onClick:l},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1})]),_:1})]),_:1}),ks])}}});export{pa as __pageData,ta as default};