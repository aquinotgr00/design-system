import{n as p,t as _,j as b}from"./theme.113d465d.js";import{N as v}from"./index.fe135e19.js";import{m as d,a0 as m,t as r,c as y,l as g,_ as l,x as i,p as f,q as c,v as $,$ as h,K as N,H as B,I as S}from"./framework.e0781a45.js";import{N as k}from"./NavItem.vue_vue_type_style_index_0_lang.16a13bbc.js";const x=d({props:{variant:{type:String,default:"pills"},toggleable:{type:String,default:void 0},fixed:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(a){const{y:n}=p(),t=_("navbar"),{height:s}=b(t);m(v,{variant:r(a,"variant"),toggleable:r(a,"toggleable"),condensed:r(a,"condensed")});const o=y(()=>{const e=[""];return a.fixed&&e.push("navbar--fixed"),a.sticky&&e.push("navbar--sticky"),a.variant&&e.push(`navbar--${a.variant}`),a.toggleable&&e.push(`navbar--expand-${a.toggleable}`),e});return g(e=>{typeof document<"u"&&document.body&&a.fixed&&(document.body.style.setProperty("padding-top",`${s.value}px`),e(()=>{document.body.style.removeProperty("padding-top")}))}),{classNames:o,y:n,height:s}}});function w(a,n,t,s,o,e){return i(),f("nav",{ref:"navbar","data-testid":"navbar",class:$(["navbar",[{"navbar--shadow":a.y>a.height},a.classNames]])},[c(a.$slots,"default")],2)}const z=l(x,[["render",w]]),C=d({props:{href:{type:String,default:void 0}}});const E=["href"];function R(a,n,t,s,o,e){return i(),f("a",{href:a.href,"data-testid":"navbar-brand",class:"navbar__brand"},[c(a.$slots,"default")],8,E)}const G=l(C,[["render",R]]),j=d({components:{Nav:k},props:{align:{type:String,default:"left"}},setup(){const a=h(v,void 0,!1),n=a==null?void 0:a.variant,t=a==null?void 0:a.condensed;return{variant:n,condensed:t}}});function A(a,n,t,s,o,e){const u=N("Nav");return i(),B(u,{align:a.align,variant:a.variant,condensed:a.condensed,class:"navbar__nav","data-testid":"navbar-nav"},{default:S(()=>[c(a.$slots,"default")]),_:3},8,["align","variant","condensed"])}const H=l(j,[["render",A]]);export{G as a,H as b,z as p};
