import{N,a as j}from"./chunks/NavItem.3b25c639.js";import{f as B}from"./chunks/vnode.5882bf53.js";import{d as T,W as $,c as k,_ as q,g as h,a as D,b as u,f as w,h as s,i as a,N as P,O,l as f,m as I,p as R,k as t,t as G,n as m,e as V,j as c,u as v}from"./app.42862046.js";import{u as W}from"./chunks/use-input.fed319b6.js";import{B as _}from"./chunks/Badge.97c3b005.js";import{I as E}from"./chunks/20.3b5bfd9f.js";import{u as M}from"./chunks/utils-6ba05f5b.565f1a63.js";import{I as x}from"./chunks/20.77f12ede.js";import"./chunks/Caption.21da6a70.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.ec15e160.js";const U=T({props:{active:{type:Number,required:!0}},setup(n,{slots:F}){return()=>B(F.default(),"Tab").map((r,l)=>{var d,y;const A=((d=r.props)==null?void 0:d.disabled)===""?!0:!!((y=r.props)!=null&&y.disabled),g=l===n.active&&!A;return $(r,{dataTabid:l,style:{display:g?"block":"none"}})})}}),Z=T({components:{Nav:N,NavItem:j,TabContent:U},props:{variant:{type:String,default:"tabs"},align:{type:String,default:"left"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},navWrapperClass:{type:String,default:void 0},modelValue:{type:Number,default:0}},setup(n,{slots:F}){const r=k(()=>{const d=[];return n.vertical&&n.align&&d.push(`tabs--vertical-align-${n.align}`),d}),l=W(n),A=k(()=>{const d=F.default?F.default():[];return B(d,"Tab").map(i=>{var p,C,b;return{title:(p=i.props)==null?void 0:p.title,disabled:((C=i.props)==null?void 0:C.disabled)===""?!0:!!((b=i.props)!=null&&b.disabled),slots:i.children}})});function g(d,y){y.disabled||(l.value=d)}return{classNames:r,active:l,tabs:A,selectTab:g}}});const J={class:"tabs__content"};function z(n,F,r,l,A,g){const d=h("NavItem"),y=h("Nav"),i=h("tab-content");return D(),u("div",{"data-testid":"tabs",class:m(["tabs",n.classNames])},[w("nav",{"data-testid":"tabs-nav-wrapper",class:m(["tabs__nav",n.navWrapperClass])},[s(y,{class:"nav","data-testid":"tabs-nav",variant:n.variant,align:n.align,vertical:n.vertical,justified:n.justified,fill:n.fill},{default:a(()=>[(D(!0),u(P,null,O(n.tabs,(p,C)=>(D(),f(d,{key:C,"data-testid":"tab",disabled:p.disabled,active:C===n.active,class:m([{"nav__item--no-icon":!p.slots.icon},{"nav__item--no-label":!p.title&&!p.slots.title}]),onClick:b=>n.selectTab(C,p)},{icon:a(()=>[p.slots.icon?(D(),f(I(p.slots.icon),{key:0})):R("",!0)]),default:a(()=>[p.slots.title?(D(),f(I(p.slots.title),{key:0})):(D(),u(P,{key:1},[t(G(p.title),1)],64))]),_:2},1032,["disabled","active","class","onClick"]))),128))]),_:1},8,["variant","align","vertical","justified","fill"])],2),w("div",J,[s(i,{active:n.active},{default:a(()=>[V(n.$slots,"default")]),_:3},8,["active"])])],2)}const o=q(Z,[["render",z]]),L=T({name:"Tab",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}}}),K={"data-testid":"tab-panel",class:"tab__panel"},Q={"data-testid":"tab-content",class:"tab__content"};function X(n,F,r,l,A,g){return D(),u("section",K,[w("div",Q,[V(n.$slots,"default")])])}const e=q(L,[["render",X]]);var Y=M,H=Y.createSVGComponent(H,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M30.94,15.66A16.69,16.69,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16.69,16.69,0,0,0,16,27,16.69,16.69,0,0,0,30.94,16.34,1,1,0,0,0,30.94,15.66ZM16,25c-5.3,0-10.9-3.93-12.93-9C5.1,10.93,10.7,7,16,7s10.9,3.93,12.93,9C26.9,21.07,21.3,25,16,25Z"}},{elem:"path",attrs:{d:"M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"}}]),aa=H;const S=aa;const sa=c("",3),ta=t("Home page content"),ea=t("Profile page content"),na=t("Setting page content"),la=c("",3),oa=t("Home page content"),pa=t("Profile page content"),da=t("Setting page content"),ca=t("Home page content"),ra=t("Profile page content"),va=t("Setting page content"),Da=t("Home page content"),Fa=t("Profile page content"),ya=t("Setting page content"),ia=c("",3),Ca=t("Home page content"),Aa=t("Profile page content"),ga=t("Setting page content"),ua=t("Home page content"),_a=t("Profile page content"),ha=t("Setting page content"),ba=c("",3),fa=t("Home page content"),ma=t("Profile page content"),Ea=t("Setting page content"),Sa=t("Home page content"),wa=t("Profile page content"),Ta=t("Setting page content"),qa=t("Home page content"),ka=t("Profile page content"),Pa=t("Setting page content"),Ia=c("",3),xa=t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born "),Ba=t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings "),Va=t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed "),Ha=c("",1),Na=t(" Edit "),ja=t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed "),$a=t(" View "),Oa=t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings "),Ra=t(" Setting "),Ga=t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born "),Wa=c("",2),Ma=t(" To Sign "),Ua=t("25"),Za=t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born "),Ja=t(" To Review "),za=t("25"),La=t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed "),Ka=c("",1),Qa=t(" To Sign "),Xa=t("25"),Ya=t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed "),as=t(" To Review "),ss=t("25"),ts=t(" A wonderful serenity has taken possession of my entire soul, like these sweet mornings "),es=c("",3),ns=t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head "),ls=t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, "),os=t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right "),ps=c("",1),ds=t(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head "),cs=t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, "),rs=t(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right "),vs=c("",12),ms=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Variants","slug":"variants","link":"#variants","children":[]}]},{"level":2,"title":"Fill & Justify","slug":"fill-justify","link":"#fill-justify","children":[]},{"level":2,"title":"Alignment","slug":"alignment","link":"#alignment","children":[]},{"level":2,"title":"With Icon & Badge","slug":"with-icon-badge","link":"#with-icon-badge","children":[{"level":3,"title":"Icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"Badge","slug":"badge","link":"#badge","children":[]},{"level":3,"title":"Vertical","slug":"vertical","link":"#vertical","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-tabs>","slug":"props-p-tabs","link":"#props-p-tabs","children":[]},{"level":3,"title":"Slots <p-tabs>","slug":"slots-p-tabs","link":"#slots-p-tabs","children":[]},{"level":3,"title":"Props <p-tab>","slug":"props-p-tab","link":"#props-p-tab","children":[]},{"level":3,"title":"Slots <p-tab>","slug":"slots-p-tab","link":"#slots-p-tab","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/tabs/index.md"}'),Ds={name:"components/tabs/index.md"},Fs=Object.assign(Ds,{setup(n){return(F,r)=>{const l=h("preview");return D(),u("div",null,[sa,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[ta]),_:1}),s(e,{title:"Profile"},{default:a(()=>[ea]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[na]),_:1})]),_:1})]),_:1}),la,s(l,null,{default:a(()=>[s(o,{variant:"tabs"},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[oa]),_:1}),s(e,{title:"Profile"},{default:a(()=>[pa]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[da]),_:1})]),_:1}),s(o,{variant:"pills"},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[ca]),_:1}),s(e,{title:"Profile"},{default:a(()=>[ra]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[va]),_:1})]),_:1}),s(o,{variant:"lines"},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[Da]),_:1}),s(e,{title:"Profile"},{default:a(()=>[Fa]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[ya]),_:1})]),_:1})]),_:1}),ia,s(l,null,{default:a(()=>[s(o,{fill:""},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[Ca]),_:1}),s(e,{title:"Profile"},{default:a(()=>[Aa]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[ga]),_:1})]),_:1}),s(o,{justified:""},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[ua]),_:1}),s(e,{title:"Profile"},{default:a(()=>[_a]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[ha]),_:1})]),_:1})]),_:1}),ba,s(l,null,{default:a(()=>[s(o,{align:"left"},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[fa]),_:1}),s(e,{title:"Profile"},{default:a(()=>[ma]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[Ea]),_:1})]),_:1}),s(o,{align:"center"},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[Sa]),_:1}),s(e,{title:"Profile"},{default:a(()=>[wa]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[Ta]),_:1})]),_:1}),s(o,{align:"right"},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[qa]),_:1}),s(e,{title:"Profile"},{default:a(()=>[ka]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[Pa]),_:1})]),_:1})]),_:1}),Ia,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(e,null,{icon:a(()=>[s(v(E))]),default:a(()=>[xa]),_:1}),s(e,null,{icon:a(()=>[s(v(S))]),default:a(()=>[Ba]),_:1}),s(e,{disabled:""},{icon:a(()=>[s(v(x))]),default:a(()=>[Va]),_:1})]),_:1})]),_:1}),Ha,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(e,null,{icon:a(()=>[s(v(E))]),title:a(()=>[Na]),default:a(()=>[ja]),_:1}),s(e,null,{icon:a(()=>[s(v(S))]),title:a(()=>[$a]),default:a(()=>[Oa]),_:1}),s(e,{disabled:""},{icon:a(()=>[s(v(x))]),title:a(()=>[Ra]),default:a(()=>[Ga]),_:1})]),_:1})]),_:1}),Wa,s(l,null,{default:a(()=>[s(o,null,{default:a(()=>[s(e,null,{title:a(()=>[Ma,s(_,{color:"primary"},{default:a(()=>[Ua]),_:1})]),default:a(()=>[Za]),_:1}),s(e,null,{title:a(()=>[Ja,s(_,{color:"primary"},{default:a(()=>[za]),_:1})]),default:a(()=>[La]),_:1})]),_:1})]),_:1}),Ka,s(l,null,{default:a(()=>[s(o,{justified:""},{default:a(()=>[s(e,null,{icon:a(()=>[s(v(E))]),title:a(()=>[Qa,s(_,{color:"primary",variant:"light"},{default:a(()=>[Xa]),_:1})]),default:a(()=>[Ya]),_:1}),s(e,null,{icon:a(()=>[s(v(S))]),title:a(()=>[as,s(_,{color:"primary",variant:"light"},{default:a(()=>[ss]),_:1})]),default:a(()=>[ts]),_:1})]),_:1})]),_:1}),es,s(l,null,{default:a(()=>[s(o,{vertical:"","nav-wrapper-class":"w-48"},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[ns]),_:1}),s(e,{title:"Profile"},{default:a(()=>[ls]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[os]),_:1})]),_:1})]),_:1}),ps,s(l,null,{default:a(()=>[s(o,{vertical:"","nav-wrapper-class":"w-48",align:"right"},{default:a(()=>[s(e,{title:"Home"},{default:a(()=>[ds]),_:1}),s(e,{title:"Profile"},{default:a(()=>[cs]),_:1}),s(e,{title:"Setting",disabled:""},{default:a(()=>[rs]),_:1})]),_:1})]),_:1}),vs])}}}),Es=q(Fs,[["__scopeId","data-v-270e3112"]]);export{ms as __pageData,Es as default};
