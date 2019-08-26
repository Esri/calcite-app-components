import { CalcitePlacement } from "../interfaces";

interface CalcitePositionParams {
  placement: CalcitePlacement;
  positionElement: HTMLElement;
}

interface CalciteOffset {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

function getAnchorPosition(params: CalcitePositionParams): CalciteOffset {
  const { positionElement } = params;

  const rect = positionElement.getBoundingClientRect();

  const { top, right, bottom, left } = rect;

  return {
    top,
    right,
    bottom,
    left
  };
}

function getTrailingPosition(params: CalcitePositionParams): CalciteOffset {
  const { positionElement } = params;

  const rect = positionElement.getBoundingClientRect();

  const { top, right, bottom, left } = rect;

  return {
    top,
    right,
    bottom,
    left
  };
}

function getLeadingPosition(params: CalcitePositionParams): CalciteOffset {
  const { positionElement } = params;

  const rect = positionElement.getBoundingClientRect();

  const { top, right, bottom, left } = rect;

  return {
    top,
    right,
    bottom,
    left
  };
}

export function getRect(params: CalcitePositionParams): CalciteOffset {
  const { placement } = params;

  return placement === "anchor"
    ? getAnchorPosition(params)
    : placement === "trailing"
    ? getTrailingPosition(params)
    : getLeadingPosition(params);
}
