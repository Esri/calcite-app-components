import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import {
  Attributes,
  createComponentHTML as create,
  darkBackground,
  parseReadme,
  titlelessDocsPage
} from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { dir, layout, theme } = ATTRIBUTES;

export default {
  title: "components|calcite-action-bar",
  decorators: [withKnobs],
  parameters: {
    backgrounds: darkBackground,
    docs: {
      page: titlelessDocsPage
    },
    notes: parseReadme(readme)
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
    name: "dir",
    value: select("dir", dir.values, dir.defaultValue)
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
    "calcite-action-bar",
    createAttributes(),
    `<calcite-action-group>
    <calcite-action text="Add" label="Add Item"><calcite-icon scale="s" icon="plus"></calcite-icon></calcite-action>
    <calcite-action text="Save" label="Save Item"><calcite-icon scale="s" icon="save"></calcite-icon></calcite-action>
  </calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Layers" label="View Layers"><calcite-icon scale="s" icon="layers"></calcite-icon></calcite-action>
  </calcite-action-group>`
  );
