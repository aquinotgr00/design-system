import{M as k}from"./Modal.3ce45d83.js";import{p as b}from"./Button.51c6d41e.js";import{d as g,l as S,_ as y,D as m,o as i,c as $,A as u,B as d,a as C,t as v,n as s,C as p,j as f,Z as B,G as T}from"./framework.e03f6a99.js";import"./index.f76bdc21.js";import"./index.2d7aa202.js";import"./Heading.ffcb694a.js";import"./Heading.vue_vue_type_style_index_0_lang.a69fc3bb.js";import"./16.1d171169.js";import"./commonjsHelpers.042e6b4d.js";import"./utils-6ba05f5b.e505c784.js";import"./index.1eca2a34.js";import"./Button.vue_vue_type_style_index_0_lang.9316ee59.js";import"./index.a3ecab28.js";const N=g({components:{Button:b},props:{align:{type:String,default:"start"},cancelClass:{type:String,default:void 0},cancelVisible:{type:Boolean,default:!0},cancelColor:{type:String,default:"default"},cancelVariant:{type:String,default:"link"},cancelText:{type:String,default:"Cancel"},confirmClass:{type:String,default:void 0},confirmVisible:{type:Boolean,default:!0},confirmColor:{type:String,default:"info"},confirmVariant:{type:String,default:"solid"},confirmText:{type:String,default:"Confirm"}},emits:["cancel","confirm"],setup(o,{emit:e}){const n=S(()=>{const a=["footer"];return o.align&&a.push(`footer--align-${o.align}`),a});function c(){e("cancel")}function t(){e("confirm")}return{footerClassNames:n,cancel:c,confirm:t}}});function D(o,e,n,c,t,a){const l=m("Button");return i(),$("div",{"data-testid":"dialog-footer",class:s(o.footerClassNames)},[o.cancelVisible?(i(),u(l,{key:0,class:s(o.cancelClass),color:o.cancelColor,variant:o.cancelVariant,onClick:o.cancel},{default:d(()=>[C(v(o.cancelText),1)]),_:1},8,["class","color","variant","onClick"])):p("",!0),o.confirmVisible?(i(),u(l,{key:1,class:s(o.confirmClass),color:o.confirmColor,variant:o.confirmVariant,onClick:o.confirm},{default:d(()=>[C(v(o.confirmText),1)]),_:1},8,["class","color","variant","onClick"])):p("",!0)],2)}const h=y(N,[["render",D]]),z=g({components:{Modal:k,DialogFooter:h},setup(){const o=f(),e=f(!1),n=f();function c(r){o.value=Symbol("DialogId"),n.value=r,B(()=>{e.value=!0})}function t(){e.value=!1}function a(){t(),setTimeout(()=>{n.value.onConfirm()},150)}function l(){t(),setTimeout(()=>{n.value.onCancel()},150)}return{id:o,modal:e,context:n,show:c,hide:t,onConfirm:a,onCancel:l}}});function M(o,e,n,c,t,a){const l=m("dialog-footer"),r=m("Modal");return o.context?(i(),u(r,{key:o.id,modelValue:o.modal,"onUpdate:modelValue":e[0]||(e[0]=V=>o.modal=V),title:o.context.title,size:o.context.size,centered:o.context.centered,text:o.context.text,onClose:o.onCancel},{footer:d(()=>[T(l,{align:o.context.footerAlign,"cancel-class":o.context.cancel.className,"cancel-visible":o.context.cancel.visible,"cancel-color":o.context.cancel.color,"cancel-variant":o.context.cancel.variant,"cancel-text":o.context.cancel.text,"confirm-class":o.context.confirm.className,"confirm-visible":o.context.confirm.visible,"confirm-color":o.context.confirm.color,"confirm-variant":o.context.confirm.variant,"confirm-text":o.context.confirm.text,onConfirm:o.onConfirm,onCancel:o.onCancel},null,8,["align","cancel-class","cancel-visible","cancel-color","cancel-variant","cancel-text","confirm-class","confirm-visible","confirm-color","confirm-variant","confirm-text","onConfirm","onCancel"])]),_:1},8,["modelValue","title","size","centered","text","onClose"])):p("",!0)}const K=y(z,[["render",M]]);export{K as default};