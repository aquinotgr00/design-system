import{f as z}from"./chunks/vnode.534ed3f0.js";import{a as N,p as V}from"./chunks/ProgressItem.6d38c3f3.js";import{m,ac as b,U as g,c as T,_ as S,J as u,x as d,A as v,B as a,p as E,K as B,L as $,Q as W,an as I,C as H,G as n,N as s,q as w,aa as U,X as h,y as e,u as f}from"./chunks/framework.f3d2a0a5.js";import{S as R,a as j}from"./chunks/Step.bef109d8.js";import{u as G}from"./chunks/index.4926e9c0.js";import{p as c}from"./chunks/Button.a307e6e8.js";import{p as k}from"./chunks/Input.3c63c0c0.js";import{I as J}from"./chunks/20.a44318cf.js";import"./chunks/Overlay.vue_vue_type_style_index_0_lang.4ed993c7.js";import{a as q}from"./chunks/index.8ee51087.js";import"./chunks/marked.esm.710fa320.js";import"./chunks/context.522c7656.js";import"./chunks/baseIteratee.4af24479.js";import"./chunks/memoize.19554dab.js";import"./chunks/eq.83a0dc05.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isArray.513c67aa.js";import"./chunks/isArrayLike.740cb4e2.js";import"./chunks/toString.314d06e3.js";import"./chunks/toInteger.cccd26ae.js";import"./chunks/index.b33282b2.js";import"./chunks/theme.6d4ed01a.js";import"./chunks/hook.64405bb6.js";import"./chunks/index.a3ecab28.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/accept.c8f4354a.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/use-singleton.507b1fe8.js";import"./chunks/defu.573334b8.js";const K=m({props:{active:{type:Number,default:0}},setup(o,{slots:t}){return()=>{const i=z(t.default(),"WizardStep");return b(V,{"data-testid":"wizard-progress"},{default:()=>i.map((y,C)=>{var p,l;const r=g(y.props,{active:C<=o.active,"data-testid":"wizard-progress-item"}),D={icon:(p=y.children)==null?void 0:p.icon,title:(l=y.children)==null?void 0:l.title};return b(N,r,D)})})}}}),L=m({components:{Steps:R,Step:j},props:{modelValue:{type:Number,default:1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(o,{slots:t}){return{steps:T(()=>z(t.default(),"WizardStep"))}}});function O(o,t,i,y,C,r){const D=u("Step"),p=u("Steps");return d(),v(p,g(o.$attrs,{"model-value":o.modelValue,"onUpdate:modelValue":t[0]||(t[0]=l=>o.$emit("update:modelValue",l))}),{default:a(()=>[(d(!0),E(B,null,$(o.steps,(l,A)=>(d(),v(D,g({key:A},l.props,{"data-testid":"wizard-step"}),{default:a(P=>{var x;return[(x=l.children)!=null&&x.default?(d(),v(W(l.children.default),I(g({key:0},P)),null,16)):H("",!0)]}),_:2},1040))),128))]),_:1},16,["model-value"])}const M=S(L,[["render",O]]),Q=m({components:{WizardHeader:K,WizardBody:M},props:{modelValue:{type:Number,default:1},variant:{type:String,default:"dot"},titleVariant:{type:String,default:"specific"},keepAlive:{type:Boolean,default:!1},onBeforePrev:{type:Function,default:void 0},onBeforeNext:{type:Function,default:void 0},onFinished:{type:Function,default:void 0}},setup(o){return{model:G(o)}}});const X={class:"wizard","data-testid":"wizard"},Y={class:"wizard__header"},Z={class:"wizard__body"};function ss(o,t,i,y,C,r){const D=u("WizardHeader"),p=u("WizardBody");return d(),E("div",X,[n("div",Y,[s(D,{active:o.model-1,variant:o.variant,"title-variant":o.titleVariant},{default:a(()=>[w(o.$slots,"default")]),_:3},8,["active","variant","title-variant"])]),n("div",Z,[s(p,{modelValue:o.model,"onUpdate:modelValue":t[0]||(t[0]=l=>o.model=l),"keep-alive":o.keepAlive,"on-before-prev":o.onBeforePrev,"on-before-next":o.onBeforeNext,"on-finished":o.onFinished},{default:a(()=>[w(o.$slots,"default")]),_:3},8,["modelValue","keep-alive","on-before-prev","on-before-next","on-finished"])])])}const _=S(Q,[["render",ss]]),F=m({name:"WizardStep",props:{title:{type:String,default:""},onBeforePrev:{type:Function,default:void 0},onBeforeNext:{type:Function,default:void 0}}}),as=h("",4),ns={class:"flex flex-col h-52"},ls=n("div",{class:"flex-grow"},"Step 1",-1),os={class:"space-x-2"},ps={class:"flex flex-col h-52"},ts=n("div",{class:"flex-grow"},"Step 2",-1),es={class:"space-x-2"},cs={class:"flex flex-col h-52"},rs=n("div",{class:"flex-grow"},"Step 3",-1),Ds={class:"space-x-2"},Fs=h("",3),ys={class:"flex flex-col h-52"},is=n("div",{class:"flex-grow"},"Step 1",-1),ds={class:"space-x-2"},Cs={class:"flex flex-col h-52"},As=n("div",{class:"flex-grow"},"Step 2",-1),us={class:"space-x-2"},fs={class:"flex flex-col h-52"},gs=n("div",{class:"flex-grow"},"Step 3",-1),ms={class:"space-x-2"},hs=h("",3),vs={class:"flex flex-col h-52"},qs={class:"flex-grow"},_s=n("label",null,"Name",-1),Es={class:"space-x-2"},xs={class:"flex flex-col h-52"},bs={class:"flex-grow"},ws=n("label",null,"Email",-1),ks={class:"space-x-2"},zs=h("",17),ra=JSON.parse('{"title":"Wizard · Components","description":"Fancy form wizard.","frontmatter":{"title":"Wizard · Components","description":"Fancy form wizard."},"headers":[],"relativePath":"components/wizard/index.md","filePath":"components/wizard/index.md"}'),Ss={name:"components/wizard/index.md"},Da=Object.assign(Ss,{setup(o){const t=U({name:"",email:""});function i(C,r){return r===1&&!t.name?(q({text:"Name is required"}),!1):r===2&&(!t.email||!t.email.includes("@"))?(q({text:"Email must be valid email"}),!1):!0}function y(){q({text:"Success"})}return(C,r)=>{const D=u("preview");return d(),E("div",null,[as,s(D,null,{default:a(()=>[s(_,{variant:"counter"},{default:a(()=>[s(F,{title:"Step 1"},{icon:a(()=>[s(J)]),default:a(({next:p,prev:l})=>[n("div",ns,[ls,n("div",os,[s(c,{disabled:"",color:"info"},{default:a(()=>[e("Prev")]),_:1}),s(c,{onClick:p,color:"info"},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 2"},{default:a(({next:p,prev:l})=>[n("div",ps,[ts,n("div",es,[s(c,{onClick:l,color:"info"},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p,color:"info"},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 3"},{default:a(({next:p,prev:l})=>[n("div",cs,[rs,n("div",Ds,[s(c,{onClick:l,color:"info"},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{disabled:"",onClick:p,color:"info"},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1})]),_:1})]),_:1}),Fs,s(D,null,{default:a(()=>[s(_,{variant:"counter","title-variant":"general"},{default:a(()=>[s(F,{title:"Step 1"},{default:a(({next:p,prev:l})=>[n("div",ys,[is,n("div",ds,[s(c,{disabled:"",color:"info"},{default:a(()=>[e("Prev")]),_:1}),s(c,{onClick:p,color:"info"},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 2"},{default:a(({next:p,prev:l})=>[n("div",Cs,[As,n("div",us,[s(c,{onClick:l,color:"info"},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p,color:"info"},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 3"},{default:a(({next:p,prev:l})=>[n("div",fs,[gs,n("div",ms,[s(c,{onClick:l,color:"info"},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p,color:"info"},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1})]),_:1})]),_:1}),hs,s(D,null,{default:a(()=>[s(_,{"on-before-next":i,"on-finished":y},{default:a(()=>[s(F,{title:"Step 1"},{default:a(({next:p,prev:l})=>[n("div",vs,[n("div",qs,[_s,s(k,{modelValue:f(t).name,"onUpdate:modelValue":r[0]||(r[0]=A=>f(t).name=A),placeholder:"Fill to next"},null,8,["modelValue"])]),n("div",Es,[s(c,{disabled:"",color:"info"},{default:a(()=>[e("Prev")]),_:1}),s(c,{onClick:p,color:"info"},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1}),s(F,{title:"Step 2"},{default:a(({next:p,prev:l})=>[n("div",xs,[n("div",bs,[ws,s(k,{modelValue:f(t).email,"onUpdate:modelValue":r[1]||(r[1]=A=>f(t).email=A),placeholder:"Fill to next"},null,8,["modelValue"])]),n("div",ks,[s(c,{onClick:l,color:"info"},{default:a(()=>[e("Prev")]),_:2},1032,["onClick"]),s(c,{onClick:p,color:"info"},{default:a(()=>[e("Next")]),_:2},1032,["onClick"])])])]),_:1})]),_:1})]),_:1}),zs])}}});export{ra as __pageData,Da as default};
