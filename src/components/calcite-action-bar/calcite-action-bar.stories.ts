import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES, createSVG } from "../../../.storybook/resources";
import { LAYOUT_VALUES } from "./resources";
import { layers16, plus16, save16 } from "@esri/calcite-ui-icons";
const { theme } = ATTRIBUTES;

export default {
  title: "components|calcite-action-bar",
  decorators: [withKnobs],
  parameters: {
    notes: parseReadme(readme),
    backgrounds: darkBackground
  }
};

const createAttributes: () => Attributes = () => [
  {
    name: "expand",
    value: boolean("expand", true)
  },
  {
    name: "expanded",
    value: boolean("expanded", false)
  },
  {
    name: "text-expand",
    value: text("textExpand", "Expand")
  },
  {
    name: "text-collapse",
    value: text("textCollapse", "Collapse")
  },
  {
    name: "layout",
    value: select("layout", LAYOUT_VALUES, "leading")
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = () =>
  create(
    "calcite-action-bar",
    createAttributes(),
    `<calcite-action-group>
    <calcite-action text="Add" label="Add Item">${createSVG(plus16)}</calcite-action>
    <calcite-action text="Save" label="Save Item">${createSVG(save16)}</calcite-action>
  </calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Layers" label="View Layers">${createSVG(layers16)}</calcite-action>
  </calcite-action-group>`
  );
