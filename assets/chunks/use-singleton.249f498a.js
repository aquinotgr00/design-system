import{s as o,P as u,r as c,Q as f,F as p,u as d,R as m}from"../app.6e319942.js";let e,s;async function v(n){if(e||(e=o(new Map)),!s){const t=document.createElement("div"),r=u({name:"GlobalContainer",render:()=>[...e.value.entries()].map(([i,l])=>m(i,{ref:l}))});document.body.append(t),r.mount(t),t.id="global",s=r}let a=e.value.get(n);return a||(a=c(),e.value.set(n,a),f(e),await p()),d(a)}export{v as u};