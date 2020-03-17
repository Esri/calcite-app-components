import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "calcite-tip-group",
  styleUrl: "./calcite-tip-group.scss",
  shadow: true
})
export class CalciteTipGroup {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The title used for all nested tips.
   */
  @Prop() textGroupTitle?: string;

  render() {
    return <slot />;
  }
}
