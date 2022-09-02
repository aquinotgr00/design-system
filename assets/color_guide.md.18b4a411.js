import{d as r,_ as n,b as i,f as e,P as B,e as c,a as d,j as g,n as E,K as p,L as C,g as _,h as a,k as l,t as u,u as f,i as x,l as m}from"./app.2d74820a.js";const w=r({props:{color:{type:Object,default:()=>({})}}}),v={"data-testid":"color",class:"space-y-1.5 color"},k={class:"px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0"},y={class:"w-16 text-xs tracking-tight 2xl:w-full dark:text-white"},$={class:"font-mono text-xs tracking-tight lowercase"};function S(t,b,F,o,h,D){return d(),i("div",v,[e("div",{class:"w-full h-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10",style:B({background:t.color.code,border:t.color.border})},null,4),e("div",k,[e("div",y,[c(t.$slots,"subtitle")]),e("div",$,[c(t.$slots,"code")])])])}var L=n(w,[["render",S]]);const T=r({components:{Color:L},props:{item:{type:Object,default:()=>({})}}}),j={"data-testid":"colors",class:"colors"},O={class:"flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4 mb-5"},P={class:"w-20 shrink-0"},V={class:"h-10 flex flex-col justify-center"},G={class:"text-sm font-semibold text-slate-900 dark:text-slate-200"};function H(t,b,F,o,h,D){const A=g("Color");return d(),i("div",j,[e("div",O,[e("div",P,[e("div",V,[e("div",G,[c(t.$slots,"default")])])]),e("div",{class:E(["min-w-0 flex-1 grid gap-x-4 gap-y-3 2xl:gap-x-2",t.item.grid===2?"grid-cols-2":"grid-cols-5"])},[(d(!0),i(p,null,C(t.item.data,s=>(d(),i("span",{key:s.id},[_(A,{color:s},{subtitle:a(()=>[l(u(s.subtitle),1)]),code:a(()=>[l(u(s.code),1)]),_:2},1032,["color"])]))),128))],2)])])}var N=n(T,[["render",H]]),R=[{id:1,title:"Primary",data:[{id:1,subtitle:"100",code:"#0065D1"},{id:2,subtitle:"75",code:"#408BDD"},{id:3,subtitle:"50",code:"#80B2E8"},{id:4,subtitle:"25",code:"#BFD9F3"},{id:5,subtitle:"5",code:"#F2F7FD"},{id:6,subtitle:"focused",code:"#004C9D"},{id:7,subtitle:"hovered",code:"#0056B2"}]},{id:2,title:"Secondary",data:[{id:1,subtitle:"100",code:"#737373"},{id:2,subtitle:"75",code:"#969696"},{id:3,subtitle:"50",code:"#B9B9B9"},{id:4,subtitle:"25",code:"#DCDCDC"},{id:5,subtitle:"5",code:"#F8F8F8"},{id:6,subtitle:"focused",code:"#565656"},{id:7,subtitle:"hovered",code:"#626262"}]},{id:3,title:"Success",data:[{id:1,subtitle:"100",code:"#23B242"},{id:2,subtitle:"75",code:"#5AC571"},{id:3,subtitle:"50",code:"#91D8A0"},{id:4,subtitle:"25",code:"#C8ECD0"},{id:5,subtitle:"5",code:"#F4FBF6"},{id:6,subtitle:"focused",code:"#1A8531"},{id:7,subtitle:"hovered",code:"#1E9738"}]},{id:4,title:"Information",data:[{id:1,subtitle:"100",code:"#02AEC5"},{id:2,subtitle:"75",code:"#41C2D4"},{id:3,subtitle:"50",code:"#80D7E2"},{id:4,subtitle:"25",code:"#C0EBF1"},{id:5,subtitle:"5",code:"#F2FBFC"},{id:6,subtitle:"focused",code:"#018294"},{id:7,subtitle:"hovered",code:"#0294A7"}]},{id:5,title:"Warning",data:[{id:1,subtitle:"100",code:"#F5A623"},{id:2,subtitle:"75",code:"#F8BC5A"},{id:3,subtitle:"50",code:"#FAD391"},{id:4,subtitle:"25",code:"#FDE9C8"},{id:5,subtitle:"5",code:"#FFFBF4"},{id:6,subtitle:"focused",code:"#B87C1A"},{id:7,subtitle:"hovered",code:"#D08D1E"}]},{id:6,title:"Danger",data:[{id:1,subtitle:"100",code:"#E42E2C"},{id:2,subtitle:"75",code:"#EB6261"},{id:3,subtitle:"50",code:"#F29695"},{id:4,subtitle:"25",code:"#F8CBCA"},{id:5,subtitle:"5",code:"#FEF5F4"},{id:6,subtitle:"focused",code:"#AB2221"},{id:7,subtitle:"hovered",code:"#C22725"}]},{id:7,title:"Gold",data:[{id:1,subtitle:"100",code:"#B79A00"},{id:2,subtitle:"75",code:"#C9B340"},{id:3,subtitle:"50",code:"#DBCC80"},{id:4,subtitle:"25",code:"#EDE6BF"},{id:5,subtitle:"5",code:"#FBFAF2"},{id:6,subtitle:"focused",code:"#897400"},{id:7,subtitle:"hovered",code:"#9C8300"}]},{id:8,title:"Yellow",data:[{id:1,subtitle:"100",code:"#EFD52C"},{id:2,subtitle:"75",code:"#F3E061"},{id:3,subtitle:"50",code:"#F7EA95"},{id:4,subtitle:"25",code:"#FBF5CA"},{id:5,subtitle:"5",code:"#FEFDF4"}]},{id:9,title:"Lime",data:[{id:1,subtitle:"100",code:"#A3E635"},{id:2,subtitle:"75",code:"#BAEC68"},{id:3,subtitle:"50",code:"#D1F39A"},{id:4,subtitle:"25",code:"#E8F9CD"},{id:5,subtitle:"5",code:"#FAFEF5"}]},{id:10,title:"Teal",data:[{id:1,subtitle:"100",code:"#12B89C"},{id:2,subtitle:"75",code:"#4DCAB5"},{id:3,subtitle:"50",code:"#88DBCE"},{id:4,subtitle:"25",code:"#C4EDE6"},{id:5,subtitle:"5",code:"#F3FBFA"}]},{id:11,title:"Purple",data:[{id:1,subtitle:"100",code:"#5E00D1"},{id:2,subtitle:"75",code:"#8640DD"},{id:3,subtitle:"50",code:"#AE80E8"},{id:4,subtitle:"25",code:"#D7BFF3"},{id:5,subtitle:"5",code:"#F7F2FD"}]},{id:12,title:"Background",data:[{id:1,subtitle:"100",code:"#F5F5F5"},{id:2,subtitle:"75",code:"#F8F8F8"},{id:3,subtitle:"50",code:"#FAFAFA"},{id:4,subtitle:"25",code:"#FDFDFD"}]},{id:121,title:"Background -- Alt",data:[{id:1,subtitle:"100",code:"#E2E2E2"},{id:2,subtitle:"75",code:"#E9E9E9"},{id:3,subtitle:"50",code:"#F1F1F1"},{id:4,subtitle:"25",code:"#F8F8F8"}]},{id:13,title:"Body",data:[{id:1,subtitle:"100",code:"#232323"},{id:2,subtitle:"75",code:"#5A5A5A"},{id:3,subtitle:"50",code:"#919191"},{id:4,subtitle:"25",code:"#C8C8C8"}]},{id:131,title:"Secondary -- Alt",data:[{id:1,subtitle:"100",code:"#515151"},{id:2,subtitle:"75",code:"#7D7D7D"},{id:3,subtitle:"50",code:"#A8A8A8"},{id:4,subtitle:"25",code:"#D3D3D3"}]},{id:14,title:"Subtext",data:[{id:1,subtitle:"100",code:"#A3A3A3"},{id:2,subtitle:"75",code:"#BABABA"},{id:3,subtitle:"50",code:"#D1D1D1"},{id:4,subtitle:"25",code:"#E8E8E8"}]},{id:141,title:"Subtext -- Alt",data:[{id:1,subtitle:"100",code:"#9F9F9F"},{id:2,subtitle:"75",code:"#B7B7B7"},{id:3,subtitle:"50",code:"#CFCFCF"},{id:4,subtitle:"25",code:"#E7E7E7"}]},{id:15,title:"Alpha Black",data:[{id:1,subtitle:"90",code:"#000000E5"},{id:2,subtitle:"80",code:"#000000CC"},{id:3,subtitle:"70",code:"#000000B2"},{id:4,subtitle:"60",code:"#00000099"},{id:5,subtitle:"50",code:"#00000080"},{id:6,subtitle:"40",code:"#00000066"},{id:7,subtitle:"30",code:"#0000004D"},{id:8,subtitle:"20",code:"#00000033"},{id:9,subtitle:"10",code:"#0000001A"},{id:10,subtitle:"Light",code:"#0000000D"}]},{id:16,title:"Alpha White",data:[{id:1,subtitle:"90",code:"#FFFFFFE5",border:"1px solid #F1F2F3"},{id:2,subtitle:"80",code:"#FFFFFFCC",border:"1px solid #F1F2F3"},{id:3,subtitle:"70",code:"#FFFFFFB2",border:"1px solid #F1F2F3"},{id:4,subtitle:"60",code:"#FFFFFF99",border:"1px solid #F1F2F3"},{id:5,subtitle:"50",code:"#FFFFFF80",border:"1px solid #F1F2F3"},{id:6,subtitle:"40",code:"#FFFFFF66",border:"1px solid #F1F2F3"},{id:7,subtitle:"30",code:"#FFFFFF4D",border:"1px solid #F1F2F3"},{id:8,subtitle:"20",code:"#FFFFFF33",border:"1px solid #F1F2F3"},{id:9,subtitle:"10",code:"#FFFFFF1A",border:"1px solid #F1F2F3"},{id:10,subtitle:"Light",code:"#FFFFFF0D",border:"1px solid #F1F2F3"}]},{id:17,title:"Basic",data:[{id:1,subtitle:"Black",code:"#000000"},{id:2,subtitle:"Dark",code:"#404040"},{id:3,subtitle:"Grey",code:"#808080"},{id:4,subtitle:"Light",code:"#BFBFBF"},{id:5,subtitle:"White",code:"#FFFFFF",border:"1px solid #F1F2F3"},{id:6,subtitle:"Transparent",code:"",border:"1px solid #F1F2F3"}]},{id:18,title:"",grid:2,data:[{id:7,subtitle:"Shimmer",code:"linear-gradient(90deg, rgba(249, 249, 250, 0.01) 0%, #EEEEEE 69.79%, rgba(245, 245, 245, 0.01) 100%)"},{id:8,subtitle:"Label Bg",code:"linear-gradient(180deg, rgba(245, 247, 249, 0) 46.88%, #FFFFFF 46.88%)",border:"1px solid #F1F2F3"}]},{id:19,title:"Black White",data:[{id:1,subtitle:"bw100",code:"#000000"},{id:2,subtitle:"bw95",code:"#232323"},{id:3,subtitle:"bw90",code:"#404040"},{id:4,subtitle:"bw85",code:"#565656"},{id:5,subtitle:"bw80",code:"#5A5A5A"},{id:6,subtitle:"bw75",code:"#626262"},{id:7,subtitle:"bw70",code:"#737373"},{id:8,subtitle:"bw65",code:"#808080"},{id:9,subtitle:"bw60",code:"#919191"},{id:10,subtitle:"bw55",code:"#969696"},{id:11,subtitle:"bw50",code:"#A3A3A3"},{id:12,subtitle:"bw45",code:"#B1B1B1"},{id:13,subtitle:"bw40",code:"#BABABA"},{id:14,subtitle:"bw35",code:"#C8C8C8"},{id:15,subtitle:"bw30",code:"#D1D1D1"},{id:16,subtitle:"bw25",code:"#DCDCDC"},{id:17,subtitle:"bw20",code:"#E8E8E8"},{id:18,subtitle:"bw15",code:"#F5F5F5"},{id:19,subtitle:"bw10",code:"#FAFAFA"},{id:20,subtitle:"bw5",code:"#FDFDFD"},{id:21,subtitle:"bw0",code:"#FFFFFF"}]},{id:20,title:"Dark",data:[{id:1,subtitle:"100",code:"#0D1117"},{id:2,subtitle:"95",code:"#191D23"},{id:3,subtitle:"90",code:"#24292F"},{id:4,subtitle:"85",code:"#31353A"},{id:5,subtitle:"80",code:"#3D4145"},{id:6,subtitle:"75",code:"#4A4D51"},{id:7,subtitle:"70",code:"#56585D"},{id:8,subtitle:"65",code:"#626468"},{id:9,subtitle:"60",code:"#6E7074"},{id:10,subtitle:"55",code:"#7A7C7F"},{id:11,subtitle:"50",code:"#86888B"}]},{id:21,title:"Light",data:[{id:1,subtitle:"100",code:"#FCFDFE"},{id:2,subtitle:"95",code:"#FAFBFC"},{id:3,subtitle:"90",code:"#F7F8F9"},{id:4,subtitle:"85",code:"#F3F4F5"},{id:5,subtitle:"80",code:"#E7E8EA"},{id:6,subtitle:"75",code:"#DBDCDD"},{id:7,subtitle:"70",code:"#CFCFD1"},{id:8,subtitle:"65",code:"#C2C3C5"},{id:9,subtitle:"60",code:"#B6B8B9"}]},{id:22,title:"Gradients",grid:2,data:[{id:1,subtitle:"Secondary",code:"linear-gradient(180deg, rgba(204, 204, 204, 0) 0%, #CCCCCC 49.8%)"},{id:2,subtitle:"Background",code:"linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #F5F5F5 40.1%)"}]}];const I=e("h1",{id:"color",tabindex:"-1"},[l("COLOR "),e("a",{class:"header-anchor",href:"#color","aria-hidden":"true"},"#")],-1),W={class:"p-0 mt-8"},z=x('<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>At the element level, everything in HTML can have color applied to it. Instead, let&#39;s look at things in terms of the kinds of things that are drawn in the elements, such as text and borders and so forth.</p><p>At a fundamental level, the color property defines the foreground color of an HTML element&#39;s content and the background-color property defines the element&#39;s background color. These can be used on just about any element. Color are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p><h5 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><p style="color:#0065d1;">Color</p><p style="border:2px solid #0065d1;">Color</p><p style="background-color:#0065d1;color:#ffffff;">Color</p>',7),K='{"title":"COLOR","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"}],"relativePath":"color/guide.md"}',M={},X=Object.assign(M,{setup(t){return(b,F)=>(d(),i("div",null,[I,e("div",W,[(d(!0),i(p,null,C(f(R),o=>(d(),m(N,{item:o},{default:a(()=>[l(u(o.title),1)]),_:2},1032,["item"]))),256))]),z]))}});export{K as __pageData,X as default};
