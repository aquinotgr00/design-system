import{f as r,h as n}from"../app.b96ee9a3.js";const i=r({props:{element:{type:String,default:"h3"},weight:{type:String,default:"normal"},transform:{type:String,default:"normalcase"}},setup(e){const a=n(()=>e.element),s=n(()=>{const t=[`${e.element}`];return e.transform&&t.push(`heading--${e.transform}`),e.weight&&t.push(`heading--${e.weight}`),t});return{elementNames:a,classNames:s}}});export{i as _};