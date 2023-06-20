import{a as I,b as h}from"./SidebarBrand.9a6724d1.js";import{p as $}from"./NavItem.819f44ee.js";import{p as C}from"./NavSubItem.7acaedbe.js";import{m as B,_ as V,K as r,x as t,H as l,ak as x,I as a,q as u,p as s,V as c,G as i,R as f,J as y,M as A,y as m,z as g,v as M}from"./framework.91e0efa6.js";const w=B({components:{Sidebar:I,SidebarNav:h,NavItem:$,NavSubItem:C},props:{menus:{type:Array,default:()=>[]},fixed:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},type:{type:String,default:"wide"},align:{type:String,default:"left"},toggleable:{type:String,default:void 0}}}),z=["src"],D=["src"];function E(o,L,q,F,G,H){const d=r("NavItem"),p=r("SidebarNav"),_=r("NavSubItem"),v=r("Sidebar");return t(),l(v,{"data-testid":"sidebar-menu",type:o.type,fixed:o.fixed,sticky:o.sticky,toggleable:o.toggleable,align:o.align},x({brand:a(()=>[u(o.$slots,"default")]),default:a(()=>[(t(!0),s(i,null,c(o.menus,(n,S)=>(t(),l(p,{key:S,title:n.title,"title-action-label":n.titleActionLabel,"title-action-url":n.titleActionUrl,bottom:n.bottom,condensed:n.condensed,collapsible:n.collapsible},{default:a(()=>[(t(!0),s(i,null,c(n.items,(e,k)=>(t(),s(i,{key:k},[e.submenu?(t(),l(_,{key:0,text:e.label,collapsible:e.collapsible},{icon:a(()=>[e.icon&&typeof e.icon=="string"?(t(),s("img",{key:0,src:e.icon,alt:"icon-menu"},null,8,z)):e.icon?(t(),l(f(e.icon),{key:1})):y("",!0)]),default:a(()=>[A(p,{condensed:n.condensed},{default:a(()=>[(t(!0),s(i,null,c(e.submenu,(b,N)=>(t(),l(d,{key:N,href:b.url},{default:a(()=>[m(g(b.label),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["condensed"])]),_:2},1032,["text","collapsible"])):(t(),l(d,{key:1,href:e.url,class:M({"nav__item--no-label":!e.label,"nav__item--no-icon":!e.icon})},{icon:a(()=>[e.icon&&typeof e.icon=="string"?(t(),s("img",{key:0,src:e.icon,alt:"icon-menu"},null,8,D)):e.icon?(t(),l(f(e.icon),{key:1})):y("",!0)]),default:a(()=>[m(" "+g(e.label),1)]),_:2},1032,["href","class"]))],64))),128))]),_:2},1032,["title","title-action-label","title-action-url","bottom","condensed","collapsible"]))),128))]),_:2},[o.$slots.bottom?{name:"bottom",fn:a(()=>[u(o.$slots,"bottom")]),key:"0"}:void 0]),1032,["type","fixed","sticky","toggleable","align"])}const U=V(w,[["render",E]]),j="/design-system/assets/img-flag.81bb56fa.svg";function O(o){return o}export{j as I,O as d,U as p};
