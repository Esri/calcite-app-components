import { Component, Host, h, VNode, Prop } from "@stencil/core";
import { CalciteLayout } from "../interfaces";

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
   * Indicates the horizontal or vertical layout of the component.
   */
  @Prop({ reflect: true }) layout: CalciteLayout = "vertical";

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
