import { Component, Element, Host, Prop, h } from "@stencil/core";

import { CalciteTheme, getTheme } from "../../utils/dom";

@Component({
  tag: "calcite-action-pad",
  styleUrl: "calcite-action-pad.scss",
  shadow: true
})
export class CalciteActionPad {
  // --------------------------------------------------------------------------
  //
  //  Variables
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

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
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
