import { CalciteTheme } from "../interfaces";
export declare class CalciteTip {
    /**
     * The local storage id used for an instance of a tip.
     */
    storageId: string;
    /**
     * Indicates whether the tip can be dismissed.
     */
    nonDismissible: boolean;
    heading: string;
    thumbnail: string;
    textThumbnail: string;
    /**
     * Element styling
     */
    theme: CalciteTheme;
    el: HTMLElement;
    dismissed: boolean;
    hideTip: () => void;
    render(): any;
}
