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

/*
 ** node: HTMLElement - DOM reference to the node you want to move
 ** to: number - representing the ending index postiion.
 */
export function moveNode(node: HTMLElement, to: number) {
  const parent = node.parentElement;
  const children = parent.children;
  const from = Array.from(children).findIndex((child) => child === node);
  if (from === to) {
    return;
  }
  // If no node exists at the desired new index, or if it's the last element
  if (!children.item(to) || children.length - 1 === to) {
    // simply add the node to the end.
    parent.appendChild(node);
    // otherwise, if it's going forward in the DOM
  } else if (to > from) {
    // insert it before the element after the desired index. Since that one will move back one to fill its place.
    parent.insertBefore(node, children.item(to).nextElementSibling);
    // and if it's going backward in the DOM
  } else {
    // Move it just before the item that currently holds that spot. Since that one will get bumped forward.
    parent.insertBefore(node, children.item(to));
  }
}
