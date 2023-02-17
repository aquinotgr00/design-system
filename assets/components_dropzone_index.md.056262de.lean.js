import{g as x,r as I,o,c as p,a,w as s,m as n,y as D,u as v,k as S,b as y,e as t,R as e,B as A,n as u,S as k,J as w,Z as B,$ as V}from"./app.b96ee9a3.js";import{p as g}from"./chunks/Dropzone.89131f7d.js";import{H as d}from"./chunks/Heading.ce2380b7.js";import{p as F}from"./chunks/Caption.7cd2c00e.js";import{p as h,I as M}from"./chunks/32.8da931de.js";import{u as N}from"./chunks/utils-6ba05f5b.7e2434e1.js";import"./chunks/index.bb7607a8.js";import"./chunks/index.8e95e3ae.js";import"./chunks/index.508c9306.js";import"./chunks/base64.9679b928.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.44027632.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.8a7f269e.js";var z=N,P=z.createSVGComponent(P,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},[{elem:"path",attrs:{d:"M19,14a3,3,0,1,0-3-3A3,3,0,0,0,19,14Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,19,10Z"}},{elem:"path",attrs:{d:"M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4Zm0,22H6V20l5-5,5.59,5.59a2,2,0,0,0,2.82,0L21,19l5,5Zm0-4.83-3.59-3.59a2,2,0,0,0-2.82,0L18,19.17l-5.59-5.59a2,2,0,0,0-2.82,0L6,17.17V6H26Z"}}]),G=P;const f=G;const T=_=>(B("data-v-2001cb20"),_=_(),V(),_),H=y("",4),j=["onClick"],U=y("",2),J=["onClick"],R=y("",3),O=["onClick"],L={key:1},Z=y("",3),W=["onClick"],X={key:1},$=y("",2),K=["onClick"],Q=T(()=>n("p",null,[n("strong",null,"result:")],-1)),Y={class:"truncate"},aa=y("",3),sa=["onClick"],ta=T(()=>n("p",null,[n("strong",null,"result:")],-1)),la={class:"truncate"},na=y("",3),ca=["onClick"],oa=y("",10),ma=JSON.parse(`{"title":"Dropzone · Components","description":"Headless component for Drag'n'Drop Files Upload.","frontmatter":{"title":"Dropzone · Components","description":"Headless component for Drag'n'Drop Files Upload."},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Upload Document","slug":"upload-document","link":"#upload-document","children":[]},{"level":3,"title":"Add Photo","slug":"add-photo","link":"#add-photo","children":[]}]},{"level":2,"title":"Multiple upload","slug":"multiple-upload","link":"#multiple-upload","children":[{"level":3,"title":"Appending values","slug":"appending-values","link":"#appending-values","children":[]}]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Encode to base64","slug":"encode-to-base64","link":"#encode-to-base64","children":[]},{"level":3,"title":"Clear on cancel","slug":"clear-on-cancel","link":"#clear-on-cancel","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/dropzone/index.md"}`),pa={name:"components/dropzone/index.md"},ea=Object.assign(pa,{setup(_){const q=x(),i=x();return(da,m)=>{const C=I("preview");return o(),p("div",null,[H,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"application/pdf"},{default:s(({isDragover:l,isHovered:r,model:c,browse:b})=>[n("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[l?"bg-accent border-accent-emphasis":"bg-subtle border-default"]])},[a(h,{active:l||r},{default:s(()=>[a(v(M),{class:"w-16 h-16 mt-5 fill-accent-emphasis"})]),_:2},1032,["active"]),a(d,{element:"h5"},{default:s(()=>[t(" Upload Document ")]),_:1}),a(d,{element:"h6"},{default:s(()=>[c?(o(),p(e,{key:1},[t(D(c.name),1)],64)):(o(),p(e,{key:0},[t(" Drag your document here or click "),n("a",{href:"#",onClick:A(b,["prevent"])},"Browse",8,j)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[t("PDF, DOC & DOCX up to 25MB each")]),_:1}),a(F,null,{default:s(()=>[t("10 documents max for multiple upload")]),_:1}),a(F,{class:"mt-16"},{default:s(()=>[t("PDF file format is recommended for a faster uploading process.")]),_:1})],2)]),_:1})]),_:1}),U,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*"},{default:s(({isDragover:l,isHovered:r,model:c,browse:b})=>[n("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[l?"bg-accent border-accent-emphasis":"bg-subtle border-default"]])},[a(h,{active:l||r},{default:s(()=>[a(v(f),{class:"w-16 h-16 mt-5 fill-accent-emphasis"})]),_:2},1032,["active"]),a(d,{element:"h5"},{default:s(()=>[t(" Add Photo ")]),_:1}),a(d,{element:"h6"},{default:s(()=>[c?(o(),p(e,{key:1},[t(D(c.name),1)],64)):(o(),p(e,{key:0},[t(" Drag your document here or click "),n("a",{href:"#",onClick:A(b,["prevent"])},"Browse",8,J)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[t("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),R,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",multiple:"",maxlength:"5"},{default:s(({isDragover:l,isHovered:r,model:c,browse:b})=>[n("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[l?"bg-accent border-accent-emphasis":"bg-subtle border-default"]])},[a(h,{active:l||r},{default:s(()=>[a(v(f),{class:"w-16 h-16 mt-5 fill-accent-emphasis"})]),_:2},1032,["active"]),a(d,{element:"h5"},{default:s(()=>[t(" Add Photo ")]),_:1}),a(d,{element:"h6"},{default:s(()=>[c?(o(),p("ol",L,[(o(!0),p(e,null,k(c,E=>(o(),p("li",null,D(E.name),1))),256))])):(o(),p(e,{key:0},[t(" Drag your document here or click "),n("a",{href:"#",onClick:A(b,["prevent"])},"Browse",8,O)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[t("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),Z,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",multiple:"append",maxlength:"10"},{default:s(({isDragover:l,isHovered:r,model:c,browse:b})=>[n("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[l?"bg-accent border-accent-emphasis":"bg-subtle border-default"]])},[a(h,{active:l||r},{default:s(()=>[a(v(f),{class:"w-16 h-16 mt-5 fill-accent-emphasis"})]),_:2},1032,["active"]),a(d,{element:"h5"},{default:s(()=>[t(" Add Photo ")]),_:1}),a(d,{element:"h6"},{default:s(()=>[c?(o(),p("ol",X,[(o(!0),p(e,null,k(c,E=>(o(),p("li",null,D(E.name),1))),256))])):(o(),p(e,{key:0},[t(" Drag your document here or click "),n("a",{href:"#",onClick:A(b,["prevent"])},"Browse",8,W)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[t("JPG & PNG up to 5MB")]),_:1})],2)]),_:1})]),_:1}),$,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",modelValue:v(q),"onUpdate:modelValue":m[0]||(m[0]=l=>w(q)?q.value=l:null)},{default:s(({isDragover:l,isHovered:r,model:c,browse:b})=>[n("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[l?"bg-accent border-accent-emphasis":"bg-subtle border-default"]])},[a(h,{active:l||r},{default:s(()=>[a(v(f),{class:"w-16 h-16 mt-5 fill-accent-emphasis"})]),_:2},1032,["active"]),a(d,{element:"h5"},{default:s(()=>[t(" Add Photo ")]),_:1}),a(d,{element:"h6"},{default:s(()=>[c?(o(),p(e,{key:1},[t(D(c.name),1)],64)):(o(),p(e,{key:0},[t(" Drag your document here or click "),n("a",{href:"#",onClick:A(b,["prevent"])},"Browse",8,K)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[t("JPG & PNG up to 5MB")]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),Q,n("pre",Y,[n("code",null,D(v(q)),1)]),aa,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",modelValue:v(i),"onUpdate:modelValue":m[1]||(m[1]=l=>w(i)?i.value=l:null),modelModifiers:{base64:!0}},{default:s(({isDragover:l,isHovered:r,rawModel:c,browse:b})=>[n("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[l?"bg-accent border-accent-emphasis":"bg-subtle border-default"]])},[a(h,{active:l||r},{default:s(()=>[a(v(f),{class:"w-16 h-16 mt-5 fill-accent-emphasis"})]),_:2},1032,["active"]),a(d,{element:"h5"},{default:s(()=>[t(" Add Photo ")]),_:1}),a(d,{element:"h6"},{default:s(()=>[c?(o(),p(e,{key:1},[t(D(c.name),1)],64)):(o(),p(e,{key:0},[t(" Drag your document here or click "),n("a",{href:"#",onClick:A(b,["prevent"])},"Browse",8,sa)],64))]),_:2},1024),a(F,{weight:"bold"},{default:s(()=>[t("JPG & PNG up to 5MB")]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),ta,n("pre",la,[n("code",null,D(v(i)),1)]),na,a(C,{class:"flex-col items-stretch"},{default:s(()=>[a(g,{accept:"image/*",modelValue:v(i),"onUpdate:modelValue":m[2]||(m[2]=l=>w(i)?i.value=l:null),modelModifiers:{base64:!0},"clear-on-cancel":""},{default:s(({isDragover:l,isHovered:r,rawModel:c,browse:b})=>[n("div",{class:u(["flex flex-col items-center justify-center w-full p-5 space-y-3 border-2 border-dashed rounded",[l?"bg-accent border-accent-emphasis":"bg-subtle border-secondary-25"]])},[a(h,{active:l||r},{default:s(()=>[a(v(f),{class:"w-16 h-16 mt-5 fill-accent-emphasis"})]),_:2},1032,["active"]),a(d,{element:"h5"},{default:s(()=>[t(" Add Photo ")]),_:1}),a(d,{element:"h6"},{default:s(()=>[c?(o(),p(e,{key:1},[t(D(c.name),1)],64)):(o(),p(e,{key:0},[t(" Drag your document here or click "),n("a",{href:"#",onClick:A(b,["prevent"])},"Browse",8,ca)],64))]),_:2},1024),a(F,{bold:""},{default:s(()=>[t("JPG & PNG up to 5MB")]),_:1})],2)]),_:1},8,["modelValue"])]),_:1}),oa])}}}),fa=S(ea,[["__scopeId","data-v-2001cb20"]]);export{ma as __pageData,fa as default};
