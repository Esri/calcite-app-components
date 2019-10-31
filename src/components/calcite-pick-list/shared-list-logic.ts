export const sharedListMethods = {
  getObserver: new MutationObserver(() => {
    this.setUpItems();
    this.setUpFilter();
  }),
  // LifeCycle functions
  initialize() {
    // connectedCallback
    this.setUpItems();
    this.setUpFilter();
  },
  initializeObserver() {
    // componentDidLoad
    this.observer.observe(this.el, { childList: true, subtree: true });
  },
  cleanUpObserver() {
    // componentDidUnload
    this.observer.disconnect();
  },
  // Listeners
  calciteListItemChangeHandler(event): void {
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
  setUpItems(tagname): void {
    this.items = Array.from(this.el.querySelectorAll(tagname));
    this.items.forEach((item) => {
      const iconType = this.getIconType();
      if (iconType) {
        item.setAttribute("icon", iconType);
      } else {
        item.removeAttribute("icon");
      }
      item.compact = this.compact; // only used by pickList but shouldn't hurt
      if (item.hasAttribute("selected")) {
        this.selectedValues.set(item.getAttribute("value"), item);
      }
    });
  },
  setUpFilter(): void {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  },
  deselectSiblingItems(item: HTMLCalcitePickListItemElement) {
    this.items.forEach((currentItem) => {
      if (currentItem !== item) {
        currentItem.toggleSelected(false);
        if (this.selectedValues.has(currentItem.value)) {
          this.selectedValues.delete(currentItem.value);
        }
      }
    });
  },
  selectSiblings(item: HTMLCalcitePickListItemElement) {
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
      currentItem.toggleSelected(true);
      this.selectedValues.set(currentItem.value, currentItem);
    });
  },
  handleFilter(event) {
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
  getItemData(): Record<string, string | object>[] {
    const result: Record<string, string | object>[] = [];
    this.items.forEach((item) => {
      const obj: Record<string, string | object> = {};
      obj.label = item.textLabel || item.textHeading;
      obj.description = item.textDescription;
      obj.metadata = item.metadata;
      obj.value = item.value;
      result.push(obj);
    });
    return result;
  }
};
export default sharedListMethods;
