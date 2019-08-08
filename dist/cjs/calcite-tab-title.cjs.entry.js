'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4028ab75.js');
const __chunk_4 = require('./chunk-9e4cdbb9.js');
const __chunk_8 = require('./chunk-73e9ab2b.js');
const __chunk_9 = require('./chunk-dae73bdf.js');

class CalciteTabTitle {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Show this tab title as selected
         */
        this.isActive = false;
        /**
         * @internal
         */
        this.guid = `calcite-tab-title-${__chunk_9.guid()}`;
        this.calciteTabsActivate = __chunk_1.createEvent(this, "calciteTabsActivate", 7);
        this.calciteTabsFocusNext = __chunk_1.createEvent(this, "calciteTabsFocusNext", 7);
        this.calciteTabsFocusPrevious = __chunk_1.createEvent(this, "calciteTabsFocusPrevious", 7);
        this.calciteTabTitleRegister = __chunk_1.createEvent(this, "calciteTabTitleRegister", 7);
        this.calciteTabTitleUnregister = __chunk_1.createEvent(this, "calciteTabTitleUnregister", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        if (this.tab && this.isActive) {
            this.calciteTabsActivate.emit({
                tab: this.tab
            });
        }
    }
    render() {
        const id = this.el.id || this.guid;
        return (__chunk_1.h(__chunk_1.Host, { id: id, "aria-controls": this.controls, "aria-expanded": this.isActive ? "true" : "false", role: "tab", tabindex: "0" }, __chunk_1.h("a", null, __chunk_1.h("slot", null))));
    }
    componentDidLoad() {
        this.calciteTabTitleRegister.emit();
    }
    componentDidUnload() {
        this.calciteTabTitleUnregister.emit();
    }
    //--------------------------------------------------------------------------
    //
    //  Events Listeners
    //
    //--------------------------------------------------------------------------
    tabChangeHandler(event) {
        if (this.tab) {
            this.isActive = this.tab === event.detail.tab;
        }
        else {
            this.getTabIndex().then(index => {
                this.isActive = index === event.detail.tab;
            });
        }
    }
    onClick() {
        this.calciteTabsActivate.emit({
            tab: this.tab
        });
    }
    keyDownHandler(e) {
        switch (e.keyCode) {
            case __chunk_8.SPACE:
            case __chunk_8.ENTER:
                this.calciteTabsActivate.emit({
                    tab: this.tab
                });
                e.preventDefault();
                break;
            case __chunk_8.RIGHT:
                if (__chunk_4.getElementDir(this.el) === "ltr") {
                    this.calciteTabsFocusNext.emit();
                }
                else {
                    this.calciteTabsFocusPrevious.emit();
                }
                break;
            case __chunk_8.LEFT:
                if (__chunk_4.getElementDir(this.el) === "ltr") {
                    this.calciteTabsFocusPrevious.emit();
                }
                else {
                    this.calciteTabsFocusNext.emit();
                }
                break;
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Return the index of this title within the nav
     */
    async getTabIndex() {
        return Promise.resolve(Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"), this.el));
    }
    /**
     * @internal
     */
    async getTabIdentifier() {
        return this.tab ? Promise.resolve(this.tab) : this.getTabIndex();
    }
    /**
     * @internal
     */
    async updateAriaInfo(tabIds = [], titleIds = []) {
        this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
        return Promise.resolve();
    }
    get el() { return __chunk_1.getElement(this); }
    static get style() { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host{-ms-flex:0 1 var(--calcite-tabs-tab-basis);flex:0 1 var(--calcite-tabs-tab-basis);outline:none}:host(:active) a,:host(:focus) a,:host(:hover) a{outline:none;text-decoration:none;color:var(--calcite-tabs-color-active);border-bottom-color:var(--calcite-tabs-border-hover)}:host([is-active]) a{color:var(--calcite-tabs-color-active);border-bottom-color:var(--calcite-tabs-border-active)}a{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:.875rem;line-height:1.5;padding:.5rem 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid transparent;cursor:pointer;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;color:var(--calcite-tabs-color);outline:none;width:100%;display:block;text-align:var(--calcite-tabs-tab-text-align)}"; }
}

exports.calcite_tab_title = CalciteTabTitle;
