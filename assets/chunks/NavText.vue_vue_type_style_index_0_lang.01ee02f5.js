import{p as d}from"./Button.fd2868e0.js";import{I as i}from"./20.c8de1306.js";import{I as m}from"./20.109559d1.js";import{N as v}from"./index.fe135e19.js";import{m as f,r as x,$ as I,c as C,_ as N,K as a,x as t,H as c,I as g,q as y,v as B}from"./framework.91e0efa6.js";const $=f({components:{Button:d,IconMenu:i,IconClose:m},setup(){const e=x(!1),o=I(v,void 0,!1),n=o==null?void 0:o.toggleable,r=C(()=>{const s=[];return n!=null&&n.value&&s.push(`navbar__toggle--${n==null?void 0:n.value}`),s});function _(){e.value=!e.value}return{expanded:_,expand:e,classNames:r}}});function k(e,o,n,r,_,s){const p=a("IconClose"),l=a("IconMenu"),u=a("Button");return t(),c(u,{class:B(["navbar__toggle",e.classNames]),"data-testid":"navbar-toggle",variant:"outline",icon:"",onClick:e.expanded},{default:g(()=>[y(e.$slots,"default",{expanded:e.expand},()=>[e.expand?(t(),c(p,{key:0})):(t(),c(l,{key:1}))])]),_:3},8,["class","onClick"])}const A=N($,[["render",k]]);export{A as p};
