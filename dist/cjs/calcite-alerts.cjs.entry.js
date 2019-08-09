'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0e8c1700.js');
const AlertInterface = require('./AlertInterface-bf904a13.js');

const CalciteAlerts = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Unique ID for this instance of calcite-alerts
         */
        this.id = "1";
        this.currentAlert = "";
        this.active = false;
        this.alertQueue = [];
        this.calciteAlertsClose = core.createEvent(this, "calciteAlertsClose", 7);
        this.calciteAlertsOpen = core.createEvent(this, "calciteAlertsOpen", 7);
    }
    /**
     * Adds the requested alert to the alert queue, if not present
     */
    updateQueueOnOpen(event) {
        let requestedAlert = event.target.id;
        if (!this.alertQueue.includes(requestedAlert)) {
            this.active = true;
            this.currentAlert = requestedAlert;
            this.alertQueue.push(requestedAlert);
            this.calciteAlertsOpen.emit({
                id: this.id,
                currentAlert: this.currentAlert,
                alertQueue: this.alertQueue
            });
        }
    }
    /**
     * Closes the requested alert and removes from the queue
     */
    updateQueueOnClose(event) {
        let requestedAlert = event.target.id;
        if (this.alertQueue.includes(requestedAlert))
            this.alertQueue = this.alertQueue.filter(e => e !== requestedAlert);
        if (this.alertQueue.length < 1)
            setTimeout(() => {
                this.active = false;
            }, 300);
        this.calciteAlertsClose.emit({
            id: this.id,
            currentAlert: this.currentAlert,
            alertQueue: this.alertQueue
        });
    }
    componentWillUpdate() {
        this.currentAlert = this.alertQueue.length > 0 ? this.alertQueue[0] : "";
    }
    render() {
        const alertState = {
            currentAlert: this.currentAlert,
            queueLength: this.alertQueue.length >= 2 ? this.alertQueue.length - 1 : 0
        };
        return (core.h(core.Host, { active: !!this.active }, core.h(AlertInterface.AlertInterface.Provider, { state: alertState }, core.h("slot", null))));
    }
    get el() { return core.getElement(this); }
    static get style() { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host{display:none;position:fixed;left:0;right:0;bottom:0;pointer-events:none;z-index:101}:host:host([active]){display:block}"; }
};

exports.calcite_alerts = CalciteAlerts;
