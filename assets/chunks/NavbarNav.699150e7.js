import{g as u,t as _,e as b}from"./index.04e5f611.js";import{N as v}from"./index.fe135e19.js";import{f as d,A as m,C as r,h as g,D as y,k as l,o as i,c as f,l as c,n as $,x as h,r as N,q as B,w as S}from"../app.8aab0a2c.js";import{N as x}from"./NavItem.c5bd6284.js";const w=d({props:{variant:{type:String,default:"pills"},toggleable:{type:String,default:void 0},fixed:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(a){const{y:n}=u(),t=_("navbar"),{height:s}=b(t);m(v,{variant:r(a,"variant"),toggleable:r(a,"toggleable"),condensed:r(a,"condensed")});const o=g(()=>{const e=[""];return a.fixed&&e.push("navbar--fixed"),a.variant&&e.push(`navbar--${a.variant}`),a.toggleable&&e.push(`navbar--expand-${a.toggleable}`),e});return y(e=>{typeof document<"u"&&document.body&&a.fixed&&(document.body.style.setProperty("padding-top",`${s.value}px`),e(()=>{document.body.style.removeProperty("padding-top")}))}),{classNames:o,y:n,height:s}}});function C(a,n,t,s,o,e){return i(),f("nav",{ref:"navbar","data-testid":"navbar",class:$(["navbar",[{"navbar--shadow":a.y>a.height},a.classNames]])},[c(a.$slots,"default")],2)}const D=l(w,[["render",C]]),k=d({props:{href:{type:String,default:void 0}}});const E=["href"];function A(a,n,t,s,o,e){return i(),f("a",{href:a.href,"data-testid":"navbar-brand",class:"navbar__brand"},[c(a.$slots,"default")],8,E)}const G=l(k,[["render",A]]),R=d({components:{Nav:x},props:{align:{type:String,default:"left"}},setup(){const a=h(v,void 0,!1),n=a==null?void 0:a.variant,t=a==null?void 0:a.condensed;return{variant:n,condensed:t}}});function P(a,n,t,s,o,e){const p=N("Nav");return i(),B(p,{align:a.align,variant:a.variant,condensed:a.condensed,class:"navbar__nav","data-testid":"navbar-nav"},{default:S(()=>[c(a.$slots,"default")]),_:3},8,["align","variant","condensed"])}const I=l(R,[["render",P]]);export{G as a,I as b,D as p};