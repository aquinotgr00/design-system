import{N as B,p as N}from"./chunks/NavItem.c6b9997d.js";import{f as x,t as H}from"./chunks/vnode.bdba34b1.js";import{d as S,ae as $,f as w,_ as T,B as b,o as r,c as A,x as q,D as s,z as a,F as k,M as j,y as m,n as h,J as P,A as R,a as t,t as O,r as V,Q as f,b as c}from"./chunks/framework.76afac0a.js";import{u as G}from"./chunks/index.66044519.js";import{B as u}from"./chunks/Badge.1772627a.js";import{I as _}from"./chunks/20.8403fcb8.js";import{I as E}from"./chunks/20.71df6ccb.js";import{I}from"./chunks/20.b53809ea.js";import"./chunks/Caption.9e7e3734.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.6244a345.js";import"./chunks/index.d997e305.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.349b602c.js";import"./chunks/utils-6ba05f5b.d8ec137d.js";import"./chunks/commonjsHelpers.042e6b4d.js";const W=S({props:{active:{type:Number,required:!0}},setup(d,{slots:v}){return()=>x(v.default(),"Tab").map((D,l)=>{var e;const y=H((e=D.props)==null?void 0:e.disabled),i=l===d.active&&!y;return $(D,{dataTabid:l,style:{display:i?"block":"none"}})})}}),J=S({components:{Nav:B,NavItem:N,TabContent:W},props:{variant:{type:String,default:"tabs"},align:{type:String,default:"left"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},navWrapperClass:{type:String,default:void 0},modelValue:{type:Number,default:0}},setup(d,{slots:v}){const D=w(()=>{const e=[];return d.vertical&&d.align&&e.push(`tabs--vertical-align-${d.align}`),e}),l=G(d),y=w(()=>{const e=v.default?v.default():[];return x(e,"Tab").map(C=>{var p,F;return{title:(p=C.props)==null?void 0:p.title,disabled:H((F=C.props)==null?void 0:F.disabled),slots:C.children}})});function i(e,g){g.disabled||(l.value=e)}return{classNames:D,active:l,tabs:y,selectTab:i}}});const U={class:"tabs__content"};function z(d,v,D,l,y,i){const e=b("NavItem"),g=b("Nav"),C=b("tab-content");return r(),A("div",{"data-testid":"tabs",class:h(["tabs",d.classNames])},[q("nav",{"data-testid":"tabs-nav-wrapper",class:h(["tabs__nav",d.navWrapperClass])},[s(g,{class:"nav","data-testid":"tabs-nav",variant:d.variant,align:d.align,vertical:d.vertical,justified:d.justified,fill:d.fill},{default:a(()=>[(r(!0),A(k,null,j(d.tabs,(p,F)=>(r(),m(e,{key:F,"data-testid":"tab",disabled:p.disabled,active:F===d.active,class:h([{"nav__item--no-icon":!p.slots.icon},{"nav__item--no-label":!p.title&&!p.slots.title}]),onClick:ca=>d.selectTab(F,p)},{icon:a(()=>[p.slots.icon?(r(),m(P(p.slots.icon),{key:0})):R("",!0)]),default:a(()=>[p.slots.title?(r(),m(P(p.slots.title),{key:0})):(r(),A(k,{key:1},[t(O(p.title),1)],64))]),_:2},1032,["disabled","active","class","onClick"]))),128))]),_:1},8,["variant","align","vertical","justified","fill"])],2),q("div",U,[s(C,{active:d.active},{default:a(()=>[V(d.$slots,"default")]),_:3},8,["active"])])],2)}const o=T(J,[["render",z]]),M=S({name:"Tab",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}}}),L={"data-testid":"tab-panel",class:"tab__panel"},Q={"data-testid":"tab-content",class:"tab__content"};function K(d,v,D,l,y,i){return r(),A("section",L,[q("div",Q,[V(d.$slots,"default")])])}const n=T(M,[["render",K]]);const X=f("",4),Y=f("",3),Z=f("",3),aa=f("",3),sa=f("",3),ta=f("",1),na=f("",2),da=f("",1),la=f("",3),oa=f("",1),pa=f("",12),Ea=JSON.parse('{"title":"Tabs · Components","description":"Base tab menus.","frontmatter":{"title":"Tabs · Components","description":"Base tab menus."},"headers":[],"relativePath":"components/tabs/index.md"}'),ea={name:"components/tabs/index.md"},fa=Object.assign(ea,{setup(d){return(v,D)=>{const l=b("preview");return r(),A("div",null,[X,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),Y,s(l,null,{default:a(()=>[s(o,{variant:"tabs"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{variant:"pills"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{variant:"lines"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),Z,s(l,null,{default:a(()=>[s(o,{fill:""},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{justified:""},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),aa,s(l,null,{default:a(()=>[s(o,{align:"left"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{align:"center"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1}),s(o,{align:"right"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t("Home page content")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t("Profile page content")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t("Setting page content")]),_:1})]),_:1})]),_:1}),sa,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{icon:a(()=>[s(c(_))]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1}),s(n,null,{icon:a(()=>[s(c(E))]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1}),s(n,{disabled:""},{icon:a(()=>[s(c(I))]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1})]),_:1})]),_:1}),ta,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{icon:a(()=>[s(c(_))]),title:a(()=>[t(" Edit ")]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1}),s(n,null,{icon:a(()=>[s(c(E))]),title:a(()=>[t(" View ")]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1}),s(n,{disabled:""},{icon:a(()=>[s(c(I))]),title:a(()=>[t(" Setting ")]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1})]),_:1})]),_:1}),na,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(n,null,{title:a(()=>[t(" To Sign "),s(u,{color:"primary"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1}),s(n,null,{title:a(()=>[t(" To Review "),s(u,{color:"primary"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1})]),_:1})]),_:1}),da,s(l,null,{default:a(()=>[s(o,{justified:""},{default:a(()=>[s(n,null,{icon:a(()=>[s(c(_))]),title:a(()=>[t(" To Sign "),s(u,{color:"primary",variant:"light"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed ")]),_:1}),s(n,null,{icon:a(()=>[s(c(E))]),title:a(()=>[t(" To Review "),s(u,{color:"primary",variant:"light"},{default:a(()=>[t("25")]),_:1})]),default:a(()=>[t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings ")]),_:1})]),_:1})]),_:1}),la,s(l,null,{default:a(()=>[s(o,{vertical:"","nav-wrapper-class":"w-48"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head ")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right ")]),_:1})]),_:1})]),_:1}),oa,s(l,null,{default:a(()=>[s(o,{vertical:"","nav-wrapper-class":"w-48",align:"right"},{default:a(()=>[s(n,{title:"Home"},{default:a(()=>[t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head ")]),_:1}),s(n,{title:"Profile"},{default:a(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ")]),_:1}),s(n,{title:"Setting",disabled:""},{default:a(()=>[t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right ")]),_:1})]),_:1})]),_:1}),pa])}}}),qa=T(fa,[["__scopeId","data-v-d3f03375"]]);export{Ea as __pageData,qa as default};