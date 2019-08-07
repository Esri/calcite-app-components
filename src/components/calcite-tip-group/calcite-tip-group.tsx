import { Component, Prop, h } from "@stencil/core";
import { TEXT } from "../calcite-tip-manager/resources";

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
   * The title used for all nested tips
   */
  @Prop({ reflect: true }) textGroupTitle = TEXT.defaultGroupTitle;

  render() {
    return <slot />;
  }
}
