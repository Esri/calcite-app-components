import { Host, h } from "@stencil/core";
import { x16 } from "@esri/calcite-ui-icons";
import { getItem, setItem } from "../../utils/localStorage";
import CalciteIcon from "../_support/CalciteIcon";
import { CSS } from "./resources";
export class CalciteTip {
    constructor() {
        /**
         * Indicates whether the tip can be dismissed.
         */
        this.nonDismissible = false;
        this.dismissed = getItem(`${this.el.tagName.toLowerCase()}-${this.storageId}`) !== null;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.hideTip = () => {
            this.dismissed = true;
            const { storageId } = this;
            if (storageId) {
                setItem(`${this.el.tagName.toLowerCase()}-${storageId}`, "dismissed");
            }
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return (h(Host, { dismissed: this.dismissed },
            h("header", { class: CSS.header },
                h("h3", { class: CSS.heading }, this.heading),
                !this.nonDismissible ? (h("calcite-action", { onClick: this.hideTip, class: CSS.close },
                    h(CalciteIcon, { size: "16", path: x16 }))) : null),
            h("div", { class: CSS.content },
                this.thumbnail ? (h("div", { class: CSS.imageFrame },
                    h("img", { src: this.thumbnail, alt: this.textThumbnail }))) : null,
                h("div", { class: CSS.info },
                    this.el.querySelector("[slot=info]") ? h("slot", { name: "info" }) : null,
                    this.el.querySelector("[slot=link]") ? (h("p", { class: CSS.link },
                        h("slot", { name: "link" }))) : null))));
    }
    static get is() { return "calcite-tip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./calcite-tip.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-tip.css"]
    }; }
    static get properties() { return {
        "storageId": {
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
                "text": "The local storage id used for an instance of a tip."
            },
            "attribute": "storage-id",
            "reflect": false
        },
        "nonDismissible": {
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
                "text": "Indicates whether the tip can be dismissed."
            },
            "attribute": "non-dismissible",
            "reflect": true,
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
                "text": ""
            },
            "attribute": "heading",
            "reflect": false
        },
        "thumbnail": {
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
            "attribute": "thumbnail",
            "reflect": false
        },
        "textThumbnail": {
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
            "attribute": "text-thumbnail",
            "reflect": false
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
    static get states() { return {
        "dismissed": {}
    }; }
    static get elementRef() { return "el"; }
}
