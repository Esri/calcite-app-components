import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";

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
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  active
  //----------------------------------

  @Prop({ reflect: true }) active = false;

  //----------------------------------
  //  indicator
  //----------------------------------

  @Prop({ reflect: true }) indicator = false;

  //----------------------------------
  //  label
  //----------------------------------

  @Prop() label: string = null;

  //----------------------------------
  //  text
  //----------------------------------

  @Prop() text: string = null;

  //----------------------------------
  //  textEnabled
  //----------------------------------

  @Prop({ reflect: true }) textEnabled = false;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event() calciteActionClick: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

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

    return (
      <Host>
        <button
          class={CSS.button}
          title={label}
          aria-label={label}
          onClick={this._clickHandler.bind(this)}
        >
          {iconContainerNode}
          {textContainerNode}
        </button>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _clickHandler(): void {
    this.calciteActionClick.emit(this);
  }
}
