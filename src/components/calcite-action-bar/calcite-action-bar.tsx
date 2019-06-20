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

  @Prop({ reflect: true }) expanded = false;

  @Prop({ reflect: true }) expandToggle = true;

  @Prop() labels = {
    expand: "Expand",
    collapse: "Collapse"
  };

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

  renderExpandToggle() {
    const { expanded, expandToggle, labels, el } = this;

    const rtl = getElementDir(el) === "rtl";

    const expandText = expanded ? labels.collapse : labels.expand;

    const expandIcon = rtl ? chevronRight16F : chevronLeft16F;
    const collapseIcon = rtl ? chevronLeft16F : chevronRight16F;

    const expandPath = expanded ? (
      <path d={expandIcon} />
    ) : (
      <path d={collapseIcon} />
    );

    return expandToggle ? (
      <calcite-action
        onCalciteActionClick={this.toggleExpand.bind(this)}
        textEnabled={expanded}
        text={expandText}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          {expandPath}
        </svg>
      </calcite-action>
    ) : null;
  }

  renderBottomActionGroup() {
    const expandToggleNode = this.renderExpandToggle();

    return this.el.querySelector("[slot=bottom-actions]") ||
      expandToggleNode ? (
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
      .forEach(action =>
        newValue
          ? action.toggleAttribute("text-enabled")
          : action.removeAttribute("text-enabled")
      );
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
