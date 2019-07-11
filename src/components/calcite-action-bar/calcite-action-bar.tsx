import { Component, Element, Host, Prop, Watch, h } from "@stencil/core";

import { chevronLeft16F, chevronRight16F } from "@esri/calcite-ui-icons";

import { getElementDir } from "calcite-components/dist/collection/utils/dom";

const CSS = {
  actionGroupBottom: "action-group--bottom"
};

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

  @Prop({ reflect: true }) expand = true;

  @Prop({ reflect: true }) expanded = false;

  @Prop() textExpand = "Expand";

  @Prop() textCollapse = "Collapse";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderExpandToggle() {
    const { expanded, expand, textExpand, textCollapse, el } = this;

    const rtl = getElementDir(el) === "rtl";
    const closestPanel = el.closest("calcite-shell-panel");
    const primary = closestPanel && closestPanel.hasAttribute("primary");

    const expandText = expanded ? textCollapse : textExpand;

    const expandIcon = primary ? chevronLeft16F : chevronRight16F;
    const collapseIcon = primary ? chevronRight16F : chevronLeft16F;

    const expandIconDir = rtl ? collapseIcon : expandIcon;
    const collapseIconDir = rtl ? expandIcon : collapseIcon;

    return expand ? (
      <calcite-action
        onCalciteActionClick={this.toggleExpand.bind(this)}
        textEnabled={expanded}
        text={expandText}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d={expanded ? expandIconDir : collapseIconDir} />
        </svg>
      </calcite-action>
    ) : null;
  }

  renderBottomActionGroup() {
    const expandToggleNode = this.renderExpandToggle();

    return this.el.querySelector("[slot=bottom-actions]") || expandToggleNode ? (
      <calcite-action-group class={CSS.actionGroupBottom}>
        <slot name="bottom-actions" />
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
        newValue ? action.toggleAttribute("text-enabled") : action.removeAttribute("text-enabled")
      );
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
