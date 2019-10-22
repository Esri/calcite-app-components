import { Component, Element, Host, Prop, h } from "@stencil/core";

import { CalciteTheme } from "../interfaces";

import classnames from "classnames";

import { CSS } from "./resources";

import { CSS_UTILITY } from "../utils/resources";

import { getElementDir } from "../utils/dom";

@Component({
  tag: "calcite-action",
  styleUrl: "calcite-action.scss",
  shadow: true
})
export class CalciteAction {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------
  /**
   * Indicates whether the action is highlighted.
   */
  @Prop({ reflect: true }) active = false;

  /**
   * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
   */
  @Prop({ reflect: true }) compact = false;

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Indicates unread changes.
   */
  @Prop({ reflect: true }) indicator = false;

  /**
   * Label of the action, exposed on hover.
   */
  @Prop() label: string;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * Text that accompanies the action icon.
   */
  @Prop() text: string;

  /**
   * @deprecated Use 'textDisplay' instead.
   */
  @Prop() textEnabled = false;

  /**
   * Indicates whether the text is displayed.
   */
  @Prop({ reflect: true }) textDisplay: "hidden" | "visible" | "interactive" = "hidden";

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Variables
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteActionElement;

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { compact, disabled, loading, el, textEnabled, textDisplay, label, text } = this;

    const iconContainerNode = (
      <div key="icon-container" aria-hidden="true" class={CSS.iconContainer}>
        {!loading ? <slot /> : <calcite-loader is-active inline></calcite-loader>}
      </div>
    );

    const calculatedTextDisplay = textEnabled ? "visible" : textDisplay;

    const textContainerNode =
      calculatedTextDisplay !== "hidden" ? (
        <div key="text-container" class={CSS.textContainer}>
          {text}
        </div>
      ) : null;

    const labelFallback = label || text;

    const rtl = getElementDir(el) === "rtl";

    const buttonClasses = {
      [CSS.buttonTextVisible]: calculatedTextDisplay === "visible",
      [CSS.buttonTextInteractive]: calculatedTextDisplay === "interactive",
      [CSS.buttonCompact]: compact,
      [CSS_UTILITY.rtl]: rtl
    };

    return (
      <Host>
        <button
          class={classnames(CSS.button, buttonClasses)}
          title={labelFallback}
          aria-label={labelFallback}
          disabled={disabled}
          aria-disabled={disabled}
          aria-busy={loading}
        >
          {iconContainerNode}
          {textContainerNode}
        </button>
      </Host>
    );
  }
}
