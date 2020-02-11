export function getElementDir(el: HTMLElement) {
  return getElementProp(el, "dir", "ltr");
}

export function getElementProp(el: HTMLElement, prop, value) {
  const closestWithProp = el.closest(`[${prop}]`);
  return closestWithProp ? closestWithProp.getAttribute(prop) : value;
}

export interface CalciteFocusableElement extends HTMLElement {
  setFocus?: () => void;
}

export function focusElement(el: CalciteFocusableElement): void {
  if (!el) {
    return;
  }

  "setFocus" in el && typeof el.setFocus === "function" ? el.setFocus() : el.focus();
}

export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options?: { all: true }
): NodeListOf<T>;
export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options?: { all: undefined | null | false }
): T | null;
export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options?: { all: boolean }
): (T | null) | NodeListOf<T> {
  const slottedSelector = `[slot="${slotName}"]`;

  if (options?.all) {
    return element.querySelectorAll<T>(slottedSelector);
  }

  return element.querySelector<T>(slottedSelector);
}
