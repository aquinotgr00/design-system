import{_ as P,i as q,z as k,C as V,D as m,k as _,a1 as $,l as w,m as M,S as N,W as I,f as v,V as R,d as B,o as S,c as T,g,h as E,n as J,r as G,a as s,w as l,b as d}from"./app.9fa2f258.js";import{c as x}from"./chunks/color-hash.fa715313.js";import{f as h}from"./chunks/vnode.bf6d5776.js";import{s as A}from"./chunks/startCase.ede24ebf.js";import{p as z}from"./chunks/index.a9a096d0.js";import"./chunks/toString.11fb0831.js";import"./chunks/isObjectLike.bee3dca1.js";import"./chunks/isArray.81deb5cd.js";import"./chunks/isSymbol.467490bf.js";const f={getDatasets(n){var r;const D=h(n,"ChartSet"),o=new Map,p=[];for(const e of D){const u=h(e.children.default(),"ChartVal");for(const c of u){const F=o.get(c.props.name),y=(r=c.props.color)!=null?r:x(c.props.name).at(1);F?(F.data.push(c.props.value),F.borderColor.push(y),F.backgroundColor.push(y)):o.set(c.props.name,{label:A(c.props.name),data:[c.props.value],borderColor:[y],backgroundColor:[y]})}p.push(A(e.props.name))}return{labels:p,datasets:[...o.values()]}},getStyle(){return{scales:{x:{ticks:{color:"#9CA3AF",font:{family:"DM Sans",size:12,weight:"600"}},grid:{borderColor:"#BFBFBF"}},y:{ticks:{color:"#9CA3AF",font:{family:"DM Sans",size:12,weight:"600"}},grid:{borderColor:"#BFBFBF",borderDash:[4]}}}}}},L={getDatasets(n){var r;const D=h(n,"ChartSet"),o=new Map,p=[];for(const e of D){const u=h(e.children.default(),"ChartVal");for(const c of u){const F=o.get(e.props.name),y=(r=c.props.color)!=null?r:x(c.props.name).at(1);F?(F.data.push(c.props.value),F.backgroundColor.push(y)):o.set(e.props.name,{label:A(e.props.name),data:[c.props.value],backgroundColor:[y]}),p.push(A(c.props.name))}}return{labels:p,datasets:[...o.values()]}},getStyle(){return{}}},U={line:f,bar:f,pie:L};function b(n){return U[n]}async function O(n,D,o,p){const{default:r}=await P(()=>import("./chunks/auto.c5c1731e.js"),[]);return new r(n,{type:D,data:o,options:p})}const H=q({directives:{pAspectRatio:z},props:{variant:{type:String,default:"line"},legend:{type:String,default:"bottom"}},setup(n,{slots:D}){const o=k(),p=V("canvas"),r=m(n,"variant"),e=m(n,"legend"),u=_(()=>{const C=[];return n.variant&&C.push(`chart--${n.variant}`),n.legend&&C.push(`chart--${n.legend}`),C}),c=_(()=>b(r.value).getDatasets(D.default()));async function F(){o.value&&o.value.destroy(),o.value=await O(p.value,r.value,c.value,{plugins:{legend:{display:e.value!=="none",position:e.value!=="none"?e.value:void 0,labels:{color:"#9CA3AF",font:{family:"DM Sans",size:12,weight:"600"}}}},...b(r.value).getStyle()})}const y=$(c,C=>{o.value&&(o.value.data=C,o.value.update())});return w([r,e],async()=>{y.pause(),await F(),await I(),y.resume()},{flush:"pre"}),M(()=>{F()}),N(()=>{o.value&&o.value.destroy()}),{canvas:p,classNames:u}}});const W={ref:"canvas","data-testid":"chart-canvas",class:"chart__canvas"};function j(n,D,o,p,r,e){const u=R("p-aspect-ratio");return B((S(),T("div",{class:J(["chart",n.classNames]),"data-testid":"chart"},[g(n.$slots,"default"),E("canvas",W,null,512)],2)),[[u,16/9]])}const i=v(H,[["render",j]]),Y=q({name:"ChartSet",props:{name:{type:[String,Number],required:!0}}});function K(n,D,o,p,r,e){return g(n.$slots,"default")}const t=v(Y,[["render",K]]),Q=q({name:"ChartVal",props:{name:{type:[String,Number],required:!0},value:{type:[String,Number],required:!0},color:{type:String,default:void 0}}});function X(n,D,o,p,r,e){return g(n.$slots,"default")}const a=v(Q,[["render",X]]),Z=d("",3),ss=d("",4),as=d("",2),ls=d("",2),ns={class:"w-1/2"},os=d("",3),ps={class:"grid grid-cols-2 gap-2"},ts=d("",14),hs=JSON.parse('{"title":"Chart","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[{"level":3,"title":"type line","slug":"type-line","link":"#type-line","children":[]},{"level":3,"title":"type bar","slug":"type-bar","link":"#type-bar","children":[]},{"level":3,"title":"type pie","slug":"type-pie","link":"#type-pie","children":[]}]},{"level":2,"title":"Legend position","slug":"legend-position","link":"#legend-position","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-chart>","slug":"props-p-chart","link":"#props-p-chart","children":[]},{"level":3,"title":"Slots <p-chart>","slug":"slots-p-chart","link":"#slots-p-chart","children":[]},{"level":3,"title":"Props <p-chart-set>","slug":"props-p-chart-set","link":"#props-p-chart-set","children":[]},{"level":3,"title":"Slots <p-chart-set>","slug":"slots-p-chart-set","link":"#slots-p-chart-set","children":[]},{"level":3,"title":"Props <p-chart-val>","slug":"props-p-chart-val","link":"#props-p-chart-val","children":[]},{"level":3,"title":"Slots <p-chart-val>","slug":"slots-p-chart-val","link":"#slots-p-chart-val","children":[]}]}],"relativePath":"components/chart/index.md"}'),es={name:"components/chart/index.md"},As=Object.assign(es,{setup(n){return(D,o)=>{const p=G("preview");return S(),T("div",null,[Z,s(p,null,{default:l(()=>[s(i,null,{default:l(()=>[s(t,{name:"January"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"30"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"February"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"20"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"March"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"100"}),s(a,{name:"failed",color:"#e42e2c",value:"25"})]),_:1}),s(t,{name:"April"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"80"}),s(a,{name:"failed",color:"#e42e2c",value:"20"})]),_:1}),s(t,{name:"May"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"150"}),s(a,{name:"failed",color:"#e42e2c",value:"30"})]),_:1})]),_:1})]),_:1}),ss,s(p,null,{default:l(()=>[s(i,{variant:"line"},{default:l(()=>[s(t,{name:"January"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"30"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"February"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"20"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"March"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"100"}),s(a,{name:"failed",color:"#e42e2c",value:"25"})]),_:1}),s(t,{name:"April"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"80"}),s(a,{name:"failed",color:"#e42e2c",value:"20"})]),_:1}),s(t,{name:"May"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"150"}),s(a,{name:"failed",color:"#e42e2c",value:"30"})]),_:1})]),_:1})]),_:1}),as,s(p,null,{default:l(()=>[s(i,{variant:"bar"},{default:l(()=>[s(t,{name:"January"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"30"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"February"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"20"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"March"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"100"}),s(a,{name:"failed",color:"#e42e2c",value:"25"})]),_:1}),s(t,{name:"April"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"80"}),s(a,{name:"failed",color:"#e42e2c",value:"20"})]),_:1}),s(t,{name:"May"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"150"}),s(a,{name:"failed",color:"#e42e2c",value:"30"})]),_:1})]),_:1})]),_:1}),ls,s(p,null,{default:l(()=>[E("div",ns,[s(i,{variant:"pie"},{default:l(()=>[s(t,{name:"Gender"},{default:l(()=>[s(a,{name:"male",value:"49",color:"#408bdd"}),s(a,{name:"female",value:"61",color:"#eb6261"})]),_:1})]),_:1})])]),_:1}),os,s(p,null,{default:l(()=>[E("div",ps,[s(i,{variant:"pie",legend:"left"},{default:l(()=>[s(t,{name:"Gender"},{default:l(()=>[s(a,{name:"male",value:"49",color:"#408bdd"}),s(a,{name:"female",value:"61",color:"#eb6261"})]),_:1})]),_:1}),s(i,{variant:"pie",legend:"right"},{default:l(()=>[s(t,{name:"Gender"},{default:l(()=>[s(a,{name:"male",value:"49",color:"#408bdd"}),s(a,{name:"female",value:"61",color:"#eb6261"})]),_:1})]),_:1})])]),_:1}),ts])}}});export{hs as __pageData,As as default};
