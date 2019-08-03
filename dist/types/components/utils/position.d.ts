import { CalcitePlacement } from "../interfaces";
interface CalcitePositionParams {
    floatingElement: HTMLElement;
    placement: CalcitePlacement;
    positionElement: HTMLElement;
}
export declare function getOffsetTop(params: CalcitePositionParams): number;
export {};
