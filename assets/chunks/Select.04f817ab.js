import{D as A}from"./Dropdown.f706c3bb.js";import{p as O}from"./Dropdown.vue_vue_type_style_index_0_lang.ee72ccc6.js";import{p as z}from"./Input.3c63c0c0.js";import{I as T}from"./20.7180ddd2.js";import{I as F}from"./20.c6fe5404.js";import{p as j}from"./SpinnerRing.001dc416.js";import{i as N}from"./value.830bdabd.js";import{d as q,u as E}from"./adapter.c83e5e9c.js";import{c as b,m as M,g as U,r as f,w as C,_ as G,J as c,x as u,A as D,B as v,N as y,p as I,q as w,y as L,z as S,L as J,v as B,G as V,K,C as P}from"./framework.f3d2a0a5.js";import{u as R}from"./use-loading.f698da79.js";import{m as H,k as Q}from"./theme.6d4ed01a.js";function $(e,o){var s;return(s=e.find(n=>N(n.value,o)))!=null?s:{text:"",value:void 0}}const W=q({setup({props:e,keyword:o}){const s=E(e);return b(()=>s.value.filter(d=>d.text.toLowerCase().includes(o.value.toLowerCase())))}}),X=M({components:{Dropdown:A,DropdownItem:O,pInput:z,IconArrow:T,IconCheck:F,IconLoading:j},props:{modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:void 0},selected:{type:Object,default:()=>({text:"",value:void 0})},options:{type:Array,default:()=>[]},placeholder:{type:String,default:""},emptyText:{type:String,default:"No Data"},loadingText:{type:String,default:"Loading..."},adapter:{type:Object,default:()=>W},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},size:{type:String,default:"md"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["change","update:modelValue","update:selected","userInput"],setup(e,{emit:o}){const s=U(),n=f(),d=f(""),l=f(!1),p=R({elapsed:!1}),g={props:e,keyword:d,isOpen:l,isLoading:p},i=e.adapter.setup(g),r=f($(i.value,e.modelValue)),h=b(()=>{const t=[];return l.value&&t.push("select--open"),e.disabled&&t.push("select--disabled"),e.readonly&&t.push("select--readonly"),e.error&&t.push("select--error","state--error"),t}),m=b({get(){var t;return l.value?d.value:(t=r.value)==null?void 0:t.text},set(t){t!==m.value&&(d.value=t)}});C(()=>e.modelValue,t=>{r.value=$(i.value,t)});function a(t){r.value=t,o("change",t),o("update:selected",t),o("update:modelValue",t.value),l.value&&o("userInput",t)}function _(){!e.disabled&&!e.readonly&&(l.value=!0)}function k(t){return N(t.value,r.value.value)}return C(l,t=>{t||(d.value="")},{flush:"post"}),H(()=>{l.value&&n.value&&n.value!==document.activeElement&&n.value.focus()}),Q(()=>{var t;(t=s==null?void 0:s.proxy)!=null&&t.$el&&(n.value=s.proxy.$el.querySelector(".select__search"))}),{classNames:h,isOpen:l,isLoading:p,search:m,items:i,select:a,onFocus:_,isSelected:k}}});const Y={key:0,"data-testid":"select-no-data",class:"select__empty"},Z={class:"select__option"},x={class:"select__option-text"},ee={key:2,"data-testid":"select-loading",class:"select__loading"};function te(e,o,s,n,d,l){const p=c("IconArrow"),g=c("p-input"),i=c("IconCheck"),r=c("DropdownItem"),h=c("IconLoading"),m=c("Dropdown");return u(),D(m,{modelValue:e.isOpen,"onUpdate:modelValue":o[1]||(o[1]=a=>e.isOpen=a),class:B(["select",e.classNames]),"data-testid":"select","aria-label":"select",disabled:e.disabled},{activator:v(()=>[y(g,{modelValue:e.search,"onUpdate:modelValue":o[0]||(o[0]=a=>e.search=a),"data-testid":"select-search",class:"select__search",size:e.size,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,onFocus:e.onFocus},{append:v(()=>[y(p,{class:"select__caret"})]),_:1},8,["modelValue","size","placeholder","disabled","readonly","onFocus"])]),default:v(()=>[!e.isLoading&&e.items.length===0?(u(),I("div",Y,[w(e.$slots,"empty",{},()=>[L(S(e.emptyText),1)])])):(u(!0),I(K,{key:1},J(e.items,(a,_)=>(u(),D(r,{key:_,"data-testid":"select-item",class:B({selected:e.isSelected(a)}),onClick:k=>e.select(a)},{default:v(()=>[V("div",Z,[V("div",x,[w(e.$slots,"option",{isSelected:e.isSelected(a),item:a},()=>[L(S(a.text),1)])]),y(i,{class:"select__option-checked"})])]),_:2},1032,["class","onClick"]))),128)),e.isLoading?(u(),I("div",ee,[y(h,{width:"14",height:"14"}),w(e.$slots,"loading",{},()=>[V("span",null,S(e.loadingText),1)])])):P("",!0)]),_:3},8,["modelValue","disabled","class"])}const me=G(X,[["render",te]]);export{me as p};