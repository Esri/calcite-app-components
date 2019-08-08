var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './chunk-f176fce8.js';
import { n as nodeListToArray } from './chunk-21bacc0d.js';
import { g as guid } from './chunk-32160e6a.js';
var CalciteTab = /** @class */ (function () {
    function CalciteTab(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Show this tab
         */
        this.isActive = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         */
        this.guid = "calcite-tab-title-" + guid();
        this.calciteTabRegister = createEvent(this, "calciteTabRegister", 7);
        this.calciteTabUnregister = createEvent(this, "calciteTabUnregister", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteTab.prototype.render = function () {
        var id = this.el.id || this.guid;
        return (h(Host, { id: id, "aria-labeledby": this.labeledBy, "aria-expanded": this.isActive ? "true" : "false", role: "tabpanel" }, h("section", null, h("slot", null))));
    };
    CalciteTab.prototype.componentDidLoad = function () {
        this.calciteTabRegister.emit();
    };
    CalciteTab.prototype.componentDidUnload = function () {
        this.calciteTabUnregister.emit();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteTab.prototype.tabChangeHandler = function (event) {
        var _this = this;
        // to allow `<calcite-tabs>` to be nested we need to make sure this
        // `calciteTabChange` event was actually fired from a title that is a
        // child of the `<calcite-tabs>` that is the a parent of this tab.
        if (event.target.closest("calcite-tabs") !==
            this.el.closest("calcite-tabs")) {
            return;
        }
        if (this.tab) {
            this.isActive = this.tab === event.detail.tab;
        }
        else {
            this.getTabIndex().then(function (index) {
                _this.isActive = index === event.detail.tab;
            });
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Return the index of this tab within the tab array
     */
    CalciteTab.prototype.getTabIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(Array.prototype.indexOf.call(nodeListToArray(this.el.parentElement.children).filter(function (e) { return e.matches("calcite-tab"); }), this.el))];
            });
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    CalciteTab.prototype.updateAriaInfo = function (tabIds, titleIds) {
        if (tabIds === void 0) { tabIds = []; }
        if (titleIds === void 0) { titleIds = []; }
        this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
    };
    Object.defineProperty(CalciteTab.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteTab, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}:host([is-active]) section,calcite-tabs{display:block}section{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteTab;
}());
export { CalciteTab as calcite_tab };
