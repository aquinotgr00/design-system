import{s}from"./index.d997e305.js";import{v as d,i as r}from"./value.830bdabd.js";import{i as f,h as V,f as h}from"./framework.76afac0a.js";function c(e,a){return Array.isArray(e)?d(e,a):r(e,a)}function g(e){const{emit:a}=f(),t=e.value,i=e.uncheckedValue,n=V(c(e.modelValue,t)||e.checked),o=h({get(){return c(e.modelValue,t)||e.checked},set(u){const l=u?t:i;Array.isArray(e.modelValue)?u?d(e.modelValue,l)||a("update:modelValue",[...e.modelValue,l]):a("update:modelValue",e.modelValue.filter(m=>!r(m,t))):a("update:modelValue",l),a("change",u)}});return s(n,o),n}export{g as u};
