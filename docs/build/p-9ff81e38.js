import{h as t}from"./p-d3be955c.js";const e=(()=>{let e=new Map,r={currentAlert:"",queueLength:0};const n=(t,e)=>{Array.isArray(t)?[...t].forEach(t=>{e[t]=r[t]}):e[t]=Object.assign({},r)},s=(t,r)=>(e.has(t)||(e.set(t,r),n(r,t)),()=>{e.has(t)&&e.delete(t)});return{Provider:({state:t},s)=>(r=t,e.forEach(n),s),Consumer:(e,r)=>((e,r)=>t("context-consumer",{subscribe:e,renderer:r}))(s,r[0]),injectProps:(t,r)=>{const n=t.prototype,o=n.connectedCallback,c=n.disconnectedCallback;n.connectedCallback=function(){if(s(this,r),o)return o.call(this)},n.disconnectedCallback=function(){e.delete(this),c&&c.call(this)}}}})();export{e as A};