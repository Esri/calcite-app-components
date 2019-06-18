import { CalcitePositionType } from "../interfaces";

export function setOffsetTop(
  positionType: CalcitePositionType,
  positionElement: HTMLElement
): void {
  const { offsetTop } = positionElement;
  const { height: positionHeight } = positionElement.getBoundingClientRect();
  const halfHeight = this.el.offsetHeight / 2;

  this.offsetTop =
    positionType === "anchor"
      ? offsetTop + positionHeight
      : positionType === "over"
      ? offsetTop - halfHeight
      : offsetTop;
}
