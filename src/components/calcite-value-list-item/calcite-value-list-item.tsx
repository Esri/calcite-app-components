import { Component, Element, Host, Method, Prop, h } from "@stencil/core";
import { ICON_TYPES } from "../calcite-pick-list/resources";

/**
 * @slot secondaryAction - A slot intended for adding a calcite-action or calcite-button. Placed at the end of the item.
 */
@Component({
  tag: "calcite-value-list-item",
  styleUrl: "./calcite-value-list-item.scss",
  shadow: true
})
export class CalciteValueListItem {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Compact reduces the size of the item.
   */
  @Prop({ reflect: true }) compact = false;

  /**
   * When true, the item cannot be clicked and is visually muted
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
   * The main label for this item. Appears next to the icon.
   */
  @Prop({ reflect: true }) textLabel: string;

  /**
   * An optional description for this item. Will appear below the label text.
   */
  @Prop({ reflect: true }) textDescription?: string;

  /**
   * A unique value used to identify this item - similar to the value attribute on an <input>.
   */
  @Prop({ reflect: true }) value: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteValueListItemElement;

  pickListItem: HTMLCalcitePickListItemElement = null;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async toggleSelected(coerce?: boolean, emit = false) {
    this.pickListItem.toggleSelected(coerce, emit);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  getPickListRef = (el) => (this.pickListItem = el as HTMLCalcitePickListItemElement);

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <calcite-pick-list-item
          compact={this.compact}
          ref={this.getPickListRef}
          disabled={this.disabled}
          selected={this.selected}
          metadata={this.metadata}
          icon={this.icon}
          textLabel={this.textLabel}
          textDescription={this.textDescription}
          value={this.value}
        >
          <slot name="secondaryAction" slot="secondaryAction" />
        </calcite-pick-list-item>
      </Host>
    );
  }
}
