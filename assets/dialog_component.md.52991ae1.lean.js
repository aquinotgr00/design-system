import{B as k}from"./chunks/Button.a1119926.js";import{u as $}from"./chunks/use-singleton.7c90174b.js";import{M as N}from"./chunks/Modal.f35f4559.js";import{d as V,c as I,_ as A,b as D,l as _,h as i,n as u,p as g,j as C,a as l,k as r,q as T,r as f,y as B,g as h,f as S,i as y}from"./app.1dec9439.js";import"./chunks/index.95471d24.js";import"./chunks/index.33b49ea7.js";import"./chunks/Heading.26b2b7af.js";import"./chunks/16.e09f9c9e.js";import"./chunks/utils-6ba05f5b.7b32763e.js";import"./chunks/use-input.452e8eef.js";const P=V({components:{Button:k},props:{align:{type:String,default:"start"},cancelClass:{type:String,default:void 0},cancelVisible:{type:Boolean,default:!0},cancelColor:{type:String,default:"secondary"},cancelVariant:{type:String,default:"link"},cancelText:{type:String,default:"Cancel"},confirmClass:{type:String,default:void 0},confirmVisible:{type:Boolean,default:!0},confirmColor:{type:String,default:"primary"},confirmVariant:{type:String,default:"solid"},confirmText:{type:String,default:"Confirm"}},emits:["cancel","confirm"],setup(n,{emit:a}){const o=I(()=>{const t=["footer"];return n.align&&t.push(`footer--align-${n.align}`),t});function e(){a("cancel")}function s(){a("confirm")}return{footerClassNames:o,cancel:e,confirm:s}}});function M(n,a,o,e,s,t){const c=C("Button");return l(),D("div",{class:u(n.footerClassNames)},[n.cancelVisible?(l(),_(c,{key:0,class:u(n.cancelClass),color:n.cancelColor,variant:n.cancelVariant,onClick:n.cancel},{default:i(()=>[r(T(n.cancelText),1)]),_:1},8,["class","color","variant","onClick"])):g("",!0),n.confirmVisible?(l(),_(c,{key:1,class:u(n.confirmClass),color:n.confirmColor,variant:n.confirmVariant,onClick:n.confirm},{default:i(()=>[r(T(n.confirmText),1)]),_:1},8,["class","color","variant","onClick"])):g("",!0)],2)}var j=A(P,[["render",M]]);const E=V({components:{Modal:N,DialogFooter:j},setup(){const n=f(),a=f(!1),o=f();function e(p){n.value=Symbol("DialogId"),o.value=p,B(()=>{a.value=!0})}function s(){a.value=!1}function t(){s(),setTimeout(()=>{o.value.onConfirm()},150)}function c(){s(),setTimeout(()=>{o.value.onCancel()},150)}return{id:n,modal:a,context:o,show:e,hide:s,onConfirm:t,onCancel:c}}});function R(n,a,o,e,s,t){const c=C("dialog-footer"),p=C("Modal");return n.context?(l(),_(p,{key:n.id,modelValue:n.modal,"onUpdate:modelValue":a[0]||(a[0]=w=>n.modal=w),title:n.context.title,text:n.context.text,onClose:n.onCancel},{footer:i(()=>[h(c,{align:n.context.footerAlign,"cancel-class":n.context.cancel.className,"cancel-visible":n.context.cancel.visible,"cancel-color":n.context.cancel.color,"cancel-variant":n.context.cancel.variant,"cancel-text":n.context.cancel.text,"confirm-class":n.context.confirm.className,"confirm-visible":n.context.confirm.visible,"confirm-color":n.context.confirm.color,"confirm-variant":n.context.confirm.variant,"confirm-text":n.context.confirm.text,onConfirm:n.onConfirm,onCancel:n.onCancel},null,8,["align","cancel-class","cancel-visible","cancel-color","cancel-variant","cancel-text","confirm-class","confirm-visible","confirm-color","confirm-variant","confirm-text","onConfirm","onCancel"])]),_:1},8,["modelValue","title","text","onClose"])):g("",!0)}var U=A(E,[["render",R]]);function d(n){return n!==null&&typeof n=="object"}function v(n,a,o=".",e){if(!d(a))return v(n,{},o,e);const s=Object.assign({},a);for(const t in n){if(t==="__proto__"||t==="constructor")continue;const c=n[t];c!=null&&(e&&e(s,t,c,o)||(Array.isArray(c)&&Array.isArray(s[t])?s[t]=c.concat(s[t]):d(c)&&d(s[t])?s[t]=v(c,s[t],(o?`${o}.`:"")+t.toString(),e):s[t]=c))}return s}function F(n){return(...a)=>a.reduce((o,e)=>v(o,e,"",n),{})}const b=F();async function x(n){const a=await $(U);return await new Promise(e=>{a.show(b({onConfirm:()=>e(!0),onCancel:()=>e(!1)},n,{title:"Confirm",confirm:{},cancel:{}}))})}async function H(n){await x(b({cancel:{visible:!1}},n,{title:"Alert",confirm:{text:"Ok"}}))}var m={confirm:x,alert:H};const O=y("",3),q={class:"flex mt-5"},z=r("Show Alert"),G=y("",2),J={class:"flex mt-5"},K=r("Show Confirm"),L=y("",1),cn='{"title":"Dialog (Instant Modal)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Alert","slug":"alert"},{"level":3,"title":"Confirm","slug":"confirm"}],"relativePath":"dialog/component.md"}',Q={},ln=Object.assign(Q,{setup(n){function a(){m.alert({title:"Dialog",text:"Hello This is Dialog"})}function o(){m.confirm({title:"Delete Confirmation",text:"Are you sure?"}).then(e=>{e===!0&&m.alert({title:"Info",text:"Deleted"})})}return(e,s)=>(l(),D("div",null,[O,S("div",q,[h(k,{onClick:a},{default:i(()=>[z]),_:1})]),G,S("div",J,[h(k,{onClick:o},{default:i(()=>[K]),_:1})]),L]))}});export{cn as __pageData,ln as default};
