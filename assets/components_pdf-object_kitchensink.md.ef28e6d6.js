import{p as c}from"./chunks/Button.c0b369e2.js";import{F as d,p as w}from"./chunks/Calibrator-v3.f61f364d.js";import{p as k}from"./chunks/PdfObject.3ac9142d.js";import{r as g,ab as S,K as I,p as x,M as p,I as o,Y as j,x as n,y as u,u as r,i as U,F as h,z as v,G as O,V as P,H as V}from"./chunks/framework.d1aba3cb.js";import"./chunks/index.a3ecab28.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/index.92d4f4ef.js";import"./chunks/theme.0ede34c8.js";import"./chunks/16.f478a875.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/utils-6ba05f5b.bfd05ad6.js";import"./chunks/Dropdown.c220ed08.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.0481f507.js";import"./chunks/use-focus.f1095479.js";import"./chunks/baseClamp.947838b9.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/floating-ui.dom.browser.min.b27d3e90.js";import"./chunks/index.7ec55cbf.js";import"./chunks/Divider.e543b6d1.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Select.2d223c95.js";import"./chunks/Input.a21aeee6.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/SpinnerRing.55dd865f.js";import"./chunks/adapter.85cbf921.js";import"./chunks/use-loading.da160747.js";import"./chunks/defu.573334b8.js";import"./chunks/value.830bdabd.js";import"./chunks/Heading.c8201bb3.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/use-selector.abeef505.js";import"./chunks/focus.ec676fab.js";import"./chunks/index.9c163825.js";import"./chunks/debounce.425ad733.js";import"./chunks/toInteger.cccd26ae.js";import"./chunks/toString.314d06e3.js";import"./chunks/isArray.513c67aa.js";import"./chunks/memoize.19554dab.js";import"./chunks/eq.83a0dc05.js";const C="/design-system/assets/sample.51b9171f.pdf",F=j('<h1 id="pdf-viewer" tabindex="-1">PDF Viewer <a class="header-anchor" href="#pdf-viewer" aria-label="Permalink to &quot;PDF Viewer&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',3),N=["width","height","src"],Se=JSON.parse('{"title":"PDF Viewer","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"components/pdf-object/kitchensink.md","filePath":"components/pdf-object/kitchensink.md"}'),T={name:"components/pdf-object/kitchensink.md"},Ie=Object.assign(T,{setup(q){const i=g(1),l=g(d),s=S([{_key:Symbol("ObjectId"),text:"",page:6,x:0,y:0,width:198,height:106,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:6,x:596,y:0,width:198,height:106,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:6,x:0,y:1017.333,width:198,height:106,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:6,x:596,y:1017.333,width:198,height:106,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:10,x:50,y:100,width:99,height:53,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:10,x:50,y:250,width:53,height:53,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:10,x:400,y:400,width:118.79,height:118.79,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:10,x:50,y:700,width:396,height:212,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:10,x:500,y:700,width:212,height:212,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:11,x:48,y:974,width:100,height:100,fixed:!1},{_key:Symbol("ObjectId"),text:"",page:11,x:645,y:974,width:100,height:100,fixed:!1}]);function y(){l.value=l.value===d?C:d}async function _(){s.push({_key:Symbol("ObjectId"),text:"",page:void 0,x:void 0,y:void 0,width:198,height:106,fixed:!1})}function m(f){i.value+=f}return(f,a)=>{const b=I("preview");return n(),x("div",null,[F,p(c,{onClick:a[0]||(a[0]=e=>m(.1))},{default:o(()=>[u(" Zoom In ")]),_:1}),p(c,{onClick:a[1]||(a[1]=e=>m(-.1))},{default:o(()=>[u(" Zoom Out ")]),_:1}),p(b,null,{default:o(()=>[p(w,{layout:"fit","offset-top":72,src:r(d),scale:r(i),"onUpdate:scale":a[2]||(a[2]=e=>U(i)?i.value=e:null)},{navbar:o(()=>[h("button",{onClick:y},"NGanu"),h("button",{onClick:_},"Add ("+v(r(s).length)+")",1)]),default:o(()=>[(n(!0),x(O,null,P(r(s),e=>(n(),V(k,{key:e.key,text:e.text,"onUpdate:text":t=>e.text=t,page:e.page,"onUpdate:page":t=>e.page=t,width:e.width,"onUpdate:width":t=>e.width=t,height:e.height,"onUpdate:height":t=>e.height=t,x:e.x,"onUpdate:x":t=>e.x=t,y:e.y,"onUpdate:y":t=>e.y=t},{default:o(()=>[h("img",{class:"w-full h-full",width:e.width,height:e.height,src:`https://via.placeholder.com/${Math.round(e.width)}x${Math.round(e.height)}/77AB59/fff`},null,8,N)]),_:2},1032,["text","onUpdate:text","page","onUpdate:page","width","onUpdate:width","height","onUpdate:height","x","onUpdate:x","y","onUpdate:y"]))),128))]),_:1},8,["src","scale"])]),_:1})])}}});export{Se as __pageData,Ie as default};
