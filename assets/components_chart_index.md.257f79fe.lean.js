import{t as P}from"./chunks/index.744c2812.js";import{c as S}from"./chunks/color-hash.af77277d.js";import{f as C}from"./chunks/vnode.ec07542f.js";import{s as h}from"./chunks/startCase.81e2e363.js";import{_ as k,f as E,z as w,C as m,h as _,i as $,j as V,R as M,I as N,k as q,U as I,d as R,o as T,c as x,l as v,m as A,n as B,r as J,a as s,w as l,b as i}from"./app.3c0f5e00.js";import{p as G}from"./chunks/index.81e82a9c.js";import{w as U}from"./chunks/index.2c069445.js";import"./chunks/toString.401226e4.js";import"./chunks/isObjectLike.46b91259.js";import"./chunks/isArray.513c67aa.js";import"./chunks/isSymbol.b765f5ee.js";const f={getDatasets(n){const D=C(n,"ChartSet"),o=new Map,p=[];for(const e of D){const r=C(e.children.default(),"ChartVal");for(const c of r){const F=o.get(c.props.name),y=c.props.color??S(c.props.name).at(1);F?(F.data.push(c.props.value),F.borderColor.push(y),F.backgroundColor.push(y)):o.set(c.props.name,{label:h(c.props.name),data:[c.props.value],borderColor:[y],backgroundColor:[y]})}p.push(h(e.props.name))}return{labels:p,datasets:[...o.values()]}},getStyle(){return{scales:{x:{ticks:{color:"#9CA3AF",font:{family:"DM Sans",size:12,weight:"600"}},grid:{borderColor:"#BFBFBF"}},y:{ticks:{color:"#9CA3AF",font:{family:"DM Sans",size:12,weight:"600"}},grid:{borderColor:"#BFBFBF",borderDash:[4]}}}}}},z={getDatasets(n){const D=C(n,"ChartSet"),o=new Map,p=[];for(const e of D){const r=C(e.children.default(),"ChartVal");for(const c of r){const F=o.get(e.props.name),y=c.props.color??S(c.props.name).at(1);F?(F.data.push(c.props.value),F.backgroundColor.push(y)):o.set(e.props.name,{label:h(e.props.name),data:[c.props.value],backgroundColor:[y]}),p.push(h(c.props.name))}}return{labels:p,datasets:[...o.values()]}},getStyle(){return{}}},L={line:f,bar:f,pie:z};function b(n){return L[n]}async function O(n,D,o,p){const{default:e}=await k(()=>import("./chunks/auto.5494d659.js"),[]);return new e(n,{type:D,data:o,options:p})}const j=E({directives:{pAspectRatio:G},props:{variant:{type:String,default:"line"},legend:{type:String,default:"bottom"}},setup(n,{slots:D}){const o=w(),p=P("canvas"),e=m(n,"variant"),r=m(n,"legend"),c=_(()=>{const d=[];return n.variant&&d.push(`chart--${n.variant}`),n.legend&&d.push(`chart--${n.legend}`),d}),F=_(()=>b(e.value).getDatasets(D.default()));async function y(){o.value&&o.value.destroy(),o.value=await O(p.value,e.value,F.value,{plugins:{legend:{display:r.value!=="none",position:r.value==="none"?void 0:r.value,labels:{color:"#9CA3AF",font:{family:"DM Sans",size:12,weight:"600"}}}},...b(e.value).getStyle()})}const g=U(F,d=>{o.value&&(o.value.data=d,o.value.update())});return $([e,r],async()=>{g.pause(),await y(),await N(),g.resume()},{flush:"pre"}),V(()=>{y()}),M(()=>{o.value&&o.value.destroy()}),{canvas:p,classNames:c}}});const H={ref:"canvas","data-testid":"chart-canvas",class:"chart__canvas"};function W(n,D,o,p,e,r){const c=I("p-aspect-ratio");return R((T(),x("div",{class:B(["chart",n.classNames]),"data-testid":"chart"},[v(n.$slots,"default"),A("canvas",H,null,512)],2)),[[c,16/9]])}const u=q(j,[["render",W]]),Y=E({name:"ChartSet",props:{name:{type:[String,Number],required:!0}}});function K(n,D,o,p,e,r){return v(n.$slots,"default")}const t=q(Y,[["render",K]]),Q=E({name:"ChartVal",props:{name:{type:[String,Number],required:!0},value:{type:[String,Number],required:!0},color:{type:String,default:void 0}}});function X(n,D,o,p,e,r){return v(n.$slots,"default")}const a=q(Q,[["render",X]]),Z=i("",3),ss=i("",4),as=i("",2),ls=i("",2),ns={class:"w-1/2"},os=i("",3),ps={class:"grid w-full grid-cols-2 gap-2"},ts=i("",14),Es=JSON.parse('{"title":"Chart","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[{"level":3,"title":"type line","slug":"type-line","link":"#type-line","children":[]},{"level":3,"title":"type bar","slug":"type-bar","link":"#type-bar","children":[]},{"level":3,"title":"type pie","slug":"type-pie","link":"#type-pie","children":[]}]},{"level":2,"title":"Legend position","slug":"legend-position","link":"#legend-position","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props <p-chart>","slug":"props-p-chart","link":"#props-p-chart","children":[]},{"level":3,"title":"Slots <p-chart>","slug":"slots-p-chart","link":"#slots-p-chart","children":[]},{"level":3,"title":"Props <p-chart-set>","slug":"props-p-chart-set","link":"#props-p-chart-set","children":[]},{"level":3,"title":"Slots <p-chart-set>","slug":"slots-p-chart-set","link":"#slots-p-chart-set","children":[]},{"level":3,"title":"Props <p-chart-val>","slug":"props-p-chart-val","link":"#props-p-chart-val","children":[]},{"level":3,"title":"Slots <p-chart-val>","slug":"slots-p-chart-val","link":"#slots-p-chart-val","children":[]}]}],"relativePath":"components/chart/index.md"}'),es={name:"components/chart/index.md"},qs=Object.assign(es,{setup(n){return(D,o)=>{const p=J("preview");return T(),x("div",null,[Z,s(p,null,{default:l(()=>[s(u,null,{default:l(()=>[s(t,{name:"January"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"30"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"February"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"20"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"March"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"100"}),s(a,{name:"failed",color:"#e42e2c",value:"25"})]),_:1}),s(t,{name:"April"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"80"}),s(a,{name:"failed",color:"#e42e2c",value:"20"})]),_:1}),s(t,{name:"May"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"150"}),s(a,{name:"failed",color:"#e42e2c",value:"30"})]),_:1})]),_:1})]),_:1}),ss,s(p,null,{default:l(()=>[s(u,{variant:"line"},{default:l(()=>[s(t,{name:"January"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"30"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"February"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"20"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"March"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"100"}),s(a,{name:"failed",color:"#e42e2c",value:"25"})]),_:1}),s(t,{name:"April"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"80"}),s(a,{name:"failed",color:"#e42e2c",value:"20"})]),_:1}),s(t,{name:"May"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"150"}),s(a,{name:"failed",color:"#e42e2c",value:"30"})]),_:1})]),_:1})]),_:1}),as,s(p,null,{default:l(()=>[s(u,{variant:"bar"},{default:l(()=>[s(t,{name:"January"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"30"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"February"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"20"}),s(a,{name:"failed",color:"#e42e2c",value:"10"})]),_:1}),s(t,{name:"March"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"100"}),s(a,{name:"failed",color:"#e42e2c",value:"25"})]),_:1}),s(t,{name:"April"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"80"}),s(a,{name:"failed",color:"#e42e2c",value:"20"})]),_:1}),s(t,{name:"May"},{default:l(()=>[s(a,{name:"success",color:"#23b242",value:"150"}),s(a,{name:"failed",color:"#e42e2c",value:"30"})]),_:1})]),_:1})]),_:1}),ls,s(p,null,{default:l(()=>[A("div",ns,[s(u,{variant:"pie"},{default:l(()=>[s(t,{name:"Gender"},{default:l(()=>[s(a,{name:"male",value:"49",color:"#408bdd"}),s(a,{name:"female",value:"61",color:"#eb6261"})]),_:1})]),_:1})])]),_:1}),os,s(p,null,{default:l(()=>[A("div",ps,[s(u,{variant:"pie",legend:"left"},{default:l(()=>[s(t,{name:"Gender"},{default:l(()=>[s(a,{name:"male",value:"49",color:"#408bdd"}),s(a,{name:"female",value:"61",color:"#eb6261"})]),_:1})]),_:1}),s(u,{variant:"pie",legend:"right"},{default:l(()=>[s(t,{name:"Gender"},{default:l(()=>[s(a,{name:"male",value:"49",color:"#408bdd"}),s(a,{name:"female",value:"61",color:"#eb6261"})]),_:1})]),_:1})])]),_:1}),ts])}}});export{Es as __pageData,qs as default};