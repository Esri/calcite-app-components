import { EventEmitter } from "../../stencil.core";
import { CalciteTheme } from "../interfaces";
export declare class CalciteFlowItem {
    /**
     * Heading text.
     */
    heading: string;
    /**
     * Opens the action menu.
     */
    menuOpen: boolean;
    /**
     * Shows a back button in the header.
     */
    showBackButton: boolean;
    /**
     * 'Back' text string.
     */
    textBack: string;
    /**
     * 'Close' text string.
     */
    textClose: string;
    /**
     * 'Open' text string.
     */
    textOpen: string;
    /**
     * Used to set the component's color scheme.
     */
    theme: CalciteTheme;
    el: HTMLElement;
    /**
     * Emitted when the back button has been clicked.
     */
    calciteFlowItemBackClick: EventEmitter;
    toggleMenuOpen: () => void;
    backButtonClick: () => void;
    renderBackButton(rtl: boolean): any;
    renderMenuButton(): any;
    renderMenuActions(): any;
    renderFooterActions(): any;
    renderSingleActionContainer(): any;
    renderMenuActionsContainer(): any;
    renderHeaderActions(): any;
    render(): any;
}
