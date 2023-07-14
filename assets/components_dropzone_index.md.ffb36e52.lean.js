import{_ as I,j as w,D as S,c as n,G as a,B as s,z as d,t as v,e as D,R as y,o,a as e,F as b,a2 as A,n as u,N as x,a5 as E,O as B,Q as V}from"./chunks/framework.1cabf72c.js";import{p as g}from"./chunks/Dropzone.abdbaf09.js";import{H as p}from"./chunks/Heading.3e74b831.js";import{p as F}from"./chunks/Caption.c12a2100.js";import{p as f,I as z}from"./chunks/32.144b96a8.js";import{g as N}from"./chunks/commonjsHelpers.042e6b4d.js";import{u as M}from"./chunks/utils-6ba05f5b.0166e5c7.js";import"./chunks/index.f6017335.js";import"./chunks/index.c4b65e70.js";import"./chunks/index.69675e13.js";import"./chunks/base64.041d95b4.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.4ed993c7.js";var G=M,P=G.createSVGComponent(P,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},[{elem:"path",attrs:{d:"M19,14a3,3,0,1,0-3-3A3,3,0,0,0,19,14Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,19,10Z"}},{elem:"path",attrs:{d:"M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4Zm0,22H6V20l5-5,5.59,5.59a2,2,0,0,0,2.82,0L21,19l5,5Zm0-4.83-3.59-3.59a2,2,0,0,0-2.82,0L18,19.17l-5.59-5.59a2,2,0,0,0-2.82,0L6,17.17V6H26Z"}}]),H=P;const h=N(H);const T=k=>(B("data-v-bd99eb87"),k=k(),V(),k),j=y("",4),U=["onClick"],J=y("",2),R=["onClick"],O=y("",3),L=["onClick"],Z={key:1},W=y("",3),X=["onClick"],Q={key:1},K=y("",2),Y=["onClick"],$=T(()=>d("p",null,[d("strong",null,"result:")],-1)),aa={class:"truncate"},sa=y("",3),ea=["onClick"],ta=T(()=>d("p",null,[d("strong",null,"result:")],-1)),da={class:"truncate"},la=y("",3),na=["onClick"],oa=y("",10),ka=JSON.parse(`{"title":"Dropzone · Components","description":"Headless component for Drag'n'Drop Files Upload.","frontmatter":{"title":"Dropzone · Components","description":"Headless component for Drag'n'Drop Files Upload."},"headers":[],"relativePath":"components/dropzone/index.md","filePath":"components/dropzone/index.md"}`),ba={name:"components/dropzone/index.md"},pa=Object.assign(ba,{setup(k){const q=w(),i=w();return(ra,m)=>{const C=S("preview");return o(),n("div",null,[j,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"application/pdf"},{default:s(({isDragover:t,isHovered:r,model:l,browse:c})=>[d("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[t?"bg-info dark:bg-dark-info border-info-emphasis dark:border-dark-info-emphasis":"bg-default dark:bg-dark-default border-default dark:border-dark-default"]])},[a(f,{active:t||r},{default:s(()=>[a(D(z),{class:"w-16 h-16 mt-5 fill-info-emphasis dark:fill-dark-info-emphasis"})]),_:2},1032,["active"]),a(p,{element:"h5"},{default:s(()=>[e(" Upload Document ")]),_:1}),a(p,{element:"h6"},{default:s(()=>[l?(o(),n(b,{key:1},[e(v(l.name),1)],64)):(o(),n(b,{key:0},[e(" Drag your document here or click "),d("a",{href:"#",onClick:A(c,["prevent"])},"Browse",8,U)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[e("PDF, DOC & DOCX up to 25MB each")]),_:1}),a(F,null,{default:s(()=>[e("10 documents max for multiple upload")]),_:1}),a(F,{class:"mt-16"},{default:s(()=>[e("PDF file format is recommended for a faster uploading process.")]),_:1})],2)]),_:1})]),_:1}),J,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*"},{default:s(({isDragover:t,isHovered:r,model:l,browse:c})=>[d("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[t?"bg-info dark:bg-dark-info border-info-emphasis dark:border-dark-info-emphasis":"bg-default dark:bg-dark-default border-default dark:border-dark-default"]])},[a(f,{active:t||r},{default:s(()=>[a(D(h),{class:"w-16 h-16 mt-5 fill-info-emphasis dark:fill-dark-info-emphasis"})]),_:2},1032,["active"]),a(p,{element:"h5"},{default:s(()=>[e(" Add Photo ")]),_:1}),a(p,{element:"h6"},{default:s(()=>[l?(o(),n(b,{key:1},[e(v(l.name),1)],64)):(o(),n(b,{key:0},[e(" Drag your document here or click "),d("a",{href:"#",onClick:A(c,["prevent"])},"Browse",8,R)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[e("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),O,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",multiple:"",maxlength:"5"},{default:s(({isDragover:t,isHovered:r,model:l,browse:c})=>[d("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[t?"bg-info dark:bg-dark-info border-info-emphasis dark:border-dark-info-emphasis":"bg-default dark:bg-dark-default border-default dark:border-dark-default"]])},[a(f,{active:t||r},{default:s(()=>[a(D(h),{class:"w-16 h-16 mt-5 fill-info-emphasis dark:fill-dark-info-emphasis"})]),_:2},1032,["active"]),a(p,{element:"h5"},{default:s(()=>[e(" Add Photo ")]),_:1}),a(p,{element:"h6"},{default:s(()=>[l?(o(),n("ol",Z,[(o(!0),n(b,null,x(l,_=>(o(),n("li",null,v(_.name),1))),256))])):(o(),n(b,{key:0},[e(" Drag your document here or click "),d("a",{href:"#",onClick:A(c,["prevent"])},"Browse",8,L)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[e("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),W,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",multiple:"append",maxlength:"10"},{default:s(({isDragover:t,isHovered:r,model:l,browse:c})=>[d("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[t?"bg-info dark:bg-dark-info border-info-emphasis dark:border-dark-info-emphasis":"bg-default dark:bg-dark-default border-default dark:border-dark-default"]])},[a(f,{active:t||r},{default:s(()=>[a(D(h),{class:"w-16 h-16 mt-5 fill-info-emphasis dark:fill-dark-info-emphasis"})]),_:2},1032,["active"]),a(p,{element:"h5"},{default:s(()=>[e(" Add Photo ")]),_:1}),a(p,{element:"h6"},{default:s(()=>[l?(o(),n("ol",Q,[(o(!0),n(b,null,x(l,_=>(o(),n("li",null,v(_.name),1))),256))])):(o(),n(b,{key:0},[e(" Drag your document here or click "),d("a",{href:"#",onClick:A(c,["prevent"])},"Browse",8,X)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[e("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),K,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",modelValue:D(q),"onUpdate:modelValue":m[0]||(m[0]=t=>E(q)?q.value=t:null)},{default:s(({isDragover:t,isHovered:r,model:l,browse:c})=>[d("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[t?"bg-info dark:bg-dark-info border-info-emphasis dark:border-dark-info-emphasis":"bg-default dark:bg-dark-default border-default dark:border-dark-default"]])},[a(f,{active:t||r},{default:s(()=>[a(D(h),{class:"w-16 h-16 mt-5 fill-info-emphasis dark:fill-dark-info-emphasis"})]),_:2},1032,["active"]),a(p,{element:"h5"},{default:s(()=>[e(" Add Photo ")]),_:1}),a(p,{element:"h6"},{default:s(()=>[l?(o(),n(b,{key:1},[e(v(l.name),1)],64)):(o(),n(b,{key:0},[e(" Drag your document here or click "),d("a",{href:"#",onClick:A(c,["prevent"])},"Browse",8,Y)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[e("JPG & PNG up to 5MB")]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),$,d("pre",aa,[d("code",null,v(D(q)),1)]),sa,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",modelValue:D(i),"onUpdate:modelValue":m[1]||(m[1]=t=>E(i)?i.value=t:null),modelModifiers:{base64:!0}},{default:s(({isDragover:t,isHovered:r,rawModel:l,browse:c})=>[d("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[t?"bg-info dark:bg-dark-info border-info-emphasis dark:border-dark-info-emphasis":"bg-default dark:bg-dark-default border-default dark:border-dark-default"]])},[a(f,{active:t||r},{default:s(()=>[a(D(h),{class:"w-16 h-16 mt-5 fill-info-emphasis dark:fill-dark-info-emphasis"})]),_:2},1032,["active"]),a(p,{element:"h5"},{default:s(()=>[e(" Add Photo ")]),_:1}),a(p,{element:"h6"},{default:s(()=>[l?(o(),n(b,{key:1},[e(v(l.name),1)],64)):(o(),n(b,{key:0},[e(" Drag your document here or click "),d("a",{href:"#",onClick:A(c,["prevent"])},"Browse",8,ea)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[e("JPG & PNG up to 5MB")]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),ta,d("pre",da,[d("code",null,v(D(i)),1)]),la,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",modelValue:D(i),"onUpdate:modelValue":m[2]||(m[2]=t=>E(i)?i.value=t:null),modelModifiers:{base64:!0},"clear-on-cancel":""},{default:s(({isDragover:t,isHovered:r,rawModel:l,browse:c})=>[d("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[t?"bg-info dark:bg-dark-info border-info-emphasis dark:border-dark-info-emphasis":"bg-default dark:bg-dark-default border-default dark:border-dark-default"]])},[a(f,{active:t||r},{default:s(()=>[a(D(h),{class:"w-16 h-16 mt-5 fill-info-emphasis dark:fill-dark-info-emphasis"})]),_:2},1032,["active"]),a(p,{element:"h5"},{default:s(()=>[e(" Add Photo ")]),_:1}),a(p,{element:"h6"},{default:s(()=>[l?(o(),n(b,{key:1},[e(v(l.name),1)],64)):(o(),n(b,{key:0},[e(" Drag your document here or click "),d("a",{href:"#",onClick:A(c,["prevent"])},"Browse",8,na)],64))]),_:2},1024),a(F,{bold:""},{default:s(()=>[e("JPG & PNG up to 5MB")]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),oa])}}}),qa=I(pa,[["__scopeId","data-v-bd99eb87"]]);export{ka as __pageData,qa as default};
