import { CalciteAppearance, CalciteLayout, CalciteScale, CalciteTheme } from "../src/components/interfaces";

type Direction = "ltr" | "rtl";

interface AttributeMetadata<T> {
  values: T[];
  defaultValue: T;
}

interface CommonAttributes {
  dir: AttributeMetadata<Direction>;
  theme: AttributeMetadata<CalciteTheme>;
  scale: AttributeMetadata<CalciteScale>;
  layout: AttributeMetadata<CalciteLayout>;
  appearance: AttributeMetadata<CalciteAppearance>;
}

const dirOptions: Direction[] = ["ltr", "rtl"];
const themeOptions: CalciteTheme[] = ["light", "dark"];
const layoutOptions: CalciteLayout[] = ["leading", "trailing"];
const scaleOptions: CalciteScale[] = ["s", "m", "l"];
const appearanceOptions: CalciteAppearance[] = ["solid", "clear"];

export const ATTRIBUTES: CommonAttributes = {
  dir: {
    values: dirOptions,
    defaultValue: dirOptions[0]
  },
  theme: {
    values: themeOptions,
    defaultValue: themeOptions[0]
  },
  scale: {
    values: scaleOptions,
    defaultValue: scaleOptions[1]
  },
  layout: {
    values: layoutOptions,
    defaultValue: layoutOptions[0]
  },
  appearance: {
    values: appearanceOptions,
    defaultValue: appearanceOptions[0]
  }
};
