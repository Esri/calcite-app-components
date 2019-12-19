var __awaiter=this&&this.__awaiter||function(t,e,i,r){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,l){function n(t){try{a(r.next(t))}catch(e){l(e)}}function u(t){try{a(r["throw"](t))}catch(e){l(e)}}function a(t){t.done?i(t.value):s(t.value).then(n,u)}a((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},r,s,l,n;return n={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function u(t){return function(e){return a([t,e])}}function a(n){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,s&&(l=n[0]&2?s["return"]:n[0]?s["throw"]||((l=s["return"])&&l.call(s),0):s.next)&&!(l=l.call(s,n[1])).done)return l;if(s=0,l)n=[n[0]&2,l.value];switch(n[0]){case 0:case 1:l=n;break;case 4:i.label++;return{value:n[1],done:false};case 5:i.label++;s=n[1];n=[0];continue;case 7:n=i.ops.pop();i.trys.pop();continue;default:if(!(l=i.trys,l=l.length>0&&l[l.length-1])&&(n[0]===6||n[0]===2)){i=0;continue}if(n[0]===3&&(!l||n[1]>l[0]&&n[1]<l[3])){i.label=n[1];break}if(n[0]===6&&i.label<l[1]){i.label=l[1];l=n;break}if(l&&i.label<l[2]){i.label=l[2];i.ops.push(n);break}if(l[2])i.ops.pop();i.trys.pop();continue}n=e.call(t,i)}catch(u){n=[6,u];s=0}finally{r=l=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-bd77d9ae.system.js","./p-b8a4489f.system.js","./p-2977e6f6.system.js"],(function(t){"use strict";var e,i,r,s,l,n,u,a,o,c;return{setters:[function(t){e=t.r;i=t.c;r=t.h;s=t.H;l=t.g},function(t){n=t.c;u=t.e;a=t.l;o=t.x},function(t){c=t.g}],execute:function(){var h=t("calcite_alert",function(){function t(t){e(this,t);this.active=false;this.autoDismiss=false;this.autoDismissDuration=this.autoDismiss?"medium":null;this.color="blue";this.theme="light";this.scale="m";this.icon=false;this.alertQueue=[];this.alertId=this.el.id;this.autoDismissDurations={slow:14e3,medium:1e4,fast:6e3};this.iconDefaults={green:n,yellow:u,red:u,blue:a};this.calciteAlertClose=i(this,"calciteAlertClose",7);this.calciteAlertOpen=i(this,"calciteAlertOpen",7);this.calciteAlertSync=i(this,"calciteAlertSync",7)}t.prototype.alertOpen=function(t){this.calciteAlertSync.emit({alertQueue:this.alertQueue});if(!this.alertQueue.includes(t.detail.requestedAlert)){this.alertQueue.push(t.detail.requestedAlert)}this.determineActiveAlert()};t.prototype.alertClose=function(t){if(this.alertQueue.includes(t.detail.requestedAlert)){this.alertQueue=this.alertQueue.filter((function(e){return e!==t.detail.requestedAlert}))}if(this.alertId===t.detail.requestedAlert)this.active=false;this.determineActiveAlert()};t.prototype.alertRegister=function(t){if(this.alertQueue!==t.detail.alertQueue){this.alertQueue=t.detail.alertQueue}};t.prototype.connectedCallback=function(){var t=["blue","red","green","yellow"];if(!t.includes(this.color))this.color="blue";var e=["dark","light"];if(!e.includes(this.theme))this.theme="light";var i=["s","m","l"];if(!i.includes(this.scale))this.scale="m";var r=["slow","medium","fast"];if(this.autoDismissDuration!==null&&!r.includes(this.autoDismissDuration)){this.autoDismissDuration="medium"}};t.prototype.render=function(){var t=this;var e=c(this.el);var i=r("button",{class:"alert-close","aria-label":"close",onClick:function(){return t.close()}},r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"32",width:"32",viewBox:"0 0 32 32"},r("path",{d:o})));var l=r("div",{class:(this.alertQueue.length>1?"active ":"")+"alert-count"},"+",this.alertQueue.length>2?this.alertQueue.length-1:1);var n=r("div",{class:"alert-dismiss-progress"});var u=!this.active?null:this.autoDismiss?"alert":"alertdialog";return r(s,{active:this.active,dir:e,role:u},this.icon?this.setIcon():null,r("div",{class:"alert-content"},r("slot",{name:"alert-title"}),r("slot",{name:"alert-message"}),r("slot",{name:"alert-link"})),l,!this.autoDismiss?i:null,this.active&&this.autoDismiss?n:null)};t.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.calciteAlertOpen.emit({requestedAlert:this.alertId,alertQueue:this.alertQueue});return[2]}))}))};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.calciteAlertClose.emit({requestedAlert:this.alertId,alertQueue:this.alertQueue});return[2]}))}))};t.prototype.determineActiveAlert=function(){var t=this;this.alertQueueLength=this.alertQueue.length;this.currentAlert=this.alertQueue.length>0?this.alertQueue[0]:null;if(!this.active&&this.currentAlert===this.alertId){setTimeout((function(){return t.active=true}),300);if(this.autoDismiss){setTimeout((function(){return t.close()}),this.autoDismissDurations[this.autoDismissDuration])}}};t.prototype.setIcon=function(){var t=this.iconDefaults[this.color];return r("div",{class:"alert-icon"},r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24"},r("path",{d:t})))};Object.defineProperty(t.prototype,"el",{get:function(){return l(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-pressed:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-pressed:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-pressed:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-pressed:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-pressed:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-pressed:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-pressed:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-pressed:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-pressed:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-pressed:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-alert-icon-fill:#151515;--calcite-alert-dismiss-progress-background:hsla(0,0%,100%,0.8)}:host([theme=dark]){--calcite-alert-icon-fill:#d4d4d4;--calcite-alert-dismiss-progress-background:rgba(43,43,43,0.8)}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem}:host([scale=s]) div::slotted([slot=alert-title]),:host([scale=s]) slot[name=alert-title]::slotted(div){font-size:.875rem;line-height:1.5}:host([scale=s]) ::slotted(calcite-button),:host([scale=s]) div::slotted([slot=alert-message]),:host([scale=s]) slot[name=alert-message]::slotted(div){font-size:.8125rem;line-height:1.5}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.5rem}:host([scale=m]) div::slotted([slot=alert-title]),:host([scale=m]) slot[name=alert-title]::slotted(div){font-size:.9375rem;line-height:1.5}:host([scale=m]) ::slotted(calcite-button),:host([scale=m]) div::slotted([slot=alert-message]),:host([scale=m]) slot[name=alert-message]::slotted(div){font-size:.875rem;line-height:1.5}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1.5rem;--calcite-alert-spacing-token-large:2.25rem}:host([scale=l]) div::slotted([slot=alert-title]),:host([scale=l]) slot[name=alert-title]::slotted(div){font-size:1rem;line-height:1.5}:host([scale=l]) ::slotted(calcite-button),:host([scale=l]) div::slotted([slot=alert-message]),:host([scale=l]) slot[name=alert-message]::slotted(div){font-size:.9375rem;line-height:1.5}:host{display:-ms-flexbox;display:flex;position:fixed;-ms-flex-pack:center;justify-content:center;margin:0 auto;width:var(--calcite-alert-width);max-width:90%;max-height:0;background-color:var(--calcite-ui-foreground);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.15);box-shadow:0 0 16px 0 rgba(0,0,0,.15);border-radius:var(--calcite-border-radius);opacity:0;left:0;right:0;bottom:0;pointer-events:none;z-index:101;-webkit-transform:translate3d(0,1.5rem,0);transform:translate3d(0,1.5rem,0);-webkit-transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;border-top:0 solid transparent}\@media only screen and (max-width:860px){:host{width:100%;max-width:100%;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host:host(.hydrated){visibility:hidden!important}:host([active]){opacity:1;max-height:100%;-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);pointer-events:auto;border-top-width:3px}:host([active]):host(.hydrated){visibility:visible!important}\@media only screen and (max-width:860px){:host([active]){-webkit-transform:translateZ(0);transform:translateZ(0)}}div::slotted([slot=alert-title]),slot[name=alert-title]::slotted(div){font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-1);font-weight:500}div::slotted([slot=alert-message]),slot[name=alert-message]::slotted(div){display:inline;margin-right:.75rem;font-size:.9375rem;line-height:1.5;color:var(--calcite-ui-text-2)}:host([dir=rtl]) div::slotted([slot=alert-message]),:host([dir=rtl]) slot[name=alert-message]::slotted(div){margin-right:unset;margin-left:.75rem}.alert-content{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) 0}.alert-content svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type{padding-left:var(--calcite-alert-spacing-token-large)}\@media only screen and (max-width:860px){.alert-content{padding:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large) 0}}:host([dir=rtl]) .alert-content:first-of-type{padding-right:var(--calcite-alert-spacing-token-large);padding-left:none}\@media only screen and (max-width:860px){:host([dir=rtl]) .alert-content{padding:var(--calcite-alert-spacing-token-large) 0 var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}}.alert-icon{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-icon svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-icon{padding:1.5rem}}.alert-close{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;border-radius:0 0 var(--calcite-border-radius) 0}.alert-close svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-close{padding:1.5rem}}.alert-close svg{fill:var(--calcite-alert-icon-fill)}.alert-close:focus,.alert-close:hover{background-color:var(--calcite-ui-foreground-hover)}.alert-close:active{background-color:var(--calcite-ui-foreground-pressed)}:host([dir=rtl]) .alert-close{border-radius:0 0 0 var(--calcite-border-radius)}\@media only screen and (max-width:860px){:host([dir=rtl]) .alert-close{border-radius:0}}.alert-count{font-size:.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:var(--calcite-ui-text-2);opacity:0;border-left:0 solid transparent;border-right:0 solid transparent;cursor:default;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.alert-count.active{visibility:visible;opacity:1;padding:0 .375rem;width:3rem;border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3)}.alert-count.active:last-child{border-right:0 solid transparent}\@media only screen and (max-width:860px){.alert-count{border-radius:0}}:host([dir=rtl]).active:last-child{border-left:1px solid var(--calcite-ui-border-3);border-right:0 solid transparent}.alert-dismiss-progress{display:block;position:absolute;left:0;right:0;top:0;width:100%;height:3px;z-index:103}.alert-dismiss-progress:after{height:3px;top:-3px;right:0;display:block;position:absolute;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0;content:\"\";background-color:var(--calcite-alert-dismiss-progress-background);z-index:104}:host([color=blue]){border-top-color:var(--calcite-ui-blue)}:host([color=blue]) .alert-icon svg{fill:var(--calcite-ui-blue)}:host([color=red]){border-top-color:var(--calcite-ui-red)}:host([color=red]) .alert-icon svg{fill:var(--calcite-ui-red)}:host([color=yellow]){border-top-color:var(--calcite-ui-yellow)}:host([color=yellow]) .alert-icon svg{fill:var(--calcite-ui-yellow)}:host([color=green]){border-top-color:var(--calcite-ui-green)}:host([color=green]) .alert-icon svg{fill:var(--calcite-ui-green)}:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 6s ease-out;animation:dismissProgress 6s ease-out}:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 10s ease-out;animation:dismissProgress 10s ease-out}:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 14s ease-out;animation:dismissProgress 14s ease-out}\@-webkit-keyframes dismissProgress{0%{width:0;opacity:.8}to{width:100%;opacity:1}}\@keyframes dismissProgress{0%{width:0;opacity:.8}to{width:100%;opacity:1}}"},enumerable:true,configurable:true});return t}())}}}));