import{a0 as p}from"./framework.303a6298.js";import{u as d}from"./use-singleton.bae644a8.js";function l(t,e,o=!1){return async function(a){const{default:i}=await p(()=>import("./TooltipContainer.bcbec51d.js"),["assets/chunks/TooltipContainer.bcbec51d.js","assets/chunks/theme.8e6a443b.js","assets/chunks/framework.303a6298.js","assets/chunks/index.d1acaa84.js","assets/chunks/floating-ui.dom.browser.min.a94d243b.js","assets/chunks/index.a1d1849f.js","assets/chunks/marked.esm.710fa320.js","assets/chunks/commonjsHelpers.042e6b4d.js","assets/chunks/vite-browser-external_commonjs-proxy.005f2268.js","assets/chunks/toString.314d06e3.js","assets/chunks/isObjectLike.53b0037d.js","assets/chunks/isArray.513c67aa.js","assets/chunks/isSymbol.4326927f.js"]),r=await d(i),n=a.target,u=n.dataset.tooltipId,c=n.dataset.tooltipEnable!=="false",w=n.dataset.tooltipAction;c&&w.includes(t)&&(r[e](u),o&&a.preventDefault())}}function f(t,{modifiers:e}){let o;return e.top?o="top":e.bottom&&(o="bottom"),o?e.left?o=`${o}-start`:e.right&&(o=`${o}-end`):e.right?o="right":e.left&&(o="left"),o||(o="top"),e.start&&!o.endsWith("start")?o=`${o}-start`:e.end&&!o.endsWith("end")&&(o=`${o}-end`),o}function h(t,{modifiers:e}){const o=[];return e.focus&&o.push("focus"),e.hover&&o.push("hover"),e.click&&o.push("click"),o.join("-")||"focus-hover"}function v(t,e){var o;return typeof e.value=="string"?e.value:t.hasAttribute("title")?t.getAttribute("title"):(o=t.dataset.tooltipText)!=null?o:""}function _(t,{modifiers:e}){return e.white?"white":"black"}const E=l("click","toggle",!0),m=l("hover","show"),L=l("hover","hide"),T=l("focus","show"),A=l("focus","hide"),x={async mounted(t,e){const{default:o}=await p(()=>import("./TooltipContainer.bcbec51d.js"),["assets/chunks/TooltipContainer.bcbec51d.js","assets/chunks/theme.8e6a443b.js","assets/chunks/framework.303a6298.js","assets/chunks/index.d1acaa84.js","assets/chunks/floating-ui.dom.browser.min.a94d243b.js","assets/chunks/index.a1d1849f.js","assets/chunks/marked.esm.710fa320.js","assets/chunks/commonjsHelpers.042e6b4d.js","assets/chunks/vite-browser-external_commonjs-proxy.005f2268.js","assets/chunks/toString.314d06e3.js","assets/chunks/isObjectLike.53b0037d.js","assets/chunks/isArray.513c67aa.js","assets/chunks/isSymbol.4326927f.js"]),s=await d(o),a=h(t,e),i=_(t,e),r=v(t,e),n=f(t,e),u=e.value!==!1&&!!r,c=s.add({target:t,placement:n,text:r,color:i});t.dataset.tooltipId=c,t.dataset.tooltipAction=a,t.dataset.tooltipText=r,t.dataset.tooltipEnable=u?"true":"false",t.removeAttribute("title"),t.addEventListener("click",E),t.addEventListener("mouseenter",m,{passive:!0}),t.addEventListener("mouseleave",L,{passive:!0}),t.addEventListener("focus",T,{passive:!0}),t.addEventListener("blur",A,{passive:!0})},async updated(t,e){const{default:o}=await p(()=>import("./TooltipContainer.bcbec51d.js"),["assets/chunks/TooltipContainer.bcbec51d.js","assets/chunks/theme.8e6a443b.js","assets/chunks/framework.303a6298.js","assets/chunks/index.d1acaa84.js","assets/chunks/floating-ui.dom.browser.min.a94d243b.js","assets/chunks/index.a1d1849f.js","assets/chunks/marked.esm.710fa320.js","assets/chunks/commonjsHelpers.042e6b4d.js","assets/chunks/vite-browser-external_commonjs-proxy.005f2268.js","assets/chunks/toString.314d06e3.js","assets/chunks/isObjectLike.53b0037d.js","assets/chunks/isArray.513c67aa.js","assets/chunks/isSymbol.4326927f.js"]),s=await d(o),a=t.dataset.tooltipId,i=h(t,e),r=_(t,e),n=v(t,e),u=f(t,e),c=e.value!==!1&&!!n;t.dataset.tooltipAction=i,t.dataset.tooltipText=n,t.dataset.tooltipEnable=c?"true":"false",s.update(a,{target:t,placement:u,text:n,color:r}),c&&e.value===!0&&s.show(a),c||s.hide(a),t.removeAttribute("title")},async beforeUnmount(t,e){const{default:o}=await p(()=>import("./TooltipContainer.bcbec51d.js"),["assets/chunks/TooltipContainer.bcbec51d.js","assets/chunks/theme.8e6a443b.js","assets/chunks/framework.303a6298.js","assets/chunks/index.d1acaa84.js","assets/chunks/floating-ui.dom.browser.min.a94d243b.js","assets/chunks/index.a1d1849f.js","assets/chunks/marked.esm.710fa320.js","assets/chunks/commonjsHelpers.042e6b4d.js","assets/chunks/vite-browser-external_commonjs-proxy.005f2268.js","assets/chunks/toString.314d06e3.js","assets/chunks/isObjectLike.53b0037d.js","assets/chunks/isArray.513c67aa.js","assets/chunks/isSymbol.4326927f.js"]),s=await d(o),a=t.dataset.tooltipId,i=v(t,e);s.remove(a),t.removeEventListener("click",E),t.removeEventListener("mouseenter",m),t.removeEventListener("mouseleave",L),t.removeEventListener("focus",T),t.removeEventListener("blur",A),t.setAttribute("title",i),delete t.dataset.tooltipId,delete t.dataset.tooltipAction,delete t.dataset.tooltipText,delete t.dataset.tooltipEnable}},k=x;export{x as p,k as v};
