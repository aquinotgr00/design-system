import{_ as i,U as a}from"../app.8aab0a2c.js";import{u as r}from"./use-singleton.b9c25381.js";async function c(t){const{default:n}=await i(()=>import("./Dialog.1881387b.js"),["assets/chunks/Dialog.1881387b.js","assets/chunks/Modal.be9a11cb.js","assets/chunks/index.04e5f611.js","assets/chunks/index.76efdf2a.js","assets/app.8aab0a2c.js","assets/chunks/Heading.aad04f43.js","assets/chunks/Heading.vue_vue_type_style_index_0_lang.121c7e75.js","assets/chunks/16.9bdc8e92.js","assets/chunks/utils-6ba05f5b.0fa8adb5.js","assets/chunks/index.d0e882ee.js","assets/chunks/Button.e2756b66.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.170d9f54.js"]),o=await r(n);return await new Promise(e=>{o.show(a({onConfirm:()=>e(!0),onCancel:()=>e(!1)},t,{title:"Confirm",confirm:{},cancel:{},centered:!0}))})}async function m(t){await c(a({cancel:{visible:!1}},t,{title:"Alert",confirm:{text:"Ok"}}))}export{m as a,c};
