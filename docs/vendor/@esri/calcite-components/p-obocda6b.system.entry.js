System.register(["./p-4546c12d.system.js","./p-bc1dd3a3.system.js","./p-f0691b49.system.js"],function(t){"use strict";var e,i,s,n,r,c,o,h;return{setters:[function(t){e=t.r;i=t.c;s=t.h;n=t.H;r=t.g},function(t){c=t.S;o=t.E},function(t){h=t.g}],execute:function(){var u=t("calcite_switch",function(){function t(t){var s=this;e(this,t);this.switched=false;this.name="";this.value="";this.color="blue";this.scale="m";this.theme="light";this.syncThisToProxyInput=function(){s.switched=s.inputProxy.hasAttribute("checked");s.name=s.inputProxy.name;s.value=s.inputProxy.value};this.syncProxyInputToThis=function(){s.switched?s.inputProxy.setAttribute("checked",""):s.inputProxy.removeAttribute("checked");s.inputProxy.setAttribute("name",s.name);s.inputProxy.setAttribute("value",s.value)};this.calciteSwitchChange=i(this,"calciteSwitchChange",7)}t.prototype.onClick=function(t){if(this.el.closest("label")&&t.target===this.inputProxy||!this.el.closest("label")&&t.target===this.el){this.switched=!this.switched}};t.prototype.keyDownHandler=function(t){if(t.keyCode===c||t.keyCode===o){this.switched=!this.switched}};t.prototype.switchWatcher=function(){this.calciteSwitchChange.emit();this.switched?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")};t.prototype.connectedCallback=function(){var t=["blue","red"];if(!t.includes(this.color))this.color="blue";var e=["s","m","l"];if(!e.includes(this.scale))this.scale="m";var i=["dark","light"];if(!i.includes(this.theme))this.theme="light";this.setupProxyInput()};t.prototype.disconnectedCallback=function(){this.observer.disconnect()};t.prototype.componentWillRender=function(){this.syncProxyInputToThis()};t.prototype.render=function(){var t=h(this.el);return s(n,{role:"checkbox",dir:t,"aria-checked":this.switched,tabindex:"0"},s("div",{class:"track"},s("div",{class:"handle"})),s("slot",null))};t.prototype.setupProxyInput=function(){this.inputProxy=this.el.querySelector("input");if(!this.inputProxy){this.inputProxy=document.createElement("input");this.inputProxy.type="checkbox";this.syncProxyInputToThis();this.el.appendChild(this.inputProxy)}this.syncThisToProxyInput();{this.observer=new MutationObserver(this.syncThisToProxyInput);this.observer.observe(this.inputProxy,{attributes:true})}};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{switched:["switchWatcher"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-switch-track-background:#f3f3f3;--calcite-switch-track-border:#d4d4d4;--calcite-switch-handle-background:#fff;--calcite-switch-handle-border:#959595;--calcite-switch-hover-handle-border:#2890ce;--calcite-switch-hover-track-background:#eaeaea;--calcite-switch-hover-track-border:#bfbfbf;--calcite-switch-switched-track-background:#2890ce;--calcite-switch-switched-track-border:#00619b;--calcite-switch-switched-handle-border:#007ac2;--calcite-switch-switched-hover-track-background:#007ac2;--calcite-switch-switched-hover-track-border:#2890ce;--calcite-switch-switched-hover-handle-border:#00619b;--calcite-switch-box-shadow-color:hsla(0,0%,45.9%,0.5);--calcite-switch-switched-box-shadow-color:rgba(0,122,194,0.5)}:host([theme=dark]){--calcite-switch-track-background:#353535;--calcite-switch-track-border:#555;--calcite-switch-handle-background:#2b2b2b;--calcite-switch-handle-border:#959595;--calcite-switch-hover-handle-border:#59d6ff;--calcite-switch-hover-track-background:#404040;--calcite-switch-hover-track-border:grey;--calcite-switch-switched-track-background:#59d6ff;--calcite-switch-switched-track-border:#3db8ff;--calcite-switch-switched-handle-border:#3db8ff;--calcite-switch-switched-hover-track-background:#3db8ff;--calcite-switch-switched-hover-track-border:#3db8ff;--calcite-switch-switched-hover-handle-border:#59d6ff;--calcite-switch-switched-box-shadow-color:rgba(61,184,255,0.5)}:host([color=red]){--calcite-switch-switched-track-background:#e65240;--calcite-switch-switched-track-border:#d83020;--calcite-switch-hover-handle-border:#e65240;--calcite-switch-switched-handle-border:#d83020;--calcite-switch-switched-hover-track-background:#d83020;--calcite-switch-switched-hover-track-border:#e65240;--calcite-switch-switched-hover-handle-border:#a82b1e;--calcite-switch-switched-box-shadow-color:rgba(216,48,32,0.5)}:host([theme=dark][color=red]){--calcite-switch-switched-track-background:#ff624d;--calcite-switch-switched-track-border:#ff0015;--calcite-switch-hover-handle-border:#ff624d;--calcite-switch-switched-handle-border:#ff0015;--calcite-switch-switched-hover-track-background:#ff0015;--calcite-switch-switched-hover-track-border:#d90012;--calcite-switch-switched-hover-handle-border:#d90012;--calcite-switch-switched-box-shadow-color:rgba(255,0,21,0.5)}:host([scale=s]){--calcite-switch-track-width:28px;--calcite-switch-track-height:16px;--calcite-switch-handle-size:14px}:host([scale=m]){--calcite-switch-track-width:36px;--calcite-switch-track-height:20px;--calcite-switch-handle-size:18px}:host([scale=l]){--calcite-switch-track-width:44px;--calcite-switch-track-height:24px;--calcite-switch-handle-size:22px}::slotted(input){display:none}:host{display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;top:-.1em;tap-highlight-color:transparent;margin-right:.5em}.track{position:relative;display:inline-block;vertical-align:top;width:var(--calcite-switch-track-width);height:var(--calcite-switch-track-height);background-color:var(--calcite-switch-track-background);border-radius:30px;border:1px solid var(--calcite-switch-track-border)}.handle,.track{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.handle{position:absolute;display:block;width:var(--calcite-switch-handle-size);height:var(--calcite-switch-handle-size);top:-1px;left:-1px;right:auto;background-color:var(--calcite-switch-handle-background);border-radius:30px;border:2px solid var(--calcite-switch-handle-border)}:host(:focus),:host(:hover){outline:none}:host(:focus) .track,:host(:hover) .track{background-color:var(--calcite-switch-hover-track-background);border-color:var(--calcite-switch-hover-track-border);-webkit-box-shadow:0 0 6px 1px var(--calcite-switch-box-shadow-color);box-shadow:0 0 6px 1px var(--calcite-switch-box-shadow-color)}:host(:focus) .handle,:host(:hover) .handle{border-color:var(--calcite-switch-hover-handle-border);-webkit-box-shadow:0 0 12px 0 rgba(0,0,0,.05);box-shadow:0 0 12px 0 rgba(0,0,0,.05);right:auto;left:0}:host(:hover) .handle{right:auto;left:1px}:host([switched]) .track{background-color:var(--calcite-switch-switched-track-background);border-color:var(--calcite-switch-switched-track-border)}:host([switched]) .handle{right:-1px;left:auto;border-color:var(--calcite-switch-switched-handle-border);-webkit-box-shadow:0 0 12px 0 rgba(0,0,0,.05);box-shadow:0 0 12px 0 rgba(0,0,0,.05)}:host([switched]:focus) .track{-webkit-box-shadow:0 0 6px 1px var(--calcite-switch-switched-box-shadow-color);box-shadow:0 0 6px 1px var(--calcite-switch-switched-box-shadow-color)}:host([switched]:hover) .track{background-color:var(--calcite-switch-switched-hover-track-background);border-color:var(--calcite-switch-switched-hover-track-border)}:host([switched]:hover) .handle{border-color:var(--calcite-switch-switched-hover-handle-border)}:host([dir=rtl]){margin-right:0;margin-left:.5em}:host([dir=rtl]) .handle{left:auto;right:-1px}:host([dir=rtl]:hover) .handle{right:1px;left:auto}:host([dir=rtl][switched]) .handle,:host([dir=rtl][switched]:active) .handle,:host([dir=rtl][switched]:focus) .handle{right:auto;left:-1px}"},enumerable:true,configurable:true});return t}())}}});