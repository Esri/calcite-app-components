import { EventEmitter } from "../../stencil.core";
import { CalcitePlacement } from "../interfaces";
export declare class CalciteShellFloatingPanel {
    /**
     * Determines where the element will be displayed.
     * side: dynamically left or right based on whether we're in a leading or trailing shell-panel.
     * over: centered on top of trigger and covers trigger.
     * anchor: dynamically above or below based on how close trigger is to top or bottom of window.
     */
    placement: CalcitePlacement;
    /**
     * Panel heading
     */
    heading: string;
    /**
     * HTMLElement used to position this element according to the placement.
     */
    positionElement: HTMLElement;
    el: HTMLCalciteShellFloatingPanelElement;
    offsetTop: number;
    /**
     * Emitted when the component has been closed.
     */
    calciteShellFloatingPanelClose: EventEmitter;
    placementHandler(newValue: CalcitePlacement): void;
    positionElementHandler(newValue: HTMLElement): void;
    hidePanel: () => void;
    render(): any;
}
