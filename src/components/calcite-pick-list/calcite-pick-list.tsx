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
   * Multpile Works similar to standard radio buttons and checkboxes.
   * When true, a user can select multiple items at a time.
   * When false, only a single item can be selected at a time,
   * When false, selecting a new item will deselect any other selected items.
   */
  @Prop({ reflect: true }) multiple = false;

  /**
   * DEPRECATED: No longer rendered. Prop will be removed in a future release.
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
      item.setAttribute("icon", iconType);

      if (item.hasAttribute("selected")) {
        this.selectedValues.set(item.getAttribute("value"), item);
      }
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

  render() {
    return (
      <Host>
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
