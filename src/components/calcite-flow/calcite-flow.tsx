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
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating"
};

@Component({
  tag: "calcite-flow",
  styleUrl: "calcite-flow.scss",
  shadow: true
})
export class CalciteFlow {
  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Listen("calciteFlowItemRegister")
  registerHandler(event: CustomEvent<HTMLCalciteFlowItemElement>) {
    const nodes = nodeListToArray(
      this.el.querySelectorAll("calcite-flow-item")
    );
    const index = nodes.indexOf(event.detail);
    const flows = [...this.flows];
    flows[index] = event.detail;
    this.flows = flows;
  }

  @Listen("calciteFlowItemUnregister")
  unregisterHandler(event: CustomEvent<HTMLCalciteFlowItemElement>) {
    this.flows = this.flows.filter(flow => flow !== event.detail);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  @State() flowCount = 0;

  @State() flowDirection: FlowDirection = null;

  @State() flows: HTMLCalciteFlowItemElement[] = [];

  @Watch("flows")
  flowsWatchHandler(
    newValue: HTMLCalciteFlowItemElement[],
    oldValue: HTMLCalciteFlowItemElement[]
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
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async back(): Promise<HTMLCalciteFlowItemElement> {
    const { el, flows, flowCount } = this;

    const newFlows = [...flows];

    const child = newFlows[flowCount - 1];

    const removedElement = child
      ? el.removeChild(newFlows[flowCount - 1])
      : null;

    if (removedElement) {
      newFlows.pop();

      this.flows = newFlows;
    }

    return removedElement;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { flowDirection, flowCount } = this;

    const flowDirectionClass =
      flowDirection === "advancing"
        ? CSS.frameAdvancing
        : flowDirection === "retreating"
        ? CSS.frameRetreating
        : "";

    return (
      <Host>
        <div key={flowCount} class={`${CSS.frame} ${flowDirectionClass}`}>
          <slot />
        </div>
      </Host>
    );
  }
}
