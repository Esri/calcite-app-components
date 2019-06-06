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
  //  disableText
  //----------------------------------

  @Prop({ reflect: true }) disableText = false;

  //----------------------------------
  //  indicator
  //----------------------------------

  @Prop({ reflect: true }) indicator = false;

  //----------------------------------
  //  label
  //----------------------------------

  @Prop() label: string = null;

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
    const { disableText, label } = this;

    const iconContainerNode = (
      <div key="icon-container" aria-hidden="true" class={CSS.iconContainer}>
        <slot name="icon" />
      </div>
    );

    const textContainerNode = disableText ? null : (
      <div key="text-container" class={CSS.textContainer}>
        <slot />
      </div>
    );

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
