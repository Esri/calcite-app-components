import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { CalciteTheme, getTheme } from "../../utils/dom";

const CSS = {
  button: "button",
  iconContainer: "icon-container",
  textContainer: "text-container"
};

@Component({
  tag: "calcite-action",
  styleUrl: "calcite-action.scss",
  shadow: true
})
export class CalciteAction {
  // --------------------------------------------------------------------------
  //
  //  Variables
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

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
   * Indicates unread changes.
   */
  @Prop({ reflect: true }) indicator = false;
  /**
   * Label of the action, exposed on hover.
   */
  @Prop() label: string;
  /**
   * Text that accompanies the action icon.
   */
  @Prop() text: string;
  /**
   * Indicates whether the text is displayed.
   */
  @Prop({ reflect: true }) textEnabled = false;

  /**
   * Element styling
   */
  @Prop({ reflect: true }) theme: CalciteTheme = getTheme(this.el);

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------
  /**
   * Emitted when an action has been clicked.
   */
  @Event() calciteActionClick: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { textEnabled, label, text } = this;

    const iconContainerNode = (
      <div key="icon-container" aria-hidden="true" class={CSS.iconContainer}>
        <slot />
      </div>
    );

    const textContainerNode = textEnabled ? (
      <div key="text-container" class={CSS.textContainer}>
        {text}
      </div>
    ) : null;

    const labelFallback = label || text;

    return (
      <Host>
        <button
          class={CSS.button}
          title={labelFallback}
          aria-label={labelFallback}
          onClick={this.clickHandler}
        >
          {iconContainerNode}
          {textContainerNode}
        </button>
      </Host>
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  clickHandler = (): void => {
    this.calciteActionClick.emit(this);
  };
}
