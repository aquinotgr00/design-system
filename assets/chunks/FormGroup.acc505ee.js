import{u as _}from"./utils-6ba05f5b.6459b4f6.js";import{p as h}from"./Caption.8b7a8fec.js";import{p as v}from"./index.744d9fad.js";import{f as g,h as y,k,r as n,V as w,o,c as t,m as C,d as S,q as i,t as r,e as p,y as s,w as l,l as I,a as N,T as b,n as B}from"../app.ab91a073.js";var H=_,c=H.createSVGComponent(c,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{fill:"none",d:"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z","data-icon-path":"inner-path"}},{elem:"path",attrs:{d:"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}}]),V=c;const Z=V,$=g({components:{pCaption:h,IconInfo:Z},directives:{pTooltip:v},props:{required:{type:Boolean,default:!1},label:{type:String,default:""},caption:{type:String,default:""},description:{type:String,default:""},hint:{type:String,default:""},error:{type:String,default:""}},setup(e){return{classNames:y(()=>{const a=[];return e.error&&a.push("form-group--error","state--error"),a})}}});const T={class:"form-group__label"},q={key:1},A={key:0,class:"form-group__error"},D={key:1,class:"form-group__description"};function F(e,u,a,G,M,z){const d=n("IconInfo"),m=n("p-caption"),f=w("p-tooltip");return o(),t("div",{class:B(["form-group",e.classNames])},[C("label",T,[e.hint?S((o(),i(d,{key:0,class:"form-group__hint"},null,512)),[[f,e.hint]]):r("",!0),p(" "+s(e.label),1),e.required?(o(),t("sup",q,"*")):r("",!0),e.caption?(o(),i(m,{key:2},{default:l(()=>[p(s(e.caption),1)]),_:1})):r("",!0)]),I(e.$slots,"default"),N(b,{name:"slide-up",mode:"out-in"},{default:l(()=>[e.error?(o(),t("p",A,s(e.error),1)):e.description?(o(),t("p",D,s(e.description),1)):r("",!0)]),_:1})],2)}const L=k($,[["render",F]]);export{L as p};