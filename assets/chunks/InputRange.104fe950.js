import{t as _,e as J}from"./index.72367aa0.js";import{u as N}from"./index.0498a74e.js";import{z as K,i as D,N as Q,_ as W,f as Y,C as b,g as S,h as r,k as Z,o as x,c as ee,m as d,d as T,E as B,a1 as E,n as ae}from"../app.5d497f38.js";import{t as te}from"./throttle.77eff498.js";import{k as h,s as R}from"./index.d8d6b547.js";function $(e,t){const s=K();D(e,async c=>{if(s.value&&s.value.unset(),c){const{default:v}=await W(()=>import("./interact.min.cbe60582.js").then(l=>l.i),["assets/chunks/interact.min.cbe60582.js","assets/app.5d497f38.js"]),n=te(t,1e3/120);s.value=v(c).styleCursor(!1).draggable({onmove:n})}}),Q(async()=>{s.value&&s.value.unset()})}const le=Y({props:{modelValue:{type:[Number,Array],default:void 0},start:{type:Number,default:void 0},end:{type:Number,default:void 0},step:{type:[String,Number],default:1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["change","update:modelValue","update:end","update:start"],setup(e,{emit:t}){var C,V,w;const s=_("track"),c=_("thumb-start"),v=_("thumb-end"),n=h(b(e,"min")),l=h(b(e,"max")),f=h(b(e,"step")),y=S(Array.isArray(e.modelValue)?e.modelValue[0]:(C=e.start)!=null?C:n.value),k=S(Array.isArray(e.modelValue)?e.modelValue[1]:(w=(V=e.end)!=null?V:e.modelValue)!=null?w:l.value),I=r(()=>e.multiple?y.value+f.value:n.value),L=r(()=>e.multiple?k.value-f.value:l.value),i=N(y.value,n,L),o=N(k.value,I,l),{width:P,left:U}=J(s),z=r({get(){var a;return Array.isArray(e.modelValue)?e.modelValue[0]:(a=e.start)!=null?a:n.value},set(a){t("update:start",a)}}),M=r({get(){var a;return Array.isArray(e.modelValue)?e.modelValue[1]:Number.isFinite(e.modelValue)?e.modelValue:(a=e.end)!=null?a:l.value},set(a){t("update:end",a)}}),p=r(()=>(i.value-n.value)/(l.value-n.value)*100),F=r(()=>(o.value-n.value)/(l.value-n.value)*100),O=r(()=>{const a=[];return e.disabled&&a.push("input-range--disabled"),e.readonly&&a.push("input-range--readonly"),e.error&&a.push("input-range--error","state--error"),a}),X=r(()=>({width:`${p.value}%`})),j=r(()=>({width:`${F.value-p.value}%`}));function m(a){const g=(a.pageX-U.value)/P.value*(l.value-n.value)+n.value;return Math.round(g/f.value)*f.value}function q(a){!e.disabled&&!e.readonly&&(i.value=m(a))}function G(a){if(!e.disabled&&!e.readonly){const u=m(a);if(e.multiple){const A=Math.abs(u-i.value),g=Math.abs(u-o.value);if(A<g){i.value=u;return}}o.value=u}}function H(a){!e.disabled&&!e.readonly&&(o.value=m(a))}return $(c,a=>{!e.disabled&&!e.readonly&&(i.value=m(a))}),$(v,a=>{!e.disabled&&!e.readonly&&(o.value=m(a))}),R(i,z),R(o,M),D([i,o],([a,u])=>{y.value=a,k.value=u,e.multiple?(t("update:modelValue",[a,u]),t("change",[a,u])):(t("update:modelValue",u),t("change",u))}),{classNames:O,lowerStyle:X,upperStyle:j,onClickLowerTrack:q,onClickActiveTrack:G,onClickUpperTrack:H}}});const ne={ref:"track",class:"input-range__tracks"},ue={ref:"thumb-start","data-testid":"thumb-start",class:"input-range__thumb input-range__thumb-start"},re={ref:"thumb-end","data-testid":"thumb-end",class:"input-range__thumb input-range__thumb-end"};function se(e,t,s,c,v,n){return x(),ee("div",{"data-testid":"input-range",class:ae(["input-range",e.classNames])},[d("div",ne,[T(d("div",{"data-testid":"track-lower",class:"input-range__track input-range__track-lower",style:E(e.lowerStyle),onClick:t[0]||(t[0]=(...l)=>e.onClickLowerTrack&&e.onClickLowerTrack(...l))},null,4),[[B,e.multiple]]),d("div",{ref:"track-active","data-testid":"track-active",class:"input-range__track input-range__track-active",style:E(e.upperStyle),onClick:t[1]||(t[1]=(...l)=>e.onClickActiveTrack&&e.onClickActiveTrack(...l))},[T(d("div",ue,null,512),[[B,e.multiple]]),d("div",re,null,512)],4),d("div",{"data-testid":"track-upper",class:"input-range__track input-range__track-upper",onClick:t[2]||(t[2]=(...l)=>e.onClickUpperTrack&&e.onClickUpperTrack(...l))})],512)],2)}const fe=Z(le,[["render",se]]);export{fe as p};
