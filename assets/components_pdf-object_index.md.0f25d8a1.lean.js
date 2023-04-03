import{p as y,F as d}from"./chunks/Calibrator-v3.167629ce.js";import{p as i}from"./chunks/PdfObject.925e8750.js";import{p as A}from"./chunks/PdfObjectAddon.fcde3bb9.js";import{p as g}from"./chunks/Button.c45fb4d8.js";import{I as _}from"./chunks/16.f3fd109d.js";import{e as I}from"./chunks/memoize.8367968b.js";import{i as U,a as V}from"./chunks/isArrayLike.1bec32f4.js";import{i as N}from"./chunks/toNumber.09abc7f0.js";import{a as v}from"./chunks/toInteger.cccd26ae.js";import{ac as m,h as x,B as O,o as b,c as j,D as p,z as l,Q as D,k as z,b as s,a as h,F as M,M as R,y as w,A as L,x as C}from"./chunks/framework.76afac0a.js";import"./chunks/index.7b7086ea.js";import"./chunks/index.f92bfe5e.js";import"./chunks/index.d997e305.js";import"./chunks/16.a0c7c87a.js";import"./chunks/utils-6ba05f5b.d8ec137d.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/16.2c528cc2.js";import"./chunks/Divider.f2a95fe6.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.3abc8bc6.js";import"./chunks/Select.d38de196.js";import"./chunks/Dropdown.94bcdc45.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.de09ff90.js";import"./chunks/use-focus.ae494a4f.js";import"./chunks/floating-ui.dom.browser.min.3a6ea315.js";import"./chunks/index.66044519.js";import"./chunks/Input.b10f36db.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.c13e464c.js";import"./chunks/index.a3ecab28.js";import"./chunks/SpinnerRing.73d8afc0.js";import"./chunks/adapter.321e1859.js";import"./chunks/use-loading.6bc9adf9.js";import"./chunks/defu.573334b8.js";import"./chunks/value.830bdabd.js";import"./chunks/focus.419a5f01.js";import"./chunks/index.c7a185b2.js";import"./chunks/debounce.425ad733.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/toString.9cda75b1.js";import"./chunks/isArray.513c67aa.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.3d0b80e1.js";function H(e,a,t){if(!N(t))return!1;var c=typeof a;return(c=="number"?U(t)&&V(a,t.length):c=="string"&&a in t)?I(t[a],e):!1}var W=Math.floor,Y=Math.random;function $(e,a){return e+W(Y()*(a-e+1))}var J=parseFloat,Q=Math.min,G=Math.random;function P(e,a,t){if(t&&typeof t!="boolean"&&H(e,a,t)&&(a=t=void 0),t===void 0&&(typeof a=="boolean"?(t=a,a=void 0):typeof e=="boolean"&&(t=e,e=void 0)),e===void 0&&a===void 0?(e=0,a=1):(e=v(e),a===void 0?(a=e,e=0):a=v(a)),e>a){var c=e;e=a,a=c}if(t||e%1||a%1){var u=G();return Q(e+u*(a-e+J("1e-"+((u+"").length-1))),a)}return $(e,a)}const K=D("",4),X=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),Z=D("",3),ss=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),ns=D("",3),as=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),ls=D("",4),os=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),ps=D("",3),ts=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/198x106/23B242/ffffff"},null,-1),es=D("",3),cs=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),rs=D("",3),Ds=C("img",{class:"w-full h-full rounded",src:"https://via.placeholder.com/430x230/23B242/ffffff"},null,-1),Fs=D("",12),sn=JSON.parse('{"title":"PDF Objects · Components","description":"Add object to PDF Viewer","frontmatter":{"title":"PDF Objects · Components","description":"Add object to PDF Viewer"},"headers":[],"relativePath":"components/pdf-object/index.md"}'),ys={name:"components/pdf-object/index.md"},nn=Object.assign(ys,{setup(e){const a=m({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),t=m({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),c=m({page:void 0,x:void 0,y:void 0,width:void 0,height:void 0}),u=m([]);function T(){u.push({_id:Symbol("ObjectId"),page:void 0,x:void 0,y:void 0,width:void 0,height:void 0})}function B(q){u.splice(q,1)}const f=x(!1),E=x(P(6,11,0));function k(){f.value&&(f.value=!1),z(()=>{E.value=P(6,11,0),f.value=!0})}return(q,o)=>{const F=O("preview");return b(),j("div",null,[K,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:s(a).page,"onUpdate:page":o[0]||(o[0]=n=>s(a).page=n),x:s(a).x,"onUpdate:x":o[1]||(o[1]=n=>s(a).x=n),y:s(a).y,"onUpdate:y":o[2]||(o[2]=n=>s(a).y=n),width:s(a).width,"onUpdate:width":o[3]||(o[3]=n=>s(a).width=n),height:s(a).height,"onUpdate:height":o[4]||(o[4]=n=>s(a).height=n)},{default:l(()=>[X]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),Z,p(F,null,{default:l(()=>[p(y,{src:s(d)},{header:l(()=>[p(g,{color:"primary",class:"float-right my-4",onClick:T},{default:l(()=>[h(" Add Object ")]),_:1})]),default:l(()=>[(b(!0),j(M,null,R(s(u),(n,S)=>(b(),w(i,{key:n._id,page:n.page,"onUpdate:page":r=>n.page=r,x:n.x,"onUpdate:x":r=>n.x=r,y:n.y,"onUpdate:y":r=>n.y=r,width:n.width,"onUpdate:width":r=>n.width=r,height:n.height,"onUpdate:height":r=>n.height=r},{default:l(()=>[ss,p(A,null,{default:l(()=>[p(g,{size:"sm",icon:"",color:"danger",onClick:r=>B(S)},{default:l(()=>[p(s(_))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["page","onUpdate:page","x","onUpdate:x","y","onUpdate:y","width","onUpdate:width","height","onUpdate:height"]))),128))]),_:1},8,["src"])]),_:1}),ns,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:1,x:100,y:100,width:198,height:106},{default:l(()=>[as,p(A,{position:"left"},{default:l(()=>[h(" This is Addon ")]),_:1}),p(A,{position:"top"},{default:l(()=>[h(" Drag to move ")]),_:1}),p(A,{position:"right"},{default:l(()=>[p(g,{size:"sm",icon:"",color:"danger"},{default:l(()=>[p(s(_))]),_:1})]),_:1}),p(A,{position:"bottom"},{default:l(()=>[h(" Drag the handle to resize ")]),_:1})]),_:1})]),_:1},8,["src"])]),_:1}),ls,p(g,{onClick:k},{default:l(()=>[h("Test")]),_:1}),p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[s(f)?(b(),w(i,{key:0,page:s(E),x:100,y:100,width:198,height:106,autofocus:""},{default:l(()=>[os]),_:1},8,["page"])):L("",!0)]),_:1},8,["src"])]),_:1}),ps,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:s(t).page,"onUpdate:page":o[5]||(o[5]=n=>s(t).page=n),x:s(t).x,"onUpdate:x":o[6]||(o[6]=n=>s(t).x=n),y:s(t).y,"onUpdate:y":o[7]||(o[7]=n=>s(t).y=n),width:s(t).width,"onUpdate:width":o[8]||(o[8]=n=>s(t).width=n),height:s(t).height,"onUpdate:height":o[9]||(o[9]=n=>s(t).height=n),debug:""},{default:l(()=>[ts]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),es,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:1,x:400,y:300,width:198,height:106,moveable:!1},{default:l(()=>[cs]),_:1})]),_:1},8,["src"])]),_:1}),rs,p(F,null,{default:l(()=>[p(y,{src:s(d)},{default:l(()=>[p(i,{page:s(c).page,"onUpdate:page":o[10]||(o[10]=n=>s(c).page=n),x:s(c).x,"onUpdate:x":o[11]||(o[11]=n=>s(c).x=n),y:s(c).y,"onUpdate:y":o[12]||(o[12]=n=>s(c).y=n),width:s(c).width,"onUpdate:width":o[13]||(o[13]=n=>s(c).width=n),height:s(c).height,"onUpdate:height":o[14]||(o[14]=n=>s(c).height=n),resizable:!1},{default:l(()=>[Ds]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),Fs])}}});export{sn as __pageData,nn as default};