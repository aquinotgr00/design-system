import{i as h,j as F,k as d,f as y,o as r,q as m,w as l,c,e as g,y as u,B as _,t as x,T as C,r as b,a as t,b as o}from"./app.fdfa60f6.js";const T=h({props:{text:{type:String,default:""},length:{type:[Number,String],default:100},omission:{type:String,default:"..."},expandable:{type:Boolean,default:!1},showMoreText:{type:String,default:"Show More"},showLessText:{type:String,default:"Show Less"}},setup(s){const e=F(!1),n=d(()=>Number.parseInt(`${s.length}`)),a=d(()=>e.value||Number.isNaN(n.value)||s.text.length<=n.value?s.text:`${s.text.slice(0,n.value-s.omission.length)}${s.omission}`);function i(){e.value=!e.value}return{expand:e,viewText:a,toggle:i,maxLength:n}}});function v(s,e,n,a,i,k){return r(),m(C,{name:"fade",mode:"out-in"},{default:l(()=>[(r(),c("span",{key:`${s.expand}`,"data-testid":"truncate"},[g(u(s.viewText)+" ",1),s.expandable&&s.text.length>s.maxLength?(r(),c("a",{key:0,"data-testid":"truncate-expand",href:"#",onClick:e[0]||(e[0]=_((...D)=>s.toggle&&s.toggle(...D),["prevent"]))},u(s.expand?s.showLessText:s.showMoreText),1)):x("",!0)]))]),_:1})}const p=y(T,[["render",v]]),f=o("",3),A=o("",2),S=o("",2),E=o("",3),w=o("",8),N=JSON.parse('{"title":"Truncate","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]}]},{"level":2,"title":"Custom Omission","slug":"custom-omission","link":"#custom-omission","children":[]},{"level":2,"title":"Expandable","slug":"expandable","link":"#expandable","children":[{"level":3,"title":"Custom Text","slug":"custom-text","link":"#custom-text","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/truncate/index.md"}'),q={name:"components/truncate/index.md"},L=Object.assign(q,{setup(s){return(e,n)=>{const a=b("preview");return r(),c("div",null,[f,t(a,null,{default:l(()=>[t(p,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30"})]),_:1}),A,t(a,null,{default:l(()=>[t(p,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",omission:" [...]"})]),_:1}),S,t(a,null,{default:l(()=>[t(p,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",expandable:""})]),_:1}),E,t(a,null,{default:l(()=>[t(p,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",expandable:"","show-more-text":"Lihat Selengkapnya","show-less-text":"Sembunyikan"})]),_:1}),w])}}});export{N as __pageData,L as default};
