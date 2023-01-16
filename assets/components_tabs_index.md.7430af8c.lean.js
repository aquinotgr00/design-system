import{N as B,p as N}from"./chunks/NavItem.b6ec670f.js";import{f as x,t as H}from"./chunks/vnode.ec07542f.js";import{f as T,W as j,h as q,k as w,r as u,o as c,c as C,m as S,a as s,w as a,P as k,Q as $,q as h,n as m,s as P,t as R,e as t,y as O,l as V,b,u as f}from"./app.3c0f5e00.js";import{u as G}from"./chunks/index.d631e0ee.js";import{B as g}from"./chunks/Badge.77960411.js";import{I as _}from"./chunks/20.f7910f8e.js";import{I as E}from"./chunks/20.dfeba2b6.js";import{I}from"./chunks/20.9768999a.js";import"./chunks/Caption.a0c4815e.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.54554dcb.js";import"./chunks/index.2c069445.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.b0621788.js";import"./chunks/utils-6ba05f5b.52e29260.js";const W=T({props:{active:{type:Number,required:!0}},setup(l,{slots:r}){return()=>x(r.default(),"Tab").map((v,o)=>{var d;const F=H((d=v.props)==null?void 0:d.disabled),y=o===l.active&&!F;return j(v,{dataTabid:o,style:{display:y?"block":"none"}})})}}),U=T({components:{Nav:B,NavItem:N,TabContent:W},props:{variant:{type:String,default:"tabs"},align:{type:String,default:"left"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},navWrapperClass:{type:String,default:void 0},modelValue:{type:Number,default:0}},setup(l,{slots:r}){const v=q(()=>{const d=[];return l.vertical&&l.align&&d.push(`tabs--vertical-align-${l.align}`),d}),o=G(l),F=q(()=>{const d=r.default?r.default():[];return x(d,"Tab").map(i=>{var e,D;return{title:(e=i.props)==null?void 0:e.title,disabled:H((D=i.props)==null?void 0:D.disabled),slots:i.children}})});function y(d,A){A.disabled||(o.value=d)}return{classNames:v,active:o,tabs:F,selectTab:y}}});const J={class:"tabs__content"};function z(l,r,v,o,F,y){const d=u("NavItem"),A=u("Nav"),i=u("tab-content");return c(),C("div",{"data-testid":"tabs",class:m(["tabs",l.classNames])},[S("nav",{"data-testid":"tabs-nav-wrapper",class:m(["tabs__nav",l.navWrapperClass])},[s(A,{class:"nav","data-testid":"tabs-nav",variant:l.variant,align:l.align,vertical:l.vertical,justified:l.justified,fill:l.fill},{default:a(()=>[(c(!0),C(k,null,$(l.tabs,(e,D)=>(c(),h(d,{key:D,"data-testid":"tab",disabled:e.disabled,active:D===l.active,class:m([{"nav__item--no-icon":!e.slots.icon},{"nav__item--no-label":!e.title&&!e.slots.title}]),onClick:fa=>l.selectTab(D,e)},{icon:a(()=>[e.slots.icon?(c(),h(P(e.slots.icon),{key:0})):R("",!0)]),default:a(()=>[e.slots.title?(c(),h(P(e.slots.title),{key:0})):(c(),C(k,{key:1},[t(O(e.title),1)],64))]),_:2},1032,["disabled","active","class","onClick"]))),128))]),_:1},8,["variant","align","vertical","justified","fill"])],2),S("div",J,[s(i,{active:l.active},{default:a(()=>[V(l.$slots,"default")]),_:3},8,["active"])])],2)}const p=w(U,[["render",z]]),L=T({name:"Tab",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}}}),M={"data-testid":"tab-panel",class:"tab__panel"},Q={"data-testid":"tab-content",class:"tab__content"};function K(l,r,v,o,F,y){return c(),C("section",M,[S("div",Q,[V(l.$slots,"default")])])}const n=w(L,[["render",K]]);const X=b("",3),Y=b("",3),Z=b("",3),aa=b("",3),sa=b("",3),ta=b("",1),na=b("",2),la=b("",1),oa=b("",3),pa=b("",1),ea=b("",12),_a=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Variants","slug":"variants","link":"#variants","children":[]}]},{"level":2,"title":"Fill & Justify","slug":"fill-justify","link":"#fill-justify","children":[]},{"level":2,"title":"Alignment","slug":"alignment","link":"#alignment","children":[]},{"level":2,"title":"With Icon & Badge","slug":"with-icon-badge","link":"#with-icon-badge","children":[{"level":3,"title":"Icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"Badge","slug":"badge","link":"#badge","children":[]},{"level":3,"title":"Vertical","slug":"vertical","link":"#vertical","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-tabs>","slug":"props-p-tabs","link":"#props-p-tabs","children":[]},{"level":3,"title":"Slots <p-tabs>","slug":"slots-p-tabs","link":"#slots-p-tabs","children":[]},{"level":3,"title":"Props <p-tab>","slug":"props-p-tab","link":"#props-p-tab","children":[]},{"level":3,"title":"Slots <p-tab>","slug":"slots-p-tab","link":"#slots-p-tab","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/tabs/index.md"}'),da={name:"components/tabs/index.md"},ba=Object.assign(da,{setup(l){return(r,v)=>{const o=u("preview");return c(),C("div",null,[X,s(o,null,{default:a(()=>[s(p,null,{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),Y,s(o,null,{default:a(()=>[s(p,{variant:"tabs"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(p,{variant:"pills"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(p,{variant:"lines"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),Z,s(o,null,{default:a(()=>[s(p,{fill:""},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(p,{justified:""},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),aa,s(o,null,{default:a(()=>[s(p,{align:"left"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(p,{align:"center"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(p,{align:"right"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),sa,s(o,null,{default:a(()=>[s(p,null,{default:a(()=>[s(n,null,{icon:a(()=>[s(f(_))]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1}),s(n,null,{icon:a(()=>[s(f(E))]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1}),s(n,{disabled:""},{icon:a(()=>[s(f(I))]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1})]),_:1})]),_:1}),ta,s(o,null,{default:a(()=>[s(p,null,{default:a(()=>[s(n,null,{icon:a(()=>[s(f(_))]),title:a(()=>[t(" Edit ")]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1}),s(n,null,{icon:a(()=>[s(f(E))]),title:a(()=>[t(" View ")]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1}),s(n,{disabled:""},{icon:a(()=>[s(f(I))]),title:a(()=>[t(" Setting ")]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1})]),_:1})]),_:1}),na,s(o,null,{default:a(()=>[s(p,null,{default:a(()=>[s(n,null,{title:a(()=>[t(" To Sign "),s(g,{color:"primary"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1}),s(n,null,{title:a(()=>[t(" To Review "),s(g,{color:"primary"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1})]),_:1})]),_:1}),la,s(o,null,{default:a(()=>[s(p,{justified:""},{default:a(()=>[s(n,null,{icon:a(()=>[s(f(_))]),title:a(()=>[t(" To Sign "),s(g,{color:"primary",variant:"light"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1}),s(n,null,{icon:a(()=>[s(f(E))]),title:a(()=>[t(" To Review "),s(g,{color:"primary",variant:"light"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1})]),_:1})]),_:1}),oa,s(o,null,{default:a(()=>[s(p,{vertical:"","nav-wrapper-class":"w-48"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head ")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right ")]),_:1})]),_:1})]),_:1}),pa,s(o,null,{default:a(()=>[s(p,{vertical:"","nav-wrapper-class":"w-48",align:"right"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head ")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right ")]),_:1})]),_:1})]),_:1}),ea])}}}),Ea=w(ba,[["__scopeId","data-v-fa35573b"]]);export{_a as __pageData,Ea as default};