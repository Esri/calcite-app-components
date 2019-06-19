import { CalcitePositionType } from "../interfaces";

export function getOffsetTop(params: {
  element: HTMLElement;
  positionType: CalcitePositionType;
  positionElement: HTMLElement;
}): number {
  const { positionElement, element, positionType } = params;

  const { offsetTop } = positionElement;

  const { height: positionHeight } = positionElement.getBoundingClientRect();

  const halfHeight = element.offsetHeight / 2;

  return positionType === "anchor"
    ? offsetTop + positionHeight
    : positionType === "over"
    ? offsetTop - halfHeight
    : offsetTop;
}
