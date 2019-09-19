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
import classnames from "classnames";
import { CSS } from "./resources";
import { ICON_TYPES } from "../calcite-pick-list/resources";
import { CSS_UTILITY } from "../utils/resources";
import CalciteIcon from "../utils/CalciteIcon";
import { getElementDir } from "../utils/dom";

@Component({
  tag: "calcite-pick-list-item",
  styleUrl: "./calcite-pick-list-item.scss",
  shadow: true
})
export class CalcitePickListItem {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) editing = false;

  @Prop() selected = false;

  @Watch("selected")
  selectedWatchHandler(newValue) {
    if (this.isSelected !== newValue) {
      this.isSelected = newValue;
      this.emitChangeEvent();
    }
  }

  @Prop({ reflect: true }) icon: ICON_TYPES | null = null;

  @Prop({ reflect: true }) textHeading: string;

  @Prop({ reflect: true }) textDescription: string;

  @Prop({ reflect: true }) value: string;

  @Prop({ reflect: true }) disabled = false;

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
    this.dir = getElementDir(this.el);
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calcitePickListItemSelectedChange: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async toggleSelected(coerce?: boolean, emit = false) {
    if (this.disabled) {
      return;
    }
    this.isSelected = typeof coerce === "boolean" ? coerce : !this.isSelected;
    if (emit) {
      this.emitChangeEvent();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  pickListClickHandler = (event: MouseEvent): void => {
    if (this.disabled) {
      return;
    }
    this.isSelected = !this.isSelected;
    this.emitChangeEvent(event.shiftKey);
  };

  secondaryActionContainerClickHandler(event: MouseEvent) {
    event.stopPropagation();
  }

  emitChangeEvent(shiftPressed = false) {
    this.calcitePickListItemSelectedChange.emit({
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
        <span class={CSS.handle}>
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
        class={classnames({
          [CSS.highlight]: icon !== ICON_TYPES.square && icon !== ICON_TYPES.circle,
          [CSS_UTILITY.rtl]: this.dir === "rtl"
        })}
        onClick={this.pickListClickHandler}
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
