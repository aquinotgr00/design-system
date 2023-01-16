import{g as B,t as H,e as S}from"./index.744c2812.js";import{N as m}from"./Collapse.c3d129ab.js";import{f as _,A,C as f,h,D as z,k as c,o as s,c as u,l,n as g,x as $,r as i,q as v,w as b,g as I}from"../app.3c0f5e00.js";import{N as k}from"./NavItem.b6ec670f.js";import{p as G}from"./Button.f97677d9.js";import{u as d}from"./utils-6ba05f5b.52e29260.js";import{I as L}from"./20.a7b31143.js";const ma="/design-system/assets/logo-privy.3a9a54ca.svg",T=_({props:{variant:{type:String,default:"pills"},toggleable:{type:String,default:void 0},fixed:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(a){const{y:t}=B(),e=H("navbar"),{height:o}=S(e);A(m,{variant:f(a,"variant"),toggleable:f(a,"toggleable"),condensed:f(a,"condensed")});const r=h(()=>{const n=[""];return a.fixed&&n.push("navbar--fixed"),a.variant&&n.push(`navbar--${a.variant}`),a.toggleable&&n.push(`navbar--expand-${a.toggleable}`),n});return z(n=>{typeof document<"u"&&document.body&&a.fixed&&(document.body.style.setProperty("padding-top",`${o.value}px`),n(()=>{document.body.style.removeProperty("padding-top")}))}),{classNames:r,y:t,height:o}}});function E(a,t,e,o,r,n){return s(),u("nav",{ref:"navbar","data-testid":"navbar",class:g(["navbar",[{"navbar--shadow":a.y>a.height},a.classNames]])},[l(a.$slots,"default")],2)}const ha=c(T,[["render",E]]),Z=_({props:{href:{type:String,default:void 0}}});const R=["href"];function F(a,t,e,o,r,n){return s(),u("a",{href:a.href,"data-testid":"navbar-brand",class:"navbar__brand"},[l(a.$slots,"default")],8,R)}const ga=c(Z,[["render",F]]),P=_({components:{Nav:k},props:{align:{type:String,default:"left"}},setup(){const a=$(m,void 0,!1),t=a==null?void 0:a.variant,e=a==null?void 0:a.condensed;return{variant:t,condensed:e}}});function j(a,t,e,o,r,n){const p=i("Nav");return s(),v(p,{align:a.align,variant:a.variant,condensed:a.condensed,class:"navbar__nav","data-testid":"navbar-nav"},{default:b(()=>[l(a.$slots,"default")]),_:3},8,["align","variant","condensed"])}const $a=c(P,[["render",j]]);var q=d,w=q.createSVGComponent(w,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"}}]),D=w;const U=D,W=_({components:{Button:G,IconMenu:U,IconClose:L},setup(){const a=I(!1),t=$(m,void 0,!1),e=t==null?void 0:t.toggleable,o=h(()=>{const n=[];return e!=null&&e.value&&n.push(`navbar__toggle--${e==null?void 0:e.value}`),n});function r(){a.value=!a.value}return{expanded:r,expand:a,classNames:o}}});function J(a,t,e,o,r,n){const p=i("IconClose"),V=i("IconMenu"),M=i("Button");return s(),v(M,{class:g(["navbar__toggle",a.classNames]),"data-testid":"navbar-toggle",variant:"outline",icon:"",onClick:a.expanded},{default:b(()=>[l(a.$slots,"default",{expanded:a.expand},()=>[a.expand?(s(),v(p,{key:0})):(s(),v(V,{key:1}))])]),_:3},8,["class","onClick"])}const ba=c(W,[["render",J]]);const K={},O={class:"nav__form","data-testid":"nav-form"};function Q(a,t){return s(),u("li",O,[l(a.$slots,"default")])}const wa=c(K,[["render",Q]]);const X={},Y={class:"nav__text","data-testid":"nav-text"};function aa(a,t){return s(),u("li",Y,[l(a.$slots,"default")])}const ya=c(X,[["render",aa]]);var ea=d,y=ea.createSVGComponent(y,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M26 14H24v2h2a3.0033 3.0033 0 013 3v4h2V19A5.0058 5.0058 0 0026 14zM24 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 2zM23 30H21V28a3.0033 3.0033 0 00-3-3H14a3.0033 3.0033 0 00-3 3v2H9V28a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM16 13a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0016 11zM8 14H6a5.0059 5.0059 0 00-5 5v4H3V19a3.0033 3.0033 0 013-3H8zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"}}]),ta=y;const Na=ta;var na=d,N=na.createSVGComponent(N,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M16 28L9 21 10.41 19.59 16 25.17 21.59 19.59 23 21 16 28zM16 4L23 11 21.59 12.41 16 6.83 10.41 12.41 9 11 16 4z"}}]),oa=N;const xa=oa;var sa=d,x=sa.createSVGComponent(x,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"}}]),ra=x;const Ca=ra;var ca=d,C=ca.createSVGComponent(C,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"}}]),la=C;const Va=la;export{Va as I,ma as _,ga as a,$a as b,wa as c,ba as d,Ca as e,Na as f,xa as g,ya as h,ha as p};