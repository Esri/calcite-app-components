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
  base: "calcite-action",
  iconContainer: "calcite-action__icon-container",
  text: "calcite-action__text"
};

@Component({
  tag: "calcite-action",
  styleUrl: "calcite-action.scss",
  shadow: true
})
export class CalciteAction {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) active = false;

  @Prop({ reflect: true }) group = "default";

  @Prop({ reflect: true }) indicator = false;

  @Prop() label: string = null;

  @Prop() text: string = null;

  clickHandler() {
    this.actionClick.emit(this);
  }

  @Event() actionClick: EventEmitter;

  render() {
    const { label, text } = this;

    const iconNode = (
      <span class={CSS.iconContainer}>
        <slot name="action-icon" />
      </span>
    );

    const textNode = text ? <span class={CSS.text}>{text}</span> : null;

    return (
      <Host>
        <button
          class={CSS.base}
          aria-label={label}
          onClick={this.clickHandler.bind(this)}
        >
          {iconNode}
          {textNode}
        </button>
      </Host>
    );
  }
}
