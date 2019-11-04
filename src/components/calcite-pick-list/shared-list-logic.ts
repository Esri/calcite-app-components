import { CalcitePickList } from "./calcite-pick-list";
import { CalciteValueList } from "../calcite-value-list/calcite-value-list";

export const sharedListMethods = {
  mutationObserverCallback(this: CalcitePickList | CalciteValueList) {
    this.setUpItems();
    this.setUpFilter();
  },
  // LifeCycle functions
  initialize(this: CalcitePickList | CalciteValueList) {
    // connectedCallback
    this.setUpItems();
    this.setUpFilter();
  },
  initializeObserver(this: CalcitePickList | CalciteValueList) {
    // componentDidLoad
    this.observer.observe(this.el, { childList: true, subtree: true });
  },
  cleanUpObserver(this: CalcitePickList | CalciteValueList) {
    // componentDidUnload
    this.observer.disconnect();
  },
  // Listeners
  calciteListItemChangeHandler(this: CalcitePickList | CalciteValueList, event): void {
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
    // this.calcitePickListSelectionChange.emit(selectedValues); picklist only
  },
  // Private Methods
  setUpItems(this: CalcitePickList | CalciteValueList, tagname): void {
    this.items = Array.from(this.el.querySelectorAll(tagname));
    this.items.forEach((item: HTMLCalcitePickListItemElement | HTMLCalciteValueListItemElement) => {
      const iconType = this.getIconType();
      if (iconType) {
        item.setAttribute("icon", iconType);
      } else {
        item.removeAttribute("icon");
      }
      item.compact = this.compact;
      if (item.hasAttribute("selected")) {
        this.selectedValues.set(item.getAttribute("value"), item);
      }
    });
  },
  setUpFilter(this: CalcitePickList | CalciteValueList): void {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  },
  deselectSiblingItems(
    this: CalcitePickList | CalciteValueList,
    item: HTMLCalcitePickListItemElement | HTMLCalciteValueListItemElement
  ) {
    this.items.forEach((currentItem) => {
      if (currentItem !== item) {
        currentItem.toggleSelected(false);
        if (this.selectedValues.has(currentItem.value)) {
          this.selectedValues.delete(currentItem.value);
        }
      }
    });
  },
  selectSiblings(
    this: CalcitePickList | CalciteValueList,
    item: HTMLCalcitePickListItemElement | HTMLCalciteValueListItemElement
  ) {
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
    items
      .slice(Math.min(start, end), Math.max(start, end))
      .forEach((currentItem: HTMLCalcitePickListItemElement | HTMLCalciteValueListItemElement) => {
        currentItem.toggleSelected(true);
        this.selectedValues.set(currentItem.value, currentItem);
      });
  },
  handleFilter(this: CalcitePickList | CalciteValueList, event) {
    const filteredData = event.detail;
    const values = filteredData.map((item) => item.value);
    this.items.forEach((item) => {
      if (values.indexOf(item.value) === -1) {
        item.setAttribute("hidden", "");
      } else {
        item.removeAttribute("hidden");
      }
    });
  },
  getItemData(this: CalcitePickList | CalciteValueList): Record<string, string | object>[] {
    const result: Record<string, string | object>[] = [];
    this.items.forEach((item: HTMLCalcitePickListItemElement | HTMLCalciteValueListItemElement) => {
      const obj: Record<string, string | object> = {};
      const textHeading = "textHeading" in item ? item.textHeading : "";
      obj.label = item.textLabel || textHeading;
      obj.description = item.textDescription;
      obj.metadata = item.metadata;
      obj.value = item.value;
      result.push(obj);
    });
    return result;
  }
};
export default sharedListMethods;
