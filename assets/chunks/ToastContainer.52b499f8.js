import{T as l}from"../components_toast_index.md.7fb50801.js";import{f as p,g as d,k as u,r as m,o as s,q as r,w as _,c as f,S as v,n as y,R as C,ad as T}from"../app.ab91a073.js";import"./Button.3ef77315.js";import"./Button.vue_vue_type_style_index_0_lang.da1f2c0e.js";import"./utils-6ba05f5b.6459b4f6.js";import"./16.af8d2078.js";import"./use-singleton.d9f4bf0c.js";const x=p({components:{Toast:l},setup(){const e=d([]);function o(a){e.value.unshift({...a,_id:Symbol("id")})}function n(a){e.value.splice(a,1)}return{add:o,remove:n,items:e}}});function k(e,o,n,a,$,g){const i=m("Toast");return s(),r(T,{tag:"div",name:"toast",class:"toast-container","data-testid":"toast-container"},{default:_(()=>[(s(!0),f(C,null,v(e.items,(t,c)=>(s(),r(i,{key:t._id,title:t.title,text:t.text,type:t.type,variant:t.variant,duration:t.duration,class:y(t.toastClass),onDismissed:h=>e.remove(c)},null,8,["title","text","type","variant","duration","class","onDismissed"]))),128))]),_:1})}const E=u(x,[["render",k]]);export{E as default};