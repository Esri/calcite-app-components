let e,t,n,l=!1,o=!1,s=!1,r=0,c=!1;const i="undefined"!=typeof window?window:{},a=i.CSS,f=i.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},p=(()=>(f.head.attachShadow+"").indexOf("[native")>-1)(),d=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),h=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=e,r=$(t,o),c=y(n);u.ael(s,l,r,c),(t.o=t.o||[]).push(()=>u.rel(s,l,r,c))})},$=(e,t)=>n=>{256&e.t?e.s[t](n):(e.u=e.u||[]).push([t,n])},y=e=>0!=(2&e),b="http://www.w3.org/1999/xlink",w=new WeakMap,_=e=>"sc-"+e,v={},j=e=>"object"==(e=typeof e)||"function"===e,g=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,c=!1,i=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!j(l))&&(l+=""),r&&c?i[i.length-1].p+=l:i.push(r?k(null,l):l),c=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,i,O);const f=k(e,null);return f.h=t,i.length>0&&(f.$=i),f._=o,f.v=s,f},k=(e,t)=>({t:0,j:e,p:t,g:null,$:null,h:null,_:null,v:null}),M={},O={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(S)},R=e=>({vattrs:e.h,vchildren:e.$,vkey:e._,vname:e.v,vtag:e.j,vtext:e.p}),S=e=>{const t=k(e.vtag,e.vtext);return t.h=e.vattrs,t.$=e.vchildren,t._=e.vkey,t.v=e.vname,t},L=(e,t,n,l,o,s)=>{if(n!==l){let c=$e(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,o=C(n),s=C(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(c||"o"!==t[0]||"n"!==t[1]){const i=j(l);if((c||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(r){}let f=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,f=!0),null==l||!1===l?f?e.removeAttributeNS(b,t):e.removeAttribute(t):(!c||4&s||o)&&!i&&(l=!0===l?"":l,f?e.setAttributeNS(b,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):$e(i,a)?a.slice(2):a[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},U=/\s/,C=e=>e?e.split(U):[],x=(e,t,n,l)=>{const o=11===t.g.nodeType&&t.g.host?t.g.host:t.g,s=e&&e.h||v,r=t.h||v;for(l in s)l in r||L(o,l,s[l],void 0,n,t.t);for(l in r)L(o,l,s[l],r[l],n,t.t)},P=(o,r,c,i)=>{let a,u,p,d=r.$[c],m=0;if(l||(s=!0,"slot"===d.j&&(e&&i.classList.add(e+"-s"),d.t|=d.$?2:1)),null!==d.p)a=d.g=f.createTextNode(d.p);else if(1&d.t)a=d.g=f.createTextNode("");else if(a=d.g=f.createElement(2&d.t?"slot-fb":d.j),x(null,d,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),d.$)for(m=0;m<d.$.length;++m)u=P(o,d,m,a),u&&a.appendChild(u);return a["s-hn"]=n,3&d.t&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=d.v||"",p=o&&o.$&&o.$[c],p&&p.j===d.j&&o.g&&E(o.g,!1)),a},E=(e,t)=>{u.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(D(e).insertBefore(e,W(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&E(e,t)}u.t&=-2},T=(e,t,l,o,s,r)=>{let c,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=P(null,l,s,e),c&&(o[s].g=c,i.insertBefore(c,W(t))))},N=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.g,z(l),o=!0,s["s-ol"]?s["s-ol"].remove():E(s,!0),s.remove())},A=(e,t)=>e.j===t.j&&("slot"===e.j?e.v===t.v:e._===t._),W=e=>e&&e["s-ol"]||e,D=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,F=(e,t)=>{const n=t.g=e.g,l=e.$,o=t.$,s=t.p;let r;null===s?("slot"===t.j||x(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,c=0,i=0,a=0,f=t.length-1,u=t[0],p=t[f],d=l.length-1,m=l[0],h=l[d];for(;r<=f&&c<=d;)if(null==u)u=t[++r];else if(null==p)p=t[--f];else if(null==m)m=l[++c];else if(null==h)h=l[--d];else if(A(u,m))F(u,m),u=t[++r],m=l[++c];else if(A(p,h))F(p,h),p=t[--f],h=l[--d];else if(A(u,h))"slot"!==u.j&&"slot"!==h.j||E(u.g.parentNode,!1),F(u,h),e.insertBefore(u.g,p.g.nextSibling),u=t[++r],h=l[--d];else if(A(p,m))"slot"!==u.j&&"slot"!==h.j||E(p.g.parentNode,!1),F(p,m),e.insertBefore(p.g,u.g),p=t[--f],m=l[++c];else{for(i=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a]._&&t[a]._===m._){i=a;break}i>=0?(s=t[i],s.j!==m.j?o=P(t&&t[c],n,i,e):(F(s,m),t[i]=void 0,o=s.g),m=l[++c]):(o=P(t&&t[c],n,c,e),m=l[++c]),o&&D(u.g).insertBefore(o,W(u.g))}r>f?T(e,null==l[d+1]?null:l[d+1].g,n,l,c,d):c>d&&N(t,r,f)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),T(n,null,t,o,0,o.length-1)):null!==l&&N(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:e.p!==s&&(n.data=s)},H=e=>{let t,n,l,o,s,r,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==t["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){t.hidden=!0;break}H(t)}},q=[],B=e=>{let t,n,l,s,r,c,i=0,a=e.childNodes,f=a.length;for(;i<f;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(V(n,s)?(r=q.find(e=>e.k===n),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.M=t:q.push({M:t,k:n}),n["s-sr"]&&q.map(e=>{V(e.k,n["s-sn"])&&(r=q.find(e=>e.k===n),r&&!e.M&&(e.M=r.M))})):q.some(e=>e.k===n)||q.push({k:n}));1===t.nodeType&&B(t)}},V=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,z=e=>{e.h&&e.h.ref&&e.h.ref(null),e.$&&e.$.map(z)},G=e=>de(e).O,I=(e,t,n)=>{const l=G(e);return{emit:e=>J(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},J=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},K=(e,t)=>{t&&!e.R&&t["s-p"].push(new Promise(t=>e.R=t))},Q=(e,t)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const n=e.s,l=()=>X(e,n,t);let o;return K(e,e.S),t&&(e.t|=256,e.u&&(e.u.map(([e,t])=>te(n,e,t)),e.u=null),o=te(n,"componentWillLoad")),ne(o,()=>Se(l))},X=(r,c,i)=>{const a=r.O,d=a["s-rc"];i&&(e=>{const t=e.L,n=e.O,l=t.t,o=((e,t)=>{let n=_(t.U),l=_e.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=w.get(e=e.head||e);o||w.set(e,o=new Set),o.has(n)||(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(r),((r,c)=>{const i=r.O,a=r.L,d=r.C||k(null,null),m=(e=>e&&e.j===M)(c)?c:g(null,null,c);if(n=i.tagName,a.P&&(m.h=m.h||{},a.P.map(([e,t])=>m.h[t]=i[e])),m.j=null,m.t|=4,r.C=m,m.g=d.g=i.shadowRoot||i,e=i["s-sc"],t=i["s-cr"],l=p&&0!=(1&a.t),o=!1,F(d,m),u.t|=1,s){let e,t,n,l,o,s;B(m.g);let r=0;for(;r<q.length;r++)e=q[r],t=e.k,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<q.length;r++)if(e=q[r],t=e.k,e.M){for(l=e.M.parentNode,o=e.M.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&H(m.g),u.t&=-2,q.length=0})(r,Y(c)),r.t&=-17,r.t|=2,d&&(d.map(e=>e()),a["s-rc"]=void 0);{const e=a["s-p"],t=()=>Z(r);0===e.length?t():(Promise.all(e).then(t),r.t|=4,e.length=0)}},Y=e=>{try{e=e.render()}catch(t){ye(t)}return e},Z=e=>{const t=e.O,n=e.s,l=e.S;64&e.t||(e.t|=64,le(t),te(n,"componentDidLoad"),e.T(t),l||ee()),e.N(t),e.R&&(e.R(),e.R=void 0),512&e.t&&Re(()=>Q(e,!1)),e.t&=-517},ee=()=>{le(f.documentElement),u.t|=2,Re(()=>J(i,"appload",{detail:{namespace:"calcite-app"}}))},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){ye(l)}},ne=(e,t)=>e&&e.then?e.then(t):t(),le=e=>e.classList.add("hydrated"),oe=(e,t,n)=>{if(t.A){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.A),o=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>de(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=de(this),s=o.D.get(t),r=o.t,c=o.s;if(n=((e,t)=>null==e||j(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.A[t][0]),!(8&r&&void 0!==s||n===s)&&(o.D.set(t,n),c)){if(l.W&&128&r){const e=l.W[t];e&&e.map(e=>{try{c[e](n,s,t)}catch(l){ye(l)}})}2==(18&r)&&Q(o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=de(this);return n.F.then(()=>n.s[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){u.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.P.push([e,o]),o})}}return e},se=e=>{te(e,"connectedCallback")},re=e=>{e.__appendChild=e.appendChild,e.appendChild=function(e){const t=e["s-sn"]=ie(e),n=ae(this.childNodes,t);if(n){const l=fe(n,t),o=l[l.length-1];return o.parentNode.insertBefore(e,o.nextSibling)}return this.__appendChild(e)}},ce=(e,t)=>{if(8&t.t){const t=e.__lookupGetter__("children"),n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){const e=t.call(this);if(0==(1&u.t)){const t=ae(e,"");if(t&&t.parentNode)return t.parentNode.children}return e}}),Object.defineProperty(e,"childElementCount",{get:()=>e.children.length}),Object.defineProperty(e,"childNodes",{get(){const e=n.call(this);if(0==(1&u.t)){const t=ae(e,"");if(t&&t.parentNode)return t.parentNode.childNodes}return e}})}},ie=e=>e["s-sn"]||1===e.nodeType&&e.getAttribute("slot")||"",ae=(e,t)=>{let n,l=0;for(;l<e.length;l++){if(n=e[l],n["s-sr"]&&n["s-sn"]===t)return n;if(n=ae(n.childNodes,t),n)return n}return null},fe=(e,t)=>{const n=[e];for(;(e=e.nextSibling)&&e["s-sn"]===t;)n.push(e);return n},ue=(e,t={})=>{const n=[],l=t.exclude||[],o=i.customElements,s=f.head,r=s.querySelector("meta[charset]"),c=f.createElement("style"),a=[];let d,$=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,t.syncQueue&&(u.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],U:t[1],A:t[2],H:t[3]};s.A=t[2],s.H=t[3],s.P=[],s.W={},!p&&1&s.t&&(s.t|=8);const r=s.U,c=class extends HTMLElement{constructor(e){super(e),he(e=this,s),1&s.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e)),ce(e,s)}connectedCallback(){d&&(clearTimeout(d),d=null),$?a.push(this):u.jmp(()=>(e=>{if(0==(1&u.t)){const t=de(e),n=t.L,l=()=>{};if(1&t.t)h(e,t,n.H),se(t.s);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){K(t,t.S=n);break}}n.A&&Object.entries(n.A).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=we(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.W=o.watchers,oe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){ye(c)}t.t&=-9,t.t|=128,e(),se(t.s)}const e=_(n.U);if(!_e.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_calcite_app("./p-b014359b.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=_e.get(e);m&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,_e.set(e,l)})(e,l,!!(1&n.t)),t()}}const s=t.S,r=()=>Q(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=de(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),te(t,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=de(this);e.O.isConnected&&2==(18&e.t)&&Q(e,!1)}})()}componentOnReady(){return de(this).q}};re(c.prototype),s.B=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,oe(c,s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,r?r.nextSibling:s.firstChild),$=!1,a.length?a.map(e=>e.connectedCallback()):u.jmp(()=>d=setTimeout(ee,30))},pe=new WeakMap,de=e=>pe.get(e),me=(e,t)=>pe.set(t.s=e,t),he=(e,t)=>{const n={t:0,O:e,L:t,D:new Map};return n.F=new Promise(e=>n.N=e),n.q=new Promise(e=>n.T=e),e["s-p"]=[],e["s-rc"]=[],h(e,n,t.H),pe.set(e,n)},$e=(e,t)=>t in e,ye=e=>console.error(e),be=new Map,we=e=>{const t=e.U.replace(/-/g,"_"),n=e.B,l=be.get(n);return l?l[t]:__sc_import_calcite_app(`./${n}.entry.js`).then(e=>(be.set(n,e),e[t]),ye)},_e=new Map,ve=[],je=[],ge=[],ke=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&u.t?Re(Oe):u.raf(Oe))},Me=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){ye(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},Oe=()=>{r++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ye(t)}e.length=0})(ve);const e=2==(6&u.t)?performance.now()+10*Math.ceil(r*(1/22)):1/0;Me(je,e),Me(ge,e),je.length>0&&(ge.push(...je),je.length=0),(c=ve.length+je.length+ge.length>0)?u.raf(Oe):r=0},Re=e=>d().then(e),Se=ke(je,!0),Le=()=>a&&a.supports&&a.supports("color","var(--c)")?d():__sc_import_calcite_app("./p-6cc3ee87.js").then(()=>(u.V=i.__cssshim)?(!1).i():0),Ue=()=>{u.V=i.__cssshim;const e=Array.from(f.querySelectorAll("script")).find(e=>/\/calcite-app(\.esm)?\.js($|\?|#)/.test(e.src)||"calcite-app"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,i.location.href)).href,Ce(t.resourcesUrl,e),i.customElements?d(t):__sc_import_calcite_app("./p-0e4f1251.js").then(()=>t))},Ce=(e,t)=>{try{i.__sc_import_calcite_app=Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;i.__sc_import_calcite_app=n=>{const o=new URL(n,e).href;let s=l.get(o);if(!s){const e=f.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_calcite_app.m = m;`],{type:"application/javascript"})),s=new Promise(t=>{e.onload=()=>{t(i.__sc_import_calcite_app.m),e.remove()}}),l.set(o,s),f.head.appendChild(e)}return s}}};export{M as H,Le as a,ue as b,I as c,G as g,g as h,Ue as p,me as r}