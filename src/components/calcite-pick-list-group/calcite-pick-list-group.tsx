import { Component, Host, Prop, h } from "@stencil/core";
import { CSS } from "./resources";

/**
 * @slot - A slot for adding `calcite-pick-list-item` elements.
 */
@Component({
  tag: "calcite-pick-list-group",
  styleUrl: "./calcite-pick-list-group.scss",
  shadow: true
})
export class CalcitePickListGroup {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The title used for all nested `calcite-pick-list` rows
   */
  @Prop({ reflect: true }) textGroupTitle: string;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        {this.textGroupTitle ? <h3 class={CSS.heading}>{this.textGroupTitle}</h3> : null}
        <section class={CSS.container}>
          <slot />
        </section>
      </Host>
    );
  }
}
