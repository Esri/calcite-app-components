import{r as t,c as s,h as i,H as e,g as c}from"./p-f5c2cb95.js";import{g as n}from"./p-1093878d.js";import{c as a}from"./p-840e89a3.js";const h=class{constructor(i){t(this,i),this.dismissed=!1,this.nonDismissible=!1,this.textClose="Close",this.hideTip=()=>{this.dismissed=!0,this.calciteTipDismiss.emit()},this.calciteTipDismiss=s(this,"calciteTipDismiss",7)}renderHeader(){const{nonDismissible:t,hideTip:s,textClose:e,heading:c}=this,n=t?null:i("calcite-action",{text:e,onClick:s,class:"close"},i("calcite-icon",{scale:"s",icon:"x"})),a=c?i("h3",{class:"heading"},c):null;return n||a?i("header",{class:"header"},a,n):null}renderImageFrame(){const{el:t}=this;return t.querySelector("[slot=thumbnail]")?i("div",{class:"image-frame"},i("slot",{name:"thumbnail"})):null}renderInfoNode(){return i("div",{class:"info"},i("slot",null))}renderContent(){return i("div",{class:"content"},this.renderImageFrame(),this.renderInfoNode())}render(){return i(e,null,i("article",{class:"container",hidden:this.dismissed},this.renderHeader(),this.renderContent()))}get el(){return c(this)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background-color:var(--calcite-app-background-clear)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight-demi)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}.container{background-color:var(--calcite-app-background);padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing) var(--calcite-app-cap-spacing);margin:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing);-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);border-radius:var(--calcite-app-border-radius)}:host([selected]) .container{-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0}.header{-ms-flex-pack:end;justify-content:flex-end}.header .heading{padding-left:0;padding-right:0}.container[hidden]{display:none}.content{display:-ms-flexbox;display:flex;padding-top:var(--calcite-app-cap-spacing-half)}.info{padding:0 var(--calcite-app-side-spacing);width:70%}.info:only-child{width:100%;padding-left:0;padding-right:0}::slotted(p){margin-top:0}::slotted(a){color:var(--calcite-app-foreground-link)}.image-frame{width:25%}.image-frame img{max-width:100%}::slotted(img){max-width:100%}"}},l=class{constructor(s){t(this,s),this.textGroupTitle="Tips"}render(){return i("slot",null)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}::slotted(calcite-tip){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}"}},r=class{constructor(i){t(this,i),this.closed=!1,this.textClose="Close",this.textDefaultTitle="Tips",this.textNext="Next",this.textPaginationLabel="Tip",this.textPrevious="Previous",this.groupTitle=this.textDefaultTitle,this.observer=new MutationObserver(()=>this.setUpTips()),this.hideTipManager=()=>{this.closed=!0,this.calciteTipManagerToggle.emit()},this.previousClicked=()=>{this.previousTip()},this.nextClicked=()=>{this.nextTip()},this.tipManagerKeyUpHandler=t=>{if(t.target===this.container)switch(t.key){case"ArrowRight":t.preventDefault(),this.nextTip();break;case"ArrowLeft":t.preventDefault(),this.previousTip();break;case"Home":t.preventDefault(),this.selectedIndex=0;break;case"End":t.preventDefault(),this.selectedIndex=this.total-1}},this.storeContainerRef=t=>{this.container=t},this.calciteTipManagerToggle=s(this,"calciteTipManagerToggle",7)}closedChangeHandler(){this.direction=null,this.calciteTipManagerToggle.emit()}selectedChangeHandler(){this.showSelectedTip(),this.updateGroupTitle()}connectedCallback(){this.setUpTips()}componentDidLoad(){this.observer.observe(this.el,{childList:!0,subtree:!0})}componentDidUnload(){this.observer.disconnect()}async nextTip(){this.direction="advancing",this.selectedIndex=(this.selectedIndex+1+this.total)%this.total}async previousTip(){this.direction="retreating",this.selectedIndex=(this.selectedIndex-1+this.total)%this.total}setUpTips(){const t=Array.from(this.el.querySelectorAll("calcite-tip"));if(this.total=t.length,0===this.total)return;const s=this.el.querySelector("calcite-tip[selected]");this.tips=t,this.selectedIndex=s?t.indexOf(s):0,t.forEach(t=>{t.nonDismissible=!0}),this.showSelectedTip(),this.updateGroupTitle()}showSelectedTip(){this.tips.forEach((t,s)=>{const i=this.selectedIndex===s;t.selected=i,t.hidden=!i})}updateGroupTitle(){var t;const s=this.tips[this.selectedIndex].closest("calcite-tip-group");this.groupTitle=(null===(t=s)||void 0===t?void 0:t.textGroupTitle)||this.textDefaultTitle}renderPagination(){const t=n(this.el),{selectedIndex:s,tips:e,total:c}=this;return e.length>1?i("footer",{class:"pagination"},i("calcite-action",{text:this.textPrevious,onClick:this.previousClicked,class:"page-previous"},i("calcite-icon",{scale:"s",icon:"ltr"===t?"chevron-left":"chevron-right"})),i("span",{class:"page-position"},`${this.textPaginationLabel} ${s+1}/${c}`),i("calcite-action",{text:this.textNext,onClick:this.nextClicked,class:"page-next"},i("calcite-icon",{scale:"s",icon:"ltr"===t?"chevron-right":"chevron-left"}))):null}render(){const{closed:t,direction:s,groupTitle:c,selectedIndex:n,textClose:h,total:l}=this;return 0===l?i(e,null):i(e,null,i("div",{class:"container",hidden:t,"aria-hidden":t.toString(),tabIndex:0,onKeyUp:this.tipManagerKeyUpHandler,ref:this.storeContainerRef},i("header",{class:"header"},i("h2",{key:n,class:"heading"},c),i("calcite-action",{text:h,onClick:this.hideTipManager,class:"close"},i("calcite-icon",{scale:"s",icon:"x"}))),i("div",{tabIndex:0,class:a("tip-container",{"tip-container--advancing":!t&&"advancing"===s,"tip-container--retreating":!t&&"retreating"===s}),key:n},i("slot",null)),this.renderPagination()))}get el(){return c(this)}static get watchers(){return{closed:["closedChangeHandler"],selectedIndex:["selectedChangeHandler"]}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}\@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}\@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}\@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}\@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}:host{display:block}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight-demi)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}:host([closed]){display:none}.header .heading{padding-left:var(--calcite-app-side-spacing-half);padding-right:var(--calcite-app-side-spacing-half)}.container{overflow:hidden;position:relative;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half) 0;min-height:150px}.tip-container{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--calcite-app-animation-time);animation-duration:var(--calcite-app-animation-time);-webkit-animation-timing-function:var(--calcite-app-easing-function);animation-timing-function:var(--calcite-app-easing-function);height:18vh;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start}::slotted(calcite-tip-group){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}::slotted(calcite-tip){max-width:540px;padding:0 var(--calcite-app-side-spacing-half)}.tip-container--advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container--retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-app-cap-spacing-quarter) 0}.page-position{font-size:var(--calcite-app-font-size--1);margin:0 var(--calcite-app-side-spacing-half)}"}};export{h as calcite_tip,l as calcite_tip_group,r as calcite_tip_manager};