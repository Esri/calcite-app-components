import{r as a,h as e,H as c,g as t}from"./p-3125ea46.js";import{f as r,a as o}from"./p-4230ce12.js";const i=class{constructor(e){a(this,e),this.appearance="outline",this.disabled=!1,this.icon="plus",this.loading=!1,this.scale="m",this.textEnabled=!1}async setFocus(){r(this.buttonEl)}render(){const{appearance:a,disabled:t,el:r,loading:i,scale:p,theme:l,textEnabled:b,icon:n,label:d,text:s}=this,f=d||!b&&s,u=o(r);return e(c,null,e("calcite-button",{class:"button",loading:i,disabled:t,title:f,"aria-label":d,theme:l,dir:u,scale:p,icon:n,round:!0,floating:!0,width:"auto",appearance:a,color:"blue",ref:a=>{this.buttonEl=a}},this.textEnabled?this.text:null))}get el(){return t(this)}};i.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{background-color:var(--calcite-app-background-transparent)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}";export{i as calcite_fab}