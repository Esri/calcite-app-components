import { Component, Element, Host, Prop, Watch, h } from "@stencil/core";

import { chevronsLeft16, chevronsRight16 } from "@esri/calcite-ui-icons";
import CalciteIcon from "../_support/CalciteIcon";
import { CalciteLayout, CalciteTheme } from "../interfaces";

import { getElementDir } from "calcite-components/dist/collection/utils/dom";

import { CSS } from "./resources";

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
  /**
   * Indicates whether widget can be expanded.
   */
  @Prop({ reflect: true }) expand = true;

  /**
   * Indicates whether widget is expanded.
   */
  @Prop({ reflect: true }) expanded = false;

  /**
   * Updates the label of the expand icon when the component is collapsed.
   */
  @Prop() textExpand = "Expand";

  /**
   * Updates the label of the collapse icon when the component is expanded.
   */
  @Prop() textCollapse = "Collapse";

  /**
   * Arrangement of the component.
   */
  @Prop({ reflect: true }) layout: CalciteLayout;

  /**
   * Element styling
   */

  @Prop({ reflect: true }) theme: CalciteTheme;

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

  getClosestShellLayout(): CalciteLayout {
    const shellNode = this.el.closest("calcite-shell-panel");

    if (!shellNode) {
      return;
    }

    return shellNode.layout;
  }

  renderExpandToggle() {
    const { expanded, expand, textExpand, textCollapse, el, layout } = this;

    const rtl = getElementDir(el) === "rtl";

    const expandText = expanded ? textCollapse : textExpand;
    const icons = [chevronsLeft16, chevronsRight16];

    if (rtl) {
      icons.reverse();
    }

    const layoutFallback = layout || this.getClosestShellLayout() || "leading";

    const trailing = layoutFallback === "trailing";
    const expandIcon = trailing ? icons[1] : icons[0];
    const collapseIcon = trailing ? icons[0] : icons[1];

    return expand ? (
      <calcite-action onClick={this.toggleExpand} textEnabled={expanded} text={expandText}>
        <CalciteIcon size="16" path={expanded ? expandIcon : collapseIcon} />
      </calcite-action>
    ) : null;
  }

  renderBottomActionGroup() {
    const expandToggleNode = this.renderExpandToggle();

    return this.el.querySelector("[slot=bottom-actions]") || expandToggleNode ? (
      <calcite-action-group class={CSS.actionGroupBottom}>
        <div class={CSS.actionGroupBottomContainer}>
          <slot name="bottom-actions" />
        </div>
        {expandToggleNode}
      </calcite-action-group>
    ) : null;
  }

  render() {
    return (
      <Host>
        <slot />
        {this.renderBottomActionGroup()}
      </Host>
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  @Watch("expanded")
  watchHandler(newValue: boolean) {
    this.el
      .querySelectorAll("calcite-action")
      .forEach((action) =>
        newValue ? action.setAttribute("text-enabled", "") : action.removeAttribute("text-enabled")
      );
  }

  toggleExpand = (): void => {
    this.expanded = !this.expanded;
  };
}
