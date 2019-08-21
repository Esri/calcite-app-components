import { Host, h } from "@stencil/core";
import { CSS } from "./resources";
export class CalciteShellPanel {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Hide the content panel.
         */
        this.collapsed = false;
        /**
         * Arrangement of the component.
         */
        this.layout = "leading";
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { collapsed, layout } = this;
        const contentNode = (h("div", { class: CSS.content, hidden: collapsed },
            h("slot", null)));
        const actionBarNode = h("slot", { name: "action-bar" });
        const mainNodes = [actionBarNode, contentNode];
        if (layout === "trailing") {
            mainNodes.reverse();
        }
        return (h(Host, null,
            mainNodes,
            h("slot", { name: "shell-floating-panel" }),
            h("slot", { name: "action-pad" })));
    }
    static get is() { return "calcite-shell-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-shell-panel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-shell-panel.css"]
    }; }
    static get properties() { return {
        "collapsed": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Hide the content panel."
            },
            "attribute": "collapsed",
            "reflect": true,
            "defaultValue": "false"
        },
        "layout": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "CalciteLayout",
                "resolved": "\"leading\" | \"trailing\"",
                "references": {
                    "CalciteLayout": {
                        "location": "import",
                        "path": "../interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Arrangement of the component."
            },
            "attribute": "layout",
            "reflect": true,
            "defaultValue": "\"leading\""
        }
    }; }
}
