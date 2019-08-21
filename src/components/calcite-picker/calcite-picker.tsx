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

  @Prop({ reflect: true }) editEnabled = false; /* ignored unless mode is configuration */

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

  @State() selectedValues = {};

  items: HTMLCalcitePickerItemElement[];

  lastSelectedItem: HTMLCalcitePickerItemElement = null;

  guid = `calcite-picker-${guid()}`;

  observer = new MutationObserver(() => this.setupItems());

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
    this.setupItems();
  }

  componentDidLoad() {
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

  @Event() calcitePickerSelectionChange: EventEmitter;

  @Listen("calcitePickerItemToggle") calcitePickerItemToggleHandler(event) {
    event.stopPropagation(); // private event
    const { items, selectedValues } = this;
    const { item, value, selected, shiftPressed } = event.detail;
    if (selected) {
      if (this.multiple && shiftPressed && this.lastSelectedItem) {
        const start = items.indexOf(this.lastSelectedItem);
        const end = items.indexOf(item);
        items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
          currentItem.setAttribute("selected", "");
          selectedValues[currentItem.value] = currentItem;
        });
      } else {
        selectedValues[value] = item;
      }
    } else {
      delete selectedValues[value];
    }
    if (!this.multiple && selected) {
      items.forEach((currentItem) => {
        if (currentItem !== item) {
          this.deselectItem(currentItem);
        }
      });
    }
    this.lastSelectedItem = item;
    this.calcitePickerSelectionChange.emit(selectedValues);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setupItems(): void {
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
  }

  setUpDragAndDrop(): void {
    const sortGroups = [this.el, ...Array.from(this.el.querySelectorAll("calcite-picker-group"))];
    sortGroups.forEach((sortGroup) => {
      Sortable.create(sortGroup, {
        group: this.el.id,
        handle: `.${CSS.dragHandle}`,
        draggable: "calcite-picker-item"
      });
    });
  }

  deselectItem(item: HTMLCalcitePickerItemElement): void {
    item.removeAttribute("selected");
    if (item.value in this.selectedValues) {
      delete this.selectedValues[item.value];
    }
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
            {/* <filter /> */}
          </header>
          <slot />
        </section>
      </Host>
    );
  }
}
