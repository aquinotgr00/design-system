import{t as Be,o as zt,a as Oe}from"./index.ee3a225e.js";import{B as Ut}from"./Button.35c66a38.js";import{d as Ie,q as bt,_ as Le,a as W,b as We,e as Q,k as Ve,t as He,r as qt,c as Pe,s as Ot,w as Fe,x as xt,g as ee,l as J,i as te,y as Te,h as De,p as _e,f as ze,m as Xt,T as Dt,z as Yt,A as Gt,B as Kt,C as Zt,D as Jt,n as Qt}from"../app.5d60bad4.js";import{u as Ct}from"./utils-6ba05f5b.063d2e00.js";import{u as er}from"./use-input.d0cb73a2.js";import{I as tr}from"./16.e992ae0e.js";const rr=Ie({props:{text:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const r=bt(Nt,void 0,!0);function n(a){t("click",a),(r==null?void 0:r.close)&&!a.defaultPrevented&&r.close()}return{handleOnClick:n}}});function nr(e,t,r,n,a,s){return W(),We("button",{"data-testid":"dropdown-item",class:"dropdown__item",onClick:t[0]||(t[0]=(...i)=>e.handleOnClick&&e.handleOnClick(...i))},[Q(e.$slots,"default",{},()=>[Ve(He(e.text),1)])])}const ar=Le(rr,[["render",nr]]);var or=Ct,Et=or.createSVGComponent(Et,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"}}]),ir=Et;const sr=ir;var lr=Ct,kt=lr.createSVGComponent(kt,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M6.7 12.3L2.9 8.5 15 8.5 15 7.5 2.9 7.5 6.7 3.7 6 3 1 8 6 13z"}}]),ur=kt;const fr=ur,st=Symbol("DropdownTree"),cr=Ie({components:{DropdownItem:ar,IconNext:sr,IconBack:fr},props:{text:{type:String,default:""},noCaret:{type:Boolean,default:!1}},emits:["click"],setup(e,{slots:t,emit:r}){var c;const n=bt(st,void 0,!0),a=qt("slide-left"),s=Pe(()=>n===void 0),i=(c=n==null?void 0:n.tree)!=null?c:Ot({_level:0,slots:t}),o=()=>{i.value={_level:i.value._level+1,prev:i.value,slots:t}},l=()=>{i.value.prev&&(i.value=i.value.prev)},f=Pe(()=>i.value.slots.default),u=Pe(()=>Boolean(s.value&&i.value.prev));Fe(i,(h,m)=>{a.value=h._level>m._level?"slide-left":"slide-right"}),s.value&&xt(st,{tree:i,next:o,back:l});function p(){s.value&&(i.value={prev:void 0,_level:0,slots:t})}function d(){const h=new MouseEvent("click");r("click",h),h.defaultPrevented||o()}return{isRoot:s,tree:i,view:f,next:o,back:l,reset:p,canBack:u,transition:a,handleOnClick:d}}});const pr=ze("div",{class:"dropdown__group-content"},null,-1),dr={class:"dropdown__subitem-content"};function vr(e,t,r,n,a,s){const i=ee("IconBack"),o=ee("DropdownItem"),l=ee("IconNext");return W(),J(Dt,{name:e.transition,mode:"out-in"},{default:te(()=>[(W(),We("div",{key:e.tree._level,"data-testid":"dropdown-subitem",class:"dropdown__subitem"},[e.canBack?(W(),J(o,{key:"btn-back","data-testid":"dropdown-back",class:"dropdown__subitem-btn dropdown__subitem-btn-back",onClick:t[0]||(t[0]=Te(f=>e.back(),["prevent"]))},{default:te(()=>[Q(e.$slots,"button-back",{},()=>[De(i,{class:"dropdown__subitem-next"}),pr])]),_:3})):_e("",!0),e.isRoot?(W(),J(Xt(e.view),{key:2})):(W(),J(o,{key:"btn-next",class:"dropdown__subitem-btn",onClick:Te(e.handleOnClick,["prevent"])},{default:te(()=>[ze("div",dr,[Q(e.$slots,"button-content",{next:e.next,back:e.back},()=>[Ve(He(e.text),1)])]),e.noCaret?_e("",!0):(W(),J(l,{key:0,"data-testid":"dropdown-subitem-next",class:"dropdown__subitem-next"}))]),_:3},8,["onClick"]))]))]),_:3},8,["name"])}const mr=Le(cr,[["render",vr]]);/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var hr=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],je=hr.join(","),At=typeof Element>"u",ce=At?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,lt=!At&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},gr=function(t,r,n){var a=Array.prototype.slice.apply(t.querySelectorAll(je));return r&&ce.call(t,je)&&a.unshift(t),a=a.filter(n),a},yr=function e(t,r,n){for(var a=[],s=Array.from(t);s.length;){var i=s.shift();if(i.tagName==="SLOT"){var o=i.assignedElements(),l=o.length?o:i.children,f=e(l,!0,n);n.flatten?a.push.apply(a,f):a.push({scope:i,candidates:f})}else{var u=ce.call(i,je);u&&n.filter(i)&&(r||!t.includes(i))&&a.push(i);var p=i.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(i),d=!n.shadowRootFilter||n.shadowRootFilter(i);if(p&&d){var c=e(p===!0?i.children:p.children,!0,n);n.flatten?a.push.apply(a,c):a.push({scope:i,candidates:c})}else s.unshift.apply(s,i.children)}}return a},wr=function(t){return t.tagName==="INPUT"},br=function(t){return wr(t)&&t.type==="hidden"},Or=function(t){var r=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(n){return n.tagName==="SUMMARY"});return r},ut=function(t){var r=t.getBoundingClientRect(),n=r.width,a=r.height;return n===0&&a===0},xr=function(t,r){var n=r.displayCheck,a=r.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var s=ce.call(t,"details>summary:first-of-type"),i=s?t.parentElement:t;if(ce.call(i,"details:not([open]) *"))return!0;var o=lt(t).host,l=(o==null?void 0:o.ownerDocument.contains(o))||t.ownerDocument.contains(t);if(!n||n==="full"){if(typeof a=="function"){for(var f=t;t;){var u=t.parentElement,p=lt(t);if(u&&!u.shadowRoot&&a(u)===!0)return ut(t);t.assignedSlot?t=t.assignedSlot:!u&&p!==t.ownerDocument?t=p.host:t=u}t=f}if(l)return!t.getClientRects().length}else if(n==="non-zero-area")return ut(t);return!1},Dr=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var r=t.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var n=0;n<r.children.length;n++){var a=r.children.item(n);if(a.tagName==="LEGEND")return ce.call(r,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}r=r.parentElement}return!1},ft=function(t,r){return!(r.disabled||br(r)||xr(r,t)||Or(r)||Dr(r))},Cr=function(t,r){r=r||{};var n;return r.getShadowRoot?n=yr([t],r.includeContainer,{filter:ft.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):n=gr(t,r.includeContainer,ft.bind(null,r)),n};function Er(e){function t(a){const s=Cr(e.value),i=s.indexOf(document.activeElement),o=s.at((i+a)%s.length);o!==void 0&&o.focus()}function r(){t(1)}function n(){t(-1)}return{next:r,prev:n}}var R="top",T="bottom",_="right",$="left",Ue="auto",ve=[R,T,_,$],re="start",pe="end",kr="clippingParents",St="viewport",le="popper",Ar="reference",ct=ve.reduce(function(e,t){return e.concat([t+"-"+re,t+"-"+pe])},[]),Rt=[].concat(ve,[Ue]).reduce(function(e,t){return e.concat([t,t+"-"+re,t+"-"+pe])},[]),Sr="beforeRead",Rr="read",$r="afterRead",Br="beforeMain",Pr="main",Tr="afterMain",_r="beforeWrite",jr="write",Mr="afterWrite",Nr=[Sr,Rr,$r,Br,Pr,Tr,_r,jr,Mr];function L(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=j(e).Element;return e instanceof t||e instanceof Element}function P(e){var t=j(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function qe(e){if(typeof ShadowRoot>"u")return!1;var t=j(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ir(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},s=t.elements[r];!P(s)||!L(s)||(Object.assign(s.style,n),Object.keys(a).forEach(function(i){var o=a[i];o===!1?s.removeAttribute(i):s.setAttribute(i,o===!0?"":o)}))})}function Lr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],s=t.attributes[n]||{},i=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),o=i.reduce(function(l,f){return l[f]="",l},{});!P(a)||!L(a)||(Object.assign(a.style,o),Object.keys(s).forEach(function(l){a.removeAttribute(l)}))})}}const Wr={name:"applyStyles",enabled:!0,phase:"write",fn:Ir,effect:Lr,requires:["computeStyles"]};function I(e){return e.split("-")[0]}var G=Math.max,Ee=Math.min,ne=Math.round;function Me(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function $t(){return!/^((?!chrome|android).)*safari/i.test(Me())}function ae(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,s=1;t&&P(e)&&(a=e.offsetWidth>0&&ne(n.width)/e.offsetWidth||1,s=e.offsetHeight>0&&ne(n.height)/e.offsetHeight||1);var i=K(e)?j(e):window,o=i.visualViewport,l=!$t()&&r,f=(n.left+(l&&o?o.offsetLeft:0))/a,u=(n.top+(l&&o?o.offsetTop:0))/s,p=n.width/a,d=n.height/s;return{width:p,height:d,top:u,right:f+p,bottom:u+d,left:f,x:f,y:u}}function Xe(e){var t=ae(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Bt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&qe(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(e){return j(e).getComputedStyle(e)}function Vr(e){return["table","td","th"].indexOf(L(e))>=0}function F(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function ke(e){return L(e)==="html"?e:e.assignedSlot||e.parentNode||(qe(e)?e.host:null)||F(e)}function pt(e){return!P(e)||V(e).position==="fixed"?null:e.offsetParent}function Hr(e){var t=/firefox/i.test(Me()),r=/Trident/i.test(Me());if(r&&P(e)){var n=V(e);if(n.position==="fixed")return null}var a=ke(e);for(qe(a)&&(a=a.host);P(a)&&["html","body"].indexOf(L(a))<0;){var s=V(a);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return a;a=a.parentNode}return null}function me(e){for(var t=j(e),r=pt(e);r&&Vr(r)&&V(r).position==="static";)r=pt(r);return r&&(L(r)==="html"||L(r)==="body"&&V(r).position==="static")?t:r||Hr(e)||t}function Ye(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ue(e,t,r){return G(e,Ee(t,r))}function Fr(e,t,r){var n=ue(e,t,r);return n>r?r:n}function Pt(){return{top:0,right:0,bottom:0,left:0}}function Tt(e){return Object.assign({},Pt(),e)}function _t(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var zr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Tt(typeof t!="number"?t:_t(t,ve))};function Ur(e){var t,r=e.state,n=e.name,a=e.options,s=r.elements.arrow,i=r.modifiersData.popperOffsets,o=I(r.placement),l=Ye(o),f=[$,_].indexOf(o)>=0,u=f?"height":"width";if(!(!s||!i)){var p=zr(a.padding,r),d=Xe(s),c=l==="y"?R:$,h=l==="y"?T:_,m=r.rects.reference[u]+r.rects.reference[l]-i[l]-r.rects.popper[u],g=i[l]-r.rects.reference[l],b=me(s),x=b?l==="y"?b.clientHeight||0:b.clientWidth||0:0,D=m/2-g/2,v=p[c],y=x-d[u]-p[h],w=x/2-d[u]/2+D,O=ue(v,w,y),k=l;r.modifiersData[n]=(t={},t[k]=O,t.centerOffset=O-w,t)}}function qr(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||!Bt(t.elements.popper,a)||(t.elements.arrow=a))}const Xr={name:"arrow",enabled:!0,phase:"main",fn:Ur,effect:qr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var Yr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Gr(e){var t=e.x,r=e.y,n=window,a=n.devicePixelRatio||1;return{x:ne(t*a)/a||0,y:ne(r*a)/a||0}}function dt(e){var t,r=e.popper,n=e.popperRect,a=e.placement,s=e.variation,i=e.offsets,o=e.position,l=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,p=e.isFixed,d=i.x,c=d===void 0?0:d,h=i.y,m=h===void 0?0:h,g=typeof u=="function"?u({x:c,y:m}):{x:c,y:m};c=g.x,m=g.y;var b=i.hasOwnProperty("x"),x=i.hasOwnProperty("y"),D=$,v=R,y=window;if(f){var w=me(r),O="clientHeight",k="clientWidth";if(w===j(r)&&(w=F(r),V(w).position!=="static"&&o==="absolute"&&(O="scrollHeight",k="scrollWidth")),w=w,a===R||(a===$||a===_)&&s===pe){v=T;var E=p&&w===y&&y.visualViewport?y.visualViewport.height:w[O];m-=E-n.height,m*=l?1:-1}if(a===$||(a===R||a===T)&&s===pe){D=_;var C=p&&w===y&&y.visualViewport?y.visualViewport.width:w[k];c-=C-n.width,c*=l?1:-1}}var A=Object.assign({position:o},f&&Yr),M=u===!0?Gr({x:c,y:m}):{x:c,y:m};if(c=M.x,m=M.y,l){var S;return Object.assign({},A,(S={},S[v]=x?"0":"",S[D]=b?"0":"",S.transform=(y.devicePixelRatio||1)<=1?"translate("+c+"px, "+m+"px)":"translate3d("+c+"px, "+m+"px, 0)",S))}return Object.assign({},A,(t={},t[v]=x?m+"px":"",t[D]=b?c+"px":"",t.transform="",t))}function Kr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,s=r.adaptive,i=s===void 0?!0:s,o=r.roundOffsets,l=o===void 0?!0:o,f={placement:I(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,dt(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,dt(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Zr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Kr,data:{}};var xe={passive:!0};function Jr(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,s=a===void 0?!0:a,i=n.resize,o=i===void 0?!0:i,l=j(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&f.forEach(function(u){u.addEventListener("scroll",r.update,xe)}),o&&l.addEventListener("resize",r.update,xe),function(){s&&f.forEach(function(u){u.removeEventListener("scroll",r.update,xe)}),o&&l.removeEventListener("resize",r.update,xe)}}const Qr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Jr,data:{}};var en={left:"right",right:"left",bottom:"top",top:"bottom"};function Ce(e){return e.replace(/left|right|bottom|top/g,function(t){return en[t]})}var tn={start:"end",end:"start"};function vt(e){return e.replace(/start|end/g,function(t){return tn[t]})}function Ge(e){var t=j(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ke(e){return ae(F(e)).left+Ge(e).scrollLeft}function rn(e,t){var r=j(e),n=F(e),a=r.visualViewport,s=n.clientWidth,i=n.clientHeight,o=0,l=0;if(a){s=a.width,i=a.height;var f=$t();(f||!f&&t==="fixed")&&(o=a.offsetLeft,l=a.offsetTop)}return{width:s,height:i,x:o+Ke(e),y:l}}function nn(e){var t,r=F(e),n=Ge(e),a=(t=e.ownerDocument)==null?void 0:t.body,s=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),o=-n.scrollLeft+Ke(e),l=-n.scrollTop;return V(a||r).direction==="rtl"&&(o+=G(r.clientWidth,a?a.clientWidth:0)-s),{width:s,height:i,x:o,y:l}}function Ze(e){var t=V(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function jt(e){return["html","body","#document"].indexOf(L(e))>=0?e.ownerDocument.body:P(e)&&Ze(e)?e:jt(ke(e))}function fe(e,t){var r;t===void 0&&(t=[]);var n=jt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),s=j(n),i=a?[s].concat(s.visualViewport||[],Ze(n)?n:[]):n,o=t.concat(i);return a?o:o.concat(fe(ke(i)))}function Ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function an(e,t){var r=ae(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function mt(e,t,r){return t===St?Ne(rn(e,r)):K(t)?an(t,r):Ne(nn(F(e)))}function on(e){var t=fe(ke(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,n=r&&P(e)?me(e):e;return K(n)?t.filter(function(a){return K(a)&&Bt(a,n)&&L(a)!=="body"}):[]}function sn(e,t,r,n){var a=t==="clippingParents"?on(e):[].concat(t),s=[].concat(a,[r]),i=s[0],o=s.reduce(function(l,f){var u=mt(e,f,n);return l.top=G(u.top,l.top),l.right=Ee(u.right,l.right),l.bottom=Ee(u.bottom,l.bottom),l.left=G(u.left,l.left),l},mt(e,i,n));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Mt(e){var t=e.reference,r=e.element,n=e.placement,a=n?I(n):null,s=n?oe(n):null,i=t.x+t.width/2-r.width/2,o=t.y+t.height/2-r.height/2,l;switch(a){case R:l={x:i,y:t.y-r.height};break;case T:l={x:i,y:t.y+t.height};break;case _:l={x:t.x+t.width,y:o};break;case $:l={x:t.x-r.width,y:o};break;default:l={x:t.x,y:t.y}}var f=a?Ye(a):null;if(f!=null){var u=f==="y"?"height":"width";switch(s){case re:l[f]=l[f]-(t[u]/2-r[u]/2);break;case pe:l[f]=l[f]+(t[u]/2-r[u]/2);break}}return l}function de(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,s=r.strategy,i=s===void 0?e.strategy:s,o=r.boundary,l=o===void 0?kr:o,f=r.rootBoundary,u=f===void 0?St:f,p=r.elementContext,d=p===void 0?le:p,c=r.altBoundary,h=c===void 0?!1:c,m=r.padding,g=m===void 0?0:m,b=Tt(typeof g!="number"?g:_t(g,ve)),x=d===le?Ar:le,D=e.rects.popper,v=e.elements[h?x:d],y=sn(K(v)?v:v.contextElement||F(e.elements.popper),l,u,i),w=ae(e.elements.reference),O=Mt({reference:w,element:D,strategy:"absolute",placement:a}),k=Ne(Object.assign({},D,O)),E=d===le?k:w,C={top:y.top-E.top+b.top,bottom:E.bottom-y.bottom+b.bottom,left:y.left-E.left+b.left,right:E.right-y.right+b.right},A=e.modifiersData.offset;if(d===le&&A){var M=A[a];Object.keys(C).forEach(function(S){var z=[_,T].indexOf(S)>=0?1:-1,U=[R,T].indexOf(S)>=0?"y":"x";C[S]+=M[U]*z})}return C}function ln(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,s=r.rootBoundary,i=r.padding,o=r.flipVariations,l=r.allowedAutoPlacements,f=l===void 0?Rt:l,u=oe(n),p=u?o?ct:ct.filter(function(h){return oe(h)===u}):ve,d=p.filter(function(h){return f.indexOf(h)>=0});d.length===0&&(d=p);var c=d.reduce(function(h,m){return h[m]=de(e,{placement:m,boundary:a,rootBoundary:s,padding:i})[I(m)],h},{});return Object.keys(c).sort(function(h,m){return c[h]-c[m]})}function un(e){if(I(e)===Ue)return[];var t=Ce(e);return[vt(e),t,vt(t)]}function fn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,s=a===void 0?!0:a,i=r.altAxis,o=i===void 0?!0:i,l=r.fallbackPlacements,f=r.padding,u=r.boundary,p=r.rootBoundary,d=r.altBoundary,c=r.flipVariations,h=c===void 0?!0:c,m=r.allowedAutoPlacements,g=t.options.placement,b=I(g),x=b===g,D=l||(x||!h?[Ce(g)]:un(g)),v=[g].concat(D).reduce(function(Z,H){return Z.concat(I(H)===Ue?ln(t,{placement:H,boundary:u,rootBoundary:p,padding:f,flipVariations:h,allowedAutoPlacements:m}):H)},[]),y=t.rects.reference,w=t.rects.popper,O=new Map,k=!0,E=v[0],C=0;C<v.length;C++){var A=v[C],M=I(A),S=oe(A)===re,z=[R,T].indexOf(M)>=0,U=z?"width":"height",B=de(t,{placement:A,boundary:u,rootBoundary:p,altBoundary:d,padding:f}),N=z?S?_:$:S?T:R;y[U]>w[U]&&(N=Ce(N));var he=Ce(N),q=[];if(s&&q.push(B[M]<=0),o&&q.push(B[N]<=0,B[he]<=0),q.every(function(Z){return Z})){E=A,k=!1;break}O.set(A,q)}if(k)for(var ge=h?3:1,Ae=function(H){var se=v.find(function(we){var X=O.get(we);if(X)return X.slice(0,H).every(function(Se){return Se})});if(se)return E=se,"break"},ie=ge;ie>0;ie--){var ye=Ae(ie);if(ye==="break")break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}}const cn={name:"flip",enabled:!0,phase:"main",fn,requiresIfExists:["offset"],data:{_skip:!1}};function ht(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function gt(e){return[R,_,T,$].some(function(t){return e[t]>=0})}function pn(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,s=t.modifiersData.preventOverflow,i=de(t,{elementContext:"reference"}),o=de(t,{altBoundary:!0}),l=ht(i,n),f=ht(o,a,s),u=gt(l),p=gt(f);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}const dn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pn};function vn(e,t,r){var n=I(e),a=[$,R].indexOf(n)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,i=s[0],o=s[1];return i=i||0,o=(o||0)*a,[$,_].indexOf(n)>=0?{x:o,y:i}:{x:i,y:o}}function mn(e){var t=e.state,r=e.options,n=e.name,a=r.offset,s=a===void 0?[0,0]:a,i=Rt.reduce(function(u,p){return u[p]=vn(p,t.rects,s),u},{}),o=i[t.placement],l=o.x,f=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=i}const hn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:mn};function gn(e){var t=e.state,r=e.name;t.modifiersData[r]=Mt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const yn={name:"popperOffsets",enabled:!0,phase:"read",fn:gn,data:{}};function wn(e){return e==="x"?"y":"x"}function bn(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,s=a===void 0?!0:a,i=r.altAxis,o=i===void 0?!1:i,l=r.boundary,f=r.rootBoundary,u=r.altBoundary,p=r.padding,d=r.tether,c=d===void 0?!0:d,h=r.tetherOffset,m=h===void 0?0:h,g=de(t,{boundary:l,rootBoundary:f,padding:p,altBoundary:u}),b=I(t.placement),x=oe(t.placement),D=!x,v=Ye(b),y=wn(v),w=t.modifiersData.popperOffsets,O=t.rects.reference,k=t.rects.popper,E=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,C=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(!!w){if(s){var S,z=v==="y"?R:$,U=v==="y"?T:_,B=v==="y"?"height":"width",N=w[v],he=N+g[z],q=N-g[U],ge=c?-k[B]/2:0,Ae=x===re?O[B]:k[B],ie=x===re?-k[B]:-O[B],ye=t.elements.arrow,Z=c&&ye?Xe(ye):{width:0,height:0},H=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Pt(),se=H[z],we=H[U],X=ue(0,O[B],Z[B]),Se=D?O[B]/2-ge-X-se-C.mainAxis:Ae-X-se-C.mainAxis,It=D?-O[B]/2+ge+X+we+C.mainAxis:ie+X+we+C.mainAxis,Re=t.elements.arrow&&me(t.elements.arrow),Lt=Re?v==="y"?Re.clientTop||0:Re.clientLeft||0:0,Je=(S=A==null?void 0:A[v])!=null?S:0,Wt=N+Se-Je-Lt,Vt=N+It-Je,Qe=ue(c?Ee(he,Wt):he,N,c?G(q,Vt):q);w[v]=Qe,M[v]=Qe-N}if(o){var et,Ht=v==="x"?R:$,Ft=v==="x"?T:_,Y=w[y],be=y==="y"?"height":"width",tt=Y+g[Ht],rt=Y-g[Ft],$e=[R,$].indexOf(b)!==-1,nt=(et=A==null?void 0:A[y])!=null?et:0,at=$e?tt:Y-O[be]-k[be]-nt+C.altAxis,ot=$e?Y+O[be]+k[be]-nt-C.altAxis:rt,it=c&&$e?Fr(at,Y,ot):ue(c?at:tt,Y,c?ot:rt);w[y]=it,M[y]=it-Y}t.modifiersData[n]=M}}const On={name:"preventOverflow",enabled:!0,phase:"main",fn:bn,requiresIfExists:["offset"]};function xn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Dn(e){return e===j(e)||!P(e)?Ge(e):xn(e)}function Cn(e){var t=e.getBoundingClientRect(),r=ne(t.width)/e.offsetWidth||1,n=ne(t.height)/e.offsetHeight||1;return r!==1||n!==1}function En(e,t,r){r===void 0&&(r=!1);var n=P(t),a=P(t)&&Cn(t),s=F(t),i=ae(e,a,r),o={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!r)&&((L(t)!=="body"||Ze(s))&&(o=Dn(t)),P(t)?(l=ae(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=Ke(s))),{x:i.left+o.scrollLeft-l.x,y:i.top+o.scrollTop-l.y,width:i.width,height:i.height}}function kn(e){var t=new Map,r=new Set,n=[];e.forEach(function(s){t.set(s.name,s)});function a(s){r.add(s.name);var i=[].concat(s.requires||[],s.requiresIfExists||[]);i.forEach(function(o){if(!r.has(o)){var l=t.get(o);l&&a(l)}}),n.push(s)}return e.forEach(function(s){r.has(s.name)||a(s)}),n}function An(e){var t=kn(e);return Nr.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function Sn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Rn(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var yt={placement:"bottom",modifiers:[],strategy:"absolute"};function wt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function $n(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,s=a===void 0?yt:a;return function(o,l,f){f===void 0&&(f=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},yt,s),modifiersData:{},elements:{reference:o,popper:l},attributes:{},styles:{}},p=[],d=!1,c={state:u,setOptions:function(b){var x=typeof b=="function"?b(u.options):b;m(),u.options=Object.assign({},s,u.options,x),u.scrollParents={reference:K(o)?fe(o):o.contextElement?fe(o.contextElement):[],popper:fe(l)};var D=An(Rn([].concat(n,u.options.modifiers)));return u.orderedModifiers=D.filter(function(v){return v.enabled}),h(),c.update()},forceUpdate:function(){if(!d){var b=u.elements,x=b.reference,D=b.popper;if(!!wt(x,D)){u.rects={reference:En(x,me(D),u.options.strategy==="fixed"),popper:Xe(D)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(C){return u.modifiersData[C.name]=Object.assign({},C.data)});for(var v=0;v<u.orderedModifiers.length;v++){if(u.reset===!0){u.reset=!1,v=-1;continue}var y=u.orderedModifiers[v],w=y.fn,O=y.options,k=O===void 0?{}:O,E=y.name;typeof w=="function"&&(u=w({state:u,options:k,name:E,instance:c})||u)}}}},update:Sn(function(){return new Promise(function(g){c.forceUpdate(),g(u)})}),destroy:function(){m(),d=!0}};if(!wt(o,l))return c;c.setOptions(f).then(function(g){!d&&f.onFirstUpdate&&f.onFirstUpdate(g)});function h(){u.orderedModifiers.forEach(function(g){var b=g.name,x=g.options,D=x===void 0?{}:x,v=g.effect;if(typeof v=="function"){var y=v({state:u,name:b,instance:c,options:D}),w=function(){};p.push(y||w)}})}function m(){p.forEach(function(g){return g()}),p=[]}return c}}var Bn=[Qr,yn,Zr,Wr,hn,cn,On,Xr,dn],Pn=$n({defaultModifiers:Bn});function Tn(e,t,r){const n=Ot();return Yt(()=>{n.value=Pn(e.value,t.value,{placement:r.value,modifiers:[{name:"offset",options:{offset:[0,6]}},{name:"preventOverflow"}]})}),Fe(r,async a=>{n.value&&await n.value.setOptions({placement:a})}),Gt(()=>{n.value!==void 0&&n.value.destroy()}),n}const Nt=Symbol("DROPDOWN_CONTEXT"),_n=Ie({components:{Button:Ut,DropdownGroup:mr,IconArrow:tr},props:{modelValue:{type:Boolean,default:!1},text:{type:String,default:""},placement:{type:String,default:"bottom-start"},variant:{type:String,default:"solid"},color:{type:String,default:"primary"},size:{type:String,default:"md"},icon:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},noCaret:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["show","hide","update:modelValue"],setup(e,{emit:t}){const r=Be("dropdown"),n=Be("menu"),a=Be("wizard"),s=Kt(e,"placement"),i=Tn(r,n,s),o=er(e),{next:l,prev:f}=Er(n);function u(){e.disabled||(o.value?d():p())}function p(){e.disabled||(o.value=!0,t("show"))}function d(){e.disabled||(o.value=!1,t("hide"))}return zt(n,()=>{o.value&&setTimeout(()=>{d()})},{ignore:[r]}),Oe("Escape",c=>{const h=c.target;o.value&&(d(),typeof h.blur=="function"&&h.blur())}),Oe(["ArrowUp"],c=>{c.preventDefault(),o.value&&f()}),Oe(["ArrowDown"],c=>{c.preventDefault(),o.value&&l()}),Oe(["Tab"],c=>{c.preventDefault(),o.value&&(c.shiftKey?f():l())}),Fe(o,c=>{c&&i.value?i.value.update():a.value&&a.value.reset()},{immediate:!0}),xt(Nt,{isOpen:o,toggle:u,open:p,close:d}),{isOpen:o,toggle:u,open:p,close:d}}});const jn={ref:"menu","data-testid":"dropdown-menu",class:"dropdown__menu"};function Mn(e,t,r,n,a,s){const i=ee("IconArrow"),o=ee("Button"),l=ee("DropdownGroup");return W(),We("div",{ref:"dropdown",class:Qt(["dropdown",{"dropdown--open":e.isOpen}]),"data-testid":"dropdown"},[Q(e.$slots,"activator",{toggle:e.toggle,open:e.open,close:e.close,isOpen:e.isOpen},()=>[De(o,{"data-testid":"dropdown-activator",class:"dropdown__activator",variant:e.variant,color:e.color,size:e.size,icon:e.icon,pill:e.pill,disabled:e.disabled,onClick:Te(e.toggle,["prevent"])},{default:te(()=>[Q(e.$slots,"button-content",{},()=>[Ve(He(e.text),1)]),e.noCaret?_e("",!0):(W(),J(i,{key:0,class:"dropdown__caret","data-testid":"dropdown-caret"}))]),_:3},8,["variant","color","size","icon","pill","disabled","onClick"])]),De(Dt,{name:"fade"},{default:te(()=>[Zt(ze("div",jn,[De(l,{ref:"wizard",class:"dropdown__menuContainer"},{default:te(()=>[Q(e.$slots,"default")]),_:3},512)],512),[[Jt,e.isOpen]])]),_:3})],2)}const Fn=Le(_n,[["render",Mn]]);export{Fn as D,ar as a,mr as p};
