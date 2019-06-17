import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

const CSS = {
  button: "calcite-action__button",
  iconContainer: "calcite-action__icon-container",
  textContainer: "calcite-action__text-container"
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

    return (
      <Host>
        <button
          class={CSS.button}
          title={labelFallback}
          aria-label={labelFallback}
          onClick={this._clickHandler.bind(this)}
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

  private _clickHandler(): void {
    this.calciteActionClick.emit(this);
  }
}
