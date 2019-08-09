import { CalciteTheme } from "../interfaces";
export declare class CalciteShell {
    /**
     * Used to set the component's color scheme.
     */
    theme: CalciteTheme;
    el: HTMLCalciteShellElement;
    renderHeader(): any;
    renderContent(): any;
    renderFooter(): any;
    renderMain(): any;
    render(): any;
}
