import { Host, h } from "@stencil/core";
import { chevronsLeft16, chevronsRight16 } from "@esri/calcite-ui-icons";
import CalciteIcon from "../_support/CalciteIcon";
import { getElementDir } from "calcite-components/dist/collection/utils/dom";
const CSS = {
    actionGroupBottom: "action-group--bottom"
};
export class CalciteActionBar {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Indicates whether widget can be expanded.
         */
        this.expand = true;
        /**
         * Indicates whether widget is expanded.
         */
        this.expanded = false;
        /**
         * Updates the label of the expand icon when the component is collapsed.
         */
        this.textExpand = "Expand";
        /**
         * Updates the label of the collapse icon when the component is expanded.
         */
        this.textCollapse = "Collapse";
        this.toggleExpand = () => {
            this.expanded = !this.expanded;
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    getClosestShellLayout() {
        const shellNode = this.el.closest("calcite-shell-panel");
        if (!shellNode) {
            return;
        }
        return shellNode.layout;
    }
    renderExpandToggle() {
        const { expanded, expand, textExpand, textCollapse, el, layout } = this;
        const rtl = getElementDir(el) === "rtl";
        const expandText = expanded ? textCollapse : textExpand;
        const icons = [chevronsLeft16, chevronsRight16];
        if (rtl) {
            icons.reverse();
        }
        const layoutFallback = layout || this.getClosestShellLayout() || "leading";
        const trailing = layoutFallback === "trailing";
        const expandIcon = trailing ? icons[1] : icons[0];
        const collapseIcon = trailing ? icons[0] : icons[1];
        return expand ? (h("calcite-action", { onClick: this.toggleExpand, textEnabled: expanded, text: expandText },
            h(CalciteIcon, { size: "16", path: expanded ? expandIcon : collapseIcon }))) : null;
    }
    renderBottomActionGroup() {
        const expandToggleNode = this.renderExpandToggle();
        return this.el.querySelector("[slot=bottom-actions]") || expandToggleNode ? (h("calcite-action-group", { class: CSS.actionGroupBottom },
            h("slot", { name: "bottom-actions" }),
            expandToggleNode)) : null;
    }
    render() {
        return (h(Host, null,
            h("slot", null),
            this.renderBottomActionGroup()));
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    watchHandler(newValue) {
        this.el
            .querySelectorAll("calcite-action")
            .forEach((action) => newValue ? action.toggleAttribute("text-enabled") : action.removeAttribute("text-enabled"));
    }
    static get is() { return "calcite-action-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-action-bar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-action-bar.css"]
    }; }
    static get properties() { return {
        "expand": {
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
                "text": "Indicates whether widget can be expanded."
            },
            "attribute": "expand",
            "reflect": true,
            "defaultValue": "true"
        },
        "expanded": {
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
                "text": "Indicates whether widget is expanded."
            },
            "attribute": "expanded",
            "reflect": true,
            "defaultValue": "false"
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
                "text": "Updates the label of the expand icon when the component is collapsed."
            },
            "attribute": "text-expand",
            "reflect": false,
            "defaultValue": "\"Expand\""
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
                "text": "Updates the label of the collapse icon when the component is expanded."
            },
            "attribute": "text-collapse",
            "reflect": false,
            "defaultValue": "\"Collapse\""
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
            "reflect": true
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
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "expanded",
            "methodName": "watchHandler"
        }]; }
}
