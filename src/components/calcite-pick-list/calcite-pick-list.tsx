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

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State() selectedValues: Map<string, HTMLCalcitePickListItemElement> = new Map();

  @State() dataForFilter: object[] = [];

  items: HTMLCalcitePickListItemElement[];

  lastSelectedItem: HTMLCalcitePickListItemElement = null;

  guid = `calcite-pick-list-${guid()}`;

  observer = new MutationObserver(() => this.setUpItems());

  sortables: Sortable[] = [];

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

  @Event() calcitePickListSelectionChange: EventEmitter;

  @Listen("calcitePickListItemSelectedChange") calcitePickListItemSelectedChangeHandler(event) {
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
      if (iconType) {
        item.setAttribute("icon", iconType);
      } else {
        item.removeAttribute("icon");
      }
      if (item.hasAttribute("selected")) {
        this.selectedValues.set(item.getAttribute("value"), item);
      }
    });
    if (this.dragEnabled && this.mode === "configuration") {
      this.setUpDragAndDrop();
    }
    this.dataForFilter = this.getItemData();
  }

  setUpDragAndDrop(): void {
    const sortGroups = [
      this.el,
      ...Array.from(this.el.querySelectorAll("calcite-pick-list-group"))
    ];
    sortGroups.forEach((sortGroup) => {
      this.sortables.push(
        Sortable.create(sortGroup, {
          group: this.el.id,
          handle: `.${CSS.dragHandle}`,
          draggable: "calcite-pick-list-item"
        })
      );
    });
  }

  cleanUpDragAndDrop(): void {
    this.sortables.forEach((sortable) => {
      sortable.destroy();
    });
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

  getItemData(): Record<string, string>[] {
    const result: Record<string, string>[] = [];
    this.items.forEach((item) => {
      const obj: Record<string, string> = {};
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
            <calcite-filter
              data={this.dataForFilter}
              textPlaceholder={TEXT.filterPlaceholder}
              onCalciteFilterChange={this.handleFilter}
            />
          </header>
          <slot />
        </section>
      </Host>
    );
  }
}
