import{s}from"./index.f8948324.js";import{v as d,i as r}from"./value.830bdabd.js";import{j as f,k as V,F as h}from"../app.20e38cb1.js";function c(e,a){return Array.isArray(e)?d(e,a):r(e,a)}function g(e){const{emit:a}=h(),t=e.value,o=e.uncheckedValue,n=f(c(e.modelValue,t)||e.checked),i=V({get(){return c(e.modelValue,t)||e.checked},set(u){const l=u?t:o;Array.isArray(e.modelValue)?u?d(e.modelValue,l)||a("update:modelValue",[...e.modelValue,l]):a("update:modelValue",e.modelValue.filter(m=>!r(m,t))):a("update:modelValue",l),a("change",u)}});return s(n,i),n}export{g as u};
