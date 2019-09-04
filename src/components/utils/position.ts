import { CalciteLayout, CalcitePlacementValue } from "../interfaces";

import { getElementDir } from "./dom";

interface CalcitePositionParams {
  placement: CalcitePlacementValue;
  positionElement: HTMLElement;
  xOffset: number;
  yOffset: number;
}

interface StylesParams {
  outerRect: ClientRect | DOMRect;
  elemRect: ClientRect | DOMRect;
  xOffset: number;
  yOffset: number;
  layout?: CalciteLayout;
  rtl?: boolean;
}

export interface CalcitePositionStyle {
  [key: string]: string | undefined;
}

function getOuterElement(positionElement: HTMLElement): HTMLElement {
  return positionElement.closest("calcite-shell") || document.body;
}

function getVerticalStyles({ layout, elemRect, outerRect, xOffset, yOffset }: StylesParams): CalcitePositionStyle {
  // TODO: FIGURE OUT TOP OR BOTTOM POSITIONING
  // - FIGURE OUT IF OUT OF SCROLL AREA
  // - FIGURE OUT IF OUT OF THE "OUTER ELEMENT"

  const top = elemRect.top - outerRect.top + yOffset;
  const bottom = outerRect.bottom - elemRect.bottom + yOffset;
  const left = elemRect.left - outerRect.left + xOffset;

  const useBottom = layout === "leading"; // TODO: DONT USE LAYOUT
  const useTop = layout === "trailing"; // TODO: DONT USE LAYOUT

  return {
    top: useTop ? `${top}px` : undefined,
    bottom: useBottom ? `${bottom}px` : undefined,
    left: `${left}px`
  };
}

function getHorizontalStyles({
  layout,
  elemRect,
  rtl,
  outerRect,
  xOffset,
  yOffset
}: StylesParams): CalcitePositionStyle {
  // TODO: FIGURE OUT WHERTHER TO POSITION LEFT OR RIGHT IF CAN'T GET LEADING/TRAILING VALUE
  // - FIGURE OUT IF OUT OF THE "OUTER ELEMENT"

  const top = elemRect.top - outerRect.top - elemRect.height + yOffset;
  const left = elemRect.left - outerRect.left + elemRect.width + xOffset;
  const right = outerRect.right - elemRect.right + elemRect.width + xOffset;

  const useLeft = rtl ? layout === "leading" : layout === "trailing";
  const useRight = rtl ? layout === "trailing" : layout === "leading";

  return {
    top: `${top}px`,
    left: useLeft ? `${left}px` : undefined,
    right: useRight ? `${right}px` : undefined
  };
}

export function getPositionStyle({
  placement,
  positionElement,
  xOffset = 0,
  yOffset = 0
}: CalcitePositionParams): CalcitePositionStyle {
  if (!positionElement || !placement) {
    return {};
  }

  const outerElement = getOuterElement(positionElement);

  const closestPanel = positionElement.closest("calcite-shell-panel");
  const closestTrailing = closestPanel ? closestPanel.layout === "trailing" : false;
  const layoutToUse = closestTrailing ? "leading" : "trailing";
  const rtl = getElementDir(positionElement) === "rtl";

  const outerRect = outerElement.getBoundingClientRect(),
    elemRect = positionElement.getBoundingClientRect();

  return placement === "vertical"
    ? getVerticalStyles({ outerRect, elemRect, xOffset, yOffset, layout: layoutToUse, rtl })
    : getHorizontalStyles({ outerRect, elemRect, xOffset, yOffset, layout: layoutToUse, rtl });
}
