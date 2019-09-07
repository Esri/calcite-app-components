import { Component, Element, Host, Method, Prop, State, Watch, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalcitePlacementValue } from "../interfaces";

import { CalcitePositionStyle, getPositionStyle } from "../utils/position";

@Component({
  tag: "calcite-placement",
  styleUrl: "calcite-placement.scss",
  shadow: true
})
export class CalcitePlacement {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Determines where the element will be positioned.
   * horizontal: Positioned to the left or right of the positionElement.
   * vertical: Positioned above or below the positionElement.
   */
  @Prop({ reflect: true }) placement: CalcitePlacementValue;

  @Watch("placement")
  placementHandler() {
    this.reposition();
  }

  /**
   * HTMLElement used to position this element according to the placement.
   */
  @Prop() positionElement: HTMLElement;

  @Watch("positionElement")
  positionElementHandler() {
    this.reposition();
  }

  /**
   * TODO
   */
  @Prop({ reflect: true }) xOffset = 10;

  @Watch("xOffset")
  xOffsetHandler() {
    this.reposition();
  }

  /**
   * TODO
   */
  @Prop({ reflect: true }) yOffset = 10;

  @Watch("yOffset")
  yOffsetHandler() {
    this.reposition();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellFloatingPanelElement;

  @State() positionStyle: CalcitePositionStyle;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async reposition(): Promise<void> {
    this.positionStyle = getPositionStyle({
      placement: this.placement,
      positionElement: this.positionElement,
      xOffset: this.xOffset,
      yOffset: this.yOffset
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { positionStyle } = this;

    return (
      <Host>
        <div style={positionStyle} class={CSS.container}>
          <slot />
        </div>
      </Host>
    );
  }
}
