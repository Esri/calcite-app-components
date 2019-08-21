import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

import { CalcitePlacement, CalciteTheme } from "../interfaces";

import { getOffsetTop } from "../utils/position";

import { CSS } from "./resources";

import classnames from "classnames";

import { getElementDir } from "../utils/dom";

import { CSS_UTILITY } from "../utils/resources";

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
   * Determines where the element will be displayed.
   * side: dynamically left or right based on whether we're in a leading or trailing shell-panel.
   * over: centered on top of trigger and covers trigger.
   * anchor: dynamically above or below based on how close trigger is to top or bottom of window.
   */
  @Prop({ reflect: true }) placement: CalcitePlacement;

  /**
   * HTMLElement used to position this element according to the placement.
   */
  @Prop() positionElement: HTMLElement;

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellFloatingPanelElement;

  @State() offsetTop = 0;

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, offsetTop } = this;

    const style = {
      top: `${offsetTop}px`
    };

    const rtl = getElementDir(el) === "rtl";

    const closest = el.closest("calcite-shell-panel");
    const layout = (closest && closest.layout) || "leading";

    return (
      <Host>
        <div
          style={style}
          class={classnames(CSS.container, {
            [CSS_UTILITY.rtl]: rtl,
            [CSS.containerLeading]: layout === "leading",
            [CSS.containerTrailing]: layout === "trailing"
          })}
        >
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
}
