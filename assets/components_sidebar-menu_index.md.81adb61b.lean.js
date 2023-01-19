import{_ as q,a as O}from"./chunks/logo-privy-icon.a0e902a9.js";import{p as R,a as J,b as v,I as D,c as y,d as S}from"./chunks/20.5fd6abde.js";import{p as G}from"./chunks/NavItem.1f22c9bb.js";import{p as Q}from"./chunks/NavSubItem.139865a6.js";import{f as z,k as w,r as e,o as n,q as l,w as s,l as L,c as b,R as c,S as F,s as I,t as x,a as d,e as N,y as k,n as Z,b as r,u as C,Z as H,$ as K,m as u}from"./app.ab91a073.js";import{I as i}from"./chunks/20.b87a9cdf.js";import"./chunks/utils-6ba05f5b.6459b4f6.js";import"./chunks/Caption.8b7a8fec.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.67c7ca1b.js";import"./chunks/16.822fc024.js";const W=z({components:{Sidebar:R,SidebarNav:J,NavItem:G,NavSubItem:Q},props:{menus:{type:Array,default:()=>[]},fixed:{type:Boolean,default:!1},type:{type:String,default:"wide"},align:{type:String,default:"left"}}}),X=["src"],Y=["src"];function aa(t,h,g,f,P,V){const p=e("NavItem"),_=e("SidebarNav"),M=e("NavSubItem"),B=e("Sidebar");return n(),l(B,{"data-testid":"sidebar-menu",type:t.type,fixed:t.fixed,align:t.align},{default:s(()=>[L(t.$slots,"default"),(n(!0),b(c,null,F(t.menus,(o,U)=>(n(),l(_,{key:U,title:o.title,bottom:o.bottom,condensed:o.condensed},{default:s(()=>[(n(!0),b(c,null,F(o.items,(a,$)=>(n(),b(c,{key:$},[a.submenu?(n(),l(M,{key:0,text:a.label,collapsible:a.collapsible},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(n(),b("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,X)):a.icon?(n(),l(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[d(_,{condensed:o.condensed},{default:s(()=>[(n(!0),b(c,null,F(a.submenu,(E,j)=>(n(),l(p,{key:j,href:E.url},{default:s(()=>[N(k(E.label),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["condensed"])]),_:2},1032,["text","collapsible"])):(n(),l(p,{key:1,href:a.url,class:Z({"nav__item--no-label":!a.label})},{icon:s(()=>[a.icon&&typeof a.icon=="string"?(n(),b("img",{key:0,src:a.icon,alt:"icon-menu"},null,8,Y)):a.icon?(n(),l(I(a.icon),{key:1})):x("",!0)]),default:s(()=>[N(" "+k(a.label),1)]),_:2},1032,["href","class"]))],64))),128))]),_:2},1032,["title","bottom","condensed"]))),128))]),_:3},8,["type","fixed","align"])}const A=w(W,[["render",aa]]);const T="/design-system/assets/img-flag.81bb56fa.svg";const m=t=>(H("data-v-d4ba447b"),t=t(),K(),t),sa=r("",4),na=m(()=>u("img",{src:q,alt:""},null,-1)),ta=r("",2),da=m(()=>u("img",{src:q,alt:""},null,-1)),la=r("",2),ba=m(()=>u("img",{src:O,alt:""},null,-1)),pa=r("",8),ma=JSON.parse('{"title":"Sidebar Menu · Components","description":"Define sidebar using JSON","frontmatter":{"title":"Sidebar Menu · Components","description":"Define sidebar using JSON"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Sidebar","slug":"basic-sidebar","link":"#basic-sidebar","children":[]},{"level":3,"title":"Fixed Sidebar","slug":"fixed-sidebar","link":"#fixed-sidebar","children":[]},{"level":3,"title":"Narrow Sidebar","slug":"narrow-sidebar","link":"#narrow-sidebar","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/sidebar-menu/index.md"}'),oa={name:"components/sidebar-menu/index.md"},ea=Object.assign(oa,{setup(t){const h=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:D},{name:"documents",label:"Documents",url:"/",icon:i},{name:"contacts",label:"Contacts",url:"/",icon:y}]}],g=[{items:[{name:"dashboard",label:"Dashboard",url:"/",icon:D},{name:"document",label:"Documents",url:"/",icon:i,collapsible:!0,submenu:[{name:"need-action",label:"Need Action",url:"/"},{name:"in-progress",label:"In Progress",url:"/"},{name:"others",label:"Others",url:"/"}]},{name:"contact",label:"Contacts",url:"/",icon:y}]},{condensed:!0,title:"Quick Jump",items:[{name:"rejects",label:"Rejects",url:"/"},{name:"archives",label:"Archives",url:"/"}]},{bottom:!0,items:[{name:"settings",label:"Settings",icon:S,url:"/"},{name:"english",label:"English",url:"/",icon:T}]}],f=[{items:[{name:"dashboard",url:"/",icon:D},{name:"document",url:"/",icon:i},{name:"users",url:"/",icon:y}]},{bottom:!0,items:[{name:"settings",url:"/",icon:S},{name:"language",label:"ENG",url:"/",icon:T}]}];return(P,V)=>{const p=e("preview");return n(),b("div",null,[sa,d(p,{class:"flex-col space-y-2"},{default:s(()=>[d(A,{menus:C(h)},{default:s(()=>[d(v,null,{default:s(()=>[na]),_:1})]),_:1},8,["menus"])]),_:1}),ta,d(p,{class:"flex-col space-y-2 higher"},{default:s(()=>[d(A,{fixed:"",menus:C(g)},{default:s(()=>[d(v,null,{default:s(()=>[da]),_:1})]),_:1},8,["menus"])]),_:1}),la,d(p,{class:"flex-col space-y-2 higher"},{default:s(()=>[d(A,{fixed:"",menus:C(f),type:"narrow"},{default:s(()=>[d(v,null,{default:s(()=>[ba]),_:1})]),_:1},8,["menus"])]),_:1}),pa])}}}),ha=w(ea,[["__scopeId","data-v-d4ba447b"]]);export{ma as __pageData,ha as default};
