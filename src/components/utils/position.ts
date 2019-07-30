import { CalcitePlacement } from "../interfaces";

interface CalcitePositionParams {
  floatingElement: HTMLElement;
  placement: CalcitePlacement;
  positionElement: HTMLElement;
}

function getAnchorPosition(params: CalcitePositionParams) {
  const { positionElement } = params;

  const { offsetTop: positionElementTop } = positionElement;

  const { height: positionElementHeight } = positionElement.getBoundingClientRect();

  return positionElementTop + positionElementHeight;
}

function getOverPosition(params: CalcitePositionParams): number {
  const { positionElement, floatingElement } = params;

  const { offsetTop: positionElementTop } = positionElement;
  const { offsetHeight: floatingElementHeight } = floatingElement;

  return positionElementTop - floatingElementHeight / 2;
}

function getSidePosition(params: CalcitePositionParams): number {
  const { positionElement } = params;

  const { offsetTop: positionElementTop } = positionElement;

  return positionElementTop;
}

export function getOffsetTop(params: CalcitePositionParams): number {
  const { placement } = params;

  return placement === "anchor"
    ? getAnchorPosition(params)
    : placement === "over"
    ? getOverPosition(params)
    : getSidePosition(params);
}
