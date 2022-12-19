import{t as f}from"./index.65310f70.js";import{u as y}from"./index.6ecb0221.js";import{a as x,c as V,f as C,s as k,o as B,b as T}from"./floating-ui.dom.esm.4e25a8ce.js";import{i as _,C as v,k as b,l as P,D as U,f as h,d as w,E,o as p,c as d,h as g,g as M,n as N,j,a6 as q,r as D,U as R,P as z,Q as A,q as F,w as I,a2 as L}from"../app.20e38cb1.js";import{p as O}from"./index.2cde238a.js";import{t as Q}from"./toString.401226e4.js";import"./index.f8948324.js";import"./browser.9a88ed44.js";import"./isObjectLike.46b91259.js";import"./isArray.513c67aa.js";import"./isSymbol.b765f5ee.js";var G=0;function H(e){var r=++G;return Q(e)+r}const J=_({props:{modelValue:{type:Boolean,default:!1},color:{type:String,default:"black"},target:{type:Object,default:void 0},placement:{type:String,default:"top"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","show","hide"],setup(e,{emit:r}){const i=y(e),u=v(e,"placement"),l=v(e,"target"),a=f("tooltip"),n=f("arrow"),o=b(()=>{const t=[];return e.color&&t.push(`tooltip--${e.color}`),t});return P(i,t=>{r(t?"show":"hide",l.value)}),U(t=>{if(a.value&&l.value&&n.value){const s=x(l.value,a.value,()=>{V(l.value,a.value,{strategy:"absolute",placement:u.value,middleware:[C(),k(),B(12),T({element:n.value})]}).then(({x:c,y:$,middlewareData:m,placement:S})=>{a.value&&(a.value.dataset.popperPlacement=S,a.value.style.left=`${c||0}px`,a.value.style.top=`${$||0}px`),n.value&&(n.value.style.left=`${m.arrow.x}px`,n.value.style.top=`${m.arrow.y}px`)})});t(s)}},{flush:"post"}),{isShow:i,classNames:o}}});const K={ref:"arrow",class:"tooltip__arrow","data-popper-arrow":""};function W(e,r,i,u,l,a){return w((p(),d("div",{ref:"tooltip",class:N(["tooltip",e.classNames]),"data-testid":"tooltip"},[g("div",K,null,512),M(e.$slots,"default")],2)),[[E,e.isShow]])}const X=h(J,[["render",W]]),Y=_({components:{Tooltip:X},directives:{pMd:O},setup(){const e=j(new Map);function r(o){const t=H("tooltip_");return e.value.set(t,q({...o,isShow:!1})),t}function i(o,t){const s=e.value.get(o);s&&(s.target=t.target,s.text=t.text,s.placement=t.placement)}function u(o){e.value.get(o).isShow=!0}function l(o){e.value.get(o).isShow=!1}function a(o){const t=e.value.get(o);t.isShow=!t.isShow}function n(o){e.value.delete(o)}return{items:e,add:r,update:i,show:u,hide:l,toggle:a,remove:n}}}),Z={class:"tooltip-container","data-testid":"tooltip-container"};function ee(e,r,i,u,l,a){const n=D("Tooltip"),o=R("p-md");return p(),d("div",Z,[(p(!0),d(z,null,A(e.items,([t,s])=>(p(),F(n,L({key:t,modelValue:s.isShow,"onUpdate:modelValue":c=>s.isShow=c},s),{default:I(()=>[w(g("span",null,null,512),[[o,s.text,void 0,{inline:!0}]])]),_:2},1040,["modelValue","onUpdate:modelValue"]))),128))])}const de=h(Y,[["render",ee]]);export{de as default};
