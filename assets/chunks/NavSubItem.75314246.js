import{I as m}from"./16.a6e9aa03.js";import{m as d,V as v,c as b,_ as f,J as S,x as l,p as r,G as p,q as _,C as u,z as y,A as k,a5 as I,v as N}from"./framework.f3d2a0a5.js";const $=Symbol("SidebarSettings"),g=d({components:{IconArrow:m},props:{text:{type:String,default:void 0},collapsible:{type:Boolean,default:!1}},setup(s,{slots:t}){const a=v($,void 0,!0),n=a==null?void 0:a.type,i=b(()=>{const e=[];return t.icon&&e.push("nav__subitem--icon"),s.collapsible&&n!=="narrow"&&e.push("nav__subitem--collapsible nav__subitem--collapsed"),e});function c(e){if(s.collapsible&&n!=="narrow"){const o=e.target.closest("li");o==null||o.classList.toggle("nav__subitem--collapsed")}}return{classNames:i,collapse:c}}});const w={key:0,class:"nav__link__icon"},B={class:"nav__link__label"};function C(s,t,a,n,i,c){const e=S("IconArrow");return l(),r("li",{"data-testid":"nav-subitem",class:N(["nav__subitem",s.classNames])},[p("div",{class:"nav__subitem__parent","data-testid":"nav-subitem-parent",onClick:t[0]||(t[0]=I((...o)=>s.collapse&&s.collapse(...o),["prevent"]))},[s.$slots.icon?(l(),r("span",w,[_(s.$slots,"icon")])):u("",!0),p("span",B,y(s.text),1),s.collapsible?(l(),k(e,{key:1,class:"nav__link__caret"})):u("",!0)]),_(s.$slots,"default")],2)}const E=f(g,[["render",C]]);export{$ as S,E as p};
