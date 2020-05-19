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
  const selector = buildSlottedSelector(slotName, options?.selector);

  if (options?.all) {
    return queryMultiple<T>(element, selector, options?.direct);
  }

  return querySingle<T>(element, selector, options?.direct);
}

function buildSlottedSelector(slotName: string, selector?: string): string {
  const slottedSelector = `[slot="${slotName}"]`;
  return selector ? `${slottedSelector} ${selector}` : slottedSelector;
}

function queryMultiple<T extends Element = Element>(element: Element, selector: string, direct?: boolean): T[] {
  const items = Array.from(element.querySelectorAll<T>(selector));

  if (!direct) {
    return items;
  }

  return items.filter((item) => item.parentElement === element);
}

function querySingle<T extends Element = Element>(element: Element, selector: string, direct?: boolean): T | null {
  const match = element.querySelector<T>(selector);

  if (!direct) {
    return match;
  }

  return match?.parentElement === element ? match : null;
}
