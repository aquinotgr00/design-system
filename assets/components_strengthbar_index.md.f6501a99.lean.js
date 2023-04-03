import{d as v,a5 as d,f as _,_ as f,o as g,c as A,F as q,M as E,n as x,h as y,H as T,b as c,B as P,D as s,z as m,Q as u,a4 as h}from"./chunks/framework.76afac0a.js";import{b as C,a as S}from"./chunks/index.d997e305.js";import{p as w}from"./chunks/InputPassword.21c64a29.js";import{p as b}from"./chunks/InputRange.9523bd9c.js";import"./chunks/Input.b10f36db.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.c13e464c.js";import"./chunks/index.66044519.js";import"./chunks/utils-6ba05f5b.d8ec137d.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/index.a3ecab28.js";import"./chunks/16.2ea89be4.js";import"./chunks/index.f92bfe5e.js";import"./chunks/index.c7a185b2.js";import"./chunks/throttle.77eff498.js";import"./chunks/debounce.425ad733.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";const V=v({props:{length:{type:[Number,String],default:6},value:{type:[Number,String],default:0},min:{type:[Number,String],default:0},max:{type:[Number,String],default:6}},setup(o){const a=C(d(o,"min"),{nanToZero:!0}),F=C(d(o,"max"),{nanToZero:!0}),p=C(d(o,"value"),{nanToZero:!0}),e=C(d(o,"length"),{nanToZero:!0}),l=_(()=>(p.value-a.value)/(F.value-a.value)),i=_(()=>Array.from({length:e.value}).map((D,r)=>Math.round(l.value*e.value)>=r+1)),n=_(()=>{const D=l.value*3;return D>2?"high":D>1?"mid":"low"});return{strength:l,items:i,status:n}}});const N=["data-status"];function I(o,a,F,p,e,l){return g(),A("div",{class:"strengthbar","data-status":o.status},[(g(!0),A(q,null,E(o.items,(i,n)=>(g(),A("div",{key:n,class:x(["strengthbar__bar",{"strengthbar--active":i}])},null,2))),128))],8,N)}const t=f(V,[["render",I]]);function k(o){const a=y(0);return S(()=>c(o),async F=>{if(F){const{default:p}=await T(()=>import("./chunks/main.90caa3a0.js").then(l=>l.m),[]),e=p(F);a.value=Math.round(e.score/4*6+1)}else a.value=0},{debounce:300}),a}const R=u("",4),M=u("",2),U=u("",3),$=u("",3),B=u("",10),ts=JSON.parse('{"title":"Strengthbar · Components","description":"Component for displaying measurment.","frontmatter":{"title":"Strengthbar · Components","description":"Component for displaying measurment."},"headers":[],"relativePath":"components/strengthbar/index.md"}'),Z={name:"components/strengthbar/index.md"},ps=Object.assign(Z,{setup(o){const a=y(""),F=k(a),p=y(50),e=y(6),l=y(6);return(i,n)=>{const D=P("preview");return g(),A("div",null,[R,s(D,{class:"flex-col space-y-4"},{default:m(()=>[s(t,{value:"0"}),s(t,{value:"1"}),s(t,{value:"2"}),s(t,{value:"3"}),s(t,{value:"4"}),s(t,{value:"5"}),s(t,{value:"6"})]),_:1}),M,s(D,{class:"flex-col space-y-4"},{default:m(()=>[s(w,{modelValue:c(a),"onUpdate:modelValue":n[0]||(n[0]=r=>h(a)?a.value=r:null),placeholder:"Input your password"},null,8,["modelValue"]),s(t,{value:c(F)},null,8,["value"])]),_:1}),U,s(D,{class:"flex-col space-y-4"},{default:m(()=>[s(b,{modelValue:c(p),"onUpdate:modelValue":n[1]||(n[1]=r=>h(p)?p.value=r:null),min:"0",max:"100"},null,8,["modelValue"]),s(t,{value:c(p),min:"0",max:"100"},null,8,["value"])]),_:1}),$,s(D,{class:"flex-col space-y-4"},{default:m(()=>[s(b,{modelValue:c(e),"onUpdate:modelValue":n[2]||(n[2]=r=>h(e)?e.value=r:null),min:"1",max:"12"},null,8,["modelValue"]),s(b,{modelValue:c(l),"onUpdate:modelValue":n[3]||(n[3]=r=>h(l)?l.value=r:null),min:"0",max:"6"},null,8,["modelValue"]),s(t,{value:c(l),length:c(e)},null,8,["value","length"])]),_:1}),B])}}});export{ts as __pageData,ps as default};
