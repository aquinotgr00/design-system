import{p as Q}from"./chunks/Button.c45fb4d8.js";import{t as x}from"./chunks/index.f92bfe5e.js";import{u as ce}from"./chunks/index.c7a185b2.js";import{X as ie,j as de,H as ue,a6 as De,f as I,d as ye,h as S,a5 as Y,_ as Fe,B as q,a7 as me,o as U,c as L,x as t,a1 as V,n as Z,Y as G,Z as P,a3 as he,A as ge,D as a,z as m,a as h,r as ve,t as H,b as d,Q as _,a4 as O}from"./chunks/framework.76afac0a.js";import{t as K}from"./chunks/throttle.77eff498.js";import{p as _e}from"./chunks/InputRange.9523bd9c.js";import{u as X}from"./chunks/utils-6ba05f5b.d8ec137d.js";import{I as Ce,a as fe}from"./chunks/16.a0c7c87a.js";import{c as Ae}from"./chunks/canvas.b003a521.js";import{u as be}from"./chunks/index.66044519.js";import{f as we}from"./chunks/base64.041d95b4.js";import{p as Te}from"./chunks/index.7b7086ea.js";import{u as qe}from"./chunks/index.7e6a8de4.js";import{a as Ee}from"./chunks/index.d997e305.js";import{E as J}from"./chunks/empty-img.d1245f3d.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.3d0b80e1.js";import"./chunks/index.a3ecab28.js";import"./chunks/debounce.425ad733.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/defu.573334b8.js";import"./chunks/load-image.265b152a.js";import"./chunks/create-image.28dfb74f.js";import"./chunks/avatar.bd58a373.js";import"./chunks/color-hash.af77277d.js";function Ie(e,s){const o=ie();de(async()=>{if(e.value){const{default:n}=await ue(()=>import("./chunks/interact.min.62923298.js").then(y=>y.i),["assets/chunks/interact.min.62923298.js","assets/chunks/commonjsHelpers.042e6b4d.js"]),D=K(s.onmove,1e3/120),r=K(s.onpinch,1e3/120);o.value=n(e.value).styleCursor(!0).gesturable({inertia:!0,onstart:s.onstart,onmove:r,onend:r,modifiers:[n.modifiers.restrict({restriction:"parent",endOnly:!0})]}).draggable({inertia:!0,onstart:s.onstart,onmove:D,onend:D,modifiers:[n.modifiers.restrict({restriction:"parent",endOnly:!0})]})}}),De(async()=>{var n;(n=o.value)==null||n.unset()})}var Se=X,ee=Se.createSVGComponent(ee,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M2 28V16a2.0023 2.0023 0 012-2H16a2.0023 2.0023 0 012 2V28a2.0023 2.0023 0 01-2 2H4A2.0023 2.0023 0 012 28zM4 16L3.9988 28H16V16zM17 2l1.41 1.41L15.83 6H21a7.0078 7.0078 0 017 7v5H26V13a5.0057 5.0057 0 00-5-5H15.83l2.58 2.59L17 12 12 7z"}}]),Ve=ee;const Pe=Ve;var xe=X,se=xe.createSVGComponent(se,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M28 30H16a2.0023 2.0023 0 01-2-2V16a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2V28A2.0023 2.0023 0 0128 30zM16 16V28H28.0012L28 16zM15 2L13.59 3.41 16.17 6H11a7.0078 7.0078 0 00-7 7v5H6V13a5.0057 5.0057 0 015-5h5.17l-2.58 2.59L15 12l5-5z"}}]),ke=se;const Re=ke;function Ne(e){var p;const{width:s,height:o,image:n,scale:D,angle:r,x:y,y:c,rounded:u}=e,F=(p=e.canvas)!=null?p:Ae(s,o),i=F.getContext("2d"),A=n.width*D,E=n.height*D;if(F.width=s,F.height=o,i.clearRect(0,0,s,o),i.translate(s/2,o/2),i.rotate(r*Math.PI/180),i.translate(s/-2,o/-2),i.drawImage(n,(s-A)/2+y,(o-E)/2+c,A,E),u){const g=Math.min(s/2,o/2);i.globalCompositeOperation="destination-in",i.beginPath(),i.moveTo(g,0),i.arcTo(s,0,s,o,g),i.arcTo(s,o,0,o,g),i.arcTo(0,o,0,0,g),i.arcTo(0,0,s,0,g),i.closePath(),i.fill()}return F.toDataURL()}function ze(e){return I(()=>{var s;return e.width&&e.height?Number.parseFloat(`${e.width}`)/Number.parseFloat(`${e.height}`):(s=e.ratio)!=null?s:1})}function $e(e){return I(()=>{if(e.width)return Number.parseFloat(`${e.width}`);if(e.height&&e.ratio)return Number.parseFloat(`${e.height}`)*e.ratio})}function Me(e){return I(()=>{if(e.height)return Number.parseFloat(`${e.height}`);if(e.width&&e.ratio)return Number.parseFloat(`${e.width}`)/e.ratio})}const Be=ye({directives:{pAspectRatio:Te},components:{pButton:Q,pInputRange:_e,IconRotateLeft:Pe,IconRotateRight:Re,IconZoomIn:Ce,IconZoomOut:fe},props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},src:{type:[String,globalThis.File],default:void 0},ratio:{type:Number,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},imgWidth:{type:[String,Number],default:512},imgHeight:{type:[String,Number],default:512},imgClass:{type:[String,Array,Object],default:void 0},rounded:{type:Boolean,default:!1},noCrop:{type:Boolean,default:!1},noAutocrop:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change","result","load"],setup(e,{emit:s}){const o=be(e),n=S(0),D=S(0),r=S(0),y=ce(1,.5,2),c=ze(e),u=$e(e),F=Me(e),i=Y(e,"rounded"),A=Y(e,"src"),E=qe(A),p=x("canvas"),g=x("parent"),v=x("target"),te=I(()=>{const l=[];return e.noCrop&&l.push("cropper--no-crop"),e.rounded&&l.push("cropper--rounded"),l}),ae=I(()=>({transform:`rotate(${r.value}deg) translate(${n.value}px, ${D.value}px) scale(${y.value})`})),oe=I(()=>({aspectRatio:`${c.value}`,width:u.value?`${u.value}px`:"66.666667%"}));function k(){if(g.value&&v.value){const l=r.value%180===0?v.value.width:v.value.height,b=r.value%180===0?v.value.height:v.value.width;y.value=Math.min(g.value.clientWidth/l,g.value.clientHeight/b)}n.value=0,D.value=0}function j(){y.value+=.1}function W(){y.value-=.1}function ne(l){r.value=(Math.trunc(r.value/90)*90+l)%360,k()}function R(l,b){const w=Math.cos(r.value*Math.PI/180),T=Math.sin(r.value*Math.PI/180),z=l*w+b*T,$=b*w-l*T;n.value+=z,D.value+=$}function le(){r.value=0,k()}function N(){var l,b;if(g.value&&v.value&&p.value){const w=g.value.clientWidth*2/3,T=(l=u.value)!=null?l:w,z=(b=F.value)!=null?b:T/c.value,$=w>0&&T>w?T/w:1,M=Ne({canvas:p.value,image:v.value,width:T,height:z,x:n.value,y:D.value,angle:r.value,scale:y.value*$,rounded:e.rounded}),B=e.modelModifiers.base64?M:we(M);return o.value=B,s("change",B),s("result",B),M}}function pe(l){v.value&&v.value.focus(),l.deltaY>0?j():W()}function re(){s("load"),k(),!e.noCrop&&!e.noAutocrop&&N()}return Ie(v,{onpinch(l){y.value=l.scale,R(l.dx,l.dy)},onmove(l){R(l.dx,l.dy)}}),Ee([A,u,F,c,i,n,D,y,r],()=>{!e.noCrop&&!e.noAutocrop&&N()},{debounce:500}),{classNames:te,preview:E,imgStyle:ae,maskStyle:oe,scale:y,angle:r,reset:le,onMouseWheel:pe,onImageLoaded:re,rotate:ne,zoomIn:j,zoomOut:W,move:R,crop:N,model:o,aspectRatio:c}}});const He={class:"cropper__preview"},Oe={ref:"canvas","data-testid":"cropper-canvas",class:"cropper__canvas"},Ue=["src","width","height"],Le={class:"cropper__control"},je={class:"cropper__control-bar"};function We(e,s,o,n,D,r){const y=q("IconZoomOut"),c=q("p-button"),u=q("p-input-range"),F=q("IconZoomIn"),i=q("IconRotateLeft"),A=q("IconRotateRight"),E=me("p-aspect-ratio");return U(),L("div",{"data-testid":"cropper",class:Z(["cropper",e.classNames])},[t("div",He,[t("canvas",Oe,null,512),t("div",{ref:"parent","data-testid":"cropper-container",class:"cropper__image-container",onWheel:s[5]||(s[5]=V((...p)=>e.onMouseWheel&&e.onMouseWheel(...p),["prevent"]))},[t("img",{ref:"target","data-testid":"cropper-preview",alt:"cropper-preview",tabindex:"0",class:Z(["cropper__image",e.imgClass]),src:e.preview,style:G(e.imgStyle),width:e.imgWidth,height:e.imgHeight,onLoad:s[0]||(s[0]=(...p)=>e.onImageLoaded&&e.onImageLoaded(...p)),onKeydown:[s[1]||(s[1]=P(V(p=>e.move(0,-1),["prevent"]),["up"])),s[2]||(s[2]=P(V(p=>e.move(0,1),["prevent"]),["down"])),s[3]||(s[3]=P(V(p=>e.move(-1,0),["prevent"]),["left"])),s[4]||(s[4]=P(V(p=>e.move(1,0),["prevent"]),["right"]))]},null,46,Ue)],544),e.noCrop?ge("",!0):he((U(),L("div",{key:0,"data-testid":"cropper-mask",class:"cropper__mask",style:G(e.maskStyle)},null,4)),[[E,e.aspectRatio,void 0,{fixed:!0}]])]),t("div",Le,[t("div",je,[a(c,{"data-testid":"cropper-zoom-out",size:"xs",variant:"link",icon:"",pill:"",onClick:s[6]||(s[6]=p=>e.zoomOut())},{default:m(()=>[a(y)]),_:1}),a(u,{modelValue:e.scale,"onUpdate:modelValue":s[7]||(s[7]=p=>e.scale=p),"data-testid":"cropper-zoom-slider",class:"cropper__slider",min:"0.5",max:"2",step:"0.1"},null,8,["modelValue"]),a(c,{"data-testid":"cropper-zoom-in",size:"xs",variant:"link",icon:"",pill:"",onClick:s[8]||(s[8]=p=>e.zoomIn())},{default:m(()=>[a(F)]),_:1}),a(c,{"data-testid":"cropper-rotate-left",size:"xs",variant:"link",icon:"",pill:"",onClick:s[9]||(s[9]=p=>e.rotate(-90))},{default:m(()=>[a(i)]),_:1}),a(c,{"data-testid":"cropper-rotate-right",size:"xs",variant:"link",icon:"",pill:"",onClick:s[10]||(s[10]=p=>e.rotate(90))},{default:m(()=>[a(A)]),_:1})]),a(c,{"data-testid":"cropper-reset",class:"flex-shrink-0",size:"xs",variant:"link",onClick:s[11]||(s[11]=p=>e.reset())},{default:m(()=>[h(" Reset ")]),_:1}),ve(e.$slots,"control",{scale:e.scale,angle:e.angle,crop:e.crop,zoomIn:e.zoomIn,zoomOut:e.zoomOut,rotate:e.rotate,reset:e.reset})])],2)}const C=Fe(Be,[["render",We]]),f="/design-system/assets/sample-1.f0af279a.jpg",Ye=_("",4),Ze=_("",4),Ge=_("",2),Ke=_("",3),Je=_("",3),Qe=_("",3),Xe=_("",2),es={class:"truncate"},ss=t("h3",{id:"encode-to-base64",tabindex:"-1"},[h("Encode to base64 "),t("a",{class:"header-anchor",href:"#encode-to-base64","aria-label":'Permalink to "Encode to base64"'},"​")],-1),ts=t("p",null,[h("You can add modifier "),t("code",null,"base64"),h(" to your "),t("code",null,"v-model"),h(", it's enforce result to "),t("a",{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noreferrer"},"base64-dataURI"),h(".")],-1),as=_("",2),os={class:"truncate"},ns=["src"],ls=t("h3",{id:"disabling-autocrop",tabindex:"-1"},[h("Disabling Autocrop "),t("a",{class:"header-anchor",href:"#disabling-autocrop","aria-label":'Permalink to "Disabling Autocrop"'},"​")],-1),ps=t("p",null,[h("By default, cropping process was ran every movement (drag, zoom, & rotate). It can be exhausting the resource on some device. You can disabled it using prop "),t("code",null,"no-autocrop"),h(". And to trigger the cropping, you can use "),t("code",null,"templateRef"),h(" on "),t("code",null,"<p-cropper>"),h(" component, and call "),t("code",null,".crop()"),h(" function.")],-1),rs=t("p",null,[t("strong",null,"result:")],-1),cs={class:"truncate"},is=["src"],ds=_("",10),Bs=JSON.parse('{"title":"Cropper · Components","description":"Preview and crop image","frontmatter":{"title":"Cropper · Components","description":"Preview and crop image"},"headers":[],"relativePath":"components/cropper/index.md"}'),us={name:"components/cropper/index.md"},Hs=Object.assign(us,{setup(e){const s=S(),o=S(),n=S(),D=x("cropper");function r(){D.value&&D.value.crop()}return(y,c)=>{const u=q("preview");return U(),L("div",null,[Ye,a(u,{class:"flex-col"},{default:m(()=>[a(C,{src:d(f)},null,8,["src"])]),_:1}),Ze,a(u,null,{default:m(()=>[a(C,{src:d(f),width:"500",height:"200"},null,8,["src"])]),_:1}),Ge,a(u,null,{default:m(()=>[a(C,{src:d(f),ratio:16/9},null,8,["src"])]),_:1}),Ke,a(u,null,{default:m(()=>[a(C,{src:d(f),rounded:""},null,8,["src"])]),_:1}),Je,a(u,null,{default:m(()=>[a(C,{src:d(f),"no-crop":""},null,8,["src"])]),_:1}),Qe,a(u,null,{default:m(()=>[a(C,{src:d(f),modelValue:d(s),"onUpdate:modelValue":c[0]||(c[0]=F=>O(s)?s.value=F:null)},null,8,["src","modelValue"])]),_:1}),Xe,t("pre",es,[t("code",null,H(d(s)),1)]),ss,ts,a(u,{class:"flex-col"},{default:m(()=>[a(C,{src:d(f),modelValue:d(o),"onUpdate:modelValue":c[1]||(c[1]=F=>O(o)?o.value=F:null),modelModifiers:{base64:!0}},null,8,["src","modelValue"])]),_:1}),as,t("pre",os,[t("code",null,H(d(o)),1)]),t("img",{class:"mt-2 border",src:d(o)||d(J),alt:"Result Image"},null,8,ns),ls,ps,a(u,{class:"flex-col"},{default:m(()=>[a(C,{ref_key:"cropper",ref:D,src:d(f),modelValue:d(n),"onUpdate:modelValue":c[2]||(c[2]=F=>O(n)?n.value=F:null),modelModifiers:{base64:!0},"no-autocrop":""},null,8,["src","modelValue"]),a(Q,{onClick:r},{default:m(()=>[h("Do Crop")]),_:1})]),_:1}),rs,t("pre",cs,[t("code",null,H(d(n)),1)]),t("img",{class:"mt-2 border",src:d(n)||d(J),alt:"Result Image"},null,8,is),ds])}}});export{Bs as __pageData,Hs as default};