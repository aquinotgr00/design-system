import{t as d}from"./toString.5230fc0f.js";import{b as I}from"./baseSlice.cf92e063.js";function T(u,r,e){var f=u.length;return e=e===void 0?f:e,!r&&e>=f?u:I(u,r,e)}var W="\\ud800-\\udfff",D="\\u0300-\\u036f",H="\\ufe20-\\ufe2f",N="\\u20d0-\\u20ff",w=D+H+N,y="\\ufe0e\\ufe0f",J="\\u200d",V=RegExp("["+J+W+w+y+"]");function R(u){return V.test(u)}function F(u){return u.split("")}var g="\\ud800-\\udfff",G="\\u0300-\\u036f",P="\\ufe20-\\ufe2f",Y="\\u20d0-\\u20ff",q=G+P+Y,B="\\ufe0e\\ufe0f",_="["+g+"]",n="["+q+"]",s="\\ud83c[\\udffb-\\udfff]",K="(?:"+n+"|"+s+")",p="[^"+g+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",Q="\\u200d",m=K+"?",C="["+B+"]?",X="(?:"+Q+"(?:"+[p,l,$].join("|")+")"+C+m+")*",uu=C+m+X,ru="(?:"+[p+n+"?",n,l,$,_].join("|")+")",eu=RegExp(s+"(?="+s+")|"+ru+uu,"g");function fu(u){return u.match(eu)||[]}function au(u){return R(u)?fu(u):F(u)}function ou(u){return function(r){r=d(r);var e=R(r)?au(r):void 0,f=e?e[0]:r.charAt(0),a=e?T(e,1).join(""):r.slice(1);return f[u]()+a}}var nu=ou("toUpperCase");const su=nu;function du(u,r,e,f){var a=-1,x=u==null?0:u.length;for(f&&x&&(e=u[++a]);++a<x;)e=r(e,u[a],a,u);return e}function xu(u){return function(r){return u==null?void 0:u[r]}}var cu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},tu=xu(cu);const iu=tu;var bu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ru="\\u0300-\\u036f",gu="\\ufe20-\\ufe2f",pu="\\u20d0-\\u20ff",lu=Ru+gu+pu,$u="["+lu+"]",mu=RegExp($u,"g");function Cu(u){return u=d(u),u&&u.replace(bu,iu).replace(mu,"")}var Au=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function vu(u){return u.match(Au)||[]}var Ou=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Uu(u){return Ou.test(u)}var A="\\ud800-\\udfff",hu="\\u0300-\\u036f",Su="\\ufe20-\\ufe2f",Mu="\\u20d0-\\u20ff",Eu=hu+Su+Mu,v="\\u2700-\\u27bf",O="a-z\\xdf-\\xf6\\xf8-\\xff",Lu="\\xac\\xb1\\xd7\\xf7",ku="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zu="\\u2000-\\u206f",zu=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",U="A-Z\\xc0-\\xd6\\xd8-\\xde",ju="\\ufe0e\\ufe0f",h=Lu+ku+Zu+zu,S="['’]",c="["+h+"]",Iu="["+Eu+"]",M="\\d+",Tu="["+v+"]",E="["+O+"]",L="[^"+A+h+M+v+O+U+"]",Wu="\\ud83c[\\udffb-\\udfff]",Du="(?:"+Iu+"|"+Wu+")",Hu="[^"+A+"]",k="(?:\\ud83c[\\udde6-\\uddff]){2}",Z="[\\ud800-\\udbff][\\udc00-\\udfff]",o="["+U+"]",Nu="\\u200d",t="(?:"+E+"|"+L+")",wu="(?:"+o+"|"+L+")",i="(?:"+S+"(?:d|ll|m|re|s|t|ve))?",b="(?:"+S+"(?:D|LL|M|RE|S|T|VE))?",z=Du+"?",j="["+ju+"]?",yu="(?:"+Nu+"(?:"+[Hu,k,Z].join("|")+")"+j+z+")*",Ju="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Vu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fu=j+z+yu,Gu="(?:"+[Tu,k,Z].join("|")+")"+Fu,Pu=RegExp([o+"?"+E+"+"+i+"(?="+[c,o,"$"].join("|")+")",wu+"+"+b+"(?="+[c,o+t,"$"].join("|")+")",o+"?"+t+"+"+i,o+"+"+b,Vu,Ju,M,Gu].join("|"),"g");function Yu(u){return u.match(Pu)||[]}function qu(u,r,e){return u=d(u),r=e?void 0:r,r===void 0?Uu(u)?Yu(u):vu(u):u.match(r)||[]}var Bu="['’]",_u=RegExp(Bu,"g");function Ku(u){return function(r){return du(qu(Cu(r).replace(_u,"")),u,"")}}var Qu=Ku(function(u,r,e){return u+(e?" ":"")+su(r)});const r0=Qu;export{Ku as c,r0 as s,su as u};
