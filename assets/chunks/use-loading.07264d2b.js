import{t as r}from"./index.55ec8b1b.js";import{r as l,c as d}from"../app.1eb03a29.js";function f(e={elapsed:!0}){const a=l(0),t=l(e.elapsed!==!1),u=d({get(){return a.value>0||t.value},set(s){s===!0?a.value++:a.value--}});return r(()=>{if(e.elapsed!==!1){const s=e.elapsed===!0?200:e.elapsed;setTimeout(()=>{t.value=!1},s)}}),u}export{f as u};
