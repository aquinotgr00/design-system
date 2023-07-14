import{u as f}from"./index.7ec55cbf.js";import{t as h}from"./theme.0ede34c8.js";import{m as y,c as i,w as c,o as g,_ as v,x as s,p as n,a7 as x,ai as w,F as B,L as V,y as b,z as p,J as m,v as N}from"./framework.d1aba3cb.js";const _=y({inheritAttrs:!1,props:{modelValue:{type:String,default:void 0},placeholder:{type:String,default:""},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},autoGrow:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},showCounter:{type:Boolean,default:!1},rows:{type:[Number,String],default:3},maxlength:{type:[Number,String],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["input","update:modelValue"],setup(e){const a=h("textarea"),r=f(e),d=i(()=>{const t=["textarea"];return e.resize&&t.push("textarea--resize"),e.disabled&&t.push("textarea--disabled"),e.autoGrow&&t.push("textarea--autogrow"),e.readonly&&t.push("textarea--readonly"),e.error&&t.push("textarea--error","state--error"),t}),u=i(()=>r.value?r.value.length:"0");c(()=>e.autoGrow,t=>{t?o():a.value.style.removeProperty("height")},{flush:"post"}),g(()=>{e.autoGrow&&a.value&&o()});function o(){a.value.style.height="auto",a.value.style.height=`${a.value.scrollHeight}px`}function l(){e.autoGrow&&o()}return{model:r,classNames:d,handleInput:l,charactersLength:u,calculateRowHeight:o}}});const $=["placeholder","disabled","readonly","rows","maxlength","aria-valuemax"],z={key:0,"data-testid":"calendar-counter",class:"textarea__counter"},C={key:0};function G(e,a,r,d,u,o){return s(),n("div",{"data-testid":"textarea",class:N(e.classNames)},[x(B("textarea",V({ref:"textarea","onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),"data-testid":"textarea-input",class:"textarea__input"},e.$attrs,{placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,rows:e.rows,maxlength:e.maxlength,"aria-valuemax":e.maxlength,onInput:a[1]||(a[1]=(...l)=>e.handleInput&&e.handleInput(...l))}),null,16,$),[[w,e.model]]),e.showCounter?(s(),n("div",z,[b(p(e.charactersLength),1),e.maxlength?(s(),n("span",C,"/"+p(e.maxlength),1)):m("",!0)])):m("",!0)],2)}const T=v(_,[["render",G]]);export{T as p};