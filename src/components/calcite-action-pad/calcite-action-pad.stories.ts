import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { theme, layout } = ATTRIBUTES;

export default {
  title: "components|calcite-action-pad",
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
    value: select("layout", layout.values, layout.defaultValue)
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = () =>
  create(
    "calcite-action-pad",
    createAttributes(),
    `<calcite-action-group>
      <calcite-action text="Undo" label="Undo Action"><calcite-icon scale="s" icon="undo"></calcite-icon></calcite-action>
      <calcite-action text="Redo" label="Redo Action"><calcite-icon scale="s" icon="redo"></calcite-icon></calcite-action>
    </calcite-action-group>
    <calcite-action-group>
      <calcite-action text="Delete" label="Delete Item"><calcite-icon scale="s" icon="trash"></calcite-icon></calcite-action>
    </calcite-action-group>`
  );
