import{j as P,l as y,F as C,m as G,J as H,K as W,k as U,u as L,L as Q,M as X,N as Y}from"../app.12128179.js";var x;const g=typeof window<"u",ge=e=>typeof e=="function",$e=e=>typeof e=="string",Te=()=>{};g&&((x=window==null?void 0:window.navigator)==null?void 0:x.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function d(e){return typeof e=="function"?e():L(e)}function k(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const M=e=>e();function ee(e,t={}){let n,r;return o=>{const s=d(e),u=d(t.maxWait);if(n&&clearTimeout(n),s<=0||u!==void 0&&u<=0)return r&&(clearTimeout(r),r=null),o();u&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,o()},u)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,o()},s)}}function te(e=M){const t=P(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...o)=>{t.value&&e(...o)}}}function N(e,t=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(t?()=>i(n):r,e)})}function je(e){return e}function Fe(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function F(e){return Q()?(X(e),!0):!1}function Ie(e){return typeof e=="function"?U(e):P(e)}function Se(e,t,n={}){var r,i;const{flush:o="sync",deep:s=!1,immediate:u=!0,direction:f="both",transform:c={}}=n;let m,a;const p=(r=c.ltr)!=null?r:l=>l,v=(i=c.rtl)!=null?i:l=>l;return(f==="both"||f==="ltr")&&(m=y(e,l=>t.value=p(l),{flush:o,deep:s,immediate:u})),(f==="both"||f==="rtl")&&(a=y(t,l=>e.value=v(l),{flush:o,deep:s,immediate:u})),()=>{m==null||m(),a==null||a()}}function xe(e,t=!0){C()?G(e):t?e():H(e)}function Ne(e){C()&&Y(e)}function I(e,t=!1){function n(a,{flush:p="sync",deep:v=!1,timeout:l,throwOnTimeout:h}={}){let _=null;const j=[new Promise(b=>{_=y(e,O=>{a(O)!==t&&(_==null||_(),b(O))},{flush:p,deep:v,immediate:!0})})];return l!=null&&j.push(N(l,h).then(()=>d(e)).finally(()=>_==null?void 0:_())),Promise.race(j)}function r(a,p){if(!W(a))return n(O=>O===a,p);const{flush:v="sync",deep:l=!1,timeout:h,throwOnTimeout:_}=p!=null?p:{};let w=null;const b=[new Promise(O=>{w=y([e,a],([S,z])=>{t!==(S===z)&&(w==null||w(),O(S))},{flush:v,deep:l,immediate:!0})})];return h!=null&&b.push(N(h,_).then(()=>d(e)).finally(()=>(w==null||w(),d(e)))),Promise.race(b)}function i(a){return n(p=>Boolean(p),a)}function o(a){return r(null,a)}function s(a){return r(void 0,a)}function u(a){return n(Number.isNaN,a)}function f(a,p){return n(v=>{const l=Array.from(v);return l.includes(a)||l.includes(d(a))},p)}function c(a){return m(1,a)}function m(a=1,p){let v=-1;return n(()=>(v+=1,v>=a),p)}return Array.isArray(d(e))?{toMatch:n,toContains:f,changed:c,changedTimes:m,get not(){return I(e,!t)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:o,toBeNaN:u,toBeUndefined:s,changed:c,changedTimes:m,get not(){return I(e,!t)}}}function Ae(e){return I(e)}function ne(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:i=!1}=n;let o=null;const s=P(!1);function u(){o&&(clearInterval(o),o=null)}function f(){s.value=!1,u()}function c(){L(t)<=0||(s.value=!0,i&&e(),u(),o=setInterval(e,d(t)))}if(r&&g&&c(),W(t)){const m=y(t,()=>{s.value&&g&&c()});F(m)}return F(f),{isActive:s,pause:f,resume:c}}var re=Object.defineProperty,A=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ae=(e,t)=>{for(var n in t||(t={}))oe.call(t,n)&&R(e,n,t[n]);if(A)for(var n of A(t))ie.call(t,n)&&R(e,n,t[n]);return e};function Re(e=1e3,t={}){const{controls:n=!1,immediate:r=!0,callback:i}=t,o=P(0),s=()=>o.value+=1,u=ne(i?()=>{s(),i(o.value)}:s,e,{immediate:r});return n?ae({counter:o},u):o}function De(e,t,n={}){const{immediate:r=!0}=n,i=P(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function u(){i.value=!1,s()}function f(...c){s(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...c)},d(t))}return r&&(i.value=!0,g&&f()),F(u),{isPending:i,start:f,stop:u}}function Ee(e,t={}){const{method:n="parseFloat",radix:r,nanToZero:i}=t;return U(()=>{let o=d(e);return typeof o=="string"&&(o=Number[n](o,r)),i&&isNaN(o)&&(o=0),o})}var D=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,le=(e,t)=>{var n={};for(var r in e)se.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&D)for(var r of D(e))t.indexOf(r)<0&&ue.call(e,r)&&(n[r]=e[r]);return n};function V(e,t,n={}){const r=n,{eventFilter:i=M}=r,o=le(r,["eventFilter"]);return y(e,k(i,t),o)}var fe=Object.defineProperty,ce=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,me=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&E(e,n,t[n]);if($)for(var n of $(t))K.call(t,n)&&E(e,n,t[n]);return e},ve=(e,t)=>ce(e,pe(t)),de=(e,t)=>{var n={};for(var r in e)J.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&$)for(var r of $(e))t.indexOf(r)<0&&K.call(e,r)&&(n[r]=e[r]);return n};function Be(e,t,n={}){const r=n,{debounce:i=0,maxWait:o=void 0}=r,s=de(r,["debounce","maxWait"]);return V(e,t,ve(me({},s),{eventFilter:ee(i,{maxWait:o})}))}var _e=Object.defineProperty,we=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ye=(e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&B(e,n,t[n]);if(T)for(var n of T(t))q.call(t,n)&&B(e,n,t[n]);return e},Pe=(e,t)=>we(e,Oe(t)),he=(e,t)=>{var n={};for(var r in e)Z.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&T)for(var r of T(e))t.indexOf(r)<0&&q.call(e,r)&&(n[r]=e[r]);return n};function Ce(e,t,n={}){const r=n,{eventFilter:i}=r,o=he(r,["eventFilter"]),{eventFilter:s,pause:u,resume:f,isActive:c}=te(i);return{stop:V(e,t,Pe(ye({},o),{eventFilter:s})),pause:u,resume:f,isActive:c}}export{F as a,je as b,Fe as c,$e as d,Ie as e,ge as f,Ae as g,Be as h,g as i,Ee as j,Ne as k,Re as l,Te as n,d as r,Se as s,xe as t,De as u,Ce as w};
