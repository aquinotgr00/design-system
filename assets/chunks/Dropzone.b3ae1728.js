import{t as h}from"./index.71be0f73.js";import{u as w}from"./index.0447d4be.js";import{t as y}from"./base64.2ecfec5a.js";import{k as z}from"./index.cc846abb.js";import{f as A,g as m,C as B,h as M,I as T,k as N,o as S,c as k,m as V,a3 as H,l as I,n as O,B as f}from"../app.5d0b0c3f.js";function F(e,a){return e?a.filter(i=>{const t=String(i.name).toLowerCase(),d=String(i.type).toLowerCase();return e.split(",").some(r=>{const s=r.trim().toLowerCase();return s.charAt(0)==="."?t.endsWith(s):s.endsWith("/*")?d.replace(/\/.*$/,"")===s.replace(/\/.*$/,""):d===s})}):a}const L=A({props:{modelValue:{type:[globalThis.File,Array,String],default:void 0},modelModifiers:{type:Object,default:()=>({})},multiple:{type:[Boolean,String],default:!1},maxlength:{type:[Number,String],default:void 0},accept:{type:String,default:""},clearOnCancel:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change","cancel"],setup(e,{emit:a}){const i=m(),t=w(e),d=h("input"),u=z(B(e,"maxlength"),{method:"parseInt"}),r=m(!1),s=m(!1),c=M(()=>{const o=[];return r.value&&o.push("dropzone--dragover"),s.value&&o.push("dropzone--hover"),e.disabled&&o.push("dropzone--disabled"),e.readonly&&o.push("dropzone--readonly"),o});function b(){d.value.value="",d.value.click()}function v(){d.value.value="",i.value=void 0,t.value=void 0}function D(o){if(!e.disabled&&!e.readonly){const n=o.dataTransfer.files;r.value=!1,g(n)}}function C(o){const n=o.target,p=n.files;g(p),e.multiple==="append"&&T(()=>{n.value=""})}function $(o){return Array.isArray(o)?Promise.all(o.map(n=>y(n))):y(o)}async function g(o){if(o.length>0){const n=F(e.accept,Array.from(o)),p=e.multiple===!1?n.at(0):n;let l=p;e.multiple==="append"&&Array.isArray(t.value)&&(l=[...t.value,...l]),Number.isInteger(u.value)&&Array.isArray(l)&&(l=l.slice(0,u.value)),i.value=l,e.modelModifiers.base64&&(l=await $(p)),t.value=l,a("change",l)}else e.clearOnCancel&&v(),a("cancel")}return{classNames:c,browse:b,clear:v,isDragover:r,isHovered:s,model:t,rawModel:i,onDrop:D,onChange:C}}});const P=["multiple","accept","disabled"];function R(e,a,i,t,d,u){return S(),k("label",{class:O(["dropzone",e.classNames]),"data-testid":"dropzone",onDrop:a[1]||(a[1]=f((...r)=>e.onDrop&&e.onDrop(...r),["prevent"])),onDragover:a[2]||(a[2]=f(()=>{},["prevent"])),onDragenter:a[3]||(a[3]=f(r=>e.isDragover=!0,["prevent"])),onDragleave:a[4]||(a[4]=f(r=>e.isDragover=!1,["prevent"])),onMouseover:a[5]||(a[5]=r=>e.isHovered=!0),onMouseout:a[6]||(a[6]=r=>e.isHovered=!1)},[V("input",H({ref:"input","data-testid":"dropzone-input",class:"dropzone__input",type:"file",multiple:e.multiple!==!1,accept:e.accept,disabled:e.disabled||e.readonly},e.$attrs,{onChange:a[0]||(a[0]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,P),I(e.$slots,"default",{isDragover:e.isDragover,isHovered:e.isHovered,disabled:e.disabled,readonly:e.readonly,model:e.model,rawModel:e.rawModel,browse:e.browse,clear:e.clear})],34)}const J=N(L,[["render",R]]);export{J as p};