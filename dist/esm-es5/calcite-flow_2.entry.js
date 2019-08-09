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
import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './core-b03bc579.js';
import { f as chevronLeft16, g as ellipsis16 } from './index-e4f34f18.js';
import { C as CalciteIcon } from './CalciteIcon-c63077af.js';
import { c as classnames } from './index-6d4b8b48.js';
var CSS = {
    frame: "frame",
    frameAdvancing: "frame--advancing",
    frameRetreating: "frame--retreating"
};
var CalciteFlow = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.flowCount = 0;
        this.flowDirection = null;
        this.flows = [];
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.updateFlowProps = function () {
            var flows = _this.flows;
            var newFlows = Array.from(_this.el.querySelectorAll("calcite-flow-item"));
            var oldFlowCount = flows.length;
            var newFlowCount = newFlows.length;
            var prevHasMulti = oldFlowCount > 1;
            var currHasMulti = newFlowCount > 1;
            var flowDirection = (currHasMulti && oldFlowCount) || prevHasMulti
                ? newFlowCount < oldFlowCount
                    ? "retreating"
                    : "advancing"
                : null;
            var activeFlow = newFlows[newFlowCount - 1];
            var previousFlow = newFlows[newFlowCount - 2];
            if (newFlowCount && activeFlow) {
                newFlows.forEach(function (flowNode) {
                    flowNode.showBackButton = currHasMulti;
                    flowNode.hidden = flowNode !== activeFlow;
                });
            }
            if (previousFlow) {
                previousFlow.menuOpen = false;
            }
            _this.flows = newFlows;
            _this.flowCount = newFlowCount;
            _this.flowDirection = flowDirection;
        };
        this.flowItemObserver = new MutationObserver(this.updateFlowProps);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    class_1.prototype.componentWillLoad = function () {
        this.updateFlowProps();
    };
    class_1.prototype.componentDidLoad = function () {
        this.flowItemObserver.observe(this.el, { childList: true, subtree: true });
    };
    class_1.prototype.componentDidUnload = function () {
        this.flowItemObserver.disconnect();
    };
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastItem;
            return __generator(this, function (_a) {
                lastItem = this.el.querySelector("calcite-flow-item:last-child");
                lastItem && lastItem.remove();
                return [2 /*return*/];
            });
        });
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.render = function () {
        var _a = this, flowDirection = _a.flowDirection, flowCount = _a.flowCount;
        var flowDirectionClass = flowDirection === "advancing"
            ? CSS.frameAdvancing
            : flowDirection === "retreating"
                ? CSS.frameRetreating
                : "";
        return (h(Host, null, h("div", { key: flowCount, class: CSS.frame + " " + flowDirectionClass }, h("slot", null))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{overflow:hidden}:host,:host .frame{display:-ms-flexbox;display:flex;height:100%}:host .frame{width:100%;padding:0;margin:0;-ms-flex-flow:column;flex-flow:column;position:relative}:host .frame--advancing{-webkit-animation:calcite-flow-item-advance var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-flow-item-advance var(--calcite-app-animation-time) var(--calcite-app-easing-function)}:host .frame--retreating{-webkit-animation:calcite-flow-item-retreat var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-flow-item-retreat var(--calcite-app-animation-time) var(--calcite-app-easing-function)}\@-webkit-keyframes calcite-flow-item-advance{0%{opacity:.5;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes calcite-flow-item-advance{0%{opacity:.5;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@-webkit-keyframes calcite-flow-item-retreat{0%{opacity:.5;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes calcite-flow-item-retreat{0%{opacity:.5;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var CSS$1 = {
    container: "container",
    header: "header",
    heading: "heading",
    headingFirst: "heading--first",
    backButton: "back-button",
    singleActionContainer: "single-action-container",
    menuContainer: "menu-container",
    menuButton: "menu-button",
    menu: "menu",
    menuOpen: "menu--open",
    contentContainer: "content-container",
    footer: "footer"
};
var TEXT = {
    back: "Back",
    open: "Open",
    close: "Close"
};
var CalciteFlowItem = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * Opens the action menu.
         */
        this.menuOpen = false;
        /**
         * Shows a back button in the header.
         */
        this.showBackButton = false;
        /**
         * 'Back' text string.
         */
        this.textBack = TEXT.back;
        /**
         * 'Close' text string.
         */
        this.textClose = TEXT.close;
        /**
         * 'Open' text string.
         */
        this.textOpen = TEXT.open;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggleMenuOpen = function () {
            _this.menuOpen = !_this.menuOpen;
        };
        this.backButtonClick = function () {
            _this.calciteFlowItemBackClick.emit();
        };
        this.calciteFlowItemBackClick = createEvent(this, "calciteFlowItemBackClick", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    class_2.prototype.renderBackButton = function () {
        var _a = this, showBackButton = _a.showBackButton, textBack = _a.textBack;
        return showBackButton ? (h("calcite-action", { key: "back-button", "aria-label": textBack, text: textBack, class: CSS$1.backButton, onClick: this.backButtonClick }, h(CalciteIcon, { size: "16", path: chevronLeft16 }))) : null;
    };
    class_2.prototype.renderMenuButton = function () {
        var _a = this, menuOpen = _a.menuOpen, textOpen = _a.textOpen, textClose = _a.textClose;
        var menuLabel = menuOpen ? textClose : textOpen;
        return (h("calcite-action", { class: CSS$1.menuButton, "aria-label": menuLabel, text: menuLabel, onClick: this.toggleMenuOpen }, h(CalciteIcon, { size: "16", path: ellipsis16 })));
    };
    class_2.prototype.renderMenuActions = function () {
        var _a;
        var menuOpen = this.menuOpen;
        return (h("div", { class: classnames(CSS$1.menu, (_a = {}, _a[CSS$1.menuOpen] = menuOpen, _a)) }, h("slot", { name: "menu-actions" })));
    };
    class_2.prototype.renderFooterActions = function () {
        var hasFooterActions = !!this.el.querySelector("[slot=footer-actions]");
        return hasFooterActions ? (h("footer", { class: CSS$1.footer }, h("slot", { name: "footer-actions" }))) : null;
    };
    class_2.prototype.renderSingleActionContainer = function () {
        return (h("div", { class: CSS$1.singleActionContainer }, h("slot", { name: "menu-actions" })));
    };
    class_2.prototype.renderMenuActionsContainer = function () {
        return (h("div", { class: CSS$1.menuContainer }, this.renderMenuButton(), this.renderMenuActions()));
    };
    class_2.prototype.renderHeaderActions = function () {
        var menuActionsNode = this.el.querySelector("[slot=menu-actions]");
        var hasMenuActions = !!menuActionsNode;
        var actionCount = hasMenuActions ? menuActionsNode.childElementCount : 0;
        return actionCount === 1
            ? this.renderSingleActionContainer()
            : hasMenuActions
                ? this.renderMenuActionsContainer()
                : null;
    };
    class_2.prototype.render = function () {
        var _a;
        var headingClasses = (_a = {},
            _a[CSS$1.heading] = true,
            _a[CSS$1.headingFirst] = !this.showBackButton,
            _a);
        var headerNode = (h("header", { class: CSS$1.header }, this.renderBackButton(), h("h2", { class: classnames(headingClasses) }, this.heading), this.renderHeaderActions()));
        var contentContainerNode = (h("section", { class: CSS$1.contentContainer }, h("slot", null)));
        return (h(Host, null, h("article", { class: CSS$1.container }, headerNode, contentContainerNode, this.renderFooterActions())));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return ":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);line-height:var(--calcite-app-line-height)}.header{margin:0;-ms-flex-pack:justify;justify-content:space-between}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{display:-ms-flexbox;display:flex;height:100%;font-size:var(--calcite-app-base-font-size)}:host([hidden]){display:none}.container{width:100%;height:100%;padding:0;margin:0;-ms-flex-flow:column;flex-flow:column}.container,.header{display:-ms-flexbox;display:flex;position:relative}.header{-ms-flex-align:center;align-items:center;color:var(--calcite-app-foreground);padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half);-ms-flex-pack:start;z-index:2;background-color:var(--calcite-app-background);border-bottom:1px solid var(--calcite-app-border);justify-content:flex-start}.back-button{-ms-flex:0;flex:0}h2.heading{margin:0;overflow:hidden;padding:0 var(--calcite-app-side-spacing);text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-app-font-size-0);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}.heading--first{-ms-flex-pack:start;justify-content:flex-start}.menu-button{-ms-flex:0;flex:0;position:relative}.menu-container{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-flexbox;display:flex;position:relative}.menu{position:absolute;top:100%;z-index:1;background-color:var(--calcite-app-background);-webkit-box-shadow:var(--calcite-app-shadow-0);box-shadow:var(--calcite-app-shadow-0);padding:0;left:auto;min-width:var(--calcite-app-menu-min-width);right:var(--calcite-app-menu-offset);visibility:visible;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;border:1px solid var(--calcite-app-border);-webkit-animation:calcite-app-fade-in-down var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);animation:calcite-app-fade-in-down var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);display:none}.menu--open{display:block}.content-container{-ms-flex:1;flex:1;background-color:var(--calcite-app-background-content);padding:0;overflow:auto}.footer{-ms-flex-align:center;align-items:center;background-color:var(--calcite-app-background);border-top:1px solid var(--calcite-app-border);display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;padding:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing-half);-ms-flex-flow:row nowrap;flex-flow:row nowrap}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
export { CalciteFlow as calcite_flow, CalciteFlowItem as calcite_flow_item };
