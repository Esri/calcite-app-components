export function getElementDir(el: HTMLElement): "ltr" | "rtl" {
  return getElementProp(el, "dir", "ltr");
}

export function getElementProp(el: HTMLElement, prop, value): any {
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

interface GetSlottedOptions {
  all?: boolean;
  direct?: boolean;
  selector?: string;
}

export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options: GetSlottedOptions & { all: true }
): T[];
export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options?: GetSlottedOptions
): T | null;
export function getSlotted<T extends Element = Element>(
  element: Element,
  slotName: string,
  options?: GetSlottedOptions
): (T | null) | T[] {
  const slottedSelector = `[slot="${slotName}"]`;
  const selector = options?.selector ? `${slottedSelector} ${options.selector}` : slottedSelector;

  if (options?.all) {
    const matches = Array.from(element.querySelectorAll<T>(selector));
    return options.direct ? direct(element, matches) : matches;
  }

  const match = element.querySelector<T>(selector);
  return options?.direct ? direct(element, match) : match;
}

function direct<T extends Element = Element>(element: Element, itemsOrItem: T | T[]): T | T[] {
  if (Array.isArray(itemsOrItem)) {
    return itemsOrItem.filter((item) => item.parentElement === element);
  }

  return itemsOrItem.parentElement === element ? itemsOrItem : null;
}
