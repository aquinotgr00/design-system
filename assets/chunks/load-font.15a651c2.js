import{_ as i}from"../app.68f3df29.js";async function r(t){const e=await i(()=>import("./webfontloader.0379c39c.js").then(o=>o.w),[]);return await new Promise((o,a)=>{e.load({google:{families:[t]},fontactive(){o()},fontinactive(){a(new Error("FONTLOADER_TIMEOUT"))}})})}export{r as l};