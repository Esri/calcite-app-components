import{r as t,c as e,h as s,H as i,g as a}from"./p-dde25702.js";import{g as l}from"./p-f4073644.js";import{b as r,S as c}from"./p-fba2df54.js";const o=class{constructor(s){t(this,s),this.loading=!1,this.selected=!1,this.selectable=!1,this.theme="light",this.calciteCardSelected=e(this,"calciteCardSelected",7)}connectedCallback(){["dark","light"].includes(this.theme)||(this.theme="light")}render(){const t=l(this.el);return s(i,{dir:t},s("div",{class:"calcite-card-container"},this.loading?s("div",{class:"calcite-card-loader-container"},s("calcite-loader",{class:"calcite-card-loader","is-active":!0})):null,s("section",{class:{container:!0},"aria-busy":this.loading},this.selectable?this.renderCheckbox():null,this.renderThumbnail(),this.renderHeader(),s("div",{class:"card-content"},s("slot",null)),this.renderFooter())))}cardSelectClick(){this.selectCard()}cardSelectKeyDown(t){switch(t.keyCode){case c:case r:this.selectCard(),t.preventDefault()}}selectCard(){this.selected=!this.selected,this.calciteCardSelected.emit({element:this.el,selected:this.selected})}renderThumbnail(){return this.el.querySelector("[slot=thumbnail]")?s("div",{class:"thumbnail-wrapper"},s("slot",{name:"thumbnail"})):null}renderCheckbox(){return s("div",{class:"card-checkbox-wrapper",onClick:()=>this.cardSelectClick(),onKeyDown:t=>this.cardSelectKeyDown(t)},s("calcite-checkbox",{checked:this.selected}))}renderHeader(){const t=this.el.querySelector("[slot=title]"),e=this.el.querySelector("[slot=subtitle]");return t||e?s("header",{class:"header"},s("slot",{name:"title"}),s("slot",{name:"subtitle"})):null}renderFooter(){const t=this.el.querySelector("[slot=footer-leading]"),e=this.el.querySelector("[slot=footer-trailing]");return t||e?s("footer",{class:"footer"},s("slot",{name:"footer-leading"}),s("slot",{name:"footer-trailing"})):null}get el(){return a(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host{max-width:100%}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:0 0 0 transparent;box-shadow:0 0 0 transparent}:host .calcite-card-container:hover{-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.08);box-shadow:0 0 16px 0 rgba(0,0,0,.08);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16);z-index:1}:host([loading]) .calcite-card-container :not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}:host([loading]) .calcite-card-loader{position:absolute;left:0;right:0;z-index:9}:host .footer,:host .header{padding:.75rem;display:-ms-flexbox;display:flex}:host .header{-ms-flex-direction:column;flex-direction:column}:host .footer{padding:.75rem;-ms-flex-direction:row;flex-direction:row}:host .card-content{padding:0 .75rem;color:var(--calcite-ui-text-3);font-size:.875rem;line-height:1.5}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-blue)}::slotted([slot=title]),slot[name=title]::slotted(*){font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:.9375rem;line-height:1.5}::slotted([slot=subtitle]),slot[name=subtitle]::slotted(*){font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:.375rem;font-size:.875rem;line-height:1.5}img::slotted([slot=thumbnail]),slot[name=thumbnail]::slotted(img){max-width:100%;min-width:100%}::slotted([slot=footer-leading]),slot[name=footer-leading]::slotted(*){-webkit-margin-end:auto;margin-inline-end:auto}::slotted([slot=footer-leading]),::slotted([slot=footer-trailing]),slot[name=footer-leading]::slotted(*),slot[name=footer-trailing]::slotted(*){-ms-flex-item-align:center;align-self:center;font-size:.875rem;line-height:1.5}:host .thumbnail-wrapper{font-size:0}:host .card-checkbox-wrapper{position:absolute;top:.375rem;right:.375rem;margin:0;padding:0}:host([dir=rtl]) .card-checkbox-wrapper{left:.375rem;right:auto}"}};export{o as calcite_card};