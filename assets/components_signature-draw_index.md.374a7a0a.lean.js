var ne=Object.defineProperty;var se=(e,t,a)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var f=(e,t,a)=>(se(e,typeof t!="symbol"?t+"":t,a),a);import{t as le,c as oe,d as re}from"./chunks/index.ee3a225e.js";import{u as N}from"./chunks/use-input.d0cb73a2.js";import{B as j}from"./chunks/Button.35c66a38.js";import{d as ie}from"./chunks/defu.087119af.js";import{l as G}from"./chunks/load-image.5a7761ed.js";import{o as J,Q as X,R as de,d as $,r as A,w as Q,_ as P,g as D,a as m,b as _,f as g,l as L,i as h,k as H,t as C,p as R,h as c,c as T,M as ce,n as Y,T as pe,$ as ue,m as he,u as ge,j as v}from"./app.5d60bad4.js";import{i as me,r as ye}from"./chunks/isSymbol.c5543846.js";import{C as fe}from"./chunks/Caption.561bbd86.js";import{I as De}from"./chunks/20.9b9cb8e0.js";import"./chunks/utils-6ba05f5b.063d2e00.js";var _e=/\s/;function ve(e){for(var t=e.length;t--&&_e.test(e.charAt(t)););return t}var we=/^\s+/;function Fe(e){return e&&e.slice(0,ve(e)+1).replace(we,"")}function k(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var O=0/0,be=/^[-+]0x[0-9a-f]+$/i,Ce=/^0b[01]+$/i,Se=/^0o[0-7]+$/i,Te=parseInt;function W(e){if(typeof e=="number")return e;if(me(e))return O;if(k(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=k(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Fe(e);var a=Ce.test(e);return a||Se.test(e)?Te(e.slice(2),a?2:8):be.test(e)?O:+e}var Ae=function(){return ye.Date.now()};const E=Ae;var ke="Expected a function",Ie=Math.max,Ve=Math.min;function xe(e,t,a){var n,s,r,o,l,i,p=0,u=!1,w=!1,I=!0;if(typeof e!="function")throw new TypeError(ke);t=W(t)||0,k(a)&&(u=!!a.leading,w="maxWait"in a,r=w?Ie(W(a.maxWait)||0,t):r,I="trailing"in a?!!a.trailing:I);function V(d){var y=n,F=s;return n=s=void 0,p=d,o=e.apply(F,y),o}function Z(d){return p=d,l=setTimeout(S,t),u?V(d):o}function ee(d){var y=d-i,F=d-p,M=t-y;return w?Ve(M,r-F):M}function B(d){var y=d-i,F=d-p;return i===void 0||y>=t||y<0||w&&F>=r}function S(){var d=E();if(B(d))return U(d);l=setTimeout(S,ee(d))}function U(d){return l=void 0,I&&n?V(d):(n=s=void 0,o)}function te(){l!==void 0&&clearTimeout(l),p=0,n=i=s=l=void 0}function ae(){return l===void 0?o:U(E())}function x(){var d=E(),y=B(d);if(n=arguments,s=this,i=d,y){if(l===void 0)return Z(i);if(w)return clearTimeout(l),l=setTimeout(S,t),V(i)}return l===void 0&&(l=setTimeout(S,t)),o}return x.cancel=te,x.flush=ae,x}var Ee="Expected a function";function Re(e,t,a){var n=!0,s=!0;if(typeof e!="function")throw new TypeError(Ee);return k(a)&&(n="leading"in a?!!a.leading:n,s="trailing"in a?!!a.trailing:s),xe(e,t,{leading:n,maxWait:t,trailing:s})}function Ne(e){const t=e.slice(1,3),a=e.slice(3,5),n=e.slice(5,7);return{R:Number.parseInt(t,16),G:Number.parseInt(a,16),B:Number.parseInt(n,16)}}function $e(e,t){const a=e.getContext("2d"),n=a.getImageData(0,0,e.width,e.height),s=n.data,r=Ne(t);for(let o=0;o<s.length;o+=4)s[o+3]>0&&(s[o]=r.R,s[o+1]=r.G,s[o+2]=r.B);a.putImageData(n,0,0)}function Pe(e,t,a){const n=e.getContext("2d"),s=ie(a,{color:"#000000",lineSize:2.5,lineCap:"round",lineJoin:"round"});n.strokeStyle=s.color,n.lineWidth=s.lineSize,n.lineJoin=s.lineJoin,n.lineCap=s.lineCap,n.beginPath(),n.moveTo(t[0],t[1]),n.lineTo(t[2],t[3]),n.stroke()}function Le(e){e.getContext("2d").clearRect(0,0,e.width,e.height)}async function Be(e,t){const a=e.getContext("2d"),n=await G(t);a.clearRect(0,0,e.width,e.height),a.drawImage(n,0,0)}function q(e){return e.toDataURL()}function Ue(e,t){J(async()=>{if(e.value){const{default:a}=await X(()=>import("./chunks/interact.min.a8628542.js").then(s=>s.i),["assets/chunks/interact.min.a8628542.js","assets/chunks/utils-6ba05f5b.063d2e00.js","assets/app.5d60bad4.js"]),n=Re(t.onmove,1e3/120);a(e.value).styleCursor(!1).draggable({origin:"self",inertia:{enabled:!0,resistance:10},onstart:t.onstart,onmove:n,onend:n})}}),de(async()=>{const{default:a}=await X(()=>import("./chunks/interact.min.a8628542.js").then(n=>n.i),["assets/chunks/interact.min.a8628542.js","assets/chunks/utils-6ba05f5b.063d2e00.js","assets/app.5d60bad4.js"]);a(e.value).unset()})}class Me{constructor(t){f(this,"lastX");f(this,"lastY");f(this,"movingX");f(this,"movingY");f(this,"smoother");this.lastX=0,this.lastY=0,this.movingX=0,this.movingY=0,this.smoother=t*.05+.7}start(t,a){this.lastX=t,this.lastY=a,this.movingX=0,this.movingY=0}move(t,a){const n=this.lastX,s=this.lastY,r=(this.movingX+(n-t)*.1)*this.smoother,o=(this.movingY+(s-a)*.1)*this.smoother,l=n-r,i=s-o;return this.movingX=r,this.movingY=o,this.lastX=l,this.lastY=i,[n,s,l,i]}}function Xe(e){return Array.from({length:e}).map((t,a)=>new Me(a/(e*1.25)))}const Ye=$({components:{Caption:fe,Button:j},props:{modelValue:{type:String,default:""},width:{type:Number,default:430},height:{type:Number,default:230},color:{type:String,default:"#000000"},placeholder:{type:String,default:""},resetLabel:{type:String,default:"Reset"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){const t=N(e),a=A(!0),n=le("canvas"),s=Xe(15);function r(){Le(n.value),a.value=!0,t.value=""}function o(l){a.value||($e(n.value,l),t.value=q(n.value))}return Q(()=>e.color,o),Ue(n,{onstart(l){for(const i of s)i.start(l.pageX,l.pageY)},onmove(l){for(const i of s){const p=i.move(l.pageX,l.pageY),u={color:e.color};Pe(n.value,p,u),a.value=!1,t.value=q(n.value)}}}),J(()=>{t.value&&t.value.startsWith("data:image/png")&&(Be(n.value,t.value),a.value=!1)}),{model:t,reset:r,isBlank:a,setColor:o}}});const Oe={class:"signature-draw signature-draw--desktop","data-testid":"signature-draw-desktop"},We=["width","height"],qe={key:1,class:"signature-draw__control"};function ze(e,t,a,n,s,r){const o=D("Caption"),l=D("Button");return m(),_("div",Oe,[g("canvas",{ref:"canvas",class:"signature-draw__canvas","data-testid":"signature-draw-canvas",width:e.width,height:e.height},null,8,We),e.isBlank?(m(),L(o,{key:0,class:"signature-draw__placeholder","data-testid":"signature-draw-placeholder"},{default:h(()=>[H(C(e.placeholder),1)]),_:1})):R("",!0),e.isBlank?R("",!0):(m(),_("div",qe,[c(l,{"data-testid":"signature-draw-reset",variant:"link",size:"xs",class:"signature-draw__reset",pill:"",onClick:t[0]||(t[0]=i=>e.reset())},{default:h(()=>[g("span",null,C(e.resetLabel),1)]),_:1})]))])}const K=P(Ye,[["render",ze]]);async function z(e,t){const a=document.createElement("canvas"),n=a.getContext("2d"),s=await G(e);return a.width=t%180===0?s.width:s.height,a.height=t%180===0?s.height:s.width,n.translate(a.width/2,a.height/2),n.rotate(t*Math.PI/180),n.drawImage(s,s.width/-2,s.height/-2),a.toDataURL()}const je=$({components:{Button:j,IconEdit:De,SignatureDrawDesktop:K},props:{modelValue:{type:String,default:""},width:{type:Number,default:430},height:{type:Number,default:230},color:{type:String,default:"#000000"},placeholder:{type:String,default:""},resetLabel:{type:String,default:"Reset"},openDrawLabel:{type:String,default:"Click to Draw"},closeDrawLabel:{type:String,default:"Save"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){const t=N(e),a=A(""),n=A(!1),s=oe(),r=T(()=>s.width.value<e.width+32?"rotate":"normal"),o=T(()=>{const u=[];return r.value&&u.push(`signature-draw--${r.value}`),u}),l=T(()=>({width:`${e.width}px`,aspectRatio:`${e.width/e.height}`}));async function i(){const u=t.value&&r.value==="rotate"?await z(t.value,90):t.value;a.value=u,n.value=!0}async function p(){const u=a.value&&r.value==="rotate"?await z(a.value,-90):a.value;t.value=u,n.value=!1}return Q(n,u=>{u?document.body.style.setProperty("overflow-y","hidden"):document.body.style.removeProperty("overflow-y")}),{classNames:o,style:l,rawModel:a,model:t,isOpen:n,mode:r,open:i,close:p}}});const Ge={class:"signature-draw__preview"},Je=["src"],Qe={key:0,class:"signature-draw__modal","data-testid":"signature-draw-modal"};function He(e,t,a,n,s,r){const o=D("IconEdit"),l=D("Button"),i=D("SignatureDrawDesktop");return m(),_("div",{class:Y(["signature-draw signature-draw--mobile",e.classNames]),"data-testid":"signature-draw-mobile",style:ue(e.style)},[g("div",Ge,[e.model?(m(),_(ce,{key:0},[g("img",{src:e.model,alt:"signature-draw-preview","data-testid":"signature-draw-preview",onClick:t[0]||(t[0]=p=>e.open())},null,8,Je),c(l,{variant:"link",size:"xs",class:"signature-draw__reset","data-testid":"signature-draw-edit",icon:"",onClick:t[1]||(t[1]=p=>e.open())},{default:h(()=>[c(o)]),_:1})],64)):(m(),L(l,{key:1,"data-testid":"signature-draw-open",onClick:e.open},{default:h(()=>[H(C(e.openDrawLabel),1)]),_:1},8,["onClick"]))]),c(pe,{name:"zoom-in"},{default:h(()=>[e.isOpen?(m(),_("div",Qe,[c(i,{modelValue:e.rawModel,"onUpdate:modelValue":t[2]||(t[2]=p=>e.rawModel=p),class:Y(e.classNames),placeholder:e.placeholder,color:e.color,width:e.mode==="rotate"?e.height:e.width,height:e.mode==="rotate"?e.width:e.height,"reset-label":e.resetLabel},null,8,["modelValue","class","placeholder","color","width","height","reset-label"]),c(l,{"data-testid":"signature-draw-close",onClick:e.close},{default:h(()=>[g("span",null,C(e.closeDrawLabel),1)]),_:1},8,["onClick"])])):R("",!0)]),_:1})],6)}const Ke=P(je,[["render",He]]),Ze=$({props:{modelValue:{type:String,default:""},width:{type:Number,default:430},height:{type:Number,default:230},color:{type:String,default:"#000000"},placeholder:{type:String,default:""},resetLabel:{type:String,default:"Reset"},openDrawLabel:{type:String,default:"Click to Draw"},closeDrawLabel:{type:String,default:"Save"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){const t=N(e),a=re("(min-width: 768px)");return{view:T(()=>a.value?K:Ke),model:t}}});function et(e,t,a,n,s,r){return m(),L(he(e.view),{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=o=>e.model=o),width:e.width,height:e.height,color:e.color,placeholder:e.placeholder,"reset-label":e.resetLabel,"open-draw-label":e.openDrawLabel,"close-draw-label":e.closeDrawLabel},null,8,["modelValue","width","height","color","placeholder","reset-label","open-draw-label","close-draw-label"])}const b=P(Ze,[["render",et]]),tt="/design-system/assets/empty-img.9d0c8fe3.png",at=v("",3),nt=v("",2),st=v("",2),lt=v("",3),ot=v("",3),rt=g("p",null,[g("strong",null,"result")],-1),it={class:"truncate"},dt=["src"],ct=v("",8),bt=JSON.parse('{"title":"Signature Draw","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"for Initial","slug":"for-initial","link":"#for-initial","children":[]}]},{"level":2,"title":"Placeholder","slug":"placeholder","link":"#placeholder","children":[]},{"level":2,"title":"Color","slug":"color","link":"#color","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/signature-draw/index.md"}'),pt={name:"components/signature-draw/index.md"},Ct=Object.assign(pt,{setup(e){const t=A("");return(a,n)=>{const s=D("preview");return m(),_("div",null,[at,c(s,null,{default:h(()=>[c(b)]),_:1}),nt,c(s,{class:"flex-col"},{default:h(()=>[c(b,{width:230})]),_:1}),st,c(s,{class:"flex-col"},{default:h(()=>[c(b,{placeholder:"Draw signature here"})]),_:1}),lt,c(s,{class:"flex-col gap-2"},{default:h(()=>[c(b,{color:"#73185E"})]),_:1}),ot,c(s,{class:"flex-col gap-2"},{default:h(()=>[c(b,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=r=>t.value=r)},null,8,["modelValue"])]),_:1}),rt,g("pre",it,[g("code",null,C(t.value),1)]),g("img",{class:"mt-2 border",src:t.value||ge(tt),width:"430",height:"230",alt:"Result Image"},null,8,dt),ct])}}});export{bt as __pageData,Ct as default};
