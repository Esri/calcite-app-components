import {
  Component,
  Element,
  Host,
  Listen,
  Method,
  State,
  Watch,
  h
} from '@stencil/core';

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

  // ----------------------------------
  //  flows
  // ----------------------------------

  @State() flows: HTMLCalciteFlowPanelElement[] = [];

  @Watch('flows')
  flowsWatchHandler(
    newValue: HTMLCalciteFlowPanelElement[]
    // oldValue: HTMLCalciteFlowPanelElement[]
  ) {
    const flowCount = newValue.length;
    const activeFlowIndex = flowCount - 1;

    this.flowCount = flowCount;
    this.activeFlow = newValue[activeFlowIndex] || null;
  }

  // ----------------------------------
  //  activeFlow
  // ----------------------------------

  @State() activeFlow: HTMLCalciteFlowPanelElement;

  // ----------------------------------
  //  flowCount
  // ----------------------------------

  @State() flowCount = 0;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Listen('calciteFlowPanelRegister')
  registerHandler(event: CustomEvent<HTMLCalciteFlowPanelElement>) {
    this.flows = [event.detail, ...this.flows];
  }

  @Listen('calciteFlowPanelUnregister')
  unregisterHandler(event: CustomEvent<HTMLCalciteFlowPanelElement>) {
    this.flows = this.flows.filter(flow => flow !== event.detail);
  }

  @Listen('calciteFlowPanelBackClick')
  backClickHandler() {
    this.removeActiveFlow();
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async removeActiveFlow(): Promise<void> {
    // const { el } = this;

    // const flowNodes = el.querySelectorAll('calcite-flow-panel');
    // const flowCount = flowNodes.length;
    // const activeFlowIndex = flowCount - 1;
    // flowNodes[activeFlowIndex].remove();

    this.activeFlow.remove();

    this.flows = this.flows.filter(Boolean);
  }

  render() {
    const { activeFlow, el, flowCount } = this;

    const flowNodes = el.querySelectorAll('calcite-flow-panel');

    console.log(activeFlow);

    flowNodes.forEach(flowNode => {
      flowNode.backButton = flowCount > 1;
      // flowNode.hidden = flowNode !== activeFlow;
    });

    return (
      <Host>
        {activeFlow}
        <slot />
      </Host>
    );
  }
}
