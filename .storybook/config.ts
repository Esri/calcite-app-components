import { addDecorator, addParameters, configure } from "@storybook/html";
import centered from "@storybook/addon-centered/html";
import theme from "./theme";

addDecorator(centered);
addParameters({
  backgrounds: [{ name: "Light", value: "#f8f8f8", default: true }],
  options: {
    theme,
    isToolShown: true,
    storySort: (a, b) => {
      const sectionA = a[1].id.split("-")[0];
      const sectionB = b[1].id.split("-")[0];

      return sectionB.localeCompare(sectionA);
    }
  }
});

configure(require.context("../src", true, /\.stories\.(ts|mdx)$/), module);
