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

  @Prop({ reflect: true }) expanded = false;

  @Watch("expanded")
  watchHandler(newValue: boolean) {
    this.el
      .querySelectorAll("calcite-action")
      .forEach(action =>
        newValue
          ? action.toggleAttribute("text-enabled")
          : action.removeAttribute("text-enabled")
      );
  }

  // --------------------------------------------------------------------------
  //
  //  Variables
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Component Methods
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
