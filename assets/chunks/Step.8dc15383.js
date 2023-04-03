import{d as k,h as u,w,ae as p,T,ak as A,S as C,f as d,U as F,_ as N,B as V,o as _,c as x,D as b,z as E,r as y}from"./framework.76afac0a.js";import{f as P}from"./vnode.bdba34b1.js";import{u as O}from"./index.66044519.js";import{u as g}from"./index.c7a185b2.js";import{r as m}from"./hook.64405bb6.js";import{p as U,s as X}from"./index.d997e305.js";function f(){}const j=k({props:{active:{type:Number,default:0},keepAlive:{type:Boolean,default:!1}},setup(e,{slots:s}){const a=u("slide-left");return w(()=>e.active,(n,t)=>{a.value=n>t?"slide-left":"slide-right"}),()=>{const n=P(s.default(),"Step").at(e.active),t=()=>e.keepAlive?p(A,()=>p(n,{key:e.active})):p(n,{key:e.active});return p(T,{name:a.value,mode:"out-in"},t)}}}),h=Symbol("STEPS_CONTEXT");function z(){const e=C(h,()=>(console.warn("<p-step> must be placed inside <p-steps>"),{next:f,prev:f,toStep:f,step:u(1),canPrev:u(!1),canNext:u(!1),onPrevHooks:u([]),onNextHooks:u([])}),!0),s=u([]),a=u([]);function n(o){s.value.unshift(o)}function t(o){a.value.unshift(o)}const r=async(...o)=>await m(s.value,...o),l=async(...o)=>await m(a.value,...o);return e.onPrevHooks.value.unshift(r),e.onNextHooks.value.unshift(l),U(()=>{const o=e.onPrevHooks.value.indexOf(r),i=e.onNextHooks.value.indexOf(l);o>-1&&e.onPrevHooks.value.splice(o,1),i>-1&&e.onNextHooks.value.splice(i,1)}),{...e,onBeforePrev:n,onBeforeNext:t}}const D=k({components:{StepSlider:j},props:{modelValue:{type:Number,default:1},keepAlive:{type:Boolean,default:!1},onBeforePrev:{type:Function,default:()=>!0},onBeforeNext:{type:Function,default:()=>!0},onFinished:{type:Function,default:f}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e,{slots:s}){const a=u([e.onBeforeNext]),n=u([e.onBeforePrev]),t=O(e),r=d(()=>P(s.default(),"Step").length),l=g(t,1,r),o=d(()=>t.value<=r.value),i=d(()=>t.value>1);async function B(){o.value&&await v(t.value+1)}async function H(){i.value&&await v(t.value-1)}async function v(c){const S=t.value,$=c>S?a.value:n.value;await m($,c,S)&&(c<=r.value?l.value=c:await e.onFinished())}return X(l,t),F(h,{step:l,next:B,prev:H,canNext:o,canPrev:i,toStep:v,onPrevHooks:n,onNextHooks:a}),{model:t}}});const K={class:"steps","data-testid":"steps"};function M(e,s,a,n,t,r){const l=V("StepSlider");return _(),x("div",K,[b(l,{active:e.model-1,"keep-alive":e.keepAlive},{default:E(()=>[y(e.$slots,"default")]),_:3},8,["active","keep-alive"])])}const Z=N(D,[["render",M]]),R=k({name:"Step",props:{onBeforePrev:{type:Function,default:()=>!0},onBeforeNext:{type:Function,default:()=>!0}},setup(e){const{canNext:s,canPrev:a,toStep:n,step:t,next:r,prev:l,onBeforeNext:o,onBeforePrev:i}=z();return o(e.onBeforeNext),i(e.onBeforePrev),{canNext:s,canPrev:a,toStep:n,prev:l,next:r,step:t}}}),q={class:"step","data-testid":"step"};function G(e,s,a,n,t,r){return _(),x("div",q,[y(e.$slots,"default",{step:e.step,next:e.next,prev:e.prev,canPrev:e.canPrev,canNext:e.canNext,toStep:e.toStep})])}const ee=N(R,[["render",G]]);export{Z as S,ee as a};
