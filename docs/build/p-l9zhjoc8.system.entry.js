var __awaiter=this&&this.__awaiter||function(e,t,i,n){function s(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function c(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):s(e.value).then(r,c)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,s,a,r;return r={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function c(e){return function(t){return l([e,t])}}function l(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,s&&(a=r[0]&2?s["return"]:r[0]?s["throw"]||((a=s["return"])&&a.call(s),0):s.next)&&!(a=a.call(s,r[1])).done)return a;if(s=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;s=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(r[0]===6&&i.label<a[1]){i.label=a[1];a=r;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(r);break}if(a[2])i.ops.pop();i.trys.pop();continue}r=t.call(e,i)}catch(c){r=[6,c];s=0}finally{n=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-6be4d309.system.js","./p-12ec9e50.system.js","./p-b0d69d1e.system.js"],(function(e){"use strict";var t,i,n,s,a,r,c,l;return{setters:[function(e){t=e.r;i=e.c;n=e.h;s=e.H;a=e.g},function(e){r=e.I},function(e){c=e.C;l=e.I}],execute:function(){var o=e("calcite_pick_list_item",function(){function e(e){var n=this;t(this,e);this.compact=false;this.disabled=false;this.disableDeselect=false;this.icon=null;this.selected=false;this.pickListClickHandler=function(e){if(n.disabled||n.disableDeselect&&n.selected){return}n.shiftPressed=e.shiftKey;n.selected=!n.selected};this.pickListKeyDownHandler=function(e){if(e.key===" "){e.preventDefault();if(n.disableDeselect&&n.selected){return}n.selected=!n.selected}};this.calciteListItemChange=i(this,"calciteListItemChange",7);this.calciteListItemPropsUpdated=i(this,"calciteListItemPropsUpdated",7);this.calciteListItemValueChange=i(this,"calciteListItemValueChange",7)}e.prototype.metadataWatchHandler=function(){this.calciteListItemPropsUpdated.emit()};e.prototype.selectedWatchHandler=function(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed});this.shiftPressed=false};e.prototype.textDescriptionWatchHandler=function(){this.calciteListItemPropsUpdated.emit()};e.prototype.textLabelWatchHandler=function(){this.calciteListItemPropsUpdated.emit()};e.prototype.valueWatchHandler=function(e,t){this.calciteListItemValueChange.emit({oldValue:t,newValue:e})};e.prototype.toggleSelected=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.disabled){return[2]}this.selected=typeof e==="boolean"?e:!this.selected;return[2]}))}))};e.prototype.renderIcon=function(){var e=this,t=e.compact,i=e.icon,s=e.selected;if(!i||t){return null}var a=i===r.square?s?l.checked:l.unchecked:s?l.selected:l.unselected;return n("span",{class:c.icon},n("calcite-icon",{scale:"s",icon:a}))};e.prototype.render=function(){var e=this.textDescription&&!this.compact?n("span",{class:c.description},this.textDescription):null;return n(s,{role:"menuitemcheckbox","aria-checked":this.selected.toString()},n("label",{class:c.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,tabIndex:0,"aria-label":this.textLabel},this.renderIcon(),n("div",{class:c.textContainer},n("span",{class:c.title},this.textLabel),e)),n("div",{class:c.action},n("slot",{name:"secondary-action"})))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],textDescription:["textDescriptionWatchHandler"],textLabel:["textLabelWatchHandler"],value:["valueWatchHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin:0 var(--calcite-app-side-spacing-half) var(--calcite-app-cap-spacing-minimum);color:var(--calcite-app-foreground);-webkit-transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host(:hover),:host(:focus){background-color:var(--calcite-app-background-hover)}:host(:last-child){margin-bottom:0;-webkit-box-shadow:0 1px 0 var(--calcite-app-border) inset;box-shadow:0 1px 0 var(--calcite-app-border) inset}.icon{color:var(--calcite-app-foreground-link);-ms-flex:0 0 0%;flex:0 0 0%;line-height:0;width:var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half)}.label{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-app-cap-spacing-three-quarters) var(--calcite-app-side-spacing-half);-ms-flex-align:center;align-items:center;cursor:pointer}.label:focus{outline-offset:var(--calcite-app-outline-inset)}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-app-side-spacing-half)}.title{font-size:var(--calcite-app-font-size-0);display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.description{color:var(--calcite-app-foreground-subtle);font-family:var(--calcite-app-font-family-monospace);font-size:var(--calcite-app-font-size--1);margin-top:var(--calcite-app-cap-spacing-quarter);display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.action{-ms-flex:0 0 0%;flex:0 0 0%;justify-self:flex-end;margin:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half)}"},enumerable:true,configurable:true});return e}())}}}));