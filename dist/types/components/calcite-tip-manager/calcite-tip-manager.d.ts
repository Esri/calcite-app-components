import { CalciteTheme } from "../interfaces";
export declare class CalciteTipManager {
    /**
     * Alternate text for closing the Tip Manager.
     */
    textClose: string;
    /**
     * The default group title for the Tip Manager.
     */
    textDefaultTitle: string;
    /**
     * Alternate text for navigating to the next tip.
     */
    textNext: string;
    /**
     * Label that appears on hover of pagination icon.
     */
    textPaginationLabel: string;
    /**
     * Alternate text for navigating to the previous tip.
     */
    textPrevious: string;
    /**
     * Used to set the component's color scheme.
     */
    theme: CalciteTheme;
    el: HTMLElement;
    selectedIndex: number;
    selectedChangeHandler(): void;
    tips: HTMLCalciteTipElement[];
    total: number;
    direction: "advancing" | "retreating";
    groupTitle: string;
    observer: MutationObserver;
    connectedCallback(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    nextTip(): Promise<void>;
    previousTip(): Promise<void>;
    setUpTips(): void;
    hideTipManager: () => void;
    showSelectedTip(): void;
    updateGroupTitle(): void;
    previousClicked: () => void;
    nextClicked: () => void;
    render(): any;
}
