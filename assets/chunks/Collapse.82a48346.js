import{u as c}from"./index.6f44f4cd.js";import{i as f,a3 as o,k as d,x as v,f as g,o as _,q as h,w as N,d as b,h as w,n as V,g as y,H as B,T as S}from"../app.9fa2f258.js";const T=Symbol("NavbarSettings"),C=f({props:{modelValue:{type:Boolean,default:!1},isNav:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(a){const l=c(a),e=v(T,void 0,!0),t=o("(min-width: 1024px)"),n=o("(min-width: 768px)"),u=o("(min-width: 640px)"),p=d(()=>{var s,i,r;return((s=e==null?void 0:e.toggleable)==null?void 0:s.value)==="lg"?t.value:((i=e==null?void 0:e.toggleable)==null?void 0:i.value)==="md"?n.value:((r=e==null?void 0:e.toggleable)==null?void 0:r.value)==="sm"?u.value:l.value}),m=d(()=>{const s=[""];return l.value&&s.push("collapse--show"),a.isNav&&s.push("navbar--collapse"),s});return{model:l,classNames:m,isToggleable:p}}});function $(a,l,e,t,n,u){return _(),h(S,{name:"fade",mode:"out-in"},{default:N(()=>[b(w("div",{"data-testid":"collapse",class:V(["collapse",a.classNames])},[y(a.$slots,"default")],2),[[B,a.model||a.isToggleable]])]),_:3})}const M=g(C,[["render",$]]);export{T as N,M as p};
