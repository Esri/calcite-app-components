import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  h
} from "@stencil/core";
import { ICON_TYPES, TEXT } from "./resources";
import { VNode } from "@esri/calcite-components/dist/types/stencil.core";
import CalciteScrim from "../utils/CalciteScrim";

/**
 * @slot menu-actions - A slot for adding a button + menu combo for performing actions like sorting.
 */
@Component({
  tag: "calcite-pick-list",
  styleUrl: "./calcite-pick-list.scss",
  shadow: true
})
export class CalcitePickList {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * @deprecated Prop is ignored. Prop will be removed in a future release.
   */
  @Prop({ reflect: true }) dragEnabled = false;

  /**
   * When true, an input appears at the top of the list that can be used by end users to filter items in the list.
   */
  @Prop({ reflect: true }) filterEnabled = false;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * @deprecated Prop is ignored. Prop will be removed in a future release.
   */
  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";
  /**
   * Multiple works like conventional checkboxes and radio buttons.
   * When true, a user can select multiple items at a time.
   * When false, only a single item can be selected at a time
   * and selecting a new item will deselect any other selected items.
   */
  @Prop({ reflect: true }) multiple = false;

  /**
   * Compact removes the selection icon (radio or checkbox) and adds a compact attribute.
   * This allows for a more compact version of the pick-list-item.
   */
  @Prop({ reflect: true }) compact = false;

  /**
   * @deprecated No longer rendered. Prop will be removed in a future release.
   */
  @Prop({ reflect: true }) textHeading: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State() selectedValues: Map<string, HTMLCalcitePickListItemElement> = new Map();

  @State() dataForFilter: object[] = [];

  items: HTMLCalcitePickListItemElement[];

  lastSelectedItem: HTMLCalcitePickListItemElement = null;

  observer = new MutationObserver(() => this.setUpItems());

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePickListElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.setUpItems();
  }

  componentDidLoad() {
    this.items.forEach((item) => {
      if (item.hasAttribute("selected")) {
        this.selectedValues.set(item.getAttribute("value"), item);
      }
    });
    this.observer.observe(this.el, { childList: true, subtree: true });
  }

  componentDidUnload() {
    this.observer.disconnect();
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when any of the item selections have changed.
   * @event calciteListChange
   */
  @Event() calciteListChange: EventEmitter;

  /**
   * @event calcitePickListSelectionChange
   * @deprecated use calciteListChange instead.
   */
  @Event() calcitePickListSelectionChange: EventEmitter;

  @Listen("calciteListItemChange") calciteListItemChangeHandler(event) {
    const { selectedValues } = this;
    const { item, value, selected, shiftPressed } = event.detail;
    if (selected) {
      if (!this.multiple) {
        this.deselectSiblingItems(item);
      }
      if (this.multiple && shiftPressed) {
        this.selectSiblings(item);
      }
      selectedValues.set(value, item);
    } else {
      selectedValues.delete(value);
    }
    this.lastSelectedItem = item;
    this.calciteListChange.emit(selectedValues);
    this.calcitePickListSelectionChange.emit(selectedValues);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpItems(): void {
    this.items = Array.from(this.el.querySelectorAll("calcite-pick-list-item"));
    this.items.forEach((item) => {
      const iconType = this.getIconType();
      const compactString = this.compact ? "true" : "false";
      item.setAttribute("icon", iconType);
      item.setAttribute("compact", compactString);

      if (item.hasAttribute("selected")) {
        this.selectedValues.set(item.getAttribute("value"), item);
      }
    });
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }

  deselectSiblingItems(item: HTMLCalcitePickListItemElement) {
    this.items.forEach((currentItem) => {
      if (currentItem !== item) {
        currentItem.toggleSelected(false);
        if (this.selectedValues.has(currentItem.value)) {
          this.selectedValues.delete(currentItem.value);
        }
      }
    });
  }

  selectSiblings(item: HTMLCalcitePickListItemElement) {
    if (!this.lastSelectedItem) {
      return;
    }
    const { items } = this;
    const start = items.indexOf(this.lastSelectedItem);
    const end = items.indexOf(item);
    items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
      currentItem.toggleSelected(true);
      this.selectedValues.set(currentItem.value, currentItem);
    });
  }

  handleFilter = (event) => {
    const filteredData = event.detail;
    const values = filteredData.map((item) => item.value);
    this.items.forEach((item) => {
      if (values.indexOf(item.value) === -1) {
        item.setAttribute("hidden", "");
      } else {
        item.removeAttribute("hidden");
      }
    });
  };

  getItemData(): Record<string, string | object>[] {
    const result: Record<string, string | object>[] = [];
    this.items.forEach((item) => {
      const obj: Record<string, string | object> = {};
      Array.from(item.attributes).forEach((attr) => {
        obj[attr.name] = attr.value;
      });
      obj.metadata = item.metadata;
      result.push(obj);
    });
    return result;
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async getSelectedItems(): Promise<object> {
    return this.selectedValues;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  getIconType(): ICON_TYPES | null {
    let type = ICON_TYPES.circle;
    if (this.multiple) {
      type = ICON_TYPES.square;
    }
    return type;
  }

  renderScrim(): VNode {
    return this.loading || this.disabled ? (
      <CalciteScrim loading={this.loading}></CalciteScrim>
    ) : null;
  }

  render() {
    const { disabled, loading } = this;
    return (
      <Host aria-disabled={disabled} aria-busy={loading}>
        <header>
          {this.filterEnabled ? (
            <calcite-filter
              data={this.dataForFilter}
              textPlaceholder={TEXT.filterPlaceholder}
              aria-label={TEXT.filterPlaceholder}
              onCalciteFilterChange={this.handleFilter}
            />
          ) : null}
          <slot name="menu-actions" />
        </header>
        <slot />
        {this.renderScrim()}
      </Host>
    );
  }
}
