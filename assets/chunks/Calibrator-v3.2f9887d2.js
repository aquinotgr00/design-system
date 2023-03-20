import{p as ee}from"./index.de075cbd.js";import{i as te,e as K,j as ie,t as R,h as Y}from"./index.406c033b.js";import{A as P,g as _,N as le,B as U,_ as G,i as S,u as D,z as X,a7 as de,h as C,E as ue,f as F,k as z,r as w,o as B,c as M,m as p,a as g,w as L,y as V,V as oe,d as j,D as ae,l as T,P as ce,j as fe,G as Z,T as pe,n as ve}from"../app.a078ce8a.js";import{I as me,a as ge}from"./16.f7700fbd.js";import{u as he}from"./utils-6ba05f5b.ef331327.js";import{I as _e}from"./16.a81a9b20.js";import{p as ye}from"./Button.cdb5df57.js";import{p as Pe}from"./Divider.27fe4ca0.js";import{p as we}from"./Select.c8e10cae.js";import{t as $e,m as be,l as Se,h as De,o as J,k as Ee,j as Ne,s as x}from"./index.5958e170.js";import{f as Oe}from"./focus.419a5f01.js";import{u as W}from"./index.162562bb.js";import{d as Ce}from"./debounce.425ad733.js";import{r as Ie}from"./isObjectLike.53b0037d.js";import{t as Te}from"./toInteger.cccd26ae.js";import{t as Le}from"./toNumber.09abc7f0.js";import{t as Q}from"./toString.9cda75b1.js";import{u as ke}from"./use-loading.3210fd76.js";var je=Ie.isFinite,Ve=Math.min;function Fe(e){var n=Math[e];return function(o,a){if(o=Le(o),a=a==null?0:Ve(Te(a),292),a&&je(o)){var t=(Q(o)+"e").split("e"),s=n(t[0]+"e"+(+t[1]+a));return t=(Q(s)+"e").split("e"),+(t[0]+"e"+(+t[1]-a))}return n(o)}}var ze=Fe("round");const Be=ze,Me=Symbol("DropzoneContext");function Re(e,n){const o=P(!0),a=P(),t=_(),s=_();async function r(){if(l(),e.value){const{default:f}=await G(()=>import("./interact.min.5470b8bc.js").then(i=>i.i),["assets/chunks/interact.min.5470b8bc.js","assets/app.a078ce8a.js"]);a.value=f(n.value,{context:e.value}).dropzone({accept:".pdf-object",overlap:.95,enabled:o.value,checker(i,d,v,c,y,$,E){var N;return v&&(((N=e.value)==null?void 0:N.contains(E))||E.classList.contains("pdf-object--external"))},ondragenter(i){s.value=i.target,i.target.classList.add("hover")},ondragleave(i){i.target.classList.remove("hover")},ondrop(i){s.value=i.target,t.value=i.target,i.target.classList.remove("hover")}})}}function l(){a.value&&a.value.unset()}return te(e,f=>{f.some(d=>d.type==="childList"&&d.target.matches(n.value))&&r()},{subtree:!0,childList:!0}),le(()=>{l()}),U(Me,{dropzone:t,hoverzone:s}),o}function We(e,n=document.body,o=!1){const a=P();function t(){var s,r;a.value=o?(s=D(n))==null?void 0:s.querySelectorAll(D(e)):(r=D(n))==null?void 0:r.querySelector(D(e))}return S(()=>D(e),()=>{t()}),te(n,s=>{s.some(r=>r.type==="childList")&&t()},{childList:!0,subtree:!0}),$e(()=>{t()}),a}const q=Symbol("PDFObjects"),qt=Symbol("PDFObjects");function Ae(e){var f,i,d,v;const n=C(()=>Be(e.width/e.height,2)),o=_((f=e.minWidth)!=null?f:e.width*.5),a=_((i=e.maxWidth)!=null?i:e.width*2),t=_((d=e.minHeight)!=null?d:e.height*.5),s=_((v=e.maxHeight)!=null?v:e.height*2),r=W(e.width,o,a),l=W(e.height,t,s);return S(()=>e.minWidth,c=>{Number.isFinite(c)&&(o.value=c)}),S(()=>e.minHeight,c=>{Number.isFinite(c)&&(t.value=c)}),S(()=>e.maxWidth,c=>{Number.isFinite(c)&&(a.value=c)}),S(()=>e.maxHeight,c=>{Number.isFinite(c)&&(s.value=c)}),{ratio:n,width:r,height:l,minWidth:o,maxWidth:a,minHeight:t,maxHeight:s}}function Kt(e){var $;const{objects:n,page:o}=X(q),a=_(($=e.page)!=null?$:o.value),t=_(e.x),s=_(e.y),r=Symbol("PDFObject"),{width:l,height:f,minWidth:i,maxWidth:d,minHeight:v,maxHeight:c,ratio:y}=Ae(e);return n.set(r,de({id:r,page:a,x:t,y:s,width:l,height:f})),be(()=>{Number.isFinite(a.value)||De(o).toBeTruthy().then(()=>{a.value=o.value})}),Se(()=>{n.delete(r)}),{id:r,x:t,y:s,page:a,width:l,height:f,minWidth:i,minHeight:v,maxWidth:d,maxHeight:c,ratio:y}}function Yt(e){const{root:n}=X(q),o=C(()=>`.page[data-page-number="${D(e)}"]`);return We(o,n)}const xt=Ce(Oe,100),ne=Symbol("PdfViewer");function se(){return X(ne,()=>{const e=_(1),n=_(1),o=_(0);return{page:e,scale:n,totalPage:o}},!0)}function He(e,n={}){const o=_(!1),a=C(()=>{var d;return(d=D(n.offsetTop))!=null?d:0}),t=C(()=>{var d;return(d=D(e))==null?void 0:d.parentElement}),{top:s,height:r}=K(t),{top:l,width:f,left:i}=K(e);return ue(d=>{o.value&&e.value&&(s.value-a.value>=0?(e.value.style.setProperty("height",`${window.innerHeight-l.value}px`),e.value.style.setProperty("width","100%")):(t.value.style.setProperty("min-height",`${r.value}px`),e.value.style.setProperty("position","fixed"),e.value.style.setProperty("top",`${a.value}px`),e.value.style.setProperty("left",`${i.value}px`),e.value.style.setProperty("width",`${f.value}px`),e.value.style.setProperty("height",`${window.innerHeight-a.value}px`)),d(()=>{t.value.style.removeProperty("min-height"),e.value.style.removeProperty("position"),e.value.style.removeProperty("top"),e.value.style.removeProperty("left"),e.value.style.removeProperty("width"),e.value.style.removeProperty("height")}))}),o}var Ze=he,re=Ze.createSVGComponent(re,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M8 5L13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z"}}]),Je=re;const Ge=Je,Ue=F({components:{IconZoomIn:me,IconZoomOut:ge,IconPrev:Ge,IconNext:_e,pButton:ye,pDivider:Pe,pSelect:we},setup(){const{page:e,scale:n,totalPage:o}=se(),a=C(()=>Array.from({length:o.value}).map((f,i)=>({text:`${i+1}`,value:i+1})));function t(){n.value=Math.round(n.value/.1)*.1+.1}function s(){n.value=Math.round(n.value/.1)*.1-.1}function r(){e.value++}function l(){e.value--}return{page:e,pages:a,scale:n,totalPage:o,zoomIn:t,zoomOut:s,next:r,prev:l}}});const Xe={"data-testid":"pdf-navigation",class:"pdf__navigation"},qe={class:"pdf__navigation-container"},Ke={class:"pdf__navigation-scale"},Ye={"data-testid":"pdf-total",class:"flex-shrink-0"};function xe(e,n,o,a,t,s){const r=w("IconZoomOut"),l=w("p-button"),f=w("IconZoomIn"),i=w("p-divider"),d=w("p-select"),v=w("IconPrev"),c=w("IconNext");return B(),M("div",Xe,[p("div",qe,[g(l,{"data-testid":"pdf-zoom-out",variant:"ghost",size:"xs",icon:"",onClick:e.zoomOut},{default:L(()=>[g(r)]),_:1},8,["onClick"]),p("span",Ke,V((e.scale*100).toFixed(0))+"% ",1),g(l,{"data-testid":"pdf-zoom-in",variant:"ghost",size:"xs",icon:"",onClick:e.zoomIn},{default:L(()=>[g(f)]),_:1},8,["onClick"]),g(i,{vertical:""}),g(d,{modelValue:e.page,"onUpdate:modelValue":n[0]||(n[0]=y=>e.page=y),options:e.pages,size:"xs"},null,8,["modelValue","options"]),p("span",Ye,"of "+V(e.totalPage),1),g(l,{"data-testid":"pdf-prev",variant:"ghost",size:"xs",icon:"",onClick:e.prev},{default:L(()=>[g(v)]),_:1},8,["onClick"]),g(l,{"data-testid":"pdf-next",variant:"ghost",size:"xs",icon:"",onClick:e.next},{default:L(()=>[g(c)]),_:1},8,["onClick"])])])}const Qe=z(Ue,[["render",xe]]),et="/design-system/assets/pdf-loading.a9deeb75.svg",tt=F({setup(){return{PDF_LOADING_IMG:et}}});const ot={"data-testid":"pdf-loading",class:"pdf__loading"},at=["src"];function nt(e,n,o,a,t,s){return B(),M("div",ot,[p("img",{src:e.PDF_LOADING_IMG,width:"793",height:"1122"},null,8,at)])}const st=z(tt,[["render",nt]]),rt=F({directives:{pAspectRatio:ee},props:{url:{type:String,default:""},pdfJs:{type:Object,default:()=>({})},error:{type:Object,default:()=>({})}},setup(){return{}}});const it={"data-testid":"pdf-error",class:"pdf__error"},lt=p("h3",{class:"text-danger"}," Failed to load PDF ",-1),dt={class:"mt-7"},ut=p("dt",null,"URL:",-1),ct={class:"truncate"},ft=["href"],pt=p("dt",null," Reason: ",-1),vt=p("dt",null," PDFJS Version: ",-1);function mt(e,n,o,a,t,s){const r=oe("p-aspect-ratio");return j((B(),M("div",it,[lt,p("dl",dt,[ut,p("dd",ct,[p("a",{href:e.url,target:"_blank"},[p("code",null,V(e.url),1)],8,ft)]),pt,p("dd",null,[p("code",null,V(e.error.message),1)]),vt,p("dd",null,[p("code",null,V(e.pdfJs.version),1)])])])),[[r,1122/793]])}const gt=z(rt,[["render",mt]]),ht=["mousemove","mousedown","touchstart","keydown","scroll"];function _t(e,n=5e3){const o=_(!1);let a;function t(){o.value=!1,a&&clearTimeout(a),a=setTimeout(()=>{o.value=!0},n)}return ie(e,ht,t,{passive:!0}),o}const yt=F({props:{dropTarget:{type:String,default:".pdfViewer > .page"}},setup(e){const n=new Map,o=R("root"),a=se(),t=ae(e,"dropTarget");return U(q,{...a,objects:n,root:o}),Re(o,t),{}}}),Pt={ref:"root",class:"pdf-objects","data-testid":"pdf-objects"};function wt(e,n,o,a,t,s){return B(),M("div",Pt,[T(e.$slots,"default")],512)}const $t=z(yt,[["render",wt]]);function bt(e,n){const o=P(),a=P(),t=P(),s=P(),r=P(),l=P(),f=C(()=>{var u,h;return(h=(u=o.value)==null?void 0:u.numPages)!=null?h:0}),i=W(1,.1,2),d=W(1,1,f),v=ke(),c=P(!1),y=P(),$=J(),E=J(),N=J();async function A(u,h){v.value=!0,y.value=void 0;try{l.value=await G(()=>import("./pdf.14f7e73a.js").then(b=>b.p),["assets/chunks/pdf.14f7e73a.js","assets/app.a078ce8a.js","assets/chunks/vite-browser-external_commonjs-proxy.356e605e.js"]),typeof window<"u"&&"Worker"in window&&(l.value.GlobalWorkerOptions.workerSrc=`https://cdn.jsdelivr.net/npm/pdfjs-dist@${l.value.version}/build/pdf.worker.min.js`),await k(),u&&(s.value=l.value.getDocument({url:u,password:h,cMapUrl:`https://cdn.jsdelivr.net/npm/pdfjs-dist@${l.value.version}/cmaps/`,cMapPacked:!0,disableStream:!1}),o.value=await s.value.promise,t.value.setDocument(o.value),r.value.setDocument(o.value),$.trigger(o.value))}catch(b){b instanceof Error&&(y.value=b,E.trigger(b))}finally{v.value=!1}}async function k(){var u,h;s.value&&!s.value.destroyed&&(await s.value.destroy(),o.value=void 0,s.value=void 0,(u=t.value)==null||u.setDocument(null),(h=r.value)==null||h.setDocument(null))}async function H(){if(typeof navigator<"u"&&e.value&&n.value){const{NullL10n:u,PDFLinkService:h,PDFViewer:b,EventBus:m}=await G(()=>import("./pdf_viewer.30edac0d.js").then(O=>O.p),["assets/chunks/pdf_viewer.30edac0d.js","assets/app.a078ce8a.js","assets/chunks/pdf.14f7e73a.js","assets/chunks/vite-browser-external_commonjs-proxy.356e605e.js"]),I=new m;I.on("pagesinit",()=>{const O=n.value.clientWidth>=793;t.value.currentScaleValue=O?"1":"page-width",t.value.currentPageNumber=d.value,c.value=!0,N.trigger(t.value)}),I.on("pagechanging",O=>{d.value=O.pageNumber}),I.on("scalechanging",O=>{i.value=O.scale}),a.value=I,r.value=new h({eventBus:a.value}),t.value=new b({container:e.value,viewer:n.value,eventBus:a.value,linkService:r.value,l10n:u,useOnlyCssZoom:!1,removePageBorders:!0}),r.value.setViewer(t.value)}}return S([e,n],async([u,h])=>{t.value?u&&h&&(t.value.container=u,t.value.viewer=h,o.value&&t.value.setDocument(o.value),t.value.update()):await H()}),S(d,u=>{t.value&&u!==t.value.currentPageNumber&&(t.value.currentPageNumber=u)}),S(i,u=>{t.value&&u!==t.value.currentScale&&(t.value.currentScale=u)}),ce(async()=>{var u;(u=t.value)==null||u.cleanup(),await k()}),{page:d,scale:i,totalPage:f,loading:v,error:y,ready:c,openDoc:A,closeDoc:k,pdfDoc:o,pdfEventBus:a,pdfViewer:t,pdfLoadingTask:s,pdfLinkService:r,pdfJS:l,onLoaded:$.on,onError:E.on,onReady:N.on}}const St=F({directives:{pAspectRatio:ee},components:{PdfObjects:$t,PdfNavigation:Qe,PdfLoading:st,PdfError:gt},props:{src:{type:String,default:""},page:{type:Number,default:1},scale:{type:Number,default:1},password:{type:String,default:void 0},layout:{type:String,default:"fixed"},ratio:{type:[Number,String],default:210/297},offsetTop:{type:[Number,String],default:0}},emits:["ready","loaded","error","error-password","update:page","update:scale"],setup(e,{emit:n}){const o=R("root"),a=R("container"),t=R("viewer"),s=_t(a),r=Y(e,"page"),l=Y(e,"scale"),f=Ee(ae(e,"offsetTop"),{nanToZero:!0}),i=He(o,{offsetTop:f}),d=C(()=>{const m=[];return e.layout&&m.push(`pdf-viewer--layout-${e.layout}`),m}),{page:v,scale:c,totalPage:y,openDoc:$,closeDoc:E,pdfDoc:N,pdfJS:A,loading:k,error:H,onLoaded:u,onError:h,onReady:b}=bt(a,t);return Ne(()=>[e.src,e.password],([m,I])=>{$(m,I)},{debounce:500}),S(()=>e.layout,m=>{i.value=m==="fit"},{immediate:!0}),fe(async()=>{e.src&&$(e.src,e.password)}),u(m=>{n("loaded",m)}),h(m=>{m.name==="PasswordException"?n("error-password",m):n("error",m)}),b(m=>{n("ready",m)}),U(ne,{page:v,scale:c,totalPage:y}),x(v,r),x(c,l),{pdfPage:v,pdfScale:c,classNames:d,totalPage:y,openDoc:$,closeDoc:E,pdfDoc:N,pdfJS:A,idle:s,loading:k,error:H}}});const Dt=["data-page","data-scale"],Et={class:"pdf__header"},Nt={ref:"container",class:"pdf__container pdfContainer"},Ot={ref:"viewer",class:"pdf__viewer pdfViewer"},Ct={class:"pdf__footer"};function It(e,n,o,a,t,s){const r=w("PdfLoading"),l=w("PdfError"),f=w("PdfNavigation"),i=w("PdfObjects"),d=oe("p-aspect-ratio");return j((B(),M("div",{ref:"root","data-testid":"pdf-viewer",class:ve(["pdf",e.classNames]),"data-page":e.pdfPage,"data-scale":e.pdfScale},[p("div",Et,[T(e.$slots,"header",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})]),g(i,{class:"pdf__wrapper"},{default:L(()=>[p("div",Nt,[j(g(r,null,null,512),[[Z,e.loading||!e.src]]),j(g(l,{url:e.src,"pdf-js":e.pdfJS,error:e.error},null,8,["url","pdf-js","error"]),[[Z,!e.loading&&e.error]]),p("div",Ot,null,512),T(e.$slots,"default",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})],512),T(e.$slots,"container",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc}),g(pe,{name:"slide-up"},{default:L(()=>[j(g(f,null,null,512),[[Z,!e.idle&&!e.loading]])]),_:1}),T(e.$slots,"body",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})]),_:3}),p("div",Ct,[T(e.$slots,"footer",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})])],10,Dt)),[[d,e.layout==="fixed"?e.ratio:16/9]])}const Qt=z(St,[["render",It]]),eo="/design-system/assets/Calibrator-v3.e869f66c.pdf";export{Me as D,eo as F,qt as P,Yt as a,q as b,xt as f,Qt as p,Kt as u};
