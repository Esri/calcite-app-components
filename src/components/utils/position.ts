import { CalcitePositionType } from "../interfaces";

interface CalcitePositionParams {
  floatingElement: HTMLElement;
  positionType: CalcitePositionType;
  positionElement: HTMLElement;
}

function getAnchorPosition(params: CalcitePositionParams) {
  const { positionElement } = params;

  const { offsetTop: positionElementTop } = positionElement;

  const {
    height: positionElementHeight
  } = positionElement.getBoundingClientRect();

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
  const { positionType } = params;

  return positionType === "anchor"
    ? getAnchorPosition(params)
    : positionType === "over"
    ? getOverPosition(params)
    : getSidePosition(params);
}
