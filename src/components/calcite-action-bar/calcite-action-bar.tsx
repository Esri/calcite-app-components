import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";

import { chevronsLeft16, chevronsRight16 } from "@esri/calcite-ui-icons";
import CalciteIcon from "../utils/CalciteIcon";
import { CalciteLayout, CalciteTheme } from "../interfaces";

import { getElementDir } from "../utils/dom";

import { CSS } from "./resources";

/**
 * @slot bottom-actions - A slot for adding `calcite-actions` that will appear at the bottom of the action bar, above the collapse/expand button.
 */
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

  @Watch("expanded")
  expandedHandler(newValue: boolean) {
    this.setActionTextEnabled(newValue);

    this.calciteActionBarToggle.emit();
  }

  /**
   * Updates the label of the expand icon when the component is not expanded.
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
   * Used to set the component's color scheme.
   */

  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when expanded has been toggled.
   */
  @Event() calciteActionBarToggle: EventEmitter;

  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteActionBarElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad() {
    this.setActionTextEnabled(this.expanded);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  getClosestShellLayout(): CalciteLayout {
    const shellNode = this.el.closest("calcite-shell-panel");

    if (!shellNode) {
      return;
    }

    return shellNode.layout;
  }

  setActionTextEnabled(expanded: boolean): void {
    this.el.querySelectorAll("calcite-action").forEach((action) => (action.textEnabled = expanded));
  }

  toggleExpand = (): void => {
    this.expanded = !this.expanded;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

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
}
