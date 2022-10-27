import{f as j,g as T,a0 as $,z as U,h as J,D as R,_ as z,o as r,c,a as o,a1 as L,r as O,n as _,y as A,b as W,d as a,w as s,t as h,e as E,u as q,k as l,O as v,P as I,W as Z,X}from"./app.0f0a7ab1.js";import{t as K}from"./chunks/index.734690a2.js";import{u as Q}from"./chunks/index.36f8c2c5.js";import{t as V}from"./chunks/base64.e46863ef.js";import{H as F}from"./chunks/Heading.4cbb244f.js";import{C as b}from"./chunks/Caption.40ce30e3.js";import{p as k,I as Y}from"./chunks/32.0ef91619.js";import{u as aa}from"./chunks/utils-6ba05f5b.966f5c87.js";import"./chunks/index.69a8ee88.js";import"./chunks/index.e2432ff2.js";import"./chunks/commonjsHelpers.cd000407.js";function sa(d,n){return d?n.filter(i=>{const m=String(i.name).toLowerCase(),C=String(i.type).toLowerCase();return d.split(",").some(t=>{const p=t.trim().toLowerCase();return p.charAt(0)==="."?m.endsWith(p):p.endsWith("/*")?C.replace(/\/.*$/,"")===p.replace(/\/.*$/,""):C===p})}):n}const ta=j({props:{modelValue:{type:[globalThis.File,Array,String],default:void 0},modelModifiers:{type:Object,default:()=>({})},multiple:{type:[Boolean,String],default:!1},maxlength:{type:[Number,String],default:void 0},accept:{type:String,default:""}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change","cancel"],setup(d,{emit:n}){const i=T(),m=Q(d),C=K("input"),y=$(U(d,"maxlength"),{method:"parseInt"}),t=T(!1),p=T(!1),e=J(()=>{const f=[];return t.value&&f.push("dropzone--dragover"),p.value&&f.push("dropzone--hover"),f});function D(){C.value.click()}function x(f){const u=f.dataTransfer.files;t.value=!1,S(u)}function H(f){const u=f.target,B=u.files;S(B),d.multiple==="append"&&R(()=>{u.value=""})}function G(f){return Array.isArray(f)?Promise.all(f.map(u=>V(u))):V(f)}async function S(f){if(f.length>0){const u=sa(d.accept,Array.from(f)),B=d.multiple!==!1?u:u.at(0);let g=B;d.multiple==="append"&&Array.isArray(m.value)&&(g=[...m.value,...g]),Number.isInteger(y.value)&&Array.isArray(g)&&(g=g.slice(0,y.value)),i.value=g,d.modelModifiers.base64&&(g=await G(B)),m.value=g,n("change",g)}else n("cancel")}return{classNames:e,browse:D,isDragover:t,isHovered:p,model:m,rawModel:i,onDrop:x,onChange:H}}});const da=["multiple","accept"];function na(d,n,i,m,C,y){return r(),c("label",{class:_(["dropzone",d.classNames]),"data-testid":"dropzone",onDrop:n[1]||(n[1]=A((...t)=>d.onDrop&&d.onDrop(...t),["prevent"])),onDragover:n[2]||(n[2]=A(()=>{},["prevent"])),onDragenter:n[3]||(n[3]=A(t=>d.isDragover=!0,["prevent"])),onDragleave:n[4]||(n[4]=A(t=>d.isDragover=!1,["prevent"])),onMouseover:n[5]||(n[5]=t=>d.isHovered=!0),onMouseout:n[6]||(n[6]=t=>d.isHovered=!1)},[o("input",L({ref:"input","data-testid":"dropzone-input",class:"dropzone__input",type:"file",multiple:d.multiple!==!1,accept:d.accept},d.$attrs,{onChange:n[0]||(n[0]=(...t)=>d.onChange&&d.onChange(...t))}),null,16,da),O(d.$slots,"default",{isDragover:d.isDragover,isHovered:d.isHovered,model:d.model,rawModel:d.rawModel,browse:d.browse})],34)}const w=z(ta,[["render",na]]);var la=aa,M=la.createSVGComponent(M,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},[{elem:"path",attrs:{d:"M19,14a3,3,0,1,0-3-3A3,3,0,0,0,19,14Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,19,10Z"}},{elem:"path",attrs:{d:"M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4Zm0,22H6V20l5-5,5.59,5.59a2,2,0,0,0,2.82,0L21,19l5,5Zm0-4.83-3.59-3.59a2,2,0,0,0-2.82,0L18,19.17l-5.59-5.59a2,2,0,0,0-2.82,0L6,17.17V6H26Z"}}]),oa=M;const P=oa;const N=d=>(Z("data-v-f0370da8"),d=d(),X(),d),pa=E("",4),ea=["onClick"],ra=E("",2),ca=["onClick"],fa=E("",3),Da=["onClick"],va={key:1},Fa=E("",3),ya=["onClick"],ia={key:1},Ca=E("",2),Aa=["onClick"],ua=N(()=>o("p",null,[o("strong",null,"result:")],-1)),ga={class:"truncate"},ma=E("",3),ha=["onClick"],ba=N(()=>o("p",null,[o("strong",null,"result:")],-1)),_a={class:"truncate"},Ea=E("",8),Ha=JSON.parse('{"title":"Dropzone","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Upload Document","slug":"upload-document","link":"#upload-document","children":[]},{"level":3,"title":"Add Photo","slug":"add-photo","link":"#add-photo","children":[]}]},{"level":2,"title":"Multiple upload","slug":"multiple-upload","link":"#multiple-upload","children":[{"level":3,"title":"Appending values","slug":"appending-values","link":"#appending-values","children":[]}]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Encode to base64","slug":"encode-to-base64","link":"#encode-to-base64","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/dropzone/index.md"}'),qa={name:"components/dropzone/index.md"},ka=Object.assign(qa,{setup(d){const n=T(),i=T();return(m,C)=>{const y=W("preview");return r(),c("div",null,[pa,a(y,{class:"flex-col items-stretch"},{default:s(()=>[a(w,{accept:"application/pdf"},{default:s(({isDragover:t,isHovered:p,model:e,browse:D})=>[o("div",{class:_(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[t?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(k,{active:t||p},{default:s(()=>[a(q(Y),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(F,{element:"h5"},{default:s(()=>[l(" Upload Document ")]),_:1}),a(F,{element:"h6"},{default:s(()=>[e?(r(),c(v,{key:1},[l(h(e.name),1)],64)):(r(),c(v,{key:0},[l(" Drag your document here or click "),o("a",{href:"#",onClick:A(D,["prevent"])},"Browse",8,ea)],64))]),_:2},1024),a(b,{bold:""},{default:s(()=>[l("PDF, DOC & DOCX up to 25MB each")]),_:1}),a(b,null,{default:s(()=>[l("10 documents max for multiple upload")]),_:1}),a(b,{class:"mt-16 text-sm"},{default:s(()=>[l("PDF file format is recommended for a faster uploading process.")]),_:1})],2)]),_:1})]),_:1}),ra,a(y,{class:"flex-col items-stretch"},{default:s(()=>[a(w,{accept:"image/*"},{default:s(({isDragover:t,isHovered:p,model:e,browse:D})=>[o("div",{class:_(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[t?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(k,{active:t||p},{default:s(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(F,{element:"h5"},{default:s(()=>[l(" Add Photo ")]),_:1}),a(F,{element:"h6"},{default:s(()=>[e?(r(),c(v,{key:1},[l(h(e.name),1)],64)):(r(),c(v,{key:0},[l(" Drag your document here or click "),o("a",{href:"#",onClick:A(D,["prevent"])},"Browse",8,ca)],64))]),_:2},1024),a(b,{bold:""},{default:s(()=>[l("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),fa,a(y,{class:"flex-col items-stretch"},{default:s(()=>[a(w,{accept:"image/*",multiple:"",maxlength:"5"},{default:s(({isDragover:t,isHovered:p,model:e,browse:D})=>[o("div",{class:_(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[t?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(k,{active:t||p},{default:s(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(F,{element:"h5"},{default:s(()=>[l(" Add Photo ")]),_:1}),a(F,{element:"h6"},{default:s(()=>[e?(r(),c("ol",va,[(r(!0),c(v,null,I(e,x=>(r(),c("li",null,h(x.name),1))),256))])):(r(),c(v,{key:0},[l(" Drag your document here or click "),o("a",{href:"#",onClick:A(D,["prevent"])},"Browse",8,Da)],64))]),_:2},1024),a(b,{bold:""},{default:s(()=>[l("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),Fa,a(y,{class:"flex-col items-stretch"},{default:s(()=>[a(w,{accept:"image/*",multiple:"append",maxlength:"10"},{default:s(({isDragover:t,isHovered:p,model:e,browse:D})=>[o("div",{class:_(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[t?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(k,{active:t||p},{default:s(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(F,{element:"h5"},{default:s(()=>[l(" Add Photo ")]),_:1}),a(F,{element:"h6"},{default:s(()=>[e?(r(),c("ol",ia,[(r(!0),c(v,null,I(e,x=>(r(),c("li",null,h(x.name),1))),256))])):(r(),c(v,{key:0},[l(" Drag your document here or click "),o("a",{href:"#",onClick:A(D,["prevent"])},"Browse",8,ya)],64))]),_:2},1024),a(b,{bold:""},{default:s(()=>[l("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),Ca,a(y,{class:"flex-col items-stretch"},{default:s(()=>[a(w,{accept:"image/*",modelValue:n.value,"onUpdate:modelValue":C[0]||(C[0]=t=>n.value=t)},{default:s(({isDragover:t,isHovered:p,model:e,browse:D})=>[o("div",{class:_(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[t?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(k,{active:t||p},{default:s(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(F,{element:"h5"},{default:s(()=>[l(" Add Photo ")]),_:1}),a(F,{element:"h6"},{default:s(()=>[e?(r(),c(v,{key:1},[l(h(e.name),1)],64)):(r(),c(v,{key:0},[l(" Drag your document here or click "),o("a",{href:"#",onClick:A(D,["prevent"])},"Browse",8,Aa)],64))]),_:2},1024),a(b,{bold:""},{default:s(()=>[l("JPG & PNG up to 5MB")]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),ua,o("pre",ga,[o("code",null,h(n.value),1)]),ma,a(y,{class:"flex-col items-stretch"},{default:s(()=>[a(w,{accept:"image/*",modelValue:i.value,"onUpdate:modelValue":C[1]||(C[1]=t=>i.value=t),modelModifiers:{base64:!0}},{default:s(({isDragover:t,isHovered:p,rawModel:e,browse:D})=>[o("div",{class:_(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[t?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(k,{active:t||p},{default:s(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(F,{element:"h5"},{default:s(()=>[l(" Add Photo ")]),_:1}),a(F,{element:"h6"},{default:s(()=>[e?(r(),c(v,{key:1},[l(h(e.name),1)],64)):(r(),c(v,{key:0},[l(" Drag your document here or click "),o("a",{href:"#",onClick:A(D,["prevent"])},"Browse",8,ha)],64))]),_:2},1024),a(b,{bold:""},{default:s(()=>[l("JPG & PNG up to 5MB")]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),ba,o("pre",_a,[o("code",null,h(i.value),1)]),Ea])}}}),Ga=z(ka,[["__scopeId","data-v-f0370da8"]]);export{Ha as __pageData,Ga as default};
