import { CalcitePlacementValue } from "../interfaces";

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
}

export interface CalcitePositionStyle {
  [key: string]: string | undefined;
}

function getOuterElement(positionElement: HTMLElement): HTMLElement {
  return positionElement.closest("calcite-shell") || document.body;
}

function getVerticalStyles(params: StylesParams): CalcitePositionStyle {
  // TODO: FIGURE OUT TOP OR BOTTOM
  const { elemRect, outerRect, xOffset, yOffset } = params;

  const top = elemRect.top - outerRect.top + yOffset;
  const left = elemRect.left - outerRect.left + xOffset;

  return {
    top: `${top}px`,
    left: `${left}px`
  };
}

function getHorizontalStyles(params: StylesParams): CalcitePositionStyle {
  // TODO: FIGURE OUT LEFT OR RIGHT
  const { elemRect, outerRect, xOffset, yOffset } = params;

  const top = elemRect.top - outerRect.top - elemRect.height + yOffset;
  const left = elemRect.left - outerRect.left + elemRect.width + xOffset;

  return {
    top: `${top}px`,
    left: `${left}px`
  };
}

export function getPositionStyle(params: CalcitePositionParams): CalcitePositionStyle {
  const { placement, positionElement, xOffset = 0, yOffset = 0 } = params;

  if (!positionElement || !placement) {
    return {};
  }

  const outerElement = getOuterElement(positionElement);

  const outerRect = outerElement.getBoundingClientRect(),
    elemRect = positionElement.getBoundingClientRect();

  return placement === "vertical"
    ? getVerticalStyles({ outerRect, elemRect, xOffset, yOffset })
    : getHorizontalStyles({ outerRect, elemRect, xOffset, yOffset });
}
