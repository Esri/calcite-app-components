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
import { r as registerInstance, h, H as Host, g as getElement } from './core-1a69f6a3.js';
import { g as getElementDir } from './dom-21bacc0d.js';
var CalciteTabs = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Select theme (light or dark)
         */
        this.theme = "light";
        /**
         * Align tab titles to the edge or fully justify them across the tab nav ("center")
         */
        this.layout = "inline";
        //--------------------------------------------------------------------------
        //
        //  Events
        //
        //--------------------------------------------------------------------------
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab-titles>`s to match up ARIA
         * attributes.
         */
        this.titles = [];
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab>`s to match up ARIA attributes.
         */
        this.tabs = [];
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.render = function () {
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", null, h("slot", { name: "tab-nav" }), h("section", { class: "tab-contents" }, h("slot", null)))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    class_1.prototype.calciteTabTitleRegister = function (e) {
        this.titles = this.titles.concat([e.target]);
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_1.prototype.calciteTabTitleUnregister = function (e) {
        this.titles = this.titles.filter(function (el) { return el !== e.target; });
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_1.prototype.calciteTabRegister = function (e) {
        this.tabs = this.tabs.concat([e.target]);
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_1.prototype.calciteTabUnregister = function (e) {
        this.tabs = this.tabs.filter(function (el) { return el !== e.target; });
        this.registryHandler();
        e.stopPropagation();
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     *
     * Matches up elements from the internal `tabs` and `titles` to automatically
     * update the ARIA attributes and link `<calcite-tab>` and
     * `<calcite-tab-title>` components.
     */
    class_1.prototype.registryHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabIds, titleIds, tabDomIndexes, titleDomIndexes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.tabs.some(function (e) { return e.tab; }) || this.titles.some(function (e) { return e.tab; }))) return [3 /*break*/, 1];
                        // if we are using `tab` based identifiers sort by `tab` to account for
                        // possible out of order tabs and get the id of each tab
                        tabIds = this.tabs
                            .sort(function (a, b) { return a.tab.localeCompare(b.tab); })
                            .map(function (e) { return e.id; });
                        titleIds = this.titles
                            .sort(function (a, b) { return a.tab.localeCompare(b.tab); })
                            .map(function (e) { return e.id; });
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, Promise.all(this.tabs.map(function (el) { return el.getTabIndex(); }))];
                    case 2:
                        tabDomIndexes = _a.sent();
                        return [4 /*yield*/, Promise.all(this.titles.map(function (el) { return el.getTabIndex(); }))];
                    case 3:
                        titleDomIndexes = _a.sent();
                        // once we have the DOM order as a source of truth we can build the
                        // matching tabIds and titleIds arrays
                        tabIds = tabDomIndexes.reduce(function (ids, indexInDOM, registryIndex) {
                            ids[indexInDOM] = _this.tabs[registryIndex].id;
                            return ids;
                        }, []);
                        titleIds = titleDomIndexes.reduce(function (ids, indexInDOM, registryIndex) {
                            ids[indexInDOM] = _this.titles[registryIndex].id;
                            return ids;
                        }, []);
                        _a.label = 4;
                    case 4:
                        // pass all our new aria information to each `<calcite-tab>` and
                        // `<calcite-tab-title>` which will check if they can update their internal
                        // `controlled` or `labeledBy` states and re-render if necessary
                        this.tabs.forEach(function (el) { return el.updateAriaInfo(tabIds, titleIds); });
                        this.titles.forEach(function (el) { return el.updateAriaInfo(tabIds, titleIds); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}:host,calcite-tabs{display:block}:host{--calcite-tabs-color:#2b2b2b;--calcite-tabs-border:#eaeaea;--calcite-tabs-border-hover:#dfdfdf;--calcite-tabs-color-active:#151515;--calcite-tabs-border-active:#007ac2;--calcite-tabs-layout:flex-start;--calcite-tabs-tab-basis:auto;--calcite-tabs-tab-text-align:start;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:0}:host([theme=dark]){--calcite-tabs-color:#f3f3f3;--calcite-tabs-border:#404040;--calcite-tabs-border-hover:#757575;--calcite-tabs-color-active:#f8f8f8;--calcite-tabs-border-active:#fff}:host([dir=rtl]){--calcite-tabs-tab-margin-start:0;--calcite-tabs-tab-margin-end:1.25rem}:host([layout=center]){--calcite-tabs-layout:center;--calcite-tabs-tab-basis:200px;--calcite-tabs-tab-text-align:center;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:1.25rem}.tab-contents{border-top:1px solid var(--calcite-tabs-border)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { CalciteTabs as calcite_tabs };
