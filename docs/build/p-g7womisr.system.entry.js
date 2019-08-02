var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n["throw"](t))}catch(t){o(t)}}function c(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(s,a)}c((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;r=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1];o=s;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(s);break}if(o[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t];r=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-581369cc.system.js","./p-25c3966c.system.js","./p-6f5289b6.system.js","./p-79fd99b6.system.js","./p-24c2f445.system.js"],function(t){"use strict";var e,i,n,r,o,s,a,c,l,u,p,h;return{setters:[function(t){e=t.r;i=t.h;n=t.H;r=t.g},function(t){o=t.c;s=t.a;a=t.x},function(t){c=t.c},function(t){l=t.D;u=t.a;p=t.C},function(t){h=t.C}],execute:function(){var f=function(){function t(t){var i=this;e(this,t);this.textDefaultTitle=l;this.textPaginationLabel=u;this.groupTitle=this.textDefaultTitle;this.observer=new MutationObserver(function(){return i.setUpTips()});this.hideTipManager=function(){i.el.toggleAttribute("hidden");i.el.toggleAttribute("aria-hidden")};this.previousClicked=function(){i.previousTip()};this.nextClicked=function(){i.nextTip()}}t.prototype.selectedChangeHandler=function(){this.updateSelectedTip()};t.prototype.componentWillLoad=function(){this.setUpTips()};t.prototype.componentDidLoad=function(){this.observer.observe(this.el,{childList:true})};t.prototype.componentDidUnload=function(){this.observer.disconnect()};t.prototype.nextTip=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){this.direction="advancing";t=this.selectedIndex+1;this.selectedIndex=(t+this.total)%this.total;return[2]})})};t.prototype.previousTip=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){this.direction="retreating";t=this.selectedIndex-1;this.selectedIndex=(t+this.total)%this.total;return[2]})})};t.prototype.setUpTips=function(){var t=Array.from(this.el.querySelectorAll("calcite-tip"));this.tips=t;this.total=t.length;var e=null;t.forEach(function(t,i){t.toggleAttribute("non-dismissible",true);if(e===null&&t.hasAttribute("selected")){e=i;return}t.removeAttribute("selected")});this.selectedIndex=e||0};t.prototype.updateSelectedTip=function(){var t=this;this.tips.forEach(function(e,i){var n=i===t.selectedIndex;e.toggleAttribute("selected",n);e.toggleAttribute("hidden",!n);if(n){var r=e.closest("calcite-tip-group");t.groupTitle=r?r.textGroupTitle:t.textDefaultTitle}})};t.prototype.render=function(){if(this.total===0){return i(n,null)}return i(n,null,i("header",{class:p.header},i("h2",{class:p.heading},this.groupTitle),i("calcite-action",{onClick:this.hideTipManager,class:p.close},i(h,{size:"16",path:a}))),i("div",{class:c(p.tipContainer,this.direction),key:this.selectedIndex},i("slot",null)),i("footer",{class:p.pagination},i("calcite-action",{onClick:this.previousClicked,class:p.pagePrevious},i(h,{size:"16",path:s})),i("span",{class:p.pagePosition},this.textPaginationLabel+" "+(this.selectedIndex+1)+"/"+this.total),i("calcite-action",{onClick:this.nextClicked,class:p.pageNext},i(h,{size:"16",path:o}))))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selectedIndex:["selectedChangeHandler"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--line-height:1.3rem;--base-font-size:14px;--font-size-2:1.429rem;--font-size-1:1.143rem;--font-size-0:1rem;--font-size--1:0.858rem;--font-weight:400;--font-weight-heading:600;--font-weight-bold:600;font-size:var(--font-size-0);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3)}:root{--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}html{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;font-size:14px;line-height:1.3rem}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--font-size-2)}h1.heading,h2.heading{font-weight:var(--font-weight)}h2.heading{font-size:var(--font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--font-size-0);font-weight:var(--font-weight-bold)}button{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}\@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}:host{overflow:hidden;position:relative;display:block;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) 0;background-color:var(--calcite-app-background)}:host([hidden]){display:none}.header .heading{padding-left:var(--calcite-app-side-spacing-half);padding-right:var(--calcite-app-side-spacing-half)}.tip-container{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--calcite-app-animation-time);animation-duration:var(--calcite-app-animation-time);-webkit-animation-timing-function:var(--calcite-app-easing-function);animation-timing-function:var(--calcite-app-easing-function);height:22vh;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;background-color:var(--calcite-app-background)}.tip-container.advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container.retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-app-cap-spacing-quarter) 0}.page-position{font-size:var(--font-size--1);margin:0 var(--calcite-app-side-spacing-half);color:var(--calcite-app-foreground)}"},enumerable:true,configurable:true});return t}();t("calcite_tip_manager",f)}}});