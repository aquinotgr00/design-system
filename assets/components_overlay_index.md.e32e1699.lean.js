import{u as d}from"./chunks/use-singleton.bae644a8.js";import{u as h}from"./chunks/use-loading.61770e2a.js";import{m as y,_ as p,x as i,p as c,G as t,C as _,r as u,o as m,J as F,N as o,B as r,X as v,y as D,H as g,I as C}from"./chunks/framework.303a6298.js";import"./chunks/Overlay.vue_vue_type_style_index_0_lang.4ed993c7.js";import{p as A}from"./chunks/Button.a7efe8a4.js";import"./chunks/defu.573334b8.js";import"./chunks/theme.8e6a443b.js";import"./chunks/index.a3ecab28.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";const x="/design-system/assets/icon-white.a83336af.svg",w=y({props:{icon:{type:String,default:x}},setup(){const a=h({elapsed:!1});function e(){a.value=!0}function s(){a.value=!1}return{show:e,hide:s,loading:a}}}),k={key:0,"data-testid":"overlay",class:"overlay"},T={class:"overlay__icon"},O=["src"];function S(a,e,s,f,b,l){return a.loading?(i(),c("div",k,[t("div",T,[t("img",{src:a.icon,alt:"overlay-icon"},null,8,O)])])):_("",!0)}const n=p(w,[["render",S]]);async function P(){(await d(n)).show()}async function q(){(await d(n)).hide()}const I=a=>(g("data-v-300bf99e"),a=a(),C(),a),N=v("",4),V=I(()=>t("p",null,[t("strong",null,"Try it:")],-1)),B=v("",10),z=JSON.parse('{"title":"Navbar · Components","description":"Block user for interacting when loading is in progress.","frontmatter":{"title":"Navbar · Components","description":"Block user for interacting when loading is in progress."},"headers":[],"relativePath":"components/overlay/index.md","filePath":"components/overlay/index.md"}'),E={name:"components/overlay/index.md"},$=Object.assign(E,{setup(a){const e=u();function s(){P(),setTimeout(()=>{q()},3e3)}return m(()=>{e.value.show()}),(f,b)=>{const l=F("preview");return i(),c("div",null,[N,o(l,null,{default:r(()=>[o(n,{ref_key:"overlay",ref:e},null,512)]),_:1}),V,t("div",null,[o(A,{onClick:s,color:"info"},{default:r(()=>[D(" Show ")]),_:1})]),B])}}}),K=p($,[["__scopeId","data-v-300bf99e"]]);export{z as __pageData,K as default};
