import { Component, Element, Host, Prop, State, h } from "@stencil/core";
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
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  @State() hasParent: boolean;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad() {
    this.hasParent = this.el.querySelector("[slot=parentItem]") !== null;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const classes = {
      [CSS.container]: true,
      [CSS.indent]: this.hasParent
    };
    return (
      <Host>
        {this.textGroupTitle ? <h3 class={CSS.heading}>{this.textGroupTitle}</h3> : null}
        <slot name={"parentItem"} />
        <section class={classes}>
          <slot />
        </section>
      </Host>
    );
  }
}
