import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import classnames from "classnames";

const CSS = {
  button: "button",
  compact: "compact",
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
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) active = false;

  @Prop({ reflect: true }) indicator = false;

  @Prop() label: string;

  @Prop() text: string;

  @Prop({ reflect: true }) textEnabled = false;

  /**
   * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
   */
  @Prop({ reflect: false }) compact = false;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

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

    const compactClass = this.compact ? CSS.compact : "";

    return (
      <Host>
        <button
          class={classnames(CSS.button, compactClass)}
          title={labelFallback}
          aria-label={labelFallback}
          onClick={this.clickHandler.bind(this)}
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

  clickHandler(): void {
    this.calciteActionClick.emit(this);
  }
}
