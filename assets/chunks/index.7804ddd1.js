import{_ as i,U as a}from"../app.4fb2ad69.js";import{u as r}from"./use-singleton.e91e5419.js";async function c(t){const{default:n}=await i(()=>import("./Dialog.c72f9d51.js"),["assets/chunks/Dialog.c72f9d51.js","assets/chunks/Modal.9b588fe0.js","assets/chunks/index.7883a82b.js","assets/chunks/index.1d18dab0.js","assets/app.4fb2ad69.js","assets/chunks/Heading.22009df9.js","assets/chunks/Heading.vue_vue_type_style_index_0_lang.d5f2ff5d.js","assets/chunks/16.2fd7bce7.js","assets/chunks/utils-6ba05f5b.f88ae4a8.js","assets/chunks/index.944df9fb.js","assets/chunks/Button.a56dbb16.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.ccb39504.js","assets/chunks/index.a3ecab28.js"]),o=await r(n);return await new Promise(e=>{o.show(a({onConfirm:()=>e(!0),onCancel:()=>e(!1)},t,{title:"Confirm",confirm:{},cancel:{},centered:!0}))})}async function m(t){await c(a({cancel:{visible:!1}},t,{title:"Alert",confirm:{text:"Ok"}}))}export{m as a,c};
