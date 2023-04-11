import{_ as P}from"./chunks/avatar.bd58a373.js";import{u as U}from"./chunks/index.66044519.js";import{p as z}from"./chunks/Caption.9e7e3734.js";import{p as R}from"./chunks/Subheading.afdf9ac9.js";import{I as Y}from"./chunks/20.9873e78b.js";import{d as L,f as W,j as H,a6 as O,_ as $,B as x,o as i,y as I,z as t,a3 as j,x as C,C as M,n as J,c as m,r as q,A as T,a as v,t as S,F as Q,D as d,a8 as G,T as K,h as e,Q as f,b as p,a4 as r,N as X,O as Z}from"./chunks/framework.76afac0a.js";import{p as u}from"./chunks/Button.c45fb4d8.js";import{I as B}from"./chunks/20.9669de55.js";import"./chunks/index.d997e305.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.6244a345.js";import"./chunks/utils-6ba05f5b.d8ec137d.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.3d0b80e1.js";import"./chunks/index.a3ecab28.js";const aa=L({components:{IconClose:Y,pCaption:z,pSubheading:R},inheritAttrs:!1,props:{variant:{type:String,default:"light"},backgroundUrl:{type:String,default:void 0},dismissable:{type:Boolean,default:!0},title:{type:String,default:void 0},message:{type:String,default:void 0},align:{type:String,default:"left"},modelValue:{type:Boolean,default:!0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","close","show","hide"],setup(a,{emit:c}){const F=U(a);function g(n){c("close",n),n.defaultPrevented||(F.value=!1)}const _=W(()=>{const n=[""];return a.variant&&n.push(`contextual-bar--${a.variant}`),a.align&&n.push(`contextual-bar--align-${a.align}`),a.backgroundUrl&&n.push("contextual-bar--background-image"),n});function h(n){n.style.setProperty("transform",`translateY(-${n.clientHeight}px)`),document.body.classList.add("contextual-bar__body--active"),document.body.style.setProperty("transform",`translateY(${n.clientHeight}px)`),c("show")}function y(n){n.style.setProperty("transform","translateY(0px)"),document.body.classList.remove("contextual-bar__body--active"),document.body.style.removeProperty("transform"),c("hide")}return H(()=>{document.body.classList.add("contextual-bar__body")}),O(()=>{document.body.classList.remove("contextual-bar__body")}),{model:F,classNames:_,close:g,onEnter:h,onLeave:y}}});const da={key:0,"data-testid":"contextual-bar-icon",class:"contextual-bar__icon"},ta={class:"contextual-bar__content"},sa={key:0,"data-testid":"contextual-bar-title",class:"contextual-bar__content__title"},la={key:1,"data-testid":"contextual-bar-message",class:"contextual-bar__content__message"},na={key:1,"data-testid":"contextual-bar-action",class:"contextual-bar__action"};function oa(a,c,F,g,_,h){const y=x("p-subheading"),n=x("p-caption"),A=x("IconClose");return i(),I(K,{name:"fade",appear:"",onEnter:a.onEnter,onAfterLeave:a.onLeave},{default:t(()=>[j(C("div",M({ref:"contextualbar","data-testid":"contextual-bar",class:"contextual-bar"},a.$attrs,{class:a.classNames,style:{"background-image":a.backgroundUrl?`url('${a.backgroundUrl}')`:"none"}}),[C("div",{"data-testid":"contextual-bar-wrapper",class:J([{"contextual-bar__wrapper--with-message":a.message||a.$slots.message,"contextual-bar__wrapper--with-action":a.$slots.action},"contextual-bar__wrapper"])},[a.$slots.icon?(i(),m("span",da,[q(a.$slots,"icon")])):T("",!0),C("div",ta,[a.title||a.$slots.title?(i(),m("div",sa,[q(a.$slots,"title",{},()=>[a.message?(i(),I(y,{key:0},{default:t(()=>[v(S(a.title),1)]),_:1})):(i(),m(Q,{key:1},[v(S(a.title),1)],64))])])):T("",!0),a.message||a.$slots.message?(i(),m("div",la,[d(n,null,{default:t(()=>[q(a.$slots,"message",{},()=>[v(S(a.message),1)])]),_:3})])):T("",!0)]),a.$slots.action?(i(),m("div",na,[q(a.$slots,"action")])):T("",!0)],2),a.dismissable?(i(),m("div",{key:0,"data-testid":"contextual-bar-close",class:"contextual-bar__close",onClick:c[0]||(c[0]=(...b)=>a.close&&a.close(...b))},[d(A)])):T("",!0)],16),[[G,a.model]])]),_:3},8,["onEnter","onAfterLeave"])}const o=$(aa,[["render",oa]]);const w=a=>(X("data-v-d640fda9"),a=a(),Z(),a),ea=f("",4),pa={class:"pt-5"},ca=f("",2),ra=w(()=>C("img",{src:P},null,-1)),va=f("",2),fa=f("",2),Da=f("",2),ia=f("",2),Fa=f("",2),ya=w(()=>C("img",{src:P},null,-1)),ua=f("",3),ma=f("",3),Ca=f("",1),ga=w(()=>C("img",{src:P},null,-1)),_a=f("",7),Na=JSON.parse('{"title":"Contextual Bar","description":"","frontmatter":{},"headers":[],"relativePath":"components/contextual-bar/index.md"}'),ha={name:"components/contextual-bar/index.md"},Aa=Object.assign(ha,{setup(a){const c=e(!1),F=e(!0),g=e(!0),_=e(!0),h=e(!0),y=e(!0),n=e(!0),A=e(!0);e(!0),e(!0);const b=e(!0),E=e(!0),V=e(!0);function N(){c.value=!0,setTimeout(()=>{c.value=!1},3e3)}return H(()=>{var k;(k=document.body)==null||k.style.removeProperty("transform")}),(k,s)=>{const D=x("preview");return i(),m("div",null,[ea,C("div",pa,[d(u,{onClick:N,color:"info"},{default:t(()=>[v("Live Preview")]),_:1})]),d(D,{class:"preview--bar"},{default:t(()=>[d(o,{modelValue:p(F),"onUpdate:modelValue":s[0]||(s[0]=l=>r(F)?F.value=l:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"])]),_:1}),ca,d(D,{class:"flex-col space-y-3 preview--bar"},{default:t(()=>[d(o,{title:"Hey! This is Title Text and telling less"},{icon:t(()=>[d(p(B))]),_:1}),d(o,{title:"Hey! This is Title Text and telling less"},{icon:t(()=>[ra]),_:1})]),_:1}),va,d(D,{class:"preview--bar"},{default:t(()=>[d(o,{title:"Hey! This is Title Text",modelValue:p(g),"onUpdate:modelValue":s[1]||(s[1]=l=>r(g)?g.value=l:null)},{icon:t(()=>[d(p(B))]),action:t(()=>[d(u,{size:"sm",color:"info"},{default:t(()=>[v("Button text")]),_:1})]),_:1},8,["modelValue"])]),_:1}),fa,d(D,{class:"preview--bar"},{default:t(()=>[d(o,{title:"This is Title Text",modelValue:p(_),"onUpdate:modelValue":s[2]||(s[2]=l=>r(_)?_.value=l:null)},{action:t(()=>[d(u,{size:"sm",color:"info"},{default:t(()=>[v("Button")]),_:1}),d(u,{size:"sm",color:"info",variant:"outline"},{default:t(()=>[v("Button")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Da,d(D,{class:"preview--bar"},{default:t(()=>[d(o,{modelValue:p(h),"onUpdate:modelValue":s[3]||(s[3]=l=>r(h)?h.value=l:null),title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document"},null,8,["modelValue"])]),_:1}),ia,d(D,{class:"preview--bar"},{default:t(()=>[d(o,{modelValue:p(y),"onUpdate:modelValue":s[4]||(s[4]=l=>r(y)?y.value=l:null),title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document"},{action:t(()=>[d(u,{color:"info",size:"sm"},{default:t(()=>[v("Button")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Fa,d(D,{class:"preview--bar"},{default:t(()=>[d(o,{title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document","background-url":"../../public/assets/images/img-bg-contextualbar.svg"},{icon:t(()=>[ya]),_:1})]),_:1}),ua,d(D,{class:"flex-col space-y-4 preview--bar"},{default:t(()=>[d(o,{variant:"light",modelValue:p(n),"onUpdate:modelValue":s[5]||(s[5]=l=>r(n)?n.value=l:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"]),d(o,{variant:"dark",modelValue:p(A),"onUpdate:modelValue":s[6]||(s[6]=l=>r(A)?A.value=l:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"])]),_:1}),ma,d(D,{class:"flex-col space-y-4 preview--bar"},{default:t(()=>[d(o,{align:"left",modelValue:p(b),"onUpdate:modelValue":s[7]||(s[7]=l=>r(b)?b.value=l:null),title:"Hey! This is Title Text"},null,8,["modelValue"]),d(o,{align:"center",modelValue:p(E),"onUpdate:modelValue":s[8]||(s[8]=l=>r(E)?E.value=l:null),title:"Hey! This is Title Text"},null,8,["modelValue"]),d(o,{align:"right",modelValue:p(V),"onUpdate:modelValue":s[9]||(s[9]=l=>r(V)?V.value=l:null),title:"Hey! This is Title Text"},null,8,["modelValue"])]),_:1}),Ca,d(D,{class:"preview--hide"},{default:t(()=>[d(o,{color:"light",modelValue:p(c),"onUpdate:modelValue":s[10]||(s[10]=l=>r(c)?c.value=l:null),title:"Hey! This is Title Text and telling less as possible","background-url":"../../public/assets/images/img-bg-contextualbar.svg"},{icon:t(()=>[ga]),action:t(()=>[d(u,{size:"sm",color:"secondary",variant:"link"},{default:t(()=>[v("Cancel")]),_:1}),d(u,{size:"sm",color:"info"},{default:t(()=>[v("Button Text")]),_:1})]),message:t(()=>[v(" You will be unable to sign or seal a document while your privy balance runs out. ")]),_:1},8,["modelValue"])]),_:1}),_a])}}}),Ua=$(Aa,[["__scopeId","data-v-d640fda9"]]);export{Na as __pageData,Ua as default};
