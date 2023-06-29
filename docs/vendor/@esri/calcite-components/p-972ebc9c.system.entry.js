var __awaiter=this&&this.__awaiter||function(t,e,i,a){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function r(t){try{l(a.next(t))}catch(e){s(e)}}function o(t){try{l(a["throw"](t))}catch(e){s(e)}}function l(t){t.done?i(t.value):n(t.value).then(r,o)}l((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},a,n,s,r;return r={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function o(t){return function(e){return l([t,e])}}function l(r){if(a)throw new TypeError("Generator is already executing.");while(i)try{if(a=1,n&&(s=r[0]&2?n["return"]:r[0]?n["throw"]||((s=n["return"])&&s.call(n),0):n.next)&&!(s=s.call(n,r[1])).done)return s;if(n=0,s)r=[r[0]&2,s.value];switch(r[0]){case 0:case 1:s=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;n=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!s||r[1]>s[0]&&r[1]<s[3])){i.label=r[1];break}if(r[0]===6&&i.label<s[1]){i.label=s[1];s=r;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(r);break}if(s[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(o){r=[6,o];n=0}finally{a=s=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-1d25d5b7.system.js"],(function(t){"use strict";var e,i,a,n,s;return{setters:[function(t){e=t.r;i=t.c;a=t.h;n=t.H;s=t.g}],execute:function(){var r={page:"page",selected:"is-selected",previous:"previous",next:"next",disabled:"is-disabled",ellipsis:"ellipsis",ellipsisStart:"ellipsis--start",ellipsisEnd:"ellipsis--end"};var o={nextLabel:"next",previousLabel:"previous"};var l=":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){--calcite-pagination-spacing:4px 8px}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{font-size:12px}:host([scale=m]){--calcite-pagination-spacing:8px 12px}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{font-size:16px}:host([scale=l]){--calcite-pagination-spacing:12px 16px}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{font-size:20px}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-writing-mode:lr-tb;-webkit-writing-mode:horizontal-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out;transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.previous,.next,.page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:transparent;border:none;border-top:3px solid transparent;border-bottom:3px solid transparent;font-family:inherit;font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-3);cursor:pointer}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:500;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue-1)}.previous,.next{padding:var(--calcite-pagination-spacing)}.previous:hover,.next:hover{color:var(--calcite-ui-blue-1);background-color:var(--calcite-ui-foreground-2)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{background-color:transparent;pointer-events:none}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:0.4}.next{margin-right:0}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}";var c=5;var u=t("calcite_pagination",function(){function t(t){var a=this;e(this,t);this.calcitePaginationUpdate=i(this,"calcitePaginationUpdate",7);this.num=20;this.start=1;this.total=0;this.textLabelNext=o.nextLabel;this.textLabelPrevious=o.previousLabel;this.scale="m";this.previousClicked=function(){a.previousPage().then();a.emitUpdate()};this.nextClicked=function(){a.nextPage();a.emitUpdate()}}t.prototype.connectedCallback=function(){var t=["s","m","l"];if(!t.includes(this.scale))this.scale="m"};t.prototype.nextPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.start=Math.min(this.getLastStart(),this.start+this.num);return[2]}))}))};t.prototype.previousPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.start=Math.max(1,this.start-this.num);return[2]}))}))};t.prototype.getLastStart=function(){var t=this,e=t.total,i=t.num;var a=e%i===0?e-i:Math.floor(e/i)*i;return a+1};t.prototype.showLeftEllipsis=function(){return Math.floor(this.start/this.num)>3};t.prototype.showRightEllipsis=function(){return(this.total-this.start)/this.num>3};t.prototype.emitUpdate=function(){this.calcitePaginationUpdate.emit({start:this.start,total:this.total,num:this.num})};t.prototype.renderPages=function(){var t=this;var e=this.getLastStart();var i;var a;if(this.total/this.num<=c){a=1+this.num;i=e-this.num}else{if(this.start/this.num<c-1){a=1+this.num;i=1+4*this.num}else{if(this.start+3*this.num>=this.total){a=e-4*this.num;i=e-this.num}else{a=this.start-this.num;i=this.start+this.num}}}var n=[];while(a<=i){n.push(a);a=a+this.num}return n.map((function(e){return t.renderPage(e)}))};t.prototype.renderPage=function(t){var e;var i=this;var n=Math.floor(t/this.num)+1;return a("button",{class:(e={},e[r.page]=true,e[r.selected]=t===this.start,e),onClick:function(){i.start=t;i.emitUpdate()}},n)};t.prototype.renderLeftEllipsis=function(t){if(this.total/this.num>c&&this.showLeftEllipsis()){return a("span",{class:r.ellipsis+" "+r.ellipsisStart},a("calcite-icon",{scale:t,icon:"ellipsis"}))}};t.prototype.renderRightEllipsis=function(t){if(this.total/this.num>c&&this.showRightEllipsis()){return a("span",{class:r.ellipsis+" "+r.ellipsisEnd},a("calcite-icon",{scale:t,icon:"ellipsis"}))}};t.prototype.render=function(){var t,e;var i=this,s=i.total,o=i.num,l=i.start;var c=this.scale==="l"?"m":"s";return a(n,null,a("button",{class:(t={},t[r.previous]=true,t[r.disabled]=l<o,t),"aria-label":this.textLabelPrevious,onClick:this.previousClicked,disabled:l<o},a("calcite-icon",{scale:c,icon:"chevronLeft"})),s>o?this.renderPage(1):null,this.renderLeftEllipsis(c),this.renderPages(),this.renderRightEllipsis(c),this.renderPage(this.getLastStart()),a("button",{class:(e={},e[r.next]=true,e[r.disabled]=l+o>=s,e),"aria-label":this.textLabelNext,onClick:this.nextClicked,disabled:l+o>=s},a("calcite-icon",{scale:c,icon:"chevronRight"})))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());u.style=l}}}));