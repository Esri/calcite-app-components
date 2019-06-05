import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop
} from "@stencil/core";

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
  //  el
  //----------------------------------

  @Element() el: HTMLElement;

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
    const { label, text } = this;

    const iconContainerNode = (
      <div aria-hidden="true" class={CSS.iconContainer}>
        <slot />
      </div>
    );

    const textContainerNode = text ? (
      <div class={CSS.textContainer}>{text}</div>
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
