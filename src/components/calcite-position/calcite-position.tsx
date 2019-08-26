import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalcitePlacement } from "../interfaces";

import classnames from "classnames";

import { getElementDir } from "../utils/dom";

import { CSS_UTILITY } from "../utils/resources";

import { getOffsetTop } from "../utils/position";

@Component({
  tag: "calcite-position",
  styleUrl: "calcite-position.scss",
  shadow: true
})
export class CalcitePosition {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Determines where the element will be displayed.
   * anchor: dynamically above or below based on how close trigger is to top or bottom of window.
   * leading: TODO
   * trailing: TODO
   */
  @Prop({ reflect: true }) placement: CalcitePlacement;

  /**
   * HTMLElement used to position this element according to the placement.
   */
  @Prop() positionElement: HTMLElement;

  /**
   * TODO
   */
  @Prop({ reflect: true }) xOffset: number;

  /**
   * TODO
   */
  @Prop({ reflect: true }) yOffset: number;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellFloatingPanelElement;

  @State() offsetTop = 0;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  @Watch("placement")
  placementHandler(newValue: CalcitePlacement) {
    this.offsetTop = getOffsetTop({
      placement: newValue,
      positionElement: this.positionElement
    });
  }

  @Watch("positionElement")
  positionElementHandler(newValue: HTMLElement) {
    this.offsetTop = getOffsetTop({
      placement: this.placement,
      positionElement: newValue
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, offsetTop } = this;

    const style = {
      top: `${offsetTop}px`,
      right: null,
      bottom: null,
      left: null
    };

    const rtl = getElementDir(el) === "rtl";

    return (
      <Host>
        <div
          style={style}
          class={classnames(CSS.container, {
            [CSS_UTILITY.rtl]: rtl
          })}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
