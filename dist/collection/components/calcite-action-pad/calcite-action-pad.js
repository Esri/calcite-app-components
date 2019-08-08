import { Host, h } from "@stencil/core";
import { getOffsetTop } from "../utils/position";
export class CalciteActionPad {
    constructor() {
        this.offsetTop = 0;
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { offsetTop } = this;
        const style = {
            top: `${offsetTop}px`
        };
        return (h(Host, { style: style },
            h("slot", null)));
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
    static get is() { return "calcite-action-pad"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-action-pad.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-action-pad.css"]
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
                "text": "Element styling"
            },
            "attribute": "theme",
            "reflect": true
        }
    }; }
    static get states() { return {
        "offsetTop": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "placement",
            "methodName": "placementHandler"
        }, {
            "propName": "positionElement",
            "methodName": "positionElementHandler"
        }]; }
}
