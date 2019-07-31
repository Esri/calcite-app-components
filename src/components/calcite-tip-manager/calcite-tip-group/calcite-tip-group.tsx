import { Component, Prop, h } from "@stencil/core";
import { DEFAULT_GROUP_TITLE } from "../resources";

@Component({
  tag: "calcite-tip-group",
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
  @Prop({ reflect: true }) textGroupTitle = DEFAULT_GROUP_TITLE;

  render() {
    return <slot />;
  }
}
