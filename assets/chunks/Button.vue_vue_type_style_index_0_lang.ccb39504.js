import{I as f}from"./index.a3ecab28.js";import{f as u,h as s,x as i}from"../app.4fb2ad69.js";const r=Symbol("ButtonGroupSetting"),v=u({props:{variant:{type:String,default:"solid"},color:{type:String,default:"default"},size:{type:String,default:"md"},icon:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},href:{type:String,default:void 0}},setup(t){const a=i(f,void 0,!1),l=i(r,void 0,!1),n=s(()=>{const e=["btn"];return t.color&&e.push(`btn--${t.color}`),t.variant&&e.push(`btn--variant-${t.variant}`),a!=null&&a.size.value?e.push(`btn--${a==null?void 0:a.size.value}`):l!=null&&l.size.value?e.push(`btn--${l==null?void 0:l.size.value}`):t.size&&e.push(`btn--${t.size}`),t.icon&&e.push("btn--icon"),t.pill&&e.push("btn--pill"),e}),o=s(()=>{let e="button";return t.href&&(e="a"),e});return{classNames:n,tagName:o}}});export{r as B,v as _};
