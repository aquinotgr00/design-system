import{u as _}from"./chunks/index.64d9cf75.js";import{t as g}from"./chunks/index.db5cf504.js";import{f as m,h as y,i as v,j as b,_ as x,o as i,c as u,C as f,$ as C,a as A,a1 as T,k as S,t as D,p as F,n as w,b as V,d as a,w as r,e as n}from"./app.0800046f.js";const E=m({props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autoGrow:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},showCounter:{type:Boolean,default:!1},rows:{type:[Number,String],default:3},maxlength:{type:[Number,String],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["input","update:modelValue"],setup(e){const t=g("textarea"),p=_(e),s=y(()=>{const o=["textarea"];return e.resize&&o.push("textarea--resize"),e.disabled&&o.push("textarea--disabled"),e.autoGrow&&o.push("textarea--autogrow"),e.readonly&&o.push("textarea--readonly"),o}),h=y(()=>p.value?p.value.length:"0");v(()=>e.autoGrow,o=>{o?d():t.value.style.removeProperty("height")},{flush:"post"}),b(()=>{e.autoGrow&&t.value&&d()});function d(){t.value.style.height="auto",t.value.style.height=`${t.value.scrollHeight}px`}function c(){e.autoGrow&&d()}return{model:p,classNames:s,handleInput:c,charactersLength:h,calculateRowHeight:d}}});const P=["placeholder","disabled","readonly","rows","maxlength","aria-valuemax"],I={key:0,"data-testid":"calendar-counter",class:"textarea__counter"},N={key:0};function k(e,t,p,s,h,d){return i(),u("div",{"data-testid":"textarea",class:w(e.classNames)},[f(A("textarea",T({ref:"textarea","onUpdate:modelValue":t[0]||(t[0]=c=>e.model=c),"data-testid":"textarea-input",class:"textarea__input"},e.$attrs,{placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,rows:e.rows,maxlength:e.maxlength,"aria-valuemax":e.maxlength,onInput:t[1]||(t[1]=(...c)=>e.handleInput&&e.handleInput(...c))}),null,16,P),[[C,e.model]]),e.showCounter?(i(),u("div",I,[S(D(e.charactersLength),1),e.maxlength?(i(),u("span",N,"/"+D(e.maxlength),1)):F("",!0)])):F("",!0)],2)}const l=x(E,[["render",k]]),z=n("",3),R=n("",2),B=n("",2),$=n("",2),G=n("",3),q=n("",3),U=n("",3),j=n("",10),W=JSON.parse('{"title":"Textarea","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Placeholder","slug":"placeholder","link":"#placeholder","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly State","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Resizeable","slug":"resizeable","link":"#resizeable","children":[]},{"level":2,"title":"Auto Grow","slug":"auto-grow","link":"#auto-grow","children":[]},{"level":2,"title":"Counter","slug":"counter","link":"#counter","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/textarea/index.md"}'),M={name:"components/textarea/index.md"},J=Object.assign(M,{setup(e){return(t,p)=>{const s=V("preview");return i(),u("div",null,[z,a(s,null,{default:r(()=>[a(l)]),_:1}),R,a(s,null,{default:r(()=>[a(l,{placeholder:"Write something"})]),_:1}),B,a(s,null,{default:r(()=>[a(l,{disabled:""})]),_:1}),$,a(s,null,{default:r(()=>[a(l,{readonly:""})]),_:1}),G,a(s,null,{default:r(()=>[a(l,{resize:""})]),_:1}),q,a(s,null,{default:r(()=>[a(l,{rows:"1","auto-grow":""})]),_:1}),U,a(s,{class:"flex-col gap-3"},{default:r(()=>[a(l,{"show-counter":""}),a(l,{"show-counter":"",maxlength:"50"})]),_:1}),j])}}});export{W as __pageData,J as default};
