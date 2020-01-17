import { Component, Element, Host, Method, Prop, h } from "@stencil/core";

import { CalciteAppearance, CalciteTheme } from "../interfaces";

import classnames from "classnames";

import { CSS } from "./resources";

import { CSS_UTILITY } from "../utils/resources";

import { getElementDir } from "../utils/dom";
import { VNode } from "@stencil/core/internal";

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
  /** Specify the appearance style of the action, defaults to solid. */
  @Prop({ reflect: true }) appearance: CalciteAppearance = "solid";

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
   * Label of the action, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  @Prop() label?: string;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * Text that accompanies the action icon.
   */
  @Prop() text!: string;

  /**
   * Indicates whether the text is displayed.
   */
  @Prop({ reflect: true }) textEnabled = false;

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

  private buttonEl: HTMLButtonElement;

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async setFocus() {
    this.buttonEl.focus();
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderTextContainer(): VNode {
    const { text, textEnabled } = this;

    const textContainerClasses = {
      [CSS.textContainerVisible]: textEnabled
    };

    return text ? (
      <div key="text-container" class={classnames(CSS.textContainer, textContainerClasses)}>
        {text}
      </div>
    ) : null;
  }

  renderIconContainer(): VNode {
    const { loading } = this;

    const slotContainerNode = (
      <div
        class={classnames(CSS.slotContainer, {
          [CSS.slotContainerHidden]: loading
        })}
      >
        <slot />
      </div>
    );

    const calciteLoaderNode = loading ? <calcite-loader is-active inline></calcite-loader> : null;

    return (
      <div key="icon-container" aria-hidden="true" class={CSS.iconContainer}>
        {slotContainerNode}
        {calciteLoaderNode}
      </div>
    );
  }

  render() {
    const { compact, disabled, loading, el, textEnabled, label, text } = this;

    const titleText = !textEnabled && text;
    const title = label || titleText;
    const rtl = getElementDir(el) === "rtl";

    const buttonClasses = {
      [CSS.buttonTextVisible]: textEnabled,
      [CSS.buttonCompact]: compact,
      [CSS_UTILITY.rtl]: rtl
    };

    return (
      <Host>
        <button
          class={classnames(CSS.button, buttonClasses)}
          title={title}
          aria-label={title}
          disabled={disabled}
          aria-disabled={disabled.toString()}
          aria-busy={loading.toString()}
          ref={(buttonEl) => (this.buttonEl = buttonEl)}
        >
          {this.renderIconContainer()}
          {this.renderTextContainer()}
        </button>
      </Host>
    );
  }
}
