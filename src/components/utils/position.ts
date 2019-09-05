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
  // TODO: FIGURE OUT TOP OR BOTTOM POSITIONING
  // - FIGURE OUT IF OUT OF SCROLL AREA
  // - FIGURE OUT IF OUT OF THE "OUTER ELEMENT"

  const useLeft = elemRect.left <= elemRect.right;
  const useTop = elemRect.top <= elemRect.bottom;

  const left = useLeft ? `${elemRect.left - outerRect.left + xOffset}px` : undefined;
  const right = !useLeft ? `${elemRect.right - outerRect.right + xOffset}px` : undefined;
  const top = useTop ? `${elemRect.top - outerRect.top + yOffset}px` : undefined;
  const bottom = !useTop ? `${elemRect.bottom - outerRect.bottom + yOffset}px` : undefined;

  return {
    top,
    bottom,
    right,
    left
  };
}

function getHorizontalStyles({ elemRect, outerRect, xOffset, yOffset }: StylesParams): CalcitePositionStyle {
  // TODO: FIGURE OUT WHERTHER TO POSITION LEFT OR RIGHT IF CAN'T GET LEADING/TRAILING VALUE
  // - FIGURE OUT IF OUT OF THE "OUTER ELEMENT"

  const useLeft = elemRect.left <= elemRect.right;
  const useTop = elemRect.top <= elemRect.bottom;

  const left = useLeft ? `${elemRect.right - outerRect.left + xOffset}px` : undefined;
  const right = !useLeft ? `${elemRect.left - outerRect.right + xOffset}px` : undefined;
  const top = useTop ? `${elemRect.top - outerRect.top - elemRect.height - yOffset}px` : undefined;
  const bottom = !useTop ? `${elemRect.bottom - outerRect.bottom - elemRect.height - yOffset}px` : undefined;

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

  const outerRect = outerElement.getBoundingClientRect(),
    elemRect = positionElement.getBoundingClientRect();

  const params = { outerRect, elemRect, xOffset, yOffset };

  return placement === "vertical" ? getVerticalStyles(params) : getHorizontalStyles(params);
}
