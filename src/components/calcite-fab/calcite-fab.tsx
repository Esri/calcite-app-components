import { Component, Element, Host, Method, Prop, h } from "@stencil/core";
import { CalciteAppearance, CalciteExpandedScale, CalciteTheme } from "../interfaces";
import { CSS } from "./resources";
import { plus24 } from "@esri/calcite-ui-icons";

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
  /** Specify the appearance style of the fab, defaults to solid. */
  @Prop({ reflect: true }) appearance: CalciteAppearance = "solid";

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
   * Specifies the size of the fab.
   */
  @Prop({ reflect: true }) scale: CalciteExpandedScale = "m";

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
    const { disabled, theme, scale, appearance, loading, textEnabled, label, text } = this;

    const titleText = !textEnabled && text;
    const title = label || titleText;
    const iconPath = !loading ? plus24 : null;

    return (
      <Host>
        <calcite-button
          class={CSS.button}
          disabled={disabled}
          title={title}
          aria-label={label}
          theme={theme}
          scale={scale}
          round={true}
          floating={true}
          width="auto"
          icon={iconPath}
          appearance={appearance}
          color="blue"
          ref={(buttonEl) => (this.buttonEl = buttonEl)}
        >
          {loading ? (
            <calcite-loader
              class={{
                [CSS.loaderNoText]: !textEnabled
              }}
              is-active
              inline
            ></calcite-loader>
          ) : null}
          {textEnabled ? text : null}
        </calcite-button>
      </Host>
    );
  }
}
