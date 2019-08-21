import { Host, h } from "@stencil/core";
import classnames from "classnames";
import { CSS } from "./resources";
import { CSS_UTILITY } from "../utils/resources";
import { getElementDir } from "../utils/dom";
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
         * Disabled is used to prevent the action from occurring.
         */
        this.disabled = false;
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
        const { compact, disabled, el, textEnabled, label, text } = this;
        const iconContainerNode = (h("div", { key: "icon-container", "aria-hidden": "true", class: CSS.iconContainer },
            h("slot", null)));
        const textContainerNode = textEnabled ? (h("div", { key: "text-container", class: CSS.textContainer }, text)) : null;
        const labelFallback = label || text;
        const rtl = getElementDir(el) === "rtl";
        const buttonClasses = {
            [CSS.compact]: compact,
            [CSS_UTILITY.rtl]: rtl
        };
        return (h(Host, null,
            h("button", { class: classnames(CSS.button, buttonClasses), title: labelFallback, "aria-label": labelFallback, disabled: disabled },
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
        "disabled": {
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
                "text": "Disabled is used to prevent the action from occurring."
            },
            "attribute": "disabled",
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
                "text": "Used to set the component's color scheme."
            },
            "attribute": "theme",
            "reflect": true
        }
    }; }
    static get elementRef() { return "el"; }
}
