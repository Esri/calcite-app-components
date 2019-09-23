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
  circle16,
  circleFilled16,
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

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePickListItemElement;

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
          ? circleFilled16
          : circle16;
      return (
        <span class="icon">
          <CalciteIcon size="16" path={path} />
        </span>
      );
    }
  }

  render() {
    const { icon } = this;

    const description = this.textDescription ? (
      <span class={CSS.description}>{this.textDescription}</span>
    ) : null;

    return (
      <Host
        class={classnames({
          [CSS_UTILITY.rtl]: this.dir === "rtl"
        })}
        highlight={icon !== ICON_TYPES.square && icon !== ICON_TYPES.circle}
        onClick={this.pickListClickHandler}
        selected={this.isSelected}
      >
        {this.renderIcon()}
        <label class={CSS.label}>
          <span class={CSS.title}>{this.textHeading}</span>
          {description}
        </label>
        <div class={CSS.action} onClick={this.secondaryActionContainerClickHandler}>
          <slot name="secondaryAction" />
        </div>
      </Host>
    );
  }
}
