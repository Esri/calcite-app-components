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
  text: "calcite-action__text"
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
  //  group
  //----------------------------------

  @Prop({ reflect: true }) group = "default";

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

  @Event() actionClick: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const { label, text } = this;

    const iconNode = (
      <span class={CSS.iconContainer}>
        <slot name="action-icon" />
      </span>
    );

    const textNode = text ? (
      <span aria-hidden="true" class={CSS.text}>
        {text}
      </span>
    ) : null;

    return (
      <Host>
        <button
          class={CSS.button}
          title={label}
          aria-label={label}
          onClick={this._clickHandler.bind(this)}
        >
          {iconNode}
          {textNode}
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
    this.actionClick.emit(this);
  }
}
