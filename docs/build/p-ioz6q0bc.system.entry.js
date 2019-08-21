var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(i,a){function o(t){try{u(n.next(t))}catch(t){a(t)}}function s(t){try{u(n["throw"](t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(o,s)}u((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-c2917d38.system.js","./p-9391ba3d.system.js"],function(t){"use strict";var e,r,n,i,a;return{setters:[function(t){e=t.r;r=t.h;n=t.H;i=t.g},function(t){a=t.g}],execute:function(){var o=t("calcite_tabs",function(){function t(t){e(this,t);this.theme="light";this.layout="inline";this.titles=[];this.tabs=[]}t.prototype.render=function(){var t=a(this.el);return r(n,{dir:t},r("div",null,r("slot",{name:"tab-nav"}),r("section",{class:"tab-contents"},r("slot",null))))};t.prototype.calciteTabTitleRegister=function(t){this.titles=this.titles.concat([t.target]);this.registryHandler();t.stopPropagation()};t.prototype.calciteTabTitleUnregister=function(t){this.titles=this.titles.filter(function(e){return e!==t.target});this.registryHandler();t.stopPropagation()};t.prototype.calciteTabRegister=function(t){this.tabs=this.tabs.concat([t.target]);this.registryHandler();t.stopPropagation()};t.prototype.calciteTabUnregister=function(t){this.tabs=this.tabs.filter(function(e){return e!==t.target});this.registryHandler();t.stopPropagation()};t.prototype.registryHandler=function(){return __awaiter(this,void 0,void 0,function(){var t,e,r,n;var i=this;return __generator(this,function(a){switch(a.label){case 0:if(!(this.tabs.some(function(t){return t.tab})||this.titles.some(function(t){return t.tab})))return[3,1];t=this.tabs.sort(function(t,e){return t.tab.localeCompare(e.tab)}).map(function(t){return t.id});e=this.titles.sort(function(t,e){return t.tab.localeCompare(e.tab)}).map(function(t){return t.id});return[3,4];case 1:return[4,Promise.all(this.tabs.map(function(t){return t.getTabIndex()}))];case 2:r=a.sent();return[4,Promise.all(this.titles.map(function(t){return t.getTabIndex()}))];case 3:n=a.sent();t=r.reduce(function(t,e,r){t[e]=i.tabs[r].id;return t},[]);e=n.reduce(function(t,e,r){t[e]=i.titles[r].id;return t},[]);a.label=4;case 4:this.tabs.forEach(function(r){return r.updateAriaInfo(t,e)});this.titles.forEach(function(r){return r.updateAriaInfo(t,e)});return[2]}})})};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}:host,calcite-tabs{display:block}:host{--calcite-tabs-color:#2b2b2b;--calcite-tabs-border:#eaeaea;--calcite-tabs-border-hover:#dfdfdf;--calcite-tabs-color-active:#151515;--calcite-tabs-border-active:#007ac2;--calcite-tabs-layout:flex-start;--calcite-tabs-tab-basis:auto;--calcite-tabs-tab-text-align:start;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:0}:host([theme=dark]){--calcite-tabs-color:#f3f3f3;--calcite-tabs-border:#404040;--calcite-tabs-border-hover:#757575;--calcite-tabs-color-active:#f8f8f8;--calcite-tabs-border-active:#fff}:host([dir=rtl]){--calcite-tabs-tab-margin-start:0;--calcite-tabs-tab-margin-end:1.25rem}:host([layout=center]){--calcite-tabs-layout:center;--calcite-tabs-tab-basis:200px;--calcite-tabs-tab-text-align:center;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:1.25rem}.tab-contents{border-top:1px solid var(--calcite-tabs-border)}"},enumerable:true,configurable:true});return t}())}}});