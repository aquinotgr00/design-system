import{C as n}from"./chunks/Card.02a9c25d.js";import{p as o}from"./chunks/Button.2f5fcb16.js";import{p as g}from"./chunks/Subheading.939194b9.js";import{f as _,h as m,k as h,r as u,o as p,c,l as y,a as t,w as a,e as d,y as f,t as i,m as e,n as b,b as r,Z as w,$ as E}from"./app.68f3df29.js";import"./chunks/16.1deb615b.js";import"./chunks/utils-6ba05f5b.12ad8990.js";import"./chunks/Heading.700afbc7.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.2fcab2b2.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.27c6df4f.js";const k="/design-system/assets/img-card-callout-01.2230ebe6.svg",S=_({components:{Subheading:g},props:{title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(s){return{classNames:m(()=>{const D=["card__section"];return s.disabled&&D.push("card__section--disabled"),D})}}}),q={key:0,"data-testid":"card-header",class:"card__header"},T={key:1,class:"card__header card__header--default"},x={key:0,"data-testid":"card-header-action",class:"card__header__action"},I={class:"card__body"},B={key:2,"data-testid":"card-footer",class:"card__footer"};function W(s,F,D,l,J,Z){const A=u("Subheading");return p(),c("div",{"data-testid":"card-section",class:b(s.classNames)},[s.$slots.header?(p(),c("div",q,[y(s.$slots,"header")])):s.title?(p(),c("div",T,[t(A,{weight:"medium",overline:""},{default:a(()=>[d(f(s.title),1)]),_:1}),s.$slots.action?(p(),c("span",x,[y(s.$slots,"action")])):i("",!0)])):i("",!0),e("div",I,[y(s.$slots,"default")]),s.$slots.footer?(p(),c("footer",B,[y(s.$slots,"footer")])):i("",!0)],2)}const v=h(S,[["render",W]]);const C=s=>(w("data-v-a113a00d"),s=s(),E(),s),N=r("",4),P=r("",2),V=r("",2),H=r("",2),$=C(()=>e("a",{href:"#",class:"underline text-accent"},"Edit",-1)),R=r("",2),j={class:"flex items-start space-x-8"},U={class:"w-3/4"},Y={class:"pt-8"},z=C(()=>e("div",{class:"w-1/4"},[e("img",{src:k})],-1)),L=r("",8),ea=JSON.parse(`{"title":"Card · Components","description":"Take picture from user's camera","frontmatter":{"title":"Card · Components","description":"Take picture from user's camera"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Card with Header","slug":"card-with-header","link":"#card-with-header","children":[]},{"level":3,"title":"Card with Footer","slug":"card-with-footer","link":"#card-with-footer","children":[]}]},{"level":2,"title":"Sectioned","slug":"sectioned","link":"#sectioned","children":[]},{"level":2,"title":"Callout","slug":"callout","link":"#callout","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/card/index.md"}`),M={name:"components/card/index.md"},O=Object.assign(M,{setup(s){return(F,D)=>{const l=u("preview");return p(),c("div",null,[N,t(l,null,{default:a(()=>[t(n,null,{default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. ")]),_:1})]),_:1}),P,t(l,null,{default:a(()=>[t(n,{title:"Any Title Should Here"},{default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. ")]),_:1}),t(n,{title:"Any Title Should Here"},{action:a(()=>[t(o,{color:"primary",variant:"link"},{default:a(()=>[d("Button Text")]),_:1})]),default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. ")]),_:1})]),_:1}),V,t(l,null,{default:a(()=>[t(n,{title:"Any Title Should Here"},{footer:a(()=>[t(o,{variant:"outline",color:"primary"},{default:a(()=>[d("Enable Sample Button")]),_:1}),t(o,{variant:"link",color:"primary"},{default:a(()=>[d("Button Text")]),_:1})]),default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. ")]),_:1})]),_:1}),H,t(l,null,{default:a(()=>[t(n,{title:"Card with Section",sectioned:""},{default:a(()=>[t(v,null,{default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. ")]),_:1}),t(v,{title:"Subtitle supposedly here"},{action:a(()=>[$]),default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. ")]),_:1})]),_:1}),t(n,{title:"Card with Sub-Section",sectioned:""},{action:a(()=>[t(o,{variant:"link",color:"primary"},{default:a(()=>[d("Button Text")]),_:1})]),default:a(()=>[t(v,null,{default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. ")]),_:1}),t(v,{title:"Subtitle supposedly here"},{default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),t(v,null,{default:a(()=>[d(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. ")]),_:1})]),_:1})]),_:1})]),_:1}),R,t(l,null,{default:a(()=>[t(n,{title:"Hello and Happy New Year!",element:"div",callout:""},{default:a(()=>[e("div",j,[e("div",U,[d(" What amazing growth you achieved this year, Tarjono! You deserve every bit of it and we’re sure you’ll do even better next year. There’s a 30% membership renewal discount waiting for you when you come back. "),e("div",Y,[t(o,{variant:"outline",color:"secondary"},{default:a(()=>[d("Collect Discount")]),_:1}),t(o,{variant:"link",color:"primary"},{default:a(()=>[d("Learn More")]),_:1})])]),z])]),_:1})]),_:1}),L])}}}),la=h(O,[["__scopeId","data-v-a113a00d"]]);export{ea as __pageData,la as default};