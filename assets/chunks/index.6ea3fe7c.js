import{_ as i,U as a}from"../app.390c480a.js";import{u as r}from"./use-singleton.e02c2e4c.js";async function c(t){const{default:n}=await i(()=>import("./Dialog.cc05dc8b.js"),["assets/chunks/Dialog.cc05dc8b.js","assets/chunks/Modal.a47752e9.js","assets/chunks/index.2747fdab.js","assets/chunks/index.8d6568f8.js","assets/app.390c480a.js","assets/chunks/Heading.56943776.js","assets/chunks/Heading.vue_vue_type_style_index_0_lang.4ee8d60e.js","assets/chunks/16.124cf845.js","assets/chunks/utils-6ba05f5b.6074a229.js","assets/chunks/index.08555fb1.js","assets/chunks/Button.f3cb1916.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.a1e503d1.js"]),o=await r(n);return await new Promise(e=>{o.show(a({onConfirm:()=>e(!0),onCancel:()=>e(!1)},t,{title:"Confirm",confirm:{},cancel:{},centered:!0}))})}async function m(t){await c(a({cancel:{visible:!1}},t,{title:"Alert",confirm:{text:"Ok"}}))}export{m as a,c};
