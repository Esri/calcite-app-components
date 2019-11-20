import Sortable from "sortablejs";
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Method,
  Prop,
  State,
  h
} from "@stencil/core";
import guid from "../utils/guid";
import { CSS, ICON_TYPES, TEXT } from "./resources";
import { sharedListMethods } from "../calcite-pick-list/shared-list-logic";
import List from "../calcite-pick-list/shared-list-render";

const {
  mutationObserverCallback,
  initialize,
  initializeObserver,
  cleanUpObserver,
  calciteListItemChangeHandler,
  setUpItems,
  deselectSiblingItems,
  selectSiblings,
  handleFilter,
  getItemData
} = sharedListMethods;

/**
 * @slot - A slot for adding pick-list-item elements or pick-list-groups elements. Items are displayed as a vertical list.
 * @slot menu-actions - A slot for adding a button + menu combo for performing actions like sorting.
 */
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
   * Compact reduces the size of all items in the list.
   */
  @Prop({ reflect: true }) compact = false;

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * When true, the items will be sortable via drag and drop.
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
   * Multiple Works similar to standard radio buttons and checkboxes.
   * When true, a user can select multiple items at a time.
   * When false, only a single item can be selected at a time
   * and selecting a new item will deselect any other selected items.
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

  observer = new MutationObserver(mutationObserverCallback.bind(this));

  sortables: Sortable[] = [];

  @Element() el: HTMLCalciteValueListItemElement;

  emitCalciteListChange: () => void;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    initialize.call(this);
  }

  componentDidLoad() {
    this.setUpDragAndDrop();
    initializeObserver.call(this);
  }

  componentDidUnload() {
    cleanUpObserver.call(this);
    this.cleanUpDragAndDrop();
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
   * Emmitted when the order of the list has changed.
   * @event calciteListOrderChange
   */
  @Event() calciteListOrderChange: EventEmitter;

  @Listen("calciteListItemChange") calciteListItemChangeHandler(event: CustomEvent) {
    calciteListItemChangeHandler.call(this, event);
  }

  @Listen("calciteListItemPropsUpdated") calciteListItemPropsUpdatedHandler(event: CustomEvent) {
    event.stopPropagation();
    this.setUpFilter();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpItems(): void {
    setUpItems.call(this, "calcite-value-list-item");
  }

  setUpFilter(): void {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }

  setUpDragAndDrop(): void {
    if (!this.dragEnabled) {
      return;
    }
    this.sortables.push(
      Sortable.create(this.el, {
        group: this.guid,
        handle: `.${CSS.handle}`,
        draggable: "calcite-value-list-item",
        onUpdate: () => {
          this.items = Array.from(this.el.querySelectorAll("calcite-value-list-item"));
          const values = this.items.map((item) => item.value);
          this.calciteListOrderChange.emit(values);
        }
      })
    );
  }

  cleanUpDragAndDrop(): void {
    if (!this.dragEnabled) {
      return;
    }
    this.sortables.forEach((sortable) => {
      sortable.destroy();
    });
    this.sortables = [];
  }

  deselectSiblingItems = deselectSiblingItems.bind(this);

  selectSiblings = selectSiblings.bind(this);

  handleFilter = handleFilter.bind(this);

  getItemData = getItemData.bind(this);

  keyDownHandler = (event) => {
    const handleElement = event.composedPath().find((item) => {
      return item.dataset?.jsHandle;
    });
    const valueListElement = event.composedPath().find((item) => {
      return item.tagName?.toLowerCase() === "calcite-value-list-item";
    });
    // Only trigger keyboard sorting when the internal drag handle is focused and activated
    if (!handleElement || !valueListElement.handleActivated) {
      return;
    }
    const lastIndex = this.items.length - 1;
    const value = valueListElement.value;
    const startingIndex = this.items.findIndex((item) => {
      return item.value === value;
    });
    let appendInstead = false;
    let buddyIndex;
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (startingIndex === 0) {
          appendInstead = true;
        } else {
          buddyIndex = startingIndex - 1;
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (startingIndex === lastIndex) {
          buddyIndex = 0;
        } else if (startingIndex === lastIndex - 1) {
          appendInstead = true;
        } else {
          buddyIndex = startingIndex + 2;
        }
        break;
      default:
        return;
    }
    if (appendInstead) {
      valueListElement.parentElement.appendChild(valueListElement);
    } else {
      valueListElement.parentElement.insertBefore(valueListElement, this.items[buddyIndex]);
    }

    handleElement.focus();
    valueListElement.handleActivated = true;
  };

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async getSelectedItems(): Promise<Map<string, object>> {
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
    return <List props={this} text={TEXT} onKeyDown={this.keyDownHandler} />;
  }
}
