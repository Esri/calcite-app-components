import {
  Component,
  Element,
  Host,
  Listen,
  State,
  Watch,
  h
} from "@stencil/core";

function nodeListToArray(domNodeList): Element[] {
  if (Array.isArray(domNodeList)) {
    return domNodeList;
  } else {
    return Array.prototype.slice.call(domNodeList);
  }
}

type FlowDirection = "advancing" | "retreating";

const CSS = {
  advancing: "",
  retreating: ""
};

@Component({
  tag: "calcite-flow-control",
  styleUrl: "calcite-flow-control.scss",
  shadow: true
})
export class CalciteFlowControl {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  // ----------------------------------
  //  el
  // ----------------------------------

  @Element() el: HTMLElement;

  // ----------------------------------
  //  flows
  // ----------------------------------

  @State() flows: HTMLCalciteFlowPanelElement[] = [];

  @Watch("flows")
  flowsWatchHandler(
    newValue: HTMLCalciteFlowPanelElement[],
    oldValue: HTMLCalciteFlowPanelElement[]
  ) {
    const flowCount = newValue.length;
    const oldFlowCount = oldValue.length;
    const activeFlowIndex = flowCount ? flowCount - 1 : null;
    const activeFlow = newValue[activeFlowIndex] || null;
    const flowDirection = flowCount < oldFlowCount ? "retreating" : "advancing";

    if (flowCount && activeFlow) {
      newValue.forEach(flowNode => {
        flowNode.backButton = flowCount > 1;
        flowNode.hidden = flowNode !== activeFlow;
      });
    }

    this.flowCount = flowCount;
    this.activeFlow = activeFlow;
    this.flowDirection = flowDirection;
  }

  // ----------------------------------
  //  activeFlow
  // ----------------------------------

  @State() activeFlow: HTMLCalciteFlowPanelElement;

  // ----------------------------------
  //  flowCount
  // ----------------------------------

  @State() flowCount = 0;

  // ----------------------------------
  //  flowDirection
  // ----------------------------------

  @State() flowDirection: FlowDirection = null;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Listen("calciteFlowPanelRegister")
  registerHandler(event: CustomEvent<HTMLCalciteFlowPanelElement>) {
    const nodes = nodeListToArray(
      this.el.querySelectorAll("calcite-flow-panel")
    );
    const index = nodes.indexOf(event.detail);
    const flows = [...this.flows];
    flows[index] = event.detail;
    this.flows = flows;
  }

  @Listen("calciteFlowPanelUnregister")
  unregisterHandler(event: CustomEvent<HTMLCalciteFlowPanelElement>) {
    this.flows = this.flows.filter(flow => flow !== event.detail);
  }

  @Listen("calciteFlowPanelBackClick")
  backClickHandler() {
    const flows = [...this.flows];
    flows[this.flowCount - 1].remove();
    flows.pop();

    this.flows = flows;
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { flowDirection } = this;

    return (
      <Host>
        <div class={this._getFlowDirectionClass(flowDirection)}>
          <slot />
        </div>
      </Host>
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private _getFlowDirectionClass(flowDirection: FlowDirection): string {
    if (flowDirection === "advancing") {
      return CSS.advancing;
    }
    if (flowDirection === "retreating") {
      return CSS.retreating;
    }

    return null;
  }
}
