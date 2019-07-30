import { Component, Element, Host, Method, Prop, State, h } from "@stencil/core";

import { CSS, FlowDirection } from "./resources";

import { CalciteTheme, getTheme } from "../../utils/dom";

@Component({
  tag: "calcite-flow",
  styleUrl: "calcite-flow.scss",
  shadow: true
})
export class CalciteFlow {
  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  @State() flowCount = 0;

  @State() flowDirection: FlowDirection = null;

  @State() flows: HTMLCalciteFlowItemElement[] = [];

  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Element styling
   */
  @Prop({ reflect: true }) theme: CalciteTheme = getTheme(this.el);

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad() {
    this.updateFlowProps();
  }

  componentDidLoad() {
    this.flowItemObserver.observe(this.el, { childList: true });
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

  updateFlowProps = (): void => {
    const { flows } = this;

    const newFlows: HTMLCalciteFlowItemElement[] = Array.from(
      this.el.querySelectorAll("calcite-flow-item")
    );

    const oldFlowCount = flows.length;
    const newFlowCount = newFlows.length;

    const prevHasMulti = oldFlowCount > 1;
    const currHasMulti = newFlowCount > 1;

    const flowDirection =
      (currHasMulti && oldFlowCount) || prevHasMulti
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
