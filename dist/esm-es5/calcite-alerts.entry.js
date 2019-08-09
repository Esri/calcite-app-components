import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-b03bc579.js';
import { A as AlertInterface } from './AlertInterface-d3403aa9.js';
var CalciteAlerts = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Unique ID for this instance of calcite-alerts
         */
        this.id = "1";
        this.currentAlert = "";
        this.active = false;
        this.alertQueue = [];
        this.calciteAlertsClose = createEvent(this, "calciteAlertsClose", 7);
        this.calciteAlertsOpen = createEvent(this, "calciteAlertsOpen", 7);
    }
    /**
     * Adds the requested alert to the alert queue, if not present
     */
    class_1.prototype.updateQueueOnOpen = function (event) {
        var requestedAlert = event.target.id;
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
    };
    /**
     * Closes the requested alert and removes from the queue
     */
    class_1.prototype.updateQueueOnClose = function (event) {
        var _this = this;
        var requestedAlert = event.target.id;
        if (this.alertQueue.includes(requestedAlert))
            this.alertQueue = this.alertQueue.filter(function (e) { return e !== requestedAlert; });
        if (this.alertQueue.length < 1)
            setTimeout(function () {
                _this.active = false;
            }, 300);
        this.calciteAlertsClose.emit({
            id: this.id,
            currentAlert: this.currentAlert,
            alertQueue: this.alertQueue
        });
    };
    class_1.prototype.componentWillUpdate = function () {
        this.currentAlert = this.alertQueue.length > 0 ? this.alertQueue[0] : "";
    };
    class_1.prototype.render = function () {
        var alertState = {
            currentAlert: this.currentAlert,
            queueLength: this.alertQueue.length >= 2 ? this.alertQueue.length - 1 : 0
        };
        return (h(Host, { active: !!this.active }, h(AlertInterface.Provider, { state: alertState }, h("slot", null))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host{display:none;position:fixed;left:0;right:0;bottom:0;pointer-events:none;z-index:101}:host:host([active]){display:block}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { CalciteAlerts as calcite_alerts };
