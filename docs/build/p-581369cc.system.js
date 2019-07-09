var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function o(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,o)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="calcite";var a=window;var i=document;var s={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var o=!!i.documentElement.attachShadow;var l=function(){var e=false;try{i.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(e){}return e}();var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var $=new WeakMap;var c=function(e){return $.get(e)};var u=e("r",function(e,t){return $.set(t.$lazyInstance$=e,t)});var v=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return $.set(e,t)}};var d=function(e,t){return t in e};var h=function(e){return console.error(e)};var g=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},h)};var m=new Map;var p=a.__stencil_cssshim;var y=0;var b=false;var w=[];var R=[];var _=[];var S=function(e){return function(t){e.push(t);if(!b){b=true;s.raf(k)}}};var x=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){h(e)}}e.length=0};var N=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){h(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var k=function(){y++;x(w);var e=(s.$flags$&6)===2?performance.now()+7*Math.ceil(y*(1/22)):Infinity;N(R,e);N(_,e);if(R.length>0){_.push.apply(_,R);R.length=0}if(b=w.length+R.length+_.length>0){s.raf(k)}else{y=0}};var E=S(R);var T={};var C="http://www.w3.org/2000/svg";var L=function(e){return e!=null};var j=function(e){return e.toLowerCase()};var P=function(e){return["object","function"].includes(typeof e)};function z(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var A=e("a",function(){if(!(a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)"))){return t.import("./p-aaf72d6b.system.js")}return Promise.resolve()});var I=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,s;return __generator(this,function(o){switch(o.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+n+".esm.js")||e.getAttribute("data-namespace")===n});s=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,a.location.href));O(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:o.sent();o.label=3;case 3:return[2,s.href]}})})});var O=function(e){var t=z(n);try{a[t]=new Function("w","return import(w);")}catch(n){var r=new Map;a[t]=function(n){var s=new URL(n,e).href;var o=r.get(s);if(!o){var l=i.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+s+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise(function(e){l.onload=function(){e(a[t].m);l.remove()}});r.set(s,o);i.head.appendChild(l)}return o}}};var B="hydrated";var U="http://www.w3.org/1999/xlink";var M=new WeakMap;var H=function(e,t,r){var n=m.get(e);if(f&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}m.set(e,n)};var W=function(e,t,r,n){var a=q(t.$tagName$);var s=m.get(a);e=e.nodeType===11?e:i;if(s){if(typeof s==="string"){e=e.head||e;var o=M.get(e);var l=void 0;if(!o){M.set(e,o=new Set)}if(!o.has(a)){{if(p){l=p.createHostStyle(n,a,s,!!(t.$flags$&10));var f=l["s-sc"];if(f){a=f;o=null}}else{l=i.createElement("style");l.innerHTML=s}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([s])}}return a};var V=function(e,t,r){var n=W(o&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var q=function(e,t){return"sc-"+e};var D=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var l;var f=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!P(a)){a=String(a)}if(i&&s){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}s=i}}};$(r);if(t){{o=t.key||undefined}{l=t.name}{var c=t.className||t.class;if(c){t.class=typeof c!=="object"?c:Object.keys(c).filter(function(e){return c[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,Q)}var u={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{u.$key$=o}{u.$name$=l}return u});var F=e("H",{});var G=function(e){return e&&e.$tag$===F};var Q={forEach:function(e,t){return e.map(J).forEach(t)},map:function(e,t){return e.map(J).map(t).map(K)}};var J=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var K=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var X=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var o=Y(r);var l=Y(e.className).filter(function(e){return!o.includes(e)});e.className=l.concat(Y(n).filter(function(e){return!l.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!d(e,t)){if(d(e,j(t))){t=j(t.substring(2))}else{t=j(t[2])+t.substring(3)}if(r){s.rel(e,t,r,false)}if(n){s.ael(e,t,n,false)}}else{var $=d(e,t);var c=P(n);if(($||c&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}var u=a&&t!==(t=t.replace(/^xlink\:?/,""))?true:false;if(n==null||n===false){if(u){e.removeAttributeNS(U,j(t))}else{e.removeAttribute(t)}}else if((!$||i&4||a)&&!c){n=n===true?"":n.toString();if(u){e.setAttributeNS(U,j(t),n)}else{e.setAttribute(t,n)}}}};var Y=function(e){return!e?[]:e.split(" ")};var Z=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||T;var s=t.$attrs$||T;{for(n in i){if(s[n]==null&&i[n]!=null){X(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){X(a,n,i[n],s[n],r,t.$flags$)}};var ee;var te;var re;var ne=false;var ae=false;var ie=false;var se=false;var oe=function(e,t,r,n){var a=t.$children$[r];var s=0;var o;var l;var f;if(!ne){ie=true;if(a.$tag$==="slot"){if(ee){n.classList.add(ee+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(L(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=i.createTextNode("")}else{o=a.$elm$=se||a.$tag$==="svg"?i.createElementNS(C,a.$tag$):i.createElement(a.$flags$&2?"slot-fb":a.$tag$);{se=a.$tag$==="svg"?true:a.$tag$==="foreignObject"?false:se}{Z(null,a,se)}if(L(ee)&&o["s-si"]!==ee){o.classList.add(o["s-si"]=ee)}if(a.$children$){for(s=0;s<a.$children$.length;++s){l=oe(e,a,s,o);if(l){o.appendChild(l)}}}if(a.$tag$==="svg"){se=false}}{a.$elm$["s-hn"]=re;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=te;a.$elm$["s-sn"]=a.$name$||"";f=e&&e.$children$&&e.$children$[r];if(f&&f.$tag$===a.$tag$&&e.$elm$){le(e.$elm$,false)}}}return a.$elm$};var le=function(e,t){s.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==re&&a["s-ol"]){de(a).insertBefore(a,ve(a));a["s-ol"].remove();a["s-ol"]=undefined;ie=true}if(t){le(a,t)}}s.$flags$&=~1};var fe=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&j(s.tagName)===re){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=oe(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,ve(t))}}}};var $e=function(e,t,r,n){for(;t<=r;++t){if(L(e[t])){n=e[t].$elm$;ye(e[t],true);{ae=true;if(n["s-ol"]){n["s-ol"].remove()}else{le(n,true)}}n.remove()}}};var ce=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var f=t[0];var $=t[l];var c=n.length-1;var u=n[0];var v=n[c];var d;var h;while(a<=l&&i<=c){if(f==null){f=t[++a]}else if($==null){$=t[--l]}else if(u==null){u=n[++i]}else if(v==null){v=n[--c]}else if(ue(f,u)){he(f,u);f=t[++a];u=n[++i]}else if(ue($,v)){he($,v);$=t[--l];v=n[--c]}else if(ue(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){le(f.$elm$.parentNode,false)}he(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=t[++a];v=n[--c]}else if(ue($,u)){if(f.$tag$==="slot"||v.$tag$==="slot"){le($.$elm$.parentNode,false)}he($,u);e.insertBefore($.$elm$,f.$elm$);$=t[--l];u=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&L(t[o].$key$)&&t[o].$key$===u.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==u.$tag$){d=oe(t&&t[i],r,s,e)}else{he(h,u);t[s]=undefined;d=h.$elm$}u=n[++i]}else{d=oe(t&&t[i],r,i,e);u=n[++i]}if(d){{de(f.$elm$).insertBefore(d,ve(f.$elm$))}}}}if(a>l){fe(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){$e(t,a,l)}};var ue=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var ve=function(e){return e&&e["s-ol"]||e};var de=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var he=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;{se=r&&L(r.parentNode)&&r.ownerSVGElement!==undefined;se=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:se}if(!L(t.$text$)){{if(t.$tag$==="slot");else{Z(e,t,se)}}if(L(n)&&L(a)){ce(r,n,t,a)}else if(L(a)){if(L(e.$text$)){r.textContent=""}fe(r,null,t,a,0,a.length-1)}else if(L(n)){$e(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}if(se&&t.$tag$==="svg"){se=false}};var ge=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ge(t)}}};var me=[];var pe=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!me.some(function(e){return e.nodeToRelocate===o})){ae=true;o["s-sn"]=f;me.push({slotRefNode:s,nodeToRelocate:o})}}}}}if(s.nodeType===1){pe(s)}}};var ye=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){ye(e,t)})}};var be=function(e,t,r,n){re=j(e.tagName);var a=t.$vnode$||{$flags$:0};var l=G(n)?n:D(null,null,n);if(r.$attrsToReflect$){l.$attrs$=l.$attrs$||{};r.$attrsToReflect$.forEach(function(t){var r=t[0],n=t[1];return l.$attrs$[n]=e[r]})}l.$tag$=null;l.$flags$|=4;t.$vnode$=l;l.$elm$=a.$elm$=e.shadowRoot||e;{ee=e["s-sc"]}{te=e["s-cr"];ne=o&&(r.$flags$&1)!==0;ie=ae=false}he(a,l);{if(ie){pe(l.$elm$);for(var f=0;f<me.length;f++){var $=me[f];if(!$.nodeToRelocate["s-ol"]){var c=i.createTextNode("");c["s-nr"]=$.nodeToRelocate;$.nodeToRelocate.parentNode.insertBefore($.nodeToRelocate["s-ol"]=c,$.nodeToRelocate)}}s.$flags$|=1;for(var f=0;f<me.length;f++){var $=me[f];var u=$.slotRefNode.parentNode;var v=$.slotRefNode.nextSibling;var c=$.nodeToRelocate["s-ol"];while(c=c.previousSibling){var d=c["s-nr"];if(d&&d["s-sn"]===$.nodeToRelocate["s-sn"]&&u===d.parentNode){d=d.nextSibling;if(!d||!d["s-nr"]){v=d;break}}}if(!v&&u!==$.nodeToRelocate.parentNode||$.nodeToRelocate.nextSibling!==v){if($.nodeToRelocate!==v){u.insertBefore($.nodeToRelocate,v)}}}s.$flags$&=~1}if(ae){ge(l.$elm$)}me.length=0}};var we=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();h(r);return[3,4];case 4:return[2]}})})};var Re=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(i){switch(i.label){case 0:{t.$flags$|=16}r=t.$lazyInstance$;if(!a)return[3,2];{t.$flags$|=128}return[4,we(r,"componentWillLoad")];case 1:i.sent();return[3,4];case 2:return[4,we(r,"componentWillUpdate")];case 3:i.sent();i.label=4;case 4:return[4,we(r,"componentWillRender")];case 5:i.sent();{E(function(){return _e(e,t,n,r,a)})}return[2]}})})};var _e=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){V(e,r,t.$modeName$)}{{t.$flags$|=4;try{be(e,t,r,n.render())}catch(e){h(e)}t.$flags$&=~4}}if(p){p.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}Se(e,t)};var Se=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;{we(n,"componentDidRender")}if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(B)}{we(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){i.documentElement.classList.add(B);{setTimeout(function(){return s.$flags$|=2},999)}}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var xe=function(e,t){{var r=c(e);if(r.$flags$&2){Re(e,r,t,false)}}};var Ne=function(e){if((s.$flags$&1)===0){var t=c(e);{if(t.$rmListeners$){t.$rmListeners$();t.$rmListeners$=undefined}}if(p){p.removeHost(e)}var r=t.$lazyInstance$;{we(r,"disconnectedCallback")}{we(r,"componentDidUnload")}}};var ke=function(e,t){if(e!=null&&!P(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Ee=function(e,t){return c(e).$instanceValues$.get(t)};var Te=function(e,t,r,n){var a=c(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;r=ke(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&o&128){var l=n.$watchers$[t];if(l){l.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,s,t)}catch(e){h(e)}})}}if((o&(4|2|16))===2){Re(i,a,n,false)}}}};var Ce=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ee(this,n)},set:function(e){Te(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=c(this);return r.$onReadyPromise$.then(function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)})}})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a})}}return e};var Le=function(e,t,r){var n=r.map(function(r){var n=r[0],a=r[1],i=r[2];var o=Pe(e,n);var l=je(t,i);var f=ze(n);s.ael(o,a,l,f);return function(){return s.rel(o,a,l,f)}});return function(){return n.forEach(function(e){return e()})}};var je=function(e,t){return function(r){{if(e.$lazyInstance$){return e.$lazyInstance$[t](r)}else{return e.$onReadyPromise$.then(function(){return e.$lazyInstance$[t](r)}).catch(h)}}}};var Pe=function(e,t){if(t&32)return i.body;if(t&16)return e.parentElement;return e};var ze=function(e){return l?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Ae=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,function(){var r,i,o;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&32)===0))return[3,4];n.$flags$|=32;return[4,g(a)];case 1:s=l.sent();if(!s.isProxied){{a.$watchers$=s.watchers}Ce(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(e){h(e)}{n.$flags$&=~8}Ie(n.$lazyInstance$);if(!(!s.isStyleRegistered&&s.style))return[3,4];r=s.style;i=q(a.$tagName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,i,false)})];case 2:r=l.sent();l.label=3;case 3:H(i,r,!!(a.$flags$&1));s.isStyleRegistered=true;l.label=4;case 4:o=n.$ancestorComponent$;if(o&&o["s-lr"]===false&&o["s-rc"]){o["s-rc"].push(function(){return Ae(e,n,a)})}else{Re(e,n,a,true)}return[2]}})})};var Ie=function(e){{we(e,"connectedCallback")}};var Oe=function(e,t){if((s.$flags$&1)===0){var r=c(e);if(t.$listeners$){r.$rmListeners$=Le(e,r,t.$listeners$)}if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Be(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&a["s-lr"]===false){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{Ae(e,r,t)}}Ie(r.$lazyInstance$)}};var Be=function(e,t){var r;{r=""}t=e["s-cr"]=i.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ue=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var l=i.head;var f=a.customElements;var $=l.querySelector("meta[charset]");var u=i.createElement("style");Object.assign(s,t);s.$resourcesUrl$=new URL(t.resourcesUrl||"/",a.location.href).href;if(t.syncQueue){s.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}{a.$watchers$={}}if(!o&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}v(t);if(a.$flags$&1){if(o){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){Oe(this,a)};t.prototype.disconnectedCallback=function(){Ne(this)};t.prototype["s-init"]=function(){var e=c(this);if(e.$lazyInstance$){Se(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){xe(this,a)};t.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!f.get(i)){r.push(i);f.define(i,Ce(s,a,1))}})});u.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";u.setAttribute("data-styles","");l.insertBefore(u,$?$.nextSibling:l.firstChild)});var Me=e("c",function(e,t,r){var n=He(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}});var He=e("g",function(e){return c(e).$hostElement$})}}});