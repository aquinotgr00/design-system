import{t as $,o as U,a as h}from"./index.72367aa0.js";import{p as X}from"./Button.d9b731e3.js";import{f as O,x as R,k as S,o as p,c as I,l as v,e as N,y as z,g as j,h as y,z as q,i as E,A,r as m,q as f,w,B as D,a as g,t as B,m as T,s as H,T as P,C as J,D as Q,d as Y,E as Z,n as x}from"../app.5d497f38.js";import{u as G}from"./utils-6ba05f5b.05fdec50.js";import{u as ee}from"./use-focus.57b9612f.js";import{a as te,c as oe,f as ne,s as ae,o as se}from"./floating-ui.dom.esm.9d13274a.js";import{u as le}from"./index.b48c8fd4.js";import{I as re}from"./16.d8086a3c.js";const M=Symbol("DROPDOWN_CONTEXT"),ie=O({props:{text:{type:String,default:""}},emits:["click"],setup(e,{emit:a}){const s=R(M,void 0,!0);function o(l){a("click",l),s!=null&&s.close&&!l.defaultPrevented&&s.close()}return{handleOnClick:o}}});function de(e,a,s,o,l,i){return p(),I("button",{"data-testid":"dropdown-item",class:"dropdown__item",onClick:a[0]||(a[0]=(...t)=>e.handleOnClick&&e.handleOnClick(...t))},[v(e.$slots,"default",{},()=>[N(z(e.text),1)])])}const ue=S(ie,[["render",de]]);var pe=G,F=pe.createSVGComponent(F,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"}}]),ce=F;const fe=ce;var ve=G,L=ve.createSVGComponent(L,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M6.7 12.3L2.9 8.5 15 8.5 15 7.5 2.9 7.5 6.7 3.7 6 3 1 8 6 13z"}}]),me=L;const we=me,V=Symbol("DropdownTree"),_e=O({components:{DropdownItem:ue,IconNext:fe,IconBack:we},props:{text:{type:String,default:""},noCaret:{type:Boolean,default:!1}},emits:["click"],setup(e,{slots:a,emit:s}){var n;const o=R(V,void 0,!0),l=j("slide-left"),i=y(()=>o===void 0),t=(n=o==null?void 0:o.tree)!=null?n:q({_level:0,slots:a}),r=()=>{t.value={_level:t.value._level+1,prev:t.value,slots:a}},d=()=>{t.value.prev&&(t.value=t.value.prev)},b=y(()=>t.value.slots.default),k=y(()=>Boolean(i.value&&t.value.prev));E(t,(u,C)=>{l.value=u._level>C._level?"slide-left":"slide-right"}),i.value&&A(V,{tree:t,next:r,back:d});function _(){i.value&&(t.value={prev:void 0,_level:0,slots:a})}function c(){const u=new MouseEvent("click");s("click",u),u.defaultPrevented||r()}return{isRoot:i,tree:t,view:b,next:r,back:d,reset:_,canBack:k,transition:l,handleOnClick:c}}});const be=T("div",{class:"dropdown__group-content"},null,-1),ke={class:"dropdown__subitem__content"};function he(e,a,s,o,l,i){const t=m("IconBack"),r=m("DropdownItem"),d=m("IconNext");return p(),f(P,{name:e.transition,mode:"out-in"},{default:w(()=>[(p(),I("div",{key:e.tree._level,"data-testid":"dropdown-subitem",class:"dropdown__subitem"},[e.canBack?(p(),f(r,{key:"btn-back","data-testid":"dropdown-back",class:"dropdown__subitem__btn dropdown__subitem__btn--back",onClick:a[0]||(a[0]=D(b=>e.back(),["prevent"]))},{default:w(()=>[v(e.$slots,"button-back",{},()=>[g(t,{class:"dropdown__subitem__next"}),be])]),_:3})):B("",!0),e.isRoot?(p(),f(H(e.view),{key:2})):(p(),f(r,{key:"btn-next",class:"dropdown__subitem__btn",onClick:D(e.handleOnClick,["prevent"])},{default:w(()=>[T("div",ke,[v(e.$slots,"button-content",{next:e.next,back:e.back},()=>[N(z(e.text),1)])]),e.noCaret?B("",!0):(p(),f(d,{key:0,"data-testid":"dropdown-subitem-next",class:"dropdown__subitem__next"}))]),_:3},8,["onClick"]))]))]),_:3},8,["name"])}const ye=S(_e,[["render",he]]),ge=O({components:{Button:X,DropdownGroup:ye,IconArrow:re},props:{modelValue:{type:Boolean,default:!1},text:{type:String,default:""},placement:{type:String,default:"bottom-start"},variant:{type:String,default:"solid"},color:{type:String,default:"default"},size:{type:String,default:"md"},icon:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},noCaret:{type:Boolean,default:!1},divider:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["show","hide","update:modelValue"],setup(e,{emit:a}){const s=$("dropdown"),o=$("menu"),l=$("wizard"),i=J(e,"placement"),t=le(e),{next:r,prev:d}=ee(o),b=y(()=>{const n=[""];return e.divider&&n.push("dropdown--divider"),n});function k(){e.disabled||(t.value?c():_())}function _(){e.disabled||(t.value=!0,a("show"))}function c(){e.disabled||(t.value=!1,a("hide"))}return U(o,()=>{t.value&&setTimeout(()=>{c()})},{ignore:[s]}),h("Escape",n=>{const u=n.target;t.value&&(c(),typeof u.blur=="function"&&u.blur())}),h(["ArrowUp"],n=>{n.preventDefault(),t.value&&d()}),h(["ArrowDown"],n=>{n.preventDefault(),t.value&&r()}),h(["Tab"],n=>{n.preventDefault(),t.value&&(n.shiftKey?d():r())}),Q(n=>{if(s.value&&o.value){const u=te(s.value,o.value,()=>{oe(s.value,o.value,{strategy:"absolute",placement:i.value,middleware:[ne(),ae(),se(8)]}).then(({x:C,y:W,placement:K})=>{o.value&&(o.value.dataset.popperPlacement=K,o.value.style.left=`${C||0}px`,o.value.style.top=`${W||0}px`)})});n(u)}},{flush:"post"}),E(t,n=>{!n&&l.value&&l.value.reset()},{immediate:!0}),A(M,{isOpen:t,toggle:k,open:_,close:c}),{isOpen:t,classNames:b,toggle:k,open:_,close:c}}});const Ce={ref:"menu","data-testid":"dropdown-menu",class:"dropdown__menu"};function $e(e,a,s,o,l,i){const t=m("IconArrow"),r=m("Button"),d=m("DropdownGroup");return p(),I("div",{ref:"dropdown",class:x(["dropdown",[{"dropdown--open":e.isOpen,"dropdown--no-caret":e.noCaret},e.classNames]]),"data-testid":"dropdown"},[v(e.$slots,"activator",{toggle:e.toggle,open:e.open,close:e.close,isOpen:e.isOpen},()=>[g(r,{"data-testid":"dropdown-activator",class:"dropdown__activator",variant:e.variant,color:e.color,size:e.size,icon:e.icon,pill:e.pill,disabled:e.disabled,onClick:D(e.toggle,["prevent"])},{default:w(()=>[v(e.$slots,"button-content",{},()=>[N(z(e.text),1)]),e.noCaret?B("",!0):(p(),f(t,{key:0,class:"dropdown__caret","data-testid":"dropdown-caret"}))]),_:3},8,["variant","color","size","icon","pill","disabled","onClick"])]),g(P,{name:"fade"},{default:w(()=>[Y(T("div",Ce,[g(d,{ref:"wizard",class:"dropdown__menu-container"},{default:w(()=>[v(e.$slots,"default")]),_:3},512)],512),[[Z,e.isOpen]])]),_:3})],2)}const Ve=S(ge,[["render",$e]]);export{Ve as D,ye as a,ue as p};
