import{_ as i,U as a}from"../app.68f3df29.js";import{u as r}from"./use-singleton.b9f91f85.js";async function c(t){const{default:n}=await i(()=>import("./Dialog.5fc1c137.js"),["assets/chunks/Dialog.5fc1c137.js","assets/chunks/Modal.4fbbfff9.js","assets/chunks/index.c28c093d.js","assets/chunks/index.06172d92.js","assets/app.68f3df29.js","assets/chunks/Heading.700afbc7.js","assets/chunks/Heading.vue_vue_type_style_index_0_lang.2fcab2b2.js","assets/chunks/16.1deb615b.js","assets/chunks/utils-6ba05f5b.12ad8990.js","assets/chunks/index.104f20b0.js","assets/chunks/Button.2f5fcb16.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.27c6df4f.js"]),o=await r(n);return await new Promise(e=>{o.show(a({onConfirm:()=>e(!0),onCancel:()=>e(!1)},t,{title:"Confirm",confirm:{},cancel:{},centered:!0}))})}async function m(t){await c(a({cancel:{visible:!1}},t,{title:"Alert",confirm:{text:"Ok"}}))}export{m as a,c};
