import { Host, h } from "@stencil/core";
import { CSS, TEXT } from "./resources";
export class CalciteExample {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        this.someProp = true;
        this.textMyString = TEXT.myString;
        this.internalRenderableProp = 0;
    }
    handleSomeProp() {
        // ...
    }
    handleInternalSomeProp() {
        // ...
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentWillLoad() {
        // ...
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async publicMethod() {
        // ...
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    internalMethod() {
        // ...
    }
    handleSomeEvent() {
        // ...
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return (h(Host, null,
            h("div", { class: CSS.foo }, this.someProp ? this.textMyString : null)));
    }
    static get is() { return "calcite-example"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-example.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-example.css"]
    }; }
    static get properties() { return {
        "someProp": {
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
                "text": ""
            },
            "attribute": "some-prop",
            "reflect": false,
            "defaultValue": "true"
        },
        "textMyString": {
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
            "attribute": "text-my-string",
            "reflect": false,
            "defaultValue": "TEXT.myString"
        }
    }; }
    static get states() { return {
        "internalRenderableProp": {}
    }; }
    static get events() { return [{
            "method": "calciteExampleEvent",
            "name": "calciteExampleEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "publicMethod": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "someProp",
            "methodName": "handleSomeProp"
        }, {
            "propName": "internalRenderableProp",
            "methodName": "handleInternalSomeProp"
        }]; }
    static get listeners() { return [{
            "name": "someEvent",
            "method": "handleSomeEvent",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
