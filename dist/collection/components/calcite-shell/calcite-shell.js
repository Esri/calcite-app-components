import { Host, h } from "@stencil/core";
import { CSS } from "./resources";
export class CalciteShell {
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderHeader() {
        const hasHeader = !!this.el.querySelector("[slot=shell-header]");
        return hasHeader ? h("slot", { name: "shell-header" }) : null;
    }
    renderContent() {
        return (h("div", { class: CSS.content },
            h("slot", null)));
    }
    renderFooter() {
        const hasFooter = !!this.el.querySelector("[slot=shell-footer]");
        return hasFooter ? (h("div", { class: CSS.footer },
            h("slot", { name: "shell-footer" }))) : null;
    }
    renderMain() {
        return (h("main", { class: CSS.main },
            h("slot", { name: "primary-panel" }),
            this.renderContent(),
            h("slot", { name: "contextual-panel" }),
            h("slot", { name: "tip-manager" })));
    }
    render() {
        return (h(Host, null,
            this.renderHeader(),
            this.renderMain(),
            this.renderFooter()));
    }
    static get is() { return "calcite-shell"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-shell.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-shell.css"]
    }; }
    static get properties() { return {
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
}
