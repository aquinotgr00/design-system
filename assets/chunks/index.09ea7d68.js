import{p as I,a as h}from"./SidebarBrand.vue_vue_type_style_index_0_lang.92089bf7.js";import{p as $}from"./NavItem.2bac52db.js";import{p as C}from"./NavSubItem.a69b5a9e.js";import{m as B,_ as V,K as r,x as t,H as n,aj as x,I as a,q as f,p as s,G as i,V as c,R as b,J as m,M,y,z as g,v as w}from"./framework.e0781a45.js";const z=B({components:{Sidebar:I,SidebarNav:h,NavItem:$,NavSubItem:C},props:{menus:{type:Array,default:()=>[]},fixed:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},type:{type:String,default:"wide"},align:{type:String,default:"left"},toggleable:{type:String,default:void 0}}}),D=["src"],E=["src"];function j(o,q,A,F,G,H){const d=r("NavItem"),p=r("SidebarNav"),_=r("NavSubItem"),v=r("Sidebar");return t(),n(v,{"data-testid":"sidebar-menu",type:o.type,fixed:o.fixed,sticky:o.sticky,toggleable:o.toggleable,align:o.align},x({brand:a(()=>[f(o.$slots,"default")]),default:a(()=>[(t(!0),s(i,null,c(o.menus,(l,S)=>(t(),n(p,{key:S,title:l.title,bottom:l.bottom,condensed:l.condensed},{default:a(()=>[(t(!0),s(i,null,c(l.items,(e,k)=>(t(),s(i,{key:k},[e.submenu?(t(),n(_,{key:0,text:e.label,collapsible:e.collapsible},{icon:a(()=>[e.icon&&typeof e.icon=="string"?(t(),s("img",{key:0,src:e.icon,alt:"icon-menu"},null,8,D)):e.icon?(t(),n(b(e.icon),{key:1})):m("",!0)]),default:a(()=>[M(p,{condensed:l.condensed},{default:a(()=>[(t(!0),s(i,null,c(e.submenu,(u,N)=>(t(),n(d,{key:N,href:u.url},{default:a(()=>[y(g(u.label),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["condensed"])]),_:2},1032,["text","collapsible"])):(t(),n(d,{key:1,href:e.url,class:w({"nav__item--no-label":!e.label,"nav__item--no-icon":!e.icon})},{icon:a(()=>[e.icon&&typeof e.icon=="string"?(t(),s("img",{key:0,src:e.icon,alt:"icon-menu"},null,8,E)):e.icon?(t(),n(b(e.icon),{key:1})):m("",!0)]),default:a(()=>[y(" "+g(e.label),1)]),_:2},1032,["href","class"]))],64))),128))]),_:2},1032,["title","bottom","condensed"]))),128))]),_:2},[o.$slots.bottom?{name:"bottom",fn:a(()=>[f(o.$slots,"bottom")]),key:"0"}:void 0]),1032,["type","fixed","sticky","toggleable","align"])}const T=V(z,[["render",j]]),O="/design-system/assets/img-flag.81bb56fa.svg";function P(o){return o}export{O as I,P as d,T as p};
