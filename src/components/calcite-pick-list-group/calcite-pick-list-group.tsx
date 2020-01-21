import { Component, Element, Host, Prop, h } from "@stencil/core";
import { CSS } from "./resources";
import classnames from "classnames";

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
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const classes = classnames(CSS.container, {
      [CSS.indent]: this.el.querySelector("[slot=parent-item]") !== null
    });
    return (
      <Host>
        {this.textGroupTitle ? <h3 class={CSS.heading}>{this.textGroupTitle}</h3> : null}
        <slot name={"parent-item"} />
        <section class={classes}>
          <slot />
        </section>
      </Host>
    );
  }
}
