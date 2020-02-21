import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";
import { CalciteLayout, CalcitePosition, CalciteTheme } from "../interfaces";
import { CalciteExpandToggle, toggleChildActionText } from "../utils/CalciteExpandToggle";
import { CSS, SLOTS } from "./resources";
import { getCalcitePosition } from "../utils/dom";
import intl from "../intl/en-us";

/**
 * @slot bottom-actions - A slot for adding `calcite-action`s that will appear at the bottom of the action bar, above the collapse/expand button.
 * @slot - A slot for adding `calcite-action`s that will appear at the top of the action bar.
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

  @Watch("expand")
  expandHandler(expand: boolean) {
    if (expand) {
      toggleChildActionText({ parent: this.el, expanded: this.expanded });
    }
  }

  /**
   * Indicates whether widget is expanded.
   */
  @Prop({ reflect: true }) expanded = false;

  @Watch("expanded")
  expandedHandler(expanded: boolean) {
    if (this.expand) {
      toggleChildActionText({ parent: this.el, expanded });
    }

    this.calciteActionBarToggle.emit();
  }

  /**
   * Updates the label of the expand icon when the component is not expanded.
   * @deprecated since 5.4.0 - use "intlExpand" instead.
   */
  @Prop() textExpand?: string;

  /**
   * Updates the label of the expand icon when the component is not expanded.
   */
  @Prop() intlExpand?: string;

  /**
   * Updates the label of the collapse icon when the component is expanded.
   * @deprecated since 5.4.0 - use "intlCollapse" instead.
   */
  @Prop() textCollapse?: string;

  /**
   * Updates the label of the collapse icon when the component is expanded.
   */
  @Prop() intlCollapse?: string;

  /**
   * @deprecated since 5.3.0 - use "position" instead.
   * Arrangement of the component. Leading and trailing are different depending on if the direction is LTR or RTL. For example, "leading"
   * in a LTR app will appear on the left.
   */
  @Prop({ reflect: true }) layout: CalciteLayout;

  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  @Prop({ reflect: true }) position: CalcitePosition;

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

  // --------------------------------------------------------------------------
  //
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
    const { el, expand, expanded } = this;

    if (expand) {
      toggleChildActionText({ parent: el, expanded });
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  toggleExpand = (): void => {
    this.expanded = !this.expanded;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderBottomActionGroup() {
    const {
      expanded,
      expand,
      intlExpand,
      intlCollapse,
      textExpand,
      textCollapse,
      el,
      layout,
      position,
      toggleExpand
    } = this;

    const expandLabel = intlExpand || textExpand || intl.expand;
    const collapseLabel = intlCollapse || textCollapse || intl.collapse;

    const expandToggleNode = expand ? (
      <CalciteExpandToggle
        expanded={expanded}
        intlExpand={expandLabel}
        intlCollapse={collapseLabel}
        el={el}
        position={getCalcitePosition(position, layout)}
        toggleExpand={toggleExpand}
      />
    ) : null;

    return this.el.querySelector(`[slot=${SLOTS.bottomActions}]`) || expandToggleNode ? (
      <calcite-action-group class={CSS.actionGroupBottom}>
        <slot name={SLOTS.bottomActions} />
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
