import { Component, Element, Host, Method, Prop, State, Watch, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalcitePlacement } from "../interfaces";

import Popper from "popper.js";

// TODO: use popper.js

@Component({
  tag: "calcite-popover",
  styleUrl: "calcite-popover.scss",
  shadow: true
})
export class CalcitePopover {
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
  @Prop({ reflect: true }) placement: CalcitePlacement;

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
  @Prop({ reflect: true }) xOffset = 0;

  @Watch("xOffset")
  xOffsetHandler() {
    this.reposition();
  }

  /**
   * TODO
   */
  @Prop({ reflect: true }) yOffset = 0;

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

  @State() popper: Popper;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async reposition(): Promise<void> {
    this.popper = new Popper(this.positionElement, this.el, {
      // popper options here
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div class={CSS.container}>
          <slot />
        </div>
      </Host>
    );
  }
}
