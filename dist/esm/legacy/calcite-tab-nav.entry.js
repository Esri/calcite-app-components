import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './chunk-f176fce8.js';
var CalciteTabNav = /** @class */ (function () {
    function CalciteTabNav(hostRef) {
        registerInstance(this, hostRef);
        this.calciteTabChange = createEvent(this, "calciteTabChange", 7);
    }
    CalciteTabNav.prototype.selectedTabChanged = function () {
        if (localStorage &&
            this.storageId &&
            this.selectedTab !== undefined &&
            this.selectedTab !== null) {
            localStorage.setItem("calcite-tab-nav-" + this.storageId, JSON.stringify(this.selectedTab));
        }
        this.calciteTabChange.emit({
            tab: this.selectedTab
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteTabNav.prototype.componentWillLoad = function () {
        var storageKey = "calcite-tab-nav-" + this.storageId;
        if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
            this.selectedTab = JSON.parse(localStorage.getItem(storageKey));
            this.calciteTabChange.emit({
                tab: this.selectedTab
            });
        }
    };
    CalciteTabNav.prototype.render = function () {
        return (h(Host, { role: "tablist" }, h("nav", { class: "tab-nav" }, h("slot", null))));
    };
    CalciteTabNav.prototype.componentDidRender = function () {
        var _this = this;
        // if every tab title is active select the first tab.
        if (this.tabTitles.every(function (title) { return !title.isActive; }) && !this.selectedTab) {
            this.tabTitles[0].getTabIdentifier().then(function (tab) {
                _this.calciteTabChange.emit({
                    tab: tab
                });
            });
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Events Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    CalciteTabNav.prototype.focusPreviousTabHandler = function (e) {
        var currentIndex = this.getIndexOfTabTitle(e.target);
        var previousTab = this.tabTitles[currentIndex - 1] ||
            this.tabTitles[this.tabTitles.length - 1];
        previousTab.focus();
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    CalciteTabNav.prototype.focusNextTabHandler = function (e) {
        var currentIndex = this.getIndexOfTabTitle(e.target);
        var nextTab = this.tabTitles[currentIndex + 1] || this.tabTitles[0];
        nextTab.focus();
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    CalciteTabNav.prototype.activateTabHandler = function (e) {
        if (e.detail.tab) {
            this.selectedTab = e.detail.tab;
        }
        else {
            this.selectedTab = this.getIndexOfTabTitle(e.target);
        }
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    CalciteTabNav.prototype.globalTabChangeHandler = function (e) {
        if (this.syncId &&
            e.target !== this.el &&
            e.target.syncId === this.syncId &&
            this.selectedTab !== e.detail.tab) {
            this.selectedTab = e.detail.tab;
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteTabNav.prototype.getIndexOfTabTitle = function (el) {
        return this.tabTitles.indexOf(el);
    };
    Object.defineProperty(CalciteTabNav.prototype, "tabTitles", {
        get: function () {
            return this.el.shadowRoot.querySelector("slot").assignedElements();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteTabNav.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteTabNav, "watchers", {
        get: function () {
            return {
                "selectedTab": ["selectedTabChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteTabNav, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}.tab-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--calcite-tabs-layout);justify-content:var(--calcite-tabs-layout);overflow:auto}::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-start);margin-left:var(--calcite-tabs-tab-margin-end)}:host([dir=rtl]) ::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-end);margin-left:var(--calcite-tabs-tab-margin-start)}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteTabNav;
}());
export { CalciteTabNav as calcite_tab_nav };
