import{p as z}from"./Subheading.8f114631.js";import{p as D}from"./Caption.b2719edb.js";import{p as N}from"./Button.51c6d41e.js";import{p as H}from"./index.b2f794d3.js";import{I as E}from"./16.1d171169.js";import{d as C,_ as T,D as _,a7 as I,o as i,c as p,G as h,C as m,z as c,A as y,B as d,a4 as w,t as g,F as R,a as b,n as V,f as A,k as S,E as L,j as F,Y as k,l as P,az as j}from"./framework.e03f6a99.js";import{z as B,A as G,v as M,L as O,E as Y,P as q,T as x}from"./floating-ui.dom.browser.min.3a6ea315.js";import{t as J}from"./index.f76bdc21.js";import"./Caption.vue_vue_type_style_index_0_lang.050a9278.js";import"./Button.vue_vue_type_style_index_0_lang.9316ee59.js";import"./index.a3ecab28.js";import"./marked.esm.cc7a9e87.js";import"./commonjsHelpers.042e6b4d.js";import"./vite-browser-external_commonjs-proxy.005f2268.js";import"./utils-6ba05f5b.e505c784.js";import"./index.2d7aa202.js";const K=C({components:{pSubheading:z,pCaption:D,pButton:N,IconClose:E},directives:{pMd:H},props:{title:{type:String,default:void 0},text:{type:String,default:""},image:{type:String,default:void 0},highlight:{type:Boolean,default:!0},step:{type:Number,default:0},totalStep:{type:Number,default:0},dismissable:{type:Boolean,default:!0},prevLabel:{type:String,default:"Previous"},nextLabel:{type:String,default:"Next"},dismissLabel:{type:String,default:"Dismiss"},finishLabel:{type:String,default:"Finish"}},emits:["prev","next","dismiss"],setup(){return{}}});const Q=["src"],U={class:"tour__body"},W={"data-testid":"tour-title"},X={"data-testid":"tour-text"},Z={class:"tour__footer"},tt={key:0,class:"tour__meta","data-testid":"tour-meta"},et={class:"tour__controls"},st=c("span",{class:"tour__divider"},"•",-1);function ot(t,e,s,u,a,l){const r=_("IconClose"),o=_("p-subheading"),v=_("p-caption"),f=_("p-button"),$=I("p-md");return i(),p("div",{class:V(["tour__dialog",{"tour--image":!!t.image}]),"data-testid":"tour-dialog"},[t.dismissable?(i(),p("span",{key:0,"data-testid":"tour-dismiss",class:"tour__dismiss",onClick:e[0]||(e[0]=n=>t.$emit("dismiss",n))},[h(r)])):m("",!0),t.image?(i(),p("img",{key:1,class:"tour__image","data-testid":"tour-image",src:t.image,alt:"tour-image",width:"320",height:"195"},null,8,Q)):m("",!0),c("div",U,[t.title?(i(),y(o,{key:0,size:"sm"},{default:d(()=>[w(c("span",W,null,512),[[$,t.title,void 0,{inline:!0}]])]),_:1})):m("",!0),h(v,null,{default:d(()=>[w(c("span",X,null,512),[[$,t.text,void 0,{inline:!0}]])]),_:1})]),c("div",Z,[t.totalStep>2?(i(),p("div",tt,g(t.step)+" / "+g(t.totalStep),1)):m("",!0),c("div",et,[t.dismissable&&t.step<t.totalStep?(i(),p(R,{key:0},[h(f,{"data-testid":"tour-control-dismiss",size:"xs",variant:"link",onClick:e[1]||(e[1]=n=>t.$emit("dismiss",n))},{default:d(()=>[b(g(t.dismissLabel),1)]),_:1}),st],64)):m("",!0),h(f,{"data-testid":"tour-control-prev",size:"xs",variant:"link",disabled:t.step<2,onClick:e[2]||(e[2]=n=>t.$emit("prev",n))},{default:d(()=>[b(g(t.prevLabel),1)]),_:1},8,["disabled"]),t.step===t.totalStep?(i(),y(f,{key:1,"data-testid":"tour-control-finish",size:"xs",variant:"solid",color:"info",onClick:e[3]||(e[3]=n=>t.$emit("next",n))},{default:d(()=>[b(g(t.finishLabel),1)]),_:1})):(i(),y(f,{key:2,"data-testid":"tour-control-next",size:"xs",variant:"solid",color:"info",onClick:e[4]||(e[4]=n=>t.$emit("next",n))},{default:d(()=>[b(g(t.nextLabel),1)]),_:1}))])])],2)}const it=T(K,[["render",ot]]),at=C({inheritAttrs:!1,props:{target:{type:Object,default:void 0}},setup(t){const e=A(t,"target"),s=J("highlight");return S(u=>{if(s.value&&e.value){const a=B(e.value,s.value,()=>{const l=e.value.getBoundingClientRect(),r=16;s.value.style.width=`${l.width+r}px`,s.value.style.height=`${l.height+r}px`,s.value.style.left=`${l.left-r/2}px`,s.value.style.top=`${l.top-r/2}px`});u(a)}}),{}}});const nt={class:"tour__backdrop"};function rt(t,e,s,u,a,l){return i(),p("div",nt,[c("div",L({ref:"highlight",class:"tour__highlight"},t.$attrs),null,16)])}const lt=T(at,[["render",rt]]),ut=C({components:{TourDialog:it,TourHighlight:lt},setup(){const t=F(!1),e=k(),s=k(),u=k(),a=P(()=>{var o;return(o=e.value)==null?void 0:o.$el});S(o=>{if(s.value&&a.value){const v=B(s.value,a.value,async()=>{G(s.value,a.value,{strategy:"absolute",middleware:[M({altBoundary:!0}),O({padding:16}),Y(),q(),x(16)]}).then(({x:f,y:$,middlewareData:n})=>{a.value&&(a.value.style.transform=`translate3d(${f||0}px, ${$||0}px, 0)`,a.value.style.visibility=n.hide.referenceHidden?"hidden":"visible")})});o(v)}}),S(o=>{t.value&&document.body.classList.add("tour--active"),o(()=>{document.body.classList.remove("tour--active")})});function l(o,v){s.value=o,u.value=v,t.value=!0}function r(){t.value=!1}return{isShow:t,dialog:e,target:s,show:l,hide:r,config:u}}});const dt={class:"tour"};function pt(t,e,s,u,a,l){const r=_("TourHighlight"),o=_("TourDialog");return i(),p("div",dt,[h(j,{name:"fade"},{default:d(()=>[t.isShow?(i(),y(r,{key:0,target:t.target},null,8,["target"])):m("",!0),t.isShow?(i(),y(o,L({key:1,ref:"dialog"},t.config),null,16)):m("",!0)]),_:1})])}const Bt=T(ut,[["render",pt]]);export{Bt as default};
