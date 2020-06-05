import{r as a,h as t,H as e,g as i}from"./p-9d0aa6e4.js";import{a as c}from"./p-2a6389bf.js";import{I as o}from"./p-c55f1634.js";import{C as r}from"./p-78a4c1a4.js";const n=class{constructor(t){a(this,t),this.disabled=!1,this.disableDeselect=!1,this.handleActivated=!1,this.icon=null,this.removable=!1,this.selected=!1,this.pickListItem=null,this.guid="calcite-value-list-item-"+c(),this.getPickListRef=a=>this.pickListItem=a,this.handleKeyDown=a=>{" "===a.key&&(this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1},this.handleSelectChange=a=>{this.selected=a.detail.selected}}async toggleSelected(a){this.pickListItem.toggleSelected(a)}async setFocus(){var a;null===(a=this.pickListItem)||void 0===a||a.setFocus()}calciteListItemChangeHandler(a){a.detail.item=this.el}renderHandle(){const{icon:a}=this;if(a===o.grip)return t("span",{role:"button",class:{[r.handle]:!0,[r.handleActivated]:this.handleActivated},tabindex:"0","data-js-handle":"true","aria-pressed":this.handleActivated.toString(),onKeyDown:this.handleKeyDown,onBlur:this.handleBlur},t("calcite-icon",{scale:"s",icon:"drag"}))}render(){return t(e,{"data-id":this.guid},this.renderHandle(),t("calcite-pick-list-item",{ref:this.getPickListRef,disabled:this.disabled,disableDeselect:this.disableDeselect,selected:this.selected,metadata:this.metadata,removable:this.removable,textLabel:this.textLabel,textDescription:this.textDescription,onCalciteListItemChange:this.handleSelectChange,value:this.value},t("slot",{name:"secondary-action",slot:"secondary-action"})))}get el(){return i(this)}};n.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-webkit-box-shadow:0 -1px 0 var(--calcite-app-border) inset;box-shadow:0 -1px 0 var(--calcite-app-border) inset;display:-ms-flexbox;display:flex;-webkit-transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#00619b;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host(:hover){background-color:var(--calcite-app-background-hover)}calcite-pick-list-item{-webkit-box-shadow:none;box-shadow:none;-ms-flex-positive:1;flex-grow:1;position:relative;margin:0}:host([selected]){-webkit-box-shadow:0 0 0 1px var(--calcite-app-border-active) inset;box-shadow:0 0 0 1px var(--calcite-app-border-active) inset}:host([selected]) calcite-pick-list-item:hover{background-color:var(--calcite-app-background-clear)}.handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--calcite-app-cap-spacing-minimum);padding:var(--calcite-app-cap-spacing-three-quarters) var(--calcite-app-side-spacing-quarter);background-color:var(--calcite-app-background-clear);border:none;color:var(--calcite-app-border);line-height:0;cursor:move;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out;transition:outline-offset var(--calcite-app-animation-time-fast) ease-in-out, outline-color var(--calcite-app-animation-time-fast) ease-in-out}.handle:hover,.handle:focus{background-color:var(--calcite-app-background-hover);outline-offset:var(--calcite-app-outline-inset);color:var(--calcite-app-foreground)}.handle:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.handle--activated{background-color:var(--calcite-app-background-active);color:var(--calcite-app-foreground-active)}:host(:last-child) .handle{margin-bottom:0}";export{n as calcite_value_list_item}