var ts=Object.defineProperty;var ns=(n,s,t)=>s in n?ts(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var y=(n,s,t)=>(ns(n,typeof s!="symbol"?s+"":s,t),t);import{p as A}from"./chunks/Button.568309a4.js";import{p as B}from"./chunks/Input.bb31ed70.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.6ec7901a.js";import{S as W,_ as J,a8 as as,u as f,a9 as H,j as k,r as es,o as os,c as ls,a as c,w as u,b as v,e as F,h as m,y as P}from"./app.149185f1.js";import{H as U}from"./chunks/hook.faed1da3.js";import{i as z,b as Q}from"./chunks/isObjectLike.46b91259.js";import{u as rs,r as ps}from"./chunks/use-singleton.e4a9048c.js";import{i as is}from"./chunks/isArray.513c67aa.js";import{l as cs}from"./chunks/index.5a999dbb.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.61c2a28a.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4cf0ed81.js";import"./chunks/index.5ad253f4.js";import"./chunks/utils-6ba05f5b.f4b31ac9.js";import"./chunks/index.2c4a6fac.js";import"./chunks/value.830bdabd.js";var ds="[object String]";function M(n){return typeof n=="string"||!is(n)&&z(n)&&Q(n)==ds}var ys="[object Number]";function us(n){return typeof n=="number"||z(n)&&Q(n)==ys}var _=(n=>(n[n.FORWARD=1]="FORWARD",n[n.BACKWARD=-1]="BACKWARD",n))(_||{});class L{constructor(s){y(this,"name");y(this,"direction");y(this,"parent");y(this,"options");y(this,"onNextHooks");y(this,"onPrevHooks");y(this,"runOnPrevHooks");y(this,"runOnNextHooks");this.direction=1,this.name=(s==null?void 0:s.name)??Symbol("TourID"),this.options=s,this.onPrevHooks=new U,this.onNextHooks=new U,typeof(s==null?void 0:s.onBeforePrev)=="function"&&this.onPrevHooks.add(s.onBeforePrev),typeof(s==null?void 0:s.onBeforeNext)=="function"&&this.onNextHooks.add(s.onBeforeNext),this.runOnPrevHooks=async(...t)=>await this.onPrevHooks.run(...t),this.runOnNextHooks=async(...t)=>await this.onNextHooks.run(...t)}setParent(s){return this.parent=s,this}getOptions(){var s;return W(this.options,(s=this.parent)==null?void 0:s.getOptions())}setDirection(s){return this.direction=s,this}attach(s){return s.onPrevHooks.add(this.runOnPrevHooks),s.onNextHooks.add(this.runOnNextHooks),this}detach(s){return s.onPrevHooks.remove(this.runOnPrevHooks),s.onNextHooks.remove(this.runOnNextHooks),this}}class Ds extends L{constructor(t){super(t);y(this,"index");y(this,"steps");y(this,"onFinishedHooks");y(this,"running");this.running=!1,this.index=-1,this.steps=[],this.onFinishedHooks=[],this.options=W(t,{highlight:!0,dismissable:!0,prevLabel:"Previous",nextLabel:"Next",dismissLabel:"Dismiss",finishLabel:"Finish",waitTimeout:3e3,skipOnError:!1}),typeof(t==null?void 0:t.onFinished)=="function"&&this.onFinishedHooks.unshift(t.onFinished)}getIndex(){var t;return this.getRealIndex()+(((t=this.parent)==null?void 0:t.getIndex())??0)}getTotal(){var t;return((t=this.parent)==null?void 0:t.getTotal())??this.getTotalChild()}getSteps(){return this.steps}isRunning(){return this.running}getTotalChild(){let t=0;for(const a of this.steps)t+="getTotalChild"in a?a.getTotalChild():1;return t}getRealIndex(){let t=this.index;for(let a=0;a<this.index;a++){const e=this.steps[a];"getTotalChild"in e&&(t+=e.getTotalChild()-1)}return t}getCurrentStep(){return this.steps.at(this.index)}async runOnFinishedHooks(){await Promise.allSettled(this.onFinishedHooks.map(t=>t()))}async run(){const t=this.getCurrentStep();try{await t.setDirection(this.direction).start()}catch(a){if(this.getOptions().skipOnError||t.getOptions().skipOnError)await(this.direction===_.BACKWARD?this.prev(!0):this.next(!0));else{if(this.parent)throw a;await this.stop()}}}async prev(t=!1){const a=this.index-1,e=this.steps.at(this.index),l=this.steps.at(a);a<0&&this.parent?await this.parent.prev():a>-1&&(t||await this.runOnPrevHooks(l,e))&&(await e.stop(),this.index=a,this.direction=_.BACKWARD,await this.run())}async next(t=!1){const a=this.index+1,e=this.steps.at(this.index),l=this.steps.at(a);(t||await this.runOnNextHooks(l,e))&&(a<this.steps.length?(await e.stop(),this.index=a,this.direction=_.FORWARD,await this.run()):await this.finish())}async finish(){await this.runOnFinishedHooks(),await(this.parent?this.parent.next():this.stop())}async start(){this.running=!0,this.index=this.direction===_.BACKWARD?this.steps.length-1:0,this.parent&&this.attach(this.parent),await this.run()}async stop(){await this.getCurrentStep().stop(),this.parent&&this.detach(this.parent),this.running=!1}findIndex(t){return t instanceof L?this.steps.indexOf(t):this.steps.findIndex(a=>a.name===t)}add(t){return this.steps.push(t.setParent(this)),this}remove(t){if(!t&&this.parent)this.parent.remove(this);else{const a=us(t)?t:this.findIndex(t);a>-1&&this.steps.splice(a,1)}}}class S extends L{constructor(){super(...arguments);y(this,"cleanFns",[])}async dispose(){return await Promise.allSettled(this.cleanFns.map(t=>t()))}onCleanup(t){this.cleanFns.push(t)}async start(){this.attach(this.parent),await this.run()}async stop(){await this.dispose(),this.detach(this.parent)}async next(){await this.parent.next()}async prev(){await this.parent.prev()}async ahead(){return await(this.direction===_.BACKWARD?this.prev():this.next())}}var Z="complete",$="canceled";function Fs(n){if("requestAnimationFrame"in window)return window.requestAnimationFrame(n);setTimeout(n,16)}function X(n,s,t){n.self===n?n.scrollTo(s,t):(n.scrollLeft=s,n.scrollTop=t)}function hs(n,s){var t=n.align,a=n.target,e=a.getBoundingClientRect(),l,o,r,i,d,g,C,b=t&&t.left!=null?t.left:.5,O=t&&t.top!=null?t.top:.5,x=t&&t.leftOffset!=null?t.leftOffset:0,I=t&&t.topOffset!=null?t.topOffset:0,h=b,p=O;if(n.isWindow(s))g=Math.min(e.width,s.innerWidth),C=Math.min(e.height,s.innerHeight),o=e.left+s.pageXOffset-s.innerWidth*h+g*h,r=e.top+s.pageYOffset-s.innerHeight*p+C*p,o-=x,r-=I,o=n.align.lockX?s.pageXOffset:o,r=n.align.lockY?s.pageYOffset:r,i=o-s.pageXOffset,d=r-s.pageYOffset;else{g=e.width,C=e.height,l=s.getBoundingClientRect();var E=e.left-(l.left-s.scrollLeft),D=e.top-(l.top-s.scrollTop);o=E+g*h-s.clientWidth*h,r=D+C*p-s.clientHeight*p,o-=x,r-=I,o=Math.max(Math.min(o,s.scrollWidth-s.clientWidth),0),r=Math.max(Math.min(r,s.scrollHeight-s.clientHeight),0),o=n.align.lockX?s.scrollLeft:o,r=n.align.lockY?s.scrollTop:r,i=o-s.scrollLeft,d=r-s.scrollTop}return{x:o,y:r,differenceX:i,differenceY:d}}function q(n){var s=n._scrollSettings;if(s){var t=s.maxSynchronousAlignments,a=hs(s,n),e=Date.now()-s.startTime,l=Math.min(1/s.time*e,1);if(s.endIterations>=t)return X(n,a.x,a.y),n._scrollSettings=null,s.end(Z);var o=1-s.ease(l);if(X(n,a.x-a.differenceX*o,a.y-a.differenceY*o),e>=s.time){s.endIterations++,s.scrollAncestor&&q(s.scrollAncestor),q(n);return}Fs(q.bind(null,n))}}function Cs(n){return n.self===n}function As(n,s,t,a,e){var l=!s._scrollSettings,o=s._scrollSettings,r=Date.now(),i,d={passive:!0};o&&o.end($);function g(b){s._scrollSettings=null,s.parentElement&&s.parentElement._scrollSettings&&s.parentElement._scrollSettings.end(b),t.debug&&console.log("Scrolling ended with type",b,"for",s),e(b),i&&(s.removeEventListener("touchstart",i,d),s.removeEventListener("wheel",i,d))}var C=t.maxSynchronousAlignments;return C==null&&(C=3),s._scrollSettings={startTime:r,endIterations:0,target:n,time:t.time,ease:t.ease,align:t.align,isWindow:t.isWindow||Cs,maxSynchronousAlignments:C,end:g,scrollAncestor:a},(!("cancellable"in t)||t.cancellable)&&(i=g.bind(null,$),s.addEventListener("touchstart",i,d),s.addEventListener("wheel",i,d)),l&&q(s),i}function Y(n){return"pageXOffset"in n||(n.scrollHeight!==n.clientHeight||n.scrollWidth!==n.clientWidth)&&getComputedStyle(n).overflow!=="hidden"}function gs(){return!0}function R(n){if(n.assignedSlot)return R(n.assignedSlot);if(n.parentElement)return n.parentElement.tagName.toLowerCase()==="body"?n.parentElement.ownerDocument.defaultView||n.parentElement.ownerDocument.ownerWindow:n.parentElement;if(n.getRootNode){var s=n.getRootNode();if(s.nodeType===11)return s.host}}var fs=function(n,s,t){if(!n)return;typeof s=="function"&&(t=s,s=null),s||(s={}),s.time=isNaN(s.time)?1e3:s.time,s.ease=s.ease||function(d){return 1-Math.pow(1-d,d/2)},s.align=s.align||{};var a=R(n),e=1;function l(d){e--,e||t&&t(d)}var o=s.validTarget||gs,r=s.isScrollable;s.debug&&(console.log("About to scroll to",n),a||console.error("Target did not have a parent, is it mounted in the DOM?"));for(var i=[];a;)if(s.debug&&console.log("Scrolling parent node",a),o(a,e)&&(r?r(a,Y):Y(a))&&(e++,i.push(a)),a=R(a),!a){l(Z);break}return i.reduce((d,g,C)=>As(n,g,s,i[C+1],l),null)};function ms(n){if(!(n instanceof Element))return!1;const s=getComputedStyle(n);if(s.display==="none"||s.visibility!=="visible"||Number.parseFloat(s.opacity)<.1)return!1;const t=n.getBoundingClientRect();if(n.offsetWidth+n.offsetHeight+t.height+t.width===0)return!1;const a=t.left+t.width/2,e=t.top+t.height/2,l=document.documentElement.clientWidth||window.innerWidth,o=document.documentElement.clientHeight||window.innerHeight;if(a<0||e<0||a>l||e>o)return!1;let r=document.elementFromPoint(a,e);do{if(r===n)return!0;r=r.parentNode}while(r);return!1}async function vs(n,s=330){return await new Promise(t=>{fs(n,{time:s},t)})}async function K(n){const s=document.querySelector(n);if(s&&(await vs(s),!ms(s)))throw new Error(`Target: "${n}" not visible`);return s}async function ss(n,s=3e4){return await new Promise((t,a)=>{let e;const l=new MutationObserver(([r])=>{r.type==="childList"&&K(n).then(i=>{i&&(o(),t(i))}).catch(a)}),o=()=>{e&&clearTimeout(e),l&&l.disconnect()};s>0&&(e=setTimeout(()=>{o(),a(new Error("Target: timeout"))},s)),l.observe(document.body,{childList:!0,subtree:!0}),K(n).then(r=>{r&&(o(),t(r))}).catch(a)})}class G extends S{async dismiss(){await this.parent.stop()}async run(){const s=this.getOptions(),{default:t}=await J(()=>import("./chunks/Tour.3aaf29be.js"),["assets/chunks/Tour.3aaf29be.js","assets/chunks/Subheading.9355f9b0.js","assets/app.149185f1.js","assets/chunks/Caption.d8d6f487.js","assets/chunks/Caption.vue_vue_type_style_index_0_lang.bb21a336.js","assets/chunks/Button.568309a4.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.61c2a28a.js","assets/chunks/index.5ca7853f.js","assets/chunks/browser.461e9130.js","assets/chunks/16.a64c59aa.js","assets/chunks/utils-6ba05f5b.f4b31ac9.js","assets/chunks/floating-ui.dom.esm.4e25a8ce.js","assets/chunks/index.319a77b9.js","assets/chunks/index.5a999dbb.js"]),a=await rs(t),e=await ss(s.target,s.waitTimeout);a.show(e,W({step:this.parent.getIndex()+1,totalStep:this.parent.getTotal(),onNext:this.next.bind(this),onPrev:this.prev.bind(this),onDismiss:this.dismiss.bind(this)},s)),this.onCleanup(async()=>{await ps(t)})}}let bs=(n,s)=>new Promise(t=>{setTimeout(t,n,s)});class xs extends S{async run(){const s=this.getOptions();await bs(s.duration),await this.ahead()}}class j extends S{async run(){const s=this.getOptions(),{default:t}=await J(()=>import("./chunks/index.d4865575.js"),["assets/chunks/index.d4865575.js","assets/app.149185f1.js"]),a=await ss(s.target,s.waitTimeout),e=t.setup({document}),l=s.action,o=s.params??[];await e[l].apply(void 0,[a,...o]),await this.ahead()}}class Ts extends S{constructor(){super(...arguments);y(this,"lastURL","")}async run(){const t=as(),a=this.getOptions(),e=this.lastURL,l=this.direction===_.FORWARD?a.url:a.backUrl??e;this.lastURL=t.getURL(),await t.toURL(l),await this.ahead()}}var V=(n=>(n[n.IF=1]="IF",n[n.ELSE_IF=2]="ELSE_IF",n[n.ELSE=3]="ELSE",n))(V||{});class N extends S{constructor(t){super(t);y(this,"routines");this.routines=[{type:1,condition:t.condition,tour:t.tour}]}canChain(){return this.routines.at(-1).type!==3}chain(t){return this.routines.push(t),this}getTotalChild(){return Math.max(...this.routines.map(t=>t.tour.getTotalChild()))}getRoutines(){return this.routines}async run(){let t=!1;for(const a of this.routines){const e=f(a.condition);try{t=typeof e=="function"?await e():e}catch{t=!1}if(t){const l=a.tour;await l.setParent(this.parent).setDirection(this.direction).start(),this.onCleanup(async()=>{await l.stop()});break}}t||await this.ahead()}}class w extends Ds{dialog(s,t="",a,e){return M(s)?this.add(new G({target:s,text:t,title:a,image:e})):this.add(new G(s))}delay(s){return this.add(new xs({duration:s}))}action(s,t,...a){return M(s)?this.add(new j({target:s,action:t,params:a})):this.add(new j(s))}click(s){return this.action(s,"click")}dblClick(s){return this.action(s,"dblClick")}tripleClick(s){return this.action(s,"tripleClick")}hover(s){return this.action(s,"hover")}unhover(s){return this.action(s,"unhover")}blur(s){return this.unhover(s)}type(s,t){return this.action(s,"type",t)}clear(s){return this.action(s,"clear")}visit(s,t){return this.add(new Ts({url:s,backUrl:t}))}runIf(s,t){const a=new w;return this.add(new N({condition:s,tour:t(a)??a}))}runElseIf(s,t){const a=this.steps.at(-1);if(!(a instanceof N)||!a.canChain())throw new Error(".runElseIf only can be use after .runIf or .runElseIf");const e=new w;return a.chain({type:V.ELSE_IF,condition:s,tour:t(e)??e}),this}runElse(s){const t=this.steps.at(-1);if(!(t instanceof N)||!t.canChain())throw new Error(".runElse only can be use after .runIf or .runElseIf");const a=new w;return t.chain({type:V.ELSE,condition:!0,tour:s(a)??a}),this}}function T(n){return new w(n)}const _s=v("",4),Es=m("div",{class:"w-full max-w-xs overflow-y-auto h-52"},[F(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo necessitatibus eius architecto, similique quibusdam sed consequuntur? Esse, praesentium quidem. Dolorem repellendus numquam laudantium nisi labore animi. Iusto maxime exercitationem voluptatem molestias dolorum? Beatae minima deleniti tenetur quo ullam numquam, ab officiis id odio optio ipsam sed, "),m("span",{id:"sample",class:"text-accent"},"sample text"),F(", repellendus, voluptat. ")],-1),ks=v("",2),ws=v("",5),Ss=v("",3),Is={class:"space-gap-2"},Ps=v("",3),qs={class:"space-x-2"},Os=v("",3),Hs=v("",3),Ns={class:"space-gap-3"},Ls=m("span",{"data-tour":"if-more-than-5"},"≥5",-1),Rs=m("span",{"data-tour":"if-more-than-3"},"≥3",-1),Vs=m("span",{"data-tour":"if-less-than-3"},"<3",-1),Ws=v("",38),et=JSON.parse('{"title":"Tour","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"Advance Usage","slug":"advance-usage","link":"#advance-usage","children":[]}]},{"level":2,"title":"Defining Tour Stories","slug":"defining-tour-stories","link":"#defining-tour-stories","children":[{"level":3,"title":"Show Dialog","slug":"show-dialog","link":"#show-dialog","children":[]},{"level":3,"title":"User Action","slug":"user-action","link":"#user-action","children":[]},{"level":3,"title":"Delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"Visiting Page","slug":"visiting-page","link":"#visiting-page","children":[]}]},{"level":2,"title":"Conditional Step","slug":"conditional-step","link":"#conditional-step","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"createTour","slug":"createtour","link":"#createtour","children":[]},{"level":3,"title":".dialog","slug":"dialog","link":"#dialog","children":[]},{"level":3,"title":".action","slug":"action","link":"#action","children":[]},{"level":3,"title":".delay","slug":"delay-1","link":"#delay-1","children":[]},{"level":3,"title":".visit","slug":"visit","link":"#visit","children":[]},{"level":3,"title":".runIf","slug":"runif","link":"#runif","children":[]},{"level":3,"title":".runElseIf","slug":"runelseif","link":"#runelseif","children":[]},{"level":3,"title":".runElse","slug":"runelse","link":"#runelse","children":[]},{"level":3,"title":".start","slug":"start","link":"#start","children":[]},{"level":3,"title":".stop","slug":"stop","link":"#stop","children":[]}]}],"relativePath":"components/tour/index.md"}'),Bs={name:"components/tour/index.md"},ot=Object.assign(Bs,{setup(n){const s=T().dialog({target:"#sample",title:"Step 1",text:"Hello World"}).dialog({target:".pager-link.prev",title:"Step 2",text:"Ini Prev button"}).dialog({target:".pager-link.next",title:"Step 3",text:"Ini Next button"}),t=T().visit(H("/docs/getting-started")).click('[data-tour="theme-dashboard"] > summary').dialog('[data-tour="theme-dashboard"]',"This is tutorial for install persona dashboard theme").click('[data-tour="theme-dashboard"] > summary').delay(100).click('[data-tour="theme-docs"] > summary').dialog('[data-tour="theme-docs"]',"This is tutorial for install persona docs theme").click('[data-tour="theme-docs"] > summary').delay(100).visit(H("/components/tour/")).delay(100).runIf(()=>window.matchMedia("(max-width: 700px)").matches,h=>h.dialog(".VPLocalNav > .menu","Click this to show sidebar")).dialog('[data-tour="start-advance"]',"Click this to restart the tutorial"),a=T().dialog({target:'[data-tour="sample-dialog"]',title:"This is title",text:"This is text",image:"https://picsum.photos/400/244"}),e=T().click('[data-tour="action-click"]').dblClick('[data-tour="action-dblClick"]').tripleClick('[data-tour="action-tripleClick"]').clear('[data-tour="action-type"]').type('[data-tour="action-type"]',"Hello World"),l=k(0),o=k(0),r=k(0),i=k(""),{counter:d,pause:g,resume:C}=cs(1e3,{controls:!0,immediate:!1}),b=T().click('[data-tour="delay-start"]').delay(5e3).click('[data-tour="delay-stop"]'),O=T().visit(H("/")).dialog('[data-tour="github"]',"Don't forget to hit the star on Github"),x=k(5),I=T().runIf(()=>x.value>=5,h=>h.dialog('[data-tour="if-more-than-5"]',"This only run if number >= 5")).runElseIf(()=>x.value>=3,h=>h.dialog('[data-tour="if-more-than-3"]',"This only run if number >= 3 and <= 5")).runElse(h=>h.dialog('[data-tour="if-less-than-3"]',"This only run if number < 3"));return(h,p)=>{const E=es("preview");return os(),ls("div",null,[_s,c(A,{class:"mt-3",onClick:p[0]||(p[0]=D=>f(s).start()),color:"primary"},{default:u(()=>[F(" Try It ")]),_:1}),c(E,{class:"flex-col space-y-2",label:"sample"},{default:u(()=>[Es]),_:1}),ks,c(A,{class:"mt-3",onClick:p[1]||(p[1]=D=>f(t).start()),"data-tour":"start-advance",color:"primary"},{default:u(()=>[F(" Try It ")]),_:1}),ws,c(A,{class:"mt-3",onClick:p[2]||(p[2]=D=>f(a).start()),"data-tour":"sample-dialog",color:"primary"},{default:u(()=>[F(" Try It ")]),_:1}),Ss,c(A,{class:"mt-3",onClick:p[3]||(p[3]=D=>f(e).start()),color:"primary"},{default:u(()=>[F(" Try It ")]),_:1}),c(E,{class:"flex-col space-y-2",label:"sample"},{default:u(()=>[m("div",Is,[c(A,{"data-tour":"action-click",onClick:p[4]||(p[4]=D=>l.value++)},{default:u(()=>[F(" Click: "+P(l.value),1)]),_:1}),c(A,{"data-tour":"action-dblClick",onClick:p[5]||(p[5]=D=>o.value++)},{default:u(()=>[F(" Click: "+P(o.value),1)]),_:1}),c(A,{"data-tour":"action-tripleClick",onClick:p[6]||(p[6]=D=>r.value++)},{default:u(()=>[F(" Click: "+P(r.value),1)]),_:1})]),c(B,{"data-tour":"action-type",modelValue:i.value,"onUpdate:modelValue":p[7]||(p[7]=D=>i.value=D)},null,8,["modelValue"])]),_:1}),Ps,c(A,{class:"mt-3",onClick:p[8]||(p[8]=D=>f(b).start()),color:"primary"},{default:u(()=>[F(" Try It ")]),_:1}),c(E,{class:"flex-col space-y-2",label:"sample"},{default:u(()=>[m("div",null,"Timer: "+P(f(d))+"s",1),m("div",qs,[c(A,{"data-tour":"delay-start",onClick:f(C)},{default:u(()=>[F(" Start ")]),_:1},8,["onClick"]),c(A,{"data-tour":"delay-stop",onClick:f(g)},{default:u(()=>[F(" Stop ")]),_:1},8,["onClick"])])]),_:1}),Os,c(A,{class:"mt-3",onClick:p[9]||(p[9]=D=>f(O).start()),color:"primary"},{default:u(()=>[F(" Try It ")]),_:1}),Hs,c(A,{class:"mt-3",onClick:p[10]||(p[10]=D=>f(I).start()),color:"primary"},{default:u(()=>[F(" Try It ")]),_:1}),c(E,{class:"flex-col space-y-2",label:"sample"},{default:u(()=>[m("div",Ns,[c(B,{modelValue:x.value,"onUpdate:modelValue":p[11]||(p[11]=D=>x.value=D)},null,8,["modelValue"]),Ls,Rs,Vs])]),_:1}),Ws])}}});export{et as __pageData,ot as default};
