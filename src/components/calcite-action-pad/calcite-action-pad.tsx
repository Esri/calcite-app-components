import { Component, Host, Prop, h } from "@stencil/core";

import { CalciteTheme } from "../interfaces";

import { CSS } from "./resources";

/**
 * @slot - A slot for adding `calcite-action`s to the action pad.
 */
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
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Component Methods
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
