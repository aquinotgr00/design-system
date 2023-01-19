import{a as A,c as oe,b as ie,o as se}from"./floating-ui.dom.esm.cdffabbd.js";import{t as J,j as x}from"./index.fd5eec28.js";import{z as T,i as z,x as S,L as K,_ as q,u as m,f as U,D as Z,k as G,o as R,c as Q,m as b,y as N,g as P,C as L,j as le,A as ue,r as re,l as de,q as ce,t as fe,d as ve,E as he,a2 as E,B as O}from"../app.ab91a073.js";import{D as ge,P as ee,u as me,a as pe,f as X,b as ye}from"./Calibrator-v3.2ee52f44.js";import{m as be}from"./memoize.7065154a.js";import{s as y,h as _e}from"./index.72398e94.js";function we(t,e){const n=T(!0),a=T(),{hoverzone:s}=S(ge);async function o(){if(i(),t.value){const{default:l}=await q(()=>import("./interact.min.d3eabcee.js").then(v=>v.i),["assets/chunks/interact.min.d3eabcee.js","assets/app.ab91a073.js"]);a.value=l(t.value).draggable({inertia:!0,enabled:n.value,autoScroll:{container:t.value.parentElement,margin:100,speed:300},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[l.modifiers.restrict({restriction:"parent",elementRect:{top:0,left:0,bottom:1,right:1}}),l.modifiers.restrictRect({endOnly:!0,restriction:()=>s.value?l.getElementRect(s.value):{top:0,left:0,bottom:Number.POSITIVE_INFINITY,right:Number.POSITIVE_INFINITY}})]})}}function i(){a.value&&a.value.unset()}return z(t,async()=>{await o()}),z(n,l=>{a.value&&a.value.draggable(l)}),K(()=>{i()}),n}function xe(t,e={}){const n=T(!0),a=T();async function s(){if(o(),t.value){const{default:i}=await q(()=>import("./interact.min.d3eabcee.js").then(l=>l.i),["assets/chunks/interact.min.d3eabcee.js","assets/app.ab91a073.js"]);a.value=i(t.value).resizable({enabled:n.value,edges:{left:!1,top:!1,bottom:e.handleSelector??".resize-handle",right:e.handleSelector??".resize-handle"},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[i.modifiers.aspectRatio({ratio:m(e.ratio)??"preserve",modifiers:[i.modifiers.restrictSize({min:(l,v,d)=>{const c=m(e.scale)??1;return{...d.rect,width:m(e.minWidth)*c,height:m(e.minHeight)*c}},max:(l,v,d)=>{const c=m(e.scale)??1;return{...d.rect,width:m(e.maxWidth)*c,height:m(e.maxHeight)*c}}}),i.modifiers.restrictSize({max:(l,v,d)=>{const c=m(e.reference);if(c){const r=i.getElementRect(c);if(r){const f=r.right-d.rect.left,g=r.bottom-d.rect.top;return{...r,width:f,height:g}}}return{...d.rect,width:Number.POSITIVE_INFINITY,height:Number.POSITIVE_INFINITY}}})]})]})}}function o(){a.value&&a.value.unset()}return z(t,async()=>{await s()}),z(n,i=>{a.value&&a.value.draggable(i)},{immediate:!0}),K(()=>{o()}),n}function Ne(t,e=document.body){let n=t.parentElement;do{const{position:a}=window.getComputedStyle(n);if(a==="relative"||a==="absolute")return n;n=n.parentElement}while(n&&n!==e);return e}function $e(t){const{container:e,reference:n,x:a,y:s,scale:o}=t,i=n.getBoundingClientRect(),l=Ne(n,e),v=l.getBoundingClientRect(),d=i.top-v.top+l.scrollTop,c=i.left-v.left+l.scrollLeft;return{top:d+s*o,left:c+a*o}}function Ie(t){const{reference:e,object:n,scale:a}=t,s=n.getBoundingClientRect(),o=e.getBoundingClientRect();return{x:(s.left-o.left)/a,y:(s.top-o.top)/a,page:Number.parseInt(e.dataset.pageNumber)}}function Pe(t,e){return{x:(e.width-t.width)/2,y:(e.height-t.height)/2}}function Ee(t,e){return t.x+t.width>e.width||t.y+t.height>e.height}function Oe(t){const e=new Map,n=be(a=>Math.round(a/15)*15);for(const a of t){const s=n(a.x),o=n(a.y),i=e.get(s)??new Map;i.set(o,a),e.set(s,i)}return a=>{var i;const s=n(a.x),o=n(a.y);return((i=e.get(s))==null?void 0:i.get(o))!==void 0}}function Te(t){const e=t.checkOverlap??Oe(t.objects),n=Pe(t.size,t.offside),a={...t.size,...n};let s=!0,o=0,i=0;do s=!0,Ee(a,t.offside)&&(a.y=n.y+i,a.x=n.x,i+=15,s=!1),e(a,t.objects)&&(a.x+=15,a.y+=15,s=!1);while(!s&&++o<=500);return s||console.warn("Cannot find empty position, max iteration reach"),a}const ze=U({setup(){const{x:t,y:e,page:n,width:a,height:s}=S(ee),o=J("target");return Z(i=>{if(o.value){const l=A(o.value.parentElement,o.value,()=>{oe(o.value.parentElement,o.value,{strategy:"absolute",middleware:[ie(),se(12)]}).then(({x:v,y:d})=>{o.value&&(o.value.style.left=`${v||0}px`,o.value.style.top=`${d||0}px`)})});i(l)}},{flush:"post"}),{x:t,y:e,page:n,width:a,height:s}}});const Be={ref:"target","data-testid":"pdf-debugger",class:"pdf-object__debugger"},je={"data-testid":"debug-x"},Re={"data-testid":"debug-y"},Se={"data-testid":"debug-page"},Ce={"data-testid":"debug-width"},De={"data-testid":"debug-height"};function Me(t,e,n,a,s,o){return R(),Q("div",Be,[b("pre",je,"x: "+N(t.x),1),b("pre",Re,"y: "+N(t.y),1),b("pre",Se,"page: "+N(t.page),1),b("pre",Ce,"width: "+N(t.width),1),b("pre",De,"height: "+N(t.height),1)],512)}const Fe=G(ze,[["render",Me]]),Ve=U({components:{PdfObjectDebugger:Fe},props:{x:{type:Number,default:void 0},y:{type:Number,default:void 0},page:{type:Number,default:void 0},width:{type:Number,default:198},height:{type:Number,default:106},minWidth:{type:Number,default:void 0},minHeight:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},maxHeight:{type:Number,default:void 0},moveable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},debug:{type:Boolean,default:!1}},emits:["update:x","update:y","update:page","update:width","update:height"],setup(t){const e=J("object"),{root:n,scale:a,objects:s}=S(ye),o=x(t,"x"),i=x(t,"y"),l=x(t,"page"),v=x(t,"width"),d=x(t,"height"),{id:c,x:r,y:f,page:g,width:_,height:w,minHeight:C,minWidth:D,maxHeight:M,maxWidth:F,ratio:V}=me(t),B=P(!1),H=P(),W=P(),Y=P(),p=pe(g),te=we(e,{onstart(){const{left:u,top:h}=e.value.getBoundingClientRect();B.value=!0,H.value=r.value,W.value=f.value,Y.value=g.value,r.value=u,f.value=h},onmove(u){k(u.dx,u.dy)},onend(u){if(u.relatedTarget){const h=Ie({reference:u.relatedTarget,container:n.value,object:e.value,scale:a.value});r.value=h.x,f.value=h.y,g.value=h.page}else r.value=H.value,f.value=W.value,g.value=Y.value;B.value=!1}}),ae=xe(e,{minHeight:C,minWidth:D,maxHeight:M,maxWidth:F,scale:a,ratio:V,reference:p,onmove(u){u.rect&&a.value&&(_.value=u.rect.width/a.value,w.value=u.rect.height/a.value)}});Z(u=>{if(e.value)if(p.value&&n.value)if(e.value.style.display="block",e.value.style.width=`${_.value}px`,e.value.style.height=`${w.value}px`,B.value)e.value.style.position="fixed",e.value.style.transform=`translate(${r.value}px, ${f.value}px) scale(${a.value})`,e.value.style.zIndex="50";else{const h=A(p.value,e.value,()=>{const{left:j,top:$}=$e({reference:p.value,container:n.value,x:r.value,y:f.value,scale:a.value});e.value.style.position="absolute",e.value.style.transform=`translate(${j}px, ${$}px) scale(${a.value})`,e.value.style.zIndex="10"},{ancestorScroll:!1});u(h)}else e.value.style.display="none"});function k(u,h){t.moveable&&(r.value+=u,f.value+=h)}function ne(){const u=[...s.values()].filter(I=>I.id!==c&&Number.isFinite(I.x)&&Number.isFinite(I.y)&&I.page===g.value),h={width:_.value,height:w.value},j={width:p.value.clientWidth/a.value,height:p.value.clientHeight/a.value},$=Te({size:h,offside:j,objects:u});r.value=$.x,f.value=$.y}return y(r,o),y(f,i),y(g,l),y(_,v),y(w,d),y(te,L(t,"moveable"),{direction:"rtl",immediate:!0}),y(ae,L(t,"resizable"),{direction:"rtl",immediate:!0}),le(async()=>{await _e(p).toBeTruthy(),(!Number.isFinite(r.value)||!Number.isFinite(f.value))&&ne(),t.autofocus&&X(e.value)}),ue(ee,{id:c,x:r,y:f,page:g,width:_,height:w,minHeight:C,minWidth:D,maxHeight:M,maxWidth:F,ratio:V}),{move:k,focus:X}}});const He=["data-x","data-y","data-page","data-width","data-height"],We={class:"pdf-object__container"},Ye={class:"pdf-object__resize resize-handle"};function ke(t,e,n,a,s,o){const i=re("PdfObjectDebugger");return R(),Q("div",{ref:"object","data-testid":"pdf-object",class:"pdf-object",tabindex:"0","data-x":t.x,"data-y":t.y,"data-page":t.page,"data-width":t.width,"data-height":t.height,onKeydown:[e[0]||(e[0]=E(O(l=>t.move(0,-1),["stop","prevent"]),["up"])),e[1]||(e[1]=E(O(l=>t.move(0,1),["stop","prevent"]),["down"])),e[2]||(e[2]=E(O(l=>t.move(-1,0),["stop","prevent"]),["left"])),e[3]||(e[3]=E(O(l=>t.move(1,0),["stop","prevent"]),["right"]))]},[b("div",We,[de(t.$slots,"default"),t.debug?(R(),ce(i,{key:0})):fe("",!0)]),ve(b("div",Ye,null,512),[[he,t.resizable]])],40,He)}const Ue=G(Ve,[["render",ke]]);export{Ue as p};