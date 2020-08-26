import { Component, Element, h, Host, Listen, Method, Prop, VNode } from "@stencil/core";
import { ICON_TYPES } from "../calcite-pick-list/resources";
import guid from "../utils/guid";
import { CSS } from "../calcite-pick-list-item/resources";
import { ICONS } from "./resources";

/**
 * @slot secondary-action - A slot intended for adding a `calcite-action` or `calcite-button`. This is placed at the end of the item.
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
   * An optional description for this item. Will appear below the label text.
   */
  @Prop({ reflect: true }) description?: string;

  /**
   * When true, the item cannot be clicked and is visually muted
   */
  @Prop({ reflect: true }) disabled? = false;

  /**
   * @internal When false, the item cannot be deselected by user interaction.
   */
  @Prop() disableDeselect = false;

  /**
   * @internal - stores the activated state of the drag handle.
   */
  @Prop({ mutable: true }) handleActivated? = false;

  /**
   * Determines the icon SVG symbol that will be shown. Options are circle, square, grid or null.
   */
  @Prop({ reflect: true }) icon?: ICON_TYPES | null = null;

  /**
   * The main label for this item. Appears next to the icon.
   */
  @Prop({ reflect: true }) label!: string;

  /**
   * Used to provide additional metadata to an item, primarily used when the parent list has a filter.
   */
  @Prop() metadata?: Record<string, unknown>;

  /**
   * Set this to true to display a remove action that removes the item from the list.
   */
  @Prop({ reflect: true }) removable = false;

  /**
   * Set this to true to pre-select an item. Toggles when an item is checked/unchecked.
   */
  @Prop({ reflect: true, mutable: true }) selected = false;

  /**
   * The main label for this item. Appears next to the icon.
   *
   * @deprecated use label instead.
   */
  @Prop({ reflect: true }) textLabel!: string;

  /**
   * An optional description for this item. Will appear below the label text.
   *
   * @deprecated use description instead.
   */
  @Prop({ reflect: true }) textDescription?: string;

  /**
   * A unique value used to identify this item - similar to the value attribute on an <input>.
   */
  @Prop({ reflect: true }) value!: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteValueListItemElement;

  pickListItem: HTMLCalcitePickListItemElement = null;

  guid = `calcite-value-list-item-${guid()}`;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async toggleSelected(coerce?: boolean): Promise<void> {
    this.pickListItem.toggleSelected(coerce);
  }

  @Method()
  async setFocus(): Promise<void> {
    this.pickListItem?.setFocus();
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Listen("calciteListItemChange")
  calciteListItemChangeHandler(event: CustomEvent): void {
    // adjust item payload from wrapped item before bubbling
    event.detail.item = this.el;
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  getPickListRef = (el): HTMLCalcitePickListItemElement => (this.pickListItem = el);

  handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === " ") {
      this.handleActivated = !this.handleActivated;
    }
  };

  handleBlur = (): void => {
    this.handleActivated = false;
  };

  handleSelectChange = (event: CustomEvent): void => {
    this.selected = event.detail.selected;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHandle(): VNode {
    const { icon } = this;
    if (icon === ICON_TYPES.grip) {
      return (
        <span
          role="button"
          class={{ [CSS.handle]: true, [CSS.handleActivated]: this.handleActivated }}
          tabindex="0"
          data-js-handle="true"
          aria-pressed={this.handleActivated.toString()}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleBlur}
        >
          <calcite-icon scale="s" icon={ICONS.drag} />
        </span>
      );
    }
  }

  render(): VNode {
    return (
      <Host data-id={this.guid}>
        {this.renderHandle()}
        <calcite-pick-list-item
          ref={this.getPickListRef}
          disabled={this.disabled}
          disableDeselect={this.disableDeselect}
          selected={this.selected}
          metadata={this.metadata}
          removable={this.removable}
          textLabel={this.label || this.textLabel}
          textDescription={this.description || this.textDescription}
          onCalciteListItemChange={this.handleSelectChange}
          value={this.value}
        >
          <slot name="secondary-action" slot="secondary-action" />
        </calcite-pick-list-item>
      </Host>
    );
  }
}
