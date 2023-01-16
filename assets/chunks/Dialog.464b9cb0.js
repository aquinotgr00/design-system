import{M as k}from"./Modal.b979427a.js";import{p as b}from"./Button.f97677d9.js";import{f as g,h as S,k as y,r as m,o as i,c as $,q as u,w as d,e as C,y as v,n as s,t as p,g as f,I as B,a as T}from"../app.3c0f5e00.js";import"./index.744c2812.js";import"./index.2c069445.js";import"./Heading.441d5995.js";import"./Heading.vue_vue_type_style_index_0_lang.1e9ab794.js";import"./16.bfbaac82.js";import"./utils-6ba05f5b.52e29260.js";import"./index.d631e0ee.js";import"./Button.vue_vue_type_style_index_0_lang.b7c6fc41.js";const N=g({components:{Button:b},props:{align:{type:String,default:"start"},cancelClass:{type:String,default:void 0},cancelVisible:{type:Boolean,default:!0},cancelColor:{type:String,default:"secondary"},cancelVariant:{type:String,default:"link"},cancelText:{type:String,default:"Cancel"},confirmClass:{type:String,default:void 0},confirmVisible:{type:Boolean,default:!0},confirmColor:{type:String,default:"primary"},confirmVariant:{type:String,default:"solid"},confirmText:{type:String,default:"Confirm"}},emits:["cancel","confirm"],setup(e,{emit:o}){const n=S(()=>{const a=["footer"];return e.align&&a.push(`footer--align-${e.align}`),a});function c(){o("cancel")}function t(){o("confirm")}return{footerClassNames:n,cancel:c,confirm:t}}});function h(e,o,n,c,t,a){const l=m("Button");return i(),$("div",{"data-testid":"dialog-footer",class:s(e.footerClassNames)},[e.cancelVisible?(i(),u(l,{key:0,class:s(e.cancelClass),color:e.cancelColor,variant:e.cancelVariant,onClick:e.cancel},{default:d(()=>[C(v(e.cancelText),1)]),_:1},8,["class","color","variant","onClick"])):p("",!0),e.confirmVisible?(i(),u(l,{key:1,class:s(e.confirmClass),color:e.confirmColor,variant:e.confirmVariant,onClick:e.confirm},{default:d(()=>[C(v(e.confirmText),1)]),_:1},8,["class","color","variant","onClick"])):p("",!0)],2)}const D=y(N,[["render",h]]),z=g({components:{Modal:k,DialogFooter:D},setup(){const e=f(),o=f(!1),n=f();function c(r){e.value=Symbol("DialogId"),n.value=r,B(()=>{o.value=!0})}function t(){o.value=!1}function a(){t(),setTimeout(()=>{n.value.onConfirm()},150)}function l(){t(),setTimeout(()=>{n.value.onCancel()},150)}return{id:e,modal:o,context:n,show:c,hide:t,onConfirm:a,onCancel:l}}});function M(e,o,n,c,t,a){const l=m("dialog-footer"),r=m("Modal");return e.context?(i(),u(r,{key:e.id,modelValue:e.modal,"onUpdate:modelValue":o[0]||(o[0]=V=>e.modal=V),title:e.context.title,size:e.context.size,centered:e.context.centered,text:e.context.text,onClose:e.onCancel},{footer:d(()=>[T(l,{align:e.context.footerAlign,"cancel-class":e.context.cancel.className,"cancel-visible":e.context.cancel.visible,"cancel-color":e.context.cancel.color,"cancel-variant":e.context.cancel.variant,"cancel-text":e.context.cancel.text,"confirm-class":e.context.confirm.className,"confirm-visible":e.context.confirm.visible,"confirm-color":e.context.confirm.color,"confirm-variant":e.context.confirm.variant,"confirm-text":e.context.confirm.text,onConfirm:e.onConfirm,onCancel:e.onCancel},null,8,["align","cancel-class","cancel-visible","cancel-color","cancel-variant","cancel-text","confirm-class","confirm-visible","confirm-color","confirm-variant","confirm-text","onConfirm","onCancel"])]),_:1},8,["modelValue","title","size","centered","text","onClose"])):p("",!0)}const J=y(z,[["render",M]]);export{J as default};
