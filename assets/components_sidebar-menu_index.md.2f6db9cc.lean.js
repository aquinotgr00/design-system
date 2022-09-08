import{p as R,a as O,b as D,_ as q,c as G,I as F,d as y,e as S}from"./chunks/20.1d6a0857.js";import{a as J}from"./chunks/NavItem.f9e43145.js";import{p as Q}from"./chunks/NavSubItem.e433b336.js";import{d as z,_ as w,g as o,a as e,l as t,i as s,e as L,b as c,N as C,M as r,m as I,p as x,h as d,k as N,t as T,n as H,j as v,u as A,O as K,P as W,f as m}from"./app.5d60bad4.js";import{I as i}from"./chunks/20.38785b2d.js";import"./chunks/utils-6ba05f5b.063d2e00.js";import"./chunks/Caption.561bbd86.js";import"./chunks/16.e992ae0e.js";const X=z({components:{Sidebar:R,SidebarNav:O,NavItem:J,NavSubItem:Q},props:{menus:{type:Array,default:()=>[]},fixed:{type:Boolean,default:!1},type:{type:String,default:"wide"},align:{type:String,default:"left"}}}),Y=["src"],Z=["src"];function aa(n,h,g,_,P,V){const l=o("NavItem"),f=o("SidebarNav"),M=o("NavSubItem"),B=o("Sidebar");return e(),t(B,{"data-testid":"sidebar-menu",type:n.type,fixed:n.fixed,align:n.align},{default:s(()=>[L(n.$slots,"default"),(e(!0),c(r,null,C(n.menus,(p,j)=>(e(),t(f,{key:j,title:p.title,bottom:p.bottom,condensed:p.condensed},{default:s(()=>[(e(!0),c(r,null,C(p.items,(a,U)=>(e(),c(r,{key:U},[a.submenu?(e(),t(M,{key:0,text:a.label,collapsible:a.collapsible},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(e(),c("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Y)):a.icon?(e(),t(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[d(f,{condensed:p.condensed},{default:s(()=>[(e(!0),c(r,null,C(a.submenu,(E,$)=>(e(),t(l,{key:$,href:E.url},{default:s(()=>[N(T(E.label),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["condensed"])]),_:2},1032,["text","collapsible"])):(e(),t(l,{key:1,href:a.url,class:H({"nav__item--no-label":!a.label})},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(e(),c("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Z)):a.icon?(e(),t(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[N(" "+T(a.label),1)]),_:2},1032,["href","class"]))],64))),128))]),_:2},1032,["title","bottom","condensed"]))),128))]),_:3},8,["type","fixed","align"])}const u=w(X,[["render",aa]]);const k="/design-system/assets/img-flag.81bb56fa.svg";const b=n=>(K("data-v-25ea8c6d"),n=n(),W(),n),sa=v("",3),ea=b(()=>m("img",{src:q,alt:""},null,-1)),na=v("",2),da=b(()=>m("img",{src:q,alt:""},null,-1)),ta=v("",2),ca=b(()=>m("img",{src:G,alt:""},null,-1)),la=v("",8),ua=JSON.parse('{"title":"Sidebar Menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Sidebar","slug":"basic-sidebar","link":"#basic-sidebar","children":[]},{"level":3,"title":"Fixed Sidebar","slug":"fixed-sidebar","link":"#fixed-sidebar","children":[]},{"level":3,"title":"Narrow Sidebar","slug":"narrow-sidebar","link":"#narrow-sidebar","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/sidebar-menu/index.md"}'),pa={name:"components/sidebar-menu/index.md"},oa=Object.assign(pa,{setup(n){const h=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:F},{name:"documents",label:"Documents",url:"/",icon:i},{name:"contacts",label:"Contacts",url:"/",icon:y}]}],g=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:F},{name:"document",label:"Documents",url:"/",icon:i,collapsible:!0,submenu:[{name:"need-action",label:"Need Action",url:"/"},{name:"in-progress",label:"In Progress",url:"/"},{name:"others",label:"Others",url:"/"}]},{name:"contact",label:"Contacts",url:"/",icon:y}]},{condensed:!0,title:"Quick Jump",items:[{name:"rejects",label:"Rejects",url:"/"},{name:"archives",label:"Archives",url:"/"}]},{bottom:!0,items:[{name:"settings",label:"Settings",icon:S,url:"/"},{name:"english",label:"English",url:"/",icon:k}]}],_=[{items:[{name:"dashboard",url:"/",icon:F},{name:"document",url:"/",icon:i},{name:"users",url:"/",icon:y}]},{bottom:!0,items:[{name:"settings",url:"/",icon:S},{name:"language",label:"ENG",url:"/",icon:k}]}];return(P,V)=>{const l=o("preview");return e(),c("div",null,[sa,d(l,{class:"flex-col gap-2"},{default:s(()=>[d(u,{menus:A(h)},{default:s(()=>[d(D,null,{default:s(()=>[ea]),_:1})]),_:1},8,["menus"])]),_:1}),na,d(l,{class:"flex-col gap-2 higher"},{default:s(()=>[d(u,{fixed:"",menus:A(g)},{default:s(()=>[d(D,null,{default:s(()=>[da]),_:1})]),_:1},8,["menus"])]),_:1}),ta,d(l,{class:"flex-col gap-2 higher"},{default:s(()=>[d(u,{fixed:"",menus:A(_),type:"narrow"},{default:s(()=>[d(D,null,{default:s(()=>[ca]),_:1})]),_:1},8,["menus"])]),_:1}),la])}}}),ma=w(oa,[["__scopeId","data-v-25ea8c6d"]]);export{ua as __pageData,ma as default};
