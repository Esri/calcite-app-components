import { CalcitePickList } from "./calcite-pick-list";
import { CalciteValueList } from "../calcite-value-list/calcite-value-list";
import { debounce } from "lodash-es";
import { focusElement, getSlotted } from "../utils/dom";
import { getRoundRobinIndex } from "../utils/array";

type Lists = CalcitePickList | CalciteValueList;
type ListItemElement<T> = T extends CalcitePickList ? HTMLCalcitePickListItemElement : HTMLCalciteValueListItemElement;
type List<T> = T extends CalcitePickList ? CalcitePickList : CalciteValueList;

export function mutationObserverCallback<T extends Lists>(this: List<T>): void {
  this.setUpItems();
  this.setUpFilter();
}

const SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];

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

  if (!this.multiple) {
    toggleSingleSelectItemTabbing(item, selected);
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

function isValidNavigationKey(key: string): boolean {
  return !!SUPPORTED_ARROW_KEYS.find((k) => k === key);
}

export function keyDownHandler<T extends Lists>(this: List<T>, event: KeyboardEvent): void {
  const { key, target } = event;

  if (!isValidNavigationKey(key)) {
    return;
  }

  const { items, multiple } = this;
  const { length: totalItems } = items;
  const currentIndex = (items as ListItemElement<T>[]).indexOf(target as ListItemElement<T>);

  if (!totalItems || currentIndex === -1) {
    return;
  }

  event.preventDefault();

  const index = getRoundRobinIndex(currentIndex + (key === "ArrowUp" ? -1 : 1), totalItems);
  const item = items[index];

  toggleSingleSelectItemTabbing(item, true);
  focusElement(item);

  if (!multiple) {
    item.selected = true;
  }
}

export function internalCalciteListChangeEvent<T extends Lists>(this: List<T>): void {
  this.calciteListChange.emit(this.selectedValues);
}

function toggleSingleSelectItemTabbing<T extends Lists>(item: ListItemElement<T>, selectable: boolean): void {
  // using attribute intentionally
  if (selectable) {
    item.removeAttribute("tabindex");
  } else {
    item.setAttribute("tabindex", "-1");
  }
}

export function setFocus<T extends Lists>(this: List<T>): Promise<void> {
  const { multiple, items } = this;

  if (items.length === 0) {
    return;
  }

  if (multiple) {
    return items[0].setFocus();
  }

  const selected = (items as ListItemElement<T>[]).find((item) => item.selected);

  return (selected ? selected : items[0]).setFocus();
}

export function setUpItems<T extends Lists>(
  this: List<T>,
  tagName: T extends CalcitePickList ? "calcite-pick-list-item" : "calcite-value-list-item"
): void {
  (this.items as ListItemElement<T>[]) = Array.from(this.el.querySelectorAll<ListItemElement<T>>(tagName));
  let hasSelected = false;

  const { items } = this;

  items.forEach((item) => {
    item.icon = this.getIconType();
    if (!this.multiple) {
      item.disableDeselect = true;
      toggleSingleSelectItemTabbing(item, false);
    }
    if (item.selected) {
      hasSelected = true;
      toggleSingleSelectItemTabbing(item, true);
      this.selectedValues.set(item.value, item);
    }
  });

  const [first] = items;

  if (!hasSelected && first) {
    toggleSingleSelectItemTabbing(first, true);
  }
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

export type ItemData = {
  label: string;
  description: string;
  metadata: Record<string, unknown>;
  value: string;
}[];

export function getItemData<T extends Lists>(this: List<T>): ItemData {
  return (this.items as ListItemElement<T>[]).map((item) => ({
    label: item.textLabel,
    description: item.textDescription,
    metadata: item.metadata,
    value: item.value
  }));
}
