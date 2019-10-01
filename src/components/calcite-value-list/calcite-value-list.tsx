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
import { CSS, ICON_TYPES, TEXT } from "./resources";

@Component({
  tag: "calcite-value-list",
  styleUrl: "./calcite-value-list.scss",
  shadow: true
})
export class CalciteValueList {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, the items will be sortable via drag and drop.
   */
  @Prop({ reflect: true }) dragEnabled = false;

  /**
   * Multpile Works similar to standard radio buttons and checkboxes.
   * When true, a user can select multiple items at a time.
   * When false, only a single item can be selected at a time,
   * When false, selecting a new item will deselect any other selected items.
   */
  @Prop({ reflect: true }) multiple = false;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State() selectedValues: Map<string, HTMLCalciteValueListItemElement> = new Map();

  @State() dataForFilter: object[] = [];

  items: HTMLCalciteValueListItemElement[];

  lastSelectedItem: HTMLCalciteValueListItemElement = null;

  guid = `calcite-value-list-${guid()}`;

  observer = new MutationObserver(() => this.setUpItems());

  sortables: Sortable[] = [];

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteValueListItemElement;

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
    if (this.dragEnabled) {
      this.cleanUpDragAndDrop();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calciteValueListSelectionChange: EventEmitter;

  @Event() calciteValueListOrderChange: EventEmitter;

  @Listen("calciteValueListItemSelectedChange") calciteValueListItemSelectedChangeHandler(event) {
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
    this.calciteValueListSelectionChange.emit(selectedValues);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpItems(): void {
    this.items = Array.from(this.el.querySelectorAll("calcite-value-list-item"));
    this.items.forEach((item) => {
      const iconType = this.getIconType();
      if (iconType) {
        item.setAttribute("icon", iconType);
      } else {
        item.removeAttribute("icon");
      }
      if (item.hasAttribute("selected")) {
        this.selectedValues.set(item.getAttribute("value"), item);
      }
    });
    if (this.dragEnabled) {
      this.setUpDragAndDrop();
    }
    this.dataForFilter = this.getItemData();
  }

  setUpDragAndDrop(): void {
    const sortGroups = [this.el];
    sortGroups.forEach((sortGroup: HTMLElement) => {
      this.sortables.push(
        Sortable.create(sortGroup, {
          group: this.guid,
          handle: `.${CSS.handle}`,
          draggable: "calcite-value-list-item",
          onUpdate: () => {
            this.items = Array.from(this.el.querySelectorAll("calcite-value-list-item"));
            const values = this.items.map((item) => item.value);
            this.calciteValueListOrderChange.emit(values);
          }
        })
      );
    });
  }

  cleanUpDragAndDrop(): void {
    this.sortables.forEach((sortable) => {
      sortable.destroy();
    });
    this.sortables = [];
  }

  deselectSiblingItems(item: HTMLCalciteValueListItemElement) {
    this.items.forEach((currentItem) => {
      if (currentItem !== item) {
        currentItem.toggleSelected(false);
        if (this.selectedValues.has(currentItem.value)) {
          this.selectedValues.delete(currentItem.value);
        }
      }
    });
  }

  selectSiblings(item: HTMLCalciteValueListItemElement) {
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
    let type = null;
    if (this.dragEnabled) {
      type = ICON_TYPES.grip;
    }
    return type;
  }

  render() {
    return (
      <Host>
        <header>
          <calcite-filter
            data={this.dataForFilter}
            textPlaceholder={TEXT.filterPlaceholder}
            onCalciteFilterChange={this.handleFilter}
          />
        </header>
        <slot />
      </Host>
    );
  }
}
