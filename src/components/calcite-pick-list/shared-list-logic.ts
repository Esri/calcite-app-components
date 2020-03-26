import { CalcitePickList } from "./calcite-pick-list";
import { CalciteValueList } from "../calcite-value-list/calcite-value-list";
import { debounce } from "lodash-es";
import { getSlotted } from "../utils/dom";

type Lists = CalcitePickList | CalciteValueList;
type ListItemElement<T> = T extends CalcitePickList ? HTMLCalcitePickListItemElement : HTMLCalciteValueListItemElement;
type List<T> = T extends CalcitePickList ? CalcitePickList : CalciteValueList;

export function mutationObserverCallback<T extends Lists>(this: List<T>): void {
  this.setUpItems();
  this.setUpFilter();
}

// --------------------------------------------------------------------------
//
//  Lifecycle
//
// --------------------------------------------------------------------------

export function initialize<T extends Lists>(this: List<T>): void {
  this.setUpItems();
  this.setUpFilter();
  this.emitCalciteListChange = debounce(internalCalciteListChangeEvent.bind(this), 0);
}

export function initializeObserver<T extends Lists>(this: List<T>): void {
  this.observer.observe(this.el, { childList: true, subtree: true });
}

export function cleanUpObserver<T extends Lists>(this: List<T>): void {
  this.observer.disconnect();
}

// --------------------------------------------------------------------------
//
//  Listeners
//
// --------------------------------------------------------------------------

export function calciteListItemChangeHandler<T extends Lists>(this: List<T>, event: CustomEvent): void {
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
}

export function calciteListItemValueChangeHandler<T extends Lists>(this: List<T>, event: CustomEvent): void {
  event.stopPropagation();
  const oldValue = event.detail.oldValue;
  const selectedValues = this.selectedValues as Map<string, ListItemElement<T>>;

  if (selectedValues.has(oldValue)) {
    const item = selectedValues.get(oldValue);
    selectedValues.delete(oldValue);
    selectedValues.set(event.detail.newValue, item);
  }
}

// --------------------------------------------------------------------------
//
//  Private Methods
//
// --------------------------------------------------------------------------

export function internalCalciteListChangeEvent<T extends Lists>(this: List<T>): void {
  this.calciteListChange.emit(this.selectedValues);
}

export function setUpItems<T extends Lists>(
  this: List<T>,
  tagName: T extends CalcitePickList ? "calcite-pick-list-item" : "calcite-value-list-item"
): void {
  (this.items as ListItemElement<T>[]) = Array.from(this.el.querySelectorAll<ListItemElement<T>>(tagName));

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
}

export function setUpFilter<T extends Lists>(this: List<T>): void {
  if (this.filterEnabled) {
    this.dataForFilter = this.getItemData();
  }
}

export function deselectSiblingItems<T extends Lists>(this: List<T>, item: ListItemElement<T>): void {
  this.items.forEach((currentItem) => {
    if (currentItem.value !== item.value) {
      currentItem.toggleSelected(false);
      if (this.selectedValues.has(currentItem.value)) {
        this.selectedValues.delete(currentItem.value);
      }
    }
  });
}

export function selectSiblings<T extends Lists>(this: List<T>, item: ListItemElement<T>, deselect = false): void {
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
      this.selectedValues.set(currentItem.value, currentItem);
    } else {
      this.selectedValues.delete(currentItem.value);
    }
  });
}

export function handleFilter<T extends Lists>(this: List<T>, event: CustomEvent): void {
  const filteredData = event.detail;
  const values = filteredData.map((item) => item.value);
  this.items.forEach((item) => {
    const inGroup = item.parentElement.matches("calcite-pick-list-group");

    item.hidden = values.indexOf(item.value) === -1;

    // If item is in a group...
    if (inGroup) {
      const groupParent = getSlotted<ListItemElement<T>>(item.parentElement, "parent-item");
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
}

export function getItemData<T extends Lists>(
  this: List<T>
): { label: string; description: string; metadata: object; value: string }[] {
  return (this.items as ListItemElement<T>[]).map((item) => ({
    label: item.textLabel,
    description: item.textDescription,
    metadata: item.metadata,
    value: item.value
  }));
}
