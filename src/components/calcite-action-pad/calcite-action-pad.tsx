import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

import { CalcitePlacement } from "../interfaces";

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

  /**
   * Determines where the element will be displayed.
   * side: dynamically left or right based on whether we're in the primary or secondary shell-panel.
   * over: centered on top of trigger and covers trigger.
   * anchor: dynamically above or below based on how close trigger is to top or bottom of window.
   */
  @Prop({ reflect: true }) placement: CalcitePlacement;

  /**
   * HTMLElement used to position this element according to the placement.
   */
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

  @Watch("placement")
  placementHandler(newValue: CalcitePlacement) {
    this.offsetTop = getOffsetTop({
      floatingElement: this.el,
      placement: newValue,
      positionElement: this.positionElement
    });
  }

  @Watch("positionElement")
  positionElementHandler(newValue: HTMLElement) {
    this.offsetTop = getOffsetTop({
      floatingElement: this.el,
      placement: this.placement,
      positionElement: newValue
    });
  }
}
