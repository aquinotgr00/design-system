var Z=Object.defineProperty,B=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var T=(s,n,t)=>n in s?Z(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,w=(s,n)=>{for(var t in n||(n={}))H.call(n,t)&&T(s,t,n[t]);if(L)for(var t of L(n))R.call(n,t)&&T(s,t,n[t]);return s},C=(s,n)=>B(s,E(n));import{B as i}from"./chunks/Button.f4ac4b92.js";import{u as v}from"./chunks/utils-6ba05f5b.cdee46a6.js";import{I as U}from"./chunks/16.da18c861.js";import{d as V,r as A,c as S,o as G,G as F,_ as I,b as y,f as p,l as f,m as W,p as q,t as $,g as a,n as b,j as x,a as _,h as o,L as O,K as j,V as K,u as r,i as g,k as c}from"./app.6e319942.js";import{u as Y}from"./chunks/use-singleton.249f498a.js";var J=v,N=J.createSVGComponent(N,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{fill:"none",d:"M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z","data-icon-path":"inner-path"}},{elem:"path",attrs:{d:"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"}}]),Q=N,X=Q,tt=v,P=tt.createSVGComponent(P,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{d:"M10 15.9L4.7 10.6 3.6 11.6 8.9 16.9 10 18 20.6 7.4 19.5 6.3z"}}]),st=P,nt=st,at=v,M=at.createSVGComponent(M,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{d:"M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11C23,5.9,18.1,1,12,1z M11.1,6h1.8v8h-1.8V6z M12,19.2	c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2S12.7,19.2,12,19.2z"}},{elem:"path",attrs:{fill:"none",d:"M13.2,18c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S13.2,17.3,13.2,18z M12.9,6	h-1.8v8h1.8V6z","data-icon-path":"inner-path",opacity:"0"}}]),et=M,ot=et,pt=v,D=pt.createSVGComponent(D,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:24,height:24},[{elem:"path",attrs:{fill:"none",d:"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z","data-icon-path":"inner-path"}},{elem:"path",attrs:{d:"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"}},{elem:"path",attrs:{d:"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"}}]),it=D,rt=it;const lt={info:X,success:nt,warn:ot,error:rt},ct=V({components:{IconClose:U},props:{title:{type:String,required:!0},text:{type:String,required:!0},type:{type:String,default:"info"},variant:{type:String,default:"simple"},duration:{type:Number,default:3e3}},emits:["dismissed"],setup(s,{emit:n}){const t=A(),u=S(()=>{const k=["toast"];return s.type&&k.push(`toast--${s.type}`),s.variant&&k.push(`toast--${s.variant}`),k}),e=S(()=>lt[s.type]);function h(){n("dismissed")}return G(()=>{Number.isFinite(s.duration)&&s.duration>0&&(t.value=setTimeout(()=>{n("dismissed")},s.duration))}),F(()=>{t.value&&clearTimeout(t.value)}),{classNames:u,icon:e,close:h}}}),ut={class:"toast__icon"},dt={class:"toast__body"},mt={class:"toast__title"},kt={class:"toast__text"};function _t(s,n,t,u,e,h){const k=x("IconClose");return _(),y("div",{"data-testid":"toast",class:b(s.classNames)},[p("div",ut,[s.icon?(_(),f(W(s.icon),{key:0})):q("",!0)]),p("div",dt,[p("div",mt,$(s.title),1),p("div",kt,$(s.text),1)]),p("div",{"data-testid":"toast-close",class:"toast__close",onClick:n[0]||(n[0]=(...d)=>s.close&&s.close(...d))},[a(k)])],2)}var m=I(ct,[["render",_t]]);const gt=V({components:{Toast:m},setup(){const s=A([]);function n(u){s.value.unshift(C(w({},u),{_id:Symbol("id")}))}function t(u){s.value.splice(u,1)}return{add:n,remove:t,items:s}}});function vt(s,n,t,u,e,h){const k=x("Toast");return _(),f(K,{tag:"div",name:"toast",class:"toast-container","data-testid":"toast-container"},{default:o(()=>[(_(!0),y(j,null,O(s.items,(d,z)=>(_(),f(k,{key:d._id,title:d.title,text:d.text,type:d.type,variant:d.variant,duration:d.duration,class:b(d.toastClass),onDismissed:Ft=>s.remove(z)},null,8,["title","text","type","variant","duration","class","onDismissed"]))),128))]),_:1})}var ht=I(gt,[["render",vt]]);async function l(s){(await Y(ht)).add(s)}const ft=g("",3),yt={class:"flex mt-3"},xt=c(" Show Toast "),Lt=g("",2),Tt={class:"flex mt-3"},wt=c(" Show Toast "),Ct=g("",3),St=p("p",null,[p("strong",null,"Try it:")],-1),$t={class:"flex flex-wrap gap-3 mt-3"},Vt=c(" Info "),At=c(" Success "),It=c(" Warn "),bt=c(" Error "),Nt=g("",3),Pt=p("p",null,[p("strong",null,"Try it:")],-1),Mt={class:"flex flex-wrap gap-3 mt-3"},Dt=c(" Info "),zt=c(" Success "),Zt=c(" Warn "),Bt=c(" Error "),Et=g("",3),Ht={class:"flex gap-3 mt-3"},Rt=c(" Rounded Toast "),Ut=g("",5),Jt='{"title":"Toast","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":3,"title":"Complex Usage","slug":"complex-usage"},{"level":2,"title":"Type Variant","slug":"type-variant"},{"level":2,"title":"Style Variant","slug":"style-variant"},{"level":2,"title":"Customization","slug":"customization"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"toast","slug":"toast-1"}],"relativePath":"toast/component.md"}',Gt={},Qt=Object.assign(Gt,{setup(s){return(n,t)=>{const u=x("preview");return _(),y("div",null,[ft,p("div",yt,[a(i,{onClick:t[0]||(t[0]=e=>r(l)({title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[xt]),_:1})]),Lt,p("div",Tt,[a(i,{onClick:t[1]||(t[1]=e=>r(l)({type:"error",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet.",variant:"filled",duration:5e3,toastClass:"custom-toast"}))},{default:o(()=>[wt]),_:1})]),Ct,a(u,{class:"flex-col items-center gap-3"},{default:o(()=>[a(m,{type:"info",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(m,{type:"success",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(m,{type:"warn",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(m,{type:"error",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."})]),_:1}),St,p("div",$t,[a(i,{color:"primary",onClick:t[2]||(t[2]=e=>r(l)({type:"info",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[Vt]),_:1}),a(i,{color:"success",onClick:t[3]||(t[3]=e=>r(l)({type:"success",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[At]),_:1}),a(i,{color:"warning",onClick:t[4]||(t[4]=e=>r(l)({type:"warn",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[It]),_:1}),a(i,{color:"danger",onClick:t[5]||(t[5]=e=>r(l)({type:"error",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[bt]),_:1})]),Nt,a(u,{class:"flex-col items-center gap-3"},{default:o(()=>[a(m,{variant:"filled",type:"info",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(m,{variant:"filled",type:"success",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(m,{variant:"filled",type:"warn",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}),a(m,{variant:"filled",type:"error",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."})]),_:1}),Pt,p("div",Mt,[a(i,{color:"primary",onClick:t[6]||(t[6]=e=>r(l)({type:"info",variant:"filled",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[Dt]),_:1}),a(i,{color:"success",onClick:t[7]||(t[7]=e=>r(l)({type:"success",variant:"filled",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[zt]),_:1}),a(i,{color:"warning",onClick:t[8]||(t[8]=e=>r(l)({type:"warn",variant:"filled",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[Zt]),_:1}),a(i,{color:"danger",onClick:t[9]||(t[9]=e=>r(l)({type:"error",variant:"filled",title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet."}))},{default:o(()=>[Bt]),_:1})]),Et,p("div",Ht,[a(i,{type:"",color:"primary",onClick:t[10]||(t[10]=e=>r(l)({title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet.",toastClass:"rounded-full"}))},{default:o(()=>[Rt]),_:1})]),Ut])}}});export{Jt as __pageData,Qt as default};
