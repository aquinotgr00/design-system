import{p as ee}from"./index.bbdea622.js";import{q as se,v as re,l as ie,c as le,j as x,x as de,t as M,y as Z,r as K,e as ce,d as ue,s as Y}from"./theme.6d4ed01a.js";import{s as $,r as h,b as fe,a1 as U,a0 as J,V as X,aa as pe,c as O,u as G,w as S,l as ve,_ as L,x as k,p as V,G as p,m as B,J as y,N as g,B as I,z,a8 as te,a7 as F,y as me,t as oe,q as T,h as ge,o as _e,a9 as A,T as he,v as ye}from"./framework.f3d2a0a5.js";import{I as Pe,a as we}from"./20.ccb45683.js";import{I as $e}from"./20.7180ddd2.js";import{p as be}from"./Button.a307e6e8.js";import{p as Se}from"./Divider.f21e937e.js";import{p as De}from"./Select.a4012588.js";import{H as Ee}from"./Heading.8b6fa820.js";import{u as Ne}from"./use-selector.91bf8636.js";import{f as Ie}from"./focus.ec676fab.js";import{u as R}from"./index.b33282b2.js";import{d as Oe}from"./debounce.425ad733.js";import{r as Ce}from"./isObjectLike.53b0037d.js";import{t as Te}from"./toInteger.cccd26ae.js";import{t as Le}from"./toNumber.09abc7f0.js";import{t as Q}from"./toString.314d06e3.js";import{u as ke}from"./use-loading.f698da79.js";var Ve=Ce.isFinite,je=Math.min;function Fe(e){var n=Math[e];return function(o,a){if(o=Le(o),a=a==null?0:je(Te(a),292),a&&Ve(o)){var t=(Q(o)+"e").split("e"),r=n(t[0]+"e"+(+t[1]+a));return t=(Q(r)+"e").split("e"),+(t[0]+"e"+(+t[1]-a))}return n(o)}}var ze=Fe("round");const Be=ze,Me=Symbol("DropzoneContext");function Re(e,n){const o=$(!0),a=$(),t=h(),r=h();async function l(){if(i(),e.value){const{default:f}=await J(()=>import("./interact.min.6dc930b6.js").then(s=>s.i),["assets/chunks/interact.min.6dc930b6.js","assets/chunks/commonjsHelpers.042e6b4d.js"]);a.value=f(n.value,{context:e.value}).dropzone({accept:".pdf-object",overlap:.95,enabled:o.value,checker(s,d,v,u,P,w,D){var E;return v&&(((E=e.value)==null?void 0:E.contains(D))||D.classList.contains("pdf-object--external"))},ondragenter(s){r.value=s.target,s.target.classList.add("hover")},ondragleave(s){s.target.classList.remove("hover")},ondrop(s){r.value=s.target,t.value=s.target,s.target.classList.remove("hover")}})}}function i(){a.value&&a.value.unset()}return se(e,f=>{f.some(d=>d.type==="childList"&&d.target.matches(n.value))&&l()},{subtree:!0,childList:!0}),fe(()=>{i()}),U(Me,{dropzone:t,hoverzone:r}),o}const q=Symbol("PDFObjects"),xt=Symbol("PDFObjects");function He(e){var f,s,d,v;const n=O(()=>Be(e.width/e.height,2)),o=h((f=e.minWidth)!=null?f:e.width*.5),a=h((s=e.maxWidth)!=null?s:e.width*2),t=h((d=e.minHeight)!=null?d:e.height*.5),r=h((v=e.maxHeight)!=null?v:e.height*2),l=R(e.width,o,a),i=R(e.height,t,r);return S(()=>e.minWidth,u=>{Number.isFinite(u)&&(o.value=u)}),S(()=>e.minHeight,u=>{Number.isFinite(u)&&(t.value=u)}),S(()=>e.maxWidth,u=>{Number.isFinite(u)&&(a.value=u)}),S(()=>e.maxHeight,u=>{Number.isFinite(u)&&(r.value=u)}),{ratio:n,width:l,height:i,minWidth:o,maxWidth:a,minHeight:t,maxHeight:r}}function Kt(e){var w;const{objects:n,page:o}=X(q),a=h((w=e.page)!=null?w:o.value),t=h(e.x),r=h(e.y),l=Symbol("PDFObject"),{width:i,height:f,minWidth:s,maxWidth:d,minHeight:v,maxHeight:u,ratio:P}=He(e);return n.set(l,pe({id:l,page:a,x:t,y:r,width:i,height:f})),re(()=>{Number.isFinite(a.value)||le(o).toBeTruthy().then(()=>{a.value=o.value})}),ie(()=>{n.delete(l)}),{id:l,x:t,y:r,page:a,width:i,height:f,minWidth:s,minHeight:v,maxWidth:d,maxHeight:u,ratio:P}}function Yt(e){const{root:n}=X(q),o=O(()=>`.page[data-page-number="${G(e)}"]`);return Ne(o,n)}const Qt=Oe(Ie,100),ae=Symbol("PdfViewer");function ne(){return X(ae,()=>{const e=h(1),n=h(1),o=h(0);return{page:e,scale:n,totalPage:o}},!0)}function We(e,n={}){const o=h(!1),a=O(()=>{var d;return(d=G(n.offsetTop))!=null?d:0}),t=O(()=>{var d;return(d=G(e))==null?void 0:d.parentElement}),{top:r,height:l}=x(t),{top:i,width:f,left:s}=x(e);return ve(d=>{o.value&&e.value&&(r.value-a.value>=0?(e.value.style.setProperty("height",`${window.innerHeight-i.value}px`),e.value.style.setProperty("width","100%")):(t.value.style.setProperty("min-height",`${l.value}px`),e.value.style.setProperty("position","fixed"),e.value.style.setProperty("top",`${a.value}px`),e.value.style.setProperty("left",`${s.value}px`),e.value.style.setProperty("width",`${f.value}px`),e.value.style.setProperty("height",`${window.innerHeight-a.value}px`)),d(()=>{t.value.style.removeProperty("min-height"),e.value.style.removeProperty("position"),e.value.style.removeProperty("top"),e.value.style.removeProperty("left"),e.value.style.removeProperty("width"),e.value.style.removeProperty("height")}))}),o}const Ze={},Ae={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",class:"persona-icon"},Je=p("path",{fill:"currentColor",d:"M4.673 12.83a.575.575 0 0 1 0-.821l4.91-4.839a.595.595 0 0 1 .834 0l4.91 4.839c.23.226.23.594 0 .82a.595.595 0 0 1-.833 0L10 8.403 5.506 12.83a.595.595 0 0 1-.833 0Z"},null,-1),Ge=[Je];function Ue(e,n){return k(),V("svg",Ae,Ge)}const Xe=L(Ze,[["render",Ue]]),qe=B({components:{IconZoomIn:Pe,IconZoomOut:we,IconPrev:Xe,IconNext:$e,pButton:be,pDivider:Se,pSelect:De},setup(){const{page:e,scale:n,totalPage:o}=ne(),a=O(()=>Array.from({length:o.value}).map((f,s)=>({text:`${s+1}`,value:s+1})));function t(){n.value=Math.round(n.value/.1)*.1+.1}function r(){n.value=Math.round(n.value/.1)*.1-.1}function l(){e.value++}function i(){e.value--}return{page:e,pages:a,scale:n,totalPage:o,zoomIn:t,zoomOut:r,next:l,prev:i}}});const xe={"data-testid":"pdf-navigation",class:"pdf__navigation"},Ke={class:"pdf__navigation-container"},Ye={class:"pdf__navigation-scale"},Qe={"data-testid":"pdf-total",class:"flex-shrink-0"};function et(e,n,o,a,t,r){const l=y("IconZoomOut"),i=y("p-button"),f=y("IconZoomIn"),s=y("p-divider"),d=y("p-select"),v=y("IconPrev"),u=y("IconNext");return k(),V("div",xe,[p("div",Ke,[g(i,{"data-testid":"pdf-zoom-out",variant:"ghost",size:"xs",icon:"",onClick:e.zoomOut},{default:I(()=>[g(l)]),_:1},8,["onClick"]),p("span",Ye,z((e.scale*100).toFixed(0))+"% ",1),g(i,{"data-testid":"pdf-zoom-in",variant:"ghost",size:"xs",icon:"",onClick:e.zoomIn},{default:I(()=>[g(f)]),_:1},8,["onClick"]),g(s,{vertical:""}),g(d,{modelValue:e.page,"onUpdate:modelValue":n[0]||(n[0]=P=>e.page=P),options:e.pages,size:"xs"},null,8,["modelValue","options"]),p("span",Qe,"of "+z(e.totalPage),1),g(i,{"data-testid":"pdf-prev",variant:"ghost",size:"xs",icon:"",onClick:e.prev},{default:I(()=>[g(v)]),_:1},8,["onClick"]),g(i,{"data-testid":"pdf-next",variant:"ghost",size:"xs",icon:"",onClick:e.next},{default:I(()=>[g(u)]),_:1},8,["onClick"])])])}const tt=L(qe,[["render",et]]),ot="/design-system/assets/pdf-loading.2dcb0a6f.svg",at=B({setup(){return{PDF_LOADING_IMG:ot}}});const nt={"data-testid":"pdf-loading",class:"pdf__loading"},st=["src"];function rt(e,n,o,a,t,r){return k(),V("div",nt,[p("img",{src:e.PDF_LOADING_IMG,width:"793",height:"1122"},null,8,st)])}const it=L(at,[["render",rt]]),lt=B({directives:{pAspectRatio:ee},components:{Heading:Ee},props:{url:{type:String,default:""},pdfJs:{type:Object,default:()=>({})},error:{type:Object,default:()=>({})}},setup(){return{}}});const dt={"data-testid":"pdf-error",class:"pdf__error"},ct={class:"mt-7"},ut=p("dt",null,"URL:",-1),ft={class:"truncate"},pt=["href"],vt=p("dt",null," Reason: ",-1),mt=p("dt",null," PDFJS Version: ",-1);function gt(e,n,o,a,t,r){const l=y("Heading"),i=te("p-aspect-ratio");return F((k(),V("div",dt,[g(l,{element:"h3"},{default:I(()=>[me(" Failed to load PDF ")]),_:1}),p("dl",ct,[ut,p("dd",ft,[p("a",{href:e.url,target:"_blank"},[p("code",null,z(e.url),1)],8,pt)]),vt,p("dd",null,[p("code",null,z(e.error.message),1)]),mt,p("dd",null,[p("code",null,z(e.pdfJs.version),1)])])])),[[i,1122/793]])}const _t=L(lt,[["render",gt]]),ht=["mousemove","mousedown","touchstart","keydown","scroll"];function yt(e,n=5e3){const o=h(!1);let a;function t(){o.value=!1,a&&clearTimeout(a),a=setTimeout(()=>{o.value=!0},n)}return de(e,ht,t,{passive:!0}),o}const Pt=B({props:{dropTarget:{type:String,default:".pdfViewer > .page"}},setup(e){const n=new Map,o=M("root"),a=ne(),t=oe(e,"dropTarget");return U(q,{...a,objects:n,root:o}),Re(o,t),{}}}),wt={ref:"root",class:"pdf-objects","data-testid":"pdf-objects"};function $t(e,n,o,a,t,r){return k(),V("div",wt,[T(e.$slots,"default")],512)}const bt=L(Pt,[["render",$t]]);function St(e,n){const o=$(),a=$(),t=$(),r=$(),l=$(),i=$(),f=O(()=>{var c,_;return(_=(c=o.value)==null?void 0:c.numPages)!=null?_:0}),s=R(1,.1,2),d=R(1,1,f),v=ke(),u=$(!1),P=$(),w=Z(),D=Z(),E=Z();async function H(c,_){v.value=!0,P.value=void 0;try{i.value=await J(()=>import("./pdf.f4a5ea7b.js").then(b=>b.p),["assets/chunks/pdf.f4a5ea7b.js","assets/chunks/commonjsHelpers.042e6b4d.js","assets/chunks/vite-browser-external_commonjs-proxy.005f2268.js"]),typeof window<"u"&&"Worker"in window&&(i.value.GlobalWorkerOptions.workerSrc=`https://cdn.jsdelivr.net/npm/pdfjs-dist@${i.value.version}/build/pdf.worker.min.js`),await j(),c&&(r.value=i.value.getDocument({url:c,password:_,cMapUrl:`https://cdn.jsdelivr.net/npm/pdfjs-dist@${i.value.version}/cmaps/`,cMapPacked:!0,disableStream:!1}),o.value=await r.value.promise,t.value.setDocument(o.value),l.value.setDocument(o.value),w.trigger(o.value))}catch(b){b instanceof Error&&(P.value=b,D.trigger(b))}finally{v.value=!1}}async function j(){var c,_;r.value&&!r.value.destroyed&&(await r.value.destroy(),o.value=void 0,r.value=void 0,(c=t.value)==null||c.setDocument(null),(_=l.value)==null||_.setDocument(null))}async function W(){if(typeof navigator<"u"&&e.value&&n.value){const{NullL10n:c,PDFLinkService:_,PDFViewer:b,EventBus:m}=await J(()=>import("./pdf_viewer.9f3686b5.js").then(N=>N.p),["assets/chunks/pdf_viewer.9f3686b5.js","assets/chunks/commonjsHelpers.042e6b4d.js","assets/chunks/pdf.f4a5ea7b.js","assets/chunks/vite-browser-external_commonjs-proxy.005f2268.js"]),C=new m;C.on("pagesinit",()=>{const N=n.value.clientWidth>=793;t.value.currentScaleValue=N?"1":"page-width",t.value.currentPageNumber=d.value,u.value=!0,E.trigger(t.value)}),C.on("pagechanging",N=>{d.value=N.pageNumber}),C.on("scalechanging",N=>{s.value=N.scale}),a.value=C,l.value=new _({eventBus:a.value}),t.value=new b({container:e.value,viewer:n.value,eventBus:a.value,linkService:l.value,l10n:c,useOnlyCssZoom:!1,removePageBorders:!0}),l.value.setViewer(t.value)}}return S([e,n],async([c,_])=>{t.value?c&&_&&(t.value.container=c,t.value.viewer=_,o.value&&t.value.setDocument(o.value),t.value.update()):await W()}),S(d,c=>{t.value&&c!==t.value.currentPageNumber&&(t.value.currentPageNumber=c)}),S(s,c=>{t.value&&c!==t.value.currentScale&&(t.value.currentScale=c)}),ge(async()=>{var c;(c=t.value)==null||c.cleanup(),await j()}),{page:d,scale:s,totalPage:f,loading:v,error:P,ready:u,openDoc:H,closeDoc:j,pdfDoc:o,pdfEventBus:a,pdfViewer:t,pdfLoadingTask:r,pdfLinkService:l,pdfJS:i,onLoaded:w.on,onError:D.on,onReady:E.on}}const Dt=B({directives:{pAspectRatio:ee},components:{PdfObjects:bt,PdfNavigation:tt,PdfLoading:it,PdfError:_t},props:{src:{type:String,default:""},page:{type:Number,default:1},scale:{type:Number,default:1},password:{type:String,default:void 0},layout:{type:String,default:"fixed"},ratio:{type:[Number,String],default:210/297},offsetTop:{type:[Number,String],default:0}},emits:["ready","loaded","error","error-password","update:page","update:scale"],setup(e,{emit:n}){const o=M("root"),a=M("container"),t=M("viewer"),r=yt(a),l=K(e,"page"),i=K(e,"scale"),f=ce(oe(e,"offsetTop"),{nanToZero:!0}),s=We(o,{offsetTop:f}),d=O(()=>{const m=[];return e.layout&&m.push(`pdf-viewer--layout-${e.layout}`),m}),{page:v,scale:u,totalPage:P,openDoc:w,closeDoc:D,pdfDoc:E,pdfJS:H,loading:j,error:W,onLoaded:c,onError:_,onReady:b}=St(a,t);return ue(()=>[e.src,e.password],([m,C])=>{w(m,C)},{debounce:500}),S(()=>e.layout,m=>{s.value=m==="fit"},{immediate:!0}),_e(async()=>{e.src&&w(e.src,e.password)}),c(m=>{n("loaded",m)}),_(m=>{m.name==="PasswordException"?n("error-password",m):n("error",m)}),b(m=>{n("ready",m)}),U(ae,{page:v,scale:u,totalPage:P}),Y(v,l),Y(u,i),{pdfPage:v,pdfScale:u,classNames:d,totalPage:P,openDoc:w,closeDoc:D,pdfDoc:E,pdfJS:H,idle:r,loading:j,error:W}}});const Et=["data-page","data-scale"],Nt={class:"pdf__header"},It={ref:"container",class:"pdf__container pdfContainer"},Ot={ref:"viewer",class:"pdf__viewer pdfViewer"},Ct={class:"pdf__footer"};function Tt(e,n,o,a,t,r){const l=y("PdfLoading"),i=y("PdfError"),f=y("PdfNavigation"),s=y("PdfObjects"),d=te("p-aspect-ratio");return F((k(),V("div",{ref:"root","data-testid":"pdf-viewer",class:ye(["pdf",e.classNames]),"data-page":e.pdfPage,"data-scale":e.pdfScale},[p("div",Nt,[T(e.$slots,"header",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})]),g(s,{class:"pdf__wrapper"},{default:I(()=>[p("div",It,[F(g(l,null,null,512),[[A,e.loading||!e.src]]),F(g(i,{url:e.src,"pdf-js":e.pdfJS,error:e.error},null,8,["url","pdf-js","error"]),[[A,!e.loading&&e.error]]),p("div",Ot,null,512),T(e.$slots,"default",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})],512),T(e.$slots,"container",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc}),g(he,{name:"slide-up"},{default:I(()=>[F(g(f,null,null,512),[[A,!e.idle&&!e.loading&&!e.error]])]),_:1}),T(e.$slots,"body",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})]),_:3}),p("div",Ct,[T(e.$slots,"footer",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})])],10,Et)),[[d,e.layout==="fixed"?e.ratio:!1]])}const eo=L(Dt,[["render",Tt]]),to="/design-system/assets/Calibrator-v3.e869f66c.pdf";export{Me as D,to as F,xt as P,q as a,Yt as b,Qt as f,eo as p,Kt as u};
