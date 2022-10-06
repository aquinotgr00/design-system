import{p as $,a as O,b as v,_ as q,c as G,I as D,d as F,e as S}from"./chunks/20.96755e12.js";import{a as J}from"./chunks/NavItem.709c5210.js";import{p as Q}from"./chunks/NavSubItem.53dd3f4d.js";import{f as z,_ as w,b as o,o as b,l as t,w as s,r as L,c,P as y,O as d,m as I,p as x,d as n,k as N,t as T,n as H,e as r,u as C,Q as K,R as W,a as u}from"./app.18e941ec.js";import{I as A}from"./chunks/20.ae7e61e3.js";import"./chunks/utils-6ba05f5b.d06b2a45.js";import"./chunks/Caption.28cacd24.js";import"./chunks/16.fc620c6c.js";const X=z({components:{Sidebar:$,SidebarNav:O,NavItem:J,NavSubItem:Q},props:{menus:{type:Array,default:()=>[]},fixed:{type:Boolean,default:!1},type:{type:String,default:"wide"},align:{type:String,default:"left"}}}),Y=["src"],Z=["src"];function aa(e,h,g,_,P,V){const l=o("NavItem"),f=o("SidebarNav"),M=o("NavSubItem"),B=o("Sidebar");return b(),t(B,{"data-testid":"sidebar-menu",type:e.type,fixed:e.fixed,align:e.align},{default:s(()=>[L(e.$slots,"default"),(b(!0),c(d,null,y(e.menus,(p,U)=>(b(),t(f,{key:U,title:p.title,bottom:p.bottom,condensed:p.condensed},{default:s(()=>[(b(!0),c(d,null,y(p.items,(a,j)=>(b(),c(d,{key:j},[a.submenu?(b(),t(M,{key:0,text:a.label,collapsible:a.collapsible},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(b(),c("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Y)):a.icon?(b(),t(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[n(f,{condensed:p.condensed},{default:s(()=>[(b(!0),c(d,null,y(a.submenu,(E,R)=>(b(),t(l,{key:R,href:E.url},{default:s(()=>[N(T(E.label),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["condensed"])]),_:2},1032,["text","collapsible"])):(b(),t(l,{key:1,href:a.url,class:H({"nav__item--no-label":!a.label})},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(b(),c("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Z)):a.icon?(b(),t(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[N(" "+T(a.label),1)]),_:2},1032,["href","class"]))],64))),128))]),_:2},1032,["title","bottom","condensed"]))),128))]),_:3},8,["type","fixed","align"])}const i=w(X,[["render",aa]]);const k="/design-system/assets/img-flag.81bb56fa.svg";const m=e=>(K("data-v-c25bbeab"),e=e(),W(),e),sa=r("",3),ba=m(()=>u("img",{src:q,alt:""},null,-1)),ea=r("",2),na=m(()=>u("img",{src:q,alt:""},null,-1)),ta=r("",2),ca=m(()=>u("img",{src:G,alt:""},null,-1)),la=r("",8),ia=JSON.parse('{"title":"Sidebar Menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Sidebar","slug":"basic-sidebar","link":"#basic-sidebar","children":[]},{"level":3,"title":"Fixed Sidebar","slug":"fixed-sidebar","link":"#fixed-sidebar","children":[]},{"level":3,"title":"Narrow Sidebar","slug":"narrow-sidebar","link":"#narrow-sidebar","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/sidebar-menu/index.md"}'),pa={name:"components/sidebar-menu/index.md"},oa=Object.assign(pa,{setup(e){const h=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:D},{name:"documents",label:"Documents",url:"/",icon:A},{name:"contacts",label:"Contacts",url:"/",icon:F}]}],g=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:D},{name:"document",label:"Documents",url:"/",icon:A,collapsible:!0,submenu:[{name:"need-action",label:"Need Action",url:"/"},{name:"in-progress",label:"In Progress",url:"/"},{name:"others",label:"Others",url:"/"}]},{name:"contact",label:"Contacts",url:"/",icon:F}]},{condensed:!0,title:"Quick Jump",items:[{name:"rejects",label:"Rejects",url:"/"},{name:"archives",label:"Archives",url:"/"}]},{bottom:!0,items:[{name:"settings",label:"Settings",icon:S,url:"/"},{name:"english",label:"English",url:"/",icon:k}]}],_=[{items:[{name:"dashboard",url:"/",icon:D},{name:"document",url:"/",icon:A},{name:"users",url:"/",icon:F}]},{bottom:!0,items:[{name:"settings",url:"/",icon:S},{name:"language",label:"ENG",url:"/",icon:k}]}];return(P,V)=>{const l=o("preview");return b(),c("div",null,[sa,n(l,{class:"flex-col gap-2"},{default:s(()=>[n(i,{menus:C(h)},{default:s(()=>[n(v,null,{default:s(()=>[ba]),_:1})]),_:1},8,["menus"])]),_:1}),ea,n(l,{class:"flex-col gap-2 higher"},{default:s(()=>[n(i,{fixed:"",menus:C(g)},{default:s(()=>[n(v,null,{default:s(()=>[na]),_:1})]),_:1},8,["menus"])]),_:1}),ta,n(l,{class:"flex-col gap-2 higher"},{default:s(()=>[n(i,{fixed:"",menus:C(_),type:"narrow"},{default:s(()=>[n(v,null,{default:s(()=>[ca]),_:1})]),_:1},8,["menus"])]),_:1}),la])}}}),ua=w(oa,[["__scopeId","data-v-c25bbeab"]]);export{ia as __pageData,ua as default};
