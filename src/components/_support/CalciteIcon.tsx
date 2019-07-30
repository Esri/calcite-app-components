import { FunctionalComponent, h } from "@stencil/core";

import { JSXBase } from "@stencil/core/internal";
import SVGAttributes = JSXBase.SVGAttributes;

interface CalciteSVGProps {
  size: string;
  path: string;
  svgAttributes?: SVGAttributes;
}

export const CalciteIcon: FunctionalComponent<CalciteSVGProps> = ({
  path,
  size,
  svgAttributes
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    viewBox={`0 0 ${size} ${size}`}
    {...svgAttributes}
  >
    <path d={path} />
  </svg>
);

export default CalciteIcon;
