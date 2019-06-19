import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

import { CalcitePositionType } from "../interfaces";

import { getOffsetTop } from "../utils/position";

@Component({
  tag: "calcite-action-pad",
  styleUrl: "calcite-action-pad.scss",
  shadow: true
})
export class CalciteActionPad {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /*
  side: dynamically left or right based on whether we're in the primary or secondary shell-panel.
  over: centered on top of trigger and covers trigger.
  anchor: dynamically above or below based on how close trigger is to top or bottom of window.
  */
  @Prop({ reflect: true }) positionType: CalcitePositionType;

  @Prop() positionElement: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFloatingPanelElement;

  @State() offsetTop = 0;

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { offsetTop } = this;

    const style = {
      top: `${offsetTop}px`
    };

    return (
      <Host style={style}>
        <slot />
      </Host>
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  @Watch("positionType")
  positionTypeHandler(newValue: CalcitePositionType) {
    this.offsetTop = getOffsetTop({
      element: this.el,
      positionType: newValue,
      positionElement: this.positionElement
    });
  }

  @Watch("positionElement")
  positionElementHandler(newValue: HTMLElement) {
    this.offsetTop = getOffsetTop({
      element: this.el,
      positionType: this.positionType,
      positionElement: newValue
    });
  }
}
