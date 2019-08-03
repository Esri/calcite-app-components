import { FunctionalComponent } from "../../stencil.core";
import { JSXBase } from "../../stencil.core";
import SVGAttributes = JSXBase.SVGAttributes;
interface CalciteSVGProps {
    size: string;
    path: string;
    svgAttributes?: SVGAttributes;
}
export declare const CalciteIcon: FunctionalComponent<CalciteSVGProps>;
export default CalciteIcon;
