import { Component, Element, Event, EventEmitter, Host, Method, Prop, h } from "@stencil/core";
import {
  checkSquare16,
  circle16F,
  circleFilled16F,
  handleVertical24,
  square16
} from "@esri/calcite-ui-icons";
import { CSS } from "./resources";
import { ICON_TYPES } from "../calcite-picker/resources";
import CalciteIcon from "../utils/CalciteIcon";

@Component({
  tag: "calcite-picker-item",
  styleUrl: "./calcite-picker-item.scss",
  shadow: true
})
export class CalcitePickerItem {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) editing = false;

  @Prop() metadata: object;

  @Prop({ reflect: true, mutable: true }) selected = false;

  @Prop({ reflect: true }) icon: ICON_TYPES | null = null;

  @Prop({ reflect: true }) textHeading: string;

  @Prop({ reflect: true }) textDescription: string;

  @Prop({ reflect: true }) value: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  dir: "rtl" | "ltr";

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.dir = this.el.closest('[dir="rtl"]') ? "rtl" : "ltr";
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calcitePickerItemToggle: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async toggle(shiftPressed?: boolean) {
    this.selected = !this.selected;
    this.calcitePickerItemToggle.emit({
      item: this.el,
      value: this.value,
      selected: this.selected,
      shiftPressed
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  iconClickHandler(e) {
    this.toggle(e.shiftKey);
  }

  secondaryActionContainerClickHandler(e) {
    e.stopPropagation();
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderIcon() {
    const { icon } = this;
    if (!icon) {
      return null;
    }
    if (icon === ICON_TYPES.grip) {
      return (
        <span class="handle">
          <CalciteIcon size="24" path={handleVertical24} />
        </span>
      );
    } else {
      const path =
        icon === ICON_TYPES.square
          ? this.selected
            ? checkSquare16
            : square16
          : this.selected
          ? circleFilled16F
          : circle16F;
      return (
        <span class="icon">
          <CalciteIcon size="16" path={path} />
        </span>
      );
    }
  }

  render() {
    const { icon } = this;
    return (
      <Host
        dir={this.dir}
        class={icon !== ICON_TYPES.square && icon !== ICON_TYPES.circle ? CSS.highlight : null}
        onClick={this.iconClickHandler.bind(this)}
      >
        {this.renderIcon()}
        <div class={CSS.label}>
          <h4 class={CSS.heading}>{this.textHeading}</h4>
          <p class={CSS.description}>{this.textDescription}</p>
        </div>
        <div onClick={this.secondaryActionContainerClickHandler}>
          <slot name="secondaryAction" />
        </div>
      </Host>
    );
  }
}
