var ve=Object.defineProperty;var te=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var se=(s,e,t)=>e in s?ve(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,R=(s,e)=>{for(var t in e||(e={}))ye.call(e,t)&&se(s,t,e[t]);if(te)for(var t of te(e))Ee.call(e,t)&&se(s,t,e[t]);return s};import{d as le,u as Se,S as U}from"./chunks/Select.76f46e97.js";import{H as Ae,c as Ie,w as j,r as L,U as we,x as be,b as Re,g as C,h as W,f as V,q as Le,i as Ne,k as Oe,j as $e,a as Ce,u as ne}from"./app.1eb03a29.js";import{u as Te}from"./chunks/index.4d4fdf0b.js";import{e as ke,t as Fe}from"./chunks/index.55ec8b1b.js";import"./chunks/Dropdown.40640e16.js";import"./chunks/Button.5f82a21b.js";import"./chunks/utils-6ba05f5b.afbd3892.js";import"./chunks/use-input.d5bf5b77.js";import"./chunks/SpinnerRing.8452b5ea.js";import"./chunks/use-loading.07264d2b.js";import"./chunks/value.b16f1ede.js";function E(s){return Array.isArray?Array.isArray(s):fe(s)==="[object Array]"}const Pe=1/0;function je(s){if(typeof s=="string")return s;let e=s+"";return e=="0"&&1/s==-Pe?"-0":e}function Ve(s){return s==null?"":je(s)}function v(s){return typeof s=="string"}function he(s){return typeof s=="number"}function Be(s){return s===!0||s===!1||De(s)&&fe(s)=="[object Boolean]"}function ue(s){return typeof s=="object"}function De(s){return ue(s)&&s!==null}function m(s){return s!=null}function z(s){return!s.trim().length}function fe(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Ke="Incorrect 'index' type",Ue=s=>`Invalid value for key ${s}`,We=s=>`Pattern length exceeds max of ${s}.`,ze=s=>`Missing ${s} property in key`,He=s=>`Property 'weight' in key '${s}' must be a positive integer`,re=Object.prototype.hasOwnProperty;class Ge{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{let i=de(n);t+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function de(s){let e=null,t=null,n=null,i=1,r=null;if(v(s)||E(s))n=s,e=ie(s),t=H(s);else{if(!re.call(s,"name"))throw new Error(ze("name"));const c=s.name;if(n=c,re.call(s,"weight")&&(i=s.weight,i<=0))throw new Error(He(c));e=ie(c),t=H(c),r=s.getFn}return{path:e,id:t,weight:i,src:n,getFn:r}}function ie(s){return E(s)?s:s.split(".")}function H(s){return E(s)?s.join("."):s}function Ye(s,e){let t=[],n=!1;const i=(r,c,o)=>{if(!!m(r))if(!c[o])t.push(r);else{let a=c[o];const l=r[a];if(!m(l))return;if(o===c.length-1&&(v(l)||he(l)||Be(l)))t.push(Ve(l));else if(E(l)){n=!0;for(let h=0,u=l.length;h<u;h+=1)i(l[h],c,o+1)}else c.length&&i(l,c,o+1)}};return i(s,v(e)?e.split("."):e,0),n?t:t[0]}const Qe={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Xe={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,e)=>s.score===e.score?s.idx<e.idx?-1:1:s.score<e.score?-1:1},Je={location:0,threshold:.6,distance:100},Ze={useExtendedSearch:!1,getFn:Ye,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var f=R(R(R(R({},Xe),Qe),Je),Ze);const qe=/[^ ]+/g;function et(s=1,e=3){const t=new Map,n=Math.pow(10,e);return{get(i){const r=i.match(qe).length;if(t.has(r))return t.get(r);const c=1/Math.pow(r,.5*s),o=parseFloat(Math.round(c*n)/n);return t.set(r,o),o},clear(){t.clear()}}}class Z{constructor({getFn:e=f.getFn,fieldNormWeight:t=f.fieldNormWeight}={}){this.norm=et(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,v(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();v(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!m(e)||z(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((i,r)=>{let c=i.getFn?i.getFn(e):this.getFn(e,i.path);if(!!m(c)){if(E(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(!!m(h))if(v(h)&&!z(h)){let u={v:h,i:l,n:this.norm.get(h)};o.push(u)}else E(h)&&h.forEach((u,d)=>{a.push({nestedArrIndex:d,value:u})})}n.$[r]=o}else if(v(c)&&!z(c)){let o={v:c,n:this.norm.get(c)};n.$[r]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function pe(s,e,{getFn:t=f.getFn,fieldNormWeight:n=f.fieldNormWeight}={}){const i=new Z({getFn:t,fieldNormWeight:n});return i.setKeys(s.map(de)),i.setSources(e),i.create(),i}function tt(s,{getFn:e=f.getFn,fieldNormWeight:t=f.fieldNormWeight}={}){const{keys:n,records:i}=s,r=new Z({getFn:e,fieldNormWeight:t});return r.setKeys(n),r.setIndexRecords(i),r}function P(s,{errors:e=0,currentLocation:t=0,expectedLocation:n=0,distance:i=f.distance,ignoreLocation:r=f.ignoreLocation}={}){const c=e/s.length;if(r)return c;const o=Math.abs(n-t);return i?c+o/i:o?1:c}function st(s=[],e=f.minMatchCharLength){let t=[],n=-1,i=-1,r=0;for(let c=s.length;r<c;r+=1){let o=s[r];o&&n===-1?n=r:!o&&n!==-1&&(i=r-1,i-n+1>=e&&t.push([n,i]),n=-1)}return s[r-1]&&r-n>=e&&t.push([n,r-1]),t}const N=32;function nt(s,e,t,{location:n=f.location,distance:i=f.distance,threshold:r=f.threshold,findAllMatches:c=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,includeMatches:a=f.includeMatches,ignoreLocation:l=f.ignoreLocation}={}){if(e.length>N)throw new Error(We(N));const h=e.length,u=s.length,d=Math.max(0,Math.min(n,u));let p=r,g=d;const _=o>1||a,w=_?Array(u):[];let y;for(;(y=s.indexOf(e,g))>-1;){let M=P(e,{currentLocation:y,expectedLocation:d,distance:i,ignoreLocation:l});if(p=Math.min(M,p),g=y+h,_){let S=0;for(;S<h;)w[y+S]=1,S+=1}}g=-1;let O=[],b=1,k=h+u;const xe=1<<h-1;for(let M=0;M<h;M+=1){let S=0,A=k;for(;S<A;)P(e,{errors:M,currentLocation:d+A,expectedLocation:d,distance:i,ignoreLocation:l})<=p?S=A:k=A,A=Math.floor((k-S)/2+S);k=A;let q=Math.max(1,d-A+1),K=c?u:Math.min(d+A,u)+h,$=Array(K+2);$[K+1]=(1<<M)-1;for(let x=K;x>=q;x-=1){let F=x-1,ee=t[s.charAt(F)];if(_&&(w[F]=+!!ee),$[x]=($[x+1]<<1|1)&ee,M&&($[x]|=(O[x+1]|O[x])<<1|1|O[x+1]),$[x]&xe&&(b=P(e,{errors:M,currentLocation:F,expectedLocation:d,distance:i,ignoreLocation:l}),b<=p)){if(p=b,g=F,g<=d)break;q=Math.max(1,2*d-g)}}if(P(e,{errors:M+1,currentLocation:d,expectedLocation:d,distance:i,ignoreLocation:l})>p)break;O=$}const D={isMatch:g>=0,score:Math.max(.001,b)};if(_){const M=st(w,o);M.length?a&&(D.indices=M):D.isMatch=!1}return D}function rt(s){let e={};for(let t=0,n=s.length;t<n;t+=1){const i=s.charAt(t);e[i]=(e[i]||0)|1<<n-t-1}return e}class ge{constructor(e,{location:t=f.location,threshold:n=f.threshold,distance:i=f.distance,includeMatches:r=f.includeMatches,findAllMatches:c=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:l=f.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(d,p)=>{this.chunks.push({pattern:d,alphabet:rt(d),startIndex:p})},u=this.pattern.length;if(u>N){let d=0;const p=u%N,g=u-p;for(;d<g;)h(this.pattern.substr(d,N),d),d+=N;if(p){const _=u-N;h(this.pattern.substr(_),_)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,e.length-1]]),g}const{location:i,distance:r,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],u=0,d=!1;this.chunks.forEach(({pattern:g,alphabet:_,startIndex:w})=>{const{isMatch:y,score:O,indices:b}=nt(e,g,_,{location:i+w,distance:r,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:n,ignoreLocation:l});y&&(d=!0),u+=O,y&&b&&(h=[...h,...b])});let p={isMatch:d,score:d?u/this.chunks.length:1};return d&&n&&(p.indices=h),p}}class I{constructor(e){this.pattern=e}static isMultiMatch(e){return ce(e,this.multiRegex)}static isSingleMatch(e){return ce(e,this.singleRegex)}search(){}}function ce(s,e){const t=s.match(e);return t?t[1]:null}class it extends I{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class ct extends I{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ot extends I{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class at extends I{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class lt extends I{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ht extends I{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class me extends I{constructor(e,{location:t=f.location,threshold:n=f.threshold,distance:i=f.distance,includeMatches:r=f.includeMatches,findAllMatches:c=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:l=f.ignoreLocation}={}){super(e);this._bitapSearch=new ge(e,{location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class _e extends I{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,n;const i=[],r=this.pattern.length;for(;(n=e.indexOf(this.pattern,t))>-1;)t=n+r,i.push([n,t-1]);const c=!!i.length;return{isMatch:c,score:c?0:1,indices:i}}}const G=[it,_e,ot,at,ht,lt,ct,me],oe=G.length,ut=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ft="|";function dt(s,e={}){return s.split(ft).map(t=>{let n=t.trim().split(ut).filter(r=>r&&!!r.trim()),i=[];for(let r=0,c=n.length;r<c;r+=1){const o=n[r];let a=!1,l=-1;for(;!a&&++l<oe;){const h=G[l];let u=h.isMultiMatch(o);u&&(i.push(new h(u,e)),a=!0)}if(!a)for(l=-1;++l<oe;){const h=G[l];let u=h.isSingleMatch(o);if(u){i.push(new h(u,e));break}}}return i})}const pt=new Set([me.type,_e.type]);class gt{constructor(e,{isCaseSensitive:t=f.isCaseSensitive,includeMatches:n=f.includeMatches,minMatchCharLength:i=f.minMatchCharLength,ignoreLocation:r=f.ignoreLocation,findAllMatches:c=f.findAllMatches,location:o=f.location,threshold:a=f.threshold,distance:l=f.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:i,findAllMatches:c,ignoreLocation:r,location:o,threshold:a,distance:l},this.pattern=t?e:e.toLowerCase(),this.query=dt(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let r=0,c=[],o=0;for(let a=0,l=t.length;a<l;a+=1){const h=t[a];c.length=0,r=0;for(let u=0,d=h.length;u<d;u+=1){const p=h[u],{isMatch:g,indices:_,score:w}=p.search(e);if(g){if(r+=1,o+=w,n){const y=p.constructor.type;pt.has(y)?c=[...c,..._]:c.push(_)}}else{o=0,r=0,c.length=0;break}}if(r){let u={isMatch:!0,score:o/r};return n&&(u.indices=c),u}}return{isMatch:!1,score:1}}}const Y=[];function mt(...s){Y.push(...s)}function Q(s,e){for(let t=0,n=Y.length;t<n;t+=1){let i=Y[t];if(i.condition(s,e))return new i(s,e)}return new ge(s,e)}const B={AND:"$and",OR:"$or"},X={PATH:"$path",PATTERN:"$val"},J=s=>!!(s[B.AND]||s[B.OR]),_t=s=>!!s[X.PATH],Mt=s=>!E(s)&&ue(s)&&!J(s),ae=s=>({[B.AND]:Object.keys(s).map(e=>({[e]:s[e]}))});function Me(s,e,{auto:t=!0}={}){const n=i=>{let r=Object.keys(i);const c=_t(i);if(!c&&r.length>1&&!J(i))return n(ae(i));if(Mt(i)){const a=c?i[X.PATH]:r[0],l=c?i[X.PATTERN]:i[a];if(!v(l))throw new Error(Ue(a));const h={keyId:H(a),pattern:l};return t&&(h.searcher=Q(l,e)),h}let o={children:[],operator:r[0]};return r.forEach(a=>{const l=i[a];E(l)&&l.forEach(h=>{o.children.push(n(h))})}),o};return J(s)||(s=ae(s)),n(s)}function xt(s,{ignoreFieldNorm:e=f.ignoreFieldNorm}){s.forEach(t=>{let n=1;t.matches.forEach(({key:i,norm:r,score:c})=>{const o=i?i.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(e?1:r))}),t.score=n})}function vt(s,e){const t=s.matches;e.matches=[],m(t)&&t.forEach(n=>{if(!m(n.indices)||!n.indices.length)return;const{indices:i,value:r}=n;let c={indices:i,value:r};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),e.matches.push(c)})}function yt(s,e){e.score=s.score}function Et(s,e,{includeMatches:t=f.includeMatches,includeScore:n=f.includeScore}={}){const i=[];return t&&i.push(vt),n&&i.push(yt),s.map(r=>{const{idx:c}=r,o={item:e[c],refIndex:c};return i.length&&i.forEach(a=>{a(r,o)}),o})}class T{constructor(e,t={},n){this.options=R(R({},f),t),this.options.useExtendedSearch,this._keyStore=new Ge(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Z))throw new Error(Ke);this._myIndex=t||pe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!m(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let n=0,i=this._docs.length;n<i;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,i-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:r,sortFn:c,ignoreFieldNorm:o}=this.options;let a=v(e)?v(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return xt(a,{ignoreFieldNorm:o}),r&&a.sort(c),he(t)&&t>-1&&(a=a.slice(0,t)),Et(a,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(e){const t=Q(e,this.options),{records:n}=this._myIndex,i=[];return n.forEach(({v:r,i:c,n:o})=>{if(!m(r))return;const{isMatch:a,score:l,indices:h}=t.searchIn(r);a&&i.push({item:r,idx:c,matches:[{score:l,value:r,norm:o,indices:h}]})}),i}_searchLogical(e){const t=Me(e,this.options),n=(o,a,l)=>{if(!o.children){const{keyId:u,searcher:d}=o,p=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(a,u),searcher:d});return p&&p.length?[{idx:l,item:a,matches:p}]:[]}const h=[];for(let u=0,d=o.children.length;u<d;u+=1){const p=o.children[u],g=n(p,a,l);if(g.length)h.push(...g);else if(o.operator===B.AND)return[]}return h},i=this._myIndex.records,r={},c=[];return i.forEach(({$:o,i:a})=>{if(m(o)){let l=n(t,o,a);l.length&&(r[a]||(r[a]={idx:a,item:o,matches:[]},c.push(r[a])),l.forEach(({matches:h})=>{r[a].matches.push(...h)}))}}),c}_searchObjectList(e){const t=Q(e,this.options),{keys:n,records:i}=this._myIndex,r=[];return i.forEach(({$:c,i:o})=>{if(!m(c))return;let a=[];n.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:c[h],searcher:t}))}),a.length&&r.push({idx:o,item:c,matches:a})}),r}_findMatches({key:e,value:t,searcher:n}){if(!m(t))return[];let i=[];if(E(t))t.forEach(({v:r,i:c,n:o})=>{if(!m(r))return;const{isMatch:a,score:l,indices:h}=n.searchIn(r);a&&i.push({score:l,key:e,value:r,idx:c,norm:o,indices:h})});else{const{v:r,n:c}=t,{isMatch:o,score:a,indices:l}=n.searchIn(r);o&&i.push({score:a,key:e,value:r,norm:c,indices:l})}return i}}T.version="6.6.2";T.createIndex=pe;T.parseIndex=tt;T.config=f;T.parseQuery=Me;mt(gt);var St=le({setup({props:s,keyword:e}){const t=Ae(),n=Se(s),i=Ie(()=>e.value?t.value.search(e.value).map(r=>r.item):n.value);return j(n,r=>{t.value=new T(r,{keys:["text"]})},{immediate:!0}),i}});function At(s){return le({setup({isLoading:e,keyword:t}){const n=L([]),i=L(1),r=L(!1),c=L(!1),o=be(),a=L(),l=we(()=>typeof s!="function"?s.load:s);function h(){e.value=!0,l.value(t.value,i.value,20).then(d=>{d&&d.length>0?(n.value.push(...d),i.value++):r.value=!0}).finally(()=>{e.value=!1})}function u(){r.value=!1,i.value=1,n.value=[]}return j(t,()=>{c.value=!0,u()}),ke(t,()=>{c.value=!1,h()},{debounce:500}),j(c,d=>{e.value=d}),typeof s!="function"&&s.watch&&j(s.watch,()=>{u(),h()}),Fe(()=>{a.value=o.proxy.$el.querySelector(".dropdown__menu"),h()}),Te(a,"scroll",d=>{const p=d.target;p.scrollTop+p.offsetHeight>=p.scrollHeight&&!e.value&&!r.value&&h()},{passive:!0}),n}})}const It=Ne('<h1 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h3>',3),wt=V("strong",null,"Result:",-1),bt=Oe(),Kt='{"title":"Select","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"}],"relativePath":"select/component.md"}',Rt={},Ut=Object.assign(Rt,{setup(s){const e=L(""),t=L(""),n=At({watch:[e],load:(i,r,c)=>new Promise(o=>{setTimeout(()=>{r>=3&&o([]);const a=[],l=(r-1)*c,h=l+c;for(let u=l+1;u<=h;++u)a.push({text:`${e.value} ${u}`,value:u});o(a)},1e3)})});return(i,r)=>{const c=$e("preview");return Ce(),Re("div",null,[It,C(c,null,{default:W(()=>[C(U,{placeholder:"Coba",options:["Apple","Banana","Grape"],modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o)},null,8,["modelValue"])]),_:1}),V("p",null,[wt,bt,V("pre",null,[V("code",null,Le(e.value),1)])]),C(c,null,{default:W(()=>[C(U,{placeholder:"Coba",options:[{text:"\u{1F34E} Apple",value:"Apple"},{text:"\u{1F347} Grape",value:"Grape"},{text:"\u{1F34C} Banana",value:"Banana"}],modelValue:e.value,"onUpdate:modelValue":r[1]||(r[1]=o=>e.value=o),adapter:ne(St)},null,8,["modelValue","adapter"])]),_:1}),C(c,null,{default:W(()=>[C(U,{placeholder:"Coba",modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=o=>t.value=o),adapter:ne(n)},null,8,["modelValue","adapter"])]),_:1})])}}});export{Kt as __pageData,Ut as default};
