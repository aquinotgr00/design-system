function f(o){return o!==null&&typeof o=="object"}function e(o,u,r=".",c){if(!f(u))return e(o,{},r,c);const n=Object.assign({},u);for(const t in o){if(t==="__proto__"||t==="constructor")continue;const i=o[t];i!=null&&(c&&c(n,t,i,r)||(Array.isArray(i)&&Array.isArray(n[t])?n[t]=i.concat(n[t]):f(i)&&f(n[t])?n[t]=e(i,n[t],(r?`${r}.`:"")+t.toString(),c):n[t]=i))}return n}function s(o){return(...u)=>u.reduce((r,c)=>e(r,c,"",o),{})}const y=s();export{y as d};
