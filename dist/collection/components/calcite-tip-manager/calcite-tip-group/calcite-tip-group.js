import { h } from "@stencil/core";
import { DEFAULT_GROUP_TITLE } from "../resources";
export class CalciteTipGroup {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * The title used for all nested tips
         */
        this.textGroupTitle = DEFAULT_GROUP_TITLE;
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "calcite-tip-group"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "textGroupTitle": {
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
                "text": "The title used for all nested tips"
            },
            "attribute": "text-group-title",
            "reflect": true,
            "defaultValue": "DEFAULT_GROUP_TITLE"
        }
    }; }
}
