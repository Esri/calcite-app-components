const e="calcite-app";let t,n,l,s=!1,o=!1,i=!1,r=!1;const c="undefined"!=typeof window?window:{},a=c.CSS,f=c.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},d=(()=>(f.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),h=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p=(e,t,n)=>{n&&n.map(([n,l,s])=>{const o=e,i=m(t,s),r=y(n);u.ael(o,l,i,r),(t.s=t.s||[]).push(()=>u.rel(o,l,i,r))})},m=(e,t)=>n=>{256&e.t?e.o[t](n):(e.i=e.i||[]).push([t,n])},y=e=>0!=(2&e),b="http://www.w3.org/1999/xlink",w=new WeakMap,v=e=>"sc-"+e.u,k={},g=e=>"object"==(e=typeof e)||"function"===e,j=(e,t,...n)=>{let l=null,s=null,o=null,i=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!g(l))&&(l+=""),i&&r?c[c.length-1].$+=l:c.push(i?O(null,l):l),r=i)};if(a(n),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,C);const f=O(e,null);return f.h=t,c.length>0&&(f.p=c),f.m=s,f.v=o,f},O=(e,t)=>({t:0,k:e,$:t,g:null,p:null,h:null,m:null,v:null}),_={},C={forEach:(e,t)=>e.map(S).forEach(t),map:(e,t)=>e.map(S).map(t).map(M)},S=e=>({vattrs:e.h,vchildren:e.p,vkey:e.m,vname:e.v,vtag:e.k,vtext:e.$}),M=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),j(e.vtag,t,...e.vchildren||[])}const t=O(e.vtag,e.vtext);return t.h=e.vattrs,t.p=e.vchildren,t.m=e.vkey,t.v=e.vname,t},x=(e,t,n,l,s,o)=>{if(n!==l){let r=be(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=E(n),o=E(l);t.remove(...s.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!s.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const c=g(l);if((r||c&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(i){}let f=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(b,t):e.removeAttribute(t)):(!r||4&o||s)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(b,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):be(c,a)?a.slice(2):a[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},R=/\s/,E=e=>e?e.split(R):[],N=(e,t,n,l)=>{const s=11===t.g.nodeType&&t.g.host?t.g.host:t.g,o=e&&e.h||k,i=t.h||k;for(l in o)l in i||x(s,l,o[l],void 0,n,t.t);for(l in i)x(s,l,o[l],i[l],n,t.t)},P=(e,o,r,c)=>{let a,u,d,$=o.p[r],h=0;if(s||(i=!0,"slot"===$.k&&(t&&c.classList.add(t+"-s"),$.t|=$.p?2:1)),null!==$.$)a=$.g=f.createTextNode($.$);else if(1&$.t)a=$.g=f.createTextNode("");else if(a=$.g=f.createElement(2&$.t?"slot-fb":$.k),N(null,$,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),$.p)for(h=0;h<$.p.length;++h)u=P(e,$,h,a),u&&a.appendChild(u);return a["s-hn"]=l,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=$.v||"",d=e&&e.p&&e.p[r],d&&d.k===$.k&&e.g&&T(e.g,!1)),a},T=(e,t)=>{u.t|=1;const n=e.childNodes;for(let s=n.length-1;s>=0;s--){const e=n[s];e["s-hn"]!==l&&e["s-ol"]&&(U(e).insertBefore(e,H(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&T(e,t)}u.t&=-2},L=(e,t,n,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=P(null,n,o,e),r&&(s[o].g=r,c.insertBefore(r,H(t))))},A=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.g,B(l),o=!0,s["s-ol"]?s["s-ol"].remove():T(s,!0),s.remove())},W=(e,t)=>e.k===t.k&&("slot"===e.k?e.v===t.v:e.m===t.m),H=e=>e&&e["s-ol"]||e,U=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,q=(e,t)=>{const n=t.g=e.g,l=e.p,s=t.p,o=t.$;let i;null===o?("slot"===t.k||N(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],$=l.length-1,h=l[0],p=l[$];for(;i<=f&&r<=$;)if(null==u)u=t[++i];else if(null==d)d=t[--f];else if(null==h)h=l[++r];else if(null==p)p=l[--$];else if(W(u,h))q(u,h),u=t[++i],h=l[++r];else if(W(d,p))q(d,p),d=t[--f],p=l[--$];else if(W(u,p))"slot"!==u.k&&"slot"!==p.k||T(u.g.parentNode,!1),q(u,p),e.insertBefore(u.g,d.g.nextSibling),u=t[++i],p=l[--$];else if(W(d,h))"slot"!==u.k&&"slot"!==p.k||T(d.g.parentNode,!1),q(d,h),e.insertBefore(d.g,u.g),d=t[--f],h=l[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a].m&&t[a].m===h.m){c=a;break}c>=0?(o=t[c],o.k!==h.k?s=P(t&&t[r],n,c,e):(q(o,h),t[c]=void 0,s=o.g),h=l[++r]):(s=P(t&&t[r],n,r,e),h=l[++r]),s&&U(u.g).insertBefore(s,H(u.g))}i>f?L(e,null==l[$+1]?null:l[$+1].g,n,l,r,$):r>$&&A(t,i,f)})(n,l,t,s):null!==s?(null!==e.$&&(n.textContent=""),L(n,null,t,s,0,s.length-1)):null!==l&&A(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=o:e.$!==o&&(n.data=o)},D=e=>{let t,n,l,s,o,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<l;s++)if(r[s]["s-hn"]!==t["s-hn"])if(i=r[s].nodeType,""!==o){if(1===i&&o===r[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[s].textContent.trim()){t.hidden=!0;break}D(t)}},F=[],V=e=>{let t,n,l,s,i,r,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(z(n,s)?(i=F.find(e=>e.j===n),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.O=t:F.push({O:t,j:n}),n["s-sr"]&&F.map(e=>{z(e.j,n["s-sn"])&&(i=F.find(e=>e.j===n),i&&!e.O&&(e.O=i.O))})):F.some(e=>e.j===n)||F.push({j:n}));1===t.nodeType&&V(t)}},z=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,B=e=>{e.h&&e.h.ref&&e.h.ref(null),e.p&&e.p.map(B)},G=e=>pe(e)._,I=(e,t,n)=>{const l=G(e);return{emit:e=>J(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},J=(e,t,n)=>{const l=u.ce(t,n);return e.dispatchEvent(l),l},K=(e,t)=>{t&&!e.C&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.C=t))},Q=(e,t)=>{if(e.t|=16,!(4&e.t))return K(e,e.S),xe(()=>X(e,t));e.t|=512},X=(e,t)=>{const n=e.o;let l;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>le(n,e,t)),e.i=null),l=le(n,"componentWillLoad")),se(l,()=>Y(e,n,t))},Y=async(e,r,c)=>{const a=e._,$=a["s-rc"];c&&(e=>{const t=e.M,n=e._,l=t.t,s=((e,t)=>{let n=v(t),l=ge.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,s=w.get(e=e.head||e);s||w.set(e,s=new Set),s.has(n)||(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(d&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);((e,r)=>{const c=e._,a=e.M,$=e.R||O(null,null),h=(e=>e&&e.k===_)(r)?r:j(null,null,r);if(l=c.tagName,a.N&&(h.h=h.h||{},a.N.map(([e,t])=>h.h[t]=c[e])),h.k=null,h.t|=4,e.R=h,h.g=$.g=c.shadowRoot||c,t=c["s-sc"],n=c["s-cr"],s=d&&0!=(1&a.t),o=!1,q($,h),u.t|=1,i){let e,t,n,l,s,o;V(h.g);let i=0;for(;i<F.length;i++)e=F[i],t=e.j,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<F.length;i++)if(e=F[i],t=e.j,e.O){for(l=e.O.parentNode,s=e.O.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}o&&D(h.g),u.t&=-2,F.length=0})(e,Z(e,r)),$&&($.map(e=>e()),a["s-rc"]=void 0);{const t=a["s-p"],n=()=>ee(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Z=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){we(n)}return t},ee=e=>{const t=e._,n=e.o,l=e.S;64&e.t||(e.t|=64,oe(t),le(n,"componentDidLoad"),e.P(t),l||ne()),e.T(t),e.C&&(e.C(),e.C=void 0),512&e.t&&Me(()=>Q(e,!1)),e.t&=-517},te=e=>{{const t=pe(e),n=t._.isConnected;return n&&2==(18&t.t)&&Q(t,!1),n}},ne=()=>{oe(f.documentElement),Me(()=>J(c,"appload",{detail:{namespace:"calcite-app"}}))},le=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){we(l)}},se=(e,t)=>e&&e.then?e.then(t):t(),oe=e=>e.classList.add("hydrated"),ie=(e,t,n)=>{if(t.L){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.L),s=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>pe(this).W.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=pe(e),o=s.W.get(t),i=s.t,r=s.o;if(n=((e,t)=>null==e||g(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.L[t][0]),!(8&i&&void 0!==o||n===o)&&(s.W.set(t,n),r)){if(l.A&&128&i){const e=l.A[t];e&&e.map(e=>{try{r[e](n,o,t)}catch(l){we(l)}})}2==(18&i)&&Q(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=pe(this);return n.H.then(()=>n.o[e](...t))}})}),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){u.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.N.push([e,s]),s})}}return e},re=e=>{le(e,"connectedCallback")},ce=e=>{e.__appendChild=e.appendChild,e.appendChild=function(e){const t=e["s-sn"]=fe(e),n=ue(this.childNodes,t);if(n){const l=de(n,t),s=l[l.length-1];return s.parentNode.insertBefore(e,s.nextSibling)}return this.__appendChild(e)}},ae=(e,t)=>{class n extends Array{item(e){return this[e]}}if(8&t.t){const t=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){return this.childNodes.map(e=>1===e.nodeType)}}),Object.defineProperty(e,"childElementCount",{get:()=>e.children.length}),Object.defineProperty(e,"childNodes",{get(){const e=t.call(this);if(0==(1&u.t)&&2&pe(this).t){const t=new n;for(let n=0;n<e.length;n++){const l=e[n]["s-nr"];l&&t.push(l)}return t}return n.from(e)}})}},fe=e=>e["s-sn"]||1===e.nodeType&&e.getAttribute("slot")||"",ue=(e,t)=>{let n,l=0;for(;l<e.length;l++){if(n=e[l],n["s-sr"]&&n["s-sn"]===t)return n;if(n=ue(n.childNodes,t),n)return n}return null},de=(e,t)=>{const n=[e];for(;(e=e.nextSibling)&&e["s-sn"]===t;)n.push(e);return n},$e=(e,t={})=>{const n=[],l=t.exclude||[],s=c.customElements,o=f.head,i=o.querySelector("meta[charset]"),r=f.createElement("style"),a=[];let $,m=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map(e=>e[1].map(t=>{const o={t:t[0],u:t[1],L:t[2],U:t[3]};o.L=t[2],o.U=t[3],o.N=[],o.A={},!d&&1&o.t&&(o.t|=8);const i=o.u,r=class extends HTMLElement{constructor(e){super(e),ye(e=this,o),1&o.t&&(d?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e)),ae(e,o)}connectedCallback(){$&&(clearTimeout($),$=null),m?a.push(this):u.jmp(()=>(e=>{if(0==(1&u.t)){const t=pe(e),n=t.M,l=()=>{};if(1&t.t)p(e,t,n.U),re(t.o);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){K(t,t.S=n);break}}n.L&&Object.entries(n.L).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=ke(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.A=s.watchers,ie(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(r){we(r)}t.t&=-9,t.t|=128,e(),re(t.o)}if(s.style){let e=s.style;const t=v(n);if(!ge.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_calcite_app("./p-a43a1102.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=ge.get(e);h&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ge.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.S,i=()=>Q(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}})(this))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=pe(this),t=e.o;e.s&&(e.s.map(e=>e()),e.s=void 0),le(t,"disconnectedCallback")}})())}componentOnReady(){return pe(this).q}};ce(r.prototype),o.D=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,ie(r,o,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),m=!1,a.length?a.map(e=>e.connectedCallback()):u.jmp(()=>$=setTimeout(ne,30))},he=new WeakMap,pe=e=>he.get(e),me=(e,t)=>he.set(t.o=e,t),ye=(e,t)=>{const n={t:0,_:e,M:t,W:new Map};return n.H=new Promise(e=>n.T=e),n.q=new Promise(e=>n.P=e),e["s-p"]=[],e["s-rc"]=[],p(e,n,t.U),he.set(e,n)},be=(e,t)=>t in e,we=e=>console.error(e),ve=new Map,ke=e=>{const t=e.u.replace(/-/g,"_"),n=e.D,l=ve.get(n);return l?l[t]:__sc_import_calcite_app(`./${n}.entry.js`).then(e=>(ve.set(n,e),e[t]),we)},ge=new Map,je=[],Oe=[],_e=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&u.t?Me(Se):u.raf(Se))},Ce=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){we(t)}e.length=0},Se=()=>{Ce(je),Ce(Oe),(r=je.length>0)&&u.raf(Se)},Me=e=>$().then(e),xe=_e(Oe,!0);export{a as C,_ as H,e as N,$ as a,$e as b,I as c,f as d,te as f,G as g,j as h,u as p,me as r,c as w}