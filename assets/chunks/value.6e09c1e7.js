function T(r){return function(t,a,u,s,f,c,i){return r(t,a,i)}}function q(r){return function(t,a,u,s){if(!t||!a||typeof t!="object"||typeof a!="object")return r(t,a,u,s);var f=s.get(t),c=s.get(a);if(f&&c)return f===a&&c===t;s.set(t,a),s.set(a,t);var i=r(t,a,u,s);return s.delete(t),s.delete(a),i}}function h(r,e){var t={};for(var a in r)t[a]=r[a];for(var a in e)t[a]=e[a];return t}function y(r){return r.constructor===Object||r.constructor==null}function d(r){return typeof r.then=="function"}function p(r,e){return r===e||r!==r&&e!==e}var _="[object Arguments]",D="[object Boolean]",z="[object Date]",B="[object RegExp]",P="[object Map]",k="[object Number]",w="[object Object]",L="[object Set]",U="[object String]",g=Object.prototype.toString;function A(r){var e=r.areArraysEqual,t=r.areDatesEqual,a=r.areMapsEqual,u=r.areObjectsEqual,s=r.areRegExpsEqual,f=r.areSetsEqual,c=r.createIsNestedEqual,i=c(o);function o(n,l,E){if(n===l)return!0;if(!n||!l||typeof n!="object"||typeof l!="object")return n!==n&&l!==l;if(y(n)&&y(l))return u(n,l,i,E);var O=Array.isArray(n),j=Array.isArray(l);if(O||j)return O===j&&e(n,l,i,E);var v=g.call(n);return v!==g.call(l)?!1:v===z?t(n,l,i,E):v===B?s(n,l,i,E):v===P?a(n,l,i,E):v===L?f(n,l,i,E):v===w||v===_?d(n)||d(l)?!1:u(n,l,i,E):v===D||v===k||v===U?p(n.valueOf(),l.valueOf()):!1}return o}function I(r,e,t,a){var u=r.length;if(e.length!==u)return!1;for(;u-- >0;)if(!t(r[u],e[u],u,u,r,e,a))return!1;return!0}var F=q(I);function N(r,e){return p(r.valueOf(),e.valueOf())}function x(r,e,t,a){var u=r.size===e.size;if(!u)return!1;if(!r.size)return!0;var s={},f=0;return r.forEach(function(c,i){if(!!u){var o=!1,n=0;e.forEach(function(l,E){!o&&!s[n]&&(o=t(i,E,f,n,r,e,a)&&t(c,l,i,E,r,e,a))&&(s[n]=!0),n++}),f++,u=o}}),u}var $=q(x),m="_owner",V=Object.prototype.hasOwnProperty;function G(r,e,t,a){var u=Object.keys(r),s=u.length;if(Object.keys(e).length!==s)return!1;for(var f;s-- >0;){if(f=u[s],f===m){var c=!!r.$$typeof,i=!!e.$$typeof;if((c||i)&&c!==i)return!1}if(!V.call(e,f)||!t(r[f],e[f],f,f,r,e,a))return!1}return!0}var J=q(G);function R(r,e){return r.source===e.source&&r.flags===e.flags}function S(r,e,t,a){var u=r.size===e.size;if(!u)return!1;if(!r.size)return!0;var s={};return r.forEach(function(f,c){if(!!u){var i=!1,o=0;e.forEach(function(n,l){!i&&!s[o]&&(i=t(f,n,c,l,r,e,a))&&(s[o]=!0),o++}),u=i}}),u}var W=q(S),C=Object.freeze({areArraysEqual:I,areDatesEqual:N,areMapsEqual:x,areObjectsEqual:G,areRegExpsEqual:R,areSetsEqual:S,createIsNestedEqual:T}),M=Object.freeze({areArraysEqual:F,areDatesEqual:N,areMapsEqual:$,areObjectsEqual:J,areRegExpsEqual:R,areSetsEqual:W,createIsNestedEqual:T}),X=A(C);function Z(r,e){return X(r,e,void 0)}A(h(C,{createIsNestedEqual:function(){return p}}));A(M);A(h(M,{createIsNestedEqual:function(){return p}}));function H(r,e){return Z(r,e)}function K(r,e){return r.some(t=>H(t,e))}export{H as i,K as v};
