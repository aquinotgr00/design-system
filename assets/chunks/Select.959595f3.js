import{D as z}from"./Dropdown.4f198dc2.js";import{p as O}from"./Dropdown.vue_vue_type_style_index_0_lang.fe7fcd2d.js";import{p as A}from"./Input.ee17b687.js";import{I as F}from"./16.67b21f16.js";import{u as T}from"./utils-6ba05f5b.f19b39b0.js";import{p as M}from"./SpinnerRing.ebd428a7.js";import{d as j,u as q}from"./adapter.36c7e25a.js";import{h as v,f as E,g as _,i as U,H as G,k as H,r as i,o as c,q as S,w,a as f,c as I,l as C,e as b,y as k,F as P,x as R,n as V,m as D,t as x}from"../app.fff47363.js";import{u as J}from"./use-loading.3bdcbc96.js";import{i as B}from"./value.830bdabd.js";import{t as K}from"./index.61e2d7de.js";import{f as Q}from"./index.4a3eaa8e.js";var W=T,$=W.createSVGComponent($,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z"}},{elem:"path",attrs:{d:"M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z","data-icon-path":"inner-path",opacity:"0"}}]),X=$;const Y=X,Z=j({setup({props:e,keyword:o}){const l=q(e);return v(()=>l.value.filter(n=>n.text.toLowerCase().includes(o.value.toLowerCase())))}}),ee=E({components:{Dropdown:z,DropdownItem:O,Input:A,IconArrow:F,IconCheck:Y,IconLoading:M},props:{modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:""},selected:{type:Object,default:()=>({text:"",value:void 0})},options:{type:Array,default:()=>[]},placeholder:{type:String,default:""},emptyText:{type:String,default:"No Data"},loadingText:{type:String,default:"Loading..."},adapter:{type:Object,default:()=>Z},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},size:{type:String,default:"md"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["change","update:modelValue","update:selected","userInput"],setup(e,{emit:o}){const l=G(),r=_(),n=_(""),s=_(!1),u=J({elapsed:!1}),y={props:e,keyword:n,isOpen:s,isLoading:u},p=e.adapter.setup(y),d=v({get(){var t;return(t=p.value.find(N=>B(N.value,e.modelValue)))!=null?t:{text:"",value:void 0}},set(t){o("change",t),o("update:modelValue",t.value),o("update:selected",t),s.value&&o("userInput",t)}}),h=v(()=>{const t=[];return s.value&&t.push("select--open"),e.disabled&&t.push("select--disabled"),e.readonly&&t.push("select--readonly"),e.error&&t.push("select--error","state--error"),t}),m=v({get(){var t;return s.value?n.value:(t=d.value)==null?void 0:t.text},set(t){t!==m.value&&(n.value=t)}});function a(t){d.value=t}function g(){!e.disabled&&!e.readonly&&(s.value=!0)}function L(t){return B(t.value,d.value.value)}return U(s,t=>{t||(n.value="")},{flush:"post"}),Q(()=>{s.value&&r.value&&r.value!==document.activeElement&&r.value.focus()}),K(()=>{var t;(t=l==null?void 0:l.proxy)!=null&&t.$el&&(r.value=l.proxy.$el.querySelector(".select__search"))}),{classNames:h,model:d,isOpen:s,isLoading:u,search:m,items:p,select:a,onFocus:g,isSelected:L}}});const te={key:0,"data-testid":"select-no-data",class:"select__empty"},oe={class:"select__option"},ae={class:"select__option-text"},se={key:2,"data-testid":"select-loading",class:"select__loading"};function le(e,o,l,r,n,s){const u=i("Input"),y=i("IconArrow"),p=i("IconCheck"),d=i("DropdownItem"),h=i("IconLoading"),m=i("Dropdown");return c(),S(m,{modelValue:e.isOpen,"onUpdate:modelValue":o[1]||(o[1]=a=>e.isOpen=a),class:V(["select",e.classNames]),"data-testid":"select","aria-label":"select",disabled:e.disabled},{activator:w(()=>[f(u,{modelValue:e.search,"onUpdate:modelValue":o[0]||(o[0]=a=>e.search=a),"data-testid":"select-search",class:"select__search",size:e.size,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,onFocus:e.onFocus},null,8,["modelValue","size","placeholder","disabled","readonly","onFocus"]),f(y,{class:"select__caret"})]),default:w(()=>[!e.isLoading&&e.items.length===0?(c(),I("div",te,[C(e.$slots,"empty",{},()=>[b(k(e.emptyText),1)])])):(c(!0),I(P,{key:1},R(e.items,(a,g)=>(c(),S(d,{key:g,"data-testid":"select-item",class:V({selected:e.isSelected(a)}),onClick:L=>e.select(a)},{default:w(()=>[D("div",oe,[D("div",ae,[C(e.$slots,"option",{isSelected:e.isSelected(a),item:a},()=>[b(k(a.text),1)])]),f(p,{class:"select__option-checked"})])]),_:2},1032,["class","onClick"]))),128)),e.isLoading?(c(),I("div",se,[f(h,{width:"14",height:"14"}),C(e.$slots,"loading",{},()=>[b(k(e.loadingText),1)])])):x("",!0)]),_:3},8,["modelValue","disabled","class"])}const ge=H(ee,[["render",le]]);export{ge as p};
