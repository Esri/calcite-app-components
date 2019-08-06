import { CalciteTheme } from "../interfaces";
export declare class CalciteTipManager {
    /**
     * The default group title for the Tip Manager.
     */
    textDefaultTitle: string;
    /**
     * Label that appears on hover of pagination icon.
     */
    textPaginationLabel: string;
    /**
     * Element styling
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
