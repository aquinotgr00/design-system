import{i as x,t as N,a as R,u as ee,c as te,b as re,d as ne,n as ae,r as z,w as se,e as oe,f as ie}from"./index.35064abe.js";import{F as ue,G as le,H as ce,k as j,j as h,D as fe,l as $,z as X,I as de}from"../app.9536caf3.js";function E(e){var t;const r=z(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=x?window:void 0,pe=x?window.document:void 0,k=x?window.navigator:void 0;function O(...e){let t,r,n,a;if(ne(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=S):[t,r,n,a]=e,!t)return ae;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const u=[],c=()=>{u.forEach(p=>p()),u.length=0},s=(p,v,y)=>(p.addEventListener(v,y,a),()=>p.removeEventListener(v,y,a)),d=$(()=>E(t),p=>{c(),p&&u.push(...r.flatMap(v=>n.map(y=>s(p,v,y))))},{immediate:!0,flush:"post"}),o=()=>{d(),c()};return R(o),o}function Ge(e,t,r={}){const{window:n=S,ignore:a=[],capture:u=!0,detectIframe:c=!1}=r;if(!n)return;let s=!0,d;const o=i=>a.some(f=>{if(typeof f=="string")return Array.from(n.document.querySelectorAll(f)).some(m=>m===i.target||i.composedPath().includes(m));{const m=E(f);return m&&(i.target===m||i.composedPath().includes(m))}}),p=i=>{n.clearTimeout(d);const f=E(e);if(!(!f||f===i.target||i.composedPath().includes(f))){if(i.detail===0&&(s=!o(i)),!s){s=!0;return}t(i)}},v=[O(n,"click",p,{passive:!0,capture:u}),O(n,"pointerdown",i=>{const f=E(e);f&&(s=!i.composedPath().includes(f)&&!o(i))},{passive:!0}),O(n,"pointerup",i=>{if(i.button===0){const f=i.composedPath();i.composedPath=()=>f,d=n.setTimeout(()=>p(i),50)}},{passive:!0}),c&&O(n,"blur",i=>{var f;const m=E(e);((f=n.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(m!=null&&m.contains(n.document.activeElement))&&t(i)})].filter(Boolean);return()=>v.forEach(i=>i())}const ve=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function Ke(...e){let t,r,n={};e.length===3?(t=e[0],r=e[1],n=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,r=e[0],n=e[1]):(t=e[0],r=e[1]):(t=!0,r=e[0]);const{target:a=S,eventName:u="keydown",passive:c=!1}=n,s=ve(t);return O(a,u,o=>{s(o)&&r(o)},c)}const me=()=>{const{activeElement:e,body:t}=document;if(!e||e===t)return!1;switch(e.tagName){case"INPUT":case"TEXTAREA":return!0}return e.hasAttribute("contenteditable")},ge=({keyCode:e,metaKey:t,ctrlKey:r,altKey:n})=>t||r||n?!1:e>=48&&e<=57||e>=96&&e<=105||e>=65&&e<=90;function Xe(e,t={}){const{document:r=pe}=t;r&&O(r,"keydown",a=>{!me()&&ge(a)&&e(a)},{passive:!0})}function Ye(e,t=null){const r=ue();let n=()=>{};const a=le((u,c)=>(n=c,{get(){var s,d;return u(),(d=(s=r==null?void 0:r.proxy)==null?void 0:s.$refs[e])!=null?d:t},set(){}}));return N(n),ce(n),a}function A(e,t=!1){const r=h(),n=()=>r.value=Boolean(e());return n(),N(n,t),r}function he(e,t={}){const{window:r=S}=t,n=A(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const u=h(!1),c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{n.value&&(c(),a=r.matchMedia(oe(e).value),u.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return fe(s),R(()=>c()),u}function Ze(e={}){const{navigator:t=k,read:r=!1,source:n,copiedDuring:a=1500,legacy:u=!1}=e,c=["copy","cut"],s=A(()=>t&&"clipboard"in t),d=j(()=>s.value||u),o=h(""),p=h(!1),v=ee(()=>p.value=!1,a);function y(){s.value?t.clipboard.readText().then(l=>{o.value=l}):o.value=m()}if(d.value&&r)for(const l of c)O(l,y);async function i(l=z(n)){d.value&&l!=null&&(s.value?await t.clipboard.writeText(l):f(l),o.value=l,p.value=!0,v.start())}function f(l){const _=document.createElement("textarea");_.value=l??"",_.style.position="absolute",_.style.opacity="0",document.body.appendChild(_),_.select(),document.execCommand("copy"),_.remove()}function m(){var l,_,w;return(w=(_=(l=document==null?void 0:document.getSelection)==null?void 0:l.call(document))==null?void 0:_.toString())!=null?w:""}return{isSupported:d,text:o,copied:p,copy:i}}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";M[L]=M[L]||{};const ye=M[L];function Y(e,t){return ye[e]||t}function _e(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Oe=Object.defineProperty,W=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))we.call(t,r)&&Q(e,r,t[r]);if(W)for(var r of W(t))be.call(t,r)&&Q(e,r,t[r]);return e};const Se={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Pe(e,t,r,n={}){var a;const{flush:u="pre",deep:c=!0,listenToStorageChanges:s=!0,writeDefaults:d=!0,mergeDefaults:o=!1,shallow:p,window:v=S,eventFilter:y,onError:i=g=>{console.error(g)}}=n,f=(p?X:h)(t);if(!r)try{r=Y("getDefaultStorage",()=>{var g;return(g=S)==null?void 0:g.localStorage})()}catch(g){i(g)}if(!r)return f;const m=z(t),l=_e(m),_=(a=n.serializer)!=null?a:Se[l],{pause:w,resume:P}=se(f,()=>I(f.value),{flush:u,deep:c,eventFilter:y});return v&&s&&O(v,"storage",C),C(),f;function I(g){try{if(g==null)r.removeItem(e);else{const b=_.write(g),D=r.getItem(e);D!==b&&(r.setItem(e,b),v&&(v==null||v.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:D,newValue:b,storageArea:r}))))}}catch(b){i(b)}}function T(g){const b=g?g.newValue:r.getItem(e);if(b==null)return d&&m!==null&&r.setItem(e,_.write(m)),m;if(!g&&o){const D=_.read(b);return ie(o)?o(D,m):l==="object"&&!Array.isArray(D)?U(U({},m),D):D}else return typeof b!="string"?b:_.read(b)}function C(g){if(!(g&&g.storageArea!==r)){if(g&&g.key==null){f.value=m;return}if(!(g&&g.key!==e)){w();try{f.value=T(g)}catch(b){i(b)}finally{g?de(P):P()}}}}}function Z(e){return he("(prefers-color-scheme: dark)",e)}var Ee=Object.defineProperty,V=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,je=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&H(e,r,t[r]);if(V)for(var r of V(t))De.call(t,r)&&H(e,r,t[r]);return e};function $e(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=S,storage:u,storageKey:c="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:d,emitAuto:o}=e,p=je({auto:"",light:"light",dark:"dark"},e.modes||{}),v=Z({window:a}),y=j(()=>v.value?"dark":"light"),i=d||(c==null?h(n):Pe(c,n,u,{window:a,listenToStorageChanges:s})),f=j({get(){return i.value==="auto"&&!o?y.value:i.value},set(w){i.value=w}}),m=Y("updateHTMLAttrs",(w,P,I)=>{const T=a==null?void 0:a.document.querySelector(w);if(T)if(P==="class"){const C=I.split(/\s/g);Object.values(p).flatMap(g=>(g||"").split(/\s/g)).filter(Boolean).forEach(g=>{C.includes(g)?T.classList.add(g):T.classList.remove(g)})}else T.setAttribute(P,I)});function l(w){var P;const I=w==="auto"?y.value:w;m(t,r,(P=p[I])!=null?P:I)}function _(w){e.onChanged?e.onChanged(w,l):l(w)}return $(f,_,{flush:"post",immediate:!0}),o&&$(y,()=>_(f.value),{flush:"post"}),N(()=>_(f.value)),f}var Te=Object.defineProperty,Ae=Object.defineProperties,Ne=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))Ce.call(t,r)&&q(e,r,t[r]);if(B)for(var r of B(t))ke.call(t,r)&&q(e,r,t[r]);return e},Le=(e,t)=>Ae(e,Ne(t));function et(e={}){const{valueDark:t="dark",valueLight:r="",window:n=S}=e,a=$e(Le(Me({},e),{onChanged:(s,d)=>{var o;e.onChanged?(o=e.onChanged)==null||o.call(e,s==="dark"):d(s)},modes:{dark:t,light:r}})),u=Z({window:n});return j({get(){return a.value==="dark"},set(s){s===u.value?a.value="auto":a.value=s?"dark":"light"}})}function xe(e,t={}){const{controls:r=!1,navigator:n=k}=t,a=A(()=>n&&"permissions"in n);let u;const c=typeof e=="string"?{name:e}:e,s=h(),d=()=>{u&&(s.value=u.state)},o=te(async()=>{if(a.value){if(!u)try{u=await n.permissions.query(c),O(u,"change",d),d()}catch{s.value="prompt"}return u}});return o(),r?{state:s,isSupported:a,query:o}:s}function tt(e={}){const{navigator:t=k,requestPermissions:r=!1,constraints:n={audio:!0,video:!0},onUpdated:a}=e,u=h([]),c=j(()=>u.value.filter(i=>i.kind==="videoinput")),s=j(()=>u.value.filter(i=>i.kind==="audioinput")),d=j(()=>u.value.filter(i=>i.kind==="audiooutput")),o=A(()=>t&&t.mediaDevices&&t.mediaDevices.enumerateDevices),p=h(!1);async function v(){o.value&&(u.value=await t.mediaDevices.enumerateDevices(),a==null||a(u.value))}async function y(){if(!o.value)return!1;if(p.value)return!0;const{state:i,query:f}=xe("camera",{controls:!0});return await f(),i.value!=="granted"&&((await t.mediaDevices.getUserMedia(n)).getTracks().forEach(l=>l.stop()),v()),p.value=!0,p.value}return o.value&&(r&&y(),O(t.mediaDevices,"devicechange",v),v()),{devices:u,ensurePermissions:y,permissionGranted:p,videoInputs:c,audioInputs:s,audioOutputs:d,isSupported:o}}var J=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,We=(e,t)=>{var r={};for(var n in e)Re.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&ze.call(e,n)&&(r[n]=e[n]);return r};function Qe(e,t,r={}){const n=r,{window:a=S}=n,u=We(n,["window"]);let c;const s=A(()=>a&&"ResizeObserver"in a),d=()=>{c&&(c.disconnect(),c=void 0)},o=$(()=>E(e),v=>{d(),s.value&&a&&v&&(c=new ResizeObserver(t),c.observe(v,u))},{immediate:!0,flush:"post"}),p=()=>{d(),o()};return R(p),{isSupported:s,stop:p}}function rt(e,t={}){const{reset:r=!0,windowResize:n=!0,windowScroll:a=!0,immediate:u=!0}=t,c=h(0),s=h(0),d=h(0),o=h(0),p=h(0),v=h(0),y=h(0),i=h(0);function f(){const m=E(e);if(!m){r&&(c.value=0,s.value=0,d.value=0,o.value=0,p.value=0,v.value=0,y.value=0,i.value=0);return}const l=m.getBoundingClientRect();c.value=l.height,s.value=l.bottom,d.value=l.left,o.value=l.right,p.value=l.top,v.value=l.width,y.value=l.x,i.value=l.y}return Qe(e,f),$(()=>E(e),m=>!m&&f()),a&&O("scroll",f,{capture:!0,passive:!0}),n&&O("resize",f,{passive:!0}),N(()=>{u&&f()}),{height:c,bottom:s,left:d,right:o,top:p,width:v,x:y,y:i,update:f}}var F;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(F||(F={}));var Ue=Object.defineProperty,G=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))Ve.call(t,r)&&K(e,r,t[r]);if(G)for(var r of G(t))He.call(t,r)&&K(e,r,t[r]);return e};const qe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Be({linear:re},qe);function nt(e={}){var t,r;const n=h((t=e.enabled)!=null?t:!1),a=h((r=e.autoSwitch)!=null?r:!0),u=h(e.videoDeviceId),c=h(e.audioDeviceId),{navigator:s=k}=e,d=A(()=>{var l;return(l=s==null?void 0:s.mediaDevices)==null?void 0:l.getUserMedia}),o=X();function p(l){return l.value==="none"||l.value===!1?!1:l.value==null?!0:{deviceId:l.value}}async function v(){if(!(!d.value||o.value))return o.value=await s.mediaDevices.getUserMedia({video:p(u),audio:p(c)}),o.value}async function y(){var l;(l=o.value)==null||l.getTracks().forEach(_=>_.stop()),o.value=void 0}function i(){y(),n.value=!1}async function f(){return await v(),o.value&&(n.value=!0),o.value}async function m(){return y(),await f()}return $(n,l=>{l?v():y()},{immediate:!0}),$([u,c],()=>{a.value&&o.value&&m()},{immediate:!0}),{isSupported:d,stream:o,start:f,stop:i,restart:m,videoDeviceId:u,audioDeviceId:c,enabled:n,autoSwitch:a}}function at({window:e=S}={}){if(!e)return{x:h(0),y:h(0)};const t=h(e.pageXOffset),r=h(e.pageYOffset);return O(e,"scroll",()=>{t.value=e.pageXOffset,r.value=e.pageYOffset},{capture:!1,passive:!0}),{x:t,y:r}}function st(e={}){const{window:t=S,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:u=!0}=e,c=h(r),s=h(n),d=()=>{t&&(u?(c.value=t.innerWidth,s.value=t.innerHeight):(c.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return d(),N(d),O("resize",d,{passive:!0}),a&&O("orientationchange",d,{passive:!0}),{width:c,height:s}}export{Ke as a,tt as b,nt as c,he as d,rt as e,Xe as f,at as g,O as h,st as i,et as j,Ze as k,Ge as o,Ye as t,xe as u};
