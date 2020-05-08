import { Component, Host, h, VNode, Prop } from "@stencil/core";
import { CalciteOrientation } from "../interfaces";

@Component({
  tag: "calcite-action-group",
  styleUrl: "calcite-action-group.scss",
  shadow: true
})
/**
 * @slot - A slot for adding a group of `calcite-action`s.
 */
export class CalciteActionGroup {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------
  /**
   * Orientation of the component.
   */
  @Prop({ reflect: true }) orientation: CalciteOrientation = "vertical";
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
