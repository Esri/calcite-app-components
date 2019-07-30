import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

import { CalcitePlacement } from "../interfaces";

import { getOffsetTop } from "../utils/position";

import { x16 } from "@esri/calcite-ui-icons";

import CalciteIcon from "../_support/CalciteIcon";

import { CalciteTheme, getTheme } from "../../utils/dom";

const CSS = {
  header: "header",
  heading: "heading",
  content: "content"
};

@Component({
  tag: "calcite-floating-panel",
  styleUrl: "calcite-floating-panel.scss",
  shadow: true
})
export class CalciteFloatingPanel {
  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFloatingPanelElement;

  @State() offsetTop = 0;

  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Determines where the element will be displayed.
   * side: dynamically left or right based on whether we're in the primary or secondary shell-panel.
   * over: centered on top of trigger and covers trigger.
   * anchor: dynamically above or below based on how close trigger is to top or bottom of window.
   */
  @Prop({ reflect: true }) placement: CalcitePlacement;

  /**
   * Panel heading
   */
  @Prop({ reflect: true }) heading: string;

  /**
   * HTMLElement used to position this element according to the placement.
   */
  @Prop() positionElement: HTMLElement;

  /**
   * Element styling
   */
  @Prop({ reflect: true }) theme: CalciteTheme = getTheme(this.el);

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { offsetTop, theme } = this;

    const style = {
      top: `${offsetTop}px`
    };

    return (
      <Host style={style}>
        <header class={CSS.header}>
          <h3 class={CSS.heading}>{this.heading}</h3>
          <calcite-action onCalciteActionClick={this.hidePanel} theme={theme}>
            <CalciteIcon size="16" path={x16} />
          </calcite-action>
        </header>
        <div class={CSS.content}>
          <slot />
        </div>
      </Host>
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  @Watch("placement")
  placementHandler(newValue: CalcitePlacement) {
    this.offsetTop = getOffsetTop({
      floatingElement: this.el,
      placement: newValue,
      positionElement: this.positionElement
    });
  }

  @Watch("positionElement")
  positionElementHandler(newValue: HTMLElement) {
    this.offsetTop = getOffsetTop({
      floatingElement: this.el,
      placement: this.placement,
      positionElement: newValue
    });
  }

  hidePanel = () => {
    this.el.toggleAttribute("hidden", true);
  };
}
