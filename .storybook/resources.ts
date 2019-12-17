import { CalciteTheme } from "../src/components/interfaces";

type Direction = "ltr" | "rtl";

interface AttributeMetadata<T> {
  values: T[];
  defaultValue: T;
}

interface CommonAttributes {
  dir: AttributeMetadata<Direction>;
  theme: AttributeMetadata<CalciteTheme>;
}

const dirOptions: Direction[] = ["ltr", "rtl"];
const themeOptions: CalciteTheme[] = ["light", "dark"];

export const ATTRIBUTES: CommonAttributes = {
  dir: {
    values: dirOptions,
    defaultValue: dirOptions[0]
  },
  theme: {
    values: themeOptions,
    defaultValue: themeOptions[0]
  }
};

export function createSVG(path: string, size: number): string {
  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="${size}"
    width="${size}"
    fill="currentColor"
    viewBox="0 0 ${size} ${size}"
  >
    <path d="${path}" />
  </svg>
`;
}

export function createAction(
  { text, label, textEnabled, slot }: { text: string; label?: string; textEnabled?: boolean; slot?: string },
  path: string
): string {
  return `<calcite-action ${slot ? `slot="${slot}"` : null} ${
    textEnabled ? "text-enabled" : null
  } text="${text}" label="${label}">${createSVG(path, 16)}</calcite-action>`;
}
