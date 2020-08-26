import { Component, Prop, h, VNode } from "@stencil/core";

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
   *
   */
  @Prop() groupTitle?: string;

  /**
   * The title used for all nested tips.
   *
   * @deprecated use groupTitle instead.
   */
  @Prop() textGroupTitle?: string;

  render(): VNode {
    return <slot />;
  }
}
