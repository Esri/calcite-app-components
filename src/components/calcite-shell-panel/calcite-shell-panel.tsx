import { Component, Host, Prop, h } from "@stencil/core";

import { CSS } from "./resources";

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

  /**
   * When true, the panel is the primary panel for the application.
   */
  @Prop({ reflect: true }) primary = false;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const contentNode = (
      <div class={CSS.content}>
        <slot />
      </div>
    );

    const actionBarNode = <slot name="action-bar" />;

    const mainNodes = [contentNode, actionBarNode];

    if (this.primary) {
      mainNodes.reverse();
    }

    return (
      <Host>
        {mainNodes}
        <slot name="floating-panel" />
        <slot name="action-pad" />
      </Host>
    );
  }
}
