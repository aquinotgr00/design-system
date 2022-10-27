import{j as $,t as R,f as H}from"./chunks/index.734690a2.js";import{N as S,p as M}from"./chunks/Collapse.7c0038b1.js";import{f,x as j,z as E,h as I,j as z,_ as b,o as y,c as x,r as m,n as w,q,b as h,l as u,w as a,g as P,d as s,e as D,k as e,u as A,W,X as U,a as i}from"./app.0f0a7ab1.js";import{N as G,a as l}from"./chunks/NavItem.049de9e5.js";import{B as V}from"./chunks/Button.7cbf5034.js";import{u as O}from"./chunks/utils-6ba05f5b.966f5c87.js";import{I as J}from"./chunks/20.3d46a857.js";import{p as X}from"./chunks/NavItemDropdown.64e4f152.js";import{a as N}from"./chunks/Dropdown.f25994ab.js";import{p as Y}from"./chunks/Input.79106684.js";import{p as K}from"./chunks/InputGroup.95a01043.js";import"./chunks/Avatar.vue_vue_type_style_index_0_lang.a0f5a391.js";import{I as _}from"./chunks/20.31809386.js";import{I as Q}from"./chunks/20.9dd13ed7.js";import"./chunks/index.36f8c2c5.js";import"./chunks/Caption.40ce30e3.js";import"./chunks/commonjsHelpers.cd000407.js";import"./chunks/use-popper.a06417a7.js";import"./chunks/16.f4ca7518.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.104fc20b.js";import"./chunks/create-image.19720f32.js";import"./chunks/avatar.212b8f8a.js";import"./chunks/color-hash.fa715313.js";import"./chunks/load-image.5a7761ed.js";const Z="/design-system/assets/icon-privy.47402dc0.svg",g="/design-system/assets/logo.a0040de6.svg",aa=f({props:{variant:{type:String,default:"pills"},toggleable:{type:String,default:void 0},fixed:{type:Boolean,default:!1},color:{type:String,default:"light"},condensed:{type:Boolean,default:!1}},setup(t){const{y:p}=$(),v=R("navbar"),{height:r}=H(v);j(S,{variant:E(t,"variant"),toggleable:E(t,"toggleable"),condensed:E(t,"condensed")});const n=I(()=>{const d=[""];return t.color&&d.push(`navbar--${t.color}`),t.fixed&&d.push("navbar--fixed"),t.variant&&d.push(`navbar--${t.variant}`),t.toggleable&&d.push(`navbar--expand-${t.toggleable}`),d});return z(()=>{var d;(d=document.body)==null||d.style.setProperty("padding-top",`${r==null?void 0:r.value}px`)}),{classNames:n,y:p,height:r}}});function sa(t,p,v,r,n,d){return y(),x("nav",{ref:"navbar","data-testid":"navbar",class:w(["navbar",[{"navbar--shadow":t.y>t.height},t.classNames]])},[m(t.$slots,"default")],2)}const o=b(aa,[["render",sa]]),ta=f({props:{href:{type:String,default:void 0}}});const ea=["href"];function na(t,p,v,r,n,d){return y(),x("a",{href:t.href,"data-testid":"navbar-brand",class:"navbar__brand"},[m(t.$slots,"default")],8,ea)}const F=b(ta,[["render",na]]),da=f({components:{Nav:G},props:{align:{type:String,default:"left"}},setup(){const t=q(S,void 0,!1),p=t==null?void 0:t.variant,v=t==null?void 0:t.condensed;return{variant:p,condensed:v}}});function la(t,p,v,r,n,d){const T=h("Nav");return y(),u(T,{align:t.align,variant:t.variant,condensed:t.condensed,class:"navbar__nav","data-testid":"navbar-nav"},{default:a(()=>[m(t.$slots,"default")]),_:3},8,["align","variant","condensed"])}const c=b(da,[["render",la]]);var pa=O,k=pa.createSVGComponent(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"}}]),oa=k;const va=oa,ra=f({components:{Button:V,IconMenu:va,IconClose:J},setup(){const t=P(!1),p=q(S,void 0,!1),v=p==null?void 0:p.toggleable,r=I(()=>{const d=[];return v!=null&&v.value&&d.push(`navbar__toggle--${v==null?void 0:v.value}`),d});function n(){t.value=!t.value}return{expanded:n,expand:t,classNames:r}}});function ca(t,p,v,r,n,d){const T=h("IconClose"),L=h("IconMenu"),B=h("Button");return y(),u(B,{class:w(["navbar__toggle",t.classNames]),"data-testid":"navbar-toggle",variant:"outline",color:"secondary",icon:"",onClick:t.expanded},{default:a(()=>[m(t.$slots,"default",{expanded:t.expand},()=>[t.expand?(y(),u(T,{key:0})):(y(),u(L,{key:1}))])]),_:3},8,["class","onClick"])}const Da=b(ra,[["render",ca]]);const Fa={},ya={class:"nav__form","data-testid":"nav-form"};function ia(t,p){return y(),x("li",ya,[m(t.$slots,"default")])}const Ca=b(Fa,[["render",ia]]);const C=t=>(W("data-v-d3442a5e"),t=t(),U(),t),ga=D("",3),Aa=C(()=>i("img",{src:Z},null,-1)),ua=D("",4),ba=D("",2),_a=C(()=>i("img",{src:g},null,-1)),ha=D("",2),ma=C(()=>i("img",{src:g},null,-1)),fa=D("",3),xa=C(()=>i("img",{src:g},null,-1)),Ta=C(()=>i("img",{src:g},null,-1)),Ea=D("",3),Na=C(()=>i("img",{src:g},null,-1)),Sa=C(()=>i("img",{src:g},null,-1)),Ia=D("",3),wa=D("",2),qa=D("",2),Pa=C(()=>i("img",{src:g},null,-1)),Va=D("",2),ka=D("",2),La=D("",3),Ba=C(()=>i("img",{src:g},null,-1)),$a=D("",20),cs=JSON.parse('{"title":"Navbar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Navbar","slug":"simple-navbar","link":"#simple-navbar","children":[]},{"level":3,"title":"Navbar Brand","slug":"navbar-brand","link":"#navbar-brand","children":[]}]},{"level":2,"title":"Fixed Navbar","slug":"fixed-navbar","link":"#fixed-navbar","children":[]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":2,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"Alignment","slug":"alignment","link":"#alignment","children":[]},{"level":2,"title":"With Icon","slug":"with-icon","link":"#with-icon","children":[]},{"level":2,"title":"With Form","slug":"with-form","link":"#with-form","children":[]},{"level":2,"title":"Condensed Navigation","slug":"condensed-navigation","link":"#condensed-navigation","children":[]},{"level":2,"title":"Dropdown","slug":"dropdown","link":"#dropdown","children":[]},{"level":2,"title":"Responsive","slug":"responsive","link":"#responsive","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-navbar>","slug":"props-p-navbar","link":"#props-p-navbar","children":[]},{"level":3,"title":"Slots <p-navbar>","slug":"slots-p-navbar","link":"#slots-p-navbar","children":[]},{"level":3,"title":"Props <p-navbar-brand>","slug":"props-p-navbar-brand","link":"#props-p-navbar-brand","children":[]},{"level":3,"title":"Slots <p-navbar-brand>","slug":"slots-p-navbar-brand","link":"#slots-p-navbar-brand","children":[]},{"level":3,"title":"Props <p-navbar-nav>","slug":"props-p-navbar-nav","link":"#props-p-navbar-nav","children":[]},{"level":3,"title":"Slots <p-navbar-nav>","slug":"slots-p-navbar-nav","link":"#slots-p-navbar-nav","children":[]},{"level":3,"title":"Props <p-navbar-toggle>","slug":"props-p-navbar-toggle","link":"#props-p-navbar-toggle","children":[]},{"level":3,"title":"Slots <p-navbar-toggle>","slug":"slots-p-navbar-toggle","link":"#slots-p-navbar-toggle","children":[]},{"level":3,"title":"Events <p-navbar-toggle>","slug":"events-p-navbar-toggle","link":"#events-p-navbar-toggle","children":[]}]}],"relativePath":"components/navbar/index.md"}'),Ra={name:"components/navbar/index.md"},Ha=Object.assign(Ra,{setup(t){const p=P(!1);return(v,r)=>{const n=h("preview");return y(),x("div",null,[ga,s(n,{class:"flex-grow"},{default:a(()=>[s(o,null,{default:a(()=>[s(F,null,{default:a(()=>[Aa]),_:1}),s(c,null,{default:a(()=>[s(l,null,{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),ua,s(n,{class:"flex-grow"},{default:a(()=>[s(o,null,{default:a(()=>[s(F,null,{default:a(()=>[e(" Persona ")]),_:1})]),_:1})]),_:1}),ba,s(n,{class:"flex-grow"},{default:a(()=>[s(o,null,{default:a(()=>[s(F,null,{default:a(()=>[_a,e(" Persona ")]),_:1})]),_:1})]),_:1}),ha,s(n,{class:"flex-grow preview--fixed"},{default:a(()=>[s(o,{fixed:""},{default:a(()=>[s(F,null,{default:a(()=>[ma]),_:1}),s(c,null,{default:a(()=>[s(l,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),fa,s(n,{class:"flex-grow"},{default:a(()=>[s(o,{variant:"pills",class:"mb-5"},{default:a(()=>[s(F,null,{default:a(()=>[xa]),_:1}),s(c,null,{default:a(()=>[s(l,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1}),s(o,{variant:"lines"},{default:a(()=>[s(F,null,{default:a(()=>[Ta]),_:1}),s(c,null,{default:a(()=>[s(l,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),Ea,s(n,{class:"flex-grow"},{default:a(()=>[s(o,{color:"light",class:"mb-5"},{default:a(()=>[s(F,null,{default:a(()=>[Na]),_:1}),s(c,null,{default:a(()=>[s(l,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1}),s(o,{color:"dark"},{default:a(()=>[s(F,null,{default:a(()=>[Sa]),_:1}),s(c,null,{default:a(()=>[s(l,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),Ia,s(n,{class:"flex-grow"},{default:a(()=>[s(o,{class:"mb-5"},{default:a(()=>[s(c,{align:"left"},{default:a(()=>[s(l,{active:""},{default:a(()=>[e("Label")]),_:1}),s(l,null,{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1}),s(o,{class:"mb-5"},{default:a(()=>[s(c,{align:"center"},{default:a(()=>[s(l,{active:""},{default:a(()=>[e("Label")]),_:1}),s(l,null,{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1}),s(o,null,{default:a(()=>[s(c,{align:"right"},{default:a(()=>[s(l,null,{default:a(()=>[e("Label")]),_:1}),s(l,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),wa,s(n,{class:"flex-grow"},{default:a(()=>[s(o,{class:"mb-5"},{default:a(()=>[s(c,null,{default:a(()=>[s(l,{active:""},{icon:a(()=>[s(A(_))]),default:a(()=>[e(" Label ")]),_:1}),s(l,null,{icon:a(()=>[s(A(_))]),default:a(()=>[e(" Label ")]),_:1})]),_:1})]),_:1})]),_:1}),qa,s(n,{class:"flex-grow"},{default:a(()=>[s(o,null,{default:a(()=>[s(F,null,{default:a(()=>[Pa]),_:1}),s(c,null,{default:a(()=>[s(Ca,null,{default:a(()=>[s(K,null,{default:a(()=>[s(Y,{placeholder:"Input Here"}),s(V,{variant:"input",color:"secondary"},{default:a(()=>[e("Search")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Va,s(n,{class:"flex-grow"},{default:a(()=>[s(o,null,{default:a(()=>[s(c,{condensed:""},{default:a(()=>[s(l,{active:""},{default:a(()=>[e("Label")]),_:1}),s(l,null,{default:a(()=>[e("Label")]),_:1}),s(l,null,{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),ka,s(n,{class:"flex-grow"},{default:a(()=>[s(o,null,{default:a(()=>[s(c,null,{default:a(()=>[s(l,{active:""},{icon:a(()=>[s(A(_))]),default:a(()=>[e(" Label ")]),_:1}),s(X,null,{"button-content":a(()=>[s(A(_)),e(" Label ")]),default:a(()=>[s(N,null,{default:a(()=>[e("Children 1")]),_:1}),s(N,null,{default:a(()=>[e("Children 2")]),_:1}),s(N,null,{default:a(()=>[e("Children 3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),La,s(n,{class:"flex-grow"},{default:a(()=>[s(o,{toggleable:"lg"},{default:a(()=>[s(F,null,{default:a(()=>[Ba]),_:1}),s(Da,{onClick:r[0]||(r[0]=d=>p.value=!p.value)},{default:a(({expanded:d})=>[d?(y(),u(A(_),{key:0})):(y(),u(A(Q),{key:1}))]),_:1}),s(M,{modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=d=>p.value=d),"is-nav":""},{default:a(()=>[s(c,null,{default:a(()=>[s(l,{active:""},{default:a(()=>[e(" Label ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),$a])}}}),Ds=b(Ha,[["__scopeId","data-v-d3442a5e"]]);export{cs as __pageData,Ds as default};
