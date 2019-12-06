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
   * This property makes the content area appear like a "floating" panel.
   */
  @Prop({ reflect: true }) detached = false;

  /**
   * This sets limits the height of the content area. It only applies when detached is true.
   */
  @Prop({ reflect: false }) detachedScale: "s" | "m" | "l" = "m";

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
    const { collapsed, detached, layout } = this;

    const contentNode = (
      <div class={classnames(CSS.content, { [CSS.contentDetached]: detached })} hidden={collapsed}>
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
