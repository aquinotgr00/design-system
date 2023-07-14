import{u as f}from"./index.69675e13.js";import{t as h}from"./index.f6017335.js";import{d as c,l as i,w as y,p as g,_ as v,o as s,c as n,a4 as w,ai as x,z as B,E as V,a as b,t as p,C as m,n as N}from"./framework.1cabf72c.js";const C=c({inheritAttrs:!1,props:{modelValue:{type:String,default:void 0},placeholder:{type:String,default:""},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},autoGrow:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},showCounter:{type:Boolean,default:!1},rows:{type:[Number,String],default:3},maxlength:{type:[Number,String],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["input","update:modelValue"],setup(e){const a=h("textarea"),r=f(e),d=i(()=>{const t=["textarea"];return e.resize&&t.push("textarea--resize"),e.disabled&&t.push("textarea--disabled"),e.autoGrow&&t.push("textarea--autogrow"),e.readonly&&t.push("textarea--readonly"),e.error&&t.push("textarea--error","state--error"),t}),u=i(()=>r.value?r.value.length:"0");y(()=>e.autoGrow,t=>{t?l():a.value.style.removeProperty("height")},{flush:"post"}),g(()=>{e.autoGrow&&a.value&&l()});function l(){a.value.style.height="auto",a.value.style.height=`${a.value.scrollHeight}px`}function o(){e.autoGrow&&l()}return{model:r,classNames:d,handleInput:o,charactersLength:u,calculateRowHeight:l}}});const _=["placeholder","disabled","readonly","rows","maxlength","aria-valuemax"],$={key:0,"data-testid":"calendar-counter",class:"textarea__counter"},z={key:0};function G(e,a,r,d,u,l){return s(),n("div",{"data-testid":"textarea",class:N(e.classNames)},[w(B("textarea",V({ref:"textarea","onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),"data-testid":"textarea-input",class:"textarea__input"},e.$attrs,{placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,rows:e.rows,maxlength:e.maxlength,"aria-valuemax":e.maxlength,onInput:a[1]||(a[1]=(...o)=>e.handleInput&&e.handleInput(...o))}),null,16,_),[[x,e.model]]),e.showCounter?(s(),n("div",$,[b(p(e.charactersLength),1),e.maxlength?(s(),n("span",z,"/"+p(e.maxlength),1)):m("",!0)])):m("",!0)],2)}const T=v(C,[["render",G]]);export{T as p};
