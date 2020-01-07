import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";

import { CalciteLayout, CalciteTheme } from "../interfaces";

import { CalciteExpandToggle, toggleChildActionText } from "../utils/CalciteExpandToggle";

import { CSS } from "./resources";

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

  /**
   * Indicates whether widget is expanded.
   */
  @Prop({ reflect: true }) expanded = false;

  @Watch("expanded")
  expandedHandler(expanded: boolean) {
    toggleChildActionText({ parent: this.el, expanded });

    this.calciteActionPadToggle.emit();
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
    const { el, expanded } = this;
    toggleChildActionText({ parent: el, expanded });
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
    const { expanded, expand, textExpand, textCollapse, el, layout, toggleExpand } = this;

    const expandToggleNode = expand ? (
      <CalciteExpandToggle
        expanded={expanded}
        textExpand={textExpand}
        textCollapse={textCollapse}
        el={el}
        layout={layout}
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
