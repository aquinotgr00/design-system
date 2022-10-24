import{B as X}from"./chunks/Button.8e069745.js";import{g as De,t as k,h as ye}from"./chunks/index.b3d64cd1.js";import{s as Fe,j as ee,Q as he,R as se,h as E,f as ge,g as S,B as Z,i as me,_ as ve,b as T,o as O,c as j,a as t,y as x,n as Y,Y as G,Z as R,p as Ce,d as o,w as F,C as _e,$ as fe,k as h,r as Ae,t as B,u as v,e as C}from"./app.32e5ad64.js";import{t as K,c as be,E as J}from"./chunks/empty-img.18f94702.js";import{u as z}from"./chunks/utils-6ba05f5b.e05eb0d9.js";import{u as we}from"./chunks/use-input.1f19881a.js";import{f as Se}from"./chunks/base64.e46863ef.js";import{c as Q}from"./chunks/create-image.19720f32.js";import"./chunks/toNumber.9376c838.js";import"./chunks/isSymbol.f4a981c1.js";import"./chunks/defu.087119af.js";import"./chunks/load-image.5a7761ed.js";import"./chunks/index.69a8ee88.js";import"./chunks/index.e2432ff2.js";import"./chunks/avatar.212b8f8a.js";import"./chunks/color-hash.fa715313.js";function Te(e,s){const l=Fe();ee(async()=>{if(e.value){const{default:r}=await he(()=>import("./chunks/interact.min.29da5100.js").then(y=>y.i),["assets/chunks/interact.min.29da5100.js","assets/chunks/utils-6ba05f5b.e05eb0d9.js","assets/app.32e5ad64.js"]),u=K(s.onmove,1e3/120),p=K(s.onpinch,1e3/120);l.value=r(e.value).styleCursor(!0).gesturable({inertia:!0,onstart:s.onstart,onmove:p,onend:p,modifiers:[r.modifiers.restrict({restriction:"parent",endOnly:!0})]}).draggable({inertia:!0,onstart:s.onstart,onmove:u,onend:u,modifiers:[r.modifiers.restrict({restriction:"parent",endOnly:!0})]})}}),se(async()=>{var r;(r=l.value)==null||r.unset()})}var Ee=z,te=Ee.createSVGComponent(te,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M2 28V16a2.0023 2.0023 0 012-2H16a2.0023 2.0023 0 012 2V28a2.0023 2.0023 0 01-2 2H4A2.0023 2.0023 0 012 28zM4 16L3.9988 28H16V16zM17 2l1.41 1.41L15.83 6H21a7.0078 7.0078 0 017 7v5H26V13a5.0057 5.0057 0 00-5-5H15.83l2.58 2.59L17 12 12 7z"}}]),Ie=te;const Ve=Ie;var xe=z,ae=xe.createSVGComponent(ae,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M28 30H16a2.0023 2.0023 0 01-2-2V16a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2V28A2.0023 2.0023 0 0128 30zM16 16V28H28.0012L28 16zM15 2L13.59 3.41 16.17 6H11a7.0078 7.0078 0 00-7 7v5H6V13a5.0057 5.0057 0 015-5h5.17l-2.58 2.59L15 12l5-5z"}}]),Re=ae;const ke=Re;var ze=z,oe=ze.createSVGComponent(oe,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M9 6L7 6 7 4 6 4 6 6 4 6 4 7 6 7 6 9 7 9 7 7 9 7z"}},{elem:"path",attrs:{d:"M10.7,10C11.5,9,12,7.8,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1.3,0,2.5-0.5,3.5-1.3l3.8,3.8l0.7-0.7	L10.7,10z M6.5,11C4,11,2,9,2,6.5S4,2,6.5,2S11,4,11,6.5S9,11,6.5,11L6.5,11z"}}]),Ne=oe;const $e=Ne;var Me=z,ne=Me.createSVGComponent(ne,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M4 6H9V7H4z"}},{elem:"path",attrs:{d:"M10.7,10C11.5,9,12,7.8,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1.3,0,2.5-0.5,3.5-1.3l3.8,3.8l0.7-0.7	L10.7,10z M6.5,11C4,11,2,9,2,6.5S4,2,6.5,2S11,4,11,6.5S9,11,6.5,11L6.5,11z"}}]),qe=ne;const Pe=qe;function Le(e){var V;const{width:s,height:l,image:r,scale:u,angle:p,x:y,y:n,rounded:D}=e,d=(V=e.canvas)!=null?V:be(s,l),c=d.getContext("2d"),i=r.width*u,I=r.height*u;if(d.width=s,d.height=l,c.clearRect(0,0,s,l),c.translate(s/2,l/2),c.rotate(p*Math.PI/180),c.translate(s/-2,l/-2),c.drawImage(r,(s-i)/2+y,(l-I)/2+n,i,I),D){const g=Math.min(s/2,l/2);c.globalCompositeOperation="destination-in",c.beginPath(),c.moveTo(g,0),c.arcTo(s,0,s,l,g),c.arcTo(s,l,0,l,g),c.arcTo(0,l,0,0,g),c.arcTo(0,0,s,0,g),c.closePath(),c.fill()}return d.toDataURL()}function Ue(e){return E(()=>{var s;return e.width&&e.height?Number.parseFloat(`${e.width}`)/Number.parseFloat(`${e.height}`):(s=e.ratio)!=null?s:1})}function Be(e){return E(()=>{if(e.width)return Number.parseFloat(`${e.width}`);if(e.height&&e.ratio)return Number.parseFloat(`${e.height}`)*e.ratio})}function Oe(e){return E(()=>{if(e.height)return Number.parseFloat(`${e.height}`);if(e.width&&e.ratio)return Number.parseFloat(`${e.width}`)/e.ratio})}const je=ge({components:{pButton:X,IconRotateLeft:Ve,IconRotateRight:ke,IconZoomIn:$e,IconZoomOut:Pe},props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},src:{type:[String,globalThis.File],default:void 0},ratio:{type:Number,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},imgWidth:{type:[String,Number],default:512},imgHeight:{type:[String,Number],default:512},imgClass:{type:[String,Array,Object],default:void 0},rounded:{type:Boolean,default:!1},noCrop:{type:Boolean,default:!1},noAutocrop:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change","result","load"],setup(e,{emit:s}){const l=we(e),r=S(0),u=S(0),p=S(0),y=De(1,.5,2),n=S(Q(512,512)),D=Ue(e),d=Be(e),c=Oe(e),i=Z(e,"rounded"),I=Z(e,"src"),V=k("canvas"),g=k("parent"),m=k("target"),le=E(()=>{const a=[];return e.noCrop&&a.push("cropper--no-crop"),e.rounded&&a.push("cropper--rounded"),a}),re=E(()=>({transform:`rotate(${p.value}deg) translate(${r.value}px, ${u.value}px) scale(${y.value})`})),pe=E(()=>({aspectRatio:`${D.value}`,width:d.value?`${d.value}px`:"66.666667%"}));function N(){if(g.value&&m.value){const a=p.value%180===0?m.value.width:m.value.height,A=p.value%180===0?m.value.height:m.value.width;y.value=Math.min(g.value.clientWidth/a,g.value.clientHeight/A)}r.value=0,u.value=0}function H(){y.value+=.1}function W(){y.value-=.1}function ce(a){p.value=(Math.trunc(p.value/90)*90+a)%360,N()}function $(a,A){const b=Math.cos(p.value*Math.PI/180),w=Math.sin(p.value*Math.PI/180),q=a*b+A*w,P=A*b-a*w;r.value+=q,u.value+=P}function ie(){p.value=0,N()}function M(){var a,A;if(g.value&&m.value&&V.value){const b=g.value.clientWidth*2/3,w=(a=d.value)!=null?a:b,q=(A=c.value)!=null?A:w/D.value,P=b>0&&w>b?w/b:1,L=Le({canvas:V.value,image:m.value,width:w,height:q,x:r.value,y:u.value,angle:p.value,scale:y.value*P,rounded:e.rounded}),U=e.modelModifiers.base64?L:Se(L);return l.value=U,s("change",U),s("result",U),L}}function de(a){m.value&&m.value.focus(),a.deltaY>0?H():W()}function ue(){s("load"),N(),!e.noCrop&&!e.noAutocrop&&M()}return Te(m,{onpinch(a){y.value=a.scale,$(a.dx,a.dy)},onmove(a){$(a.dx,a.dy)}}),me(I,a=>{n.value&&n.value.startsWith("blob")&&window.URL.revokeObjectURL(n.value),n.value=a instanceof globalThis.File?window.URL.createObjectURL(a):a!=null?a:Q(512,512)}),ye([I,d,c,D,i,r,u,y,p],()=>{!e.noCrop&&!e.noAutocrop&&M()},{debounce:500}),ee(()=>{e.src&&(n.value=e.src instanceof globalThis.File?window.URL.createObjectURL(e.src):e.src)}),se(()=>{n.value&&n.value.startsWith("blob")&&window.URL.revokeObjectURL(n.value)}),{classNames:le,preview:n,imgStyle:re,maskStyle:pe,scale:y,angle:p,reset:ie,onMouseWheel:de,onImageLoaded:ue,rotate:ce,zoomIn:H,zoomOut:W,move:$,crop:M,model:l}}});const He={class:"cropper__preview"},We={ref:"canvas","data-testid":"cropper-canvas",class:"cropper__canvas"},Ze=["src","width","height"],Ye={class:"cropper__control"},Ge={class:"cropper__control-bar"};function Ke(e,s,l,r,u,p){const y=T("IconZoomOut"),n=T("p-button"),D=T("IconZoomIn"),d=T("IconRotateLeft"),c=T("IconRotateRight");return O(),j("div",{"data-testid":"cropper",class:Y(["cropper",e.classNames])},[t("div",He,[t("canvas",We,null,512),t("div",{ref:"parent","data-testid":"cropper-container",class:"cropper__image-container",onWheel:s[5]||(s[5]=x((...i)=>e.onMouseWheel&&e.onMouseWheel(...i),["prevent"]))},[t("img",{ref:"target","data-testid":"cropper-preview",alt:"cropper-preview",tabindex:"0",class:Y(["cropper__image",e.imgClass]),src:e.preview,style:G(e.imgStyle),width:e.imgWidth,height:e.imgHeight,onLoad:s[0]||(s[0]=(...i)=>e.onImageLoaded&&e.onImageLoaded(...i)),onKeydown:[s[1]||(s[1]=R(x(i=>e.move(0,-1),["prevent"]),["up"])),s[2]||(s[2]=R(x(i=>e.move(0,1),["prevent"]),["down"])),s[3]||(s[3]=R(x(i=>e.move(-1,0),["prevent"]),["left"])),s[4]||(s[4]=R(x(i=>e.move(1,0),["prevent"]),["right"]))]},null,46,Ze)],544),e.noCrop?Ce("",!0):(O(),j("div",{key:0,"data-testid":"cropper-mask",class:"cropper__mask",style:G(e.maskStyle)},null,4))]),t("div",Ye,[t("div",Ge,[o(n,{"data-testid":"cropper-zoom-out",size:"xs",variant:"link",icon:"",pill:"",onClick:s[6]||(s[6]=i=>e.zoomOut())},{default:F(()=>[o(y)]),_:1}),_e(t("input",{"onUpdate:modelValue":s[7]||(s[7]=i=>e.scale=i),"data-testid":"cropper-zoom-slider",class:"cropper__slider",min:"0.5",max:"2",step:"0.1",type:"range"},null,512),[[fe,e.scale]]),o(n,{"data-testid":"cropper-zoom-in",size:"xs",variant:"link",icon:"",pill:"",onClick:s[8]||(s[8]=i=>e.zoomIn())},{default:F(()=>[o(D)]),_:1}),o(n,{"data-testid":"cropper-rotate-left",size:"xs",variant:"link",icon:"",pill:"",onClick:s[9]||(s[9]=i=>e.rotate(-90))},{default:F(()=>[o(d)]),_:1}),o(n,{"data-testid":"cropper-rotate-right",size:"xs",variant:"link",icon:"",pill:"",onClick:s[10]||(s[10]=i=>e.rotate(90))},{default:F(()=>[o(c)]),_:1})]),o(n,{"data-testid":"cropper-reset",class:"flex-shrink-0",size:"xs",variant:"link",onClick:s[11]||(s[11]=i=>e.reset())},{default:F(()=>[h(" Reset ")]),_:1}),Ae(e.$slots,"control",{scale:e.scale,angle:e.angle,crop:e.crop,zoomIn:e.zoomIn,zoomOut:e.zoomOut,rotate:e.rotate,reset:e.reset})])],2)}const _=ve(je,[["render",Ke]]),f="/design-system/assets/sample-1.f0af279a.jpg",Je=C("",4),Qe=C("",4),Xe=C("",2),es=C("",3),ss=C("",3),ts=C("",3),as=C("",2),os={class:"truncate"},ns=t("h3",{id:"encode-to-base64",tabindex:"-1"},[h("Encode to base64 "),t("a",{class:"header-anchor",href:"#encode-to-base64","aria-hidden":"true"},"#")],-1),ls=t("p",null,[h("You can add modifier "),t("code",null,"base64"),h(" to your "),t("code",null,"v-model"),h(", it's enforce result to "),t("a",{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noreferrer"},"base64-dataURI"),h(".")],-1),rs=C("",2),ps={class:"truncate"},cs=["src"],is=t("h3",{id:"disabling-autocrop",tabindex:"-1"},[h("Disabling Autocrop "),t("a",{class:"header-anchor",href:"#disabling-autocrop","aria-hidden":"true"},"#")],-1),ds=t("p",null,[h("By default, cropping process was ran every movement (drag, zoom, & rotate). It can be exhausting the resource on some device. You can disabled it using prop "),t("code",null,"no-autocrop"),h(". And to trigger the cropping, you can use "),t("code",null,"templateRef"),h(" on "),t("code",null,"<p-cropper>"),h(" component, and call "),t("code",null,".crop()"),h(" function.")],-1),us=t("p",null,[t("strong",null,"result:")],-1),Ds={class:"truncate"},ys=["src"],Fs=C("",10),ks=JSON.parse('{"title":"Cropper","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Crop Size","slug":"crop-size","link":"#crop-size","children":[{"level":3,"title":"Using width and height","slug":"using-width-and-height","link":"#using-width-and-height","children":[]},{"level":3,"title":"Using Ratio","slug":"using-ratio","link":"#using-ratio","children":[]}]},{"level":2,"title":"Rounded Crop","slug":"rounded-crop","link":"#rounded-crop","children":[]},{"level":2,"title":"Viewer Mode","slug":"viewer-mode","link":"#viewer-mode","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Encode to base64","slug":"encode-to-base64","link":"#encode-to-base64","children":[]},{"level":3,"title":"Disabling Autocrop","slug":"disabling-autocrop","link":"#disabling-autocrop","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/cropper/index.md"}'),hs={name:"components/cropper/index.md"},zs=Object.assign(hs,{setup(e){const s=S(),l=S(),r=S(),u=k("cropper");function p(){u.value&&u.value.crop()}return(y,n)=>{const D=T("preview");return O(),j("div",null,[Je,o(D,{class:"flex-col"},{default:F(()=>[o(_,{src:v(f)},null,8,["src"])]),_:1}),Qe,o(D,null,{default:F(()=>[o(_,{src:v(f),width:"500",height:"200"},null,8,["src"])]),_:1}),Xe,o(D,null,{default:F(()=>[o(_,{src:v(f),ratio:16/9},null,8,["src"])]),_:1}),es,o(D,null,{default:F(()=>[o(_,{src:v(f),rounded:""},null,8,["src"])]),_:1}),ss,o(D,null,{default:F(()=>[o(_,{src:v(f),"no-crop":""},null,8,["src"])]),_:1}),ts,o(D,null,{default:F(()=>[o(_,{src:v(f),modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=d=>s.value=d)},null,8,["src","modelValue"])]),_:1}),as,t("pre",os,[t("code",null,B(s.value),1)]),ns,ls,o(D,{class:"flex-col"},{default:F(()=>[o(_,{src:v(f),modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=d=>l.value=d),modelModifiers:{base64:!0}},null,8,["src","modelValue"])]),_:1}),rs,t("pre",ps,[t("code",null,B(l.value),1)]),t("img",{class:"mt-2 border",src:l.value||v(J),alt:"Result Image"},null,8,cs),is,ds,o(D,{class:"flex-col"},{default:F(()=>[o(_,{ref_key:"cropper",ref:u,src:v(f),modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=d=>r.value=d),modelModifiers:{base64:!0},"no-autocrop":""},null,8,["src","modelValue"]),o(X,{onClick:p},{default:F(()=>[h("Do Crop")]),_:1})]),_:1}),us,t("pre",Ds,[t("code",null,B(r.value),1)]),t("img",{class:"mt-2 border",src:r.value||v(J),alt:"Result Image"},null,8,ys),Fs])}}});export{ks as __pageData,zs as default};
