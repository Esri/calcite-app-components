import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";
import { CalciteLayout, CalcitePosition, CalciteTheme } from "../interfaces";
import { CalciteExpandToggle, toggleChildActionText } from "../utils/CalciteExpandToggle";
import { CSS } from "./resources";
import { getCalcitePosition } from "../utils/dom";
import locale from "../locale/en-us";

/**
 * @slot - A slot for adding `calcite-action`s to the action pad.
 */
@Component({
  tag: "calcite-action-pad",
  styleUrl: "calcite-action-pad.scss",
  shadow: true
})
export class CalciteActionPad {
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

    this.calciteActionPadToggle.emit();
  }

  /**
   * Updates the label of the expand icon when the component is not expanded.
   * @deprecated since 5.4.0 - use "localeExpand" instead.
   */
  @Prop() textExpand?: string;

  /**
   * Updates the label of the expand icon when the component is not expanded.
   */
  @Prop() localeExpand?: string;

  /**
   * Updates the label of the collapse icon when the component is expanded.
   * @deprecated since 5.4.0 - use "localeCollapse" instead.
   */
  @Prop() textCollapse?: string;

  /**
   * Updates the label of the collapse icon when the component is expanded.
   */
  @Prop() localeCollapse?: string;

  /**
   * @deprecated since 5.3.0 - use "position" instead.
   * Arrangement of the component.
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
  @Event() calciteActionPadToggle: EventEmitter;

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
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  renderBottomActionGroup() {
    const {
      expanded,
      expand,
      localeExpand,
      localeCollapse,
      textExpand,
      textCollapse,
      el,
      layout,
      position,
      toggleExpand
    } = this;

    const expandToggleNode = expand ? (
      <CalciteExpandToggle
        expanded={expanded}
        localeExpand={localeExpand || textExpand || locale.expand}
        localeCollapse={localeCollapse || textCollapse || locale.collapse}
        el={el}
        position={getCalcitePosition(position, layout)}
        toggleExpand={toggleExpand}
      />
    ) : null;

    return expandToggleNode ? (
      <calcite-action-group class={CSS.actionGroupBottom}>{expandToggleNode}</calcite-action-group>
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
