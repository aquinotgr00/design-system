import{H as g}from"./chunks/Heading.ddc3e5ca.js";import{p as f}from"./chunks/Subheading.d7ef3a74.js";import{B as h}from"./chunks/Badge.735a0e74.js";import{p as v}from"./chunks/Button.72779291.js";import{f as x,ac as b,aa as y,k as B,r as o,o as d,c as p,m as e,a as t,w as n,e as i}from"./app.11769fcb.js";import{I as w}from"./chunks/20.0faf5756.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.f8af69ba.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.40e7c362.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.28c9a043.js";import"./chunks/utils-6ba05f5b.759caf55.js";const S=x({components:{Heading:g,Subheading:f,Badge:h,Button:v,IconGithub:w},setup(){const s=b();function a(){s.go(y("/docs/getting-started"))}function c(){window.open("https://github.com/privy-open-source/design-system","_blank")}return{gettingStarted:a,openGithub:c}}}),k="/design-system/assets/images/logo.svg",C="/design-system/assets/images/icon-privy.svg",G={class:"flex flex-col items-center justify-center pt-8"},H=e("img",{class:"py-7",src:k,alt:"icon privy",width:"150",height:"150"},null,-1),I={class:"flex h-full px-3"},$=e("div",{class:"px-3 border-r"},[e("img",{class:"min-w-[2rem]",src:C,alt:"icon privy"})],-1),N={class:"px-3"},V=e("span",{class:"text-accent"},"Persona",-1),j={class:"flex flex-col items-center justify-center pt-10 space-gap-2 md:flex-row"};function D(s,a,c,z,E,J){const l=o("Badge"),_=o("Heading"),m=o("Subheading"),r=o("Button"),u=o("IconGithub");return d(),p("div",G,[H,e("div",I,[$,e("div",N,[t(l,null,{default:n(()=>[i(" Official ")]),_:1}),t(_,{class:"mt-2"},{default:n(()=>[V,i(" Design System ")]),_:1}),t(m,null,{default:n(()=>[i(" By PrivyID ")]),_:1})])]),e("div",j,[t(r,{size:"lg",onClick:s.gettingStarted},{default:n(()=>[i(" Get Started ")]),_:1},8,["onClick"]),t(r,{"data-tour":"github",size:"lg",variant:"ghost",onClick:s.openGithub},{default:n(()=>[i(" View on Github "),t(u)]),_:1},8,["onClick"])])])}const O=B(S,[["render",D]]),W=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md"}'),P={name:"index.md"},X=Object.assign(P,{setup(s){return(a,c)=>(d(),p("div",null,[t(O)]))}});export{W as __pageData,X as default};