import { Component, Element, Host, Prop, h, VNode } from "@stencil/core";
import { CSS, SLOTS } from "./resources";
import { CalcitePosition, CalciteScale } from "../interfaces";
import { getSlotted } from "../utils/dom";

/**
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 * @slot - A slot for adding content to the shell panel.
 */
@Component({
  tag: "calcite-shell-center-row",
  styleUrl: "calcite-shell-center-row.scss",
  shadow: true
})
export class CalciteShellCenterRow {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * This property makes the content area appear like a "floating" panel.
   */
  @Prop({ reflect: true }) detached = false;

  /**
   * Specifies the maxiumum height of the row.
   */
  @Prop({ reflect: true }) heightScale: CalciteScale = "s";

  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  @Prop({ reflect: true }) position: CalcitePosition = "end";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellCenterRowElement;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
    /**
     * TODO: add RTL check.
     */
    const contentNode = (
      <div class={CSS.content}>
        <slot />
      </div>
    );

    const actionBar = getSlotted<HTMLCalciteActionBarElement>(this.el, SLOTS.actionBar);

    if (!actionBar) {
      return <Host>{contentNode}</Host>;
    }

    const actionBarNode = (
      <div class={CSS.actionBarContainer}>
        <slot name={SLOTS.actionBar} />
      </div>
    );

    const children = [contentNode];

    if (actionBar.position === "end") {
      children.push(actionBarNode);
    } else {
      children.unshift(actionBarNode);
    }

    return <Host>{children}</Host>;
  }
}
