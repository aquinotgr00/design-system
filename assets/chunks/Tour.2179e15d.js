import{p as D}from"./Subheading.2013686e.js";import{p as z}from"./Caption.8101c0fe.js";import{p as N}from"./Button.0a0eded6.js";import{p as H}from"./index.2cde238a.js";import{I as P}from"./16.e3c3f1fe.js";import{i as C,f as w,r as _,U as I,o as i,c as p,a as h,t as m,h as c,q as y,w as d,d as T,y as g,P as R,e as b,n as V,C as j,D as S,a2 as L,j as E,z as k,k as F,ac as U}from"../app.20e38cb1.js";import{a as B,c as q,d as A,s as G,i as M,h as O,o as x}from"./floating-ui.dom.esm.4e25a8ce.js";import{t as J}from"./index.65310f70.js";import"./Caption.vue_vue_type_style_index_0_lang.92c291d2.js";import"./Button.vue_vue_type_style_index_0_lang.1acbb6e8.js";import"./browser.9a88ed44.js";import"./utils-6ba05f5b.a99d215f.js";import"./index.f8948324.js";const K=C({components:{pSubheading:D,pCaption:z,pButton:N,IconClose:P},directives:{pMd:H},props:{title:{type:String,default:void 0},text:{type:String,default:""},image:{type:String,default:void 0},highlight:{type:Boolean,default:!0},step:{type:Number,default:0},totalStep:{type:Number,default:0},dismissable:{type:Boolean,default:!0},prevLabel:{type:String,default:"Previous"},nextLabel:{type:String,default:"Next"},dismissLabel:{type:String,default:"Dismiss"},finishLabel:{type:String,default:"Finish"}},emits:["prev","next","dismiss"],setup(){return{}}});const Q=["src"],W={class:"tour__body"},X={"data-testid":"tour-title"},Y={"data-testid":"tour-text"},Z={class:"tour__footer"},tt={key:0,class:"tour__meta","data-testid":"tour-meta"},et={class:"tour__controls"},st=c("span",{class:"tour__divider"},"•",-1);function ot(t,e,s,u,a,l){const r=_("IconClose"),o=_("p-subheading"),v=_("p-caption"),f=_("p-button"),$=I("p-md");return i(),p("div",{class:V(["tour__dialog",{"tour--image":!!t.image}]),"data-testid":"tour-dialog"},[t.dismissable?(i(),p("span",{key:0,"data-testid":"tour-dismiss",class:"tour__dismiss",onClick:e[0]||(e[0]=n=>t.$emit("dismiss",n))},[h(r)])):m("",!0),t.image?(i(),p("img",{key:1,class:"tour__image","data-testid":"tour-image",src:t.image,alt:"tour-image",width:"400",height:"225"},null,8,Q)):m("",!0),c("div",W,[t.title?(i(),y(o,{key:0,size:"sm"},{default:d(()=>[T(c("span",X,null,512),[[$,t.title,void 0,{inline:!0}]])]),_:1})):m("",!0),h(v,null,{default:d(()=>[T(c("span",Y,null,512),[[$,t.text,void 0,{inline:!0}]])]),_:1})]),c("div",Z,[t.totalStep>2?(i(),p("div",tt,g(t.step)+" / "+g(t.totalStep),1)):m("",!0),c("div",et,[t.dismissable&&t.step<t.totalStep?(i(),p(R,{key:0},[h(f,{"data-testid":"tour-control-dismiss",size:"xs",variant:"link",onClick:e[1]||(e[1]=n=>t.$emit("dismiss",n))},{default:d(()=>[b(g(t.dismissLabel),1)]),_:1}),st],64)):m("",!0),h(f,{"data-testid":"tour-control-prev",size:"xs",variant:"link",disabled:t.step<2,onClick:e[2]||(e[2]=n=>t.$emit("prev",n))},{default:d(()=>[b(g(t.prevLabel),1)]),_:1},8,["disabled"]),t.step===t.totalStep?(i(),y(f,{key:1,"data-testid":"tour-control-finish",size:"xs",variant:"solid",color:"primary",onClick:e[3]||(e[3]=n=>t.$emit("next",n))},{default:d(()=>[b(g(t.finishLabel),1)]),_:1})):(i(),y(f,{key:2,"data-testid":"tour-control-next",size:"xs",variant:"solid",color:"primary",onClick:e[4]||(e[4]=n=>t.$emit("next",n))},{default:d(()=>[b(g(t.nextLabel),1)]),_:1}))])])],2)}const it=w(K,[["render",ot]]),at=C({inheritAttrs:!1,props:{target:{type:Object,default:void 0}},setup(t){const e=j(t,"target"),s=J("highlight");return S(u=>{if(s.value&&e.value){const a=B(e.value,s.value,()=>{const l=e.value.getBoundingClientRect(),r=16;s.value.style.width=`${l.width+r}px`,s.value.style.height=`${l.height+r}px`,s.value.style.left=`${l.left-r/2}px`,s.value.style.top=`${l.top-r/2}px`});u(a)}}),{}}});const nt={class:"tour__backdrop"};function rt(t,e,s,u,a,l){return i(),p("div",nt,[c("div",L({ref:"highlight",class:"tour__highlight"},t.$attrs),null,16)])}const lt=w(at,[["render",rt]]),ut=C({components:{TourDialog:it,TourHighlight:lt},setup(){const t=E(!1),e=k(),s=k(),u=k(),a=F(()=>{var o;return(o=e.value)==null?void 0:o.$el});S(o=>{if(s.value&&a.value){const v=B(s.value,a.value,async()=>{q(s.value,a.value,{strategy:"absolute",middleware:[A({altBoundary:!0}),G({padding:16}),M(),O(),x(16)]}).then(({x:f,y:$,middlewareData:n})=>{a.value&&(a.value.style.transform=`translate3d(${f||0}px, ${$||0}px, 0)`,a.value.style.visibility=n.hide.referenceHidden?"hidden":"visible")})});o(v)}}),S(o=>{t.value&&document.body.classList.add("tour--active"),o(()=>{document.body.classList.remove("tour--active")})});function l(o,v){s.value=o,u.value=v,t.value=!0}function r(){t.value=!1}return{isShow:t,dialog:e,target:s,show:l,hide:r,config:u}}});const dt={class:"tour"};function pt(t,e,s,u,a,l){const r=_("TourHighlight"),o=_("TourDialog");return i(),p("div",dt,[h(U,{name:"fade"},{default:d(()=>[t.isShow?(i(),y(r,{key:0,target:t.target},null,8,["target"])):m("",!0),t.isShow?(i(),y(o,L({key:1,ref:"dialog"},t.config),null,16)):m("",!0)]),_:1})])}const wt=w(ut,[["render",pt]]);export{wt as default};
