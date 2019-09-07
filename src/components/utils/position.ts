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

function getVerticalStyles({ elemRect, xOffset, yOffset }: StylesParams): CalcitePositionStyle {
  const elemRelativeLeft = elemRect.left + window.scrollX;
  const elemRelativeRight = elemRect.right + window.scrollX;
  const elemRelativeTop = elemRect.top + window.scrollY;
  const elemRelativeBottom = elemRect.bottom + window.scrollY;

  const positionAbove = elemRelativeTop <= elemRelativeBottom;
  const positionToLeft = elemRelativeLeft <= elemRelativeRight;

  const left = positionToLeft ? `${elemRelativeLeft + xOffset}px` : undefined;
  const right = !positionToLeft ? `${elemRelativeRight + xOffset}px` : undefined;
  const top = positionAbove ? `${elemRelativeBottom + yOffset}px` : undefined;
  const bottom = !positionAbove ? `${elemRelativeTop + yOffset}px` : undefined;

  return {
    top,
    bottom,
    right,
    left
  };
}

function getHorizontalStyles({ elemRect, xOffset, yOffset }: StylesParams): CalcitePositionStyle {
  const elemRelativeLeft = elemRect.left + window.scrollX;
  const elemRelativeRight = elemRect.right + window.scrollX;
  const elemRelativeTop = elemRect.top + window.scrollY;
  const elemRelativeBottom = elemRect.bottom + window.scrollY;

  const alignTop = elemRelativeTop - window.scrollY <= window.innerHeight + window.scrollY - elemRelativeBottom;
  const positionToRight = elemRelativeRight <= elemRelativeLeft;

  // document.body.clientHeight - window.scrollY - window.innerHeight;

  console.log({
    elemRelativeTop,
    clientHeight: document.body.clientHeight,
    scrollY: window.scrollY,
    innerHeight: window.innerHeight
  });

  const left = !positionToRight ? `${elemRelativeRight + xOffset}px` : undefined;
  const right = positionToRight ? `${elemRelativeLeft + xOffset}px` : undefined;
  const top = alignTop ? `${elemRelativeTop - yOffset}px` : undefined;
  const bottom = !alignTop ? `${elemRelativeBottom - +yOffset}px` : undefined;

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
