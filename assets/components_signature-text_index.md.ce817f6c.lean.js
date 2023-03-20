import"./chunks/Input.vue_vue_type_style_index_0_lang.88318e03.js";import{u as A}from"./chunks/index.844a1c65.js";import{c as b}from"./chunks/create-image.28dfb74f.js";import{l as v}from"./chunks/load-font.6bde320a.js";import{u as E}from"./chunks/index.330cccbe.js";import{f as T}from"./chunks/base64.041d95b4.js";import{f as q,g,h as m,i as S,j as w,k as I,o as f,c as x,r as V,a as t,w as y,m as o,y as _,u as h,b as d,e as u,L as C}from"./app.a078ce8a.js";import"./chunks/utils-6ba05f5b.ef331327.js";import"./chunks/index.5958e170.js";import"./chunks/avatar.bd58a373.js";import"./chunks/color-hash.af77277d.js";function k(s){return String(s).toLowerCase().replace(/^\w|([\s,.])(\w)/gm,e=>e.toUpperCase())}function L(s){return s?k(String(s).trim().replace(/[^\s,.A-Za-z]+/g,"")):""}function N(s,e){const a=document.createElement("canvas");return a.width=s,a.height=e,a}async function P(s){await v(s.font);const e=s.text,a=s.width,r=s.height,c=s.color,n=s.font,i=N(a,r),p=i.getContext("2d");p.fillStyle=c,p.font=`100px ${n}`,p.textBaseline="middle";let D=100,F=p.measureText(e);return F.width>a?(D=Math.floor(D/F.width*(a-16)),p.font=`${D}px ${n}`,F=p.measureText(e)):D>=r&&(D=r-16,p.font=`${D}px ${n}`,F=p.measureText(e)),p.fillText(e,(a-F.width)/2,r/2+16),i.toDataURL()}const B=q({props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},width:{type:Number,default:430},height:{type:Number,default:230},text:{type:String,default:""},limit:{type:Number,default:2},font:{type:String,default:"Herr Von Muellerhoff"},color:{type:String,default:"#000000"}},setup(s){const e=g(!1),a=A(s),r=E(a),c=m(()=>e.value?r.value:b(s.width,s.height)),n=m(()=>s.text?L(String(s.text).split(" ").filter(Boolean).slice(0,s.limit).join(" ")):"- No Image -");S(()=>[s.text,s.font,s.color,s.width,s.height,s.limit],()=>{i()}),w(()=>{i()});function i(){e.value=!1;const p={text:n.value,font:s.font,width:s.width,height:s.height,color:s.color};P(p).then(D=>{const F=s.modelModifiers.base64?D:T(D);a.value=F,e.value=!0}).catch(console.error)}return{src:c,preview:r}}});const R=["width","height","src"];function M(s,e,a,r,c,n){return f(),x("img",{"data-testid":"signature-text",class:"signature--text",width:s.width,height:s.height,src:s.src},null,8,R)}const l=I(B,[["render",M]]),$=d("",4),U=d("",2),G=d("",3),H=d("",3),j=d("",2),z=d("",3),O=d("",2),W={class:"truncate"},Y=o("h3",{id:"encode-to-base64",tabindex:"-1"},[u("Encode to base64 "),o("a",{class:"header-anchor",href:"#encode-to-base64","aria-hidden":"true"},"#")],-1),J=o("p",null,[u("If you prefer "),o("a",{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noreferrer"},"base64-dataURI"),u(" format, add modifier "),o("code",null,".base64"),u(" to your "),o("code",null,"v-model"),u(".")],-1),Z=o("p",null,[o("strong",null,"result")],-1),K={class:"truncate"},Q=d("",8),Ds=JSON.parse('{"title":"Signature Text · Components","description":"Generate text to signature image","frontmatter":{"title":"Signature Text · Components","description":"Generate text to signature image"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"for Initial","slug":"for-initial","link":"#for-initial","children":[]}]},{"level":2,"title":"Change Font","slug":"change-font","link":"#change-font","children":[]},{"level":2,"title":"Limit Word","slug":"limit-word","link":"#limit-word","children":[]},{"level":2,"title":"Color","slug":"color","link":"#color","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Encode to base64","slug":"encode-to-base64","link":"#encode-to-base64","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/signature-text/index.md"}'),X={name:"components/signature-text/index.md"},ds=Object.assign(X,{setup(s){const e=g(),a=g();return(r,c)=>{const n=V("preview");return f(),x("div",null,[$,t(n,{class:"flex-col"},{default:y(()=>[t(l,{text:"Lorem Ipsum"})]),_:1}),U,t(n,{class:"flex-col"},{default:y(()=>[t(l,{text:"Lorem Ipsum",width:230,limit:1})]),_:1}),G,t(n,{class:"flex-col"},{default:y(()=>[t(l,{text:"Lorem Ipsum",font:"Herr Von Muellerhoff"}),t(l,{text:"Lorem Ipsum",font:"Satisfy"})]),_:1}),H,t(n,{class:"flex-col"},{default:y(()=>[t(l,{text:"Lorem ipsum dolor sit amet",limit:3}),t(l,{text:"Lorem ipsum dolor sit amet",limit:2}),t(l,{text:"Lorem ipsum dolor sit amet",limit:1})]),_:1}),j,t(n,{class:"flex-col"},{default:y(()=>[t(l,{text:"Lorem ipsum",color:"#004C9D"}),t(l,{text:"Lorem ipsum",color:"#23B242"}),t(l,{text:"Lorem ipsum",color:"#E42E2C"})]),_:1}),z,t(n,{class:"flex-col"},{default:y(()=>[t(l,{text:"Lorem ipsum",modelValue:h(e),"onUpdate:modelValue":c[0]||(c[0]=i=>C(e)?e.value=i:null)},null,8,["modelValue"])]),_:1}),O,o("pre",W,[o("code",null,_(h(e)),1)]),Y,J,t(n,{class:"flex-col"},{default:y(()=>[t(l,{text:"Lorem ipsum",modelValue:h(a),"onUpdate:modelValue":c[1]||(c[1]=i=>C(a)?a.value=i:null),modelModifiers:{base64:!0}},null,8,["modelValue"])]),_:1}),Z,o("pre",K,[o("code",null,_(h(a)),1)]),Q])}}});export{Ds as __pageData,ds as default};
