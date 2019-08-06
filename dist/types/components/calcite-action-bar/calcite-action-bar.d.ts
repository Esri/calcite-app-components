import { CalciteLayout, CalciteTheme } from "../interfaces";
export declare class CalciteActionBar {
    /**
     * Indicates whether widget can be expanded.
     */
    expand: boolean;
    /**
     * Indicates whether widget is expanded.
     */
    expanded: boolean;
    /**
     * Updates the label of the expand icon when the component is collapsed.
     */
    textExpand: string;
    /**
     * Updates the label of the collapse icon when the component is expanded.
     */
    textCollapse: string;
    /**
     * Arrangement of the component.
     */
    layout: CalciteLayout;
    /**
     * Element styling
     */
    theme: CalciteTheme;
    el: HTMLElement;
    getClosestShellLayout(): CalciteLayout;
    renderExpandToggle(): any;
    renderBottomActionGroup(): any;
    render(): any;
    watchHandler(newValue: boolean): void;
    toggleExpand: () => void;
}
