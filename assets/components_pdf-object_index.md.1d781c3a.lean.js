import{p as y,F as d}from"./chunks/Calibrator-v3.50b64f59.js";import{p as i}from"./chunks/PdfObject.c19a14e5.js";import{p as A}from"./chunks/PdfObjectAddon.32b53410.js";import{p as g}from"./chunks/Button.a56dbb16.js";import{I as _}from"./chunks/16.2fd7bce7.js";import{e as I}from"./chunks/memoize.8367968b.js";import{i as U,a as V}from"./chunks/isArrayLike.1bec32f4.js";import{i as N}from"./chunks/toNumber.09abc7f0.js";import{a as v}from"./chunks/toInteger.cccd26ae.js";import{a7 as b,g as x,r as O,o as m,c as j,a as p,w as l,b as D,K as z,u as s,e as h,F as M,y as R,q as w,t as L,m as C}from"./app.4fb2ad69.js";import"./chunks/index.243397a9.js";import"./chunks/index.7883a82b.js";import"./chunks/index.1d18dab0.js";import"./chunks/16.6dbb3eba.js";import"./chunks/utils-6ba05f5b.f88ae4a8.js";import"./chunks/16.0703a251.js";import"./chunks/Divider.e635e208.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.df80e0be.js";import"./chunks/Select.fd7f3087.js";import"./chunks/Dropdown.bc4b717b.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.18548c66.js";import"./chunks/use-focus.a4b3f3c4.js";import"./chunks/floating-ui.dom.esm.9d13274a.js";import"./chunks/index.944df9fb.js";import"./chunks/Input.ddd0b8fb.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.df339a30.js";import"./chunks/index.a3ecab28.js";import"./chunks/SpinnerRing.54ed9046.js";import"./chunks/adapter.e69dfb4a.js";import"./chunks/use-loading.96d01f26.js";import"./chunks/value.830bdabd.js";import"./chunks/focus.419a5f01.js";import"./chunks/index.4b466a65.js";import"./chunks/debounce.425ad733.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/toString.9cda75b1.js";import"./chunks/isArray.513c67aa.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.ccb39504.js";function H(t,a,e){if(!N(e))return!1;var c=typeof a;return(c=="number"?U(e)&&V(a,e.length):c=="string"&&a in e)?I(e[a],t):!1}var W=Math.floor,Y=Math.random;function $(t,a){return t+W(Y()*(a-t+1))}var J=parseFloat,K=Math.min,G=Math.random;function T(t,a,e){if(e&&typeof e!="boolean"&&H(t,a,e)&&(a=e=void 0),e===void 0&&(typeof a=="boolean"?(e=a,a=void 0):typeof t=="boolean"&&(e=t,t=void 0)),t===void 0&&a===void 0?(t=0,a=1):(t=v(t),a===void 0?(a=t,t=0):a=v(a)),t>a){var c=t;t=a,a=c}if(e||t%1||a%1){var u=G();return K(t+u*(a-t+J("1e-"+((u+"").length-1))),a)}return $(t,a)}const Q=D("",4),X=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),Z=D("",3),ss=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),ns=D("",3),as=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),ls=D("",4),os=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),ps=D("",3),es=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),ts=D("",3),cs=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),rs=D("",3),Ds=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),Fs=D("",12),Xs=JSON.parse('{"title":"PDF Objects · Components","description":"Add object to PDF Viewer","frontmatter":{"title":"PDF Objects · Components","description":"Add object to PDF Viewer"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Object Addon","slug":"object-addon","link":"#object-addon","children":[{"level":3,"title":"Addon Position","slug":"addon-position","link":"#addon-position","children":[]}]},{"level":2,"title":"Autofocus","slug":"autofocus","link":"#autofocus","children":[]},{"level":2,"title":"Debug Mode","slug":"debug-mode","link":"#debug-mode","children":[]},{"level":2,"title":"Disabled Move","slug":"disabled-move","link":"#disabled-move","children":[]},{"level":2,"title":"Disabled Resize","slug":"disabled-resize","link":"#disabled-resize","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-pdf-object>","slug":"props-p-pdf-object","link":"#props-p-pdf-object","children":[]},{"level":3,"title":"Slots <p-pdf-object>","slug":"slots-p-pdf-object","link":"#slots-p-pdf-object","children":[]},{"level":3,"title":"Props <p-pdf-object-addon>","slug":"props-p-pdf-object-addon","link":"#props-p-pdf-object-addon","children":[]},{"level":3,"title":"Slots <p-pdf-object-addon>","slug":"slots-p-pdf-object-addon","link":"#slots-p-pdf-object-addon","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/pdf-object/index.md"}'),ys={name:"components/pdf-object/index.md"},Zs=Object.assign(ys,{setup(t){const a=b({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),e=b({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),c=b({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),u=b([]);function B(){u.push({_id:Symbol("ObjectId"),page:void 0,x:void 0,y:void 0,width:void 0,height:void 0})}function P(q){u.splice(q,1)}const f=x(!1),E=x(T(6,11,0));function S(){f.value&&(f.value=!1),z(()=>{E.value=T(6,11,0),f.value=!0})}return(q,o)=>{const F=O("preview");return m(),j("div",null,[Q,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:s(a).page,"onUpdate:page":o[0]||(o[0]=n=>s(a).page=n),x:s(a).x,"onUpdate:x":o[1]||(o[1]=n=>s(a).x=n),y:s(a).y,"onUpdate:y":o[2]||(o[2]=n=>s(a).y=n),width:s(a).width,"onUpdate:width":o[3]||(o[3]=n=>s(a).width=n),height:s(a).height,"onUpdate:height":o[4]||(o[4]=n=>s(a).height=n)},{default:l(()=>[X]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),Z,p(F,null,{default:l(()=>[p(y,{src:s(d)},{header:l(()=>[p(g,{color:"primary",class:"float-right my-4",onClick:B},{default:l(()=>[h(" Add Object ")]),_:1})]),default:l(()=>[(m(!0),j(M,null,R(s(u),(n,k)=>(m(),w(i,{key:n._id,page:n.page,"onUpdate:page":r=>n.page=r,x:n.x,"onUpdate:x":r=>n.x=r,y:n.y,"onUpdate:y":r=>n.y=r,width:n.width,"onUpdate:width":r=>n.width=r,height:n.height,"onUpdate:height":r=>n.height=r},{default:l(()=>[ss,p(A,null,{default:l(()=>[p(g,{size:"sm",icon:"",color:"danger",onClick:r=>P(k)},{default:l(()=>[p(s(_))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["page","onUpdate:page","x","onUpdate:x","y","onUpdate:y","width","onUpdate:width","height","onUpdate:height"]))),128))]),_:1},8,["src"])]),_:1}),ns,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:1,x:100,y:100,width:198,height:106},{default:l(()=>[as,p(A,{position:"left"},{default:l(()=>[h(" This is Addon ")]),_:1}),p(A,{position:"top"},{default:l(()=>[h(" Drag to move ")]),_:1}),p(A,{position:"right"},{default:l(()=>[p(g,{size:"sm",icon:"",color:"danger"},{default:l(()=>[p(s(_))]),_:1})]),_:1}),p(A,{position:"bottom"},{default:l(()=>[h(" Drag the handle to resize ")]),_:1})]),_:1})]),_:1},8,["src"])]),_:1}),ls,p(g,{onClick:S},{default:l(()=>[h("Test")]),_:1}),p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[s(f)?(m(),w(i,{key:0,page:s(E),x:100,y:100,width:198,height:106,autofocus:""},{default:l(()=>[os]),_:1},8,["page"])):L("",!0)]),_:1},8,["src"])]),_:1}),ps,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:s(e).page,"onUpdate:page":o[5]||(o[5]=n=>s(e).page=n),x:s(e).x,"onUpdate:x":o[6]||(o[6]=n=>s(e).x=n),y:s(e).y,"onUpdate:y":o[7]||(o[7]=n=>s(e).y=n),width:s(e).width,"onUpdate:width":o[8]||(o[8]=n=>s(e).width=n),height:s(e).height,"onUpdate:height":o[9]||(o[9]=n=>s(e).height=n),debug:""},{default:l(()=>[es]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),ts,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:1,x:400,y:300,width:198,height:106,moveable:!1},{default:l(()=>[cs]),_:1})]),_:1},8,["src"])]),_:1}),rs,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:s(c).page,"onUpdate:page":o[10]||(o[10]=n=>s(c).page=n),x:s(c).x,"onUpdate:x":o[11]||(o[11]=n=>s(c).x=n),y:s(c).y,"onUpdate:y":o[12]||(o[12]=n=>s(c).y=n),width:s(c).width,"onUpdate:width":o[13]||(o[13]=n=>s(c).width=n),height:s(c).height,"onUpdate:height":o[14]||(o[14]=n=>s(c).height=n),resizable:!1},{default:l(()=>[Ds]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),Fs])}}});export{Xs as __pageData,Zs as default};
