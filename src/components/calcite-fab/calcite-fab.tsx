import { Component, Element, Host, Method, Prop, h } from "@stencil/core";
import { CalciteTheme } from "../interfaces";
import { CSS, ICONS } from "./resources";
import classnames from "classnames";
import { getElementDir } from "../utils/dom";
import { CSS_UTILITY } from "../utils/resources";
import { VNode } from "@stencil/core/internal";

@Component({
  tag: "calcite-fab",
  styleUrl: "calcite-fab.scss",
  shadow: true
})
export class CalciteFab {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Label of the fab, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  @Prop() label?: string;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * Text that accompanies the fab icon.
   */
  @Prop() text?: string;

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

  @Element() el: HTMLCalciteFabElement;

  private buttonEl: HTMLCalciteButtonElement;

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async setFocus() {
    this.buttonEl.setFocus();
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, disabled, theme, textEnabled, label, text } = this;
    const rtl = getElementDir(el) === "rtl";
    const titleText = !textEnabled && text;
    const title = label || titleText;

    return (
      <Host>
        <calcite-button
          class={classnames(CSS.button, {
            [CSS.buttonTextless]: !textEnabled,
            [CSS_UTILITY.rtl]: rtl
          })}
          disabled={disabled}
          title={title}
          aria-label={label}
          theme={theme}
          scale="m"
          round={true}
          floating={true}
          width="auto"
          appearance="solid"
          color="blue"
          ref={(buttonEl) => (this.buttonEl = buttonEl)}
        >
          {this.renderButtonContent(rtl)}
        </calcite-button>
      </Host>
    );
  }

  renderText(): string {
    return this.textEnabled ? this.text : null;
  }

  renderIcon(): VNode {
    return this.loading ? (
      <calcite-loader is-active inline></calcite-loader>
    ) : (
      <calcite-icon icon={ICONS.plus} filled scale="s"></calcite-icon>
    );
  }

  renderButtonContent(rtl: boolean): (VNode | string)[] {
    const nodes = [this.renderIcon(), this.renderText()];

    if (rtl) {
      nodes.reverse();
    }

    return nodes;
  }
}
