import{r as t,h as e,H as l,g as s,c as r}from"./p-06107f9b.js";import{c as a}from"./p-840e89a3.js";const n=class{constructor(e){t(this,e)}renderHeader(){return this.el.querySelector("[slot=shell-header]")?e("slot",{name:"shell-header"}):null}renderContent(){return e("div",{class:"content"},e("slot",null))}renderFooter(){return this.el.querySelector("[slot=shell-footer]")?e("div",{class:"footer"},e("slot",{name:"shell-footer"})):null}renderMain(){var t;const l={"main--reversed":"trailing"===(null===(t=this.el.querySelector("[slot=primary-panel]"))||void 0===t?void 0:t.layout)};return e("div",{class:a("main",l)},e("slot",{name:"primary-panel"}),this.renderContent(),e("slot",{name:"contextual-panel"}),e("slot",{name:"tip-manager"}))}render(){return e(l,null,this.renderHeader(),this.renderMain(),this.renderFooter())}get el(){return s(this)}static get style(){return":root{--calcite-app-line-height:1.4;--calcite-app-base-font-size:16px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-3:1.5rem;--calcite-app-font-size-2:1.125rem;--calcite-app-font-size-1:1rem;--calcite-app-font-size-0:0.875rem;--calcite-app-font-size--1:0.75rem;--calcite-app-font-weight:400;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);}.heading{font-weight:var(--calcite-app-font-weight-demi);}h1.heading{font-size:var(--calcite-app-font-size-3);}h2.heading{font-size:var(--calcite-app-font-size-2);}h3.heading{font-size:var(--calcite-app-font-size-1);}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);}:root{--calcite-app-side-spacing:1rem;--calcite-app-cap-spacing:1rem;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:1rem;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-footer-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-4px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 8px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1--press:0 0 8px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-hover:0 0 32px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-press:0 0 16px 0 rgba(0,0,0,0.32);}:root{--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8);}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out;}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}:host{background-color:var(--calcite-app-background);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-size:var(--calcite-app-font-size-0);}:host *{-webkit-box-sizing:border-box;box-sizing:border-box;}:host([hidden]){display:none;}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground);}.heading{padding:0;margin:0;}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);}:host{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;--calcite-app-shell-tip-spacing:26vw;}.main{height:100%;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;border-top:1px solid var(--calcite-app-border-subtle);border-bottom:1px solid var(--calcite-app-border-subtle);-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;}.main--reversed{-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.content{height:100%;width:100%;position:absolute;left:0;right:0;bottom:0;top:0;z-index:0;}::slotted(calcite-shell-panel){position:relative;z-index:1;}::slotted(calcite-tip-manager){-webkit-animation:calcite-app-fade-in-up var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in-up var(--calcite-app-animation-time) var(--calcite-app-easing-function);border-radius:var(--calcite-app-border-radius);bottom:var(--calcite-app-cap-spacing);-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);-webkit-box-sizing:border-box;box-sizing:border-box;left:var(--calcite-app-shell-tip-spacing);position:absolute;right:var(--calcite-app-shell-tip-spacing);z-index:2;}.footer{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing);}"}},i=class{constructor(e){t(this,e),this.collapsed=!1,this.detached=!1,this.detachedScale="m",this.layout="leading",this.calciteShellPanelToggle=r(this,"calciteShellPanelToggle",7)}watchHandler(){this.calciteShellPanelToggle.emit()}render(){const{collapsed:t,detached:s,layout:r}=this,n=e("div",{class:a("content",{"content--detached":s}),hidden:t},e("slot",null)),i=[e("slot",{name:"action-bar"}),n];return"trailing"===r&&i.reverse(),e(l,null,i)}static get watchers(){return{collapsed:["watchHandler"]}}static get style(){return":root{--calcite-app-line-height:1.4;--calcite-app-base-font-size:16px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-3:1.5rem;--calcite-app-font-size-2:1.125rem;--calcite-app-font-size-1:1rem;--calcite-app-font-size-0:0.875rem;--calcite-app-font-size--1:0.75rem;--calcite-app-font-weight:400;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);}.heading{font-weight:var(--calcite-app-font-weight-demi);}h1.heading{font-size:var(--calcite-app-font-size-3);}h2.heading{font-size:var(--calcite-app-font-size-2);}h3.heading{font-size:var(--calcite-app-font-size-1);}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);}:root{--calcite-app-side-spacing:1rem;--calcite-app-cap-spacing:1rem;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:1rem;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-footer-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-4px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 8px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1--press:0 0 8px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-hover:0 0 32px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-press:0 0 16px 0 rgba(0,0,0,0.32);}:root{--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8);}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out;}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}:host{background-color:var(--calcite-app-background);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-size:var(--calcite-app-font-size-0);}:host *{-webkit-box-sizing:border-box;box-sizing:border-box;}:host([hidden]){display:none;}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground);}.heading{padding:0;margin:0;}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-app-background-transparent);pointer-events:none;--calcite-app-shell-panel-width:20vw;--calcite-app-shell-panel-min-width:240px;--calcite-app-shell-panel-max-width:360px;--calcite-app-shell-panel-max-height-small:35vh;--calcite-app-shell-panel-max-height-medium:55vh;--calcite-app-shell-panel-max-height-large:85vh;}.content{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-app-background-content);-ms-flex-flow:column nowrap;flex-flow:column nowrap;display:-ms-flexbox;display:flex;width:var(--calcite-app-shell-panel-width);min-width:var(--calcite-app-shell-panel-min-width);max-width:var(--calcite-app-shell-panel-max-width);border-left:1px solid var(--calcite-app-border);border-right:1px solid var(--calcite-app-border);padding:0;pointer-events:auto;}.content--detached{border:1px solid var(--calcite-app-border);border-radius:var(--calcite-app-border-radius);-webkit-box-shadow:var(--calcite-app-shadow-0);box-shadow:var(--calcite-app-shadow-0);margin:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) auto;max-height:var(--calcite-app-shell-panel-max-height-medium);overflow:auto;}:host([detached-scale=s]) .content--detached{max-height:var(--calcite-app-shell-panel-max-height-small);}:host([detached-scale=l]) .content--detached{max-height:var(--calcite-app-shell-panel-max-height-large);}.content[hidden]{display:none;}:host([layout=leading]) slot[name=action-bar]::slotted(calcite-action-bar){border-right:1px solid var(--calcite-app-border);}:host([layout=trailing]) slot[name=action-bar]::slotted(calcite-action-bar){border-left:1px solid var(--calcite-app-border);}"}};export{n as calcite_shell,i as calcite_shell_panel};