import{i as t}from"./memoize.8367968b.js";var s=9007199254740991,o=/^(?:0|[1-9]\d*)$/;function p(r,n){var i=typeof r;return n=n==null?s:n,!!n&&(i=="number"||i!="symbol"&&o.test(r))&&r>-1&&r%1==0&&r<n}var f=9007199254740991;function E(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=f}function y(r){return r!=null&&E(r.length)&&!t(r)}export{p as a,E as b,y as i};
