import{j as y,a5 as b,_ as f,u as c,i as E,a8 as d,D as h,k as _,f as x,o as m,c as A,N as q,O as T,n as S,r as w,a as s,w as g,b as i,K as C}from"./app.98882f81.js";import{p as P}from"./chunks/InputPassword.e2e4a5d2.js";import{p as v}from"./chunks/InputRange.92bfddb2.js";import"./chunks/Input.55490814.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4c97a4dc.js";import"./chunks/index.b7e7b7cb.js";import"./chunks/utils-6ba05f5b.5160683a.js";import"./chunks/16.b3685f9c.js";import"./chunks/index.a547d89c.js";import"./chunks/throttle.8959bc51.js";import"./chunks/toNumber.685f5789.js";import"./chunks/isSymbol.b765f5ee.js";import"./chunks/isObjectLike.46b91259.js";function V(e){const a=y(0);return b(()=>c(e),async F=>{if(F){const{default:p}=await f(()=>import("./chunks/main.90caa3a0.js").then(l=>l.m),[]),o=p(F);a.value=Math.round(o.score/4*6+1)}else a.value=0},{debounce:300}),a}const N=E({props:{length:{type:[Number,String],default:6},value:{type:[Number,String],default:0},min:{type:[Number,String],default:0},max:{type:[Number,String],default:6}},setup(e){const a=d(h(e,"min"),{nanToZero:!0}),F=d(h(e,"max"),{nanToZero:!0}),p=d(h(e,"value"),{nanToZero:!0}),o=d(h(e,"length"),{nanToZero:!0}),l=_(()=>(p.value-a.value)/(F.value-a.value)),u=_(()=>Array.from({length:o.value}).map((D,r)=>Math.round(l.value*o.value)>=r+1)),n=_(()=>{const D=l.value*3;return D>2?"high":D>1?"mid":"low"});return{strength:l,items:u,status:n}}});const I=["data-status"];function k(e,a,F,p,o,l){return m(),A("div",{class:"strengthbar","data-status":e.status},[(m(!0),A(q,null,T(e.items,(u,n)=>(m(),A("div",{key:n,class:S(["strengthbar__bar",{"strengthbar--active":u}])},null,2))),128))],8,I)}const t=x(N,[["render",k]]),R=i("",3),M=i("",2),U=i("",3),$=i("",3),B=i("",10),as=JSON.parse('{"title":"Strengthbar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"For Measuring Password","slug":"for-measuring-password","link":"#for-measuring-password","children":[]}]},{"level":2,"title":"Min and Max","slug":"min-and-max","link":"#min-and-max","children":[]},{"level":2,"title":"Number of Bar","slug":"number-of-bar","link":"#number-of-bar","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/strengthbar/index.md"}'),O={name:"components/strengthbar/index.md"},ns=Object.assign(O,{setup(e){const a=y(""),F=V(a),p=y(50),o=y(6),l=y(6);return(u,n)=>{const D=w("preview");return m(),A("div",null,[R,s(D,{class:"flex-col space-y-4"},{default:g(()=>[s(t,{value:"0"}),s(t,{value:"1"}),s(t,{value:"2"}),s(t,{value:"3"}),s(t,{value:"4"}),s(t,{value:"5"}),s(t,{value:"6"})]),_:1}),M,s(D,{class:"flex-col space-y-4"},{default:g(()=>[s(P,{modelValue:c(a),"onUpdate:modelValue":n[0]||(n[0]=r=>C(a)?a.value=r:null),placeholder:"Input your password"},null,8,["modelValue"]),s(t,{value:c(F)},null,8,["value"])]),_:1}),U,s(D,{class:"flex-col space-y-4"},{default:g(()=>[s(v,{modelValue:c(p),"onUpdate:modelValue":n[1]||(n[1]=r=>C(p)?p.value=r:null),min:"0",max:"100"},null,8,["modelValue"]),s(t,{value:c(p),min:"0",max:"100"},null,8,["value"])]),_:1}),$,s(D,{class:"flex-col space-y-4"},{default:g(()=>[s(v,{modelValue:c(o),"onUpdate:modelValue":n[2]||(n[2]=r=>C(o)?o.value=r:null),min:"1",max:"12"},null,8,["modelValue"]),s(v,{modelValue:c(l),"onUpdate:modelValue":n[3]||(n[3]=r=>C(l)?l.value=r:null),min:"0",max:"6"},null,8,["modelValue"]),s(t,{value:c(l),length:c(o)},null,8,["value","length"])]),_:1}),B])}}});export{as as __pageData,ns as default};
