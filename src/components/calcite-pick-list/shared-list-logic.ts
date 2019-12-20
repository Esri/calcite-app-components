import { CalcitePickList } from "./calcite-pick-list";
import { CalciteValueList } from "../calcite-value-list/calcite-value-list";
import { debounce } from "lodash-es";

type pickOrValueListItem = HTMLCalcitePickListItemElement | HTMLCalciteValueListItemElement;

export const sharedListMethods = {
  mutationObserverCallback(this: CalcitePickList | CalciteValueList): void {
    this.setUpItems();
    this.setUpFilter();
  },
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  initialize(this: CalcitePickList | CalciteValueList): void {
    this.setUpItems();
    this.setUpFilter();
    this.emitCalciteListChange = debounce(sharedListMethods.internalCalciteListChangeEvent.bind(this), 0);
  },
  initializeObserver(this: CalcitePickList | CalciteValueList): void {
    this.observer.observe(this.el, { childList: true, subtree: true });
  },
  cleanUpObserver(this: CalcitePickList | CalciteValueList): void {
    this.observer.disconnect();
  },
  // --------------------------------------------------------------------------
  //
  //  Listeners
  //
  // --------------------------------------------------------------------------
  calciteListItemChangeHandler(this: CalcitePickList | CalciteValueList, event: CustomEvent): void {
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
      if (this.multiple && shiftPressed) {
        this.selectSiblings(item, true);
      }
    }

    this.lastSelectedItem = item;
    this.emitCalciteListChange();
  },
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  internalCalciteListChangeEvent(this: CalcitePickList | CalciteValueList): void {
    this.calciteListChange.emit(this.selectedValues);
  },
  setUpItems(
    this: CalcitePickList | CalciteValueList,
    tagname: "calcite-pick-list-item" | "calcite-value-list-item"
  ): void {
    this.items = Array.from(this.el.querySelectorAll(tagname));
    this.items.forEach((item) => {
      item.icon = this.getIconType();
      item.compact = this.compact;
      if (!this.multiple) {
        item.disableDeselect = true;
      }
      if (item.selected) {
        this.selectedValues.set(item.value, item as pickOrValueListItem);
      }
    });
  },
  setUpFilter(this: CalcitePickList | CalciteValueList): void {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  },
  deselectSiblingItems(this: CalcitePickList | CalciteValueList, item: pickOrValueListItem) {
    this.items.forEach((currentItem) => {
      if (currentItem.value !== item.value) {
        currentItem.toggleSelected(false);
        if (this.selectedValues.has(currentItem.value)) {
          this.selectedValues.delete(currentItem.value);
        }
      }
    });
  },
  selectSiblings(this: CalcitePickList | CalciteValueList, item: pickOrValueListItem, deselect = false) {
    if (!this.lastSelectedItem) {
      return;
    }
    const { items } = this;
    const start = items.findIndex((currentItem) => {
      return currentItem.value === this.lastSelectedItem.value;
    });
    const end = items.findIndex((currentItem) => {
      return currentItem.value === item.value;
    });
    items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem: pickOrValueListItem) => {
      currentItem.toggleSelected(!deselect);
      if (!deselect) {
        this.selectedValues.set(currentItem.value, currentItem as pickOrValueListItem);
      } else {
        this.selectedValues.delete(currentItem.value);
      }
    });
  },
  handleFilter(this: CalcitePickList | CalciteValueList, event: CustomEvent): void {
    const filteredData = event.detail;
    const values = filteredData.map((item) => item.value);
    this.items.forEach((item) => {
      item.hidden = values.indexOf(item.value) === -1;
    });
  },
  getItemData(this: CalcitePickList | CalciteValueList): Record<string, string | object>[] {
    const result: Record<string, string | object>[] = [];
    this.items.forEach((item: pickOrValueListItem) => {
      const obj: Record<string, string | object> = {};
      obj.label = item.textLabel;
      obj.description = item.textDescription;
      obj.metadata = item.metadata;
      obj.value = item.value;
      result.push(obj);
    });
    return result;
  }
};
