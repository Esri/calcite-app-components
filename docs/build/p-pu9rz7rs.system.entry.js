System.register(["./p-9fc8a10d.system.js","./p-4ca95f56.system.js","./p-ac37f83f.system.js"],function(e){"use strict";var t,n,a,l,o,r,s,i;return{setters:[function(e){t=e.r;n=e.c;a=e.h;l=e.H;o=e.g},function(e){r=e.C},function(e){s=e.f;i=e.g}],execute:function(){var c={content:"content",headerContainer:"header-container",toggle:"toggle",toggleIcon:"toggle-icon",title:"title",heading:"heading",header:"header",button:"button",summary:"summary",control:"control"};var u={collapse:"Collapse",expand:"Expand"};var d="control";var g=e("calcite_block",function(){function e(e){var a=this;t(this,e);this.collapsible=false;this.open=false;this.textExpand=u.expand;this.textCollapse=u.collapse;this.onHeaderClick=function(e){var t=a.el.shadowRoot.querySelector("slot[name="+d+"]");var n=t&&t.assignedNodes()[0];if(n&&n.contains(e.target)){e.stopPropagation();e.preventDefault();return}a.open=!a.open;a.calciteBlockToggle.emit()};this.calciteBlockToggle=n(this,"calciteBlockToggle",7)}e.prototype.render=function(){var e=this,t=e.collapsible,n=e.el,o=e.heading,u=e.open,g=e.summary,p=e.textCollapse,h=e.textExpand;var f=u?p:h;var m=a("header",{class:c.header},a("div",{class:c.title},a("h3",{class:c.heading},o),g?a("div",{class:c.summary},g):null),a("slot",{name:d}));var v=a("div",{class:c.headerContainer},t?a("button",{"aria-label":f,class:c.toggle,onClick:this.onHeaderClick,title:f},m,a(r,{size:"16",path:u?s:i,svgAttributes:{class:c.toggleIcon}})):m);var b=!!Array.from(n.children).some(function(e){return e.slot!==d});return a(l,{"aria-expanded":t?u?"true":"false":null},a("article",null,v,a("div",{class:c.content,hidden:!b||!u},a("slot",null))))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:var(--calcite-app-border-radius);overflow:hidden;-webkit-box-shadow:0 1px 0 var(--calcite-app-border);box-shadow:0 1px 0 var(--calcite-app-border);margin:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);background-color:var(--calcite-app-background);color:var(--calcite-app-foreground)}:host([open]){-webkit-box-shadow:0 0 0 1px var(--calcite-app-border);box-shadow:0 0 0 1px var(--calcite-app-border)}.header-container{background-color:var(--calcite-app-background)}.header-container>.header{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}.header{-ms-flex-positive:1;flex-grow:1}.title{margin:0}.summary{font-size:var(--font-size--1);padding:0 var(--calcite-app-side-spacing-half);color:var(--calcite-app-foreground)}.toggle{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);background-color:transparent;border:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0;text-align:unset;width:100%}.toggle-icon{margin:0 4px;fill:var(--calcite-app-foreground)}.content{background-color:var(--calcite-app-background);padding:0 var(--calcite-app-side-spacing-half) var(--calcite-app-cap-spacing-half);-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function)}"},enumerable:true,configurable:true});return e}())}}});