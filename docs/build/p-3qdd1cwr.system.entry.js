System.register(["./p-c2917d38.system.js","./p-bb843522.system.js"],function(e){"use strict";var t,r,i,u,s,n;return{setters:[function(e){t=e.r;r=e.c;i=e.h;u=e.H;s=e.g},function(e){n=e.A}],execute:function(){var l=e("calcite_alerts",function(){function e(e){t(this,e);this.id="1";this.currentAlert="";this.active=false;this.alertQueue=[];this.calciteAlertsClose=r(this,"calciteAlertsClose",7);this.calciteAlertsOpen=r(this,"calciteAlertsOpen",7)}e.prototype.updateQueueOnOpen=function(e){var t=e.target.id;if(!this.alertQueue.includes(t)){this.active=true;this.currentAlert=t;this.alertQueue.push(t);this.calciteAlertsOpen.emit({id:this.id,currentAlert:this.currentAlert,alertQueue:this.alertQueue})}};e.prototype.updateQueueOnClose=function(e){var t=this;var r=e.target.id;if(this.alertQueue.includes(r))this.alertQueue=this.alertQueue.filter(function(e){return e!==r});if(this.alertQueue.length<1)setTimeout(function(){t.active=false},300);this.calciteAlertsClose.emit({id:this.id,currentAlert:this.currentAlert,alertQueue:this.alertQueue})};e.prototype.componentWillUpdate=function(){this.currentAlert=this.alertQueue.length>0?this.alertQueue[0]:""};e.prototype.render=function(){var e={currentAlert:this.currentAlert,queueLength:this.alertQueue.length>=2?this.alertQueue.length-1:0};return i(u,{active:!!this.active},i(n.Provider,{state:e},i("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host{display:none;position:fixed;left:0;right:0;bottom:0;pointer-events:none;z-index:101}:host:host([active]){display:block}"},enumerable:true,configurable:true});return e}())}}});