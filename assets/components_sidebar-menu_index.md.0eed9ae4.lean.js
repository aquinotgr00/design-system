import{p as R,a as O,b as v,_ as q,c as G,I as D,d as F,e as S}from"./chunks/20.cd00c249.js";import{a as J}from"./chunks/NavItem.c635a9b8.js";import{p as Q}from"./chunks/NavSubItem.d717528e.js";import{f as z,_ as w,b as c,o as n,l as p,w as s,r as L,c as o,P as y,O as r,m as I,p as x,d as l,k as N,t as T,n as W,e as f,u as C,W as X,X as H,a as u}from"./app.0800046f.js";import{I as A}from"./chunks/20.e8d6e1e4.js";import"./chunks/utils-6ba05f5b.d35b5a0b.js";import"./chunks/Caption.9b0384a2.js";import"./chunks/16.09830ce2.js";const K=z({components:{Sidebar:R,SidebarNav:O,NavItem:J,NavSubItem:Q},props:{menus:{type:Array,default:()=>[]},fixed:{type:Boolean,default:!1},type:{type:String,default:"wide"},align:{type:String,default:"left"}}}),Y=["src"],Z=["src"];function aa(t,b,h,g,P,V){const e=c("NavItem"),_=c("SidebarNav"),M=c("NavSubItem"),B=c("Sidebar");return n(),p(B,{"data-testid":"sidebar-menu",type:t.type,fixed:t.fixed,align:t.align},{default:s(()=>[L(t.$slots,"default"),(n(!0),o(r,null,y(t.menus,(d,U)=>(n(),p(_,{key:U,title:d.title,bottom:d.bottom,condensed:d.condensed},{default:s(()=>[(n(!0),o(r,null,y(d.items,(a,j)=>(n(),o(r,{key:j},[a.submenu?(n(),p(M,{key:0,text:a.label,collapsible:a.collapsible},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(n(),o("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Y)):a.icon?(n(),p(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[l(_,{condensed:d.condensed},{default:s(()=>[(n(!0),o(r,null,y(a.submenu,(E,$)=>(n(),p(e,{key:$,href:E.url},{default:s(()=>[N(T(E.label),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["condensed"])]),_:2},1032,["text","collapsible"])):(n(),p(e,{key:1,href:a.url,class:W({"nav__item--no-label":!a.label})},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(n(),o("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Z)):a.icon?(n(),p(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[N(" "+T(a.label),1)]),_:2},1032,["href","class"]))],64))),128))]),_:2},1032,["title","bottom","condensed"]))),128))]),_:3},8,["type","fixed","align"])}const i=w(K,[["render",aa]]);const k="/design-system/assets/img-flag.81bb56fa.svg";const m=t=>(X("data-v-aa899af3"),t=t(),H(),t),sa=f("",3),na=m(()=>u("img",{src:q,alt:""},null,-1)),ta=f("",2),la=m(()=>u("img",{src:q,alt:""},null,-1)),pa=f("",2),oa=m(()=>u("img",{src:G,alt:""},null,-1)),ea=f("",8),ia=JSON.parse('{"title":"Sidebar Menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Sidebar","slug":"basic-sidebar","link":"#basic-sidebar","children":[]},{"level":3,"title":"Fixed Sidebar","slug":"fixed-sidebar","link":"#fixed-sidebar","children":[]},{"level":3,"title":"Narrow Sidebar","slug":"narrow-sidebar","link":"#narrow-sidebar","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/sidebar-menu/index.md"}'),da={name:"components/sidebar-menu/index.md"},ca=Object.assign(da,{setup(t){const b=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:D},{name:"documents",label:"Documents",url:"/",icon:A},{name:"contacts",label:"Contacts",url:"/",icon:F}]}],h=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:D},{name:"document",label:"Documents",url:"/",icon:A,collapsible:!0,submenu:[{name:"need-action",label:"Need Action",url:"/"},{name:"in-progress",label:"In Progress",url:"/"},{name:"others",label:"Others",url:"/"}]},{name:"contact",label:"Contacts",url:"/",icon:F}]},{condensed:!0,title:"Quick Jump",items:[{name:"rejects",label:"Rejects",url:"/"},{name:"archives",label:"Archives",url:"/"}]},{bottom:!0,items:[{name:"settings",label:"Settings",icon:S,url:"/"},{name:"english",label:"English",url:"/",icon:k}]}],g=[{items:[{name:"dashboard",url:"/",icon:D},{name:"document",url:"/",icon:A},{name:"users",url:"/",icon:F}]},{bottom:!0,items:[{name:"settings",url:"/",icon:S},{name:"language",label:"ENG",url:"/",icon:k}]}];return(P,V)=>{const e=c("preview");return n(),o("div",null,[sa,l(e,{class:"flex-col gap-2"},{default:s(()=>[l(i,{menus:C(b)},{default:s(()=>[l(v,null,{default:s(()=>[na]),_:1})]),_:1},8,["menus"])]),_:1}),ta,l(e,{class:"flex-col gap-2 higher"},{default:s(()=>[l(i,{fixed:"",menus:C(h)},{default:s(()=>[l(v,null,{default:s(()=>[la]),_:1})]),_:1},8,["menus"])]),_:1}),pa,l(e,{class:"flex-col gap-2 higher"},{default:s(()=>[l(i,{fixed:"",menus:C(g),type:"narrow"},{default:s(()=>[l(v,null,{default:s(()=>[oa]),_:1})]),_:1},8,["menus"])]),_:1}),ea])}}}),ua=w(ca,[["__scopeId","data-v-aa899af3"]]);export{ia as __pageData,ua as default};
