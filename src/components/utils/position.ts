import { CalcitePlacement } from "../interfaces";

interface CalcitePositionParams {
  placement: CalcitePlacement;
  positionElement: HTMLElement;
}

function getAnchorPosition(params: CalcitePositionParams) {
  const { positionElement } = params;

  const { offsetTop: positionElementTop } = positionElement;

  const { height: positionElementHeight } = positionElement.getBoundingClientRect();

  return positionElementTop + positionElementHeight;
}

function getTrailingPosition(params: CalcitePositionParams): number {
  const { positionElement } = params;

  const { offsetTop: positionElementTop } = positionElement;

  return positionElementTop;
}

function getLeadingPosition(params: CalcitePositionParams): number {
  const { positionElement } = params;

  const { offsetTop: positionElementTop } = positionElement;

  return positionElementTop;
}

export function getOffsetTop(params: CalcitePositionParams): number {
  const { placement } = params;

  return placement === "anchor"
    ? getAnchorPosition(params)
    : placement === "trailing"
    ? getTrailingPosition(params)
    : getLeadingPosition(params);
}
