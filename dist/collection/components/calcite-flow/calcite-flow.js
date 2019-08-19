import { Host, h } from "@stencil/core";
import { CSS } from "./resources";
export class CalciteFlow {
    constructor() {
        this.flowCount = 0;
        this.flowDirection = null;
        this.flows = [];
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.updateFlowProps = () => {
            const { flows } = this;
            const newFlows = Array.from(this.el.querySelectorAll("calcite-flow-item"));
            const oldFlowCount = flows.length;
            const newFlowCount = newFlows.length;
            const prevHasMulti = oldFlowCount > 1;
            const currHasMulti = newFlowCount > 1;
            const flowDirection = (currHasMulti && oldFlowCount) || prevHasMulti
                ? newFlowCount < oldFlowCount
                    ? "retreating"
                    : "advancing"
                : null;
            const activeFlow = newFlows[newFlowCount - 1];
            const previousFlow = newFlows[newFlowCount - 2];
            if (newFlowCount && activeFlow) {
                newFlows.forEach((flowNode) => {
                    flowNode.showBackButton = currHasMulti;
                    flowNode.hidden = flowNode !== activeFlow;
                });
            }
            if (previousFlow) {
                previousFlow.menuOpen = false;
            }
            this.flows = newFlows;
            this.flowCount = newFlowCount;
            this.flowDirection = flowDirection;
        };
        this.flowItemObserver = new MutationObserver(this.updateFlowProps);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentWillLoad() {
        this.updateFlowProps();
    }
    componentDidLoad() {
        this.flowItemObserver.observe(this.el, { childList: true, subtree: true });
    }
    componentDidUnload() {
        this.flowItemObserver.disconnect();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async back() {
        const lastItem = this.el.querySelector("calcite-flow-item:last-child");
        lastItem && lastItem.remove();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { flowDirection, flowCount } = this;
        const flowDirectionClass = flowDirection === "advancing"
            ? CSS.frameAdvancing
            : flowDirection === "retreating"
                ? CSS.frameRetreating
                : "";
        return (h(Host, null,
            h("div", { key: flowCount, class: `${CSS.frame} ${flowDirectionClass}` },
                h("slot", null))));
    }
    static get is() { return "calcite-flow"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-flow.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-flow.css"]
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
                "text": "Used to set the component's color scheme."
            },
            "attribute": "theme",
            "reflect": true
        }
    }; }
    static get states() { return {
        "flowCount": {},
        "flowDirection": {},
        "flows": {}
    }; }
    static get methods() { return {
        "back": {
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
}
