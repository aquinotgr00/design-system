import{g as B,t as R,e as H}from"./chunks/index.319a77b9.js";import{N as S,p as M}from"./chunks/Collapse.7410822c.js";import{i as m,A as j,C as E,k as I,m as z,f as u,o as F,c as x,g as h,n as w,x as k,r as _,q as A,w as a,j as q,a as s,b as f,e,u as C,J as W,Y as U,Z as G,h as y}from"./app.149185f1.js";import{N as O,a as n}from"./chunks/NavItem.5273935f.js";import{p as P}from"./chunks/Button.568309a4.js";import{u as J}from"./chunks/utils-6ba05f5b.f4b31ac9.js";import{I as Y}from"./chunks/20.5dd5ff0a.js";import{p as Z}from"./chunks/NavItemDropdown.aadc898c.js";import{a as N}from"./chunks/Dropdown.fafb0756.js";import{p as K}from"./chunks/Input.bb31ed70.js";import{p as Q}from"./chunks/InputGroup.ad417503.js";import"./chunks/Avatar.vue_vue_type_style_index_0_lang.b5d8307f.js";import{I as b}from"./chunks/20.e40c89c8.js";import{I as X}from"./chunks/20.501c649e.js";import"./chunks/index.5a999dbb.js";import"./chunks/index.5ad253f4.js";import"./chunks/Caption.d8d6f487.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.bb21a336.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.61c2a28a.js";import"./chunks/use-focus.0e5a5d4b.js";import"./chunks/toNumber.685f5789.js";import"./chunks/isSymbol.b765f5ee.js";import"./chunks/isObjectLike.46b91259.js";import"./chunks/floating-ui.dom.esm.4e25a8ce.js";import"./chunks/16.8a2e502c.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4cf0ed81.js";import"./chunks/create-image.28dfb74f.js";import"./chunks/avatar.bd58a373.js";import"./chunks/color-hash.af77277d.js";import"./chunks/load-image.265b152a.js";const aa="/design-system/assets/icon-privy.47402dc0.svg",g="/design-system/assets/logo.a0040de6.svg",sa=m({props:{variant:{type:String,default:"pills"},toggleable:{type:String,default:void 0},fixed:{type:Boolean,default:!1},color:{type:String,default:"light"},condensed:{type:Boolean,default:!1}},setup(t){const{y:o}=B(),v=R("navbar"),{height:r}=H(v);j(S,{variant:E(t,"variant"),toggleable:E(t,"toggleable"),condensed:E(t,"condensed")});const l=I(()=>{const p=[""];return t.color&&p.push(`navbar--${t.color}`),t.fixed&&p.push("navbar--fixed"),t.variant&&p.push(`navbar--${t.variant}`),t.toggleable&&p.push(`navbar--expand-${t.toggleable}`),p});return z(()=>{var p;(p=document.body)==null||p.style.setProperty("padding-top",`${r==null?void 0:r.value}px`)}),{classNames:l,y:o,height:r}}});function ta(t,o,v,r,l,p){return F(),x("nav",{ref:"navbar","data-testid":"navbar",class:w(["navbar",[{"navbar--shadow":t.y>t.height},t.classNames]])},[h(t.$slots,"default")],2)}const d=u(sa,[["render",ta]]),ea=m({props:{href:{type:String,default:void 0}}});const na=["href"];function la(t,o,v,r,l,p){return F(),x("a",{href:t.href,"data-testid":"navbar-brand",class:"navbar__brand"},[h(t.$slots,"default")],8,na)}const D=u(ea,[["render",la]]),pa=m({components:{Nav:O},props:{align:{type:String,default:"left"}},setup(){const t=k(S,void 0,!1),o=t==null?void 0:t.variant,v=t==null?void 0:t.condensed;return{variant:o,condensed:v}}});function oa(t,o,v,r,l,p){const T=_("Nav");return F(),A(T,{align:t.align,variant:t.variant,condensed:t.condensed,class:"navbar__nav","data-testid":"navbar-nav"},{default:a(()=>[h(t.$slots,"default")]),_:3},8,["align","variant","condensed"])}const c=u(pa,[["render",oa]]);var da=J,V=da.createSVGComponent(V,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"}}]),va=V;const ra=va,ca=m({components:{Button:P,IconMenu:ra,IconClose:Y},setup(){const t=q(!1),o=k(S,void 0,!1),v=o==null?void 0:o.toggleable,r=I(()=>{const p=[];return v!=null&&v.value&&p.push(`navbar__toggle--${v==null?void 0:v.value}`),p});function l(){t.value=!t.value}return{expanded:l,expand:t,classNames:r}}});function fa(t,o,v,r,l,p){const T=_("IconClose"),L=_("IconMenu"),$=_("Button");return F(),A($,{class:w(["navbar__toggle",t.classNames]),"data-testid":"navbar-toggle",variant:"outline",icon:"",onClick:t.expanded},{default:a(()=>[h(t.$slots,"default",{expanded:t.expand},()=>[t.expand?(F(),A(T,{key:0})):(F(),A(L,{key:1}))])]),_:3},8,["class","onClick"])}const Da=u(ca,[["render",fa]]);const Fa={},ya={class:"nav__form","data-testid":"nav-form"};function ia(t,o){return F(),x("li",ya,[h(t.$slots,"default")])}const Ca=u(Fa,[["render",ia]]);const i=t=>(U("data-v-59535f8e"),t=t(),G(),t),ga=f("",3),Aa=i(()=>y("img",{src:aa},null,-1)),ua=f("",4),ba=f("",2),_a=i(()=>y("img",{src:g},null,-1)),ha=f("",2),ma=i(()=>y("img",{src:g},null,-1)),xa=f("",3),Ta=i(()=>y("img",{src:g},null,-1)),Ea=i(()=>y("img",{src:g},null,-1)),Na=f("",3),Sa=i(()=>y("img",{src:g},null,-1)),Ia=i(()=>y("img",{src:g},null,-1)),wa=f("",3),ka=f("",2),qa=f("",2),Pa=i(()=>y("img",{src:g},null,-1)),Va=f("",2),La=f("",2),$a=f("",3),Ba=i(()=>y("img",{src:g},null,-1)),Ra=f("",20),gs=JSON.parse('{"title":"Navbar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Navbar","slug":"simple-navbar","link":"#simple-navbar","children":[]},{"level":3,"title":"Navbar Brand","slug":"navbar-brand","link":"#navbar-brand","children":[]}]},{"level":2,"title":"Fixed Navbar","slug":"fixed-navbar","link":"#fixed-navbar","children":[]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":2,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"Alignment","slug":"alignment","link":"#alignment","children":[]},{"level":2,"title":"With Icon","slug":"with-icon","link":"#with-icon","children":[]},{"level":2,"title":"With Form","slug":"with-form","link":"#with-form","children":[]},{"level":2,"title":"Condensed Navigation","slug":"condensed-navigation","link":"#condensed-navigation","children":[]},{"level":2,"title":"Dropdown","slug":"dropdown","link":"#dropdown","children":[]},{"level":2,"title":"Responsive","slug":"responsive","link":"#responsive","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-navbar>","slug":"props-p-navbar","link":"#props-p-navbar","children":[]},{"level":3,"title":"Slots <p-navbar>","slug":"slots-p-navbar","link":"#slots-p-navbar","children":[]},{"level":3,"title":"Props <p-navbar-brand>","slug":"props-p-navbar-brand","link":"#props-p-navbar-brand","children":[]},{"level":3,"title":"Slots <p-navbar-brand>","slug":"slots-p-navbar-brand","link":"#slots-p-navbar-brand","children":[]},{"level":3,"title":"Props <p-navbar-nav>","slug":"props-p-navbar-nav","link":"#props-p-navbar-nav","children":[]},{"level":3,"title":"Slots <p-navbar-nav>","slug":"slots-p-navbar-nav","link":"#slots-p-navbar-nav","children":[]},{"level":3,"title":"Props <p-navbar-toggle>","slug":"props-p-navbar-toggle","link":"#props-p-navbar-toggle","children":[]},{"level":3,"title":"Slots <p-navbar-toggle>","slug":"slots-p-navbar-toggle","link":"#slots-p-navbar-toggle","children":[]},{"level":3,"title":"Events <p-navbar-toggle>","slug":"events-p-navbar-toggle","link":"#events-p-navbar-toggle","children":[]}]}],"relativePath":"components/navbar/index.md"}'),Ha={name:"components/navbar/index.md"},Ma=Object.assign(Ha,{setup(t){const o=q(!1);return(v,r)=>{const l=_("preview");return F(),x("div",null,[ga,s(l,{class:"flex-grow"},{default:a(()=>[s(d,null,{default:a(()=>[s(D,null,{default:a(()=>[Aa]),_:1}),s(c,null,{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Home")]),_:1}),s(n,null,{default:a(()=>[e("Products")]),_:1}),s(n,null,{default:a(()=>[e("Solutions")]),_:1})]),_:1})]),_:1})]),_:1}),ua,s(l,{class:"flex-grow"},{default:a(()=>[s(d,null,{default:a(()=>[s(D,null,{default:a(()=>[e(" Persona ")]),_:1})]),_:1})]),_:1}),ba,s(l,{class:"flex-grow"},{default:a(()=>[s(d,null,{default:a(()=>[s(D,null,{default:a(()=>[_a,e(" Persona ")]),_:1})]),_:1})]),_:1}),ha,s(l,{class:"flex-grow preview--fixed"},{default:a(()=>[s(d,{fixed:""},{default:a(()=>[s(D,null,{default:a(()=>[ma]),_:1}),s(c,null,{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Home")]),_:1}),s(n,null,{default:a(()=>[e("Products")]),_:1})]),_:1})]),_:1})]),_:1}),xa,s(l,{class:"flex-grow"},{default:a(()=>[s(d,{variant:"pills",class:"mb-5"},{default:a(()=>[s(D,null,{default:a(()=>[Ta]),_:1}),s(c,null,{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1}),s(d,{variant:"lines"},{default:a(()=>[s(D,null,{default:a(()=>[Ea]),_:1}),s(c,null,{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),Na,s(l,{class:"flex-grow"},{default:a(()=>[s(d,{color:"light",class:"mb-5"},{default:a(()=>[s(D,null,{default:a(()=>[Sa]),_:1}),s(c,null,{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1}),s(d,{color:"dark"},{default:a(()=>[s(D,null,{default:a(()=>[Ia]),_:1}),s(c,null,{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),wa,s(l,{class:"flex-grow"},{default:a(()=>[s(d,{class:"mb-5"},{default:a(()=>[s(c,{align:"left"},{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Label")]),_:1}),s(n,null,{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1}),s(d,{class:"mb-5"},{default:a(()=>[s(c,{align:"center"},{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Label")]),_:1}),s(n,null,{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1}),s(d,null,{default:a(()=>[s(c,{align:"right"},{default:a(()=>[s(n,null,{default:a(()=>[e("Label")]),_:1}),s(n,{active:""},{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),ka,s(l,{class:"flex-grow"},{default:a(()=>[s(d,{class:"mb-5"},{default:a(()=>[s(c,null,{default:a(()=>[s(n,{active:""},{icon:a(()=>[s(C(b))]),default:a(()=>[e(" Label ")]),_:1}),s(n,null,{icon:a(()=>[s(C(b))]),default:a(()=>[e(" Label ")]),_:1})]),_:1})]),_:1})]),_:1}),qa,s(l,{class:"flex-grow"},{default:a(()=>[s(d,null,{default:a(()=>[s(D,null,{default:a(()=>[Pa]),_:1}),s(c,null,{default:a(()=>[s(Ca,null,{default:a(()=>[s(Q,null,{default:a(()=>[s(K,{placeholder:"Input Here"}),s(P,{variant:"input",color:"secondary"},{default:a(()=>[e("Search")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Va,s(l,{class:"flex-grow"},{default:a(()=>[s(d,null,{default:a(()=>[s(c,{condensed:""},{default:a(()=>[s(n,{active:""},{default:a(()=>[e("Label")]),_:1}),s(n,null,{default:a(()=>[e("Label")]),_:1}),s(n,null,{default:a(()=>[e("Label")]),_:1})]),_:1})]),_:1})]),_:1}),La,s(l,{class:"flex-grow"},{default:a(()=>[s(d,null,{default:a(()=>[s(c,null,{default:a(()=>[s(n,{active:""},{icon:a(()=>[s(C(b))]),default:a(()=>[e(" Label ")]),_:1}),s(Z,null,{"button-content":a(()=>[s(C(b)),e(" Label ")]),default:a(()=>[s(N,null,{default:a(()=>[e("Children 1")]),_:1}),s(N,null,{default:a(()=>[e("Children 2")]),_:1}),s(N,null,{default:a(()=>[e("Children 3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),$a,s(l,{class:"flex-grow"},{default:a(()=>[s(d,{toggleable:"lg"},{default:a(()=>[s(D,null,{default:a(()=>[Ba]),_:1}),s(Da,{onClick:r[0]||(r[0]=p=>o.value=!C(o))},{default:a(({expanded:p})=>[p?(F(),A(C(b),{key:0})):(F(),A(C(X),{key:1}))]),_:1}),s(M,{modelValue:C(o),"onUpdate:modelValue":r[1]||(r[1]=p=>W(o)?o.value=p:null),"is-nav":""},{default:a(()=>[s(c,null,{default:a(()=>[s(n,{active:""},{default:a(()=>[e(" Label ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),Ra])}}}),As=u(Ma,[["__scopeId","data-v-59535f8e"]]);export{gs as __pageData,As as default};
