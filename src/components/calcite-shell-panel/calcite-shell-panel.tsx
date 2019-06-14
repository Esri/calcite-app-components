import { Component, Host, Prop, h } from "@stencil/core";

const CSS = {
  actionBarContainer: "action-bar-container",
  contentContainer: "content-container"
};

@Component({
  tag: "calcite-shell-panel",
  styleUrl: "calcite-shell-panel.scss",
  shadow: true
})
export class CalciteShellPanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) primary = false;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div class={CSS.actionBarContainer}>
          <slot name="action-bar" />
        </div>
        <div class={CSS.contentContainer}>
          <slot />
        </div>
      </Host>
    );
  }
}
