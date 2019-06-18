import { Component, Host, Prop, h } from "@stencil/core";

import { CalcitePosition } from "../interfaces";

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
  stacked: dynamically above or below based on how close trigger is to top or bottom of window.
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
