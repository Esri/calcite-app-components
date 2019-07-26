import { Component, Element, Host, Prop, Watch, h } from "@stencil/core";

import { chevronLeft16F, chevronRight16F } from "@esri/calcite-ui-icons";

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
    const { expanded, expand, textExpand, textCollapse, el } = this;

    const rtl = el.dir === "rtl";

    const expandText = expanded ? textCollapse : textExpand;
    const icons = [chevronLeft16F, chevronRight16F];

    if (rtl) {
      icons.reverse();
    }

    const parentPrimary = el.parentElement.hasAttribute("primary");
    const expandIcon = parentPrimary ? icons[0] : icons[1];
    const collapseIcon = parentPrimary ? icons[1] : icons[0];

    return expand ? (
      <calcite-action
        onCalciteActionClick={this.toggleExpand}
        textEnabled={expanded}
        text={expandText}
      >
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d={expanded ? expandIcon : collapseIcon} />
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

  toggleExpand = (): void => {
    this.expanded = !this.expanded;
  };
}
