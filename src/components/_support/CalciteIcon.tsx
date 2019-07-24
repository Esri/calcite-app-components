import { FunctionalComponent, h } from "@stencil/core";

interface CalciteSVGProps {
  width?: string;
  height?: string;
  path: string;
}

export const CalciteIcon: FunctionalComponent<CalciteSVGProps> = ({
  path,
  width = 16,
  height = 16
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox={`0 0 ${width} ${height}`}
  >
    <path d={path} />
  </svg>
);

export default CalciteIcon;
