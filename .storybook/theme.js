import { create } from "@storybook/theming";
import logo from "./logo.svg";
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
});
