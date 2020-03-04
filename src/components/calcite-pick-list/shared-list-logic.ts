import { CalcitePickList } from "./calcite-pick-list";
import { CalciteValueList } from "../calcite-value-list/calcite-value-list";
import { debounce } from "lodash-es";

type ListItemElement = HTMLCalcitePickListItemElement | HTMLCalciteValueListItemElement;

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

  calciteListItemValueChangeHandler(this: CalcitePickList | CalciteValueList, event: CustomEvent): void {
    event.stopPropagation();
    const oldValue = event.detail.oldValue;
    if (this.selectedValues.has(oldValue)) {
      const item = this.selectedValues.get(oldValue);
      this.selectedValues.delete(oldValue);

      if ("dragEnabled" in this) {
        this.selectedValues.set(event.detail.newValue, item as HTMLCalciteValueListItemElement);
      } else {
        this.selectedValues.set(event.detail.newValue, item as HTMLCalcitePickListItemElement);
      }
    }
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
    if ("dragEnabled" in this) {
      this.items = Array.from(this.el.querySelectorAll<HTMLCalciteValueListItemElement>(tagname));
    } else {
      this.items = Array.from(this.el.querySelectorAll<HTMLCalcitePickListItemElement>(tagname));
    }

    this.items.forEach((item) => {
      item.icon = this.getIconType();
      item.compact = this.compact;
      if (!this.multiple) {
        item.disableDeselect = true;
      }
      if (item.selected) {
        this.selectedValues.set(item.value, item);
      }
    });
  },

  setUpFilter(this: CalcitePickList | CalciteValueList): void {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  },

  deselectSiblingItems(this: CalcitePickList | CalciteValueList, item: ListItemElement) {
    this.items.forEach((currentItem) => {
      if (currentItem.value !== item.value) {
        currentItem.toggleSelected(false);
        if (this.selectedValues.has(currentItem.value)) {
          this.selectedValues.delete(currentItem.value);
        }
      }
    });
  },

  selectSiblings(this: CalcitePickList | CalciteValueList, item: ListItemElement, deselect = false) {
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
    items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
      currentItem.toggleSelected(!deselect);
      if (!deselect) {
        if ("dragEnabled" in this) {
          this.selectedValues.set(currentItem.value, currentItem);
        } else {
          this.selectedValues.set(currentItem.value, currentItem);
        }
      } else {
        this.selectedValues.delete(currentItem.value);
      }
    });
  },

  handleFilter(this: CalcitePickList | CalciteValueList, event: CustomEvent): void {
    const filteredData = event.detail;
    const values = filteredData.map((item) => item.value);
    this.items.forEach((item) => {
      const inGroup = item.parentElement.matches("calcite-pick-list-group");

      item.hidden = values.indexOf(item.value) === -1;

      // If item is in a group...
      if (inGroup) {
        const groupParent = item.parentElement.querySelector("[slot=parent-item]") as ListItemElement;
        // If there is a group parent
        if (groupParent !== null) {
          // If the group parent is a match, show me.
          if (values.indexOf(groupParent.value) !== -1) {
            item.hidden = false;
          }
          // If I am a match, show my parent.
          if (values.indexOf(item.value) !== -1) {
            groupParent.hidden = false;
          }
        }
      }
    });
  },

  getItemData(this: CalcitePickList | CalciteValueList): Record<string, string | object>[] {
    const result: Record<string, string | object>[] = [];
    this.items.forEach((item: ListItemElement) => {
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
