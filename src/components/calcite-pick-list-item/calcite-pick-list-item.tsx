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
import { checkSquare16, circle16, circleFilled16, drag16, square16 } from "@esri/calcite-ui-icons";
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

  /**
   * When true, the item cannot be clicked and is visually muted.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Determines the icon SVG symbol that will be shown. Options are circle, square, grid or null.
   */
  @Prop({ reflect: true }) icon: ICON_TYPES | null = null;

  /**
   * Used to provide additional metadata to an item, primarily used when the parent list has a filter.
   */
  @Prop() metadata: object;

  /**
   * Set this to true to pre-select an item. Toggles when an item is checked/unchecked.
   */
  @Prop() selected = false;

  /**
   * Compact removes the selection icon (radio or checkbox) and adds a compact attribute. This allows for a more compact version of the pick-list-item.
   */
  @Prop({ reflect: true }) compact = false;

  @Watch("selected")
  selectedWatchHandler(newValue) {
    if (this.isSelected !== newValue) {
      this.isSelected = newValue;
      this.emitChangeEvent();
    }
  }

  /**
   * @deprecated Replaced by textLabel.
   */
  @Prop({ reflect: true }) textHeading: string;

  /**
   * An optional description for this item.  This will appear below the label text.
   */
  @Prop({ reflect: true }) textDescription?: string;

  /**
   * The main label for this item. This will appear next to the icon.
   */
  @Prop({ reflect: true }) textLabel: string;

  /**
   * A unique value used to identify this item - similar to the value attribute on an <input>.
   */
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

  /**
   * Emitted whenever the item is selected or unselected.
   * @event calciteListItemChange
   * @type {object}
   * @property {string} value - The value of the item
   * @property {boolean} selected - True if the event was selected. False if deselected.
   */
  @Event() calciteListItemChange: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   * The second argument, when true, allows an event to be emitted, just as if a user had clicked.
   */
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

  pickListKeyDownHandler = (event: KeyboardEvent): void => {
    if (event.key === " ") {
      event.preventDefault();
      this.isSelected = !this.isSelected;
      this.emitChangeEvent(event.shiftKey);
    }
  };

  secondaryActionContainerClickHandler(event: MouseEvent) {
    event.stopPropagation();
  }

  emitChangeEvent(shiftPressed = false) {
    this.calciteListItemChange.emit({
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
    if (!icon || this.compact) {
      return null;
    }
    if (icon === ICON_TYPES.grip) {
      return (
        <span class={CSS.handle}>
          <CalciteIcon size="16" path={drag16} />
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
    const description = this.textDescription ? (
      <span class={CSS.description}>{this.textDescription}</span>
    ) : null;

    return (
      <Host
        class={classnames({
          [CSS_UTILITY.rtl]: this.dir === "rtl"
        })}
        onClick={this.pickListClickHandler}
        onKeydown={this.pickListKeyDownHandler}
        selected={this.isSelected}
        role="checkbox"
        aria-checked={this.isSelected}
        tabindex="0"
      >
        {this.renderIcon()}
        <label class={CSS.label}>
          <span class={CSS.title}>{this.textLabel || this.textHeading}</span>
          {description}
        </label>
        <div class={CSS.action} onClick={this.secondaryActionContainerClickHandler}>
          <slot name="secondaryAction" />
        </div>
      </Host>
    );
  }
}
