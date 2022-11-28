import{d as u,p as n}from"./chunks/Table.93e3557c.js";import{B as m}from"./chunks/Badge.0b586ab6.js";import{j as y,r as g,o as b,c as f,a as s,w as a,h as r,y as i,b as o,e as D,u as p}from"./app.9fa2f258.js";import"./chunks/startCase.ede24ebf.js";import"./chunks/toString.11fb0831.js";import"./chunks/isObjectLike.bee3dca1.js";import"./chunks/isArray.81deb5cd.js";import"./chunks/isSymbol.467490bf.js";import"./chunks/Checkbox.5294123a.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.03850038.js";import"./chunks/index.c139ebaa.js";import"./chunks/value.27565d8f.js";import"./chunks/index.6f44f4cd.js";import"./chunks/utils-6ba05f5b.6586f662.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.674450b1.js";const v=o("",3),E=o("",2),T=o("",3),q=o("",3),x=o("",3),S=o("",2),k=r("h3",{id:"disabling-some-item",tabindex:"-1"},[D("Disabling some item "),r("a",{class:"header-anchor",href:"#disabling-some-item","aria-hidden":"true"},"#")],-1),V=r("p",null,[D("set "),r("code",null,"_selectable"),D(" to "),r("code",null,"false"),D(" in your items to disabled item from selection.")],-1),P=o("",3),I=o("",3),j=o("",2),N=o("",8),$=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"Custom Label + Formatter","slug":"custom-label-formatter","link":"#custom-label-formatter","children":[]}]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":2,"title":"Selectable","slug":"selectable","link":"#selectable","children":[{"level":3,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":3,"title":"Disabling some item","slug":"disabling-some-item","link":"#disabling-some-item","children":[]}]},{"level":2,"title":"Draggable","slug":"draggable","link":"#draggable","children":[]},{"level":2,"title":"Customization Slot","slug":"customization-slot","link":"#customization-slot","children":[{"level":3,"title":"Custom Cell","slug":"custom-cell","link":"#custom-cell","children":[]},{"level":3,"title":"Custom Head","slug":"custom-head","link":"#custom-head","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/table/index.md"}'),B={name:"components/table/index.md"},ss=Object.assign(B,{setup(R){const e=u(["id","name","status"]),h=u([{key:"id",label:"PrivyID"},{key:"name",label:"Name"},{key:"status",label:"Is Active",formatter:d=>d?"Active":"Deactive"}]),l=y([{id:1,name:"Tarjono",status:!0},{id:2,name:"Tarjono",status:!1},{id:3,name:"Tarjono",status:!0},{id:4,name:"Tarjono",status:!0}]),_=y([{id:1,name:"Tarjono",status:!0},{id:2,name:"Tarjono",status:!1},{id:3,name:"Tarjono",status:!0},{id:4,name:"Can't be selected",status:!0,_selectable:!1}]),C=y([]),A=y([]);return(d,F)=>{const t=g("preview");return b(),f("div",null,[v,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{fields:p(e),items:l.value},null,8,["fields","items"])]),_:1}),E,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{fields:p(h),items:l.value},null,8,["fields","items"])]),_:1}),T,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{variant:"flexible",fields:p(e),items:l.value},null,8,["fields","items"]),s(n,{variant:"static",fields:p(e),items:l.value},null,8,["fields","items"])]),_:1}),q,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{selectable:"",fields:p(e),items:l.value},null,8,["fields","items"])]),_:1}),x,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{modelValue:C.value,"onUpdate:modelValue":F[0]||(F[0]=c=>C.value=c),selectable:"",fields:p(e),items:l.value},null,8,["modelValue","fields","items"])]),_:1}),S,r("pre",null,[r("code",null,i(C.value),1)]),k,V,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{modelValue:A.value,"onUpdate:modelValue":F[1]||(F[1]=c=>A.value=c),selectable:"",fields:p(e),items:_.value},null,8,["modelValue","fields","items"])]),_:1}),P,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{fields:p(e),items:l.value,"onUpdate:items":F[2]||(F[2]=c=>l.value=c),draggable:""},null,8,["fields","items"])]),_:1}),I,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{fields:p(e),items:l.value},{"cell(status)":a(({item:c})=>[s(m,null,{default:a(()=>[D(i(c.status?"active":"inactive"),1)]),_:2},1024)]),_:1},8,["fields","items"])]),_:1}),j,s(t,{class:"flex-col space-y-2"},{default:a(()=>[s(n,{fields:p(e),items:l.value},{"head(status)":a(({label:c})=>[D(i(c),1),s(m,{class:"ml-1"},{default:a(()=>[D("new")]),_:1})]),_:1},8,["fields","items"])]),_:1}),N])}}});export{$ as __pageData,ss as default};