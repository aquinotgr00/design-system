import{u as f}from"./chunks/utils-6ba05f5b.a568a454.js";import{p as A}from"./chunks/Caption.5d1d4d2a.js";import{p as v}from"./chunks/index.18cf48b9.js";import{i as b,k as T,f as E,r as D,U as q,o as p,c as r,h,d as S,q as y,t as i,e as u,y as d,w as a,g as I,a as s,T as N,n as k,b as l}from"./app.9536caf3.js";import{p as t}from"./chunks/Input.691197a4.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.fe86e2f6.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.3593c47e.js";import"./chunks/use-singleton.bd3723e9.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.0b21c04d.js";import"./chunks/index.d692cd26.js";import"./chunks/index.35064abe.js";import"./chunks/index.44dfd7f7.js";import"./chunks/value.830bdabd.js";var x=f,_=x.createSVGComponent(_,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{fill:"none",d:"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z","data-icon-path":"inner-path"}},{elem:"path",attrs:{d:"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}}]),P=_;const V=P,w=b({components:{pCaption:A,IconInfo:V},directives:{pTooltip:v},props:{required:{type:Boolean,default:!1},label:{type:String,default:""},caption:{type:String,default:""},description:{type:String,default:""},hint:{type:String,default:""},error:{type:String,default:""}},setup(n){return{classNames:T(()=>{const c=[];return n.error&&c.push("form-group--error","state--error"),c})}}});const R={class:"form-group__label"},H={key:1},L={key:0,class:"form-group__error"},$={key:1,class:"form-group__description"};function B(n,F,c,e,Q,W){const g=D("IconInfo"),m=D("p-caption"),C=q("p-tooltip");return p(),r("div",{class:k(["form-group",n.classNames])},[h("label",R,[n.hint?S((p(),y(g,{key:0,class:"form-group__hint"},null,512)),[[C,n.hint]]):i("",!0),u(" "+d(n.label),1),n.required?(p(),r("sup",H,"*")):i("",!0),n.caption?(p(),y(m,{key:2},{default:a(()=>[u(d(n.caption),1)]),_:1})):i("",!0)]),I(n.$slots,"default"),s(N,{name:"slide-up",mode:"out-in"},{default:a(()=>[n.error?(p(),r("p",L,d(n.error),1)):n.description?(p(),r("p",$,d(n.description),1)):i("",!0)]),_:1})],2)}const o=E(w,[["render",B]]),U=l("",3),M=l("",2),G=l("",3),Z=l("",3),O=l("",3),j=l("",3),z=l("",3),J=l("",8),ds=JSON.parse('{"title":"Form Group","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"Advance Usage","slug":"advance-usage","link":"#advance-usage","children":[]}]},{"level":2,"title":"Required Mode","slug":"required-mode","link":"#required-mode","children":[]},{"level":2,"title":"Caption","slug":"caption","link":"#caption","children":[]},{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Error Message","slug":"error-message","link":"#error-message","children":[]},{"level":2,"title":"Hint tooltip","slug":"hint-tooltip","link":"#hint-tooltip","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/form-group/index.md"}'),K={name:"components/form-group/index.md"},Ds=Object.assign(K,{setup(n){return(F,c)=>{const e=D("preview");return p(),r("div",null,[U,s(e,null,{default:a(()=>[s(o,{label:"First Name"},{default:a(()=>[s(t)]),_:1})]),_:1}),M,s(e,null,{default:a(()=>[s(o,{label:"First Name",caption:"This is caption",description:"This is description",hint:"This is hint",required:""},{default:a(()=>[s(t)]),_:1})]),_:1}),G,s(e,null,{default:a(()=>[s(o,{label:"First Name",required:""},{default:a(()=>[s(t)]),_:1})]),_:1}),Z,s(e,null,{default:a(()=>[s(o,{label:"First Name",caption:"Lorem Ipsum dolor sitar"},{default:a(()=>[s(t)]),_:1})]),_:1}),O,s(e,null,{default:a(()=>[s(o,{label:"First Name",description:"Lorem Ipsum dolor sitar"},{default:a(()=>[s(t)]),_:1})]),_:1}),j,s(e,{class:"flex-col space-y-4"},{default:a(()=>[h("div",null,[s(o,{label:"First Name",description:"Lorem Ipsum dolor sitar",error:"Please fill this field"},{default:a(()=>[s(t)]),_:1})])]),_:1}),z,s(e,null,{default:a(()=>[s(o,{label:"First Name",hint:"Lorem Ipsum dolor sitar"},{default:a(()=>[s(t)]),_:1})]),_:1}),J])}}});export{ds as __pageData,Ds as default};
