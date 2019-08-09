import { Host, h } from "@stencil/core";
import { chevronLeft16, chevronRight16, x16 } from "@esri/calcite-ui-icons";
import classnames from "classnames";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../_support/CalciteIcon";
export class CalciteTipManager {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * The default group title for the Tip Manager.
         */
        this.textDefaultTitle = TEXT.defaultGroupTitle;
        /**
         * Label that appears on hover of pagination icon.
         */
        this.textPaginationLabel = TEXT.defaultPaginationLabel;
        this.groupTitle = this.textDefaultTitle;
        this.observer = new MutationObserver(() => this.setUpTips());
        this.hideTipManager = () => {
            this.el.setAttribute("hidden", "");
            this.el.setAttribute("aria-hidden", "");
        };
        this.previousClicked = () => {
            this.previousTip();
        };
        this.nextClicked = () => {
            this.nextTip();
        };
    }
    selectedChangeHandler() {
        this.showSelectedTip();
        this.updateGroupTitle();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        this.setUpTips();
    }
    componentDidLoad() {
        this.observer.observe(this.el, { childList: true, subtree: true });
    }
    componentDidUnload() {
        this.observer.disconnect();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async nextTip() {
        this.direction = "advancing";
        const nextIndex = this.selectedIndex + 1;
        this.selectedIndex = (nextIndex + this.total) % this.total;
    }
    async previousTip() {
        this.direction = "retreating";
        const previousIndex = this.selectedIndex - 1;
        this.selectedIndex = (previousIndex + this.total) % this.total;
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    setUpTips() {
        const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
        const selectedTip = this.el.querySelector("calcite-tip[selected]");
        this.tips = tips;
        this.total = tips.length;
        this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;
        tips.forEach((tip) => {
            tip.setAttribute("non-dismissible", "");
        });
        this.showSelectedTip();
        this.updateGroupTitle();
    }
    showSelectedTip() {
        this.tips.forEach((tip, index) => {
            const isSelected = this.selectedIndex === index;
            isSelected ? tip.setAttribute("selected", "") : tip.removeAttribute("selected");
            isSelected ? tip.removeAttribute("hidden") : tip.setAttribute("hidden", "");
        });
    }
    updateGroupTitle() {
        const selectedTip = this.tips[this.selectedIndex];
        const tipParent = selectedTip.closest("calcite-tip-group");
        this.groupTitle = tipParent ? tipParent.textGroupTitle : this.textDefaultTitle;
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        if (this.total === 0) {
            // TODO: Empty state
            return h(Host, null);
        }
        return (h(Host, null,
            h("header", { class: CSS.header },
                h("h2", { class: CSS.heading }, this.groupTitle),
                h("calcite-action", { onClick: this.hideTipManager, class: CSS.close },
                    h(CalciteIcon, { size: "16", path: x16 }))),
            h("div", { class: classnames(CSS.tipContainer, this.direction), key: this.selectedIndex },
                h("slot", null)),
            h("footer", { class: CSS.pagination },
                h("calcite-action", { onClick: this.previousClicked, class: CSS.pagePrevious },
                    h(CalciteIcon, { size: "16", path: chevronLeft16 })),
                h("span", { class: CSS.pagePosition }, `${this.textPaginationLabel} ${this.selectedIndex + 1}/${this.total}`),
                h("calcite-action", { onClick: this.nextClicked, class: CSS.pageNext },
                    h(CalciteIcon, { size: "16", path: chevronRight16 })))));
    }
    static get is() { return "calcite-tip-manager"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./calcite-tip-manager.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-tip-manager.css"]
    }; }
    static get properties() { return {
        "textDefaultTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The default group title for the Tip Manager."
            },
            "attribute": "text-default-title",
            "reflect": true,
            "defaultValue": "TEXT.defaultGroupTitle"
        },
        "textPaginationLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Label that appears on hover of pagination icon."
            },
            "attribute": "text-pagination-label",
            "reflect": true,
            "defaultValue": "TEXT.defaultPaginationLabel"
        },
        "theme": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "CalciteTheme",
                "resolved": "\"dark\" | \"light\"",
                "references": {
                    "CalciteTheme": {
                        "location": "import",
                        "path": "../interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Used to set the component's color scheme."
            },
            "attribute": "theme",
            "reflect": true
        }
    }; }
    static get states() { return {
        "selectedIndex": {},
        "tips": {},
        "total": {},
        "direction": {}
    }; }
    static get methods() { return {
        "nextTip": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "previousTip": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "selectedIndex",
            "methodName": "selectedChangeHandler"
        }]; }
}
