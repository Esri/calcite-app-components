import { FlowDirection } from "./resources";
import { CalciteTheme } from "../interfaces";
export declare class CalciteFlow {
    /**
     * Used to set the component's color scheme.
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
