import{u as c}from"./index.efda7f73.js";import{d as o}from"./index.2c42bbf0.js";import{i as f,k as d,x as v,f as g,o as _,q as h,w as N,d as b,h as w,n as V,g as y,E as B,T as S}from"../app.daa127db.js";const T=Symbol("NavbarSettings"),C=f({props:{modelValue:{type:Boolean,default:!1},isNav:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(a){const l=c(a),e=v(T,void 0,!0),t=o("(min-width: 1024px)"),n=o("(min-width: 768px)"),r=o("(min-width: 640px)"),p=d(()=>{var s,u,i;return((s=e==null?void 0:e.toggleable)==null?void 0:s.value)==="lg"?t.value:((u=e==null?void 0:e.toggleable)==null?void 0:u.value)==="md"?n.value:((i=e==null?void 0:e.toggleable)==null?void 0:i.value)==="sm"?r.value:l.value}),m=d(()=>{const s=[""];return l.value&&s.push("collapse--show"),a.isNav&&s.push("navbar--collapse"),s});return{model:l,classNames:m,isToggleable:p}}});function $(a,l,e,t,n,r){return _(),h(S,{name:"fade",mode:"out-in"},{default:N(()=>[b(w("div",{"data-testid":"collapse",class:V(["collapse",a.classNames])},[y(a.$slots,"default")],2),[[B,a.model||a.isToggleable]])]),_:3})}const M=g(C,[["render",$]]);export{T as N,M as p};
