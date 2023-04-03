import{I as E,p as b}from"./chunks/Dropdown.vue_vue_type_style_index_0_lang.18548c66.js";import{f as _,h,k as g,r as d,o as t,c,q as y,w as a,l as f,s as B,t as T,n as I,a as n,F as A,y as v,e as p,z as x,b as u,u as w}from"./app.4fb2ad69.js";import{D as P}from"./chunks/Dropdown.bc4b717b.js";import"./chunks/index.7883a82b.js";import"./chunks/index.1d18dab0.js";import"./chunks/Button.a56dbb16.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.ccb39504.js";import"./chunks/index.a3ecab28.js";import"./chunks/utils-6ba05f5b.f88ae4a8.js";import"./chunks/use-focus.a4b3f3c4.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/floating-ui.dom.esm.9d13274a.js";import"./chunks/index.944df9fb.js";import"./chunks/16.0703a251.js";const N=_({components:{IconChevron:E},props:{href:{type:String,default:"#"},active:{type:Boolean,default:!1}},setup(s){const r=h(()=>{const o=[""];return s.active&&o.push("breadcrumbs__item--active"),o}),l=h(()=>{let o="a";return s.active&&(o="span"),o}),D=h(()=>{if(!s.active)return s.href});return{classNames:r,tagName:l,permalink:D}}});function q(s,r,l,D,o,e){const F=d("IconChevron");return t(),c("li",{"data-testid":"breadcrumbs-item",class:I(["breadcrumbs__item",s.classNames])},[(t(),y(B(s.tagName),{href:s.permalink},{default:a(()=>[f(s.$slots,"default")]),_:3},8,["href"])),s.active?T("",!0):(t(),y(F,{key:0,"data-testid":"breadcrumbs-icon",class:"breadcrumbs__item__icon"}))],2)}const i=g(N,[["render",q]]),$=_({components:{Dropdown:P,IconChevron:E},props:{text:{type:String,default:""},active:{type:Boolean,default:!1}},setup(s){return{classNames:h(()=>{const l=["breadcrumbs__item--dropdown"];return s.active&&l.push("breadcrumbs__item--active"),l})}}});function V(s,r,l,D,o,e){const F=d("Dropdown"),m=d("IconChevron");return t(),c("li",{"data-testid":"breadcrumbs-dropdown",class:I(["breadcrumbs__item",s.classNames])},[n(F,{text:s.text,placement:"bottom-end",size:"xs"},{default:a(()=>[f(s.$slots,"default")]),_:3},8,["text"]),s.active?T("",!0):(t(),y(m,{key:0,"data-testid":"breadcrumbs-icon",class:"breadcrumbs__item__icon"}))],2)}const S=g($,[["render",V]]),U=_({components:{BreadcrumbItem:i,BreadcrumbItemDropdown:S,DropdownItem:b},props:{items:{type:Array,default:()=>{}}}});const R={class:"breadcrumbs","data-testid":"breadcrumbs"};function O(s,r){const l=d("DropdownItem"),D=d("BreadcrumbItemDropdown"),o=d("BreadcrumbItem");return t(),c("ul",R,[f(s.$slots,"default",{},()=>[(t(!0),c(A,null,v(s.items,(e,F)=>(t(),c(A,{key:F},[e.subitem?(t(),y(D,{key:0,text:e.text,active:e.active,href:e.href},{default:a(()=>[(t(!0),c(A,null,v(e.subitem,(m,k)=>(t(),y(l,{key:k,active:m.active,href:m.href},{default:a(()=>[p(x(m.text),1)]),_:2},1032,["active","href"]))),128))]),_:2},1032,["text","active","href"])):(t(),y(o,{key:1,active:e.active,href:e.href},{default:a(()=>[p(x(e.text),1)]),_:2},1032,["active","href"]))],64))),128))])])}const C=g(U,[["render",O]]);const j=u("",5),z=u("",3),L=u("",2),M=u("",2),W=u("",16),cs=JSON.parse(`{"title":"Breadcrumbs · Components","description":"The current page's location within a navigational hierarchy","frontmatter":{"title":"Breadcrumbs · Components","description":"The current page's location within a navigational hierarchy"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Breadcrumb Item","slug":"breadcrumb-item","link":"#breadcrumb-item","children":[]},{"level":2,"title":"Breadcrumb Dropdown","slug":"breadcrumb-dropdown","link":"#breadcrumb-dropdown","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-breadcrumb>","slug":"props-p-breadcrumb","link":"#props-p-breadcrumb","children":[]},{"level":3,"title":"Slots <p-breadcrumb>","slug":"slots-p-breadcrumb","link":"#slots-p-breadcrumb","children":[]},{"level":3,"title":"Props <p-breadcrumb-item>","slug":"props-p-breadcrumb-item","link":"#props-p-breadcrumb-item","children":[]},{"level":3,"title":"Slots <p-breadcrumb-item>","slug":"slots-p-breadcrumb-item","link":"#slots-p-breadcrumb-item","children":[]},{"level":3,"title":"Props <p-breadcrumb-item-dropdown>","slug":"props-p-breadcrumb-item-dropdown","link":"#props-p-breadcrumb-item-dropdown","children":[]},{"level":3,"title":"Slots <p-breadcrumb-item-dropdown>","slug":"slots-p-breadcrumb-item-dropdown","link":"#slots-p-breadcrumb-item-dropdown","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/breadcrumbs/index.md"}`),J={name:"components/breadcrumbs/index.md"},ds=Object.assign(J,{setup(s){const r=[{text:"Dashboard",href:"/"},{text:"All Documents",active:!0}],l=[{text:"Dashboard",href:"#"},{text:"Document",active:!0,subitem:[{text:"Waiting",href:"#",active:!0},{text:"Done",href:"#"},{text:"Archived",href:"#"}]}];return(D,o)=>{const e=d("preview");return t(),c("div",null,[j,n(e,null,{default:a(()=>[n(C,{items:w(r)},null,8,["items"])]),_:1}),z,n(e,null,{default:a(()=>[n(C,null,{default:a(()=>[n(i,{href:"#dashboard"},{default:a(()=>[p(" Dashboard ")]),_:1}),n(i,{href:"#user"},{default:a(()=>[p(" User Profile ")]),_:1}),n(i,{active:""},{default:a(()=>[p(" Change Password ")]),_:1})]),_:1})]),_:1}),L,n(e,null,{default:a(()=>[n(C,{items:w(l)},null,8,["items"])]),_:1}),M,n(e,null,{default:a(()=>[n(C,null,{default:a(()=>[n(i,{href:"#dashboard"},{default:a(()=>[p(" Dashboard ")]),_:1}),n(i,{href:"#settings"},{default:a(()=>[p(" Settings ")]),_:1}),n(S,{text:"Account",active:""},{default:a(()=>[n(b,{href:"#"},{default:a(()=>[p(" Change Password ")]),_:1}),n(b,{href:"#",active:""},{default:a(()=>[p(" Create Signature ")]),_:1}),n(b,{href:"#"},{default:a(()=>[p(" Change OTP Method ")]),_:1})]),_:1})]),_:1})]),_:1}),W])}}});export{cs as __pageData,ds as default};
