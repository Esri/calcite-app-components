import { EventEmitter } from "../../stencil.core";
import { CalciteTheme } from "../interfaces";
export declare class CalciteBlock {
    /**
     * When true, this block will be collapsible.
     */
    collapsible: boolean;
    /**
     * Block heading.
     */
    heading: string;
    /**
     * When true, the block's content will be displayed.
     */
    open: boolean;
    /**
     * Block summary.
     */
    summary: string;
    /**
     * Tooltip used for the toggle when collapsed.
     */
    textExpand: string;
    /**
     * Tooltip used for the toggle when expanded.
     */
    textCollapse: string;
    /**
     * Used to set the component's color scheme.
     */
    theme: CalciteTheme;
    el: HTMLElement;
    /**
     * Emitted when the header has been clicked.
     */
    calciteBlockToggle: EventEmitter;
    onHeaderClick: (event: MouseEvent) => void;
    render(): any;
}
