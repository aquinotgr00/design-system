import{j as P,w as y,m as F,p as J,Z as U,a5 as W,l as K,g as Q,b as X,e as Y,h as R,f as k,i as ee,aa as te,a6 as ne,y as re}from"./framework.6feb5f37.js";function b(e){return Q()?(X(e),!0):!1}function Se(){const e=new Set,t=a=>{e.delete(a)};return{on:a=>{e.add(a);const o=()=>t(a);return b(o),{off:o}},off:t,trigger:a=>Promise.all(Array.from(e).map(o=>o(a)))}}function d(e){return typeof e=="function"?e():Y(e)}const $=typeof window<"u",xe=e=>typeof e<"u",Re=(e,t,n)=>Math.min(n,Math.max(t,e)),S=()=>{},Ae=oe();function oe(){var e;return $&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function ae(e,t){function n(...r){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(a).catch(o)})}return n}const V=e=>e();function ie(e,t={}){let n,r,a=S;const o=u=>{clearTimeout(u),a(),a=S};return u=>{const l=d(e),f=d(t.maxWait);return n&&o(n),l<=0||f!==void 0&&f<=0?(r&&(o(r),r=null),Promise.resolve(u())):new Promise((c,i)=>{a=t.rejectOnCancel?i:c,f&&!r&&(r=setTimeout(()=>{n&&o(n),r=null,c(u())},f)),n=setTimeout(()=>{r&&o(r),r=null,c(u())},l)})}}function se(e=V){const t=P(!0);function n(){t.value=!1}function r(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:R(t),pause:n,resume:r,eventFilter:a}}function B(e,t=!1,n="Timeout"){return new Promise((r,a)=>{setTimeout(t?()=>a(n):r,e)})}function Be(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function Ne(...e){if(e.length!==1)return k(...e);const t=e[0];return typeof t=="function"?R(ee(()=>({get:t,set:S}))):P(t)}function De(e,t,n={}){var r,a;const{flush:o="sync",deep:s=!1,immediate:u=!0,direction:l="both",transform:f={}}=n;let c,i;const m=(r=f.ltr)!=null?r:p=>p,v=(a=f.rtl)!=null?a:p=>p;return(l==="both"||l==="ltr")&&(c=y(e,p=>t.value=m(p),{flush:o,deep:s,immediate:u})),(l==="both"||l==="rtl")&&(i=y(t,p=>e.value=v(p),{flush:o,deep:s,immediate:u})),()=>{c==null||c(),i==null||i()}}function Ee(e,t=!0){F()?te(e):t?e():U(e)}function Ce(e){F()&&ne(e)}function Me(e,t=!0){F()?J(e):t?e():U(e)}function Ue(e){F()&&re(e)}function x(e,t=!1){function n(i,{flush:m="sync",deep:v=!1,timeout:p,throwOnTimeout:h}={}){let _=null;const I=[new Promise(g=>{_=y(e,w=>{i(w)!==t&&(_==null||_(),g(w))},{flush:m,deep:v,immediate:!0})})];return p!=null&&I.push(B(p,h).then(()=>d(e)).finally(()=>_==null?void 0:_())),Promise.race(I)}function r(i,m){if(!W(i))return n(w=>w===i,m);const{flush:v="sync",deep:p=!1,timeout:h,throwOnTimeout:_}=m!=null?m:{};let O=null;const g=[new Promise(w=>{O=y([e,i],([A,G])=>{t!==(A===G)&&(O==null||O(),w(A))},{flush:v,deep:p,immediate:!0})})];return h!=null&&g.push(B(h,_).then(()=>d(e)).finally(()=>(O==null||O(),d(e)))),Promise.race(g)}function a(i){return n(m=>!!m,i)}function o(i){return r(null,i)}function s(i){return r(void 0,i)}function u(i){return n(Number.isNaN,i)}function l(i,m){return n(v=>{const p=Array.from(v);return p.includes(i)||p.includes(d(i))},m)}function f(i){return c(1,i)}function c(i=1,m){let v=-1;return n(()=>(v+=1,v>=i),m)}return Array.isArray(d(e))?{toMatch:n,toContains:l,changed:f,changedTimes:c,get not(){return x(e,!t)}}:{toMatch:n,toBe:r,toBeTruthy:a,toBeNull:o,toBeNaN:u,toBeUndefined:s,changed:f,changedTimes:c,get not(){return x(e,!t)}}}function We(e){return x(e)}function ue(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:a=!1}=n;let o=null;const s=P(!1);function u(){o&&(clearInterval(o),o=null)}function l(){s.value=!1,u()}function f(){const c=d(t);c<=0||(s.value=!0,a&&e(),u(),o=setInterval(e,c))}if(r&&$&&f(),W(t)||typeof t=="function"){const c=y(t,()=>{s.value&&$&&f()});b(c)}return b(l),{isActive:s,pause:l,resume:f}}var le=Object.defineProperty,N=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t)=>{for(var n in t||(t={}))fe.call(t,n)&&D(e,n,t[n]);if(N)for(var n of N(t))ce.call(t,n)&&D(e,n,t[n]);return e};function Ve(e=1e3,t={}){const{controls:n=!1,immediate:r=!0,callback:a}=t,o=P(0),s=()=>o.value+=1,u=()=>{o.value=0},l=ue(a?()=>{s(),a(o.value)}:s,e,{immediate:r});return n?pe({counter:o,reset:u},l):o}function Le(e,t,n={}){const{immediate:r=!0}=n,a=P(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function u(){a.value=!1,s()}function l(...f){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...f)},d(t))}return r&&(a.value=!0,$&&l()),b(u),{isPending:R(a),start:l,stop:u}}function Ze(e,t={}){const{method:n="parseFloat",radix:r,nanToZero:a}=t;return K(()=>{let o=d(e);return typeof o=="string"&&(o=Number[n](o,r)),a&&isNaN(o)&&(o=0),o})}var E=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,de=(e,t)=>{var n={};for(var r in e)me.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&E)for(var r of E(e))t.indexOf(r)<0&&ve.call(e,r)&&(n[r]=e[r]);return n};function L(e,t,n={}){const r=n,{eventFilter:a=V}=r,o=de(r,["eventFilter"]);return y(e,ae(a,t),o)}var _e=Object.defineProperty,Oe=Object.defineProperties,we=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ye=(e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&C(e,n,t[n]);if(j)for(var n of j(t))q.call(t,n)&&C(e,n,t[n]);return e},Pe=(e,t)=>Oe(e,we(t)),he=(e,t)=>{var n={};for(var r in e)Z.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&j)for(var r of j(e))t.indexOf(r)<0&&q.call(e,r)&&(n[r]=e[r]);return n};function qe(e,t,n={}){const r=n,{debounce:a=0,maxWait:o=void 0}=r,s=he(r,["debounce","maxWait"]);return L(e,t,Pe(ye({},s),{eventFilter:ie(a,{maxWait:o})}))}var ge=Object.defineProperty,be=Object.defineProperties,$e=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,M=(e,t,n)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,je=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&M(e,n,t[n]);if(T)for(var n of T(t))z.call(t,n)&&M(e,n,t[n]);return e},Te=(e,t)=>be(e,$e(t)),Fe=(e,t)=>{var n={};for(var r in e)H.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&T)for(var r of T(e))t.indexOf(r)<0&&z.call(e,r)&&(n[r]=e[r]);return n};function He(e,t,n={}){const r=n,{eventFilter:a}=r,o=Fe(r,["eventFilter"]),{eventFilter:s,pause:u,resume:l,isActive:f}=se(a);return{stop:L(e,t,Te(je({},o),{eventFilter:s})),pause:u,resume:l,isActive:f}}export{qe as a,Ze as b,b as c,Le as d,Ne as e,Be as f,$ as g,d as h,Ae as i,xe as j,Re as k,Ce as l,Ee as m,S as n,Se as o,Ue as p,Ve as q,De as s,Me as t,We as u,He as w};
