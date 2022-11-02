import{N as V,a as N}from"./chunks/NavItem.d90dd457.js";import{f as B,t as x}from"./chunks/vnode.f8681de9.js";import{i as T,W as j,k as q,f as w,r as b,o as r,c as A,h as S,a as s,w as a,Q as k,R as $,q as h,n as m,s as P,t as R,e as t,y as O,g as H,b as f,u as c}from"./app.fdfa60f6.js";import{u as G}from"./chunks/index.7357c1cb.js";import{B as u}from"./chunks/Badge.72d3ce32.js";import{I as _}from"./chunks/20.d02fc0fd.js";import{I as E}from"./chunks/20.cdad4b3e.js";import{I}from"./chunks/20.5730fe58.js";import"./chunks/Caption.3bf41dbf.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.6b4f099b.js";import"./chunks/utils-6ba05f5b.8a5fea77.js";const W=T({props:{active:{type:Number,required:!0}},setup(d,{slots:v}){return()=>B(v.default(),"Tab").map((D,l)=>{var e;const y=x((e=D.props)==null?void 0:e.disabled),i=l===d.active&&!y;return j(D,{dataTabid:l,style:{display:i?"block":"none"}})})}}),U=T({components:{Nav:V,NavItem:N,TabContent:W},props:{variant:{type:String,default:"tabs"},align:{type:String,default:"left"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},navWrapperClass:{type:String,default:void 0},modelValue:{type:Number,default:0}},setup(d,{slots:v}){const D=q(()=>{const e=[];return d.vertical&&d.align&&e.push(`tabs--vertical-align-${d.align}`),e}),l=G(d),y=q(()=>{const e=v.default?v.default():[];return B(e,"Tab").map(C=>{var p,F;return{title:(p=C.props)==null?void 0:p.title,disabled:x((F=C.props)==null?void 0:F.disabled),slots:C.children}})});function i(e,g){g.disabled||(l.value=e)}return{classNames:D,active:l,tabs:y,selectTab:i}}});const J={class:"tabs__content"};function z(d,v,D,l,y,i){const e=b("NavItem"),g=b("Nav"),C=b("tab-content");return r(),A("div",{"data-testid":"tabs",class:m(["tabs",d.classNames])},[S("nav",{"data-testid":"tabs-nav-wrapper",class:m(["tabs__nav",d.navWrapperClass])},[s(g,{class:"nav","data-testid":"tabs-nav",variant:d.variant,align:d.align,vertical:d.vertical,justified:d.justified,fill:d.fill},{default:a(()=>[(r(!0),A(k,null,$(d.tabs,(p,F)=>(r(),h(e,{key:F,"data-testid":"tab",disabled:p.disabled,active:F===d.active,class:m([{"nav__item--no-icon":!p.slots.icon},{"nav__item--no-label":!p.title&&!p.slots.title}]),onClick:ca=>d.selectTab(F,p)},{icon:a(()=>[p.slots.icon?(r(),h(P(p.slots.icon),{key:0})):R("",!0)]),default:a(()=>[p.slots.title?(r(),h(P(p.slots.title),{key:0})):(r(),A(k,{key:1},[t(O(p.title),1)],64))]),_:2},1032,["disabled","active","class","onClick"]))),128))]),_:1},8,["variant","align","vertical","justified","fill"])],2),S("div",J,[s(C,{active:d.active},{default:a(()=>[H(d.$slots,"default")]),_:3},8,["active"])])],2)}const o=w(U,[["render",z]]),L=T({name:"Tab",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}}}),M={"data-testid":"tab-panel",class:"tab__panel"},Q={"data-testid":"tab-content",class:"tab__content"};function K(d,v,D,l,y,i){return r(),A("section",M,[S("div",Q,[H(d.$slots,"default")])])}const n=w(L,[["render",K]]);const X=f("",3),Y=f("",3),Z=f("",3),aa=f("",3),sa=f("",3),ta=f("",1),na=f("",2),da=f("",1),la=f("",3),oa=f("",1),pa=f("",12),ha=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Variants","slug":"variants","link":"#variants","children":[]}]},{"level":2,"title":"Fill & Justify","slug":"fill-justify","link":"#fill-justify","children":[]},{"level":2,"title":"Alignment","slug":"alignment","link":"#alignment","children":[]},{"level":2,"title":"With Icon & Badge","slug":"with-icon-badge","link":"#with-icon-badge","children":[{"level":3,"title":"Icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"Badge","slug":"badge","link":"#badge","children":[]},{"level":3,"title":"Vertical","slug":"vertical","link":"#vertical","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-tabs>","slug":"props-p-tabs","link":"#props-p-tabs","children":[]},{"level":3,"title":"Slots <p-tabs>","slug":"slots-p-tabs","link":"#slots-p-tabs","children":[]},{"level":3,"title":"Props <p-tab>","slug":"props-p-tab","link":"#props-p-tab","children":[]},{"level":3,"title":"Slots <p-tab>","slug":"slots-p-tab","link":"#slots-p-tab","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/tabs/index.md"}'),ea={name:"components/tabs/index.md"},fa=Object.assign(ea,{setup(d){return(v,D)=>{const l=b("preview");return r(),A("div",null,[X,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),Y,s(l,null,{default:a(()=>[s(o,{variant:"tabs"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{variant:"pills"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{variant:"lines"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),Z,s(l,null,{default:a(()=>[s(o,{fill:""},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{justified:""},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),aa,s(l,null,{default:a(()=>[s(o,{align:"left"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{align:"center"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{align:"right"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),sa,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{icon:a(()=>[s(c(_))]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1}),s(n,null,{icon:a(()=>[s(c(E))]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1}),s(n,{disabled:""},{icon:a(()=>[s(c(I))]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1})]),_:1})]),_:1}),ta,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{icon:a(()=>[s(c(_))]),title:a(()=>[t(" Edit ")]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1}),s(n,null,{icon:a(()=>[s(c(E))]),title:a(()=>[t(" View ")]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1}),s(n,{disabled:""},{icon:a(()=>[s(c(I))]),title:a(()=>[t(" Setting ")]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1})]),_:1})]),_:1}),na,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{title:a(()=>[t(" To Sign "),s(u,{color:"primary"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1}),s(n,null,{title:a(()=>[t(" To Review "),s(u,{color:"primary"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1})]),_:1})]),_:1}),da,s(l,null,{default:a(()=>[s(o,{justified:""},{default:a(()=>[s(n,null,{icon:a(()=>[s(c(_))]),title:a(()=>[t(" To Sign "),s(u,{color:"primary",variant:"light"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1}),s(n,null,{icon:a(()=>[s(c(E))]),title:a(()=>[t(" To Review "),s(u,{color:"primary",variant:"light"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1})]),_:1})]),_:1}),la,s(l,null,{default:a(()=>[s(o,{vertical:"","nav-wrapper-class":"w-48"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head ")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right ")]),_:1})]),_:1})]),_:1}),oa,s(l,null,{default:a(()=>[s(o,{vertical:"","nav-wrapper-class":"w-48",align:"right"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head ")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right ")]),_:1})]),_:1})]),_:1}),pa])}}}),ma=w(fa,[["__scopeId","data-v-2915adf3"]]);export{ha as __pageData,ma as default};
