import { Host, h } from "@stencil/core";
import CalciteIcon from "../_support/CalciteIcon";
import { home16 } from "@esri/calcite-ui-icons";
const CSS = {
    isActive: "is-active"
};
const NAV_ITEMS = [
    {
        id: "home",
        path: "",
        content: h(CalciteIcon, { size: "16", path: home16, title: "Home" })
    },
    {
        id: "calcite-action",
        path: "demos/calcite-action.html",
        content: "Action"
    },
    {
        id: "calcite-action-bar",
        path: "demos/calcite-action-bar.html",
        content: "Action Bar"
    },
    {
        id: "calcite-action-pad",
        path: "demos/calcite-action-pad.html",
        content: "Action Pad"
    },
    {
        id: "calcite-block",
        path: "demos/calcite-block.html",
        content: "Block"
    },
    {
        id: "calcite-flow",
        path: "demos/calcite-flow.html",
        content: "Flow"
    },
    {
        id: "calcite-flow-item",
        path: "demos/calcite-flow-item.html",
        content: "Flow Item"
    },
    {
        id: "calcite-shell",
        path: "demos/calcite-shell.html",
        content: "Shell"
    },
    {
        id: "calcite-shell-panel",
        path: "demos/calcite-shell-panel.html",
        content: "Shell Panel"
    },
    {
        id: "calcite-tip",
        path: "demos/calcite-tip.html",
        content: "Tip"
    },
    {
        id: "calcite-tip-manager",
        path: "demos/calcite-tip-manager.html",
        content: "Tip Manager"
    },
    {
        id: "calcite-typography",
        path: "demos/calcite-typography.html",
        content: "Typography"
    }
];
export class CalciteDemoNav {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Private Properties
        //
        // --------------------------------------------------------------------------
        this.root = window.location.origin + window.location.pathname.split("demos").shift();
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    renderNavItem(item) {
        const { pageId, root } = this;
        const { content, id, path } = item;
        return (h("li", null,
            h("a", { class: id === pageId ? CSS.isActive : null, href: `${root}${path}` }, content)));
    }
    render() {
        return (h(Host, null,
            h("ul", null, NAV_ITEMS.map((item) => this.renderNavItem(item)))));
    }
    static get is() { return "calcite-demo-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-demo-nav.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-demo-nav.css"]
    }; }
    static get properties() { return {
        "pageId": {
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
                "text": ""
            },
            "attribute": "page-id",
            "reflect": false
        }
    }; }
}
