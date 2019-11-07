// copied over from https://github.com/Esri/calcite-components/blob/master/src/utils/dom.ts
// to work around issue where calcite-components are bundled in the distributable
// see https://github.com/Esri/calcite-app-components/issues/190 for more info

// turn a domNodeList into an array
export function nodeListToArray(domNodeList): Element[] {
  if (Array.isArray(domNodeList)) {
    return domNodeList;
  } else {
    return Array.prototype.slice.call(domNodeList);
  }
}

export function arraymove(arr, fromIndex, toIndex) {
  const value = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, value);
  return arr;
}

export function getElementDir(el: HTMLElement) {
  return getElementProp(el, "dir", "ltr");
}

export function getElementTheme(el: HTMLElement) {
  return getElementProp(el, "theme", "light");
}

export function getElementProp(el: HTMLElement, prop, value) {
  const closestWithProp = el.closest(`[${prop}]`);
  return closestWithProp ? closestWithProp.getAttribute(prop) : value;
}

export function hasSlottedContent(el: HTMLSlotElement) {
  const assignedNodes = el && el.assignedNodes();
  return assignedNodes && assignedNodes.length > 0;
}

export function getSlottedElements<T extends Element>(wrapperEl: Element, selector: string) {
  const slot: HTMLSlotElement = wrapperEl.querySelector("slot");
  const elements = slot ? slot.assignedElements() : wrapperEl.children;
  return nodeListToArray(elements).filter((el) => el.matches(selector)) as T[];
}
