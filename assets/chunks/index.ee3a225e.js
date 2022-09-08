import{r as b,E as I,F as Z,G as K,o as ee,w as F,H as te,I as re,c as D,J as ne,K as ae,s as oe,u as V}from"../app.5d60bad4.js";var W;const j=typeof window<"u",se=e=>typeof e=="string",T=()=>{};j&&((W=window==null?void 0:window.navigator)==null?void 0:W.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ie(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const U=e=>e();function ue(e=U){const t=b(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function G(e){return te()?(re(e),!0):!1}function le(e,t=!0){I()?Z(e):t?e():K(e)}function R(e,t=!0){I()?ee(e):t?e():K(e)}var C=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,de=(e,t)=>{var r={};for(var n in e)ce.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&C)for(var n of C(e))t.indexOf(n)<0&&fe.call(e,n)&&(r[n]=e[n]);return r};function pe(e,t,r={}){const n=r,{eventFilter:a=U}=n,o=de(n,["eventFilter"]);return F(e,ie(a,t),o)}var ve=Object.defineProperty,me=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&H(e,r,t[r]);if(A)for(var r of A(t))q.call(t,r)&&H(e,r,t[r]);return e},we=(e,t)=>me(e,ge(t)),_e=(e,t)=>{var r={};for(var n in e)Q.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&A)for(var n of A(e))t.indexOf(n)<0&&q.call(e,n)&&(r[n]=e[n]);return r};function ye(e,t,r={}){const n=r,{eventFilter:a}=n,o=_e(n,["eventFilter"]),{eventFilter:u,pause:s,resume:f,isActive:d}=ue(a);return{stop:pe(e,t,we(he({},o),{eventFilter:u})),pause:s,resume:f,isActive:d}}function $(e){var t;const r=V(e);return(t=r==null?void 0:r.$el)!=null?t:r}const h=j?window:void 0,Oe=j?window.document:void 0;j&&window.navigator;j&&window.location;function g(...e){let t,r,n,a;if(se(e[0])?([r,n,a]=e,t=h):[t,r,n,a]=e,!t)return T;let o=T;const u=F(()=>$(t),f=>{o(),f&&(f.addEventListener(r,n,a),o=()=>{f.removeEventListener(r,n,a),o=T})},{immediate:!0,flush:"post"}),s=()=>{u(),o()};return G(s),s}function xe(e,t,r={}){const{window:n=h,ignore:a,capture:o=!0,detectIframe:u=!1}=r;if(!n)return;const s=b(!0);let f;const d=l=>{n.clearTimeout(f);const c=$(e),p=l.composedPath();!c||c===l.target||p.includes(c)||!s.value||a&&a.length>0&&a.some(P=>{const m=$(P);return m&&(l.target===m||p.includes(m))})||t(l)},_=[g(n,"click",d,{passive:!0,capture:o}),g(n,"pointerdown",l=>{const c=$(e);s.value=!!c&&!l.composedPath().includes(c)},{passive:!0}),g(n,"pointerup",l=>{if(l.button===0){const c=l.composedPath();l.composedPath=()=>c,f=n.setTimeout(()=>d(l),50)}},{passive:!0}),u&&g(n,"blur",l=>{var c;const p=$(e);((c=document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(p!=null&&p.contains(document.activeElement))&&t(l)})].filter(Boolean);return()=>_.forEach(l=>l())}const be=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Be(e,t,r={}){const{target:n=h,eventName:a="keydown",passive:o=!1}=r,u=be(e);return g(n,a,f=>{u(f)&&t(f)},o)}const Pe=()=>{const{activeElement:e,body:t}=document;if(!e||e===t)return!1;switch(e.tagName){case"INPUT":case"TEXTAREA":return!0}return e.hasAttribute("contenteditable")},Se=({keyCode:e,metaKey:t,ctrlKey:r,altKey:n})=>t||r||n?!1:e>=48&&e<=57||e>=96&&e<=105||e>=65&&e<=90;function Ke(e,t={}){const{document:r=Oe}=t;r&&g(r,"keydown",a=>{!Pe()&&Se(a)&&e(a)},{passive:!0})}function Ve(e,t=null){const r=I();let n=()=>{};const a=ne((o,u)=>(n=u,{get(){var s,f;return o(),(f=(s=r==null?void 0:r.proxy)==null?void 0:s.$refs[e])!=null?f:t},set(){}}));return R(n),ae(n),a}function Ee(e,t={}){const{window:r=h}=t,n=Boolean(r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=b(!1),u=()=>{!n||(a||(a=r.matchMedia(e)),o.value=a.matches)};return le(()=>{u(),a&&("addEventListener"in a?a.addEventListener("change",u):a.addListener(u),G(()=>{"removeEventListener"in a?a.removeEventListener("change",u):a.removeListener(u)}))}),o}const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__";L[M]=L[M]||{};const $e=L[M];function X(e,t){return $e[e]||t}function je(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Ne={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ae(e,t,r,n={}){var a;const{flush:o="pre",deep:u=!0,listenToStorageChanges:s=!0,writeDefaults:f=!0,shallow:d,window:_=h,eventFilter:E,onError:l=i=>{console.error(i)}}=n,c=(d?oe:b)(t);if(!r)try{r=X("getDefaultStorage",()=>{var i;return(i=h)==null?void 0:i.localStorage})()}catch(i){l(i)}if(!r)return c;const p=V(t),P=je(p),m=(a=n.serializer)!=null?a:Ne[P],{pause:v,resume:y}=ye(c,()=>O(c.value),{flush:o,deep:u,eventFilter:E});return _&&s&&g(_,"storage",N),N(),c;function O(i){try{i==null?r.removeItem(e):r.setItem(e,m.write(i))}catch(w){l(w)}}function S(i){if(!(i&&i.key!==e)){v();try{const w=i?i.newValue:r.getItem(e);return w==null?(f&&p!==null&&r.setItem(e,m.write(p)),p):typeof w!="string"?w:m.read(w)}catch(w){l(w)}finally{y()}}}function N(i){i&&i.key!==e||(c.value=S(i))}}function Y(e){return Ee("(prefers-color-scheme: dark)",e)}var Te=Object.defineProperty,k=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))De.call(t,r)&&J(e,r,t[r]);if(k)for(var r of k(t))Le.call(t,r)&&J(e,r,t[r]);return e};function Ie(e={}){const{selector:t="html",attribute:r="class",window:n=h,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:u=!0,storageRef:s,emitAuto:f}=e,d=Me({auto:"",light:"light",dark:"dark"},e.modes||{}),_=Y({window:n}),E=D(()=>_.value?"dark":"light"),l=s||(o==null?b("auto"):Ae(o,"auto",a,{window:n,listenToStorageChanges:u})),c=D({get(){return l.value==="auto"&&!f?E.value:l.value},set(v){l.value=v}}),p=X("updateHTMLAttrs",(v,y,O)=>{const S=n==null?void 0:n.document.querySelector(v);if(!!S)if(y==="class"){const N=O.split(/\s/g);Object.values(d).flatMap(i=>(i||"").split(/\s/g)).filter(Boolean).forEach(i=>{N.includes(i)?S.classList.add(i):S.classList.remove(i)})}else S.setAttribute(y,O)});function P(v){var y;const O=v==="auto"?E.value:v;p(t,r,(y=d[O])!=null?y:O)}function m(v){e.onChanged?e.onChanged(v,P):P(v)}return F(c,m,{flush:"post",immediate:!0}),R(()=>m(c.value)),c}var Fe=Object.defineProperty,Re=Object.defineProperties,We=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ke=(e,t)=>{for(var r in t||(t={}))Ce.call(t,r)&&x(e,r,t[r]);if(z)for(var r of z(t))He.call(t,r)&&x(e,r,t[r]);return e},Je=(e,t)=>Re(e,We(t));function Ue(e={}){const{valueDark:t="dark",valueLight:r="",window:n=h}=e,a=Ie(Je(ke({},e),{onChanged:(s,f)=>{var d;e.onChanged?(d=e.onChanged)==null||d.call(e,s==="dark"):f(s)},modes:{dark:t,light:r}})),o=Y({window:n});return D({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}var B;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(B||(B={}));function Ge(e={}){const{window:t=h,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0}=e,o=b(r),u=b(n),s=()=>{t&&(o.value=t.innerWidth,u.value=t.innerHeight)};return s(),R(s),g("resize",s,{passive:!0}),a&&g("orientationchange",s,{passive:!0}),{width:o,height:u}}export{Be as a,Ke as b,Ge as c,Ee as d,Ue as e,xe as o,Ve as t,g as u,ye as w};
