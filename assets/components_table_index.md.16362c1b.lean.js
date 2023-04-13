import{d as _,p as o}from"./chunks/index.a838eb7a.js";import{p as f}from"./chunks/Avatar.87781ebe.js";import{p as h}from"./chunks/Label.22af9b11.js";import{H as E}from"./chunks/Heading.32041822.js";import{p as q}from"./chunks/Text.cca0b09d.js";import{h as y,B as T,o as v,c as x,D as s,z as l,x as r,t as C,b as a,Q as p,a as D,a4 as u}from"./chunks/framework.76afac0a.js";import"./chunks/Checkbox.547348cc.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.36800472.js";import"./chunks/index.6fd0fc39.js";import"./chunks/index.d997e305.js";import"./chunks/value.830bdabd.js";import"./chunks/index.66044519.js";import"./chunks/utils-6ba05f5b.d8ec137d.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/defu.573334b8.js";import"./chunks/startCase.e106d7d3.js";import"./chunks/toString.9cda75b1.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/isArray.513c67aa.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/create-image.28dfb74f.js";import"./chunks/avatar.bd58a373.js";import"./chunks/color-hash.af77277d.js";import"./chunks/load-image.265b152a.js";import"./chunks/Label.vue_vue_type_style_index_0_lang.29e08e6b.js";import"./chunks/Dot.ffe6acad.js";import"./chunks/16.f3fd109d.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.0af49fdd.js";const P="/design-system/assets/img-table-empty-records.f907afbc.svg",S=p("",4),k=p("",2),V=p("",4),I=p("",2),N=p("",3),j=p("",3),R=p("",3),z=p("",2),w=r("h3",{id:"disabling-some-item",tabindex:"-1"},[D("Disabling some item "),r("a",{class:"header-anchor",href:"#disabling-some-item","aria-label":'Permalink to "Disabling some item"'},"​")],-1),B=r("p",null,[D("set "),r("code",null,"_selectable"),D(" to "),r("code",null,"false"),D(" in your items to disabled item from selection.")],-1),U=p("",3),L=p("",3),H={class:"flex items-center space-x-2"},J=p("",2),O=p("",3),W={class:"flex flex-col justify-center items-center"},Q=r("img",{src:P},null,-1),G=p("",8),Es=JSON.parse('{"title":"Table · Components","description":"Delightful datatables.","frontmatter":{"title":"Table · Components","description":"Delightful datatables."},"headers":[],"relativePath":"components/table/index.md"}'),K={name:"components/table/index.md"},qs=Object.assign(K,{setup(M){const e=_(["id","name","status"]),b=_([{key:"id",label:"PrivyID"},{key:"name",label:"Name"},{key:"status",label:"Is Active",formatter:m=>m?"Active":"Deactive"}]),c=y([{id:1,name:"Tarjono",status:!0},{id:2,name:"Renatta",status:!1},{id:3,name:"Jonathan Smith",status:!0},{id:4,name:"Arch Brown",status:!0}]),g=y([{id:1,name:"Tarjono",status:!0},{id:2,name:"Tarjono",status:!1},{id:3,name:"Tarjono",status:!0},{id:4,name:"Can't be selected",status:!0,_selectable:!1}]),A=y([]),i=y([]),d=y([]);return(m,F)=>{const t=T("preview");return v(),x("div",null,[S,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{fields:a(e),items:a(c)},null,8,["fields","items"])]),_:1}),k,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{fields:a(b),items:a(c)},null,8,["fields","items"])]),_:1}),V,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{fields:a(e),items:a(A)},null,8,["fields","items"])]),_:1}),I,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{fields:a(e),items:a(A),"empty-label":"There’s nothing to show here"},null,8,["fields","items"])]),_:1}),N,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{variant:"flexible",fields:a(e),items:a(c)},null,8,["fields","items"]),s(o,{variant:"static",fields:a(e),items:a(c)},null,8,["fields","items"])]),_:1}),j,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{selectable:"",fields:a(e),items:a(c)},null,8,["fields","items"])]),_:1}),R,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{modelValue:a(i),"onUpdate:modelValue":F[0]||(F[0]=n=>u(i)?i.value=n:null),selectable:"",fields:a(e),items:a(c)},null,8,["modelValue","fields","items"])]),_:1}),z,r("pre",null,[r("code",null,C(a(i)),1)]),w,B,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{modelValue:a(d),"onUpdate:modelValue":F[1]||(F[1]=n=>u(d)?d.value=n:null),selectable:"",fields:a(e),items:a(g)},null,8,["modelValue","fields","items"])]),_:1}),U,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{fields:a(e),items:a(c),"onUpdate:items":F[2]||(F[2]=n=>u(c)?c.value=n:null),draggable:""},null,8,["fields","items"])]),_:1}),L,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{fields:a(e),items:a(c)},{"cell(name)":l(({item:n})=>[r("div",H,[s(f,{size:"sm",name:n.name},null,8,["name"]),r("span",null,C(n.name),1)])]),"cell(status)":l(({item:n})=>[s(h,{variant:"light",color:n.status?"success":"default",size:"sm"},{default:l(()=>[D(C(n.status?"active":"inactive"),1)]),_:2},1032,["color"])]),_:1},8,["fields","items"])]),_:1}),J,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{fields:a(e),items:a(c)},{"head(status)":l(({label:n})=>[D(C(n),1),s(h,{size:"xs",class:"ml-1"},{default:l(()=>[D("new")]),_:1})]),_:1},8,["fields","items"])]),_:1}),O,s(t,{class:"flex-col space-y-2"},{default:l(()=>[s(o,{fields:a(e),items:a(A)},{empty:l(()=>[r("div",W,[Q,s(E,{element:"h6",class:"mt-12"},{default:l(()=>[D("Uh oh, no data")]),_:1}),s(q,{variant:"body2",class:"py-4 text-subtle dark:text-dark-subtle"},{default:l(()=>[D("We’re empty-handed!")]),_:1})])]),_:1},8,["fields","items"])]),_:1}),G])}}});export{Es as __pageData,qs as default};
