import { Component, Element, h, Host } from "@stencil/core";

@Component({
  tag: "calcite-flow-control",
  styleUrl: "calcite-flow-control.scss",
  shadow: true
})
export class CalciteFlowControl {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  el
  //----------------------------------

  @Element() el: HTMLElement;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const { el } = this;

    const flowNodes = el.querySelectorAll("calcite-flow-panel");
    const flowCount = flowNodes.length;
    const hasMultipleFlows = flowCount > 1;

    flowNodes.forEach((flowNode, index) => {
      flowNode.backButton = hasMultipleFlows;
      flowNode.hidden = index !== flowCount - 1;
    });

    console.log(hasMultipleFlows);

    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
