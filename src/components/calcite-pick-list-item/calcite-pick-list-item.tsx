import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h
} from "@stencil/core";
import { CSS, ICONS } from "./resources";
import { ICON_TYPES } from "../calcite-pick-list/resources";

/**
 * @slot secondaryAction - A slot intended for adding a `calcite-action` or `calcite-button` to the right side of the card.
 * This is placed at the end of the item.
 */
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
   * Compact removes the selection icon (radio or checkbox) and adds a compact attribute.
   * This allows for a more compact version of the `calcite-pick-list-item`.
   */
  @Prop({ reflect: true }) compact? = false;

  /**
   * When true, the item cannot be clicked and is visually muted.
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   * When false, the item cannot be deselected by user interaction.
   */
  @Prop() disableDeselect = false;

  /**
   * Determines the icon SVG symbol that will be shown. Options are circle, square, grid or null.
   */
  @Prop({ reflect: true }) icon?: ICON_TYPES | null = null;

  /**
   * Used to provide additional metadata to an item, primarily used when the parent list has a filter.
   */
  @Prop() metadata?: object;

  @Watch("metadata") metadataWatchHandler() {
    this.calciteListItemPropsUpdated.emit();
  }

  /**
   * Set this to true to pre-select an item. Toggles when an item is checked/unchecked.
   */
  @Prop({ reflect: true, mutable: true }) selected = false;

  @Watch("selected")
  selectedWatchHandler() {
    this.calciteListItemChange.emit({
      item: this.el,
      value: this.value,
      selected: this.selected,
      shiftPressed: this.shiftPressed
    });

    this.shiftPressed = false;
  }

  /**
   * An optional description for this item.  This will appear below the label text.
   */
  @Prop({ reflect: true }) textDescription?: string;

  @Watch("textDescription") textDescriptionWatchHandler() {
    this.calciteListItemPropsUpdated.emit();
  }

  /**
   * The main label for this item. This will appear next to the icon.
   */
  @Prop({ reflect: true }) textLabel: string;

  @Watch("textLabel") textLabelWatchHandler() {
    this.calciteListItemPropsUpdated.emit();
  }

  /**
   * A unique value used to identify this item - similar to the value attribute on an <input>.
   */
  @Prop({ reflect: true }) value!: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePickListItemElement;

  shiftPressed: boolean;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted whenever the item is selected or unselected.
   * @event calciteListItemChange
   */
  @Event() calciteListItemChange: EventEmitter;

  /**
   * Emitted whenever the the item's textLabel, textDescription, value or metadata properties are modified.
   * @event calciteListItemPropsUpdated
   * @internal
   */
  @Event() calciteListItemPropsUpdated: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   */
  @Method() async toggleSelected(coerce?: boolean) {
    if (this.disabled) {
      return;
    }

    this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  pickListClickHandler = (event: MouseEvent): void => {
    if (this.disabled || (this.disableDeselect && this.selected)) {
      return;
    }

    this.shiftPressed = event.shiftKey;
    this.selected = !this.selected;
  };

  pickListKeyDownHandler = (event: KeyboardEvent): void => {
    if (event.key === " ") {
      event.preventDefault();
      if (this.disableDeselect && this.selected) {
        return;
      }
      this.selected = !this.selected;
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderIcon() {
    const { compact, icon, selected } = this;
    if (!icon || compact) {
      return null;
    }
    const iconName =
      icon === ICON_TYPES.square
        ? selected
          ? ICONS.checked
          : ICONS.unchecked
        : selected
        ? ICONS.selected
        : ICONS.unselected;
    return (
      <span class={CSS.icon}>
        <calcite-icon scale="s" icon={iconName} />
      </span>
    );
  }

  render() {
    const description =
      this.textDescription && !this.compact ? (
        <span class={CSS.description}>{this.textDescription}</span>
      ) : null;

    return (
      <Host role="menuitemcheckbox" aria-checked={this.selected.toString()}>
        <label
          class={CSS.label}
          onClick={this.pickListClickHandler}
          onKeyDown={this.pickListKeyDownHandler}
          tabIndex={0}
          aria-label={this.textLabel}
        >
          {this.renderIcon()}
          <div class={CSS.textContainer}>
            <span class={CSS.title}>{this.textLabel}</span>
            {description}
          </div>
        </label>
        <div class={CSS.action}>
          <slot name="secondaryAction" />
        </div>
      </Host>
    );
  }
}
