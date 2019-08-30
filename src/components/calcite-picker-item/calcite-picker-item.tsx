import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";
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

  @Prop() selected = false;

  @Watch("selected")
  selectedWatchHandler(newValue, oldValue) {
    if (this.isSelected !== newValue) {
      this.isSelected = newValue;
      this.emitToggleEvent();
    }
  }

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

  @State() isSelected = this.selected;

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

  @Method() async toggle(coerce?: boolean, emit = false) {
    this.isSelected = typeof coerce === "boolean" ? coerce : !this.isSelected;
    if (emit) {
      this.emitToggleEvent();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  pickerClickHandler(event: MouseEvent) {
    this.isSelected = !this.isSelected;
    this.emitToggleEvent(event.shiftKey);
  }

  secondaryActionContainerClickHandler(event: MouseEvent) {
    event.stopPropagation();
  }

  emitToggleEvent(shiftPressed = false) {
    this.calcitePickerItemToggle.emit({
      item: this.el,
      value: this.value,
      selected: this.isSelected,
      shiftPressed
    });
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
          ? this.isSelected
            ? checkSquare16
            : square16
          : this.isSelected
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
        onClick={this.pickerClickHandler.bind(this)}
        selected={this.isSelected}
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
