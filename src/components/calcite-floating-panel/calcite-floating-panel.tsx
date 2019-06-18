import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

import { CalcitePositionType } from "../interfaces";

@Component({
  tag: "calcite-floating-panel",
  styleUrl: "calcite-floating-panel.scss",
  shadow: true
})
export class CalciteFloatingPanel {
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

  setOffsetTop(
    positionType: CalcitePositionType,
    positionElement: HTMLElement
  ): void {
    const { offsetTop } = positionElement;
    const { height: positionHeight } = positionElement.getBoundingClientRect();
    const halfHeight = this.el.offsetHeight / 2;

    this.offsetTop =
      positionType === "anchor"
        ? offsetTop + positionHeight
        : positionType === "over"
        ? offsetTop - halfHeight
        : offsetTop;
  }

  @Watch("positionType")
  positionTypeHandler(newValue: CalcitePositionType) {
    this.setOffsetTop(newValue, this.positionElement);
  }

  @Watch("positionElement")
  positionElementHandler(newValue: HTMLElement) {
    this.setOffsetTop(this.positionType, newValue);
  }
}
