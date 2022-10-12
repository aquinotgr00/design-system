import{B as K}from"./chunks/Button.934e96eb.js";import{u as j}from"./chunks/utils-6ba05f5b.5a71be88.js";import{g as v,j as Z,Q as ee,u as C,i as Y,f as se,B as ae,h as L,R as te,_ as ne,b as B,o as f,c as S,p as V,a as F,d as l,w as D,t as $,T as oe,l as N,r as le,n as re,e as A,k as x}from"./app.005ed0ba.js";import{u as ce}from"./chunks/use-input.9dac5030.js";import{f as U}from"./chunks/base64.e46863ef.js";import{u as pe,b as ie,c as de,d as ue}from"./chunks/index.ae6dcc70.js";import{a as X}from"./chunks/use-dialog.80b41830.js";import{d as me}from"./chunks/defu.087119af.js";import{B as ye}from"./chunks/Banner.f1157240.js";import{B as De}from"./chunks/BrowserQRCodeReader.9511080e.js";import"./chunks/index.69a8ee88.js";import"./chunks/index.e2432ff2.js";import"./chunks/use-singleton.8ee8c440.js";import"./chunks/Modal.c17f90c0.js";import"./chunks/Heading.bcf32fee.js";import"./chunks/16.d41d53b1.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.017dce19.js";import"./chunks/20.1ea91d93.js";var Fe=j,z=Fe.createSVGComponent(z,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M12 10H6.78A11 11 0 0127 16h2A13 13 0 006 7.68V4H4v8h8zM20 22h5.22A11 11 0 015 16H3a13 13 0 0023 8.32V28h2V20H20z"}}]),he=z;const ve=he;var _e=j,W=_e.createSVGComponent(W,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{d:"M29,26H3a1,1,0,0,1-1-1V8A1,1,0,0,1,3,7H9.46l1.71-2.55A1,1,0,0,1,12,4h8a1,1,0,0,1,.83.45L22.54,7H29a1,1,0,0,1,1,1V25A1,1,0,0,1,29,26ZM4,24H28V9H22a1,1,0,0,1-.83-.45L19.46,6H12.54L10.83,8.55A1,1,0,0,1,10,9H4Z"}},{elem:"path",attrs:{d:"M16,22a6,6,0,1,1,6-6A6,6,0,0,1,16,22Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,16,12Z"}}]),ge=W;const fe=ge;var Ae=j,G=Ae.createSVGComponent(G,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{d:"M18,28A12,12,0,1,0,6,16v6.2L2.4,18.6,1,20l6,6,6-6-1.4-1.4L8,22.2V16H8A10,10,0,1,1,18,26Z"}}]),Ce=G;const be=Ce,we="/design-system/assets/shutter.9f40c7bb.wav";function ke(e,{volume:s=1,playbackRate:a=1,soundEnabled:d=!0,interrupt:r=!1,onload:n,...p}={}){const c=v(null),o=v(!1);let m=v(null),t=v(null);Z(()=>{ee(()=>import("./chunks/howler-c6e37a5c.e051f846.js"),[]).then(function(i){return i.h}).then(i=>{c.value=i.Howl,t.value=new c.value({src:[e],volume:C(s),rate:C(a),onload:y,...p})})});const y=function(){typeof n=="function"&&n.call(this),m.value=m.value?m.value*1e3:0};return Y(()=>[e],()=>{c&&c.value&&t&&t.value&&(t.value=new c.value({src:[e],volume:C(s),rate:C(a),onload:y,...p}))}),Y(()=>[C(s),C(a)],()=>{t.value&&(t.value.volume(C(s)),t.value.rate(C(a)))}),{play:i=>{typeof i>"u"&&(i={}),!(!t.value||!d&&!i.forceSoundEnabled)&&(r&&t.value.stop(),i.playbackRate&&t.value.rate(i.playbackRate),t.value.play(i.id),t.value.once("end",()=>{t&&t.value&&!t.value.playing()&&(o.value=!1)}),o.value=!0)},sound:t,isPlaying:o,duration:m,pause:i=>{!t.value||(t.value.pause(typeof i=="number"?i:void 0),o.value=!1)},stop:i=>{!t.value||(t.value.stop(typeof i=="number"?i:void 0),o.value=!1)}}}function H(e,s=!1){const a=document.createElement("canvas"),d=a.getContext("2d");return a.width=e.videoWidth,a.height=e.videoHeight,s?(d.scale(-1,1),d.drawImage(e,0,0,a.width*-1,a.height)):d.drawImage(e,0,0,a.width,a.height),a.toDataURL("image/jpeg")}const Te={meta:{facingMode:"environment"},run({video:e,meta:s,modifier:a}){const d=!!(s.value.mirror&&s.value.mirror!=="preview"),r=H(e.value,d),n=a.value.base64?r:U(r);return{preview:r,result:n}}},Se=se({components:{pButton:K,IconCamera:fe,IconRetake:be,IconRotate:ve},props:{modelValue:{type:[globalThis.File,String,Array],default:""},modelModifiers:{type:Object,default:()=>({})},mirror:{type:[Boolean,String],default:void 0},mask:{type:String,default:void 0},adapter:{type:Object,default:Te},facingMode:{type:String,default:void 0},silent:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["start","change","result","update:modelValue"],setup(e,{emit:s}){const a=ce(e),d=ae(e,"modelModifiers"),r=v(!1),n=v(!1),p=v(""),c=v(""),o=ke(we),m=v(),t=pe("camera"),y=v(0),u=L(()=>me({mirror:e.mirror,mask:e.mask,facingMode:e.facingMode},e.adapter.meta,{autoStart:!1})),{videoInputs:_}=ie({constraints:{video:{facingMode:u.value.facingMode}}}),k=L(()=>{var h,Q;return(Q=(h=_.value)==null?void 0:h.at(y.value))==null?void 0:Q.deviceId}),{stream:b,start:i,stop:I,enabled:T}=de({videoDeviceId:k,audioDeviceId:!1}),O=L(()=>{const h=[];return u.value.mirror&&h.push("camera--mirror"),u.value.mask?h.push(`camera__mask--${u.value.mask}`):h.push("camera__mask--none"),h});async function P(){t.value==="denied"&&await X({title:"Camera Access Blocked",text:"Privy need to access your internal camera to process this journey",confirm:{text:"Ok"},footerAlign:"end"}),t.value==="prompt"&&await X({title:"Camera Access Required",text:"Privy need to access your internal camera to process this journey",confirm:{text:"Ok"},footerAlign:"end"}),await i()}function E(){y.value=(y.value+1)%_.value.length}function M(h){c.value=h}async function q(){r.value=!0;const h=await e.adapter.run({video:m,toast:M,stream:b,meta:u,modifier:d});p.value=h.preview,a.value=h.result,n.value=!0,r.value=!1,T.value=!1,s("result",h.result),s("change",h.result),e.silent||o.play()}async function R(){T.value=!0,n.value=!1,p.value="",c.value=""}function J(){s("start",b.value),u.value.autoStart&&q()}return Z(async()=>{await ue(t).not.toBeUndefined(),await P()}),te(()=>{I()}),{classNames:O,cameras:_,video:m,stream:b,toggle:E,isActive:T,isTaken:n,isProcessing:r,message:c,take:q,retake:R,preview:p,turnOn:P,onStart:J,toast:M,deviceId:k}}});const xe=["data-deviceid"],Pe=[".srcObject"],Ve=["src"],Ie={key:2,"data-testid":"camera-off",class:"camera__off-info"},Ee={class:"camera__mask-container"},Me={key:0,"data-testid":"camera-mask",class:"camera__mask"},qe={"data-testid":"camera-toast",class:"camera__toast-text"},Re={class:"camera__controls"};function Be(e,s,a,d,r,n){const p=B("icon-rotate"),c=B("p-button"),o=B("icon-camera"),m=B("icon-retake");return f(),S("div",{class:re(["camera",e.classNames]),"data-testid":"camera","data-deviceid":e.deviceId},[e.stream?(f(),S("video",{key:0,ref:"video","data-testid":"camera-video",".srcObject":e.stream,class:"camera__video",muted:"",autoplay:"",playsinline:"",onPlay:s[0]||(s[0]=(...t)=>e.onStart&&e.onStart(...t))},null,40,Pe)):V("",!0),e.isTaken&&!e.stream?(f(),S("img",{key:1,"data-testid":"camera-result",class:"camera__result",src:e.preview,alt:"camera-result"},null,8,Ve)):V("",!0),!e.isActive&&!e.isTaken?(f(),S("span",Ie," Camera is off ")):V("",!0),F("div",Ee,[e.isTaken?V("",!0):(f(),S("div",Me))]),l(oe,{name:"slide-up"},{default:D(()=>[e.message?(f(),S("div",{key:e.message,class:"camera__toast"},[F("span",qe,$(e.message),1)])):V("",!0)]),_:1}),F("div",Re,[e.cameras.length>1&&!e.isTaken?(f(),N(c,{key:0,"data-testid":"camera-toggle",color:"secondary",size:"sm",icon:"",pill:"",onClick:e.toggle},{default:D(()=>[l(p)]),_:1},8,["onClick"])):V("",!0),!e.isActive&&!e.isTaken?(f(),N(c,{key:1,"data-testid":"camera-turn-on",class:"camera__main-control",icon:"",pill:"",onClick:s[1]||(s[1]=t=>e.turnOn())},{default:D(()=>[l(o)]),_:1})):e.isActive&&!e.isTaken?(f(),N(c,{key:2,"data-testid":"camera-take",class:"camera__main-control",icon:"",pill:"",disabled:e.isProcessing,onClick:s[2]||(s[2]=t=>e.take())},{default:D(()=>[l(o)]),_:1},8,["disabled"])):(f(),N(c,{key:3,"data-testid":"camera-retake",class:"camera__main-control",icon:"",pill:"",onClick:s[3]||(s[3]=t=>e.retake())},{default:D(()=>[l(m)]),_:1}))]),le(e.$slots,"default")],10,xe)}const g=ne(Se,[["render",Be]]),Ne=40,He=15,w=160;function Oe(e,s){const a=e.getContext("2d",{willReadFrequently:!0});return a.drawImage(s,s.videoWidth/2-w,s.videoHeight/2-w,w,w,0,0,w,w),a.getImageData(0,0,e.width,e.height)}function Le(e){const s=e.width/2,a=e.height/2,d=e.width/4,r=e.height/4,n=s-d/2,p=a-r/2,c=new Uint8ClampedArray(d*r),o={centerX:s,centerY:a,width:d,height:r,xPos:n,yPos:p,buffer:c},m=e.data;let t=0;for(let y=o.yPos;y<o.yPos+o.height;y++){let u=y*e.width*4+o.xPos*4+1;for(let _=o.xPos;_<o.xPos+o.width;_++)o.buffer[t++]=m[u],u+=4}return o}function $e(e,s){let a=0,d=0,r=0;const n=e.width/4,p=e.height/4,c=e.data;for(let b=s.centerY-p;b<=s.centerY+p-s.height;b++)for(let i=s.centerX-n;i<=s.centerX+n-s.width;i++){let I=0,T=0,O=0;for(let E=0;E<s.height;E++){let M=i*4+1+(b+E)*e.width*4;for(let q=0;q<s.width;q++){const R=c[M];I+=s.buffer[O++]*R,T+=R*R,M+=4}}let P=0;T>0&&(P=I*I/T),P>r&&(r=P,a=i,d=b)}const o=a-s.xPos,m=d-s.yPos,t=Math.sqrt(o*o+m*m),y=n-s.width/2,u=p-s.height/2,_=Math.sqrt(y*y+u*u);let k=t/_*100;return k>100&&(k=100),k}const Ue={meta:{mask:"round",mirror:!0,facingMode:"user"},async run({video:e,toast:s,meta:a,modifier:d}){return await new Promise(r=>{const n=!!(a.value.mirror&&a.value.mirror!=="preview"),p=H(e.value,n),c=document.createElement("canvas");c.width=w,c.height=w;let o;const m=setInterval(function(){if(e.value){const y=Oe(c,e.value);if(!o)o=Le(y);else if($e(y,o)>Ne){const u=H(e.value,n),_=d.value.base64?[u,p]:[U(u),U(p)];clearInterval(m),s(""),r({preview:u,result:_})}}},1e3/He);s("Move your head slowly. Your photo will be taken automatically")})}},je={meta:{mask:"square",facingMode:"environment",autoStart:!0},async run({video:e,toast:s,meta:a}){const d=!!(a.value.mirror&&a.value.mirror!=="preview"),n=await new De().decodeOnceFromVideoElement(e.value),p=H(e.value,d),c=n.getText();return s(c),{preview:p,result:c}}},Qe=A("",4),Ye=A("",3),Xe=A("",3),Ze=A("",3),ze=A("",3),We=A("",3),Ge=A("",3),Je=A("",3),Ke=A("",2),es={class:"truncate"},ss=F("h3",{id:"encode-to-base64",tabindex:"-1"},[x("Encode to base64 "),F("a",{class:"header-anchor",href:"#encode-to-base64","aria-hidden":"true"},"#")],-1),as=F("p",null,[x("You can add modifier "),F("code",null,"base64"),x(" to your "),F("code",null,"v-model"),x(", it's enforce result to "),F("a",{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noreferrer"},"base64-dataURI"),x(".")],-1),ts=F("b",null,"Note!",-1),ns=x(),os=F("code",null,"v-model.base64",-1),ls=x(" on QRCodeAdapter has no effect, the result will always original scanned text. "),rs=A("",2),cs={class:"truncate"},ps=A("",7),xs=JSON.parse('{"title":"Camera","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Mirror Mode","slug":"mirror-mode","link":"#mirror-mode","children":[{"level":3,"title":"Preview-only mirror mode","slug":"preview-only-mirror-mode","link":"#preview-only-mirror-mode","children":[]}]},{"level":2,"title":"Masking","slug":"masking","link":"#masking","children":[]},{"level":2,"title":"Silent","slug":"silent","link":"#silent","children":[]},{"level":2,"title":"Liveness","slug":"liveness","link":"#liveness","children":[]},{"level":2,"title":"QR Scanner","slug":"qr-scanner","link":"#qr-scanner","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Encode to base64","slug":"encode-to-base64","link":"#encode-to-base64","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/camera/index.md"}'),is={name:"components/camera/index.md"},Ps=Object.assign(is,{setup(e){const s=v(),a=v();return(d,r)=>{const n=B("preview");return f(),S("div",null,[Qe,l(n,{class:"flex-col"},{default:D(()=>[l(g)]),_:1}),Ye,l(n,{class:"flex-col"},{default:D(()=>[l(g,{mirror:""})]),_:1}),Xe,l(n,{class:"flex-col"},{default:D(()=>[l(g,{mirror:"preview"})]),_:1}),Ze,l(n,{class:"flex-col gap-2"},{default:D(()=>[l(g,{mask:"square"}),l(g,{mask:"round"}),l(g,{mask:"card"})]),_:1}),ze,l(n,{class:"flex-col"},{default:D(()=>[l(g,{silent:""})]),_:1}),We,l(n,{class:"flex-col gap-2"},{default:D(()=>[l(g,{adapter:C(Ue)},null,8,["adapter"])]),_:1}),Ge,l(n,{class:"flex-col gap-2"},{default:D(()=>[l(g,{adapter:C(je)},null,8,["adapter"])]),_:1}),Je,l(n,{class:"flex-col"},{default:D(()=>[l(g,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=p=>s.value=p)},null,8,["modelValue"])]),_:1}),Ke,F("pre",es,[F("code",null,$(s.value),1)]),ss,as,l(ye,{dismissable:!1},{default:D(()=>[ts,ns,os,ls]),_:1}),l(n,{class:"flex-col"},{default:D(()=>[l(g,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=p=>a.value=p),modelModifiers:{base64:!0}},null,8,["modelValue"])]),_:1}),rs,F("pre",cs,[F("code",null,$(a.value),1)]),ps])}}});export{xs as __pageData,Ps as default};
