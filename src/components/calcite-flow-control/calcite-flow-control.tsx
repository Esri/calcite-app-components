import { Component, Element, Host, Listen, Method, h } from '@stencil/core';

@Component({
  tag: 'calcite-flow-control',
  styleUrl: 'calcite-flow-control.scss',
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

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Listen('calciteFlowPanelBackClick')
  todoCompletedHandler() {
    this.pop();
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  pop(): void {
    const { el } = this;

    const flowNodes = el.querySelectorAll('calcite-flow-panel');
    const flowCount = flowNodes.length;
    const activeFlowIndex = flowCount - 1;
    flowNodes[activeFlowIndex].remove();
  }

  render() {
    const { el } = this;

    const flowNodes = el.querySelectorAll('calcite-flow-panel');
    const flowCount = flowNodes.length;
    const hasMultipleFlows = flowCount > 1;
    const activeFlowIndex = flowCount - 1;

    flowNodes.forEach((flowNode, index) => {
      flowNode.backButton = hasMultipleFlows;
      flowNode.hidden = index !== activeFlowIndex;
    });

    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
