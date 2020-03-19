import { Component, Element, Host, Method, Prop, h, VNode } from "@stencil/core";
import { CalciteAppearance, CalciteColor, CalciteScale, CalciteTheme } from "../interfaces";
import { CSS, ICONS } from "./resources";
import { focusElement, getElementDir } from "../utils/dom";

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
   * Used to set the button's appearance. Default is outline.
   */
  @Prop({ reflect: true }) appearance: CalciteAppearance = "outline";

  /**
   * Used to set the button's color. Default is light.
   */
  @Prop({ reflect: true }) color: CalciteColor = "light";

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
   */
  @Prop() icon?: string = ICONS.plus;

  /**
   * Label of the FAB, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  @Prop() label?: string;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * Specifies the size of the fab.
   */
  @Prop({ reflect: true }) scale: CalciteScale = "s";

  /**
   * Text that accompanies the FAB icon.
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
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFabElement;

  private buttonEl: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async setFocus(): Promise<void> {
    focusElement(this.buttonEl);
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
    const {
      appearance,
      color,
      disabled,
      el,
      loading,
      scale,
      theme,
      textEnabled,
      icon,
      label,
      text
    } = this;
    const titleText = !textEnabled && text;
    const title = label || titleText;
    const dir = getElementDir(el);

    return (
      <Host>
        <calcite-button
          class={CSS.button}
          loading={loading}
          disabled={disabled}
          title={title}
          aria-label={label}
          theme={theme}
          dir={dir}
          scale={scale}
          icon={icon}
          round={true}
          floating={true}
          width="auto"
          appearance={appearance}
          color={color}
          ref={(buttonEl): void => {
            this.buttonEl = buttonEl;
          }}
        >
          {this.textEnabled ? this.text : null}
        </calcite-button>
      </Host>
    );
  }
}
