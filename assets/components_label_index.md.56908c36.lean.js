import{D as h}from"./chunks/Dot.88babe01.js";import{I as C}from"./chunks/16.5f0f6165.js";import{d as g,r as A,c as m,_ as i,g as v,a as p,b as D,l as f,p as r,e as L,h as a,n as E,k as s,i as e,j as b}from"./app.5d60bad4.js";import"./chunks/utils-6ba05f5b.063d2e00.js";const T=g({components:{Dot:h,IconClose:C},props:{color:{type:String,default:"primary"},variant:{type:String,default:"default"},size:{type:String,default:"md"},dismissable:{type:Boolean,default:!1}},emits:["dismissed"],setup(d,{emit:c}){const o=A(!0),l=m(()=>{const n=["label"];return d.color&&n.push(`label--${d.color}`),d.variant&&n.push(`label--${d.variant}`),d.size&&n.push(`label--${d.size}`),n});function F(){o.value=!1,c("dismissed")}return{classNames:l,show:o,close:F}}});const q=s();function S(d,c,o,l,F,n){const y=v("Dot"),_=v("IconClose");return d.show?(p(),D("div",{key:0,"data-testid":"label",class:E(d.classNames)},[d.variant==="dot"?(p(),f(y,{key:0,"data-testid":"dot",color:d.color},null,8,["color"])):r("",!0),q,L(d.$slots,"default"),d.dismissable?(p(),D("span",{key:1,"data-testid":"label-dismiss",class:"label__dismiss",onClick:c[0]||(c[0]=(...u)=>d.close&&d.close(...u))},[a(_)])):r("",!0)],2)):r("",!0)}const t=i(T,[["render",S]]);const x=b("",3),z=s("Label"),I=b("",3),k=s("Label"),P=s("Label"),V=s("Label"),w=s("Label"),N=s("Label"),$=s("Label"),B=s("Label"),R=b("",3),U=s("Label"),j=s("Label"),O=s("Label"),W=b("",3),H=s("Label"),J=s("Label"),G=s("Label"),K=s("Label"),M=b("",3),Q=s("Label"),X=s("Label"),Y=s("Label"),Z=b("",8),ba=JSON.parse('{"title":"Label","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]}]},{"level":2,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":2,"title":"Sizing","slug":"sizing","link":"#sizing","children":[]},{"level":2,"title":"Dismissible","slug":"dismissible","link":"#dismissible","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/label/index.md"}'),aa={name:"components/label/index.md"},ea=Object.assign(aa,{setup(d){return(c,o)=>{const l=v("preview");return p(),D("div",null,[x,a(l,null,{default:e(()=>[a(t,null,{default:e(()=>[z]),_:1})]),_:1}),I,a(l,null,{default:e(()=>[a(t,{color:"primary"},{default:e(()=>[k]),_:1}),a(t,{color:"secondary"},{default:e(()=>[P]),_:1}),a(t,{color:"success"},{default:e(()=>[V]),_:1}),a(t,{color:"info"},{default:e(()=>[w]),_:1}),a(t,{color:"warning"},{default:e(()=>[N]),_:1}),a(t,{color:"danger"},{default:e(()=>[$]),_:1}),a(t,{color:"gold"},{default:e(()=>[B]),_:1})]),_:1}),R,a(l,null,{default:e(()=>[a(t,null,{default:e(()=>[U]),_:1}),a(t,{variant:"light"},{default:e(()=>[j]),_:1}),a(t,{variant:"dot"},{default:e(()=>[O]),_:1})]),_:1}),W,a(l,null,{default:e(()=>[a(t,{size:"lg"},{default:e(()=>[H]),_:1}),a(t,{size:"md"},{default:e(()=>[J]),_:1}),a(t,{size:"sm"},{default:e(()=>[G]),_:1}),a(t,{size:"xs"},{default:e(()=>[K]),_:1})]),_:1}),M,a(l,null,{default:e(()=>[a(t,{dismissable:!0},{default:e(()=>[Q]),_:1}),a(t,{variant:"light",dismissable:!0},{default:e(()=>[X]),_:1}),a(t,{variant:"dot",dismissable:!0},{default:e(()=>[Y]),_:1})]),_:1}),Z])}}}),ca=i(ea,[["__scopeId","data-v-cb2bed5a"]]);export{ba as __pageData,ca as default};
