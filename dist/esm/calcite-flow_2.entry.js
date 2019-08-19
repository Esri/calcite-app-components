import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './core-1a69f6a3.js';
import { f as chevronLeft16, g as ellipsis16 } from './index-e4f34f18.js';
import { C as CalciteIcon } from './CalciteIcon-d6a5245c.js';
import { c as classnames } from './index-6d4b8b48.js';

const CSS = {
    frame: "frame",
    frameAdvancing: "frame--advancing",
    frameRetreating: "frame--retreating"
};

const CalciteFlow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.flowCount = 0;
        this.flowDirection = null;
        this.flows = [];
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.updateFlowProps = () => {
            const { flows } = this;
            const newFlows = Array.from(this.el.querySelectorAll("calcite-flow-item"));
            const oldFlowCount = flows.length;
            const newFlowCount = newFlows.length;
            const prevHasMulti = oldFlowCount > 1;
            const currHasMulti = newFlowCount > 1;
            const flowDirection = (currHasMulti && oldFlowCount) || prevHasMulti
                ? newFlowCount < oldFlowCount
                    ? "retreating"
                    : "advancing"
                : null;
            const activeFlow = newFlows[newFlowCount - 1];
            const previousFlow = newFlows[newFlowCount - 2];
            if (newFlowCount && activeFlow) {
                newFlows.forEach((flowNode) => {
                    flowNode.showBackButton = currHasMulti;
                    flowNode.hidden = flowNode !== activeFlow;
                });
            }
            if (previousFlow) {
                previousFlow.menuOpen = false;
            }
            this.flows = newFlows;
            this.flowCount = newFlowCount;
            this.flowDirection = flowDirection;
        };
        this.flowItemObserver = new MutationObserver(this.updateFlowProps);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentWillLoad() {
        this.updateFlowProps();
    }
    componentDidLoad() {
        this.flowItemObserver.observe(this.el, { childList: true, subtree: true });
    }
    componentDidUnload() {
        this.flowItemObserver.disconnect();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async back() {
        const lastItem = this.el.querySelector("calcite-flow-item:last-child");
        lastItem && lastItem.remove();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { flowDirection, flowCount } = this;
        const flowDirectionClass = flowDirection === "advancing"
            ? CSS.frameAdvancing
            : flowDirection === "retreating"
                ? CSS.frameRetreating
                : "";
        return (h(Host, null, h("div", { key: flowCount, class: `${CSS.frame} ${flowDirectionClass}` }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-app-background)}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{overflow:hidden}:host,:host .frame{display:-ms-flexbox;display:flex;height:100%}:host .frame{width:100%;padding:0;margin:0;-ms-flex-flow:column;flex-flow:column;position:relative}:host .frame--advancing{-webkit-animation:calcite-flow-item-advance var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-flow-item-advance var(--calcite-app-animation-time) var(--calcite-app-easing-function)}:host .frame--retreating{-webkit-animation:calcite-flow-item-retreat var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-flow-item-retreat var(--calcite-app-animation-time) var(--calcite-app-easing-function)}\@-webkit-keyframes calcite-flow-item-advance{0%{opacity:.5;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes calcite-flow-item-advance{0%{opacity:.5;-webkit-transform:translate3d(50px,0,0) scale(.99);transform:translate3d(50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@-webkit-keyframes calcite-flow-item-retreat{0%{opacity:.5;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}\@keyframes calcite-flow-item-retreat{0%{opacity:.5;-webkit-transform:translate3d(-50px,0,0) scale(.99);transform:translate3d(-50px,0,0) scale(.99)}to{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}"; }
};

const CSS$1 = {
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
const TEXT = {
    back: "Back",
    open: "Open",
    close: "Close"
};

const CalciteFlowItem = class {
    constructor(hostRef) {
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
        this.toggleMenuOpen = () => {
            this.menuOpen = !this.menuOpen;
        };
        this.backButtonClick = () => {
            this.calciteFlowItemBackClick.emit();
        };
        this.calciteFlowItemBackClick = createEvent(this, "calciteFlowItemBackClick", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderBackButton() {
        const { showBackButton, textBack } = this;
        return showBackButton ? (h("calcite-action", { key: "back-button", "aria-label": textBack, text: textBack, class: CSS$1.backButton, onClick: this.backButtonClick }, h(CalciteIcon, { size: "16", path: chevronLeft16 }))) : null;
    }
    renderMenuButton() {
        const { menuOpen, textOpen, textClose } = this;
        const menuLabel = menuOpen ? textClose : textOpen;
        return (h("calcite-action", { class: CSS$1.menuButton, "aria-label": menuLabel, text: menuLabel, onClick: this.toggleMenuOpen }, h(CalciteIcon, { size: "16", path: ellipsis16 })));
    }
    renderMenuActions() {
        const { menuOpen } = this;
        return (h("div", { class: classnames(CSS$1.menu, { [CSS$1.menuOpen]: menuOpen }) }, h("slot", { name: "menu-actions" })));
    }
    renderFooterActions() {
        const hasFooterActions = !!this.el.querySelector("[slot=footer-actions]");
        return hasFooterActions ? (h("footer", { class: CSS$1.footer }, h("slot", { name: "footer-actions" }))) : null;
    }
    renderSingleActionContainer() {
        return (h("div", { class: CSS$1.singleActionContainer }, h("slot", { name: "menu-actions" })));
    }
    renderMenuActionsContainer() {
        return (h("div", { class: CSS$1.menuContainer }, this.renderMenuButton(), this.renderMenuActions()));
    }
    renderHeaderActions() {
        const menuActionsNode = this.el.querySelector("[slot=menu-actions]");
        const hasMenuActions = !!menuActionsNode;
        const actionCount = hasMenuActions ? menuActionsNode.childElementCount : 0;
        return actionCount === 1
            ? this.renderSingleActionContainer()
            : hasMenuActions
                ? this.renderMenuActionsContainer()
                : null;
    }
    render() {
        const headingClasses = {
            [CSS$1.heading]: true,
            [CSS$1.headingFirst]: !this.showBackButton
        };
        const headerNode = (h("header", { class: CSS$1.header }, this.renderBackButton(), h("h2", { class: classnames(headingClasses) }, this.heading), this.renderHeaderActions()));
        const contentContainerNode = (h("section", { class: CSS$1.contentContainer }, h("slot", null)));
        return (h(Host, null, h("article", { class: CSS$1.container }, headerNode, contentContainerNode, this.renderFooterActions())));
    }
    get el() { return getElement(this); }
    static get style() { return ":root{--calcite-app-line-height:1.3rem;--calcite-app-base-font-size:14px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-size-2:1.429rem;--calcite-app-font-size-1:1.143rem;--calcite-app-font-size-0:1rem;--calcite-app-font-size--1:0.858rem;--calcite-app-font-weight:400;--calcite-app-font-weight-heading:600;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-subtle:#2b2b2b}:host([theme=light]){--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3;--calcite-app-disabled-opacity:0.25}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}:host{font-family:var(--calcite-app-font-family);line-height:var(--calcite-app-line-height)}.header{margin:0;-ms-flex-pack:justify;justify-content:space-between}.heading{padding:0;margin:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-2)}h1.heading,h2.heading{font-weight:var(--calcite-app-font-weight)}h2.heading{font-size:var(--calcite-app-font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);font-weight:var(--calcite-app-font-weight-demi)}:host{display:-ms-flexbox;display:flex;height:100%;font-size:var(--calcite-app-base-font-size)}:host([hidden]){display:none}.container{width:100%;height:100%;padding:0;margin:0;-ms-flex-flow:column;flex-flow:column}.container,.header{display:-ms-flexbox;display:flex;position:relative}.header{-ms-flex-align:center;align-items:center;color:var(--calcite-app-foreground);padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half);-ms-flex-pack:start;z-index:2;background-color:var(--calcite-app-background);border-bottom:1px solid var(--calcite-app-border);justify-content:flex-start}.back-button{-ms-flex:0;flex:0}h2.heading{margin:0;overflow:hidden;padding:0 var(--calcite-app-side-spacing);text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-app-font-size-0);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}.heading--first{-ms-flex-pack:start;justify-content:flex-start}.menu-button{-ms-flex:0;flex:0;position:relative}.menu-container{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-flexbox;display:flex;position:relative}.menu{position:absolute;top:100%;z-index:1;background-color:var(--calcite-app-background);-webkit-box-shadow:var(--calcite-app-shadow-0);box-shadow:var(--calcite-app-shadow-0);padding:0;left:auto;min-width:var(--calcite-app-menu-min-width);right:var(--calcite-app-menu-offset);visibility:visible;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;border:1px solid var(--calcite-app-border);-webkit-animation:calcite-app-fade-in-down var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);animation:calcite-app-fade-in-down var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);display:none}.menu--open{display:block}.content-container{-ms-flex:1;flex:1;background-color:var(--calcite-app-background-content);padding:0;overflow:auto}.footer{-ms-flex-align:center;align-items:center;background-color:var(--calcite-app-background);border-top:1px solid var(--calcite-app-border);display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;padding:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing-half);-ms-flex-flow:row nowrap;flex-flow:row nowrap}"; }
};

export { CalciteFlow as calcite_flow, CalciteFlowItem as calcite_flow_item };
