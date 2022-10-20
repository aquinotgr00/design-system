import{a as S}from"./index.7eb79c8e.js";import{H as V}from"./Heading.f2295614.js";import{I as b}from"./16.d4caf96f.js";import{u as w}from"./use-input.46134d19.js";import{f as N,h as O,i as z,F as E,_ as H,b as p,o as a,l as y,w as r,C as _,D as k,a as d,d as B,y as I,c as m,p as n,r as c,n as v,T as C,k as h,t as $}from"../app.ee7072c2.js";const M=N({components:{Heading:V,IconClose:b},props:{title:{type:String,default:void 0},text:{type:String,default:void 0},modelValue:{type:Boolean,default:!1},dismissable:{type:Boolean,default:!0},size:{type:String,default:"md"},noCloseOnEsc:{type:Boolean,default:!1},noCloseOnBackdrop:{type:Boolean,default:!1},modalBodyScrollable:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","close"],setup(e,{emit:s}){const l=w(e),f=O(()=>{const o=[""];return e.size&&o.push(`modal--${e.size}`),e.centered&&o.push("modal--centered"),o});function t(o){s("close",o),o.defaultPrevented||(l.value=!1)}function u(o){e.noCloseOnBackdrop||t(o)}return S("Escape",o=>{e.noCloseOnEsc||t(o)},{eventName:"keydown"}),z(l,o=>{o===!1&&E(()=>{s("close")})}),{model:l,classNames:f,closeOnBackdrop:u,close:t}}});const T={class:"modal__dialog"},D={key:1,"data-testid":"modal-header",class:"modal__header"},F={key:2,"data-testid":"modal-footer",class:"modal__footer"};function K(e,s,l,f,t,u){const o=p("IconClose"),g=p("Heading");return a(),y(C,{name:"fade",mode:"out-in"},{default:r(()=>[_(d("div",{class:v(["modal",e.classNames]),"data-testid":"modal",onClick:s[2]||(s[2]=(...i)=>e.closeOnBackdrop&&e.closeOnBackdrop(...i))},[B(C,{name:"slide-up",mode:"out-in"},{default:r(()=>[_(d("div",T,[d("div",{class:"modal__content",onClick:s[1]||(s[1]=I(()=>{},["stop"]))},[e.dismissable?(a(),m("span",{key:0,"data-testid":"modal-dismiss",class:"modal__dismiss",onClick:s[0]||(s[0]=(...i)=>e.close&&e.close(...i))},[B(o)])):n("",!0),e.$slots.header||e.title?(a(),m("div",D,[c(e.$slots,"header",{},()=>[e.title?(a(),y(g,{key:0,class:"modal__title",element:"h6"},{default:r(()=>[h($(e.title),1)]),_:1})):n("",!0)])])):n("",!0),d("div",{"data-testid":"modal-body",class:v([{"modal__body--scroll":e.modalBodyScrollable},"modal__body"])},[c(e.$slots,"default",{},()=>[h($(e.text),1)])],2),e.$slots.footer?(a(),m("div",F,[c(e.$slots,"footer",{close:e.close})])):n("",!0)])],512),[[k,e.model]])]),_:3})],2),[[k,e.model]])]),_:3})}const J=H(M,[["render",K]]);export{J as p};