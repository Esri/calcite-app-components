import { ThemeVars, create } from "@storybook/theming";
import logo from "./logo.svg";

interface ExtendedThemeVars {
  addonNotesTheme: any;
}

export default create({
  base: "light",
  brandTitle: "Calcite App Components",
  brandUrl: "./",
  brandImage: logo,
  addonNotesTheme: {
    code: {
      whiteSpace: "normal"
    },
    pre: {
      code: {
        whiteSpace: "pre"
      }
    }
  }
} as ThemeVars & ExtendedThemeVars);
