import{N as V}from"./NavItem.vue_vue_type_style_index_0_lang.16a13bbc.js";import{p as S}from"./NavItem.2bac52db.js";import{f as T,t as h}from"./vnode.d1548374.js";import{m as y,ad as I,c as N,_ as k,K as v,x as n,p as f,F as b,M as $,I as u,G as g,V as j,H as m,v as _,R as C,J as D,y as q,z as w,q as B}from"./framework.e0781a45.js";import{u as z}from"./index.745ddc6c.js";const A=y({props:{active:{type:Number,required:!0}},setup(t,{slots:l}){return()=>T(l.default(),"Tab").map((o,s)=>{var a;const r=h((a=o.props)==null?void 0:a.disabled),c=s===t.active&&!r;return I(o,{dataTabid:s,style:{display:c?"block":"none"}})})}}),F=y({components:{Nav:V,NavItem:S,TabContent:A},props:{variant:{type:String,default:"tabs"},align:{type:String,default:"left"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},navWrapperClass:{type:String,default:void 0},modelValue:{type:Number,default:0}},setup(t,{slots:l}){const o=N(()=>{const a=[];return t.vertical&&t.align&&a.push(`tabs--vertical-align-${t.align}`),a}),s=z(t),r=N(()=>{const a=l.default?l.default():[];return T(a,"Tab").map(d=>{var e,i;return{title:(e=d.props)==null?void 0:e.title,disabled:h((i=d.props)==null?void 0:i.disabled),slots:d.children}})});function c(a,p){p.disabled||(s.value=a)}return{classNames:o,active:s,tabs:r,selectTab:c}}});const M={class:"tabs__content"};function W(t,l,o,s,r,c){const a=v("NavItem"),p=v("Nav"),d=v("tab-content");return n(),f("div",{"data-testid":"tabs",class:_(["tabs",t.classNames])},[b("nav",{"data-testid":"tabs-nav-wrapper",class:_(["tabs__nav",t.navWrapperClass])},[$(p,{class:"nav","data-testid":"tabs-nav",variant:t.variant,align:t.align,vertical:t.vertical,justified:t.justified,fill:t.fill},{default:u(()=>[(n(!0),f(g,null,j(t.tabs,(e,i)=>(n(),m(a,{key:i,"data-testid":"tab",disabled:e.disabled,active:i===t.active,class:_({"nav__item--no-icon":!e.slots.icon,"nav__item--no-label":!e.title&&!e.slots.title}),onClick:K=>t.selectTab(i,e)},{icon:u(()=>[e.slots.icon?(n(),m(C(e.slots.icon),{key:0})):D("",!0)]),default:u(()=>[e.slots.title?(n(),m(C(e.slots.title),{key:0})):(n(),f(g,{key:1},[q(w(e.title),1)],64))]),_:2},1032,["disabled","active","class","onClick"]))),128))]),_:1},8,["variant","align","vertical","justified","fill"])],2),b("div",M,[$(d,{active:t.active},{default:u(()=>[B(t.$slots,"default")]),_:3},8,["active"])])],2)}const U=k(F,[["render",W]]),E=y({name:"Tab",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}}}),G={"data-testid":"tab-panel",class:"tab__panel"},H={"data-testid":"tab-content",class:"tab__content"};function J(t,l,o,s,r,c){return n(),f("section",G,[b("div",H,[B(t.$slots,"default")])])}const X=k(E,[["render",J]]);export{X as a,U as p};
