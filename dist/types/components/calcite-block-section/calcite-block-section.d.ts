import { EventEmitter } from "../../stencil.core";
export declare class CalciteBlockSection {
    /**
     * When true, the block's section content will be displayed.
     */
    open: boolean;
    /**
     * Text displayed in the button.
     */
    text: string;
    /**
     * Tooltip used for the toggle when collapsed.
     */
    textExpand: string;
    /**
     * Tooltip used for the toggle when expanded.
     */
    textCollapse: string;
    el: HTMLElement;
    /**
     * Emitted when the header has been clicked.
     */
    calciteBlockSectionToggle: EventEmitter;
    onHeaderClick: () => void;
    render(): any;
}
