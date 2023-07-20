import{T as y}from"../components_toast_index.md.37524a92.js";import{b as h}from"./baseClamp.947838b9.js";import{t as b,b as g}from"./toString.314d06e3.js";import{t as C}from"./toInteger.cccd26ae.js";import{m as c,r as m,c as x,_ as d,J as f,x as i,p,N as k,B as S,K as _,L as v,A as T,v as u,aC as w,s as B,ad as G,n as N}from"./framework.f3d2a0a5.js";import"./Button.a307e6e8.js";import"./index.a3ecab28.js";import"./Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./16.bc9027af.js";import"./use-singleton.507b1fe8.js";import"./isObjectLike.53b0037d.js";import"./isArray.513c67aa.js";import"./isSymbol.4326927f.js";import"./toNumber.09abc7f0.js";function R(t,e,o){return t=b(t),o=o==null?0:h(C(o),0,t.length),e=g(e),t.slice(o,o+e.length)==e}const D=c({components:{Toast:y},props:{position:{type:String,default:"bottom-left"}},setup(t){const e=m([]),o=x(()=>{const s=[];return t.position&&s.push(`toast-container--${t.position}`),s});function r(s){R(s.position,"bottom")?e.value.push({...s,_id:Symbol("id")}):e.value.unshift({...s,_id:Symbol("id")})}function n(s){e.value.splice(s,1)}return{add:r,remove:n,items:e,classNames:o}}});function L(t,e,o,r,n,s){const l=f("Toast");return i(),p("div",{"data-testid":"toast-container",class:u(["toast-container",t.classNames])},[k(w,{tag:"div",name:"toast"},{default:S(()=>[(i(!0),p(_,null,v(t.items,(a,$)=>(i(),T(l,{key:a._id,title:a.title,text:a.text,type:a.type,variant:a.variant,duration:a.duration,class:u(a.toastClass),onDismissed:F=>t.remove($)},null,8,["title","text","type","variant","duration","class","onDismissed"]))),128))]),_:1})],2)}const z=d(D,[["render",L]]),A=c({components:{ToastGroup:z},setup(){const t=B(new Map);async function e(o){var s;o.position||(o.position="bottom-left");const r=o.position;let n=t.value.get(r);n||(n={ref:m(),position:r},t.value.set(r,n),G(t),await N()),(s=n.ref.value)==null||s.at(0).add(o)}return{add:e,groups:t}}});function E(t,e,o,r,n,s){const l=f("ToastGroup");return i(),p("div",null,[(i(!0),p(_,null,v(t.groups.values(),a=>(i(),T(l,{key:a.position,ref_for:!0,ref:a.ref,position:a.position},null,8,["position"]))),128))])}const Y=d(A,[["render",E]]);export{Y as default};
