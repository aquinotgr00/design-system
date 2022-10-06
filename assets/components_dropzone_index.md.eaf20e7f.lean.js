import{f as j,g as T,Z as L,B as $,h as R,G as U,_ as M,o as r,c,a as o,$ as J,r as O,n as b,y as g,b as Z,d as a,w as e,t as f,e as E,u as q,O as A,k as n,P as I,Q as W,R as X}from"./app.18e941ec.js";import{t as Q}from"./chunks/index.edfdf1b5.js";import{u as K}from"./chunks/use-input.4d441b5c.js";import{H as u}from"./chunks/Heading.34a96b31.js";import{C as _}from"./chunks/Caption.28cacd24.js";import{p as w,I as Y}from"./chunks/32.698053d1.js";import{u as aa}from"./chunks/utils-6ba05f5b.d06b2a45.js";function sa(t,d){return t?d.filter(C=>{const D=String(C.name).toLowerCase(),y=String(C.type).toLowerCase();return t.split(",").some(s=>{const l=s.trim().toLowerCase();return l.charAt(0)==="."?D.endsWith(l):l.endsWith("/*")?y.replace(/\/.*$/,"")===l.replace(/\/.*$/,""):y===l})}):d}function V(t){return new Promise((d,C)=>{const D=new FileReader,y=()=>{s(),d(D.result)},v=l=>{s(),C(l)},s=()=>{D.removeEventListener("load",y),D.removeEventListener("error",v)};D.readAsDataURL(t),D.addEventListener("load",y),D.addEventListener("error",v)})}const ea=globalThis.File,ta=j({props:{modelValue:{type:[ea,Array,String],default:void 0},modelModifiers:{type:Object,default:()=>({})},multiple:{type:[Boolean,String],default:!1},maxlength:{type:[Number,String],default:void 0},accept:{type:String,default:""}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change","cancel"],setup(t,{emit:d}){const C=T(),D=K(t),y=Q("input"),v=L($(t,"maxlength"),{method:"parseInt"}),s=T(!1),l=T(!1),p=R(()=>{const F=[];return s.value&&F.push("dropzone--dragover"),l.value&&F.push("dropzone--hover"),F});function i(){y.value.click()}function x(F){const m=F.dataTransfer.files;s.value=!1,S(m)}function H(F){const m=F.target,B=m.files;S(B),t.multiple==="append"&&U(()=>{m.value=""})}function G(F){return Array.isArray(F)?Promise.all(F.map(m=>V(m))):V(F)}async function S(F){if(F.length>0){const m=sa(t.accept,Array.from(F)),B=t.multiple!==!1?m:m.at(0);let h=B;t.multiple==="append"&&Array.isArray(D.value)&&(h=[...D.value,...h]),Number.isInteger(v.value)&&Array.isArray(h)&&(h=h.slice(0,v.value)),C.value=h,t.modelModifiers.base64&&(h=await G(B)),D.value=h,d("change",h)}else d("cancel")}return{classNames:p,browse:i,isDragover:s,isHovered:l,model:D,rawModel:C,onDrop:x,onChange:H}}});const da=["multiple","accept"];function na(t,d,C,D,y,v){return r(),c("label",{class:b(["dropzone",t.classNames]),"data-testid":"dropzone",onDrop:d[1]||(d[1]=g((...s)=>t.onDrop&&t.onDrop(...s),["prevent"])),onDragover:d[2]||(d[2]=g(()=>{},["prevent"])),onDragenter:d[3]||(d[3]=g(s=>t.isDragover=!0,["prevent"])),onDragleave:d[4]||(d[4]=g(s=>t.isDragover=!1,["prevent"])),onMouseover:d[5]||(d[5]=s=>t.isHovered=!0),onMouseout:d[6]||(d[6]=s=>t.isHovered=!1)},[o("input",J({ref:"input","data-testid":"dropzone-input",class:"dropzone__input",type:"file",multiple:t.multiple!==!1,accept:t.accept},t.$attrs,{onChange:d[0]||(d[0]=(...s)=>t.onChange&&t.onChange(...s))}),null,16,da),O(t.$slots,"default",{isDragover:t.isDragover,isHovered:t.isHovered,model:t.model,rawModel:t.rawModel,browse:t.browse})],34)}const k=M(ta,[["render",na]]);var la=aa,N=la.createSVGComponent(N,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},[{elem:"path",attrs:{d:"M19,14a3,3,0,1,0-3-3A3,3,0,0,0,19,14Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,19,10Z"}},{elem:"path",attrs:{d:"M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4Zm0,22H6V20l5-5,5.59,5.59a2,2,0,0,0,2.82,0L21,19l5,5Zm0-4.83-3.59-3.59a2,2,0,0,0-2.82,0L18,19.17l-5.59-5.59a2,2,0,0,0-2.82,0L6,17.17V6H26Z"}}]),oa=N;const P=oa;const z=t=>(W("data-v-009a77ed"),t=t(),X(),t),pa=E("",4),ra=n(" Upload Document "),ca=n(" Drag your document here or click "),Da=["onClick"],va=n("PDF, DOC & DOCX up to 25MB each"),Fa=n("10 documents max for multiple upload"),ya=n("PDF file format is recommended for a faster uploading process."),ia=E("",2),Ca=n(" Add Photo "),Aa=n(" Drag your document here or click "),ua=["onClick"],ga=n("JPG & PNG up to 5MB"),ma=E("",3),ha=n(" Add Photo "),fa=n(" Drag your document here or click "),_a=["onClick"],ba={key:1},Ea=n("JPG & PNG up to 5MB"),qa=E("",3),wa=n(" Add Photo "),ka=n(" Drag your document here or click "),xa=["onClick"],Pa={key:1},Ta=n("JPG & PNG up to 5MB"),Ba=E("",2),Sa=n(" Add Photo "),Ia=n(" Drag your document here or click "),Va=["onClick"],Ma=n("JPG & PNG up to 5MB"),Na=z(()=>o("p",null,[o("strong",null,"result:")],-1)),za={class:"truncate"},Ha=E("",3),Ga=n(" Add Photo "),ja=n(" Drag your document here or click "),La=["onClick"],$a=n("JPG & PNG up to 5MB"),Ra=z(()=>o("p",null,[o("strong",null,"result:")],-1)),Ua={class:"truncate"},Ja=E("",8),es=JSON.parse('{"title":"Dropzone","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Upload Document","slug":"upload-document","link":"#upload-document","children":[]},{"level":3,"title":"Add Photo","slug":"add-photo","link":"#add-photo","children":[]}]},{"level":2,"title":"Multiple upload","slug":"multiple-upload","link":"#multiple-upload","children":[{"level":3,"title":"Appending values","slug":"appending-values","link":"#appending-values","children":[]}]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Encode to base64","slug":"encode-to-base64","link":"#encode-to-base64","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/dropzone/index.md"}'),Oa={name:"components/dropzone/index.md"},Za=Object.assign(Oa,{setup(t){const d=T(),C=T();return(D,y)=>{const v=Z("preview");return r(),c("div",null,[pa,a(v,{class:"flex-col items-stretch"},{default:e(()=>[a(k,{accept:"application/pdf"},{default:e(({isDragover:s,isHovered:l,model:p,browse:i})=>[o("div",{class:b(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[s?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(w,{active:s||l},{default:e(()=>[a(q(Y),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(u,{element:"h5"},{default:e(()=>[ra]),_:1}),a(u,{element:"h6"},{default:e(()=>[p?(r(),c(A,{key:1},[n(f(p.name),1)],64)):(r(),c(A,{key:0},[ca,o("a",{href:"#",onClick:g(i,["prevent"])},"Browse",8,Da)],64))]),_:2},1024),a(_,{bold:""},{default:e(()=>[va]),_:1}),a(_,null,{default:e(()=>[Fa]),_:1}),a(_,{class:"mt-16 text-sm"},{default:e(()=>[ya]),_:1})],2)]),_:1})]),_:1}),ia,a(v,{class:"flex-col items-stretch"},{default:e(()=>[a(k,{accept:"image/*"},{default:e(({isDragover:s,isHovered:l,model:p,browse:i})=>[o("div",{class:b(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[s?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(w,{active:s||l},{default:e(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(u,{element:"h5"},{default:e(()=>[Ca]),_:1}),a(u,{element:"h6"},{default:e(()=>[p?(r(),c(A,{key:1},[n(f(p.name),1)],64)):(r(),c(A,{key:0},[Aa,o("a",{href:"#",onClick:g(i,["prevent"])},"Browse",8,ua)],64))]),_:2},1024),a(_,{bold:""},{default:e(()=>[ga]),_:1})],2)]),_:1})]),_:1}),ma,a(v,{class:"flex-col items-stretch"},{default:e(()=>[a(k,{accept:"image/*",multiple:"",maxlength:"5"},{default:e(({isDragover:s,isHovered:l,model:p,browse:i})=>[o("div",{class:b(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[s?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(w,{active:s||l},{default:e(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(u,{element:"h5"},{default:e(()=>[ha]),_:1}),a(u,{element:"h6"},{default:e(()=>[p?(r(),c("ol",ba,[(r(!0),c(A,null,I(p,x=>(r(),c("li",null,f(x.name),1))),256))])):(r(),c(A,{key:0},[fa,o("a",{href:"#",onClick:g(i,["prevent"])},"Browse",8,_a)],64))]),_:2},1024),a(_,{bold:""},{default:e(()=>[Ea]),_:1})],2)]),_:1})]),_:1}),qa,a(v,{class:"flex-col items-stretch"},{default:e(()=>[a(k,{accept:"image/*",multiple:"append",maxlength:"10"},{default:e(({isDragover:s,isHovered:l,model:p,browse:i})=>[o("div",{class:b(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[s?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(w,{active:s||l},{default:e(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(u,{element:"h5"},{default:e(()=>[wa]),_:1}),a(u,{element:"h6"},{default:e(()=>[p?(r(),c("ol",Pa,[(r(!0),c(A,null,I(p,x=>(r(),c("li",null,f(x.name),1))),256))])):(r(),c(A,{key:0},[ka,o("a",{href:"#",onClick:g(i,["prevent"])},"Browse",8,xa)],64))]),_:2},1024),a(_,{bold:""},{default:e(()=>[Ta]),_:1})],2)]),_:1})]),_:1}),Ba,a(v,{class:"flex-col items-stretch"},{default:e(()=>[a(k,{accept:"image/*",modelValue:d.value,"onUpdate:modelValue":y[0]||(y[0]=s=>d.value=s)},{default:e(({isDragover:s,isHovered:l,model:p,browse:i})=>[o("div",{class:b(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[s?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(w,{active:s||l},{default:e(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(u,{element:"h5"},{default:e(()=>[Sa]),_:1}),a(u,{element:"h6"},{default:e(()=>[p?(r(),c(A,{key:1},[n(f(p.name),1)],64)):(r(),c(A,{key:0},[Ia,o("a",{href:"#",onClick:g(i,["prevent"])},"Browse",8,Va)],64))]),_:2},1024),a(_,{bold:""},{default:e(()=>[Ma]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),Na,o("pre",za,[o("code",null,f(d.value),1)]),Ha,a(v,{class:"flex-col items-stretch"},{default:e(()=>[a(k,{accept:"image/*",modelValue:C.value,"onUpdate:modelValue":y[1]||(y[1]=s=>C.value=s),modelModifiers:{base64:!0}},{default:e(({isDragover:s,isHovered:l,rawModel:p,browse:i})=>[o("div",{class:b(["flex flex-col items-center justify-center w-full gap-3 p-5 border-2 border-dashed rounded",[s?"bg-primary-5 border-primary-100":"bg-background-100 border-secondary-25"]])},[a(w,{active:s||l},{default:e(()=>[a(q(P),{class:"w-16 h-16 mt-5 fill-primary-100"})]),_:2},1032,["active"]),a(u,{element:"h5"},{default:e(()=>[Ga]),_:1}),a(u,{element:"h6"},{default:e(()=>[p?(r(),c(A,{key:1},[n(f(p.name),1)],64)):(r(),c(A,{key:0},[ja,o("a",{href:"#",onClick:g(i,["prevent"])},"Browse",8,La)],64))]),_:2},1024),a(_,{bold:""},{default:e(()=>[$a]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),Ra,o("pre",Ua,[o("code",null,f(C.value),1)]),Ja])}}}),ts=M(Za,[["__scopeId","data-v-009a77ed"]]);export{es as __pageData,ts as default};
