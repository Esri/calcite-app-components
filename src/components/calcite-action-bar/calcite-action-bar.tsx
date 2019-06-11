import { Component, Element, Host, Prop, Watch, h } from "@stencil/core";

@Component({
  tag: "calcite-action-bar",
  styleUrl: "calcite-action-bar.scss",
  shadow: true
})
export class CalciteActionBar {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  // ----------------------------------
  //  el
  // ----------------------------------

  @Element() el: HTMLElement;

  // ----------------------------------
  //  expanded
  // ----------------------------------

  @Prop({ reflect: true }) expanded = false;

  @Watch("expanded")
  watchHandler(newValue: boolean) {
    this.el
      .querySelectorAll("calcite-action")
      .forEach(action =>
        newValue
          ? action.setAttribute("text-enabled", "true")
          : action.removeAttribute("text-enabled")
      );
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

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
