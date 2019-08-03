import { Host, h } from "@stencil/core";
import classnames from "classnames";
import { CSS } from "./resources";
export class CalciteAction {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Indicates whether the action is highlighted.
         */
        this.active = false;
        /**
         * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
         */
        this.compact = false;
        /**
         * Indicates unread changes.
         */
        this.indicator = false;
        /**
         * Indicates whether the text is displayed.
         */
        this.textEnabled = false;
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { textEnabled, label, text } = this;
        const iconContainerNode = (h("div", { key: "icon-container", "aria-hidden": "true", class: CSS.iconContainer },
            h("slot", null)));
        const textContainerNode = textEnabled ? (h("div", { key: "text-container", class: CSS.textContainer }, text)) : null;
        const labelFallback = label || text;
        const compactClass = {
            [CSS.compact]: this.compact
        };
        return (h(Host, null,
            h("button", { class: classnames(CSS.button, compactClass), title: labelFallback, "aria-label": labelFallback },
                iconContainerNode,
                textContainerNode)));
    }
    static get is() { return "calcite-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-action.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-action.css"]
    }; }
    static get properties() { return {
        "active": {
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
                "text": "Indicates whether the action is highlighted."
            },
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        },
        "compact": {
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
                "text": "Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section."
            },
            "attribute": "compact",
            "reflect": true,
            "defaultValue": "false"
        },
        "indicator": {
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
                "text": "Indicates unread changes."
            },
            "attribute": "indicator",
            "reflect": true,
            "defaultValue": "false"
        },
        "label": {
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
                "text": "Label of the action, exposed on hover."
            },
            "attribute": "label",
            "reflect": false
        },
        "text": {
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
                "text": "Text that accompanies the action icon."
            },
            "attribute": "text",
            "reflect": false
        },
        "textEnabled": {
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
                "text": "Indicates whether the text is displayed."
            },
            "attribute": "text-enabled",
            "reflect": true,
            "defaultValue": "false"
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
}
