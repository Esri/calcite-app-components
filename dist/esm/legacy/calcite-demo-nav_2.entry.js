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
import { h, r as registerInstance, H as Host, c as createEvent, g as getElement } from './chunk-f176fce8.js';
import { h as home16 } from './chunk-e4f34f18.js';
import { C as CalciteIcon } from './chunk-5ccd9a6f.js';
var CSS = {
    isActive: "is-active"
};
var NAV_ITEMS = [
    {
        id: "home",
        path: "",
        content: h(CalciteIcon, { size: "16", path: home16, title: "Home" })
    },
    {
        id: "calcite-action",
        path: "demos/calcite-action.html",
        content: "Action"
    },
    {
        id: "calcite-action-bar",
        path: "demos/calcite-action-bar.html",
        content: "Action Bar"
    },
    {
        id: "calcite-action-pad",
        path: "demos/calcite-action-pad.html",
        content: "Action Pad"
    },
    {
        id: "calcite-block",
        path: "demos/calcite-block.html",
        content: "Block"
    },
    {
        id: "calcite-flow",
        path: "demos/calcite-flow.html",
        content: "Flow"
    },
    {
        id: "calcite-flow-item",
        path: "demos/calcite-flow-item.html",
        content: "Flow Item"
    },
    {
        id: "calcite-shell",
        path: "demos/calcite-shell.html",
        content: "Shell"
    },
    {
        id: "calcite-shell-panel",
        path: "demos/calcite-shell-panel.html",
        content: "Shell Panel"
    },
    {
        id: "calcite-tip",
        path: "demos/calcite-tip.html",
        content: "Tip"
    },
    {
        id: "calcite-tip-manager",
        path: "demos/calcite-tip-manager.html",
        content: "Tip Manager"
    },
    {
        id: "calcite-typography",
        path: "demos/calcite-typography.html",
        content: "Typography"
    }
];
var CalciteDemoNav = /** @class */ (function () {
    function CalciteDemoNav(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Private Properties
        //
        // --------------------------------------------------------------------------
        this.root = window.location.origin + window.location.pathname.split("demos").shift();
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    CalciteDemoNav.prototype.renderNavItem = function (item) {
        var _a = this, pageId = _a.pageId, root = _a.root;
        var content = item.content, id = item.id, path = item.path;
        return (h("li", null, h("a", { class: id === pageId ? CSS.isActive : null, href: "" + root + path }, content)));
    };
    CalciteDemoNav.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("ul", null, NAV_ITEMS.map(function (item) { return _this.renderNavItem(item); }))));
    };
    Object.defineProperty(CalciteDemoNav, "style", {
        get: function () { return ":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3)}:host([theme=light]),:root{--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{width:100vw;background-color:#333;color:#fff;fill:#fff}:host,ul{display:-ms-flexbox;display:flex}ul{list-style:none;margin:0;padding:0}li{display:-ms-flexbox;display:flex;border-left:1px solid #fff}li:first-child{border-left:none}li:last-child{border-right:1px solid #fff}a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:12px 24px;color:inherit;text-decoration:none}a:hover{background-color:#000}a.is-active{background-color:#008de4}svg{fill:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteDemoNav;
}());
var CalciteExample = /** @class */ (function () {
    function CalciteExample(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Be sure to add a jsdoc comment describing your propery for the generated readme file.
         * If your property should be hidden from documentation, you can use the `@internal` tag
         */
        this.property = "default";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.state = "default";
        this.open = createEvent(this, "open", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteExample.prototype.componentWillUpdate = function () { };
    CalciteExample.prototype.render = function () {
        console.log(this.state);
        return h(Host, null);
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteExample.prototype.onClick = function (e) {
        console.log(e);
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Add a jsdoc comment describing your method and it's parameters (use `@param`).
     */
    CalciteExample.prototype.doThing = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(this.privateMethod())];
            });
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteExample.prototype.privateMethod = function () { };
    Object.defineProperty(CalciteExample.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteExample, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteExample;
}());
export { CalciteDemoNav as calcite_demo_nav, CalciteExample as calcite_example };
