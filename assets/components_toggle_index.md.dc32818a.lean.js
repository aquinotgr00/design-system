import{u as E}from"./chunks/index.c90c920b.js";import{i as k,k as T,f as q,o as u,c as g,h as n,g as h,e,y as i,t as _,n as x,B as w,j as C,r as V,a as l,w as s,b as c,u as A,K as S}from"./app.daa127db.js";import{u as v}from"./chunks/utils-6ba05f5b.281f2023.js";import{j as P}from"./chunks/index.2c42bbf0.js";import"./chunks/value.27565d8f.js";import"./chunks/index.e671d653.js";const I=k({props:{variant:{type:String,default:"pill"},modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:!1},value:{type:[String,Number,Boolean,Array,Object,Date],default:!0},uncheckedValue:{type:[String,Number,Boolean,Array,Object,Date],default:!1},checked:{type:Boolean,default:!1},checkedLabel:{type:String,default:"on"},uncheckedLabel:{type:String,default:"off"},noLabel:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change"],setup(a){const r=E(a),y=T(()=>{const t=[];return a.variant&&t.push(`toggle--${a.variant}`),r.value&&t.push("toggle--checked"),a.disabled&&t.push("toggle--disabled"),a.readonly&&t.push("toggle--readonly"),t});function d(){!a.readonly&&!a.disabled&&(r.value=!r.value)}return{classNames:y,model:r,toggle:d}}});const B={class:"toggle__switch"},N={key:0,class:"toggle__label toggle__checked-label"},R=["disabled","value","checked"],M={key:1,class:"toggle__label toggle__unchecked-label"};function H(a,r,y,d,t,b){return u(),g("label",{"data-testid":"toggle",class:x(["toggle",a.classNames]),onClick:r[0]||(r[0]=w((...p)=>a.toggle&&a.toggle(...p),["prevent"]))},[n("div",B,[a.noLabel===!1?(u(),g("span",N,[h(a.$slots,"checked",{},()=>[e(i(a.checkedLabel),1)])])):_("",!0),n("input",{type:"checkbox",class:"toggle__pointer",disabled:a.disabled||a.readonly,value:a.value,checked:a.model},null,8,R),a.noLabel===!1?(u(),g("span",M,[h(a.$slots,"unchecked",{},()=>[e(i(a.uncheckedLabel),1)])])):_("",!0)]),h(a.$slots,"default")],2)}const o=q(I,[["render",H]]);var L=v,m=L.createSVGComponent(m,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M7.5 1H8.5V3.5H7.5z"}},{elem:"path",attrs:{d:"M10.8 3.4H13.3V4.4H10.8z",transform:"rotate(-45.001 12.041 3.923)"}},{elem:"path",attrs:{d:"M12.5 7.5H15V8.5H12.5z"}},{elem:"path",attrs:{d:"M11.6 10.8H12.6V13.3H11.6z",transform:"rotate(-45.001 12.075 12.041)"}},{elem:"path",attrs:{d:"M7.5 12.5H8.5V15H7.5z"}},{elem:"path",attrs:{d:"M2.7 11.6H5.2V12.6H2.7z",transform:"rotate(-45.001 3.96 12.079)"}},{elem:"path",attrs:{d:"M1 7.5H3.5V8.5H1z"}},{elem:"path",attrs:{d:"M3.4 2.7H4.4V5.2H3.4z",transform:"rotate(-45.001 3.925 3.961)"}},{elem:"path",attrs:{d:"M8,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S6,9.1,6,8S6.9,6,8,6 M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z"}}]),z=m;const $=z;var U=v,f=U.createSVGComponent(f,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M7.2,2.3c-1,4.4,1.7,8.7,6.1,9.8c0.1,0,0.1,0,0.2,0c-1.1,1.2-2.7,1.8-4.3,1.8c-0.1,0-0.2,0-0.2,0C5.6,13.8,3,11,3.2,7.7	C3.2,5.3,4.8,3.1,7.2,2.3 M8,1L8,1C4.1,1.6,1.5,5.3,2.1,9.1c0.6,3.3,3.4,5.8,6.8,5.9c0.1,0,0.2,0,0.3,0c2.3,0,4.4-1.1,5.8-3	c0.2-0.2,0.1-0.6-0.1-0.7c-0.1-0.1-0.2-0.1-0.3-0.1c-3.9-0.3-6.7-3.8-6.4-7.6C8.3,3,8.4,2.4,8.6,1.8c0.1-0.3,0-0.6-0.3-0.7	C8.1,1,8.1,1,8,1z"}}]),j=f;const O=j,Y=c("",3),G=c("",2),W=n("svg",{width:"8",height:"8",viewBox:"0 0 2 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("rect",{width:"2",height:"8",rx:"1",fill:"white"})],-1),J=n("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("circle",{cx:"4",cy:"4",r:"3",stroke:"white","stroke-width":"2"})],-1),K=c("",3),Q=c("",3),X=c("",2),Z=c("",3),ss=c("",2),ls=c("",2),as=c("",2),es=n("p",null,[n("strong",null,"Result :")],-1),ns=c("",3),os=n("p",null,[n("strong",null,"Result :")],-1),ts=c("",3),ps={class:"flex flex-col space-y-3"},cs=n("p",null,[n("strong",null,"Selected :")],-1),rs={class:"whitespace-normal"},Ds=c("",10),Cs=JSON.parse('{"title":"Toggle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"With Icon","slug":"with-icon","link":"#with-icon","children":[]}]},{"level":2,"title":"Type variant","slug":"type-variant","link":"#type-variant","children":[]},{"level":2,"title":"Custom label","slug":"custom-label","link":"#custom-label","children":[]},{"level":2,"title":"Hide label","slug":"hide-label","link":"#hide-label","children":[]},{"level":2,"title":"Disabled state","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Readonly state","slug":"readonly-state","link":"#readonly-state","children":[]},{"level":2,"title":"Binding v-model","slug":"binding-v-model","link":"#binding-v-model","children":[{"level":3,"title":"Custom v-model value","slug":"custom-v-model-value","link":"#custom-v-model-value","children":[]},{"level":3,"title":"Array v-model","slug":"array-v-model","link":"#array-v-model","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]},{"level":2,"title":"See Also","slug":"see-also","link":"#see-also","children":[]}],"relativePath":"components/toggle/index.md"}'),Fs={name:"components/toggle/index.md"},As=Object.assign(Fs,{setup(a){const r=C(!1),y=C("off"),d=P(),t=C([]);return(b,p)=>{const D=V("preview");return u(),g("div",null,[Y,l(D,null,{default:s(()=>[l(o,null,{default:s(()=>[e("Text")]),_:1})]),_:1}),G,l(D,null,{default:s(()=>[l(o,null,{checked:s(()=>[W]),unchecked:s(()=>[J]),default:s(()=>[e(" Text ")]),_:1})]),_:1}),K,l(D,{class:"flex-col items-center space-y-3"},{default:s(()=>[l(o,{variant:"pill"},{default:s(()=>[e("Pill")]),_:1}),l(o,{variant:"flat"},{default:s(()=>[e("Flat")]),_:1})]),_:1}),Q,l(D,{class:"flex-col items-center space-y-3"},{default:s(()=>[l(o,{variant:"pill","checked-label":"Y","unchecked-label":"N"},{default:s(()=>[e("Text")]),_:1}),l(o,{variant:"flat","checked-label":"PM","unchecked-label":"AM"},{default:s(()=>[e("Text")]),_:1})]),_:1}),X,l(D,{class:"flex-col items-center space-y-3"},{default:s(()=>[l(o,{modelValue:A(d),"onUpdate:modelValue":p[0]||(p[0]=F=>S(d)?d.value=F:null)},{checked:s(()=>[l(A(O))]),unchecked:s(()=>[l(A($))]),default:s(()=>[e(" Dark Mode ")]),_:1},8,["modelValue"])]),_:1}),Z,l(D,{class:"flex-col items-center space-y-3"},{default:s(()=>[l(o,{variant:"pill","no-label":""},{default:s(()=>[e("Text")]),_:1}),l(o,{variant:"flat","no-label":""},{default:s(()=>[e("Text")]),_:1})]),_:1}),ss,l(D,{class:"flex-col items-center space-y-3"},{default:s(()=>[l(o,{variant:"pill",disabled:""},{default:s(()=>[e("Pill")]),_:1}),l(o,{variant:"flat",disabled:""},{default:s(()=>[e("Flat")]),_:1})]),_:1}),ls,l(D,{class:"flex-col items-center space-y-3"},{default:s(()=>[l(o,{readonly:""},{default:s(()=>[e("Readonly False")]),_:1}),l(o,{readonly:"",checked:""},{default:s(()=>[e("Readonly True")]),_:1})]),_:1}),as,l(D,{class:"flex-col items-center space-y-3"},{default:s(()=>[l(o,{modelValue:r.value,"onUpdate:modelValue":p[1]||(p[1]=F=>r.value=F)},{default:s(()=>[e("Text")]),_:1},8,["modelValue"])]),_:1}),es,n("pre",null,[n("code",null,i(r.value),1)]),ns,l(D,{class:"flex-col items-center space-y-3"},{default:s(()=>[l(o,{modelValue:y.value,"onUpdate:modelValue":p[2]||(p[2]=F=>y.value=F),value:"on","unchecked-value":"off"},{default:s(()=>[e("Lamp")]),_:1},8,["modelValue"])]),_:1}),os,n("pre",null,[n("code",null,i(y.value),1)]),ts,l(D,{class:"flex-col items-center"},{default:s(()=>[n("div",ps,[l(o,{modelValue:t.value,"onUpdate:modelValue":p[3]||(p[3]=F=>t.value=F),value:"apple"},{default:s(()=>[e("Apple")]),_:1},8,["modelValue"]),l(o,{modelValue:t.value,"onUpdate:modelValue":p[4]||(p[4]=F=>t.value=F),value:"grape"},{default:s(()=>[e("Grape")]),_:1},8,["modelValue"]),l(o,{modelValue:t.value,"onUpdate:modelValue":p[5]||(p[5]=F=>t.value=F),value:"pineapple"},{default:s(()=>[e("Pineapple")]),_:1},8,["modelValue"])])]),_:1}),cs,n("pre",rs,[n("code",null,i(t.value),1)]),Ds])}}});export{Cs as __pageData,As as default};
