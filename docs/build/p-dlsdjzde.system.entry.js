var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function s(t){try{c(n.next(t))}catch(e){o(e)}}function a(t){try{c(n["throw"](t))}catch(e){o(e)}}function c(t){t.done?i(t.value):r(t.value).then(s,a)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;r=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1];o=s;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(s);break}if(o[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(a){s=[6,a];r=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-a6bbd023.system.js","./p-d094d6eb.system.js","./p-b93e277c.system.js","./p-5559af04.system.js","./p-91d2bd3b.system.js"],(function(t){"use strict";var e,i,n,r,o,s,a,c,l,u,p,h,d;return{setters:[function(t){e=t.r;i=t.c;n=t.h;r=t.H;o=t.g},function(t){s=t.c;a=t.b;c=t.C;l=t.x},function(t){u=t.g},function(t){p=t.c},function(t){h=t.T;d=t.C}],execute:function(){var f=t("calcite_tip_manager",function(){function t(t){var n=this;e(this,t);this.textClose=h.close;this.textDefaultTitle=h.defaultGroupTitle;this.textNext=h.next;this.textPaginationLabel=h.defaultPaginationLabel;this.textPrevious=h.previous;this.groupTitle=this.textDefaultTitle;this.observer=new MutationObserver((function(){return n.setUpTips()}));this.hideTipManager=function(){n.el.setAttribute("hidden","");n.el.setAttribute("aria-hidden","");n.calciteTipManagerClose.emit()};this.previousClicked=function(){n.previousTip()};this.nextClicked=function(){n.nextTip()};this.tipManagerKeyUpHandler=function(t){if(t.target!==n.container){return}switch(t.key){case"ArrowRight":t.preventDefault();n.nextTip();break;case"ArrowLeft":t.preventDefault();n.previousTip();break;case"Home":t.preventDefault();n.selectedIndex=0;break;case"End":t.preventDefault();n.selectedIndex=n.total-1;break}};this.storeContainerRef=function(t){n.container=t};this.calciteTipManagerClose=i(this,"calciteTipManagerClose",7)}t.prototype.selectedChangeHandler=function(){this.showSelectedTip();this.updateGroupTitle()};t.prototype.connectedCallback=function(){this.setUpTips()};t.prototype.componentDidLoad=function(){this.observer.observe(this.el,{childList:true,subtree:true})};t.prototype.componentDidUnload=function(){this.observer.disconnect()};t.prototype.nextTip=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){this.direction="advancing";t=this.selectedIndex+1;this.selectedIndex=(t+this.total)%this.total;return[2]}))}))};t.prototype.previousTip=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){this.direction="retreating";t=this.selectedIndex-1;this.selectedIndex=(t+this.total)%this.total;return[2]}))}))};t.prototype.setUpTips=function(){var t=Array.from(this.el.querySelectorAll("calcite-tip"));this.total=t.length;if(this.total===0){return}var e=this.el.querySelector("calcite-tip[selected]");this.tips=t;this.selectedIndex=e?t.indexOf(e):0;t.forEach((function(t){t.setAttribute("non-dismissible","")}));this.showSelectedTip();this.updateGroupTitle()};t.prototype.showSelectedTip=function(){var t=this;this.tips.forEach((function(e,i){var n=t.selectedIndex===i;n?e.setAttribute("selected",""):e.removeAttribute("selected");n?e.removeAttribute("hidden"):e.setAttribute("hidden","")}))};t.prototype.updateGroupTitle=function(){var t=this.tips[this.selectedIndex];var e=t.closest("calcite-tip-group");this.groupTitle=e&&e.textGroupTitle||this.textDefaultTitle};t.prototype.renderPagination=function(){var t=u(this.el);var e=this,i=e.selectedIndex,r=e.tips,o=e.total;return r.length>1?n("footer",{class:d.pagination},n("calcite-action",{text:this.textPrevious,onClick:this.previousClicked,class:d.pagePrevious},n(c,{size:"16",path:t==="ltr"?a:s})),n("span",{class:d.pagePosition},this.textPaginationLabel+" "+(i+1)+"/"+o),n("calcite-action",{text:this.textNext,onClick:this.nextClicked,class:d.pageNext},n(c,{size:"16",path:t==="ltr"?s:a}))):null};t.prototype.render=function(){var t;var e=this,i=e.direction,o=e.groupTitle,s=e.selectedIndex,a=e.textClose,u=e.total;if(u===0){return n(r,null)}return n(r,null,n("div",{tabindex:"0",onKeyUp:this.tipManagerKeyUpHandler,ref:this.storeContainerRef},n("header",{class:d.header},n("h2",{key:s,class:d.heading},o),n("calcite-action",{text:a,onClick:this.hideTipManager,class:d.close},n(c,{size:"16",path:l}))),n("div",{class:p(d.tipContainer,(t={},t[d.tipContainerAdvancing]=i==="advancing",t[d.tipContainerRetreating]=i==="retreating",t)),key:s},n("slot",null)),this.renderPagination()))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selectedIndex:["selectedChangeHandler"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#dfeffa;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#dfeffa;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{background-color:var(--calcite-app-background);color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}:host([hidden]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.heading{padding:0;margin:0}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2);font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h2.heading,h3.heading,h4.heading,h5.heading{font-weight:var(--calcite-app-font-weight-demi)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}\@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}:host{overflow:hidden;position:relative;display:block;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) 0;min-height:150px}.header .heading{padding-left:var(--calcite-app-side-spacing-half);padding-right:var(--calcite-app-side-spacing-half)}.tip-container{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--calcite-app-animation-time);animation-duration:var(--calcite-app-animation-time);-webkit-animation-timing-function:var(--calcite-app-easing-function);animation-timing-function:var(--calcite-app-easing-function);height:22vh;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start}::slotted(calcite-tip),::slotted(calcite-tip-group){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}.tip-container--advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container--retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-app-cap-spacing-quarter) 0}.page-position{font-size:var(--calcite-app-font-size--1);margin:0 var(--calcite-app-side-spacing-half)}"},enumerable:true,configurable:true});return t}())}}}));