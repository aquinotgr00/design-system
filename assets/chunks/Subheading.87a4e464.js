import{f as a,h as t,_ as i,o,c as r,r as l,n as u}from"../app.ee7072c2.js";const d=a({props:{size:{type:String,default:"md"},overline:{type:String,default:void 0}},setup(e){return{classNames:t(()=>{const s=["subheading"];return e.overline?s.push(`subheading--overline-${e.overline}`):e.size&&s.push(`subheading--${e.size}`),s})}}});function c(e,n,s,_,p,f){return o(),r("p",{"data-testid":"subheading",class:u(e.classNames)},[l(e.$slots,"default")],2)}const h=i(d,[["render",c]]);export{h as S};