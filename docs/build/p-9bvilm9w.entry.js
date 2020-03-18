import{r as t,h as e,H as s,g as n,c as i}from"./p-f5c2cb95.js";import{C as r}from"./p-e7016dc4.js";import{f as a,g as l,b as o}from"./p-1093878d.js";import{c}from"./p-840e89a3.js";import{C as h}from"./p-ffc077bf.js";const d=class{constructor(e){t(this,e),this.flowCount=0,this.flowDirection=null,this.flows=[],this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{flows:t}=this,e=Array.from(this.el.querySelectorAll("calcite-flow-item")),s=t.length,n=e.length,i=e[n-1],r=e[n-2];if(n&&i&&e.forEach(t=>{t.showBackButton=n>1,t.hidden=t!==i}),r&&(r.menuOpen=!1),this.flows=e,s!==n){const t=this.getFlowDirection(s,n);this.flowCount=n,this.flowDirection=t}},this.flowItemObserver=new MutationObserver(this.updateFlowProps)}async back(){const t=this.el.querySelector("calcite-flow-item:last-child");if(t)return(t.beforeBack?t.beforeBack:()=>Promise.resolve()).call(t).then(()=>(t.remove(),t))}componentWillLoad(){this.updateFlowProps()}componentDidLoad(){this.flowItemObserver.observe(this.el,{childList:!0,subtree:!0})}componentDidUnload(){this.flowItemObserver.disconnect()}handleCalciteFlowItemBackClick(){this.back()}render(){const{flowDirection:t,flowCount:n}=this;return e(s,null,e("div",{key:n,class:c("frame",{"frame--advancing":"advancing"===t,"frame--retreating":"retreating"===t})},e("slot",null)))}get el(){return n(this)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;width:100%;height:100%;overflow:hidden;position:relative}:host .frame{-ms-flex-align:stretch;align-items:stretch;width:100%;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative}:host .frame--advancing{-webkit-animation:calcite-flow-item-advance var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-flow-item-advance var(--calcite-app-animation-time) var(--calcite-app-easing-function)}:host .frame--retreating{-webkit-animation:calcite-flow-item-retreat var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-flow-item-retreat var(--calcite-app-animation-time) var(--calcite-app-easing-function)}\@-webkit-keyframes calcite-flow-item-advance{0%{opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}\@keyframes calcite-flow-item-advance{0%{opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}\@-webkit-keyframes calcite-flow-item-retreat{0%{opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}\@keyframes calcite-flow-item-retreat{0%{opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}"}},u=["calcite-pick-list","calcite-value-list"];function m(t,e){return(t+e)%e}const f=["ArrowUp","ArrowDown"],g=class{constructor(e){t(this,e),this.disabled=!1,this.loading=!1,this.menuOpen=!1,this.showBackButton=!1,this.textBack="Back",this.textClose="Close",this.textOpen="Open",this.toggleMenuOpen=()=>{this.menuOpen=!this.menuOpen},this.backButtonClick=()=>{this.calciteFlowItemBackClick.emit()},this.menuButtonKeyDown=t=>{const{key:e}=t,{menuOpen:s}=this;if(!this.isValidKey(e,f))return;const n=this.queryActions(),{length:i}=n;i&&(t.preventDefault(),s||(this.menuOpen=!0),"ArrowUp"===e&&a(n[i-1]),"ArrowDown"===e&&a(n[0]))},this.menuActionsKeydown=t=>{const{key:e,target:s}=t;if(!this.isValidKey(e,f))return;const n=this.queryActions(),{length:i}=n,r=n.indexOf(s);if(i&&-1!==r){if(t.preventDefault(),"ArrowUp"===e){const t=m(r-1,i);a(n[t])}if("ArrowDown"===e){const t=m(r+1,i);a(n[t])}}},this.menuActionsContainerKeyDown=t=>{const{key:e}=t;"Escape"===e&&(this.menuOpen=!1)},this.calciteFlowItemBackClick=i(this,"calciteFlowItemBackClick",7),this.calciteFlowItemScroll=i(this,"calciteFlowItemScroll",7)}handleCalcitePanelScroll(t){t.stopPropagation(),this.calciteFlowItemScroll.emit()}queryActions(){return Array.from(this.el.querySelectorAll("[slot=menu-actions] calcite-action"))}isValidKey(t,e){return!!e.find(e=>e===t)}renderBackButton(t){const{showBackButton:s,textBack:n,backButtonClick:i}=this;return s?e("calcite-action",{slot:"header-leading-content",key:"back-button","aria-label":n,text:n,class:"back-button",onClick:i},e("calcite-icon",{scale:"s",filled:!0,icon:t?"chevron-right":"chevron-left"})):null}renderMenuButton(){const{menuOpen:t,textOpen:s,textClose:n}=this,i=t?n:s;return e("calcite-action",{class:"menu-button","aria-label":i,text:i,onClick:this.toggleMenuOpen,onKeyDown:this.menuButtonKeyDown},e("calcite-icon",{scale:"s",icon:"ellipsis"}))}renderMenuActions(){const{menuOpen:t}=this;return e("div",{class:c("menu",{"menu--open":t}),onKeyDown:this.menuActionsKeydown},e("slot",{name:"menu-actions"}))}renderFooterActions(){return this.el.querySelector("[slot=footer-actions]")?e("div",{slot:"footer",class:"footer-actions"},e("slot",{name:"footer-actions"})):null}renderSingleActionContainer(){return e("div",{class:"single-action-container"},e("slot",{name:"menu-actions"}))}renderMenuActionsContainer(){return e("div",{class:"menu-container",onKeyDown:this.menuActionsContainerKeyDown},this.renderMenuButton(),this.renderMenuActions())}renderHeaderActions(){var t;const s=this.el.querySelector("[slot=menu-actions]"),n=null===(t=s)||void 0===t?void 0:t.closest(u.join(",")),i=!!s&&!n,r=1===(i?s.childElementCount:0)?this.renderSingleActionContainer():i?this.renderMenuActionsContainer():null;return r?e("div",{slot:"header-trailing-content",class:"header-actions"},r):null}renderHeading(){const{heading:t}=this;return t?e("h2",{class:"heading",slot:"header-content"},t):null}renderSummary(){const{summary:t}=this;return t?e("span",{class:"summary"},t):null}renderHeader(){const t=this.renderHeading(),s=this.renderSummary();return t||s?e("div",{class:"header-content",slot:"header-content"},t,s):null}renderFab(){return this.el.querySelector("[slot=fab]")?e("div",{class:"fab-container",slot:"fab"},e("slot",{name:"fab"})):null}render(){const{el:t}=this,n=l(t);return e(s,null,e("calcite-panel",{loading:this.loading,disabled:this.disabled,"height-scale":this.heightScale,dir:n},this.renderBackButton("rtl"===n),this.renderHeader(),this.renderHeaderActions(),e("slot",null),this.renderFooterActions(),this.renderFab()))}get el(){return n(this)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{background-color:var(--calcite-app-background-content);display:-ms-flexbox;display:flex;height:100%;width:100%}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}calcite-panel{width:100%;height:100%}.header-content{display:block}.header-content .heading{font-size:var(--calcite-app-font-size-1);margin:0 0 var(--calcite-app-cap-spacing-quarter)}.header-content .heading:only-child{margin-bottom:0}.header-content .summary{color:var(--calcite-app-foreground-subtle)}.header-content .heading,.header-content .summary{padding:0;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.header-actions,.menu-container,.single-action-container{display:-ms-flexbox;display:flex}.menu{position:absolute;top:100%;z-index:1;background-color:var(--calcite-app-background);-webkit-box-shadow:var(--calcite-app-shadow-0);box-shadow:var(--calcite-app-shadow-0);padding:0;left:auto;min-width:var(--calcite-app-menu-min-width);right:var(--calcite-app-menu-offset);visibility:visible;-ms-flex-flow:column nowrap;flex-flow:column nowrap;border:1px solid var(--calcite-app-border);-webkit-animation:calcite-app-fade-in-down var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);animation:calcite-app-fade-in-down var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);display:none}.calcite--rtl .menu{left:var(--calcite-app-menu-offset);right:auto}.menu--open{display:block}.footer-actions{display:-ms-flexbox;display:flex;width:100%}.fab-container{display:inline-block}"}},p=class{constructor(e){t(this,e),this.dismissed=!1,this.disabled=!1,this.dismissible=!1,this.loading=!1,this.textClose="Close",this.panelKeyUpHandler=t=>{"Escape"===t.key&&this.dismiss()},this.dismiss=()=>{this.dismissed=!0},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.calcitePanelDismissedChange=i(this,"calcitePanelDismissedChange",7),this.calcitePanelScroll=i(this,"calcitePanelScroll",7)}dismissedHandler(){this.calcitePanelDismissedChange.emit()}async setFocus(t){var e,s;"dismiss-button"!==t?null===(s=this.containerEl)||void 0===s||s.focus():null===(e=this.dismissButtonEl)||void 0===e||e.setFocus()}renderHeaderLeadingContent(){return o(this.el,"header-leading-content").length?e("div",{key:"header-leading-content",class:"header-leading-content"},e("slot",{name:"header-leading-content"})):null}renderHeaderContent(){return e("div",{key:"header-content",class:"header-content"},e("slot",{name:"header-content"}))}renderHeaderTrailingContent(){const{dismiss:t,dismissible:s,textClose:n}=this,i=s?e("calcite-action",{ref:t=>this.dismissButtonEl=t,"aria-label":n,text:n,onClick:t},e("calcite-icon",{scale:"s",icon:"x"})):null,r=e("slot",{name:"header-trailing-content"});return e("div",{key:"header-trailing-content",class:"header-trailing-content"},r,i)}renderHeader(){const t=this.renderHeaderLeadingContent(),s=this.renderHeaderContent(),n=this.renderHeaderTrailingContent();return s||t||n?e("header",{class:"header"},t,s,n):null}renderFooter(){const{el:t}=this;return t.querySelector("[slot=footer]")?e("footer",{class:"footer"},e("slot",{name:"footer"})):null}renderContent(){return e("section",{class:"content-container",onScroll:this.panelScrollHandler},e("slot",null),this.renderFab())}renderFab(){return this.el.querySelector("[slot=fab]")?e("div",{class:"fab-container"},e("slot",{name:"fab"})):null}render(){const{dismissed:t,disabled:n,dismissible:i,el:a,loading:o,panelKeyUpHandler:d}=this,u="rtl"===l(a);return e(s,null,e("article",{"aria-busy":o.toString(),onKeyUp:d,tabIndex:i?0:-1,hidden:i&&t,ref:t=>this.containerEl=t,class:c("container",{[h.rtl]:u})},this.renderHeader(),this.renderContent(),this.renderFooter()),e(r,{loading:o,disabled:n}))}get el(){return n(this)}static get watchers(){return{dismissed:["dismissedHandler"]}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;position:relative;--calcite-app-panel-max-height-small:40vh;--calcite-app-panel-max-height-medium:60vh;--calcite-app-panel-max-height-large:80vh;--calcite-app-panel-min-header-height:calc(var(--calcite-app-icon-size) * 3)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight-demi)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}.container{-ms-flex-align:stretch;align-items:stretch;-webkit-transition:max-height var(--calcite-app-animation-time) var(--calcite-app-easing-function);transition:max-height var(--calcite-app-animation-time) var(--calcite-app-easing-function);width:100%;height:100%;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}:host([height-scale=s]) .container{max-height:var(--calcite-app-panel-max-height-small)}:host([height-scale=m]) .container{max-height:var(--calcite-app-panel-max-height-medium)}:host([height-scale=l]) .container{max-height:var(--calcite-app-panel-max-height-large)}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative;z-index:1}.header{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:start;justify-content:flex-start;min-height:var(--calcite-app-header-min-height);position:relative;z-index:2;border-bottom:1px solid var(--calcite-app-border);width:100%}.header-content{overflow:hidden;padding:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing)}.header-leading-content,.header-trailing-content{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.header-trailing-content{margin-left:auto}.header-leading-content+.header-content{padding-left:var(--calcite-app-side-spacing-half)}.content-container{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex:1 1 auto;flex:1 1 auto;background-color:var(--calcite-app-background-content);overflow:auto}.footer{border-top:1px solid var(--calcite-app-border);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:space-evenly;justify-content:space-evenly;min-height:var(--calcite-app-footer-min-height);padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}.calcite--rtl .header-leading-content+.header-content{padding-right:var(--calcite-app-side-spacing-half)}.calcite--rtl .header-trailing-content{margin-left:0;margin-right:auto}.fab-container{position:-webkit-sticky;position:sticky;bottom:0;display:inline-block;margin:0 auto;padding:var(--calcite-app-cap-spacing) 0}"}};export{d as calcite_flow,g as calcite_flow_item,p as calcite_panel};