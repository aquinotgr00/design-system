import{r as s,c as f,L as V,E as h}from"../app.5d60bad4.js";import{v as d,i as r}from"./value.27565d8f.js";function n(e,a){return Array.isArray(e)?d(e,a):r(e,a)}function A(e){const{emit:a}=h(),t=e.value,i=e.uncheckedValue,c=s(n(e.modelValue,t)||e.checked),o=f({get(){return n(e.modelValue,t)||e.checked},set(u){const l=u?t:i;Array.isArray(e.modelValue)?u?d(e.modelValue,l)||a("update:modelValue",[...e.modelValue,l]):a("update:modelValue",e.modelValue.filter(m=>!r(m,t))):a("update:modelValue",l),a("change",u)}});return V(c,o),c}export{A as u};
