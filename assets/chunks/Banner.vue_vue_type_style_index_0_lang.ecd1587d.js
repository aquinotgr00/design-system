import{I as a}from"./20.9669de55.js";import{u}from"./utils-6ba05f5b.d8ec137d.js";import{I as f}from"./16.f3fd109d.js";import{d as p,h as d,f as s}from"./framework.76afac0a.js";var v=u,o=v.createSVGComponent(o,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"}},{elem:"path",attrs:{d:"M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z","data-icon-path":"inner-path",opacity:"0"}}]),h=o;const r=h,_={danger:r,info:a},y=p({components:{IconInfo:a,IconClose:f,IconDanger:r},props:{variant:{type:String,default:"info"},dismissable:{type:Boolean,default:!0}},emits:["dismissed"],setup(t,{emit:i}){const n=d(!0),c=s(()=>{const e=["banner"];return t.variant&&e.push(`banner--${t.variant}`),e}),l=s(()=>_[t.variant]);function m(){n.value=!1,i("dismissed")}return{classNames:c,show:n,icon:l,close:m}}});export{y as _};
