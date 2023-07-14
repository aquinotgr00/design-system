import{T as y}from"../components_toast_index.md.8efd24d5.js";import{b as h}from"./baseClamp.947838b9.js";import{t as b,b as g}from"./toString.314d06e3.js";import{t as C}from"./toInteger.cccd26ae.js";import{d as c,j as m,l as k,_ as d,D as f,o as i,c as p,G as x,B as G,F as _,N as v,A as T,n as u,aC as S,Z as w,ae as B,Y as N}from"./framework.1cabf72c.js";import"./Button.00c4db0e.js";import"./index.a3ecab28.js";import"./Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./commonjsHelpers.042e6b4d.js";import"./utils-6ba05f5b.0166e5c7.js";import"./16.f6193516.js";import"./use-singleton.0782a4bd.js";import"./isObjectLike.53b0037d.js";import"./isArray.513c67aa.js";import"./isSymbol.4326927f.js";import"./toNumber.09abc7f0.js";function D(t,e,o){return t=b(t),o=o==null?0:h(C(o),0,t.length),e=g(e),t.slice(o,o+e.length)==e}const R=c({components:{Toast:y},props:{position:{type:String,default:"bottom-left"}},setup(t){const e=m([]),o=k(()=>{const s=[];return t.position&&s.push(`toast-container--${t.position}`),s});function r(s){D(s.position,"bottom")?e.value.push({...s,_id:Symbol("id")}):e.value.unshift({...s,_id:Symbol("id")})}function n(s){e.value.splice(s,1)}return{add:r,remove:n,items:e,classNames:o}}});function F(t,e,o,r,n,s){const l=f("Toast");return i(),p("div",{"data-testid":"toast-container",class:u(["toast-container",t.classNames])},[x(S,{tag:"div",name:"toast"},{default:G(()=>[(i(!0),p(_,null,v(t.items,(a,$)=>(i(),T(l,{key:a._id,title:a.title,text:a.text,type:a.type,variant:a.variant,duration:a.duration,class:u(a.toastClass),onDismissed:E=>t.remove($)},null,8,["title","text","type","variant","duration","class","onDismissed"]))),128))]),_:1})],2)}const j=d(R,[["render",F]]),z=c({components:{ToastGroup:j},setup(){const t=w(new Map);async function e(o){var s;o.position||(o.position="bottom-left");const r=o.position;let n=t.value.get(r);n||(n={ref:m(),position:r},t.value.set(r,n),B(t),await N()),(s=n.ref.value)==null||s.at(0).add(o)}return{add:e,groups:t}}});function A(t,e,o,r,n,s){const l=f("ToastGroup");return i(),p("div",null,[(i(!0),p(_,null,v(t.groups.values(),a=>(i(),T(l,{key:a.position,ref_for:!0,ref:a.ref,position:a.position},null,8,["position"]))),128))])}const tt=d(z,[["render",A]]);export{tt as default};
