var __awaiter=this&&this.__awaiter||function(e,t,a,r){function n(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,o){function c(e){try{l(r.next(e))}catch(t){o(t)}}function i(e){try{l(r["throw"](e))}catch(t){o(t)}}function l(e){e.done?a(e.value):n(e.value).then(c,i)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var a={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,n,o,c;return c={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function i(e){return function(t){return l([e,t])}}function l(c){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(o=c[0]&2?n["return"]:c[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;if(n=0,o)c=[c[0]&2,o.value];switch(c[0]){case 0:case 1:o=c;break;case 4:a.label++;return{value:c[1],done:false};case 5:a.label++;n=c[1];c=[0];continue;case 7:c=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){a=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(c[0]===6&&a.label<o[1]){a.label=o[1];o=c;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(c);break}if(o[2])a.ops.pop();a.trys.pop();continue}c=t.call(e,a)}catch(i){c=[6,i];n=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-8f7f5385.system.js","./p-9e77e74d.system.js"],(function(e){"use strict";var t,a,r,n,o,c;return{setters:[function(e){t=e.r;a=e.h;r=e.H;n=e.g},function(e){o=e.f;c=e.a}],execute:function(){var i={button:"button"};var l={plus:"plus"};var u=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{background-color:var(--calcite-app-background-transparent)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}";var p=e("calcite_fab",function(){function e(e){t(this,e);this.appearance="outline";this.disabled=false;this.icon=l.plus;this.loading=false;this.scale="m";this.textEnabled=false}e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){o(this.buttonEl);return[2]}))}))};e.prototype.render=function(){var e=this;var t=this,n=t.appearance,o=t.disabled,l=t.el,u=t.loading,p=t.scale,b=t.theme,f=t.textEnabled,s=t.icon,d=t.label,h=t.text;var g=!f&&h;var v=d||g;var y=c(l);return a(r,null,a("calcite-button",{class:i.button,loading:u,disabled:o,title:v,"aria-label":d,theme:b,dir:y,scale:p,icon:s,round:true,floating:true,width:"auto",appearance:n,color:"blue",ref:function(t){e.buttonEl=t}},this.textEnabled?this.text:null))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return e}());p.style=u}}}));