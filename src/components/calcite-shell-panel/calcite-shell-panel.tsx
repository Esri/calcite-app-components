import { Component, Host, Prop, h } from "@stencil/core";

const CSS = {
  actionBar: "action-bar",
  content: "content"
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
        <slot name="action-bar" />
        <div class={CSS.content}>
          <slot />
        </div>
      </Host>
    );
  }
}
