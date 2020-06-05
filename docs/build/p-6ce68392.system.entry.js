var __awaiter=this&&this.__awaiter||function(e,a,t,i){function n(e){return e instanceof t?e:new t((function(a){a(e)}))}return new(t||(t=Promise))((function(t,r){function o(e){try{l(i.next(e))}catch(a){r(a)}}function c(e){try{l(i["throw"](e))}catch(a){r(a)}}function l(e){e.done?t(e.value):n(e.value).then(o,c)}l((i=i.apply(e,a||[])).next())}))};var __generator=this&&this.__generator||function(e,a){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,n,r,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(a){return l([e,a])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(t)try{if(i=1,n&&(r=o[0]&2?n["return"]:o[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;if(n=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;n=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(r=t.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){t.label=o[1];break}if(o[0]===6&&t.label<r[1]){t.label=r[1];r=o;break}if(r&&t.label<r[2]){t.label=r[2];t.ops.push(o);break}if(r[2])t.ops.pop();t.trys.pop();continue}o=a.call(e,t)}catch(c){o=[6,c];n=0}finally{i=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-c0bbf908.system.js","./p-598b7fa2.system.js"],(function(e){"use strict";var a,t,i,n,r,o,c;return{setters:[function(e){a=e.r;t=e.c;i=e.h;n=e.H;r=e.g},function(e){o=e.a;c=e.b}],execute:function(){var l={container:"container",header:"header",heading:"heading",close:"close",imageFrame:"image-frame",content:"content",info:"info"};var p={close:"x"};var s={thumbnail:"thumbnail"};var d={close:"Close"};var f=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background-color:var(--calcite-app-background-clear)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#00619b;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}.container{background-color:var(--calcite-app-background);padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing) var(--calcite-app-cap-spacing);margin:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing);-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);border-radius:var(--calcite-app-border-radius)}:host([selected]) .container{-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0}.header{-ms-flex-pack:end;justify-content:flex-end}.header .heading{padding-left:0;padding-right:0}.container[hidden]{display:none}.content{display:-ms-flexbox;display:flex;padding-top:var(--calcite-app-cap-spacing-half)}.info{padding:0 var(--calcite-app-side-spacing);width:70%}.info:only-child{width:100%;padding-left:0;padding-right:0}::slotted(p){margin-top:0}::slotted(a){color:var(--calcite-app-foreground-link);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out;transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out}::slotted(a:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.image-frame{width:25%}.image-frame img{max-width:100%}::slotted(img){max-width:100%}";var u=e("calcite_tip",function(){function e(e){var i=this;a(this,e);this.dismissed=false;this.nonDismissible=false;this.hideTip=function(){i.dismissed=true;i.calciteTipDismiss.emit()};this.calciteTipDismiss=t(this,"calciteTipDismiss",7)}e.prototype.renderHeader=function(){var e=this,a=e.nonDismissible,t=e.hideTip,n=e.intlClose,r=e.heading;var o=n||d.close;var c=!a?i("calcite-action",{text:o,onClick:t,class:l.close,icon:p.close}):null;var s=r?i("h3",{class:l.heading},r):null;return c||s?i("header",{class:l.header},s,c):null};e.prototype.renderImageFrame=function(){var e=this.el;return o(e,s.thumbnail)?i("div",{class:l.imageFrame},i("slot",{name:s.thumbnail})):null};e.prototype.renderInfoNode=function(){return i("div",{class:l.info},i("slot",null))};e.prototype.renderContent=function(){return i("div",{class:l.content},this.renderImageFrame(),this.renderInfoNode())};e.prototype.render=function(){return i(n,null,i("article",{class:l.container,hidden:this.dismissed},this.renderHeader(),this.renderContent()))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());u.style=f;var h=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#00619b;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}::slotted(calcite-tip){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}";var g=e("calcite_tip_group",function(){function e(e){a(this,e)}e.prototype.render=function(){return i("slot",null)};return e}());g.style=h;var b={header:"header",heading:"heading",close:"close",container:"container",tipContainer:"tip-container",tipContainerAdvancing:"tip-container--advancing",tipContainerRetreating:"tip-container--retreating",pagination:"pagination",pagePosition:"page-position",pageNext:"page-next",pagePrevious:"page-previous"};var v={chevronLeft:"chevron-left",chevronRight:"chevron-right",close:"x"};var m={defaultGroupTitle:"Tips",defaultPaginationLabel:"Tip",close:"Close",previous:"Previous",next:"Next"};var x=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}:host{display:block}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#00619b;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:host([closed]){display:none}.header .heading{padding-left:var(--calcite-app-side-spacing-half);padding-right:var(--calcite-app-side-spacing-half)}.container{overflow:hidden;position:relative;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) 0;min-height:150px;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out;transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out}.container:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.tip-container{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--calcite-app-animation-time);animation-duration:var(--calcite-app-animation-time);-webkit-animation-timing-function:var(--calcite-app-easing-function);animation-timing-function:var(--calcite-app-easing-function);height:18vh;margin-top:var(--calcite-app-cap-spacing-quarter);overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out;transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out}.tip-container:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}::slotted(calcite-tip-group){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}::slotted(calcite-tip){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}.tip-container--advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container--retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-app-cap-spacing-quarter) 0}.page-position{font-size:var(--calcite-app-font-size--1);margin:0 var(--calcite-app-side-spacing-half)}";var k=e("calcite_tip_manager",function(){function e(e){var i=this;a(this,e);this.closed=false;this.observer=new MutationObserver((function(){return i.setUpTips()}));this.hideTipManager=function(){i.closed=true;i.calciteTipManagerToggle.emit()};this.previousClicked=function(){i.previousTip()};this.nextClicked=function(){i.nextTip()};this.tipManagerKeyUpHandler=function(e){if(e.target!==i.container){return}switch(e.key){case"ArrowRight":e.preventDefault();i.nextTip();break;case"ArrowLeft":e.preventDefault();i.previousTip();break;case"Home":e.preventDefault();i.selectedIndex=0;break;case"End":e.preventDefault();i.selectedIndex=i.total-1;break}};this.storeContainerRef=function(e){i.container=e};this.calciteTipManagerToggle=t(this,"calciteTipManagerToggle",7)}e.prototype.closedChangeHandler=function(){this.direction=null;this.calciteTipManagerToggle.emit()};e.prototype.selectedChangeHandler=function(){this.showSelectedTip();this.updateGroupTitle()};e.prototype.connectedCallback=function(){this.setUpTips();this.observer.observe(this.el,{childList:true,subtree:true})};e.prototype.componentDidUnload=function(){this.observer.disconnect()};e.prototype.nextTip=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(a){this.direction="advancing";e=this.selectedIndex+1;this.selectedIndex=(e+this.total)%this.total;return[2]}))}))};e.prototype.previousTip=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(a){this.direction="retreating";e=this.selectedIndex-1;this.selectedIndex=(e+this.total)%this.total;return[2]}))}))};e.prototype.setUpTips=function(){var e=Array.from(this.el.querySelectorAll("calcite-tip"));this.total=e.length;if(this.total===0){return}var a=this.el.querySelector("calcite-tip[selected]");this.tips=e;this.selectedIndex=a?e.indexOf(a):0;e.forEach((function(e){e.nonDismissible=true}));this.showSelectedTip();this.updateGroupTitle()};e.prototype.showSelectedTip=function(){var e=this;this.tips.forEach((function(a,t){var i=e.selectedIndex===t;a.selected=i;a.hidden=!i}))};e.prototype.updateGroupTitle=function(){var e=this.tips[this.selectedIndex];var a=e.closest("calcite-tip-group");this.groupTitle=(a===null||a===void 0?void 0:a.textGroupTitle)||this.intlDefaultTitle||m.defaultGroupTitle};e.prototype.renderPagination=function(){var e=c(this.el);var a=this,t=a.selectedIndex,n=a.tips,r=a.total,o=a.intlNext,l=a.intlPrevious,p=a.intlPaginationLabel;var s=o||m.next;var d=l||m.previous;var f=p||m.defaultPaginationLabel;return n.length>1?i("footer",{class:b.pagination},i("calcite-action",{text:d,onClick:this.previousClicked,class:b.pagePrevious,icon:e==="ltr"?v.chevronLeft:v.chevronRight}),i("span",{class:b.pagePosition},f+" "+(t+1)+"/"+r),i("calcite-action",{text:s,onClick:this.nextClicked,class:b.pageNext,icon:e==="ltr"?v.chevronRight:v.chevronLeft})):null};e.prototype.render=function(){var e;var a=this,t=a.closed,r=a.direction,o=a.groupTitle,c=a.selectedIndex,l=a.intlClose,p=a.total;var s=l||m.close;if(p===0){return i(n,null)}return i(n,null,i("section",{class:b.container,hidden:t,"aria-hidden":t.toString(),tabIndex:0,onKeyUp:this.tipManagerKeyUpHandler,ref:this.storeContainerRef},i("header",{class:b.header},i("h2",{key:c,class:b.heading},o),i("calcite-action",{text:s,onClick:this.hideTipManager,class:b.close,icon:v.close})),i("div",{tabIndex:0,class:(e={},e[b.tipContainer]=true,e[b.tipContainerAdvancing]=!t&&r==="advancing",e[b.tipContainerRetreating]=!t&&r==="retreating",e),key:c},i("slot",null)),this.renderPagination()))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{closed:["closedChangeHandler"],selectedIndex:["selectedChangeHandler"]}},enumerable:true,configurable:true});return e}());k.style=x}}}));