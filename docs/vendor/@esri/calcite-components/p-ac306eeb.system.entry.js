System.register(["./p-ba945cc8.system.js","./p-6d3b7ecb.system.js"],(function(e){"use strict";var t,o,i,r,n,c,s;return{setters:[function(e){t=e.r;o=e.c;i=e.h;r=e.H;n=e.g},function(e){c=e.S;s=e.E}],execute:function(){var h=":host([hidden]){display:none}::slotted(input){display:none}:host{display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.check-svg{width:20px;height:20px;overflow:hidden;display:inline-block;background-color:white;border:1px solid #757575;border-radius:2px;vertical-align:-0.25em;margin-right:0.25em;pointer-events:none;-webkit-transition:all 150ms linear;transition:all 150ms linear;-webkit-box-sizing:border-box;box-sizing:border-box}:host-context([theme=dark]) .check-svg{background-color:transparent;border-color:#eaeaea}:host([theme=dark][disabled]) .check-svg{border-color:#757575;background-color:#2b2b2b}:host([theme=dark][checked]) .check-svg,:host([theme=dark][indeterminate]) .check-svg{background-color:#3db8ff}:host([size=large]) .check-svg{width:24px;height:24px;border-radius:4px}:host([size=small]) .check-svg{width:16px;height:16px}:host([disabled]){pointer-events:none;cursor:default}:host([disabled]) .check-svg{background-color:#f3f3f3;border-color:#eaeaea}:host([disabled][checked]) .check-svg,:host([disabled][indeterminate]) .check-svg{background-color:#84c1e8;border-color:#84c1e8}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:#007ac2;border:1px solid #007ac2}:host(:hover),:host(:focus){outline:none}:host(:hover) .check-svg,:host(:focus) .check-svg{border-color:#0079c1 !important;-webkit-box-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(81, 167, 232, 0.5), 0 0 5px rgba(81, 167, 232, 0.5);box-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(81, 167, 232, 0.5), 0 0 5px rgba(81, 167, 232, 0.5)}";var a=e("calcite_checkbox",function(){function e(e){var i=this;t(this,e);this.checked=false;this.indeterminate=false;this.name="";this.value="";this.size=null;this.disabled=false;this.toggle=function(){if(!i.disabled){i.checked=!i.checked;i.indeterminate=false}};this.indeterminatePath="M4 7h8v2H4z";this.checkedPath="M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";this.getPath=function(){return i.indeterminate?i.indeterminatePath:i.checked?i.checkedPath:""};this.syncThisToProxyInput=function(){i.checked=i.inputProxy.hasAttribute("checked");i.name=i.inputProxy.name;i.value=i.inputProxy.value};this.syncProxyInputToThis=function(){i.checked?i.inputProxy.setAttribute("checked",""):i.inputProxy.removeAttribute("checked");i.inputProxy.name=i.name;i.inputProxy.value=i.value};this.calciteCheckboxChange=o(this,"calciteCheckboxChange",7)}e.prototype.onClick=function(e){var t=e.target;if(this.el.closest("label")&&t===this.inputProxy||!this.el.closest("label")&&t===this.el){this.toggle()}};e.prototype.keyDownHandler=function(e){if(e.keyCode===c||e.keyCode===s){e.preventDefault();this.toggle()}};e.prototype.checkedWatcher=function(){this.calciteCheckboxChange.emit();this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")};e.prototype.connectedCallback=function(){this.setupProxyInput()};e.prototype.disconnectedCallback=function(){this.observer.disconnect()};e.prototype.componentWillRender=function(){this.syncProxyInputToThis()};e.prototype.render=function(){return i(r,{role:"checkbox","aria-checked":this.checked.toString(),tabindex:this.disabled?"-1":"0"},i("svg",{class:"check-svg",viewBox:"0 0 16 16"},i("path",{d:this.getPath(),fill:"white"})),i("slot",null))};e.prototype.setupProxyInput=function(){this.inputProxy=this.el.querySelector("input");if(!this.inputProxy){this.inputProxy=document.createElement("input");this.inputProxy.type="checkbox";this.syncProxyInputToThis();this.el.appendChild(this.inputProxy)}this.syncThisToProxyInput();{this.observer=new MutationObserver(this.syncThisToProxyInput);this.observer.observe(this.inputProxy,{attributes:true})}};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedWatcher"]}},enumerable:true,configurable:true});return e}());a.style=h}}}));