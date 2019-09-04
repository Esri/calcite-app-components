import Sortable from "sortablejs";
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
import guid from "../utils/guid";
import { CSS, ICON_TYPES } from "./resources";

@Component({
  tag: "calcite-picker",
  styleUrl: "./calcite-picker.scss",
  shadow: true
})
export class CalcitePicker {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, the items will be sortable via drag and drop.
   * Only applies when mode is configuration
   */
  @Prop({ reflect: true }) dragEnabled = false;

  /**
   * Mode controls the presentation of the items in their selected and deselected states.
   * Selection mode shows either radio buttons or checkboxes depending on the value of multiple
   * Configuration mode relies on a color highlight on the edge of the item for selected
   * Mode must be set to configuration for drag and drop behavior to work.
   */
  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";

  /**
   * Multpile Works similar to standard radio buttons and checkboxes.
   * It also affects the presented icon when in Selection mode.
   * When true, a user can select multiple items at a time.
   * When false, only a single item can be selected at a time,
   * When false, selecting a new item will deselect any other selected items.
   */
  @Prop({ reflect: true }) multiple = false;

  /**
   * The heading label for the entire Picker.
   * Not to be confused with the heading for an individual item or for a sub-group of items.
   */
  @Prop({ reflect: true }) textHeading: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State() selectedValues: Map<string, HTMLCalcitePickerItemElement> = new Map();

  @State() dataForFilter: object[] = [];

  items: HTMLCalcitePickerItemElement[];

  lastSelectedItem: HTMLCalcitePickerItemElement = null;

  guid = `calcite-picker-${guid()}`;

  observer = new MutationObserver(() => this.setUpItems());

  sortables: Sortable[] = [];

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.setUpItems();
  }

  componentDidLoad() {
    this.observer.observe(this.el, { childList: true, subtree: true });
  }

  componentDidUnload() {
    this.observer.disconnect();
    if (this.dragEnabled && this.mode === "configuration") {
      this.cleanUpDragAndDrop();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calcitePickerSelectionChange: EventEmitter;

  @Listen("calcitePickerItemSelectedChange") calcitePickerItemSelectedChangeHandler(event) {
    event.stopPropagation(); // private event
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
    this.calcitePickerSelectionChange.emit(selectedValues);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpItems(): void {
    this.items = Array.from(this.el.querySelectorAll("calcite-picker-item"));
    this.items.forEach((item) => {
      const iconType = this.getIconType();
      if (iconType) {
        item.setAttribute("icon", iconType);
      } else {
        item.removeAttribute("icon");
      }
    });
    if (this.dragEnabled && this.mode === "configuration") {
      this.setUpDragAndDrop();
    }
    this.dataForFilter = this.getRowData();
  }

  setUpDragAndDrop(): void {
    const sortGroups = [this.el, ...Array.from(this.el.querySelectorAll("calcite-picker-group"))];
    sortGroups.forEach((sortGroup) => {
      this.sortables.push(
        Sortable.create(sortGroup, {
          group: this.el.id,
          handle: `.${CSS.dragHandle}`,
          draggable: "calcite-picker-item"
        })
      );
    });
  }

  cleanUpDragAndDrop(): void {
    this.sortables.forEach((sortable) => {
      sortable.destroy();
    });
  }

  deselectSiblingItems(item: HTMLCalcitePickerItemElement) {
    this.items.forEach((currentItem) => {
      if (currentItem !== item) {
        currentItem.toggleSelected(false);
        if (this.selectedValues.has(currentItem.value)) {
          this.selectedValues.delete(currentItem.value);
        }
      }
    });
  }

  selectSiblings(item: HTMLCalcitePickerItemElement) {
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

  handleFilter(filteredData) {
    const values = filteredData.map((item) => item.value);
    this.items.forEach((row) => {
      row.toggleAttribute("hidden", values.indexOf(row.value) === -1);
    });
  }

  getRowData() {
    const result = [];
    this.items.forEach((row) => {
      const obj = {};
      Array.from(row.attributes).forEach((item: any) => {
        obj[item.name] = item.value;
      });
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
    const { multiple } = this;
    let type = null;
    if (this.mode === "configuration" && this.dragEnabled) {
      type = ICON_TYPES.grip;
    } else if (this.mode === "selection" && multiple) {
      type = ICON_TYPES.square;
    } else if (this.mode === "selection" && !multiple) {
      type = ICON_TYPES.circle;
    }
    return type;
  }

  render() {
    const id = this.el.id || this.guid;
    return (
      <Host id={id}>
        <section class={CSS.container}>
          <header>
            <h2>{this.textHeading}</h2>
            <calcite-filter
              data={this.dataForFilter}
              textPlaceholder="filter results"
              onCalciteFilterChange={(e) => this.handleFilter(e.detail)}
            />
          </header>
          <slot />
        </section>
      </Host>
    );
  }
}
