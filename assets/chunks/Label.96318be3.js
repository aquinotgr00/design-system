import{D as f}from"./Dot.cfa45b08.js";import{I as p}from"./16.5549ab92.js";import{i as b,j as _,k as v,f as y,r as i,o,c as d,q as k,t as l,e as C,g as $,a as g,n as N}from"../app.34a3cf55.js";const h=b({components:{Dot:f,IconClose:p},props:{color:{type:String,default:"default"},variant:{type:String,default:"default"},size:{type:String,default:"md"},dismissable:{type:Boolean,default:!1}},emits:["dismissed"],setup(e,{emit:t}){const a=_(!0),n=v(()=>{const s=["label"];return e.color&&s.push(`label--${e.color}`),e.variant&&s.push(`label--variant-${e.variant}`),e.size&&s.push(`label--${e.size}`),s});function r(){a.value=!1,t("dismissed")}return{classNames:n,show:a,close:r}}});function z(e,t,a,n,r,s){const c=i("Dot"),m=i("IconClose");return e.show?(o(),d("div",{key:0,"data-testid":"label",class:N(e.classNames)},[e.variant==="dot"?(o(),k(c,{key:0,"data-testid":"dot",color:e.color},null,8,["color"])):l("",!0),C(),$(e.$slots,"default"),e.dismissable?(o(),d("span",{key:1,"data-testid":"label-dismiss",class:"label__dismiss",onClick:t[0]||(t[0]=(...u)=>e.close&&e.close(...u))},[g(m)])):l("",!0)],2)):l("",!0)}const S=y(h,[["render",z]]);export{S as p};
