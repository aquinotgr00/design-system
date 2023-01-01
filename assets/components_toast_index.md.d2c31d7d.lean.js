import{p as e}from"./chunks/Button.50d435cd.js";import{u as C}from"./chunks/utils-6ba05f5b.5160683a.js";import{I as E}from"./chunks/16.972ad843.js";import{_ as w,i as S,j as b,k as u,m as k,am as V,f as I,r as h,o as A,c as v,h as l,q as $,s as P,t as N,y as _,a,n as M,w as t,u as p,b as y,e as r}from"./app.98882f81.js";import{u as z}from"./chunks/use-singleton.c8e7ef13.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.c06aea1c.js";async function c(n){const{default:i}=await w(()=>import("./chunks/ToastContainer.4475759f.js"),["assets/chunks/ToastContainer.4475759f.js","assets/components_toast_index.md.d2c31d7d.js","assets/chunks/Button.50d435cd.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.c06aea1c.js","assets/app.98882f81.js","assets/chunks/utils-6ba05f5b.5160683a.js","assets/chunks/16.972ad843.js","assets/chunks/use-singleton.c8e7ef13.js"]);(await z(i)).add(n)}var Z=C,f=Z.createSVGComponent(f,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{fill:"none",d:"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z","data-icon-path":"inner-path"}},{elem:"path",attrs:{d:"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}}]),B=f;const H=B;var R=C,g=R.createSVGComponent(g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{d:"M10 15.9L4.7 10.6 3.6 11.6 8.9 16.9 10 18 20.6 7.4 19.5 6.3z"}}]),U=g;const q=U;var O=C,x=O.createSVGComponent(x,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{d:"M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11C23,5.9,18.1,1,12,1z M11.1,6h1.8v8h-1.8V6z M12,19.2	c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2S12.7,19.2,12,19.2z"}},{elem:"path",attrs:{fill:"none",d:"M13.2,18c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S13.2,17.3,13.2,18z M12.9,6	h-1.8v8h1.8V6z","data-icon-path":"inner-path",opacity:"0"}}]),W=x;const G=W;var j=C,L=j.createSVGComponent(L,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{fill:"none",d:"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z","data-icon-path":"inner-path"}},{elem:"path",attrs:{d:"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"}},{elem:"path",attrs:{d:"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"}}]),J=L;const Y=J,K={info:H,success:q,warning:G,error:Y},Q=S({components:{IconClose:E},props:{title:{type:String,required:!0},text:{type:String,required:!0},type:{type:String,default:"info"},variant:{type:String,default:"simple"},duration:{type:Number,default:3e3}},emits:["dismissed"],setup(n,{emit:i}){const s=b(),F=u(()=>{const d=["toast"];return n.type&&d.push(`toast--${n.type}`),n.variant&&d.push(`toast--${n.variant}`),d}),o=u(()=>K[n.type]);function m(){i("dismissed")}return k(()=>{Number.isFinite(n.duration)&&n.duration>0&&(s.value=setTimeout(()=>{i("dismissed")},n.duration))}),V(()=>{s.value&&clearTimeout(s.value)}),{classNames:F,icon:o,close:m}}});const X={class:"toast__icon"},ss={class:"toast__body"},as={class:"toast__title"},ns={class:"toast__text"};function ls(n,i,s,F,o,m){const d=h("IconClose");return A(),v("div",{"data-testid":"toast",class:M(n.classNames)},[l("div",X,[n.icon?(A(),$(P(n.icon),{key:0})):N("",!0)]),l("div",ss,[l("div",as,_(n.title),1),l("div",ns,_(n.text),1)]),l("div",{"data-testid":"toast-close",class:"toast__close",onClick:i[0]||(i[0]=(...T)=>n.close&&n.close(...T))},[a(d)])],2)}const D=I(Q,[["render",ls]]),os=y("",3),ts={class:"flex mt-3"},es=y("",2),ps={class:"flex mt-3"},rs=y("",3),cs=l("p",null,[l("strong",null,"Try it:")],-1),is={class:"mt-3 space-gap-3"},Ds=y("",3),ys=l("p",null,[l("strong",null,"Try it:")],-1),Fs={class:"mt-3 space-gap-3"},ds=y("",3),Cs={class:"mt-3"},As=y("",5),xs=JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"Advance Usage","slug":"advance-usage","link":"#advance-usage","children":[]}]},{"level":2,"title":"Type Variant","slug":"type-variant","link":"#type-variant","children":[]},{"level":2,"title":"Style Variant","slug":"style-variant","link":"#style-variant","children":[]},{"level":2,"title":"Customization","slug":"customization","link":"#customization","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"toast","slug":"toast-1","link":"#toast-1","children":[]}]}],"relativePath":"components/toast/index.md"}'),ms={name:"components/toast/index.md"},Ls=Object.assign(ms,{setup(n){return(i,s)=>{const F=h("preview");return A(),v("div",null,[os,l("div",ts,[a(e,{color:"primary",onClick:s[0]||(s[0]=o=>p(c)({title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Show Toast ")]),_:1})]),es,l("div",ps,[a(e,{color:"primary",onClick:s[1]||(s[1]=o=>p(c)({type:"error",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet.",variant:"filled",duration:5e3,toastClass:"custom-toast"}))},{default:t(()=>[r(" Show Toast ")]),_:1})]),rs,a(F,{class:"flex-col items-center space-y-3"},{default:t(()=>[a(D,{type:"info",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(D,{type:"success",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(D,{type:"warning",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(D,{type:"error",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."})]),_:1}),cs,l("div",is,[a(e,{color:"primary",onClick:s[2]||(s[2]=o=>p(c)({type:"info",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Info ")]),_:1}),a(e,{color:"success",onClick:s[3]||(s[3]=o=>p(c)({type:"success",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Success ")]),_:1}),a(e,{color:"warning",onClick:s[4]||(s[4]=o=>p(c)({type:"warning",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Warning ")]),_:1}),a(e,{color:"danger",onClick:s[5]||(s[5]=o=>p(c)({type:"error",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Error ")]),_:1})]),Ds,a(F,{class:"flex-col items-center space-y-3"},{default:t(()=>[a(D,{variant:"filled",type:"info",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(D,{variant:"filled",type:"success",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(D,{variant:"filled",type:"warning",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(D,{variant:"filled",type:"error",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."})]),_:1}),ys,l("div",Fs,[a(e,{color:"primary",onClick:s[6]||(s[6]=o=>p(c)({type:"info",variant:"filled",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Info ")]),_:1}),a(e,{color:"success",onClick:s[7]||(s[7]=o=>p(c)({type:"success",variant:"filled",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Success ")]),_:1}),a(e,{color:"warning",onClick:s[8]||(s[8]=o=>p(c)({type:"warning",variant:"filled",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Warning ")]),_:1}),a(e,{color:"danger",onClick:s[9]||(s[9]=o=>p(c)({type:"error",variant:"filled",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:t(()=>[r(" Error ")]),_:1})]),ds,l("div",Cs,[a(e,{type:"",color:"primary",onClick:s[10]||(s[10]=o=>p(c)({title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet.",toastClass:"mt-4 mr-4"}))},{default:t(()=>[r(" Rounded Toast ")]),_:1})]),As])}}});export{D as T,xs as __pageData,Ls as default};
