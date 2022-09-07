import{u as m}from"./chunks/use-input.ed345430.js";import{d as v,c as g,w as f,o as x,_ as T,a as u,b as i,A as y,Q as b,f as S,V as w,k as A,t as _,p as k,n as V,g as t,h as p,i as o,j as P}from"./app.a5bbd9db.js";import{t as C}from"./chunks/index.9d9e3db5.js";import"./chunks/index.34265f71.js";const I=v({props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autoGrow:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},showCounter:{type:Boolean,default:!1},rows:{type:[Number,String],default:3},maxlength:{type:[Number,String],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["input","update:modelValue"],setup(a){const e=C("textarea"),c=m(a),s=g(()=>{const l=["textarea"];return a.resize&&l.push("textarea--resize"),a.disabled&&l.push("textarea--disabled"),a.autoGrow&&l.push("textarea--autogrow"),a.readonly&&l.push("textarea--readonly"),l}),h=g(()=>c.value?c.value.length:"0");f(()=>a.autoGrow,l=>{l?d():e.value.style.removeProperty("height")},{flush:"post"}),x(()=>{a.autoGrow&&e.value&&d()});function d(){e.value.style.height="auto",e.value.style.height=`${e.value.scrollHeight}px`}function r(){a.autoGrow&&d()}return{model:c,classNames:s,handleInput:r,charactersLength:h,calculateRowHeight:d}}}),N=["placeholder","disabled","readonly","rows","maxlength","aria-valuemax"],D={key:0,"data-testid":"calendar-counter",class:"textarea__counter"},z={key:0};function E(a,e,c,s,h,d){return u(),i("div",{"data-testid":"textarea",class:V(a.classNames)},[y(S("textarea",w({ref:"textarea","onUpdate:modelValue":e[0]||(e[0]=r=>a.model=r),"data-testid":"textarea-input",class:"textarea__input"},a.$attrs,{placeholder:a.placeholder,disabled:a.disabled,readonly:a.readonly,rows:a.rows,maxlength:a.maxlength,"aria-valuemax":a.maxlength,onInput:e[1]||(e[1]=(...r)=>a.handleInput&&a.handleInput(...r))}),null,16,N),[[b,a.model]]),a.showCounter?(u(),i("div",D,[A(_(a.charactersLength),1),a.maxlength?(u(),i("span",z,"/"+_(a.maxlength),1)):k("",!0)])):k("",!0)],2)}var n=T(I,[["render",E]]);const R=o("",3),B=o("",2),q=o("",2),$=o("",2),G=o("",3),U=o("",3),j=o("",3),M=o("",10),F='{"title":"Textarea","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":2,"title":"Placeholder","slug":"placeholder"},{"level":2,"title":"Disabled State","slug":"disabled-state"},{"level":2,"title":"Readonly State","slug":"readonly-state"},{"level":2,"title":"Resizeable","slug":"resizeable"},{"level":2,"title":"Auto Grow","slug":"auto-grow"},{"level":2,"title":"Counter","slug":"counter"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"},{"level":2,"title":"See Also","slug":"see-also"}],"relativePath":"textarea/component.md"}',H={},J=Object.assign(H,{setup(a){return(e,c)=>{const s=P("preview");return u(),i("div",null,[R,t(s,null,{default:p(()=>[t(n)]),_:1}),B,t(s,null,{default:p(()=>[t(n,{placeholder:"Write something"})]),_:1}),q,t(s,null,{default:p(()=>[t(n,{disabled:""})]),_:1}),$,t(s,null,{default:p(()=>[t(n,{readonly:""})]),_:1}),G,t(s,null,{default:p(()=>[t(n,{resize:""})]),_:1}),U,t(s,null,{default:p(()=>[t(n,{rows:"1","auto-grow":""})]),_:1}),j,t(s,{class:"flex-col gap-3"},{default:p(()=>[t(n,{"show-counter":""}),t(n,{"show-counter":"",maxlength:"50"})]),_:1}),M])}}});export{F as __pageData,J as default};