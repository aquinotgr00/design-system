import{u as g}from"./chunks/use-singleton.9973825d.js";import{t as M}from"./chunks/index.734690a2.js";import{u as N}from"./chunks/use-popper.a06417a7.js";import{u as U}from"./chunks/index.36f8c2c5.js";import{f as I,z as b,h as W,i as O,_ as B,A as c,B as j,o as p,c as A,r as Y,n as z,a as $,g as H,a3 as J,b as L,a6 as G,O as K,P as Q,l as u,w as n,a1 as X,d as v,e as C,u as D,k as d}from"./app.0f0a7ab1.js";import{p as Z}from"./chunks/index.b706f470.js";import{t as ss}from"./chunks/toString.3146a8cb.js";import{B as h}from"./chunks/Button.7cbf5034.js";import"./chunks/browser.e4fc6188.js";import"./chunks/commonjsHelpers.cd000407.js";import"./chunks/isSymbol.f4a981c1.js";var ts=0;function os(s){var t=++ts;return ss(s)+t}const as=I({props:{modelValue:{type:Boolean,default:!1},color:{type:String,default:"black"},target:{type:Object,default:void 0},placement:{type:String,default:"top"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","show","hide"],setup(s,{emit:t}){const o=U(s),l=b(s,"placement"),r=b(s,"target"),_=M("tooltip"),i=N(r,_,l),e=W(()=>{const a=[];return s.color&&a.push(`tooltip--${s.color}`),a});return O(o,a=>{var y;a?((y=i.value)==null||y.update(),t("show",r.value)):t("hide",r.value)}),{isShow:o,classNames:e}}});const es=$("div",{class:"tooltip__arrow","data-popper-arrow":""},null,-1);function ls(s,t,o,l,r,_){return c((p(),A("div",{ref:"tooltip",class:z(["tooltip",s.classNames]),"data-testid":"tooltip"},[es,Y(s.$slots,"default")],2)),[[j,s.isShow]])}const ns=B(as,[["render",ls]]),ps=I({components:{Tooltip:ns},directives:{pMd:Z},setup(){const s=H(new Map);function t(e){const a=os("tooltip_");return s.value.set(a,J({...e,isShow:!1})),a}function o(e,a){const y=s.value.get(e);y&&(y.target=a.target,y.text=a.text,y.placement=a.placement)}function l(e){s.value.get(e).isShow=!0}function r(e){s.value.get(e).isShow=!1}function _(e){const a=s.value.get(e);a.isShow=!a.isShow}function i(e){s.value.delete(e)}return{items:s,add:t,update:o,show:l,hide:r,toggle:_,remove:i}}}),cs={class:"tooltip-container"};function rs(s,t,o,l,r,_){const i=L("Tooltip"),e=G("p-md");return p(),A("div",cs,[(p(!0),A(K,null,Q(s.items,([a,y])=>(p(),u(i,X({key:a,modelValue:y.isShow,"onUpdate:modelValue":R=>y.isShow=R},y),{default:n(()=>[c($("span",null,null,512),[[e,y.text,void 0,{inline:!0}]])]),_:2},1040,["modelValue","onUpdate:modelValue"]))),128))])}const f=B(ps,[["render",rs]]);function m(s,t,o=!1){return async function(r){const _=await g(f),i=r.target,e=i.dataset.tooltipId,a=i.dataset.tooltipEnable!=="false",y=i.dataset.tooltipAction;a&&y.includes(s)&&(_[t](e),o&&r.preventDefault())}}function T(s,{modifiers:t}){let o;return t.top?o="top":t.bottom&&(o="bottom"),o?t.left?o=`${o}-start`:t.right&&(o=`${o}-end`):t.right?o="right":t.left&&(o="left"),o||(o="top"),t.start&&!o.endsWith("start")?o=`${o}-start`:t.end&&!o.endsWith("end")&&(o=`${o}-end`),o}function S(s,{modifiers:t}){const o=[];return t.focus&&o.push("focus"),t.hover&&o.push("hover"),t.click&&o.push("click"),o.join("-")||"focus-hover"}function E(s,t){var o;return typeof t.value=="string"?t.value:s.hasAttribute("title")?s.getAttribute("title"):(o=s.dataset.tooltipText)!=null?o:""}function w(s,{modifiers:t}){return t.white?"white":"black"}const k=m("click","toggle",!0),x=m("hover","show"),P=m("hover","hide"),q=m("focus","show"),V=m("focus","hide"),is={async mounted(s,t){const o=await g(f),l=S(s,t),r=w(s,t),_=E(s,t),i=T(s,t),e=t.value!==!1&&!!_,a=o.add({target:s,placement:i,text:_,color:r});s.dataset.tooltipId=a,s.dataset.tooltipAction=l,s.dataset.tooltipText=_,s.dataset.tooltipEnable=e?"true":"false",s.removeAttribute("title"),s.addEventListener("click",k),s.addEventListener("mouseenter",x,{passive:!0}),s.addEventListener("mouseleave",P,{passive:!0}),s.addEventListener("focus",q,{passive:!0}),s.addEventListener("blur",V,{passive:!0})},async updated(s,t){const o=await g(f),l=s.dataset.tooltipId,r=S(s,t),_=w(s,t),i=E(s,t),e=T(s,t),a=t.value!==!1&&!!i;s.dataset.tooltipAction=r,s.dataset.tooltipText=i,s.dataset.tooltipEnable=a?"true":"false",o.update(l,{target:s,placement:e,text:i,color:_}),a||o.hide(l),s.removeAttribute("title")},async beforeUnmount(s,t){const o=await g(f),l=s.dataset.tooltipId,r=E(s,t);o.remove(l),s.removeEventListener("click",k),s.removeEventListener("mouseenter",x),s.removeEventListener("mouseleave",P),s.removeEventListener("focus",q),s.removeEventListener("blur",V),s.setAttribute("title",r),delete s.dataset.tooltipId,delete s.dataset.tooltipAction,delete s.dataset.tooltipText,delete s.dataset.tooltipEnable}},F=is,Ds=C("",3),ds={title:"Hello I'm Tooltip"},Fs=C("",2),ys={title:"**Hello** _I'm_ ~~Reyhan~~ Tooltip"},us=C("",3),_s=C("",2),hs=C("",3),Cs=C("",3),vs=C("",4),qs=JSON.parse('{"title":"Tooltip","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"With Markdown","slug":"with-markdown","link":"#with-markdown","children":[]}]},{"level":2,"title":"Color","slug":"color","link":"#color","children":[]},{"level":2,"title":"Placement","slug":"placement","link":"#placement","children":[{"level":3,"title":"Placement Align","slug":"placement-align","link":"#placement-align","children":[]}]},{"level":2,"title":"Trigger","slug":"trigger","link":"#trigger","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Modifiers","slug":"modifiers","link":"#modifiers","children":[]}]}],"relativePath":"components/tooltip/index.md"}'),As={name:"components/tooltip/index.md"},Vs=Object.assign(As,{setup(s){return H("Hello World"),(t,o)=>{const l=L("preview");return p(),A("div",null,[Ds,v(l,{class:"gap-2"},{default:n(()=>[c((p(),A("span",ds,[d(" Hover Me ")])),[[D(F)]])]),_:1}),Fs,v(l,null,{default:n(()=>[c((p(),A("span",ys,[d(" Hover Me ")])),[[D(F)]])]),_:1}),us,v(l,{class:"gap-2"},{default:n(()=>[c((p(),u(h,{title:"Black"},{default:n(()=>[d("Black")]),_:1})),[[D(F),void 0,void 0,{black:!0}]]),c((p(),u(h,{title:"White"},{default:n(()=>[d("White")]),_:1})),[[D(F),void 0,void 0,{white:!0}]])]),_:1}),_s,v(l,{class:"flex-col gap-2 md:flex-row"},{default:n(()=>[c((p(),u(h,{title:"Top"},{default:n(()=>[d("Top")]),_:1})),[[D(F),void 0,void 0,{top:!0}]]),c((p(),u(h,{title:"Left"},{default:n(()=>[d("Left")]),_:1})),[[D(F),void 0,void 0,{left:!0}]]),c((p(),u(h,{title:"Right"},{default:n(()=>[d("Right")]),_:1})),[[D(F),void 0,void 0,{right:!0}]]),c((p(),u(h,{title:"Bottom"},{default:n(()=>[d("Bottom")]),_:1})),[[D(F),void 0,void 0,{bottom:!0}]])]),_:1}),hs,v(l,{class:"flex-col gap-2 md:flex-row"},{default:n(()=>[c((p(),u(h,{title:"Bottom"},{default:n(()=>[d("Bottom")]),_:1})),[[D(F),void 0,void 0,{bottom:!0}]]),c((p(),u(h,{title:"Bottom Start"},{default:n(()=>[d("Start")]),_:1})),[[D(F),void 0,void 0,{bottom:!0,start:!0}]]),c((p(),u(h,{title:"Bottom End"},{default:n(()=>[d("End")]),_:1})),[[D(F),void 0,void 0,{bottom:!0,end:!0}]])]),_:1}),Cs,v(l,{class:"flex-col gap-2 md:flex-row"},{default:n(()=>[c((p(),u(h,{title:"Hover + Focus"},{default:n(()=>[d("Default")]),_:1})),[[D(F)]]),c((p(),u(h,{title:"Click"},{default:n(()=>[d("Click")]),_:1})),[[D(F),void 0,void 0,{click:!0}]]),c((p(),u(h,{title:"Hover"},{default:n(()=>[d("Hover")]),_:1})),[[D(F),void 0,void 0,{hover:!0}]]),c((p(),u(h,{title:"Focus"},{default:n(()=>[d("Focus")]),_:1})),[[D(F),void 0,void 0,{focus:!0}]])]),_:1}),vs])}}});export{qs as __pageData,Vs as default};
