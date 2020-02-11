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

  return "start";
}
