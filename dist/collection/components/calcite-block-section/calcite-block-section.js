import { Host, h } from "@stencil/core";
import { caretDown16F, caretLeft16F, caretRight16F } from "@esri/calcite-ui-icons";
import { getElementDir } from "../utils/dom";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";
export class CalciteBlockSection {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * When true, the block's section content will be displayed.
         */
        this.open = false;
        /**
         * Tooltip used for the toggle when collapsed.
         */
        this.textExpand = TEXT.expand;
        /**
         * Tooltip used for the toggle when expanded.
         */
        this.textCollapse = TEXT.collapse;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.onHeaderClick = () => {
            this.open = !this.open;
            this.calciteBlockSectionToggle.emit();
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { el, open, textCollapse, textExpand } = this;
        const dir = getElementDir(el);
        const arrowIcon = open ? caretDown16F : dir === "rtl" ? caretLeft16F : caretRight16F;
        const toggleLabel = open ? textCollapse : textExpand;
        const headerNode = (h("calcite-action", { "aria-label": toggleLabel, onClick: this.onHeaderClick, text: this.text, "text-enabled": true, compact: true },
            h(CalciteIcon, { size: "16", path: arrowIcon })));
        return (h(Host, { "aria-expanded": open ? "true" : "false" },
            headerNode,
            h("div", { class: CSS.content, hidden: !open },
                h("slot", null))));
    }
    static get is() { return "calcite-block-section"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-block-section.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-block-section.css"]
    }; }
    static get properties() { return {
        "open": {
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
                "text": "When true, the block's section content will be displayed."
            },
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
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
                "text": "Text displayed in the button."
            },
            "attribute": "text",
            "reflect": false
        },
        "textExpand": {
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
                "text": "Tooltip used for the toggle when collapsed."
            },
            "attribute": "text-expand",
            "reflect": false,
            "defaultValue": "TEXT.expand"
        },
        "textCollapse": {
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
                "text": "Tooltip used for the toggle when expanded."
            },
            "attribute": "text-collapse",
            "reflect": false,
            "defaultValue": "TEXT.collapse"
        }
    }; }
    static get events() { return [{
            "method": "calciteBlockSectionToggle",
            "name": "calciteBlockSectionToggle",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the header has been clicked."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
