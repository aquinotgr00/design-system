import{p as R,a as O,b as v,_ as q,c as G,I as D,d as F,e as S}from"./chunks/20.5a9c02a6.js";import{a as J}from"./chunks/NavItem.962b73fa.js";import{p as Q}from"./chunks/NavSubItem.9fbb875b.js";import{f as z,_ as w,b as c,o as n,l,w as s,r as L,c as p,P as y,O as b,m as I,p as x,d as t,k as N,t as T,n as W,e as r,u as C,W as X,X as H,a as u}from"./app.14fdb4ab.js";import{I as A}from"./chunks/20.28fd79e1.js";import"./chunks/utils-6ba05f5b.25c2913d.js";import"./chunks/Caption.066938c9.js";import"./chunks/16.a99078c6.js";const K=z({components:{Sidebar:R,SidebarNav:O,NavItem:J,NavSubItem:Q},props:{menus:{type:Array,default:()=>[]},fixed:{type:Boolean,default:!1},type:{type:String,default:"wide"},align:{type:String,default:"left"}}}),Y=["src"],Z=["src"];function aa(d,h,g,_,P,V){const o=c("NavItem"),f=c("SidebarNav"),M=c("NavSubItem"),B=c("Sidebar");return n(),l(B,{"data-testid":"sidebar-menu",type:d.type,fixed:d.fixed,align:d.align},{default:s(()=>[L(d.$slots,"default"),(n(!0),p(b,null,y(d.menus,(e,U)=>(n(),l(f,{key:U,title:e.title,bottom:e.bottom,condensed:e.condensed},{default:s(()=>[(n(!0),p(b,null,y(e.items,(a,j)=>(n(),p(b,{key:j},[a.submenu?(n(),l(M,{key:0,text:a.label,collapsible:a.collapsible},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(n(),p("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Y)):a.icon?(n(),l(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[t(f,{condensed:e.condensed},{default:s(()=>[(n(!0),p(b,null,y(a.submenu,(E,$)=>(n(),l(o,{key:$,href:E.url},{default:s(()=>[N(T(E.label),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["condensed"])]),_:2},1032,["text","collapsible"])):(n(),l(o,{key:1,href:a.url,class:W({"nav__item--no-label":!a.label})},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(n(),p("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Z)):a.icon?(n(),l(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[N(" "+T(a.label),1)]),_:2},1032,["href","class"]))],64))),128))]),_:2},1032,["title","bottom","condensed"]))),128))]),_:3},8,["type","fixed","align"])}const i=w(K,[["render",aa]]);const k="/design-system/assets/img-flag.81bb56fa.svg";const m=d=>(X("data-v-08bd8342"),d=d(),H(),d),sa=r("",3),na=m(()=>u("img",{src:q,alt:""},null,-1)),da=r("",2),ta=m(()=>u("img",{src:q,alt:""},null,-1)),la=r("",2),pa=m(()=>u("img",{src:G,alt:""},null,-1)),oa=r("",8),ia=JSON.parse('{"title":"Sidebar Menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Sidebar","slug":"basic-sidebar","link":"#basic-sidebar","children":[]},{"level":3,"title":"Fixed Sidebar","slug":"fixed-sidebar","link":"#fixed-sidebar","children":[]},{"level":3,"title":"Narrow Sidebar","slug":"narrow-sidebar","link":"#narrow-sidebar","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/sidebar-menu/index.md"}'),ea={name:"components/sidebar-menu/index.md"},ca=Object.assign(ea,{setup(d){const h=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:D},{name:"documents",label:"Documents",url:"/",icon:A},{name:"contacts",label:"Contacts",url:"/",icon:F}]}],g=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:D},{name:"document",label:"Documents",url:"/",icon:A,collapsible:!0,submenu:[{name:"need-action",label:"Need Action",url:"/"},{name:"in-progress",label:"In Progress",url:"/"},{name:"others",label:"Others",url:"/"}]},{name:"contact",label:"Contacts",url:"/",icon:F}]},{condensed:!0,title:"Quick Jump",items:[{name:"rejects",label:"Rejects",url:"/"},{name:"archives",label:"Archives",url:"/"}]},{bottom:!0,items:[{name:"settings",label:"Settings",icon:S,url:"/"},{name:"english",label:"English",url:"/",icon:k}]}],_=[{items:[{name:"dashboard",url:"/",icon:D},{name:"document",url:"/",icon:A},{name:"users",url:"/",icon:F}]},{bottom:!0,items:[{name:"settings",url:"/",icon:S},{name:"language",label:"ENG",url:"/",icon:k}]}];return(P,V)=>{const o=c("preview");return n(),p("div",null,[sa,t(o,{class:"flex-col gap-2"},{default:s(()=>[t(i,{menus:C(h)},{default:s(()=>[t(v,null,{default:s(()=>[na]),_:1})]),_:1},8,["menus"])]),_:1}),da,t(o,{class:"flex-col gap-2 higher"},{default:s(()=>[t(i,{fixed:"",menus:C(g)},{default:s(()=>[t(v,null,{default:s(()=>[ta]),_:1})]),_:1},8,["menus"])]),_:1}),la,t(o,{class:"flex-col gap-2 higher"},{default:s(()=>[t(i,{fixed:"",menus:C(_),type:"narrow"},{default:s(()=>[t(v,null,{default:s(()=>[pa]),_:1})]),_:1},8,["menus"])]),_:1}),oa])}}}),ua=w(ca,[["__scopeId","data-v-08bd8342"]]);export{ia as __pageData,ua as default};
