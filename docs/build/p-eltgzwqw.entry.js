import{r as t,c as s,h as e,H as l,g as i}from"./p-b2d52e2a.js";import{C as a}from"./p-f5779404.js";import{g as c}from"./p-88b03842.js";import{g as o}from"./p-cd1553e2.js";import{c as n}from"./p-840e89a3.js";const r=class{constructor(e){t(this,e),this.collapsible=!1,this.disabled=!1,this.open=!1,this.loading=!1,this.textExpand="Expand",this.textCollapse="Collapse",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.calciteBlockToggle=s(this,"calciteBlockToggle",7)}render(){const{collapsible:t,disabled:s,el:i,heading:c,loading:o,open:n,summary:r,textCollapse:h,textExpand:d}=this,g=n?h:d,p=i.querySelector("[slot=icon]"),b=e("header",{class:"header"},p?e("div",{class:"icon"},e("slot",{name:"icon"})):null,e("div",{class:"title"},e("h3",{class:"heading"},c),r?e("div",{class:"summary"},r):null)),u=i.querySelector("[slot=control]"),m=i.children.length>(u?1:0),x=e("div",{class:"header-container"},t?e("button",{"aria-label":g,class:"toggle",onClick:this.onHeaderClick,title:g},b,u?null:e("calcite-icon",{scale:"s",icon:n?"chevron-up":"chevron-down"})):b,o?e("calcite-loader",{inline:!0,"is-active":!0}):e("slot",{name:"control"}));return e(l,{tabIndex:s?-1:null},e("article",{"aria-expanded":t?n.toString():null,"aria-busy":o},x,e("div",{class:"content",hidden:!m||!n},e(a,{loading:o,disabled:s},e("slot",null)))))}get el(){return i(this)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-direction:column;flex-direction:column;border-radius:var(--calcite-app-border-radius);margin:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-quarter) 0;-webkit-box-shadow:0 1px 0 var(--calcite-app-border) inset;box-shadow:0 1px 0 var(--calcite-app-border) inset}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight-demi)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}.header{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:start;justify-content:flex-start}.header-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header-container>.header{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-three-quarters)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}:host([disabled]) .header-container{opacity:var(--calcite-app-disabled-opacity)}calcite-loader[inline]{color:var(--calcite-app-foreground-subtle)}.title{margin:0}.header .title .heading{padding:0 0 var(--calcite-app-cap-spacing-quarter)}.summary{font-size:var(--calcite-app-font-size--1);padding:0 0 var(--calcite-app-cap-spacing-quarter)}.toggle{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-three-quarters);background-color:transparent;border:none;cursor:pointer;display:-ms-flexbox;display:flex;font-family:var(--calcite-app-font-family);-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0;text-align:unset;width:100%;color:var(--calcite-app-foreground)}.toggle:focus{outline-offset:var(--calcite-app-outline-inset)}.icon{margin-right:var(--calcite-app-side-spacing-third)}.toggle-icon{fill:currentColor;-ms-flex:0 0 var(--calcite-app-icon-size);flex:0 0 var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half)}.content{padding:0 var(--calcite-app-side-spacing-three-quarters) var(--calcite-app-cap-spacing-half);position:relative}::slotted([slot=control]){position:absolute;margin:auto;right:var(--calcite-app-side-spacing-three-quarters)}.calcite--rtl ::slotted([slot=control]){left:var(--calcite-app-side-spacing-three-quarters);right:unset}"}},h=class{constructor(e){t(this,e),this.open=!1,this.textExpand="Expand",this.textCollapse="Collapse",this.toggleDisplay="button",this.guid=`calcite-block-section-${o()}`,this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.calciteBlockSectionToggle=s(this,"calciteBlockSectionToggle",7)}render(){const{el:t,guid:s,open:l,text:i,textCollapse:a,textExpand:o,toggleDisplay:r}=this,h=c(t),d=l?"caret-down":"rtl"===h?"caret-left":"caret-right",g=l?a:o,p=`${s}__label`,b="switch"===r?e("label",{"aria-label":g,class:n("toggle","toggle--switch"),id:p},i,e("calcite-switch",{"aria-labelledby":p,switched:l,onChange:this.toggleSection,scale:"s"})):e("calcite-action",{"aria-label":g,class:"toggle",onClick:this.toggleSection,text:i,textEnabled:!0,compact:!0},e("calcite-icon",{scale:"s",icon:d}));return e("section",{"aria-expanded":l.toString()},b,e("div",{class:"content",hidden:!l},e("slot",null)))}get el(){return i(this)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{border-bottom:1px solid var(--calcite-app-border);display:block}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host(:last-child){border-bottom:none}.toggle--switch{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:var(--calcite-app-cap-spacing-half) 0;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.toggle--switch calcite-switch{margin:var(--calcite-app-cap-spacing-third) 0 0 var(--calcite-app-side-spacing-half)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:var(--calcite-app-side-spacing-half)}"}};export{r as calcite_block,h as calcite_block_section};