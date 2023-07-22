import{p as y,F as d}from"./chunks/Calibrator-v3.815ff9e7.js";import{p as i}from"./chunks/PdfObject.f0ac1d1e.js";import{p as A}from"./chunks/PdfObjectAddon.318cf2dc.js";import{p as g}from"./chunks/Button.a307e6e8.js";import{I as _}from"./chunks/16.bc9027af.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.ee72ccc6.js";import{i as I}from"./chunks/isIterateeCall.05518614.js";import{a as v}from"./chunks/toInteger.cccd26ae.js";import{aa as m,r as x,J as U,p as j,N as p,B as o,X as D,n as N,x as b,u as n,y as h,K as V,L as O,A as w,C as z,G as C}from"./chunks/framework.f3d2a0a5.js";import"./chunks/index.bbdea622.js";import"./chunks/theme.6d4ed01a.js";import"./chunks/20.ccb45683.js";import"./chunks/20.7180ddd2.js";import"./chunks/Divider.f21e937e.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Select.04f817ab.js";import"./chunks/Dropdown.f706c3bb.js";import"./chunks/use-focus.f1095479.js";import"./chunks/baseClamp.947838b9.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/floating-ui.dom.browser.min.a94d243b.js";import"./chunks/index.4926e9c0.js";import"./chunks/16.a6e9aa03.js";import"./chunks/Input.3c63c0c0.js";import"./chunks/index.a3ecab28.js";import"./chunks/accept.c8f4354a.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/20.c6fe5404.js";import"./chunks/SpinnerRing.001dc416.js";import"./chunks/value.830bdabd.js";import"./chunks/adapter.c83e5e9c.js";import"./chunks/use-loading.f698da79.js";import"./chunks/defu.573334b8.js";import"./chunks/Heading.8b6fa820.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/use-selector.91bf8636.js";import"./chunks/focus.ec676fab.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/index.b33282b2.js";import"./chunks/debounce.425ad733.js";import"./chunks/toString.314d06e3.js";import"./chunks/isArray.513c67aa.js";import"./chunks/memoize.19554dab.js";import"./chunks/eq.83a0dc05.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/isArrayLike.740cb4e2.js";var M=Math.floor,R=Math.random;function L(t,a){return t+M(R()*(a-t+1))}var H=parseFloat,J=Math.min,W=Math.random;function P(t,a,e){if(e&&typeof e!="boolean"&&I(t,a,e)&&(a=e=void 0),e===void 0&&(typeof a=="boolean"?(e=a,a=void 0):typeof t=="boolean"&&(e=t,t=void 0)),t===void 0&&a===void 0?(t=0,a=1):(t=v(t),a===void 0?(a=t,t=0):a=v(a)),t>a){var c=t;t=a,a=c}if(e||t%1||a%1){var u=W();return J(t+u*(a-t+H("1e-"+((u+"").length-1))),a)}return L(t,a)}const Y=D("",4),$=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),G=D("",3),K=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),X=D("",3),Q=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),Z=D("",4),ss=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),ns=D("",3),as=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),os=D("",3),ls=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),ps=D("",3),ts=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),es=D("",12),on=JSON.parse('{"title":"PDF Objects · Components","description":"Add object to PDF Viewer","frontmatter":{"title":"PDF Objects · Components","description":"Add object to PDF Viewer"},"headers":[],"relativePath":"components/pdf-object/index.md","filePath":"components/pdf-object/index.md"}'),cs={name:"components/pdf-object/index.md"},ln=Object.assign(cs,{setup(t){const a=m({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),e=m({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),c=m({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),u=m([]);function T(){u.push({_id:Symbol("ObjectId"),page:void 0,x:void 0,y:void 0,width:void 0,height:void 0})}function B(q){u.splice(q,1)}const f=x(!1),E=x(P(6,11,0));function S(){f.value&&(f.value=!1),N(()=>{E.value=P(6,11,0),f.value=!0})}return(q,l)=>{const F=U("preview");return b(),j("div",null,[Y,p(F,null,{default:o(()=>[p(y,{src:n(d)},{default:o(()=>[p(i,{page:n(a).page,"onUpdate:page":l[0]||(l[0]=s=>n(a).page=s),x:n(a).x,"onUpdate:x":l[1]||(l[1]=s=>n(a).x=s),y:n(a).y,"onUpdate:y":l[2]||(l[2]=s=>n(a).y=s),width:n(a).width,"onUpdate:width":l[3]||(l[3]=s=>n(a).width=s),height:n(a).height,"onUpdate:height":l[4]||(l[4]=s=>n(a).height=s)},{default:o(()=>[$]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),G,p(F,null,{default:o(()=>[p(y,{src:n(d)},{header:o(()=>[p(g,{color:"primary",class:"float-right my-4",onClick:T},{default:o(()=>[h(" Add Object ")]),_:1})]),default:o(()=>[(b(!0),j(V,null,O(n(u),(s,k)=>(b(),w(i,{key:s._id,page:s.page,"onUpdate:page":r=>s.page=r,x:s.x,"onUpdate:x":r=>s.x=r,y:s.y,"onUpdate:y":r=>s.y=r,width:s.width,"onUpdate:width":r=>s.width=r,height:s.height,"onUpdate:height":r=>s.height=r},{default:o(()=>[K,p(A,null,{default:o(()=>[p(g,{size:"sm",icon:"",color:"danger",onClick:r=>B(k)},{default:o(()=>[p(_)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["page","onUpdate:page","x","onUpdate:x","y","onUpdate:y","width","onUpdate:width","height","onUpdate:height"]))),128))]),_:1},8,["src"])]),_:1}),X,p(F,null,{default:o(()=>[p(y,{src:n(d)},{default:o(()=>[p(i,{page:1,x:100,y:100,width:198,height:106},{default:o(()=>[Q,p(A,{position:"left"},{default:o(()=>[h(" This is Addon ")]),_:1}),p(A,{position:"top"},{default:o(()=>[h(" Drag to move ")]),_:1}),p(A,{position:"right"},{default:o(()=>[p(g,{size:"sm",icon:"",color:"danger"},{default:o(()=>[p(_)]),_:1})]),_:1}),p(A,{position:"bottom"},{default:o(()=>[h(" Drag the handle to resize ")]),_:1})]),_:1})]),_:1},8,["src"])]),_:1}),Z,p(g,{onClick:S},{default:o(()=>[h("Test")]),_:1}),p(F,null,{default:o(()=>[p(y,{src:n(d)},{default:o(()=>[n(f)?(b(),w(i,{key:0,page:n(E),x:100,y:100,width:198,height:106,autofocus:""},{default:o(()=>[ss]),_:1},8,["page"])):z("",!0)]),_:1},8,["src"])]),_:1}),ns,p(F,null,{default:o(()=>[p(y,{src:n(d)},{default:o(()=>[p(i,{page:n(e).page,"onUpdate:page":l[5]||(l[5]=s=>n(e).page=s),x:n(e).x,"onUpdate:x":l[6]||(l[6]=s=>n(e).x=s),y:n(e).y,"onUpdate:y":l[7]||(l[7]=s=>n(e).y=s),width:n(e).width,"onUpdate:width":l[8]||(l[8]=s=>n(e).width=s),height:n(e).height,"onUpdate:height":l[9]||(l[9]=s=>n(e).height=s),debug:""},{default:o(()=>[as]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),os,p(F,null,{default:o(()=>[p(y,{src:n(d)},{default:o(()=>[p(i,{page:1,x:400,y:300,width:198,height:106,moveable:!1},{default:o(()=>[ls]),_:1})]),_:1},8,["src"])]),_:1}),ps,p(F,null,{default:o(()=>[p(y,{src:n(d)},{default:o(()=>[p(i,{page:n(c).page,"onUpdate:page":l[10]||(l[10]=s=>n(c).page=s),x:n(c).x,"onUpdate:x":l[11]||(l[11]=s=>n(c).x=s),y:n(c).y,"onUpdate:y":l[12]||(l[12]=s=>n(c).y=s),width:n(c).width,"onUpdate:width":l[13]||(l[13]=s=>n(c).width=s),height:n(c).height,"onUpdate:height":l[14]||(l[14]=s=>n(c).height=s),resizable:!1},{default:o(()=>[ts]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),es])}}});export{on as __pageData,ln as default};