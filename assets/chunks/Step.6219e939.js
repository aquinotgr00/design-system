import{f as k,g as l,i as w,U as p,T,a4 as b,q as A,h as d,x as C,_ as S,b as F,o as x,c as N,d as V,w as g,r as _}from"../app.0800046f.js";import{f as h}from"./vnode.4ea47da0.js";import{u as E}from"./index.64d9cf75.js";import{m as O,g as U,s as X}from"./index.db5cf504.js";function f(){}const j=k({props:{active:{type:Number,default:0},keepAlive:{type:Boolean,default:!1}},setup(e,{slots:s}){const o=l("slide-left");return w(()=>e.active,(n,t)=>{o.value=n>t?"slide-left":"slide-right"}),()=>{const n=h(s.default(),"Step").at(e.active),t=()=>e.keepAlive?p(b,()=>p(n,{key:e.active})):p(n,{key:e.active});return p(T,{name:o.value,mode:"out-in"},t)}}});async function q(e,...s){try{return await e.call(this,...s)}catch{return!1}}async function m(e,...s){let o=!0;for(const n of e)if(o=await q(n,...s),!o)break;return o}const P=Symbol("STEPS_CONTEXT");function K(){const e=A(P,()=>(console.warn("<p-step> must be placed inside <p-steps>"),{next:f,prev:f,toStep:f,step:l(1),canPrev:l(!1),canNext:l(!1),onPrevHooks:l([]),onNextHooks:l([])}),!0),s=l([]),o=l([]);function n(a){s.value.unshift(a)}function t(a){o.value.unshift(a)}const r=async(...a)=>await m(s.value,...a),u=async(...a)=>await m(o.value,...a);return e.onPrevHooks.value.unshift(r),e.onNextHooks.value.unshift(u),O(()=>{const a=e.onPrevHooks.value.indexOf(r),i=e.onNextHooks.value.indexOf(u);a>-1&&e.onPrevHooks.value.splice(a,1),i>-1&&e.onNextHooks.value.splice(i,1)}),{...e,onBeforePrev:n,onBeforeNext:t}}const M=k({components:{StepSlider:j},props:{modelValue:{type:Number,default:1},keepAlive:{type:Boolean,default:!1},onBeforePrev:{type:Function,default:()=>!0},onBeforeNext:{type:Function,default:()=>!0},onFinished:{type:Function,default:f}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e,{slots:s}){const o=l([e.onBeforeNext]),n=l([e.onBeforePrev]),t=E(e),r=d(()=>h(s.default(),"Step").length),u=U(t,1,r),a=d(()=>t.value<=r.value),i=d(()=>t.value>1);async function B(){a.value&&await v(t.value+1)}async function H(){i.value&&await v(t.value-1)}async function v(c){const y=t.value,$=c>y?o.value:n.value;await m($,c,y)&&(c<=r.value?u.value=c:await e.onFinished())}return X(u,t),C(P,{step:u,next:B,prev:H,canNext:a,canPrev:i,toStep:v,onPrevHooks:n,onNextHooks:o}),{model:t}}});const R={class:"steps","data-testid":"steps"};function z(e,s,o,n,t,r){const u=F("StepSlider");return x(),N("div",R,[V(u,{active:e.model-1,"keep-alive":e.keepAlive},{default:g(()=>[_(e.$slots,"default")]),_:3},8,["active","keep-alive"])])}const Y=S(M,[["render",z]]),D=k({name:"Step",props:{onBeforePrev:{type:Function,default:()=>!0},onBeforeNext:{type:Function,default:()=>!0}},setup(e){const{canNext:s,canPrev:o,toStep:n,step:t,next:r,prev:u,onBeforeNext:a,onBeforePrev:i}=K();return a(e.onBeforeNext),i(e.onBeforePrev),{canNext:s,canPrev:o,toStep:n,prev:u,next:r,step:t}}}),G={class:"step","data-testid":"step"};function I(e,s,o,n,t,r){return x(),N("div",G,[_(e.$slots,"default",{step:e.step,next:e.next,prev:e.prev,canPrev:e.canPrev,canNext:e.canNext,toStep:e.toStep})])}const Z=S(D,[["render",I]]);export{Y as S,Z as a};
