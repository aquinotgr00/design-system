import{J as n}from"./framework.1cabf72c.js";import{u as r}from"./use-singleton.0782a4bd.js";import{d as a}from"./defu.573334b8.js";async function c(t){const{default:o}=await n(()=>import("./Dialog.876df2a2.js"),["assets/chunks/Dialog.876df2a2.js","assets/chunks/Modal.14456d97.js","assets/chunks/index.f6017335.js","assets/chunks/index.c4b65e70.js","assets/chunks/framework.1cabf72c.js","assets/chunks/Heading.3e74b831.js","assets/chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js","assets/chunks/16.f6193516.js","assets/chunks/commonjsHelpers.042e6b4d.js","assets/chunks/utils-6ba05f5b.0166e5c7.js","assets/chunks/index.69675e13.js","assets/chunks/Button.00c4db0e.js","assets/chunks/index.a3ecab28.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js"]),i=await r(o);return await new Promise(e=>{i.show(a({onConfirm:()=>e(!0),onCancel:()=>e(!1)},t,{title:"Confirm",confirm:{},cancel:{},centered:!0}))})}async function u(t){await c(a({cancel:{visible:!1}},t,{title:"Alert",confirm:{text:"Ok"}}))}export{u as a,c};
