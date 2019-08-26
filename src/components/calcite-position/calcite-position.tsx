import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalcitePlacement } from "../interfaces";

import classnames from "classnames";

import { getElementDir } from "../utils/dom";

import { CSS_UTILITY } from "../utils/resources";

import { getRect } from "../utils/position";

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

  @Watch("placement")
  placementHandler(newValue: CalcitePlacement) {
    const rect = getRect({
      placement: newValue,
      positionElement: this.positionElement
    });

    this.top = rect.top;
    this.left = rect.left;
  }

  /**
   * HTMLElement used to position this element according to the placement.
   */
  @Prop() positionElement: HTMLElement;

  @Watch("positionElement")
  positionElementHandler(newValue: HTMLElement) {
    const rect = getRect({
      placement: this.placement,
      positionElement: newValue
    });

    this.top = rect.top;
    this.left = rect.left;
  }

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

  @State() top = 0;

  @State() left = 0;

  @State() bottom = 0;

  @State() right = 0;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, top, left } = this;

    const style = {
      top: `${top}px`,
      right: null,
      bottom: null,
      left: `${left}px`
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
