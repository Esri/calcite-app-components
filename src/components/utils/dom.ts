import { CalciteLayout, CalcitePosition } from "../interfaces";

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

export function getCalcitePosition(position: CalcitePosition, layout: CalciteLayout): CalcitePosition {
  if (position) {
    return position;
  }

  if (layout) {
    return layout === "trailing" ? "end" : "start";
  }
}

interface GetSlottedOptions {
  all?: boolean;
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
    return Array.from(element.querySelectorAll<T>(selector));
  }

  return element.querySelector<T>(selector);
}
