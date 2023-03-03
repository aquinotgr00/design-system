import{p as ee}from"./index.dbfd4b0f.js";import{e as q,h as ie,i as te,t as R,j as K}from"./index.a185557f.js";import{x as U,g as m,h as C,u as S,D as le,f as V,k as F,r as w,o as z,c as M,m as f,a as v,w as T,y as j,V as oe,d as k,z as P,i as b,a7 as de,L as ue,A as x,_ as G,C as ae,l as I,N as ce,j as fe,E as Z,T as pe,n as ve}from"../app.11769fcb.js";import{I as me,a as ge}from"./16.99cfef96.js";import{u as he}from"./utils-6ba05f5b.759caf55.js";import{I as _e}from"./16.db02d3c4.js";import{p as ye}from"./Button.72779291.js";import{p as Pe}from"./Divider.809b2a56.js";import{p as we}from"./Select.ed3faa42.js";import{t as $e,m as be,l as Se,h as De,o as J,k as Ee,j as Ne,s as Y}from"./index.c0c609df.js";import{f as Ce}from"./focus.419a5f01.js";import{u as W}from"./index.6868b7ca.js";import{d as Oe}from"./debounce.09764d19.js";import{r as Ie}from"./isObjectLike.46b91259.js";import{a as Te}from"./toInteger.1f8b77ad.js";import{t as Le}from"./toNumber.685f5789.js";import{t as Q}from"./toString.401226e4.js";import{u as ke}from"./use-loading.7fa98dfc.js";var je=Ie.isFinite,Ve=Math.min;function Fe(e){var n=Math[e];return function(o,a){if(o=Le(o),a=a==null?0:Ve(Te(a),292),a&&je(o)){var t=(Q(o)+"e").split("e"),s=n(t[0]+"e"+(+t[1]+a));return t=(Q(s)+"e").split("e"),+(t[0]+"e"+(+t[1]-a))}return n(o)}}var ze=Fe("round");const Me=ze,ne=Symbol("PdfViewer");function se(){return U(ne,()=>{const e=m(1),n=m(1),o=m(0);return{page:e,scale:n,totalPage:o}},!0)}function Be(e,n={}){const o=m(!1),a=C(()=>S(n.offsetTop)??0),t=C(()=>{var c;return(c=S(e))==null?void 0:c.parentElement}),{top:s,height:r}=q(t),{top:d,width:i,left:l}=q(e);return le(c=>{o.value&&e.value&&(s.value-a.value>=0?(e.value.style.setProperty("height",`${window.innerHeight-d.value}px`),e.value.style.setProperty("width","100%")):(t.value.style.setProperty("min-height",`${r.value}px`),e.value.style.setProperty("position","fixed"),e.value.style.setProperty("top",`${a.value}px`),e.value.style.setProperty("left",`${l.value}px`),e.value.style.setProperty("width",`${i.value}px`),e.value.style.setProperty("height",`${window.innerHeight-a.value}px`)),c(()=>{t.value.style.removeProperty("min-height"),e.value.style.removeProperty("position"),e.value.style.removeProperty("top"),e.value.style.removeProperty("left"),e.value.style.removeProperty("width"),e.value.style.removeProperty("height")}))}),o}var Re=he,re=Re.createSVGComponent(re,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M8 5L13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z"}}]),We=re;const Ae=We,He=V({components:{IconZoomIn:me,IconZoomOut:ge,IconPrev:Ae,IconNext:_e,pButton:ye,pDivider:Pe,pSelect:we},setup(){const{page:e,scale:n,totalPage:o}=se(),a=C(()=>Array.from({length:o.value}).map((i,l)=>({text:`${l+1}`,value:l+1})));function t(){n.value=Math.round(n.value/.1)*.1+.1}function s(){n.value=Math.round(n.value/.1)*.1-.1}function r(){e.value++}function d(){e.value--}return{page:e,pages:a,scale:n,totalPage:o,zoomIn:t,zoomOut:s,next:r,prev:d}}});const Ze={"data-testid":"pdf-navigation",class:"pdf__navigation"},Je={class:"pdf__navigation-container"},Ge={class:"pdf__navigation-scale"},Ue={"data-testid":"pdf-total",class:"flex-shrink-0"};function xe(e,n,o,a,t,s){const r=w("IconZoomOut"),d=w("p-button"),i=w("IconZoomIn"),l=w("p-divider"),c=w("p-select"),g=w("IconPrev"),h=w("IconNext");return z(),M("div",Ze,[f("div",Je,[v(d,{"data-testid":"pdf-zoom-out",variant:"ghost",size:"xs",icon:"",onClick:e.zoomOut},{default:T(()=>[v(r)]),_:1},8,["onClick"]),f("span",Ge,j((e.scale*100).toFixed(0))+"% ",1),v(d,{"data-testid":"pdf-zoom-in",variant:"ghost",size:"xs",icon:"",onClick:e.zoomIn},{default:T(()=>[v(i)]),_:1},8,["onClick"]),v(l,{vertical:""}),v(c,{modelValue:e.page,"onUpdate:modelValue":n[0]||(n[0]=_=>e.page=_),options:e.pages,size:"xs"},null,8,["modelValue","options"]),f("span",Ue,"of "+j(e.totalPage),1),v(d,{"data-testid":"pdf-prev",variant:"ghost",size:"xs",icon:"",onClick:e.prev},{default:T(()=>[v(g)]),_:1},8,["onClick"]),v(d,{"data-testid":"pdf-next",variant:"ghost",size:"xs",icon:"",onClick:e.next},{default:T(()=>[v(h)]),_:1},8,["onClick"])])])}const Xe=F(He,[["render",xe]]),qe="/design-system/assets/pdf-loading.a9deeb75.svg",Ke=V({setup(){return{PDF_LOADING_IMG:qe}}});const Ye={"data-testid":"pdf-loading",class:"pdf__loading"},Qe=["src"];function et(e,n,o,a,t,s){return z(),M("div",Ye,[f("img",{src:e.PDF_LOADING_IMG,width:"793",height:"1122"},null,8,Qe)])}const tt=F(Ke,[["render",et]]),ot=V({directives:{pAspectRatio:ee},props:{url:{type:String,default:""},pdfJs:{type:Object,default:()=>({})},error:{type:Object,default:()=>({})}},setup(){return{}}});const at={"data-testid":"pdf-error",class:"pdf__error"},nt=f("h3",{class:"text-danger"}," Failed to load PDF ",-1),st={class:"mt-7"},rt=f("dt",null,"URL:",-1),it={class:"truncate"},lt=["href"],dt=f("dt",null," Reason: ",-1),ut=f("dt",null," PDFJS Version: ",-1);function ct(e,n,o,a,t,s){const r=oe("p-aspect-ratio");return k((z(),M("div",at,[nt,f("dl",st,[rt,f("dd",it,[f("a",{href:e.url,target:"_blank"},[f("code",null,j(e.url),1)],8,lt)]),dt,f("dd",null,[f("code",null,j(e.error.message),1)]),ut,f("dd",null,[f("code",null,j(e.pdfJs.version),1)])])])),[[r,1122/793]])}const ft=F(ot,[["render",ct]]),pt=["mousemove","mousedown","touchstart","keydown","scroll"];function vt(e,n=5e3){const o=m(!1);let a;function t(){o.value=!1,a&&clearTimeout(a),a=setTimeout(()=>{o.value=!0},n)}return ie(e,pt,t,{passive:!0}),o}function mt(e,n=document.body,o=!1){const a=P();function t(){var s,r;a.value=o?(s=S(n))==null?void 0:s.querySelectorAll(S(e)):(r=S(n))==null?void 0:r.querySelector(S(e))}return b(()=>S(e),()=>{t()}),te(n,s=>{s.some(r=>r.type==="childList")&&t()},{childList:!0,subtree:!0}),$e(()=>{t()}),a}const X=Symbol("PDFObjects"),xt=Symbol("PDFObjects");function gt(e){const n=C(()=>Me(e.width/e.height,2)),o=m(e.minWidth??e.width*.5),a=m(e.maxWidth??e.width*2),t=m(e.minHeight??e.height*.5),s=m(e.maxHeight??e.height*2),r=W(e.width,o,a),d=W(e.height,t,s);return b(()=>e.minWidth,i=>{Number.isFinite(i)&&(o.value=i)}),b(()=>e.minHeight,i=>{Number.isFinite(i)&&(t.value=i)}),b(()=>e.maxWidth,i=>{Number.isFinite(i)&&(a.value=i)}),b(()=>e.maxHeight,i=>{Number.isFinite(i)&&(s.value=i)}),{ratio:n,width:r,height:d,minWidth:o,maxWidth:a,minHeight:t,maxHeight:s}}function Xt(e){const{objects:n,page:o}=U(X),a=m(e.page??o.value),t=m(e.x),s=m(e.y),r=Symbol("PDFObject"),{width:d,height:i,minWidth:l,maxWidth:c,minHeight:g,maxHeight:h,ratio:_}=gt(e);return n.set(r,de({id:r,page:a,x:t,y:s,width:d,height:i})),be(()=>{Number.isFinite(a.value)||De(o).toBeTruthy().then(()=>{a.value=o.value})}),Se(()=>{n.delete(r)}),{id:r,x:t,y:s,page:a,width:d,height:i,minWidth:l,minHeight:g,maxWidth:c,maxHeight:h,ratio:_}}function qt(e){const{root:n}=U(X),o=C(()=>`.page[data-page-number="${S(e)}"]`);return mt(o,n)}const Kt=Oe(Ce,100),ht=Symbol("DropzoneContext");function _t(e,n){const o=P(!0),a=P(),t=m(),s=m();async function r(){if(d(),e.value){const{default:i}=await G(()=>import("./interact.min.2cb43bf5.js").then(l=>l.i),["assets/chunks/interact.min.2cb43bf5.js","assets/app.11769fcb.js"]);a.value=i(n.value,{context:e.value}).dropzone({accept:".pdf-object",overlap:.95,enabled:o.value,checker(l,c,g,h,_,D,E){return g&&(e.value.contains(E)||E.classList.contains("pdf-object--external"))},ondragenter(l){s.value=l.target,l.target.classList.add("hover")},ondragleave(l){l.target.classList.remove("hover")},ondrop(l){s.value=l.target,t.value=l.target,l.target.classList.remove("hover")}})}}function d(){a.value&&a.value.unset()}return te(e,i=>{i.some(c=>c.type==="childList"&&c.target.matches(n.value))&&r()},{subtree:!0,childList:!0}),ue(()=>{d()}),x(ht,{dropzone:t,hoverzone:s}),o}const yt=V({props:{dropTarget:{type:String,default:".pdfViewer > .page"}},setup(e){const n=new Map,o=R("root"),a=se(),t=ae(e,"dropTarget");return x(X,{...a,objects:n,root:o}),_t(o,t),{}}}),Pt={ref:"root","data-testid":"pdf-objects"};function wt(e,n,o,a,t,s){return z(),M("div",Pt,[I(e.$slots,"default")],512)}const $t=F(yt,[["render",wt]]);function bt(e,n){const o=P(),a=P(),t=P(),s=P(),r=P(),d=P(),i=C(()=>{var u;return((u=o.value)==null?void 0:u.numPages)??0}),l=W(1,.1,2),c=W(1,1,i),g=ke(),h=P(!1),_=P(),D=J(),E=J(),B=J();async function A(u,y){g.value=!0,_.value=void 0;try{d.value=await G(()=>import("./pdf.88f8d4b6.js").then($=>$.p),["assets/chunks/pdf.88f8d4b6.js","assets/app.11769fcb.js","assets/chunks/vite-browser-external_commonjs-proxy.c4a594ad.js"]),typeof window<"u"&&"Worker"in window&&(d.value.GlobalWorkerOptions.workerSrc=`https://cdn.jsdelivr.net/npm/pdfjs-dist@${d.value.version}/build/pdf.worker.min.js`),await L(),u&&(s.value=d.value.getDocument({url:u,password:y,cMapUrl:`https://cdn.jsdelivr.net/npm/pdfjs-dist@${d.value.version}/cmaps/`,cMapPacked:!0,disableStream:!1}),o.value=await s.value.promise,t.value.setDocument(o.value),r.value.setDocument(o.value),D.trigger(o.value))}catch($){$ instanceof Error&&(_.value=$,E.trigger($))}finally{g.value=!1}}async function L(){var u,y;s.value&&!s.value.destroyed&&(await s.value.destroy(),o.value=void 0,s.value=void 0,(u=t.value)==null||u.setDocument(null),(y=r.value)==null||y.setDocument(null))}async function H(){if(typeof navigator<"u"&&e.value&&n.value){const{NullL10n:u,PDFLinkService:y,PDFViewer:$,EventBus:p}=await G(()=>import("./pdf_viewer.c9b4be13.js").then(N=>N.p),["assets/chunks/pdf_viewer.c9b4be13.js","assets/app.11769fcb.js","assets/chunks/pdf.88f8d4b6.js","assets/chunks/vite-browser-external_commonjs-proxy.c4a594ad.js"]),O=new p;O.on("pagesinit",()=>{const N=n.value.clientWidth>=793;t.value.currentScaleValue=N?"1":"page-width",t.value.currentPageNumber=c.value,h.value=!0,B.trigger(t.value)}),O.on("pagechanging",N=>{c.value=N.pageNumber}),O.on("scalechanging",N=>{l.value=N.scale}),a.value=O,r.value=new y({eventBus:a.value}),t.value=new $({container:e.value,viewer:n.value,eventBus:a.value,linkService:r.value,l10n:u,useOnlyCssZoom:!1,removePageBorders:!0}),r.value.setViewer(t.value)}}return b([e,n],async([u,y])=>{t.value?u&&y&&(t.value.container=u,t.value.viewer=y,o.value&&t.value.setDocument(o.value),t.value.update()):await H()}),b(c,u=>{t.value&&u!==t.value.currentPageNumber&&(t.value.currentPageNumber=u)}),b(l,u=>{t.value&&u!==t.value.currentScale&&(t.value.currentScale=u)}),ce(async()=>{var u;(u=t.value)==null||u.cleanup(),await L()}),{page:c,scale:l,totalPage:i,loading:g,error:_,ready:h,openDoc:A,closeDoc:L,pdfDoc:o,pdfEventBus:a,pdfViewer:t,pdfLoadingTask:s,pdfLinkService:r,pdfJS:d,onLoaded:D.on,onError:E.on,onReady:B.on}}const St=V({directives:{pAspectRatio:ee},components:{PdfObjects:$t,PdfNavigation:Xe,PdfLoading:tt,PdfError:ft},props:{src:{type:String,default:""},page:{type:Number,default:1},scale:{type:Number,default:1},password:{type:String,default:void 0},layout:{type:String,default:"fixed"},ratio:{type:[Number,String],default:210/297},offsetTop:{type:[Number,String],default:0}},emits:["ready","loaded","error","error-password","update:page","update:scale"],setup(e,{emit:n}){const o=R("root"),a=R("container"),t=R("viewer"),s=vt(a),r=K(e,"page"),d=K(e,"scale"),i=Ee(ae(e,"offsetTop"),{nanToZero:!0}),l=Be(o,{offsetTop:i}),c=C(()=>{const p=[];return e.layout&&p.push(`pdf-viewer--layout-${e.layout}`),p}),{page:g,scale:h,totalPage:_,openDoc:D,closeDoc:E,pdfDoc:B,pdfJS:A,loading:L,error:H,onLoaded:u,onError:y,onReady:$}=bt(a,t);return Ne(()=>[e.src,e.password],([p,O])=>{D(p,O)},{debounce:500}),b(()=>e.layout,p=>{l.value=p==="fit"},{immediate:!0}),fe(async()=>{e.src&&D(e.src,e.password)}),u(p=>{n("loaded",p)}),y(p=>{p.name==="PasswordException"?n("error-password",p):n("error",p)}),$(p=>{n("ready",p)}),x(ne,{page:g,scale:h,totalPage:_}),Y(g,r),Y(h,d),{pdfPage:g,pdfScale:h,classNames:c,totalPage:_,openDoc:D,closeDoc:E,pdfDoc:B,pdfJS:A,idle:s,loading:L,error:H}}});const Dt={class:"pdf__header"},Et={ref:"container",class:"pdf__container pdfContainer"},Nt={ref:"viewer",class:"pdf__viewer pdfViewer"},Ct={class:"pdf__footer"};function Ot(e,n,o,a,t,s){const r=w("PdfLoading"),d=w("PdfError"),i=w("PdfNavigation"),l=w("PdfObjects"),c=oe("p-aspect-ratio");return k((z(),M("div",{ref:"root","data-testid":"pdf-viewer",class:ve(["pdf",e.classNames])},[f("div",Dt,[I(e.$slots,"header",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})]),v(l,{class:"pdf__wrapper"},{default:T(()=>[f("div",Et,[k(v(r,null,null,512),[[Z,e.loading||!e.src]]),k(v(d,{url:e.src,"pdf-js":e.pdfJS,error:e.error},null,8,["url","pdf-js","error"]),[[Z,!e.loading&&e.error]]),f("div",Nt,null,512),I(e.$slots,"default",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})],512),I(e.$slots,"container",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc}),v(pe,{name:"slide-up"},{default:T(()=>[k(v(i,null,null,512),[[Z,!e.idle]])]),_:1}),I(e.$slots,"body",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})]),_:3}),f("div",Ct,[I(e.$slots,"footer",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,doc:e.pdfDoc})])],2)),[[c,e.layout==="fixed"?e.ratio:16/9]])}const Yt=F(St,[["render",Ot]]),Qt="/design-system/assets/Calibrator-v3.e869f66c.pdf";export{ht as D,Qt as F,xt as P,qt as a,X as b,Kt as f,Yt as p,Xt as u};