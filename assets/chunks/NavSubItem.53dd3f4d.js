import{f as d,x as v,h as f,q as b,_ as y,b as S,o as i,c,a as _,r as u,p,t as g,l as $,y as h,n as k}from"../app.18e941ec.js";import{I as N}from"./16.fc620c6c.js";const m=Symbol("SidebarSettings"),E=d({props:{variant:{type:String,default:"pills"},align:{type:String,default:"left"},type:{type:String,default:"wide"},fixed:{type:Boolean,default:!1}},setup(e){return v(m,{variant:e.variant,align:e.align,type:e.type}),{classNames:f(()=>{const s=["sidebar"];return e.type&&s.push(`sidebar--${e.type}`),e.align&&s.push(`sidebar--${e.align}`),e.variant&&s.push(`sidebar--${e.variant}`),e.fixed&&s.push("sidebar--fixed"),s})}}});const I=d({components:{IconArrow:N},props:{text:{type:String,default:void 0},collapsible:{type:Boolean,default:!1}},setup(e,{slots:t}){const s=b(m,void 0,!0),l=s==null?void 0:s.type,o=f(()=>{const a=[];return t.icon&&a.push("nav__subitem--icon"),e.collapsible&&l!=="narrow"&&a.push("nav__subitem--collapsible nav__subitem--collapsed"),a});function r(a){if(e.collapsible&&l!=="narrow"){const n=a.target.closest("li");n==null||n.classList.toggle("nav__subitem--collapsed")}}return{classNames:o,collapse:r}}});const w={key:0,class:"nav__link__icon"},B={class:"nav__link__label"};function C(e,t,s,l,o,r){const a=S("IconArrow");return i(),c("li",{"data-testid":"nav-subitem",class:k(["nav__subitem",e.classNames])},[_("div",{class:"nav__subitem__parent","data-testid":"nav-subitem-parent",onClick:t[0]||(t[0]=h((...n)=>e.collapse&&e.collapse(...n),["prevent"]))},[e.$slots.icon?(i(),c("span",w,[u(e.$slots,"icon")])):p("",!0),_("span",B,g(e.text),1),e.collapsible?(i(),$(a,{key:1,class:"nav__link__caret"})):p("",!0)]),u(e.$slots,"default")],2)}const D=y(I,[["render",C]]);export{m as S,E as _,D as p};
