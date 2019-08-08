import { Host, h } from "@stencil/core";
import { chevronDown16, chevronUp16 } from "@esri/calcite-ui-icons";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../_support/CalciteIcon";
const CONTROL_SLOT_NAME = "control";
export class CalciteBlock {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * When true, this block will be collapsible.
         */
        this.collapsible = false;
        /**
         * When true, the block's content will be displayed.
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
        this.onHeaderClick = (event) => {
            const controlSlot = this.el.shadowRoot.querySelector(`slot[name=${CONTROL_SLOT_NAME}]`);
            const control = controlSlot && controlSlot.assignedNodes()[0];
            if (control && control.contains(event.target)) {
                event.stopPropagation();
                event.preventDefault();
                return;
            }
            this.open = !this.open;
            this.calciteBlockToggle.emit();
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { collapsible, el, heading, open, summary, textCollapse, textExpand } = this;
        const toggleLabel = open ? textCollapse : textExpand;
        const headerContent = (h("header", { class: CSS.header },
            h("div", { class: CSS.title },
                h("h3", { class: CSS.heading }, heading),
                summary ? h("div", { class: CSS.summary }, summary) : null),
            h("slot", { name: CONTROL_SLOT_NAME })));
        const headerNode = (h("div", { class: CSS.headerContainer }, collapsible ? (h("button", { "aria-label": toggleLabel, class: CSS.toggle, onClick: this.onHeaderClick, title: toggleLabel },
            headerContent,
            h(CalciteIcon, { size: "16", path: open ? chevronUp16 : chevronDown16, svgAttributes: { class: CSS.toggleIcon } }))) : (headerContent)));
        const hasContent = !!Array.from(el.children).some((child) => child.slot !== CONTROL_SLOT_NAME);
        return (h(Host, { "aria-expanded": collapsible ? (open ? "true" : "false") : null },
            h("article", null,
                headerNode,
                h("div", { class: CSS.content, hidden: !hasContent || !open },
                    h("slot", null)))));
    }
    static get is() { return "calcite-block"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-block.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-block.css"]
    }; }
    static get properties() { return {
        "collapsible": {
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
                "text": "When true, this block will be collapsible."
            },
            "attribute": "collapsible",
            "reflect": false,
            "defaultValue": "false"
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
                "text": "Block heading."
            },
            "attribute": "heading",
            "reflect": false
        },
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
                "text": "When true, the block's content will be displayed."
            },
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
        },
        "summary": {
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
                "text": "Block summary."
            },
            "attribute": "summary",
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
    static get events() { return [{
            "method": "calciteBlockToggle",
            "name": "calciteBlockToggle",
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
