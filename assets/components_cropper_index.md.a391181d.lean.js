import{p as J}from"./chunks/Button.00c4db0e.js";import{t as V}from"./chunks/index.f6017335.js";import{u as re}from"./chunks/index.73ee477d.js";import{Z as ce,p as ie,J as de,a6 as ue,l as E,d as De,j as I,f as W,_ as ye,D as T,a7 as Fe,o as L,c as O,z as t,a2 as S,n as Z,H as Y,$ as P,a4 as me,C as he,G as o,B as y,a as m,r as ge,t as B,e as C,R as _,a5 as H}from"./chunks/framework.1cabf72c.js";import{t as G}from"./chunks/throttle.77eff498.js";import{p as ve}from"./chunks/InputRange.83811a2d.js";import{g as K}from"./chunks/commonjsHelpers.042e6b4d.js";import{u as Q}from"./chunks/utils-6ba05f5b.0166e5c7.js";import{I as _e,a as Ce}from"./chunks/16.808f6745.js";import{c as fe}from"./chunks/canvas.b003a521.js";import{u as Ae}from"./chunks/index.69675e13.js";import{f as be}from"./chunks/base64.041d95b4.js";import{p as we}from"./chunks/index.124614cb.js";import{u as Te}from"./chunks/index.f69e381e.js";import{a as qe}from"./chunks/index.c4b65e70.js";import"./chunks/index.a3ecab28.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/debounce.425ad733.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/defu.573334b8.js";import"./chunks/load-image.265b152a.js";import"./chunks/create-image.28dfb74f.js";import"./chunks/avatar.bd58a373.js";import"./chunks/color-hash.af77277d.js";function Ee(e,s){const n=ce();ie(async()=>{if(e.value){const{default:p}=await de(()=>import("./chunks/interact.min.6dc930b6.js").then(d=>d.i),["assets/chunks/interact.min.6dc930b6.js","assets/chunks/commonjsHelpers.042e6b4d.js"]),i=G(s.onmove,1e3/120),l=G(s.onpinch,1e3/120);n.value=p(e.value).styleCursor(!0).gesturable({inertia:!0,onstart:s.onstart,onmove:l,onend:l,modifiers:[p.modifiers.restrict({restriction:"parent",endOnly:!0})]}).draggable({inertia:!0,onstart:s.onstart,onmove:i,onend:i,modifiers:[p.modifiers.restrict({restriction:"parent",endOnly:!0})]})}}),ue(async()=>{var p;(p=n.value)==null||p.unset()})}var Ie=Q,X=Ie.createSVGComponent(X,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M2 28V16a2.0023 2.0023 0 012-2H16a2.0023 2.0023 0 012 2V28a2.0023 2.0023 0 01-2 2H4A2.0023 2.0023 0 012 28zM4 16L3.9988 28H16V16zM17 2l1.41 1.41L15.83 6H21a7.0078 7.0078 0 017 7v5H26V13a5.0057 5.0057 0 00-5-5H15.83l2.58 2.59L17 12 12 7z"}}]),Se=X;const Pe=K(Se);var Ve=Q,ee=Ve.createSVGComponent(ee,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M28 30H16a2.0023 2.0023 0 01-2-2V16a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2V28A2.0023 2.0023 0 0128 30zM16 16V28H28.0012L28 16zM15 2L13.59 3.41 16.17 6H11a7.0078 7.0078 0 00-7 7v5H6V13a5.0057 5.0057 0 015-5h5.17l-2.58 2.59L15 12l5-5z"}}]),xe=ee;const ke=K(xe);function Re(e){var c;const{width:s,height:n,image:p,scale:i,angle:l,x:d,y:D,rounded:v}=e,u=(c=e.canvas)!=null?c:fe(s,n),a=u.getContext("2d"),F=p.width*i,q=p.height*i;if(u.width=s,u.height=n,a.clearRect(0,0,s,n),a.translate(s/2,n/2),a.rotate(l*Math.PI/180),a.translate(s/-2,n/-2),a.drawImage(p,(s-F)/2+d,(n-q)/2+D,F,q),v){const h=Math.min(s/2,n/2);a.globalCompositeOperation="destination-in",a.beginPath(),a.moveTo(h,0),a.arcTo(s,0,s,n,h),a.arcTo(s,n,0,n,h),a.arcTo(0,n,0,0,h),a.arcTo(0,0,s,0,h),a.closePath(),a.fill()}return u.toDataURL()}function Ne(e,s=1){return E(()=>{var n;return e.width&&e.height?Number.parseFloat(`${e.width}`)/Number.parseFloat(`${e.height}`):(n=e.ratio)!=null?n:s})}function ze(e){return E(()=>{if(e.width)return Number.parseFloat(`${e.width}`);if(e.height&&e.ratio)return Number.parseFloat(`${e.height}`)*e.ratio})}function $e(e){return E(()=>{if(e.height)return Number.parseFloat(`${e.height}`);if(e.width&&e.ratio)return Number.parseFloat(`${e.width}`)/e.ratio})}const Me=De({directives:{pAspectRatio:we},components:{pButton:J,pInputRange:ve,IconRotateLeft:Pe,IconRotateRight:ke,IconZoomIn:_e,IconZoomOut:Ce},props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},src:{type:[String,globalThis.File],default:void 0},ratio:{type:Number,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},imgWidth:{type:[String,Number],default:512},imgHeight:{type:[String,Number],default:512},imgClass:{type:[String,Array,Object],default:void 0},rounded:{type:Boolean,default:!1},noCrop:{type:Boolean,default:!1},noAutocrop:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change","result","load"],setup(e,{emit:s}){const n=Ae(e),p=I(0),i=I(0),l=I(0),d=re(1,.5,2),D=Ne(e),v=ze(e),u=$e(e),a=W(e,"rounded"),F=W(e,"src"),q=Te(F),c=V("canvas"),h=V("parent"),g=V("target"),se=E(()=>{const r=[];return e.noCrop&&r.push("cropper--no-crop"),e.rounded&&r.push("cropper--rounded"),r}),te=E(()=>({transform:`rotate(${l.value}deg) translate(${p.value}px, ${i.value}px) scale(${d.value})`})),ae=E(()=>({aspectRatio:`${D.value}`,width:v.value?`${v.value}px`:"66.666667%"}));function x(){if(h.value&&g.value){const r=l.value%180===0?g.value.width:g.value.height,A=l.value%180===0?g.value.height:g.value.width;d.value=Math.min(h.value.clientWidth/r,h.value.clientHeight/A)}p.value=0,i.value=0}function U(){d.value+=.1}function j(){d.value-=.1}function oe(r){l.value=(Math.trunc(l.value/90)*90+r)%360,x()}function k(r,A){const b=Math.cos(l.value*Math.PI/180),w=Math.sin(l.value*Math.PI/180),N=r*b+A*w,z=A*b-r*w;p.value+=N,i.value+=z}function ne(){l.value=0,x()}function R(){var r,A;if(h.value&&g.value&&c.value){const b=h.value.clientWidth*2/3,w=(r=v.value)!=null?r:b,N=(A=u.value)!=null?A:w/D.value,z=b>0&&w>b?w/b:1,$=Re({canvas:c.value,image:g.value,width:w,height:N,x:p.value,y:i.value,angle:l.value,scale:d.value*z,rounded:e.rounded}),M=e.modelModifiers.base64?$:be($);return n.value=M,s("change",M),s("result",M),$}}function le(r){g.value&&g.value.focus(),r.deltaY>0?U():j()}function pe(){s("load"),x(),!e.noCrop&&!e.noAutocrop&&R()}return Ee(g,{onpinch(r){d.value=r.scale,k(r.dx,r.dy)},onmove(r){k(r.dx,r.dy)}}),qe([F,v,u,D,a,p,i,d,l],()=>{!e.noCrop&&!e.noAutocrop&&R()},{debounce:500}),{classNames:se,preview:q,imgStyle:te,maskStyle:ae,scale:d,angle:l,reset:ne,onMouseWheel:le,onImageLoaded:pe,rotate:oe,zoomIn:U,zoomOut:j,move:k,crop:R,model:n,aspectRatio:D}}});const Be={class:"cropper__preview"},He={ref:"canvas","data-testid":"cropper-canvas",class:"cropper__canvas"},Le=["src","width","height"],Oe={class:"cropper__control"},Ue={class:"cropper__control-bar"};function je(e,s,n,p,i,l){const d=T("IconZoomOut"),D=T("p-button"),v=T("p-input-range"),u=T("IconZoomIn"),a=T("IconRotateLeft"),F=T("IconRotateRight"),q=Fe("p-aspect-ratio");return L(),O("div",{"data-testid":"cropper",class:Z(["cropper",e.classNames])},[t("div",Be,[t("canvas",He,null,512),t("div",{ref:"parent","data-testid":"cropper-container",class:"cropper__image-container",onWheel:s[5]||(s[5]=S((...c)=>e.onMouseWheel&&e.onMouseWheel(...c),["prevent"]))},[t("img",{ref:"target","data-testid":"cropper-preview",alt:"cropper-preview",tabindex:"0",class:Z(["cropper__image",e.imgClass]),src:e.preview,style:Y(e.imgStyle),width:e.imgWidth,height:e.imgHeight,onLoad:s[0]||(s[0]=(...c)=>e.onImageLoaded&&e.onImageLoaded(...c)),onKeydown:[s[1]||(s[1]=P(S(c=>e.move(0,-1),["prevent"]),["up"])),s[2]||(s[2]=P(S(c=>e.move(0,1),["prevent"]),["down"])),s[3]||(s[3]=P(S(c=>e.move(-1,0),["prevent"]),["left"])),s[4]||(s[4]=P(S(c=>e.move(1,0),["prevent"]),["right"]))]},null,46,Le)],544),e.noCrop?he("",!0):me((L(),O("div",{key:0,"data-testid":"cropper-mask",class:"cropper__mask",style:Y(e.maskStyle)},null,4)),[[q,e.aspectRatio,void 0,{fixed:!0}]])]),t("div",Oe,[t("div",Ue,[o(D,{"data-testid":"cropper-zoom-out",size:"xs",variant:"link",icon:"",pill:"",onClick:s[6]||(s[6]=c=>e.zoomOut())},{default:y(()=>[o(d)]),_:1}),o(v,{modelValue:e.scale,"onUpdate:modelValue":s[7]||(s[7]=c=>e.scale=c),"data-testid":"cropper-zoom-slider",class:"cropper__slider",min:"0.5",max:"2",step:"0.1"},null,8,["modelValue"]),o(D,{"data-testid":"cropper-zoom-in",size:"xs",variant:"link",icon:"",pill:"",onClick:s[8]||(s[8]=c=>e.zoomIn())},{default:y(()=>[o(u)]),_:1}),o(D,{"data-testid":"cropper-rotate-left",size:"xs",variant:"link",icon:"",pill:"",onClick:s[9]||(s[9]=c=>e.rotate(-90))},{default:y(()=>[o(a)]),_:1}),o(D,{"data-testid":"cropper-rotate-right",size:"xs",variant:"link",icon:"",pill:"",onClick:s[10]||(s[10]=c=>e.rotate(90))},{default:y(()=>[o(F)]),_:1})]),o(D,{"data-testid":"cropper-reset",class:"flex-shrink-0",size:"xs",variant:"link",onClick:s[11]||(s[11]=c=>e.reset())},{default:y(()=>[m(" Reset ")]),_:1}),ge(e.$slots,"control",{scale:e.scale,angle:e.angle,crop:e.crop,zoomIn:e.zoomIn,zoomOut:e.zoomOut,rotate:e.rotate,reset:e.reset})])],2)}const f=ye(Me,[["render",je]]),We=_("",4),Ze=_("",4),Ye=_("",2),Ge=_("",3),Je=_("",3),Ke=_("",3),Qe=_("",2),Xe={class:"truncate"},es=t("h3",{id:"encode-to-base64",tabindex:"-1"},[m("Encode to base64 "),t("a",{class:"header-anchor",href:"#encode-to-base64","aria-label":'Permalink to "Encode to base64"'},"​")],-1),ss=t("p",null,[m("You can add modifier "),t("code",null,"base64"),m(" to your "),t("code",null,"v-model"),m(", it's enforce result to "),t("a",{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noreferrer"},"base64-dataURI"),m(".")],-1),ts=_("",2),as={class:"truncate"},os=["src"],ns=t("h3",{id:"disabling-autocrop",tabindex:"-1"},[m("Disabling Autocrop "),t("a",{class:"header-anchor",href:"#disabling-autocrop","aria-label":'Permalink to "Disabling Autocrop"'},"​")],-1),ls=t("p",null,[m("By default, cropping process was ran every movement (drag, zoom, & rotate). It can be exhausting the resource on some device. You can disabled it using prop "),t("code",null,"no-autocrop"),m(". And to trigger the cropping, you can use "),t("code",null,"templateRef"),m(" on "),t("code",null,"<p-cropper>"),m(" component, and call "),t("code",null,".crop()"),m(" function.")],-1),ps={class:"mt-4"},rs=t("p",null,[t("strong",null,"result:")],-1),cs={class:"truncate"},is=["src"],ds=_("",10),Ms=JSON.parse('{"title":"Cropper · Components","description":"Preview and crop image","frontmatter":{"title":"Cropper · Components","description":"Preview and crop image"},"headers":[],"relativePath":"components/cropper/index.md","filePath":"components/cropper/index.md"}'),us={name:"components/cropper/index.md"},Bs=Object.assign(us,{setup(e){const s="/assets/images/img-sample-crop.jpg",n="/assets/images/empty-img.png",p=I(),i=I(),l=I(),d=V("cropper");function D(){d.value&&d.value.crop()}return(v,u)=>{const a=T("preview");return L(),O("div",null,[We,o(a,{class:"flex-col"},{default:y(()=>[o(f,{src:s})]),_:1}),Ze,o(a,null,{default:y(()=>[o(f,{src:s,width:"500",height:"200"})]),_:1}),Ye,o(a,null,{default:y(()=>[o(f,{src:s,ratio:16/9})]),_:1}),Ge,o(a,null,{default:y(()=>[o(f,{src:s,rounded:""})]),_:1}),Je,o(a,null,{default:y(()=>[o(f,{src:s,"no-crop":""})]),_:1}),Ke,o(a,null,{default:y(()=>[o(f,{src:s,modelValue:C(p),"onUpdate:modelValue":u[0]||(u[0]=F=>H(p)?p.value=F:null)},null,8,["modelValue"])]),_:1}),Qe,t("pre",Xe,[t("code",null,B(C(p)),1)]),es,ss,o(a,{class:"flex-col"},{default:y(()=>[o(f,{src:s,modelValue:C(i),"onUpdate:modelValue":u[1]||(u[1]=F=>H(i)?i.value=F:null),modelModifiers:{base64:!0}},null,8,["modelValue"])]),_:1}),ts,t("pre",as,[t("code",null,B(C(i)),1)]),t("img",{class:"mt-2 border",src:C(i)||n,alt:"Result Image"},null,8,os),ns,ls,o(a,{class:"flex-col"},{default:y(()=>[o(f,{ref_key:"cropper",ref:d,src:s,modelValue:C(l),"onUpdate:modelValue":u[2]||(u[2]=F=>H(l)?l.value=F:null),modelModifiers:{base64:!0},"no-autocrop":""},null,8,["modelValue"]),t("div",ps,[o(J,{onClick:D},{default:y(()=>[m("Do Crop")]),_:1})])]),_:1}),rs,t("pre",cs,[t("code",null,B(C(l)),1)]),t("img",{class:"mt-2 border",src:C(l)||n,alt:"Result Image"},null,8,is),ds])}}});export{Ms as __pageData,Bs as default};
