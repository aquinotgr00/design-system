import{D as m}from"./chunks/Dot.45831925.js";import{I as L}from"./chunks/16.da18c861.js";import{d as f,r as q,c as y,_ as k,j as u,a as b,b as i,l as T,p as v,e as S,g as a,n as x,k as s,h as t,i as o}from"./app.6e319942.js";import"./chunks/utils-6ba05f5b.cdee46a6.js";const C=f({components:{Dot:m,IconClose:L},props:{color:{type:String,default:"primary"},variant:{type:String,default:"default"},size:{type:String,default:"md"},dismissable:{type:Boolean,default:!1}},emits:["dismissed"],setup(c,{emit:d}){const l=q(!0),e=y(()=>{const p=["label"];return c.color&&p.push(`label--${c.color}`),c.variant&&p.push(`label--${c.variant}`),c.size&&p.push(`label--${c.size}`),p});function r(){l.value=!1,d("dismissed")}return{classNames:e,show:l,close:r}}}),A=s();function I(c,d,l,e,r,p){const g=u("Dot"),_=u("IconClose");return c.show?(b(),i("div",{key:0,"data-testid":"label",class:x(c.classNames)},[c.variant==="dot"?(b(),T(g,{key:0,"data-testid":"dot",color:c.color},null,8,["color"])):v("",!0),A,S(c.$slots,"default"),c.dismissable?(b(),i("span",{key:1,"data-testid":"label-dismiss",class:"label__dismiss",onClick:d[0]||(d[0]=(...h)=>c.close&&c.close(...h))},[a(_)])):v("",!0)],2)):v("",!0)}var n=k(C,[["render",I]]);const z=o("",3),D=s("Label"),P=o("",3),V=s("Label"),w=s("Label"),N=s("Label"),E=s("Label"),$=s("Label"),B=s("Label"),R=s("Label"),U=o("",3),j=s("Label"),W=s("Label"),H=s("Label"),O=o("",3),F=s("Label"),G=s("Label"),J=s("Label"),K=s("Label"),M=o("",3),Q=s("Label"),X=s("Label"),Y=s("Label"),Z=o("",8),oa='{"title":"Label","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":2,"title":"Colors","slug":"colors"},{"level":2,"title":"Variants","slug":"variants"},{"level":2,"title":"Sizing","slug":"sizing"},{"level":2,"title":"Dismissible","slug":"dismissible"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"label/component.md"}',aa={},ta=Object.assign(aa,{setup(c){return(d,l)=>{const e=u("preview");return b(),i("div",null,[z,a(e,null,{default:t(()=>[a(n,null,{default:t(()=>[D]),_:1})]),_:1}),P,a(e,null,{default:t(()=>[a(n,{color:"primary"},{default:t(()=>[V]),_:1}),a(n,{color:"secondary"},{default:t(()=>[w]),_:1}),a(n,{color:"success"},{default:t(()=>[N]),_:1}),a(n,{color:"info"},{default:t(()=>[E]),_:1}),a(n,{color:"warning"},{default:t(()=>[$]),_:1}),a(n,{color:"danger"},{default:t(()=>[B]),_:1}),a(n,{color:"gold"},{default:t(()=>[R]),_:1})]),_:1}),U,a(e,null,{default:t(()=>[a(n,null,{default:t(()=>[j]),_:1}),a(n,{variant:"light"},{default:t(()=>[W]),_:1}),a(n,{variant:"dot"},{default:t(()=>[H]),_:1})]),_:1}),O,a(e,null,{default:t(()=>[a(n,{size:"lg"},{default:t(()=>[F]),_:1}),a(n,{size:"md"},{default:t(()=>[G]),_:1}),a(n,{size:"sm"},{default:t(()=>[J]),_:1}),a(n,{size:"xs"},{default:t(()=>[K]),_:1})]),_:1}),M,a(e,null,{default:t(()=>[a(n,{dismissable:!0},{default:t(()=>[Q]),_:1}),a(n,{variant:"light",dismissable:!0},{default:t(()=>[X]),_:1}),a(n,{variant:"dot",dismissable:!0},{default:t(()=>[Y]),_:1})]),_:1}),Z])}}});var da=k(ta,[["__scopeId","data-v-b760806c"]]);export{oa as __pageData,da as default};
