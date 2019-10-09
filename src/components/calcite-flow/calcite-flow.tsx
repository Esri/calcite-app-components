import { Component, Element, Host, Method, Prop, State, h } from "@stencil/core";

import { CSS, FlowDirection } from "./resources";

import { CalciteTheme } from "../interfaces";

@Component({
  tag: "calcite-flow",
  styleUrl: "calcite-flow.scss",
  shadow: true
})
export class CalciteFlow {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFlowElement;

  @State() flowCount = 0;

  @State() flowDirection: FlowDirection = null;

  @State() flows: HTMLCalciteFlowItemElement[] = [];

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

  @Method()
  async back(): Promise<void> {
    const lastItem = this.el.querySelector("calcite-flow-item:last-child");

    lastItem && lastItem.remove();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  getFlowDirection = (oldFlowCount: number, newFlowCount: number): FlowDirection | null => {
    const flowCountChanged = oldFlowCount !== newFlowCount;

    if (!flowCountChanged) {
      return null;
    }

    const allowRetreatingDirection = oldFlowCount > 1;
    const allowAdvancingDirection = oldFlowCount && newFlowCount > 1;

    if (!allowAdvancingDirection && !allowRetreatingDirection) {
      return null;
    }

    return newFlowCount < oldFlowCount ? "retreating" : "advancing";
  };

  updateFlowProps = (): void => {
    const { flows } = this;

    const newFlows: HTMLCalciteFlowItemElement[] = Array.from(
      this.el.querySelectorAll("calcite-flow-item")
    );

    const oldFlowCount = flows.length;
    const newFlowCount = newFlows.length;

    const flowDirection = this.getFlowDirection(oldFlowCount, newFlowCount);
    const activeFlow = newFlows[newFlowCount - 1];
    const previousFlow = newFlows[newFlowCount - 2];

    if (newFlowCount && activeFlow) {
      newFlows.forEach((flowNode) => {
        flowNode.showBackButton = newFlowCount > 1;
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

  flowItemObserver = new MutationObserver(this.updateFlowProps);

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
