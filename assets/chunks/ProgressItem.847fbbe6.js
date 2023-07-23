import{f as B,t as V}from"./vnode.48971f6f.js";import{b as m,k as b}from"./baseIteratee.4af24479.js";import{i as C}from"./isArrayLike.740cb4e2.js";import{t as I}from"./toInteger.cccd26ae.js";import{m as g,c,_ as v,x as d,p,G as o,q as u,A as M,R as N,M as P,y as h,z as $,C as S,v as y}from"./framework.a20d269c.js";function L(e,a,r,n){for(var s=e.length,t=r+(n?1:-1);n?t--:++t<s;)if(a(e[t],t,e))return t;return-1}function z(e){return function(a,r,n){var s=Object(a);if(!C(a)){var t=m(r);a=b(a),r=function(l){return t(s[l],l,s)}}var i=e(a,r,n);return i>-1?s[t?a[i]:i]:void 0}}var A=Math.max,F=Math.min;function x(e,a,r){var n=e==null?0:e.length;if(!n)return-1;var s=n-1;return r!==void 0&&(s=I(r),s=r<0?A(n+s,0):F(s,n-1)),L(e,m(a),s,!0)}var D=z(x);const j=D,q=g({props:{variant:{type:String,default:"dot"},titleVariant:{type:String,default:"specific"},vertical:{type:Boolean,default:!1}},setup(e,{slots:a}){const r=c(()=>{const s=[];return e.variant&&s.push(`progress--${e.variant}`),e.titleVariant&&s.push(`progress--${e.titleVariant}`),e.vertical?s.push("progress--vertical"):s.push("progress--horizontal"),s}),n=c(()=>{var i,l,_;const s=B(a.default(),"ProgressItem"),t=j(s,k=>{var f;return V((f=k.props)==null?void 0:f.active)});return{title:(l=(i=t==null?void 0:t.props)==null?void 0:i.title)!=null?l:"",slots:(_=t==null?void 0:t.children)!=null?_:{}}});return{classNames:r,item:n}}});const w={class:"progress__items"},E={key:0,"data-testid":"progress-title-general",class:"progress__title"};function G(e,a,r,n,s,t){var i;return d(),p("div",{class:y(["progress",e.classNames]),"data-testid":"progress"},[o("div",w,[u(e.$slots,"default")]),e.titleVariant==="general"?(d(),p("div",E,[(i=e.item.slots)!=null&&i.title?(d(),M(N(e.item.slots.title),{key:0})):(d(),p(P,{key:1},[h($(e.item.title),1)],64))])):S("",!0)],2)}const ee=v(q,[["render",G]]),O=g({name:"ProgressItem",props:{title:{type:String,default:""},active:{type:Boolean,default:!1}},setup(e){return{classNames:c(()=>{const r=[];return e.active&&r.push("progress--active"),r})}}}),T={class:"progress__content"},H=o("div",{class:"progress__bar"},null,-1),J={class:"progress__point"},K=o("div",{"data-testid":"progress-point-item",class:"progress__point-item"},null,-1),Q={"data-testid":"progress-title",class:"progress__title"};function R(e,a,r,n,s,t){return d(),p("div",{class:y(["progress__item",e.classNames]),"data-testid":"progress-item"},[o("div",T,[H,o("div",J,[u(e.$slots,"icon",{},()=>[K])]),o("div",Q,[u(e.$slots,"title",{},()=>[h($(e.title),1)])])])],2)}const se=v(O,[["render",R]]);export{se as a,ee as p};