import{u as f}from"./index.4e1771ed.js";import{t as h}from"./index.0ae26b57.js";import{i as y,k as i,l as c,m as g,f as v,o as s,c as n,d as x,a9 as w,h as B,a5 as V,e as b,y as m,t as p,n as N}from"../app.12128179.js";const $=y({props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},autoGrow:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},showCounter:{type:Boolean,default:!1},rows:{type:[Number,String],default:3},maxlength:{type:[Number,String],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["input","update:modelValue"],setup(e){const a=h("textarea"),r=f(e),d=i(()=>{const t=["textarea"];return e.resize&&t.push("textarea--resize"),e.disabled&&t.push("textarea--disabled"),e.autoGrow&&t.push("textarea--autogrow"),e.readonly&&t.push("textarea--readonly"),e.error&&t.push("textarea--error","state--error"),t}),u=i(()=>r.value?r.value.length:"0");c(()=>e.autoGrow,t=>{t?l():a.value.style.removeProperty("height")},{flush:"post"}),g(()=>{e.autoGrow&&a.value&&l()});function l(){a.value.style.height="auto",a.value.style.height=`${a.value.scrollHeight}px`}function o(){e.autoGrow&&l()}return{model:r,classNames:d,handleInput:o,charactersLength:u,calculateRowHeight:l}}});const k=["placeholder","disabled","readonly","rows","maxlength","aria-valuemax"],C={key:0,"data-testid":"calendar-counter",class:"textarea__counter"},G={key:0};function S(e,a,r,d,u,l){return s(),n("div",{"data-testid":"textarea",class:N(e.classNames)},[x(B("textarea",V({ref:"textarea","onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),"data-testid":"textarea-input",class:"textarea__input"},e.$attrs,{placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,rows:e.rows,maxlength:e.maxlength,"aria-valuemax":e.maxlength,onInput:a[1]||(a[1]=(...o)=>e.handleInput&&e.handleInput(...o))}),null,16,k),[[w,e.model]]),e.showCounter?(s(),n("div",C,[b(m(e.charactersLength),1),e.maxlength?(s(),n("span",G,"/"+m(e.maxlength),1)):p("",!0)])):p("",!0)],2)}const T=v($,[["render",S]]);export{T as p};
