import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";

import { CalcitePlacement } from "../interfaces";

import { getOffsetTop } from "../utils/position";

import { x16 } from "@esri/calcite-ui-icons";

import CalciteIcon from "../utils/CalciteIcon";

import { CSS } from "./resources";

import classnames from "classnames";

import { getElementDir } from "../utils/dom";

import { CSS_UTILITY } from "../utils/resources";

@Component({
  tag: "calcite-shell-floating-panel",
  styleUrl: "calcite-shell-floating-panel.scss",
  shadow: true
})
export class CalciteShellFloatingPanel {
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
   * Panel heading
   */
  @Prop({ reflect: true }) heading: string;

  /**
   * HTMLElement used to position this element according to the placement.
   */
  @Prop() positionElement: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellFloatingPanelElement;

  @State() offsetTop = 0;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the component has been closed.
   */
  @Event() calciteShellFloatingPanelClose: EventEmitter;

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
    this.el.setAttribute("hidden", "");
    this.calciteShellFloatingPanelClose.emit();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { offsetTop, el } = this;

    const style = {
      top: `${offsetTop}px`
    };

    const closest = el.closest("calcite-shell-panel");
    const layout = (closest && closest.layout) || "leading";

    const rtl = getElementDir(el) === "rtl";

    return (
      <Host>
        <div
          class={classnames(CSS.container, {
            [CSS_UTILITY.rtl]: rtl,
            [CSS.containerLeading]: layout === "leading",
            [CSS.containerTrailing]: layout === "trailing"
          })}
          style={style}
        >
          <header class={CSS.header}>
            <h3 class={CSS.heading}>{this.heading}</h3>
            <calcite-action onClick={this.hidePanel}>
              <CalciteIcon size="16" path={x16} />
            </calcite-action>
          </header>
          <div class={CSS.content}>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
