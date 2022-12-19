import{p as P,v as D}from"../app.20e38cb1.js";var V={};function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?h(Object(e),!0).forEach(function(r){C(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function E(t,n){if(t==null)return{};var e={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(e[i]=t[i]);return e}function w(t,n){if(t==null)return{};var e=E(t,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(e[r]=t[r])}return e}var M=["width","height","viewBox"],B=["tabindex"],S={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function O(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width,e=t.height,r=t.viewBox,i=r===void 0?"0 0 ".concat(n," ").concat(e):r,o=w(t,M),a=o.tabindex,c=w(o,B),u=g(g(g({},S),c),{},{width:n,height:e,viewBox:i});return u["aria-label"]||u["aria-labelledby"]||u.title?(u.role="img",a!=null&&(u.focusable="true",u.tabindex=a)):u["aria-hidden"]=!0,u}function _(t){var n=t.elem,e=n===void 0?"svg":n,r=t.attrs,i=r===void 0?{}:r,o=t.content,a=o===void 0?[]:o,c=a.map(_).join("");return e!=="svg"?"<".concat(e," ").concat(m(i),">").concat(c,"</").concat(e,">"):"<".concat(e," ").concat(m(O(i)),">").concat(c,"</").concat(e,">")}function m(t){return Object.keys(t).reduce(function(n,e,r){var i="".concat(e,'="').concat(t[e],'"');return r===0?i:n+" "+i},"")}function A(t){var n=t.elem,e=n===void 0?"svg":n,r=t.attrs,i=r===void 0?{}:r,o=t.content,a=o===void 0?[]:o,c=document.createElementNS("http://www.w3.org/2000/svg",e),u=e!=="svg"?i:O(i);Object.keys(u).forEach(function(l){c.setAttribute(l,i[l])});for(var s=0;s<a.length;s++)c.appendChild(A(a[s]));return c}const I=Object.freeze(Object.defineProperty({__proto__:null,defaultAttributes:S,formatAttributes:m,getAttributes:O,toSVG:A,toString:_},Symbol.toStringTag,{value:"Module"})),T=P(I),G=P(D);var N=T,W=G;function q(t){if(t&&t.__esModule)return t;var n=Object.create(null);return t&&Object.keys(t).forEach(function(e){if(e!=="default"){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})}}),n.default=t,Object.freeze(n)}var z=q(W);function j(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,r)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?j(Object(e),!0).forEach(function(r){H(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function H(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function f(t){return K(t)||R(t)||Y(t)||L()}function K(t){if(Array.isArray(t))return y(t)}function R(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y(t,n){if(t){if(typeof t=="string")return y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return y(t,n)}}function y(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t){return z[t]}var v=U("h"),x=function(n,e,r){return N.getAttributes(p(p({},e),{},{preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg",title:n},r))},F=function(n,e,r,i){var o={attrs:x(n,e,r.attrs),on:i,style:p(p({},r.staticStyle),r.style)};return delete o.attrs.style,(r.staticClass||r.class)&&(o.class={},r.staticClass&&(o.class[r.staticClass]=!0),r.class&&(o.class[r.class]=!0)),o},J=function(n,e,r){return p({props:{title:String},name:n},v?{setup:function(o,a){var c=o.title,u=a.attrs,s=a.slots;return function(){return v("svg",x(c,e,u),[].concat(f(c?[v("title",c)]:[]),f(r.map(function(l){var b=l.elem,d=l.attrs;return v(b,d)})),f(s.default?s.default():[])))}}}:{functional:!0,render:function(o,a){var c=a.props.title,u=a.children,s=a.data,l=a.listeners;return o("svg",F(c,e,s,l),[].concat(f(c?[o("title",null,c)]:[]),f(r.map(function(b){var d=b.elem,$=b.attrs;return o(d,{attrs:$})})),f(u||[])))}})};V.createSVGComponent=J;export{G as r,V as u};
