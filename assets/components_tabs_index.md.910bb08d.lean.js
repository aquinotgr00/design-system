import{N as V,a as N}from"./chunks/NavItem.049de9e5.js";import{f as B,t as x}from"./chunks/vnode.b348e3b6.js";import{f as T,U as j,h as q,_ as w,b,o as r,c as A,a as S,d as s,w as a,O as k,P as $,l as h,m as P,p as O,k as t,t as R,n as m,r as H,e as d,u as f}from"./app.0f0a7ab1.js";import{u as G}from"./chunks/index.36f8c2c5.js";import{B as u}from"./chunks/Badge.5ff38f9e.js";import{I as _}from"./chunks/20.bb81ef6c.js";import{I as E}from"./chunks/20.9dd13ed7.js";import{I}from"./chunks/20.6f807f21.js";import"./chunks/Caption.40ce30e3.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.5d56aa0b.js";import"./chunks/utils-6ba05f5b.966f5c87.js";import"./chunks/commonjsHelpers.cd000407.js";const U=T({props:{active:{type:Number,required:!0}},setup(l,{slots:v}){return()=>B(v.default(),"Tab").map((D,c)=>{var e;const y=x((e=D.props)==null?void 0:e.disabled),i=c===l.active&&!y;return j(D,{dataTabid:c,style:{display:i?"block":"none"}})})}}),W=T({components:{Nav:V,NavItem:N,TabContent:U},props:{variant:{type:String,default:"tabs"},align:{type:String,default:"left"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},navWrapperClass:{type:String,default:void 0},modelValue:{type:Number,default:0}},setup(l,{slots:v}){const D=q(()=>{const e=[];return l.vertical&&l.align&&e.push(`tabs--vertical-align-${l.align}`),e}),c=G(l),y=q(()=>{const e=v.default?v.default():[];return B(e,"Tab").map(C=>{var p,F;return{title:(p=C.props)==null?void 0:p.title,disabled:x((F=C.props)==null?void 0:F.disabled),slots:C.children}})});function i(e,g){g.disabled||(c.value=e)}return{classNames:D,active:c,tabs:y,selectTab:i}}});const J={class:"tabs__content"};function z(l,v,D,c,y,i){const e=b("NavItem"),g=b("Nav"),C=b("tab-content");return r(),A("div",{"data-testid":"tabs",class:m(["tabs",l.classNames])},[S("nav",{"data-testid":"tabs-nav-wrapper",class:m(["tabs__nav",l.navWrapperClass])},[s(g,{class:"nav","data-testid":"tabs-nav",variant:l.variant,align:l.align,vertical:l.vertical,justified:l.justified,fill:l.fill},{default:a(()=>[(r(!0),A(k,null,$(l.tabs,(p,F)=>(r(),h(e,{key:F,"data-testid":"tab",disabled:p.disabled,active:F===l.active,class:m([{"nav__item--no-icon":!p.slots.icon},{"nav__item--no-label":!p.title&&!p.slots.title}]),onClick:fa=>l.selectTab(F,p)},{icon:a(()=>[p.slots.icon?(r(),h(P(p.slots.icon),{key:0})):O("",!0)]),default:a(()=>[p.slots.title?(r(),h(P(p.slots.title),{key:0})):(r(),A(k,{key:1},[t(R(p.title),1)],64))]),_:2},1032,["disabled","active","class","onClick"]))),128))]),_:1},8,["variant","align","vertical","justified","fill"])],2),S("div",J,[s(C,{active:l.active},{default:a(()=>[H(l.$slots,"default")]),_:3},8,["active"])])],2)}const o=w(W,[["render",z]]),L=T({name:"Tab",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}}}),M={"data-testid":"tab-panel",class:"tab__panel"},K={"data-testid":"tab-content",class:"tab__content"};function Q(l,v,D,c,y,i){return r(),A("section",M,[S("div",K,[H(l.$slots,"default")])])}const n=w(L,[["render",Q]]);const X=d("",3),Y=d("",3),Z=d("",3),aa=d("",3),sa=d("",3),ta=d("",1),na=d("",2),la=d("",1),ca=d("",3),oa=d("",1),pa=d("",12),ma=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Variants","slug":"variants","link":"#variants","children":[]}]},{"level":2,"title":"Fill & Justify","slug":"fill-justify","link":"#fill-justify","children":[]},{"level":2,"title":"Alignment","slug":"alignment","link":"#alignment","children":[]},{"level":2,"title":"With Icon & Badge","slug":"with-icon-badge","link":"#with-icon-badge","children":[{"level":3,"title":"Icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"Badge","slug":"badge","link":"#badge","children":[]},{"level":3,"title":"Vertical","slug":"vertical","link":"#vertical","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-tabs>","slug":"props-p-tabs","link":"#props-p-tabs","children":[]},{"level":3,"title":"Slots <p-tabs>","slug":"slots-p-tabs","link":"#slots-p-tabs","children":[]},{"level":3,"title":"Props <p-tab>","slug":"props-p-tab","link":"#props-p-tab","children":[]},{"level":3,"title":"Slots <p-tab>","slug":"slots-p-tab","link":"#slots-p-tab","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/tabs/index.md"}'),ea={name:"components/tabs/index.md"},da=Object.assign(ea,{setup(l){return(v,D)=>{const c=b("preview");return r(),A("div",null,[X,s(c,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),Y,s(c,null,{default:a(()=>[s(o,{variant:"tabs"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{variant:"pills"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{variant:"lines"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),Z,s(c,null,{default:a(()=>[s(o,{fill:""},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{justified:""},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),aa,s(c,null,{default:a(()=>[s(o,{align:"left"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{align:"center"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{align:"right"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),sa,s(c,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{icon:a(()=>[s(f(_))]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1}),s(n,null,{icon:a(()=>[s(f(E))]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1}),s(n,{disabled:""},{icon:a(()=>[s(f(I))]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1})]),_:1})]),_:1}),ta,s(c,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{icon:a(()=>[s(f(_))]),title:a(()=>[t(" Edit ")]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1}),s(n,null,{icon:a(()=>[s(f(E))]),title:a(()=>[t(" View ")]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1}),s(n,{disabled:""},{icon:a(()=>[s(f(I))]),title:a(()=>[t(" Setting ")]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1})]),_:1})]),_:1}),na,s(c,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{title:a(()=>[t(" To Sign "),s(u,{color:"primary"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1}),s(n,null,{title:a(()=>[t(" To Review "),s(u,{color:"primary"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1})]),_:1})]),_:1}),la,s(c,null,{default:a(()=>[s(o,{justified:""},{default:a(()=>[s(n,null,{icon:a(()=>[s(f(_))]),title:a(()=>[t(" To Sign "),s(u,{color:"primary",variant:"light"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1}),s(n,null,{icon:a(()=>[s(f(E))]),title:a(()=>[t(" To Review "),s(u,{color:"primary",variant:"light"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1})]),_:1})]),_:1}),ca,s(c,null,{default:a(()=>[s(o,{vertical:"","nav-wrapper-class":"w-48"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head ")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right ")]),_:1})]),_:1})]),_:1}),oa,s(c,null,{default:a(()=>[s(o,{vertical:"","nav-wrapper-class":"w-48",align:"right"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head ")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right ")]),_:1})]),_:1})]),_:1}),pa])}}}),_a=w(da,[["__scopeId","data-v-a1cfa7a6"]]);export{ma as __pageData,_a as default};
