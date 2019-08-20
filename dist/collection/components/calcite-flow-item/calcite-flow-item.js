import { Host, h } from "@stencil/core";
import { chevronLeft16, ellipsis16 } from "@esri/calcite-ui-icons";
import classnames from "classnames";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";
export class CalciteFlowItem {
    constructor() {
        /**
         * Opens the action menu.
         */
        this.menuOpen = false;
        /**
         * Shows a back button in the header.
         */
        this.showBackButton = false;
        /**
         * 'Back' text string.
         */
        this.textBack = TEXT.back;
        /**
         * 'Close' text string.
         */
        this.textClose = TEXT.close;
        /**
         * 'Open' text string.
         */
        this.textOpen = TEXT.open;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggleMenuOpen = () => {
            this.menuOpen = !this.menuOpen;
        };
        this.backButtonClick = () => {
            this.calciteFlowItemBackClick.emit();
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderBackButton() {
        const { showBackButton, textBack } = this;
        return showBackButton ? (h("calcite-action", { key: "back-button", "aria-label": textBack, text: textBack, class: CSS.backButton, onClick: this.backButtonClick },
            h(CalciteIcon, { size: "16", path: chevronLeft16 }))) : null;
    }
    renderMenuButton() {
        const { menuOpen, textOpen, textClose } = this;
        const menuLabel = menuOpen ? textClose : textOpen;
        return (h("calcite-action", { class: CSS.menuButton, "aria-label": menuLabel, text: menuLabel, onClick: this.toggleMenuOpen },
            h(CalciteIcon, { size: "16", path: ellipsis16 })));
    }
    renderMenuActions() {
        const { menuOpen } = this;
        return (h("div", { class: classnames(CSS.menu, { [CSS.menuOpen]: menuOpen }) },
            h("slot", { name: "menu-actions" })));
    }
    renderFooterActions() {
        const hasFooterActions = !!this.el.querySelector("[slot=footer-actions]");
        return hasFooterActions ? (h("footer", { class: CSS.footer },
            h("slot", { name: "footer-actions" }))) : null;
    }
    renderSingleActionContainer() {
        return (h("div", { class: CSS.singleActionContainer },
            h("slot", { name: "menu-actions" })));
    }
    renderMenuActionsContainer() {
        return (h("div", { class: CSS.menuContainer },
            this.renderMenuButton(),
            this.renderMenuActions()));
    }
    renderHeaderActions() {
        const menuActionsNode = this.el.querySelector("[slot=menu-actions]");
        const hasMenuActions = !!menuActionsNode;
        const actionCount = hasMenuActions ? menuActionsNode.childElementCount : 0;
        return actionCount === 1
            ? this.renderSingleActionContainer()
            : hasMenuActions
                ? this.renderMenuActionsContainer()
                : null;
    }
    render() {
        const headingClasses = {
            [CSS.heading]: true,
            [CSS.headingFirst]: !this.showBackButton
        };
        const headerNode = (h("header", { class: CSS.header },
            this.renderBackButton(),
            h("h2", { class: classnames(headingClasses) }, this.heading),
            this.renderHeaderActions()));
        const contentContainerNode = (h("section", { class: CSS.contentContainer },
            h("slot", null)));
        return (h(Host, null,
            h("article", { class: CSS.container },
                headerNode,
                contentContainerNode,
                this.renderFooterActions())));
    }
    static get is() { return "calcite-flow-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-flow-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-flow-item.css"]
    }; }
    static get properties() { return {
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
                "text": "Heading text."
            },
            "attribute": "heading",
            "reflect": false
        },
        "menuOpen": {
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
                "text": "Opens the action menu."
            },
            "attribute": "menu-open",
            "reflect": true,
            "defaultValue": "false"
        },
        "showBackButton": {
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
                "text": "Shows a back button in the header."
            },
            "attribute": "show-back-button",
            "reflect": false,
            "defaultValue": "false"
        },
        "textBack": {
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
                "text": "'Back' text string."
            },
            "attribute": "text-back",
            "reflect": false,
            "defaultValue": "TEXT.back"
        },
        "textClose": {
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
                "text": "'Close' text string."
            },
            "attribute": "text-close",
            "reflect": false,
            "defaultValue": "TEXT.close"
        },
        "textOpen": {
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
                "text": "'Open' text string."
            },
            "attribute": "text-open",
            "reflect": false,
            "defaultValue": "TEXT.open"
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
    static get events() { return [{
            "method": "calciteFlowItemBackClick",
            "name": "calciteFlowItemBackClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the back button has been clicked."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
