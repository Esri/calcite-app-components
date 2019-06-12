import {
  Component,
  Element,
  Host,
  Listen,
  Method,
  State,
  Watch,
  h
} from "@stencil/core";

import { nodeListToArray } from "calcite-components/dist/collection/utils/dom";

type FlowDirection = "advancing" | "retreating";

const CSS = {
  frame: "calcite-flow-control__frame",
  frameAdvancing: "calcite-flow-control__frame--advancing",
  frameRetreating: "calcite-flow-control__frame--retreating"
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
  //  flowCount
  // ----------------------------------

  @State() flowCount = 0;

  // ----------------------------------
  //  flowDirection
  // ----------------------------------

  @State() flowDirection: FlowDirection = null;

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
    const hasMultipleFlows = flowCount > 1;
    const hadMultipleFlows = oldFlowCount > 1;
    const activeFlow = newValue[flowCount - 1];

    const flowDirection =
      hasMultipleFlows || hadMultipleFlows
        ? flowCount < oldFlowCount
          ? "retreating"
          : "advancing"
        : null;

    if (flowCount && activeFlow) {
      newValue.forEach(flowNode => {
        flowNode.showBackButton = hasMultipleFlows;
        flowNode.hidden = flowNode !== activeFlow;
      });
    }

    this.flowCount = flowCount;
    this.flowDirection = flowDirection;
  }

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
    this.back();
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async back(): Promise<HTMLCalciteFlowPanelElement> {
    const { el, flows, flowCount } = this;

    const newFlows = [...flows];

    const removedElement = el.removeChild(newFlows[flowCount - 1]);

    newFlows.pop();

    this.flows = newFlows;

    return removedElement;
  }

  render() {
    const { flowDirection, flowCount } = this;

    const flowDirectionClass =
      flowDirection === "advancing"
        ? CSS.frameAdvancing
        : flowDirection === "retreating"
        ? CSS.frameRetreating
        : null;

    return (
      <Host>
        <div key={flowCount} class={`${CSS.frame} ${flowDirectionClass}`}>
          <slot />
        </div>
      </Host>
    );
  }
}
