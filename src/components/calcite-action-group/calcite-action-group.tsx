import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "calcite-action-group",
  styleUrl: "calcite-action-group.scss",
  shadow: true
})
export class CalciteActionGroup {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  // ----------------------------------
  //  justifyBottom
  // ----------------------------------

  @Prop({ reflect: true }) justifyBottom = false;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
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
