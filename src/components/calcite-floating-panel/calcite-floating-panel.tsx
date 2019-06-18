import { Component, Host, h, Prop } from "@stencil/core";

import { CalcitePosition } from "../interfaces";

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
  stack: dynamically above or below based on how close trigger is to top or bottom of window.
  */
  @Prop() position: CalcitePosition;

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
