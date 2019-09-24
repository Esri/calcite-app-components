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
    });
    if (this.dragEnabled) {
      this.setUpDragAndDrop();
    }
  }

  setUpDragAndDrop(): void {
    const sortGroups = [
      this.el,
      ...Array.from(this.el.querySelectorAll("calcite-value-list-group"))
    ];
    sortGroups.forEach((sortGroup) => {
      this.sortables.push(
        Sortable.create(sortGroup, {
          group: this.el.id,
          handle: `.${CSS.handle}`,
          draggable: "calcite-value-list-item"
        })
      );
    });
  }

  cleanUpDragAndDrop(): void {
    this.sortables.forEach((sortable) => {
      sortable.destroy();
    });
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
    const id = this.el.id || this.guid;
    return (
      <Host id={id}>
        <section class={CSS.container}>
          <slot />
        </section>
      </Host>
    );
  }
}
