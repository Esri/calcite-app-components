import { Component, Host, Prop, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalciteLayout } from "../interfaces";

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
   * Arrangement of the component.
   */
  @Prop({ reflect: true }) layout: CalciteLayout = "leading";

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { layout } = this;

    const contentNode = (
      <div class={CSS.content}>
        <slot />
      </div>
    );

    const actionBarNode = <slot name="action-bar" />;

    const mainNodes = [actionBarNode, contentNode];

    if (layout === "trailing") {
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
