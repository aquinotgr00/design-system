import{z as J,k as ie,v as oe,D as se}from"./floating-ui.dom.browser.min.62fdc80a.js";import{t as K,r as x,s as _,c as le}from"./theme.593b2b39.js";import{s as T,$ as C,w as B,b as A,Q as q,u as m,m as Q,l as Z,_ as G,x as j,p as U,F as w,z as N,r as E,t as L,o as re,a0 as ue,K as de,q as ce,H as fe,J as ve,a7 as he,a9 as ge,a2 as P,a5 as z}from"./framework.0401cdf8.js";import{D as pe,P as ee,a as me,u as ye,b as be,f as X}from"./Calibrator-v3.96474d52.js";import{m as _e}from"./memoize.8367968b.js";function we(t,e=document.body){let n=t.parentElement;do{const{position:a}=window.getComputedStyle(n);if(a==="relative"||a==="absolute")return n;n=n.parentElement}while(n&&n!==e);return e}function xe(t){const{container:e,reference:n,x:a,y:i,scale:o}=t,l=n.getBoundingClientRect(),s=we(n,e),v=s.getBoundingClientRect(),h=l.top-v.top+s.scrollTop,p=l.left-v.left+s.scrollLeft;return{top:h+i*o,left:p+a*o}}function Ne(t){const{reference:e,object:n,scale:a}=t,i=n.getBoundingClientRect(),o=e.getBoundingClientRect();return{x:(i.left-o.left)/a,y:(i.top-o.top)/a,page:Number.parseInt(e.dataset.pageNumber)}}function $e(t,e){const n=T(!0),a=T(),{hoverzone:i}=C(pe);async function o(){if(l(),t.value){const{default:s}=await q(()=>import("./interact.min.6dc930b6.js").then(v=>v.i),["assets/chunks/interact.min.6dc930b6.js","assets/chunks/commonjsHelpers.042e6b4d.js"]);a.value=s(t.value).draggable({inertia:!0,enabled:n.value,autoScroll:{container:t.value.parentElement,margin:100,speed:300},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[s.modifiers.restrict({restriction:"parent",elementRect:{top:0,left:0,bottom:1,right:1}}),s.modifiers.restrictRect({endOnly:!0,restriction:()=>i.value?s.getElementRect(i.value):{top:0,left:0,bottom:Number.POSITIVE_INFINITY,right:Number.POSITIVE_INFINITY}})]})}}function l(){a.value&&a.value.unset()}return B(t,async()=>{await o()}),B(n,s=>{a.value&&a.value.draggable(s)}),A(()=>{l()}),n}function Ie(t,e={}){const n=T(!0),a=T();async function i(){var l,s,v;if(o(),t.value){const{default:h}=await q(()=>import("./interact.min.6dc930b6.js").then(p=>p.i),["assets/chunks/interact.min.6dc930b6.js","assets/chunks/commonjsHelpers.042e6b4d.js"]);a.value=h(t.value).resizable({enabled:n.value,edges:{left:!1,top:!1,bottom:(l=e.handleSelector)!=null?l:".resize-handle",right:(s=e.handleSelector)!=null?s:".resize-handle"},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[h.modifiers.aspectRatio({ratio:(v=m(e.ratio))!=null?v:"preserve",modifiers:[h.modifiers.restrictSize({min:(p,f,r)=>{var c;const d=(c=m(e.scale))!=null?c:1;return{...r.rect,width:m(e.minWidth)*d,height:m(e.minHeight)*d}},max:(p,f,r)=>{var c;const d=(c=m(e.scale))!=null?c:1;return{...r.rect,width:m(e.maxWidth)*d,height:m(e.maxHeight)*d}}}),h.modifiers.restrictSize({max:(p,f,r)=>{const d=m(e.reference);if(d){const c=h.getElementRect(d);if(c){const y=c.right-r.rect.left,$=c.bottom-r.rect.top;return{...c,width:y,height:$}}}return{...r.rect,width:Number.POSITIVE_INFINITY,height:Number.POSITIVE_INFINITY}}})]})]})}}function o(){a.value&&a.value.unset()}return B(t,async()=>{await i()}),B(n,l=>{a.value&&a.value.draggable(l)},{immediate:!0}),A(()=>{o()}),n}function Oe(t,e){return{x:(e.width-t.width)/2,y:(e.height-t.height)/2}}function Ee(t,e){return t.x+t.width>e.width||t.y+t.height>e.height}function Pe(t){var a;const e=new Map,n=_e(i=>Math.round(i/15)*15);for(const i of t){const o=n(i.x),l=n(i.y),s=(a=e.get(o))!=null?a:new Map;s.set(l,i),e.set(o,s)}return i=>{var s;const o=n(i.x),l=n(i.y);return((s=e.get(o))==null?void 0:s.get(l))!==void 0}}function ze(t){var s;const e=(s=t.checkOverlap)!=null?s:Pe(t.objects),n=Oe(t.size,t.offside),a={...t.size,...n};let i=!0,o=0,l=0;do i=!0,Ee(a,t.offside)&&(a.y=n.y+l,a.x=n.x,l+=15,i=!1),e(a,t.objects)&&(a.x+=15,a.y+=15,i=!1);while(!i&&++o<=500);return i||console.warn("Cannot find empty position, max iteration reach"),a}const Te=Q({setup(){const{x:t,y:e,page:n,width:a,height:i}=C(ee),o=K("target");return Z(l=>{if(o.value){const s=J(o.value.parentElement,o.value,()=>{ie(o.value.parentElement,o.value,{strategy:"absolute",middleware:[oe(),se(12)]}).then(({x:v,y:h})=>{o.value&&(o.value.style.left=`${v||0}px`,o.value.style.top=`${h||0}px`)})});l(s)}},{flush:"post"}),{x:t,y:e,page:n,width:a,height:i}}});const Be={ref:"target","data-testid":"pdf-debugger",class:"pdf-object__debugger"},Re={"data-testid":"debug-x"},Se={"data-testid":"debug-y"},je={"data-testid":"debug-page"},Ce={"data-testid":"debug-width"},De={"data-testid":"debug-height"};function Fe(t,e,n,a,i,o){return j(),U("div",Be,[w("pre",Re,"x: "+N(t.x),1),w("pre",Se,"y: "+N(t.y),1),w("pre",je,"page: "+N(t.page),1),w("pre",Ce,"width: "+N(t.width),1),w("pre",De,"height: "+N(t.height),1)],512)}const Me=G(Te,[["render",Fe]]),He=Q({components:{PdfObjectDebugger:Me},props:{x:{type:Number,default:void 0},y:{type:Number,default:void 0},page:{type:Number,default:void 0},width:{type:Number,default:198},height:{type:Number,default:106},minWidth:{type:Number,default:void 0},minHeight:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},maxHeight:{type:Number,default:void 0},moveable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},debug:{type:Boolean,default:!1}},emits:["update:x","update:y","update:page","update:width","update:height"],setup(t){const e=K("object"),{root:n,scale:a,objects:i}=C(me),o=x(t,"x"),l=x(t,"y"),s=x(t,"page"),v=x(t,"width"),h=x(t,"height"),{id:p,x:f,y:r,page:d,width:c,height:y,minHeight:$,minWidth:D,maxHeight:F,maxWidth:M,ratio:H}=ye(t),R=E(!1),V=E(),W=E(),Y=E(),b=be(d),te=$e(e,{onstart(){const{left:u,top:g}=e.value.getBoundingClientRect();R.value=!0,V.value=f.value,W.value=r.value,Y.value=d.value,f.value=u,r.value=g},onmove(u){k(u.dx,u.dy)},onend(u){if(u.relatedTarget){const g=Ne({reference:u.relatedTarget,container:n.value,object:e.value,scale:a.value});f.value=g.x,r.value=g.y,d.value=g.page}else f.value=V.value,r.value=W.value,d.value=Y.value;R.value=!1}}),ae=Ie(e,{minHeight:$,minWidth:D,maxHeight:F,maxWidth:M,scale:a,ratio:H,reference:b,onmove(u){u.rect&&a.value&&(c.value=u.rect.width/a.value,y.value=u.rect.height/a.value)}});Z(u=>{if(e.value)if(b.value&&n.value)if(e.value.style.display="block",e.value.style.width=`${c.value}px`,e.value.style.height=`${y.value}px`,R.value)e.value.style.position="fixed",e.value.style.transform=`translate(${f.value}px, ${r.value}px) scale(${a.value})`,e.value.style.zIndex="50";else{const g=J(b.value,e.value,()=>{const{left:S,top:I}=xe({reference:b.value,container:n.value,x:f.value,y:r.value,scale:a.value});e.value.style.position="absolute",e.value.style.transform=`translate(${S}px, ${I}px) scale(${a.value})`,e.value.style.zIndex="10"},{ancestorScroll:!1});u(g)}else e.value.style.display="none"});function k(u,g){t.moveable&&(f.value+=u,r.value+=g)}function ne(){const u=[...i.values()].filter(O=>O.id!==p&&Number.isFinite(O.x)&&Number.isFinite(O.y)&&O.page===d.value),g={width:c.value,height:y.value},S={width:b.value.clientWidth/a.value,height:b.value.clientHeight/a.value},I=ze({size:g,offside:S,objects:u});f.value=I.x,r.value=I.y}return _(f,o),_(r,l),_(d,s),_(c,v),_(y,h),_(te,L(t,"moveable"),{direction:"rtl",immediate:!0}),_(ae,L(t,"resizable"),{direction:"rtl",immediate:!0}),re(async()=>{await le(b).toBeTruthy(),(!Number.isFinite(f.value)||!Number.isFinite(r.value))&&ne(),t.autofocus&&X(e.value)}),ue(ee,{id:p,x:f,y:r,page:d,width:c,height:y,minHeight:$,minWidth:D,maxHeight:F,maxWidth:M,ratio:H}),{move:k,focus:X}}});const Ve=["data-x","data-y","data-page","data-width","data-height"],We={class:"pdf-object__container"},Ye={class:"pdf-object__resize resize-handle"};function ke(t,e,n,a,i,o){const l=de("PdfObjectDebugger");return j(),U("div",{ref:"object","data-testid":"pdf-object",class:"pdf-object",tabindex:"0","data-x":t.x,"data-y":t.y,"data-page":t.page,"data-width":t.width,"data-height":t.height,onKeydown:[e[0]||(e[0]=P(z(s=>t.move(0,-1),["stop","prevent"]),["up"])),e[1]||(e[1]=P(z(s=>t.move(0,1),["stop","prevent"]),["down"])),e[2]||(e[2]=P(z(s=>t.move(-1,0),["stop","prevent"]),["left"])),e[3]||(e[3]=P(z(s=>t.move(1,0),["stop","prevent"]),["right"]))]},[w("div",We,[ce(t.$slots,"default"),t.debug?(j(),fe(l,{key:0})):ve("",!0)]),he(w("div",Ye,null,512),[[ge,t.resizable]])],40,Ve)}const qe=G(He,[["render",ke]]);export{Ne as g,qe as p};
