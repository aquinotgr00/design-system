import{i as E,u as S,g,E as A,F as ae,G as Q,j as oe,H as se,I as ie,J as ue,K as le,h as T,L as ce,M as fe,s as Y}from"../app.56afe14f.js";var F;const M=typeof window<"u",de=e=>typeof e=="string",U=(e,t,n)=>Math.min(n,Math.max(t,e)),R=()=>{};M&&((F=window==null?void 0:window.navigator)==null?void 0:F.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ve(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const Z=e=>e();function pe(e=Z){const t=g(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...o)=>{t.value&&e(...o)}}}function z(e,t=!1,n="Timeout"){return new Promise((r,a)=>{setTimeout(t?()=>a(n):r,e)})}function me(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function k(e){return ie()?(ue(e),!0):!1}function tt(e,t,n={}){const{flush:r="sync",deep:a=!1,immediate:o=!0,direction:i="both"}=n;let s,c;return(i==="both"||i==="ltr")&&(s=E(e,d=>t.value=d,{flush:r,deep:a,immediate:o})),(i==="both"||i==="rtl")&&(c=E(t,d=>e.value=d,{flush:r,deep:a,immediate:o})),()=>{s==null||s(),c==null||c()}}function he(e,t=!0){A()?ae(e):t?e():Q(e)}function L(e,t=!0){A()?oe(e):t?e():Q(e)}function nt(e){A()&&se(e)}function rt(e){let t=!1;function n(f,{flush:l="sync",deep:u=!1,timeout:m,throwOnTimeout:y}={}){let p=null;const O=[new Promise(P=>{p=E(e,b=>{f(b)!==t&&(p==null||p(),P(b))},{flush:l,deep:u,immediate:!0})})];return m!=null&&O.push(z(m,y).then(()=>S(e)).finally(()=>p==null?void 0:p())),Promise.race(O)}function r(f,l){if(!le(f))return n(b=>b===f,l);const{flush:u="sync",deep:m=!1,timeout:y,throwOnTimeout:p}=l!=null?l:{};let h=null;const P=[new Promise(b=>{h=E([e,f],([j,w])=>{t!==(j===w)&&(h==null||h(),b(j))},{flush:u,deep:m,immediate:!0})})];return y!=null&&P.push(z(y,p).then(()=>S(e)).finally(()=>(h==null||h(),S(e)))),Promise.race(P)}function a(f){return n(l=>Boolean(l),f)}function o(f){return r(null,f)}function i(f){return r(void 0,f)}function s(f){return n(Number.isNaN,f)}function c(f,l){return n(u=>{const m=Array.from(u);return m.includes(f)||m.includes(S(f))},l)}function d(f){return v(1,f)}function v(f=1,l){let u=-1;return n(()=>(u+=1,u>=f),l)}return Array.isArray(S(e))?{toMatch:n,toContains:c,changed:d,changedTimes:v,get not(){return t=!t,this}}:{toMatch:n,toBe:r,toBeTruthy:a,toBeNull:o,toBeNaN:s,toBeUndefined:i,changed:d,changedTimes:v,get not(){return t=!t,this}}}var x=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,ye=(e,t)=>{var n={};for(var r in e)ge.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&x)for(var r of x(e))t.indexOf(r)<0&&we.call(e,r)&&(n[r]=e[r]);return n};function _e(e,t,n={}){const r=n,{eventFilter:a=Z}=r,o=ye(r,["eventFilter"]);return E(e,ve(a,t),o)}var Oe=Object.defineProperty,be=Object.defineProperties,Pe=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,H=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Se=(e,t)=>{for(var n in t||(t={}))ee.call(t,n)&&H(e,n,t[n]);if(I)for(var n of I(t))te.call(t,n)&&H(e,n,t[n]);return e},Ee=(e,t)=>be(e,Pe(t)),$e=(e,t)=>{var n={};for(var r in e)ee.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&I)for(var r of I(e))t.indexOf(r)<0&&te.call(e,r)&&(n[r]=e[r]);return n};function Ne(e,t,n={}){const r=n,{eventFilter:a}=r,o=$e(r,["eventFilter"]),{eventFilter:i,pause:s,resume:c,isActive:d}=pe(a);return{stop:_e(e,t,Ee(Se({},o),{eventFilter:i})),pause:s,resume:c,isActive:d}}function D(e){var t;const n=S(e);return(t=n==null?void 0:n.$el)!=null?t:n}const $=M?window:void 0,De=M?window.document:void 0,W=M?window.navigator:void 0;M&&window.location;function _(...e){let t,n,r,a;if(de(e[0])?([n,r,a]=e,t=$):[t,n,r,a]=e,!t)return R;let o=R;const i=E(()=>D(t),c=>{o(),c&&(c.addEventListener(n,r,a),o=()=>{c.removeEventListener(n,r,a),o=R})},{immediate:!0,flush:"post"}),s=()=>{i(),o()};return k(s),s}function at(e,t,n={}){const{window:r=$,ignore:a,capture:o=!0,detectIframe:i=!1}=n;if(!r)return;const s=g(!0);let c;const d=l=>{r.clearTimeout(c);const u=D(e),m=l.composedPath();!u||u===l.target||m.includes(u)||!s.value||a&&a.length>0&&a.some(y=>{const p=D(y);return p&&(l.target===p||m.includes(p))})||t(l)},v=[_(r,"click",d,{passive:!0,capture:o}),_(r,"pointerdown",l=>{const u=D(e);s.value=!!u&&!l.composedPath().includes(u)},{passive:!0}),_(r,"pointerup",l=>{if(l.button===0){const u=l.composedPath();l.composedPath=()=>u,c=r.setTimeout(()=>d(l),50)}},{passive:!0}),i&&_(r,"blur",l=>{var u;const m=D(e);((u=document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(m!=null&&m.contains(document.activeElement))&&t(l)})].filter(Boolean);return()=>v.forEach(l=>l())}const je=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function ot(e,t,n={}){const{target:r=$,eventName:a="keydown",passive:o=!1}=n,i=je(e);return _(r,a,c=>{i(c)&&t(c)},o)}const Te=()=>{const{activeElement:e,body:t}=document;if(!e||e===t)return!1;switch(e.tagName){case"INPUT":case"TEXTAREA":return!0}return e.hasAttribute("contenteditable")},Me=({keyCode:e,metaKey:t,ctrlKey:n,altKey:r})=>t||n||r?!1:e>=48&&e<=57||e>=96&&e<=105||e>=65&&e<=90;function st(e,t={}){const{document:n=De}=t;n&&_(n,"keydown",a=>{!Te()&&Me(a)&&e(a)},{passive:!0})}function it(e,t=null){const n=A();let r=()=>{};const a=ce((o,i)=>(r=i,{get(){var s,c;return o(),(c=(s=n==null?void 0:n.proxy)==null?void 0:s.$refs[e])!=null?c:t},set(){}}));return L(r),fe(r),a}function Ie(e,t={}){const{window:n=$}=t,r=Boolean(n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const o=g(!1),i=()=>{!r||(a||(a=n.matchMedia(e)),o.value=a.matches)};return he(()=>{i(),a&&("addEventListener"in a?a.addEventListener("change",i):a.addListener(i),k(()=>{"removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i)}))}),o}function ut(e,t,n){const r=g(e);return T({get(){return r.value=U(r.value,S(t),S(n))},set(a){r.value=U(a,S(t),S(n))}})}const B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C="__vueuse_ssr_handlers__";B[C]=B[C]||{};const Ae=B[C];function ne(e,t){return Ae[e]||t}function Le(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Re={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Be(e,t,n,r={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:s=!0,writeDefaults:c=!0,shallow:d,window:v=$,eventFilter:f,onError:l=w=>{console.error(w)}}=r,u=(d?Y:g)(t);if(!n)try{n=ne("getDefaultStorage",()=>{var w;return(w=$)==null?void 0:w.localStorage})()}catch(w){l(w)}if(!n)return u;const m=S(t),y=Le(m),p=(a=r.serializer)!=null?a:Re[y],{pause:h,resume:O}=Ne(u,()=>P(u.value),{flush:o,deep:i,eventFilter:f});return v&&s&&_(v,"storage",j),j(),u;function P(w){try{w==null?n.removeItem(e):n.setItem(e,p.write(w))}catch(N){l(N)}}function b(w){if(!(w&&w.key!==e)){h();try{const N=w?w.newValue:n.getItem(e);return N==null?(c&&m!==null&&n.setItem(e,p.write(m)),m):typeof N!="string"?N:p.read(N)}catch(N){l(N)}finally{O()}}}function j(w){w&&w.key!==e||(u.value=b(w))}}function re(e){return Ie("(prefers-color-scheme: dark)",e)}var Ce=Object.defineProperty,J=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fe=(e,t)=>{for(var n in t||(t={}))ke.call(t,n)&&q(e,n,t[n]);if(J)for(var n of J(t))We.call(t,n)&&q(e,n,t[n]);return e};function Ue(e={}){const{selector:t="html",attribute:n="class",window:r=$,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:s,emitAuto:c}=e,d=Fe({auto:"",light:"light",dark:"dark"},e.modes||{}),v=re({window:r}),f=T(()=>v.value?"dark":"light"),l=s||(o==null?g("auto"):Be(o,"auto",a,{window:r,listenToStorageChanges:i})),u=T({get(){return l.value==="auto"&&!c?f.value:l.value},set(h){l.value=h}}),m=ne("updateHTMLAttrs",(h,O,P)=>{const b=r==null?void 0:r.document.querySelector(h);if(!!b)if(O==="class"){const j=P.split(/\s/g);Object.values(d).flatMap(w=>(w||"").split(/\s/g)).filter(Boolean).forEach(w=>{j.includes(w)?b.classList.add(w):b.classList.remove(w)})}else b.setAttribute(O,P)});function y(h){var O;const P=h==="auto"?f.value:h;m(t,n,(O=d[P])!=null?O:P)}function p(h){e.onChanged?e.onChanged(h,y):y(h)}return E(u,p,{flush:"post",immediate:!0}),L(()=>p(u.value)),u}var ze=Object.defineProperty,xe=Object.defineProperties,He=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ke=(e,t)=>{for(var n in t||(t={}))Je.call(t,n)&&V(e,n,t[n]);if(K)for(var n of K(t))qe.call(t,n)&&V(e,n,t[n]);return e},Ve=(e,t)=>xe(e,He(t));function lt(e={}){const{valueDark:t="dark",valueLight:n="",window:r=$}=e,a=Ue(Ve(Ke({},e),{onChanged:(s,c)=>{var d;e.onChanged?(d=e.onChanged)==null||d.call(e,s==="dark"):c(s)},modes:{dark:t,light:n}})),o=re({window:r});return T({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}function Ge(e,t={}){const{controls:n=!1,navigator:r=W}=t,a=Boolean(r&&"permissions"in r);let o;const i=typeof e=="string"?{name:e}:e,s=g(),c=()=>{o&&(s.value=o.state)},d=me(async()=>{if(!!a){if(!o)try{o=await r.permissions.query(i),_(o,"change",c),c()}catch{s.value="prompt"}return o}});return d(),n?{state:s,isSupported:a,query:d}:s}function ct(e={}){const{navigator:t=W,requestPermissions:n=!1,constraints:r={audio:!0,video:!0},onUpdated:a}=e,o=g([]),i=T(()=>o.value.filter(u=>u.kind==="videoinput")),s=T(()=>o.value.filter(u=>u.kind==="audioinput")),c=T(()=>o.value.filter(u=>u.kind==="audiooutput"));let d=!1;const v=g(!1);async function f(){!d||(o.value=await t.mediaDevices.enumerateDevices(),a==null||a(o.value))}async function l(){if(!d)return!1;if(v.value)return!0;const{state:u,query:m}=Ge("camera",{controls:!0});return await m(),u.value!=="granted"&&((await t.mediaDevices.getUserMedia(r)).getTracks().forEach(p=>p.stop()),f()),v.value=!0,v.value}return t&&(d=Boolean(t.mediaDevices&&t.mediaDevices.enumerateDevices),d&&(n&&l(),_(t.mediaDevices,"devicechange",f),f())),{devices:o,ensurePermissions:l,permissionGranted:v,videoInputs:i,audioInputs:s,audioOutputs:c,isSupported:d}}var G=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,Ye=(e,t)=>{var n={};for(var r in e)Xe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&G)for(var r of G(e))t.indexOf(r)<0&&Qe.call(e,r)&&(n[r]=e[r]);return n};function Ze(e,t,n={}){const r=n,{window:a=$}=r,o=Ye(r,["window"]);let i;const s=a&&"ResizeObserver"in a,c=()=>{i&&(i.disconnect(),i=void 0)},d=E(()=>D(e),f=>{c(),s&&a&&f&&(i=new ResizeObserver(t),i.observe(f,o))},{immediate:!0,flush:"post"}),v=()=>{c(),d()};return k(v),{isSupported:s,stop:v}}function ft(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:a=!0,immediate:o=!0}=t,i=g(0),s=g(0),c=g(0),d=g(0),v=g(0),f=g(0),l=g(0),u=g(0);function m(){const y=D(e);if(!y){n&&(i.value=0,s.value=0,c.value=0,d.value=0,v.value=0,f.value=0,l.value=0,u.value=0);return}const p=y.getBoundingClientRect();i.value=p.height,s.value=p.bottom,c.value=p.left,d.value=p.right,v.value=p.top,f.value=p.width,l.value=p.x,u.value=p.y}return Ze(e,m),E(()=>D(e),y=>!y&&m()),a&&_("scroll",m,{passive:!0}),r&&_("resize",m,{passive:!0}),L(()=>{o&&m()}),{height:i,bottom:s,left:c,right:d,top:v,width:f,x:l,y:u,update:m}}var X;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(X||(X={}));function dt(e={}){var t,n,r;const a=g((t=e.enabled)!=null?t:!1),o=g((n=e.autoSwitch)!=null?n:!0),i=g(e.videoDeviceId),s=g(e.audioDeviceId),{navigator:c=W}=e,d=Boolean((r=c==null?void 0:c.mediaDevices)==null?void 0:r.getUserMedia),v=Y();function f(h){return h.value==="none"||h.value===!1?!1:h.value==null?!0:{deviceId:h.value}}async function l(){if(!(!d||v.value))return v.value=await c.mediaDevices.getUserMedia({video:f(i),audio:f(s)}),v.value}async function u(){var h;(h=v.value)==null||h.getTracks().forEach(O=>O.stop()),v.value=void 0}function m(){u(),a.value=!1}async function y(){return await l(),v.value&&(a.value=!0),v.value}async function p(){return u(),await y()}return E(a,h=>{h?l():u()},{immediate:!0}),E([i,s],()=>{o.value&&v.value&&p()},{immediate:!0}),{isSupported:d,stream:v,start:y,stop:m,restart:p,videoDeviceId:i,audioDeviceId:s,enabled:a,autoSwitch:o}}function vt({window:e=$}={}){if(!e)return{x:g(0),y:g(0)};const t=g(e.pageXOffset),n=g(e.pageYOffset);return _("scroll",()=>{t.value=e.pageXOffset,n.value=e.pageYOffset},{capture:!1,passive:!0}),{x:t,y:n}}function pt(e={}){const{window:t=$,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:a=!0}=e,o=g(n),i=g(r),s=()=>{t&&(o.value=t.innerWidth,i.value=t.innerHeight)};return s(),L(s),_("resize",s,{passive:!0}),a&&_("orientationchange",s,{passive:!0}),{width:o,height:i}}export{ot as a,ct as b,dt as c,rt as d,Ie as e,ft as f,st as g,vt as h,_ as i,pt as j,nt as k,ut as l,lt as m,at as o,tt as s,it as t,Ge as u,Ne as w};