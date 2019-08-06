import { FlowDirection } from "./resources";
import { CalciteTheme } from "../interfaces";
export declare class CalciteFlow {
    /**
     * Element styling
     */
    theme: CalciteTheme;
    el: HTMLElement;
    flowCount: number;
    flowDirection: FlowDirection;
    flows: HTMLCalciteFlowItemElement[];
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    back(): Promise<void>;
    updateFlowProps: () => void;
    flowItemObserver: MutationObserver;
    render(): any;
}
