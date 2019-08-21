import { Host, h } from "@stencil/core";
import { getOffsetTop } from "../utils/position";
import { x16 } from "@esri/calcite-ui-icons";
import CalciteIcon from "../utils/CalciteIcon";
import { CSS } from "./resources";
import classnames from "classnames";
import { getElementDir } from "../utils/dom";
import { CSS_UTILITY } from "../utils/resources";
export class CalciteShellFloatingPanel {
    constructor() {
        this.offsetTop = 0;
        this.hidePanel = () => {
            this.el.setAttribute("hidden", "");
            this.calciteShellFloatingPanelClose.emit();
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    placementHandler(newValue) {
        this.offsetTop = getOffsetTop({
            floatingElement: this.el,
            placement: newValue,
            positionElement: this.positionElement
        });
    }
    positionElementHandler(newValue) {
        this.offsetTop = getOffsetTop({
            floatingElement: this.el,
            placement: this.placement,
            positionElement: newValue
        });
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { offsetTop, el } = this;
        const style = {
            top: `${offsetTop}px`
        };
        const closest = el.closest("calcite-shell-panel");
        const layout = (closest && closest.layout) || "leading";
        const rtl = getElementDir(el) === "rtl";
        return (h(Host, null,
            h("div", { class: classnames(CSS.container, {
                    [CSS_UTILITY.rtl]: rtl,
                    [CSS.containerLeading]: layout === "leading",
                    [CSS.containerTrailing]: layout === "trailing"
                }), style: style },
                h("header", { class: CSS.header },
                    h("h3", { class: CSS.heading }, this.heading),
                    h("calcite-action", { onClick: this.hidePanel },
                        h(CalciteIcon, { size: "16", path: x16 }))),
                h("div", { class: CSS.content },
                    h("slot", null)))));
    }
    static get is() { return "calcite-shell-floating-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-shell-floating-panel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-shell-floating-panel.css"]
    }; }
    static get properties() { return {
        "placement": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "CalcitePlacement",
                "resolved": "\"anchor\" | \"over\" | \"side\"",
                "references": {
                    "CalcitePlacement": {
                        "location": "import",
                        "path": "../interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Determines where the element will be displayed.\nside: dynamically left or right based on whether we're in a leading or trailing shell-panel.\nover: centered on top of trigger and covers trigger.\nanchor: dynamically above or below based on how close trigger is to top or bottom of window."
            },
            "attribute": "placement",
            "reflect": true
        },
        "heading": {
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
                "text": "Panel heading"
            },
            "attribute": "heading",
            "reflect": true
        },
        "positionElement": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement",
                "resolved": "HTMLElement",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "HTMLElement used to position this element according to the placement."
            }
        }
    }; }
    static get states() { return {
        "offsetTop": {}
    }; }
    static get events() { return [{
            "method": "calciteShellFloatingPanelClose",
            "name": "calciteShellFloatingPanelClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the component has been closed."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "placement",
            "methodName": "placementHandler"
        }, {
            "propName": "positionElement",
            "methodName": "positionElementHandler"
        }]; }
}
