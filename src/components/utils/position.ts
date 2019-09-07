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
  return positionElement.closest("calcite-shell") || window.document.body;
}

function getVerticalStyles({ elemRect, outerRect, xOffset, yOffset }: StylesParams): CalcitePositionStyle {
  const elemRelativeLeft = elemRect.left - outerRect.left;
  const elemRelativeRight = outerRect.right - elemRect.right;
  const elemRelativeTop = elemRect.top - outerRect.top;
  const elemRelativeBottom = outerRect.bottom - elemRect.bottom;

  const positionAbove = elemRelativeTop <= elemRelativeBottom;
  const positionToLeft = elemRelativeLeft <= elemRelativeRight;

  const left = positionToLeft ? `${elemRelativeLeft + xOffset}px` : undefined;
  const right = !positionToLeft ? `${elemRelativeRight + xOffset}px` : undefined;
  const top = positionAbove ? `${elemRelativeTop + yOffset}px` : undefined;
  const bottom = !positionAbove ? `${elemRelativeBottom + yOffset}px` : undefined;

  return {
    top,
    bottom,
    right,
    left
  };
}

function getHorizontalStyles({ elemRect, outerRect, xOffset, yOffset }: StylesParams): CalcitePositionStyle {
  const elemRelativeLeft = elemRect.right - outerRect.left;
  const elemRelativeRight = outerRect.right - elemRect.left;
  const elemRelativeTop = elemRect.top - outerRect.top;
  const elemRelativeBottom = outerRect.bottom - elemRect.bottom;

  const alignTop = elemRelativeTop <= elemRelativeBottom;
  const positionToRight = elemRelativeRight <= elemRelativeLeft;

  const left = !positionToRight ? `${elemRelativeLeft + xOffset}px` : undefined;
  const right = positionToRight ? `${elemRelativeRight + xOffset}px` : undefined;
  const top = alignTop ? `${elemRelativeTop - elemRect.height + yOffset}px` : undefined;
  const bottom = !alignTop ? `${elemRelativeBottom - elemRect.height + yOffset}px` : undefined;

  return {
    top,
    bottom,
    right,
    left
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
  const outerRect = outerElement.getBoundingClientRect();
  const elemRect = positionElement.getBoundingClientRect();

  const params = { outerRect, elemRect, xOffset, yOffset };

  return placement === "vertical" ? getVerticalStyles(params) : getHorizontalStyles(params);
}
