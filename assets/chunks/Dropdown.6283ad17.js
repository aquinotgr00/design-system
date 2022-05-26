import{_ as je,b as Me,e as fe,a as U,d as dt,I as Mt,r as Lt,c as ke,J as vt,w as mt,K as It,l as xe,h as G,T as ht,j as ie,g as se,p as Nt,f as Le,q as gt,m as Ft,n as Wt,k as Vt,L as Ht,M as zt}from"../app.c3e9a2ef.js";import{B as qt}from"./Button.f9a55b09.js";import{u as yt}from"./utils-6ba05f5b.c197738d.js";import{t as Be,o as Ut,a as _e}from"./index.43773d06.js";import{t as Xt,a as Yt}from"./index.b13696b4.js";import{u as Gt}from"./use-input.f158801d.js";const Kt={},Zt={"data-testid":"dropdown-item",class:"dropdown__item"};function Jt(t,e){return U(),Me("button",Zt,[fe(t.$slots,"default")])}var Qt=je(Kt,[["render",Jt]]),er=yt,wt=er.createSVGComponent(wt,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"}}]),tr=wt,rr=tr,ar=yt,bt=ar.createSVGComponent(bt,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M5 8L10 3 10.7 3.7 6.4 8 10.7 12.3 10 13z"}}]),nr=bt,or=nr;const et=Symbol(),ir=dt({components:{DropdownItem:Qt,IconNext:rr,IconBack:or},props:{text:{type:String},backText:{type:String,default:"Back"}},setup(t,{slots:e}){var p;const r=Mt(et,void 0),a=Lt("slide-left"),n=ke(()=>r===void 0),o=(p=r==null?void 0:r.tree)!=null?p:vt({_level:0,slot:e.default}),i=()=>{o.value={_level:o.value._level+1,prev:o.value,slot:e.default}},s=()=>{o.value.prev&&(o.value=o.value.prev)},l=ke(()=>o.value.slot),f=ke(()=>Boolean(n.value&&o.value.prev));mt(o,(b,c)=>{a.value=b._level>c._level?"slide-left":"slide-right"}),n.value&&It(et,{tree:o,next:i,back:s});function u(){n.value&&(o.value={prev:void 0,_level:0,slot:e.default})}return{isRoot:n,tree:o,view:l,next:i,back:s,reset:u,canBack:f,transition:a}}}),sr=Le("div",{class:"dropdown__group-content"}," Back ",-1),lr={class:"dropdown__group-content"};function ur(t,e,r,a,n,o){const i=ie("IconBack"),s=ie("DropdownItem"),l=ie("IconNext");return U(),xe(ht,{name:t.transition,mode:"out-in"},{default:G(()=>[(U(),Me("div",{class:"dropdown__group",key:t.tree._level},[t.canBack?(U(),xe(s,{key:0,class:"dropdown__group-btn dropdown__group-btn-back",onClick:e[0]||(e[0]=f=>t.back())},{default:G(()=>[fe(t.$slots,"button-back",{},()=>[se(i,{class:"dropdown__group-next"}),sr])]),_:3})):Nt("",!0),t.isRoot?(U(),xe(Ft(t.view),{key:2})):(U(),xe(s,{key:1,class:"dropdown__group-btn",onClick:e[1]||(e[1]=f=>t.next())},{default:G(()=>[fe(t.$slots,"button-content",{},()=>[Le("div",lr,gt(t.text),1),se(l,{class:"dropdown__group-next"})])]),_:3}))]))]),_:3},8,["name"])}var fr=je(ir,[["render",ur]]);/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var cr=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Pe=cr.join(","),xt=typeof Element=="undefined",ce=xt?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,tt=!xt&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},pr=function(e,r,a){var n=Array.prototype.slice.apply(e.querySelectorAll(Pe));return r&&ce.call(e,Pe)&&n.unshift(e),n=n.filter(a),n},dr=function t(e,r,a){for(var n=[],o=Array.from(e);o.length;){var i=o.shift();if(i.tagName==="SLOT"){var s=i.assignedElements(),l=s.length?s:i.children,f=t(l,!0,a);a.flatten?n.push.apply(n,f):n.push({scope:i,candidates:f})}else{var u=ce.call(i,Pe);u&&a.filter(i)&&(r||!e.includes(i))&&n.push(i);var p=i.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(i),b=!a.shadowRootFilter||a.shadowRootFilter(i);if(p&&b){var c=t(p===!0?i.children:p.children,!0,a);a.flatten?n.push.apply(n,c):n.push({scope:i,candidates:c})}else o.unshift.apply(o,i.children)}}return n},vr=function(e){return e.tagName==="INPUT"},mr=function(e){return vr(e)&&e.type==="hidden"},hr=function(e){var r=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return r},rt=function(e){var r=e.getBoundingClientRect(),a=r.width,n=r.height;return a===0&&n===0},gr=function(e,r){var a=r.displayCheck,n=r.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=ce.call(e,"details>summary:first-of-type"),i=o?e.parentElement:e;if(ce.call(i,"details:not([open]) *"))return!0;var s=tt(e).host,l=(s==null?void 0:s.ownerDocument.contains(s))||e.ownerDocument.contains(e);if(!a||a==="full"){if(typeof n=="function"){for(var f=e;e;){var u=e.parentElement,p=tt(e);if(u&&!u.shadowRoot&&n(u)===!0)return rt(e);e.assignedSlot?e=e.assignedSlot:!u&&p!==e.ownerDocument?e=p.host:e=u}e=f}if(l)return!e.getClientRects().length}else if(a==="non-zero-area")return rt(e);return!1},yr=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var r=e.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var a=0;a<r.children.length;a++){var n=r.children.item(a);if(n.tagName==="LEGEND")return ce.call(r,"fieldset[disabled] *")?!0:!n.contains(e)}return!0}r=r.parentElement}return!1},at=function(e,r){return!(r.disabled||mr(r)||gr(r,e)||hr(r)||yr(r))},wr=function(e,r){r=r||{};var a;return r.getShadowRoot?a=dr([e],r.includeContainer,{filter:at.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):a=pr(e,r.includeContainer,at.bind(null,r)),a};function br(t){function e(n){const o=wr(t.value),i=o.findIndex(l=>l===document.activeElement),s=o.at((i+n)%o.length);s&&s.focus()}function r(){e(1)}function a(){e(-1)}return{next:r,prev:a}}var R="top",P="bottom",T="right",$="left",Ie="auto",ve=[R,P,T,$],K="start",pe="end",xr="clippingParents",Ot="viewport",oe="popper",Or="reference",nt=ve.reduce(function(t,e){return t.concat([e+"-"+K,e+"-"+pe])},[]),Et=[].concat(ve,[Ie]).reduce(function(t,e){return t.concat([e,e+"-"+K,e+"-"+pe])},[]),Er="beforeRead",Dr="read",Ar="afterRead",Cr="beforeMain",Sr="main",Rr="afterMain",$r="beforeWrite",kr="write",Br="afterWrite",_r=[Er,Dr,Ar,Cr,Sr,Rr,$r,kr,Br];function N(t){return t?(t.nodeName||"").toLowerCase():null}function L(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Z(t){var e=L(t).Element;return t instanceof e||t instanceof Element}function _(t){var e=L(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ne(t){if(typeof ShadowRoot=="undefined")return!1;var e=L(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Pr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var a=e.styles[r]||{},n=e.attributes[r]||{},o=e.elements[r];!_(o)||!N(o)||(Object.assign(o.style,a),Object.keys(n).forEach(function(i){var s=n[i];s===!1?o.removeAttribute(i):o.setAttribute(i,s===!0?"":s)}))})}function Tr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(a){var n=e.elements[a],o=e.attributes[a]||{},i=Object.keys(e.styles.hasOwnProperty(a)?e.styles[a]:r[a]),s=i.reduce(function(l,f){return l[f]="",l},{});!_(n)||!N(n)||(Object.assign(n.style,s),Object.keys(o).forEach(function(l){n.removeAttribute(l)}))})}}var jr={name:"applyStyles",enabled:!0,phase:"write",fn:Pr,effect:Tr,requires:["computeStyles"]};function I(t){return t.split("-")[0]}var X=Math.max,De=Math.min,J=Math.round;function Q(t,e){e===void 0&&(e=!1);var r=t.getBoundingClientRect(),a=1,n=1;if(_(t)&&e){var o=t.offsetHeight,i=t.offsetWidth;i>0&&(a=J(r.width)/i||1),o>0&&(n=J(r.height)/o||1)}return{width:r.width/a,height:r.height/n,top:r.top/n,right:r.right/a,bottom:r.bottom/n,left:r.left/a,x:r.left/a,y:r.top/n}}function Fe(t){var e=Q(t),r=t.offsetWidth,a=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-a)<=1&&(a=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:a}}function Dt(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Ne(r)){var a=e;do{if(a&&t.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function F(t){return L(t).getComputedStyle(t)}function Mr(t){return["table","td","th"].indexOf(N(t))>=0}function V(t){return((Z(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ae(t){return N(t)==="html"?t:t.assignedSlot||t.parentNode||(Ne(t)?t.host:null)||V(t)}function ot(t){return!_(t)||F(t).position==="fixed"?null:t.offsetParent}function Lr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&_(t)){var a=F(t);if(a.position==="fixed")return null}var n=Ae(t);for(Ne(n)&&(n=n.host);_(n)&&["html","body"].indexOf(N(n))<0;){var o=F(n);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return n;n=n.parentNode}return null}function me(t){for(var e=L(t),r=ot(t);r&&Mr(r)&&F(r).position==="static";)r=ot(r);return r&&(N(r)==="html"||N(r)==="body"&&F(r).position==="static")?e:r||Lr(t)||e}function We(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function le(t,e,r){return X(t,De(e,r))}function Ir(t,e,r){var a=le(t,e,r);return a>r?r:a}function At(){return{top:0,right:0,bottom:0,left:0}}function Ct(t){return Object.assign({},At(),t)}function St(t,e){return e.reduce(function(r,a){return r[a]=t,r},{})}var Nr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Ct(typeof e!="number"?e:St(e,ve))};function Fr(t){var e,r=t.state,a=t.name,n=t.options,o=r.elements.arrow,i=r.modifiersData.popperOffsets,s=I(r.placement),l=We(s),f=[$,T].indexOf(s)>=0,u=f?"height":"width";if(!(!o||!i)){var p=Nr(n.padding,r),b=Fe(o),c=l==="y"?R:$,g=l==="y"?P:T,v=r.rects.reference[u]+r.rects.reference[l]-i[l]-r.rects.popper[u],m=i[l]-r.rects.reference[l],x=me(o),O=x?l==="y"?x.clientHeight||0:x.clientWidth||0:0,E=v/2-m/2,d=p[c],y=O-b[u]-p[g],h=O/2-b[u]/2+E,w=le(d,h,y),D=l;r.modifiersData[a]=(e={},e[D]=w,e.centerOffset=w-h,e)}}function Wr(t){var e=t.state,r=t.options,a=r.element,n=a===void 0?"[data-popper-arrow]":a;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!Dt(e.elements.popper,n)||(e.elements.arrow=n))}var Vr={name:"arrow",enabled:!0,phase:"main",fn:Fr,effect:Wr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(t){return t.split("-")[1]}var Hr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zr(t){var e=t.x,r=t.y,a=window,n=a.devicePixelRatio||1;return{x:J(e*n)/n||0,y:J(r*n)/n||0}}function it(t){var e,r=t.popper,a=t.popperRect,n=t.placement,o=t.variation,i=t.offsets,s=t.position,l=t.gpuAcceleration,f=t.adaptive,u=t.roundOffsets,p=t.isFixed,b=i.x,c=b===void 0?0:b,g=i.y,v=g===void 0?0:g,m=typeof u=="function"?u({x:c,y:v}):{x:c,y:v};c=m.x,v=m.y;var x=i.hasOwnProperty("x"),O=i.hasOwnProperty("y"),E=$,d=R,y=window;if(f){var h=me(r),w="clientHeight",D="clientWidth";if(h===L(r)&&(h=V(r),F(h).position!=="static"&&s==="absolute"&&(w="scrollHeight",D="scrollWidth")),h=h,n===R||(n===$||n===T)&&o===pe){d=P;var S=p&&h===y&&y.visualViewport?y.visualViewport.height:h[w];v-=S-a.height,v*=l?1:-1}if(n===$||(n===R||n===P)&&o===pe){E=T;var A=p&&h===y&&y.visualViewport?y.visualViewport.width:h[D];c-=A-a.width,c*=l?1:-1}}var C=Object.assign({position:s},f&&Hr),j=u===!0?zr({x:c,y:v}):{x:c,y:v};if(c=j.x,v=j.y,l){var k;return Object.assign({},C,(k={},k[d]=O?"0":"",k[E]=x?"0":"",k.transform=(y.devicePixelRatio||1)<=1?"translate("+c+"px, "+v+"px)":"translate3d("+c+"px, "+v+"px, 0)",k))}return Object.assign({},C,(e={},e[d]=O?v+"px":"",e[E]=x?c+"px":"",e.transform="",e))}function qr(t){var e=t.state,r=t.options,a=r.gpuAcceleration,n=a===void 0?!0:a,o=r.adaptive,i=o===void 0?!0:o,s=r.roundOffsets,l=s===void 0?!0:s,f={placement:I(e.placement),variation:ee(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,it(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:i,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,it(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Ur={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:qr,data:{}},Oe={passive:!0};function Xr(t){var e=t.state,r=t.instance,a=t.options,n=a.scroll,o=n===void 0?!0:n,i=a.resize,s=i===void 0?!0:i,l=L(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&f.forEach(function(u){u.addEventListener("scroll",r.update,Oe)}),s&&l.addEventListener("resize",r.update,Oe),function(){o&&f.forEach(function(u){u.removeEventListener("scroll",r.update,Oe)}),s&&l.removeEventListener("resize",r.update,Oe)}}var Yr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Xr,data:{}},Gr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ee(t){return t.replace(/left|right|bottom|top/g,function(e){return Gr[e]})}var Kr={start:"end",end:"start"};function st(t){return t.replace(/start|end/g,function(e){return Kr[e]})}function Ve(t){var e=L(t),r=e.pageXOffset,a=e.pageYOffset;return{scrollLeft:r,scrollTop:a}}function He(t){return Q(V(t)).left+Ve(t).scrollLeft}function Zr(t){var e=L(t),r=V(t),a=e.visualViewport,n=r.clientWidth,o=r.clientHeight,i=0,s=0;return a&&(n=a.width,o=a.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=a.offsetLeft,s=a.offsetTop)),{width:n,height:o,x:i+He(t),y:s}}function Jr(t){var e,r=V(t),a=Ve(t),n=(e=t.ownerDocument)==null?void 0:e.body,o=X(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),i=X(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-a.scrollLeft+He(t),l=-a.scrollTop;return F(n||r).direction==="rtl"&&(s+=X(r.clientWidth,n?n.clientWidth:0)-o),{width:o,height:i,x:s,y:l}}function ze(t){var e=F(t),r=e.overflow,a=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+a)}function Rt(t){return["html","body","#document"].indexOf(N(t))>=0?t.ownerDocument.body:_(t)&&ze(t)?t:Rt(Ae(t))}function ue(t,e){var r;e===void 0&&(e=[]);var a=Rt(t),n=a===((r=t.ownerDocument)==null?void 0:r.body),o=L(a),i=n?[o].concat(o.visualViewport||[],ze(a)?a:[]):a,s=e.concat(i);return n?s:s.concat(ue(Ae(i)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Qr(t){var e=Q(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function lt(t,e){return e===Ot?Te(Zr(t)):Z(e)?Qr(e):Te(Jr(V(t)))}function ea(t){var e=ue(Ae(t)),r=["absolute","fixed"].indexOf(F(t).position)>=0,a=r&&_(t)?me(t):t;return Z(a)?e.filter(function(n){return Z(n)&&Dt(n,a)&&N(n)!=="body"}):[]}function ta(t,e,r){var a=e==="clippingParents"?ea(t):[].concat(e),n=[].concat(a,[r]),o=n[0],i=n.reduce(function(s,l){var f=lt(t,l);return s.top=X(f.top,s.top),s.right=De(f.right,s.right),s.bottom=De(f.bottom,s.bottom),s.left=X(f.left,s.left),s},lt(t,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function $t(t){var e=t.reference,r=t.element,a=t.placement,n=a?I(a):null,o=a?ee(a):null,i=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,l;switch(n){case R:l={x:i,y:e.y-r.height};break;case P:l={x:i,y:e.y+e.height};break;case T:l={x:e.x+e.width,y:s};break;case $:l={x:e.x-r.width,y:s};break;default:l={x:e.x,y:e.y}}var f=n?We(n):null;if(f!=null){var u=f==="y"?"height":"width";switch(o){case K:l[f]=l[f]-(e[u]/2-r[u]/2);break;case pe:l[f]=l[f]+(e[u]/2-r[u]/2);break}}return l}function de(t,e){e===void 0&&(e={});var r=e,a=r.placement,n=a===void 0?t.placement:a,o=r.boundary,i=o===void 0?xr:o,s=r.rootBoundary,l=s===void 0?Ot:s,f=r.elementContext,u=f===void 0?oe:f,p=r.altBoundary,b=p===void 0?!1:p,c=r.padding,g=c===void 0?0:c,v=Ct(typeof g!="number"?g:St(g,ve)),m=u===oe?Or:oe,x=t.rects.popper,O=t.elements[b?m:u],E=ta(Z(O)?O:O.contextElement||V(t.elements.popper),i,l),d=Q(t.elements.reference),y=$t({reference:d,element:x,strategy:"absolute",placement:n}),h=Te(Object.assign({},x,y)),w=u===oe?h:d,D={top:E.top-w.top+v.top,bottom:w.bottom-E.bottom+v.bottom,left:E.left-w.left+v.left,right:w.right-E.right+v.right},S=t.modifiersData.offset;if(u===oe&&S){var A=S[n];Object.keys(D).forEach(function(C){var j=[T,P].indexOf(C)>=0?1:-1,k=[R,P].indexOf(C)>=0?"y":"x";D[C]+=A[k]*j})}return D}function ra(t,e){e===void 0&&(e={});var r=e,a=r.placement,n=r.boundary,o=r.rootBoundary,i=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,f=l===void 0?Et:l,u=ee(a),p=u?s?nt:nt.filter(function(g){return ee(g)===u}):ve,b=p.filter(function(g){return f.indexOf(g)>=0});b.length===0&&(b=p);var c=b.reduce(function(g,v){return g[v]=de(t,{placement:v,boundary:n,rootBoundary:o,padding:i})[I(v)],g},{});return Object.keys(c).sort(function(g,v){return c[g]-c[v]})}function aa(t){if(I(t)===Ie)return[];var e=Ee(t);return[st(t),e,st(e)]}function na(t){var e=t.state,r=t.options,a=t.name;if(!e.modifiersData[a]._skip){for(var n=r.mainAxis,o=n===void 0?!0:n,i=r.altAxis,s=i===void 0?!0:i,l=r.fallbackPlacements,f=r.padding,u=r.boundary,p=r.rootBoundary,b=r.altBoundary,c=r.flipVariations,g=c===void 0?!0:c,v=r.allowedAutoPlacements,m=e.options.placement,x=I(m),O=x===m,E=l||(O||!g?[Ee(m)]:aa(m)),d=[m].concat(E).reduce(function(Y,W){return Y.concat(I(W)===Ie?ra(e,{placement:W,boundary:u,rootBoundary:p,padding:f,flipVariations:g,allowedAutoPlacements:v}):W)},[]),y=e.rects.reference,h=e.rects.popper,w=new Map,D=!0,S=d[0],A=0;A<d.length;A++){var C=d[A],j=I(C),k=ee(C)===K,te=[R,P].indexOf(j)>=0,re=te?"width":"height",B=de(e,{placement:C,boundary:u,rootBoundary:p,altBoundary:b,padding:f}),M=te?k?T:$:k?P:R;y[re]>h[re]&&(M=Ee(M));var he=Ee(M),H=[];if(o&&H.push(B[j]<=0),s&&H.push(B[M]<=0,B[he]<=0),H.every(function(Y){return Y})){S=C,D=!1;break}w.set(C,H)}if(D)for(var ge=g?3:1,Ce=function(W){var ne=d.find(function(we){var z=w.get(we);if(z)return z.slice(0,W).every(function(Se){return Se})});if(ne)return S=ne,"break"},ae=ge;ae>0;ae--){var ye=Ce(ae);if(ye==="break")break}e.placement!==S&&(e.modifiersData[a]._skip=!0,e.placement=S,e.reset=!0)}}var oa={name:"flip",enabled:!0,phase:"main",fn:na,requiresIfExists:["offset"],data:{_skip:!1}};function ut(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function ft(t){return[R,T,P,$].some(function(e){return t[e]>=0})}function ia(t){var e=t.state,r=t.name,a=e.rects.reference,n=e.rects.popper,o=e.modifiersData.preventOverflow,i=de(e,{elementContext:"reference"}),s=de(e,{altBoundary:!0}),l=ut(i,a),f=ut(s,n,o),u=ft(l),p=ft(f);e.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}var sa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ia};function la(t,e,r){var a=I(t),n=[$,R].indexOf(a)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,i=o[0],s=o[1];return i=i||0,s=(s||0)*n,[$,T].indexOf(a)>=0?{x:s,y:i}:{x:i,y:s}}function ua(t){var e=t.state,r=t.options,a=t.name,n=r.offset,o=n===void 0?[0,0]:n,i=Et.reduce(function(u,p){return u[p]=la(p,e.rects,o),u},{}),s=i[e.placement],l=s.x,f=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=f),e.modifiersData[a]=i}var fa={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ua};function ca(t){var e=t.state,r=t.name;e.modifiersData[r]=$t({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var pa={name:"popperOffsets",enabled:!0,phase:"read",fn:ca,data:{}};function da(t){return t==="x"?"y":"x"}function va(t){var e=t.state,r=t.options,a=t.name,n=r.mainAxis,o=n===void 0?!0:n,i=r.altAxis,s=i===void 0?!1:i,l=r.boundary,f=r.rootBoundary,u=r.altBoundary,p=r.padding,b=r.tether,c=b===void 0?!0:b,g=r.tetherOffset,v=g===void 0?0:g,m=de(e,{boundary:l,rootBoundary:f,padding:p,altBoundary:u}),x=I(e.placement),O=ee(e.placement),E=!O,d=We(x),y=da(d),h=e.modifiersData.popperOffsets,w=e.rects.reference,D=e.rects.popper,S=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,A=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),C=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(!!h){if(o){var k,te=d==="y"?R:$,re=d==="y"?P:T,B=d==="y"?"height":"width",M=h[d],he=M+m[te],H=M-m[re],ge=c?-D[B]/2:0,Ce=O===K?w[B]:D[B],ae=O===K?-D[B]:-w[B],ye=e.elements.arrow,Y=c&&ye?Fe(ye):{width:0,height:0},W=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:At(),ne=W[te],we=W[re],z=le(0,w[B],Y[B]),Se=E?w[B]/2-ge-z-ne-A.mainAxis:Ce-z-ne-A.mainAxis,kt=E?-w[B]/2+ge+z+we+A.mainAxis:ae+z+we+A.mainAxis,Re=e.elements.arrow&&me(e.elements.arrow),Bt=Re?d==="y"?Re.clientTop||0:Re.clientLeft||0:0,qe=(k=C==null?void 0:C[d])!=null?k:0,_t=M+Se-qe-Bt,Pt=M+kt-qe,Ue=le(c?De(he,_t):he,M,c?X(H,Pt):H);h[d]=Ue,j[d]=Ue-M}if(s){var Xe,Tt=d==="x"?R:$,jt=d==="x"?P:T,q=h[y],be=y==="y"?"height":"width",Ye=q+m[Tt],Ge=q-m[jt],$e=[R,$].indexOf(x)!==-1,Ke=(Xe=C==null?void 0:C[y])!=null?Xe:0,Ze=$e?Ye:q-w[be]-D[be]-Ke+A.altAxis,Je=$e?q+w[be]+D[be]-Ke-A.altAxis:Ge,Qe=c&&$e?Ir(Ze,q,Je):le(c?Ze:Ye,q,c?Je:Ge);h[y]=Qe,j[y]=Qe-q}e.modifiersData[a]=j}}var ma={name:"preventOverflow",enabled:!0,phase:"main",fn:va,requiresIfExists:["offset"]};function ha(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function ga(t){return t===L(t)||!_(t)?Ve(t):ha(t)}function ya(t){var e=t.getBoundingClientRect(),r=J(e.width)/t.offsetWidth||1,a=J(e.height)/t.offsetHeight||1;return r!==1||a!==1}function wa(t,e,r){r===void 0&&(r=!1);var a=_(e),n=_(e)&&ya(e),o=V(e),i=Q(t,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(a||!a&&!r)&&((N(e)!=="body"||ze(o))&&(s=ga(e)),_(e)?(l=Q(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):o&&(l.x=He(o))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function ba(t){var e=new Map,r=new Set,a=[];t.forEach(function(o){e.set(o.name,o)});function n(o){r.add(o.name);var i=[].concat(o.requires||[],o.requiresIfExists||[]);i.forEach(function(s){if(!r.has(s)){var l=e.get(s);l&&n(l)}}),a.push(o)}return t.forEach(function(o){r.has(o.name)||n(o)}),a}function xa(t){var e=ba(t);return _r.reduce(function(r,a){return r.concat(e.filter(function(n){return n.phase===a}))},[])}function Oa(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Ea(t){var e=t.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(e).map(function(r){return e[r]})}var ct={placement:"bottom",modifiers:[],strategy:"absolute"};function pt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function Da(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,a=r===void 0?[]:r,n=e.defaultOptions,o=n===void 0?ct:n;return function(s,l,f){f===void 0&&(f=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},ct,o),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},p=[],b=!1,c={state:u,setOptions:function(x){var O=typeof x=="function"?x(u.options):x;v(),u.options=Object.assign({},o,u.options,O),u.scrollParents={reference:Z(s)?ue(s):s.contextElement?ue(s.contextElement):[],popper:ue(l)};var E=xa(Ea([].concat(a,u.options.modifiers)));return u.orderedModifiers=E.filter(function(d){return d.enabled}),g(),c.update()},forceUpdate:function(){if(!b){var x=u.elements,O=x.reference,E=x.popper;if(!!pt(O,E)){u.rects={reference:wa(O,me(E),u.options.strategy==="fixed"),popper:Fe(E)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(A){return u.modifiersData[A.name]=Object.assign({},A.data)});for(var d=0;d<u.orderedModifiers.length;d++){if(u.reset===!0){u.reset=!1,d=-1;continue}var y=u.orderedModifiers[d],h=y.fn,w=y.options,D=w===void 0?{}:w,S=y.name;typeof h=="function"&&(u=h({state:u,options:D,name:S,instance:c})||u)}}}},update:Oa(function(){return new Promise(function(m){c.forceUpdate(),m(u)})}),destroy:function(){v(),b=!0}};if(!pt(s,l))return c;c.setOptions(f).then(function(m){!b&&f.onFirstUpdate&&f.onFirstUpdate(m)});function g(){u.orderedModifiers.forEach(function(m){var x=m.name,O=m.options,E=O===void 0?{}:O,d=m.effect;if(typeof d=="function"){var y=d({state:u,name:x,instance:c,options:E}),h=function(){};p.push(y||h)}})}function v(){p.forEach(function(m){return m()}),p=[]}return c}}var Aa=[Yr,pa,Ur,jr,fa,oa,ma,Vr,sa],Ca=Da({defaultModifiers:Aa});function Sa(t,e,r={}){const a=vt();return Xt(()=>{a.value=Ca(t.value,e.value,r)}),Yt(()=>{a.value&&a.value.destroy()}),a}const Ra=dt({components:{Button:qt,DropdownGroup:fr},props:{modelValue:{type:Boolean,default:!1},text:{type:String},popper:{type:Object,default:()=>({placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,6]}},{name:"preventOverflow"}]})},disabled:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(t){const e=Be("dropdown"),r=Be("menu"),a=Be("wizard"),n=Sa(e,r,t.popper),o=Gt(t),{next:i,prev:s}=br(r);function l(){t.disabled||(o.value=!o.value)}function f(){t.disabled||(o.value=!0)}function u(){t.disabled||(o.value=!1)}return Ut(r,()=>{o.value&&l()},{ignore:[e]}),_e("Escape",()=>{o.value&&u()}),_e(["ArrowUp"],p=>{p.preventDefault(),o.value&&s()}),_e(["ArrowDown"],p=>{p.preventDefault(),o.value&&i()}),mt(o,p=>{p&&n.value?n.value.update():a.value.reset()}),{isOpen:o,toggle:l,open:f,close:u}}}),$a={ref:"menu",class:"dropdown__menu"};function ka(t,e,r,a,n,o){const i=ie("Button"),s=ie("DropdownGroup");return U(),Me("div",{ref:"dropdown",class:Wt(["dropdown",{"dropdown--open":t.isOpen}]),"data-testid":"dropdown"},[fe(t.$slots,"activator",{toggle:t.toggle,open:t.open,close:t.close,isOpen:t.isOpen},()=>[se(i,{onClick:t.toggle,disabled:t.disabled},{default:G(()=>[Vt(gt(t.text),1)]),_:1},8,["onClick","disabled"])]),se(ht,{name:"fade"},{default:G(()=>[Ht(Le("div",$a,[se(s,{class:"dropdown__menuContainer",ref:"wizard"},{default:G(()=>[fe(t.$slots,"default")]),_:3},512)],512),[[zt,t.isOpen]])]),_:3})],2)}var La=je(Ra,[["render",ka]]);export{La as D,Qt as a,fr as b};
