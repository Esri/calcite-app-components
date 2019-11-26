import classnames from "classnames";

import { Component, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalciteLayout } from "../interfaces";

/**
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 */
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
   * Hide the content panel.
   */
  @Prop({ reflect: true }) collapsed = false;

  /**
   * floatContent lets the content area appear like a floating panel and only sets a max-height.
   */
  @Prop({ reflect: true }) floatContent = false;

  /**
   * floatContentScale sets the max-height of the content area when floatContent is true.
   */
  @Prop({ reflect: false }) floatContentScale: "s" | "m" | "l" = "m";

  @Watch("collapsed")
  watchHandler() {
    this.calciteShellPanelToggle.emit();
  }

  /**
   * Arrangement of the component.
   */
  @Prop({ reflect: true }) layout: CalciteLayout = "leading";

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when collapse has been toggled.
   */
  @Event() calciteShellPanelToggle: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { collapsed, floatContent, layout } = this;

    const contentNode = (
      <div
        class={classnames(CSS.content, floatContent ? CSS.contentFloating : null)}
        hidden={collapsed}
      >
        <slot />
      </div>
    );

    const actionBarNode = <slot name="action-bar" />;

    const mainNodes = [actionBarNode, contentNode];

    if (layout === "trailing") {
      mainNodes.reverse();
    }

    return <Host>{mainNodes}</Host>;
  }
}
