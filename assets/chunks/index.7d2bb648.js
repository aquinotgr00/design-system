import{_ as i,U as a}from"../app.11769fcb.js";import{u as r}from"./use-singleton.ae3d2860.js";async function c(t){const{default:n}=await i(()=>import("./Dialog.e5763cb1.js"),["assets/chunks/Dialog.e5763cb1.js","assets/chunks/Modal.903ef9fe.js","assets/chunks/index.a185557f.js","assets/chunks/index.c0c609df.js","assets/app.11769fcb.js","assets/chunks/Heading.ddc3e5ca.js","assets/chunks/Heading.vue_vue_type_style_index_0_lang.f8af69ba.js","assets/chunks/16.e20074af.js","assets/chunks/utils-6ba05f5b.759caf55.js","assets/chunks/index.64102ad6.js","assets/chunks/Button.72779291.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.28c9a043.js"]),o=await r(n);return await new Promise(e=>{o.show(a({onConfirm:()=>e(!0),onCancel:()=>e(!1)},t,{title:"Confirm",confirm:{},cancel:{},centered:!0}))})}async function m(t){await c(a({cancel:{visible:!1}},t,{title:"Alert",confirm:{text:"Ok"}}))}export{m as a,c};
