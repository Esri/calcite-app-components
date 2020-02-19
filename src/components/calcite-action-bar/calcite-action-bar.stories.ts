import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES } from "../../../.storybook/resources";
import dedent from "dedent";
const { dir, position, theme } = ATTRIBUTES;

export default {
  title: "components|calcite-action-bar",
  decorators: [withKnobs],
  parameters: {
    backgrounds: darkBackground,
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
    name: "locale-expand",
    value: text("localeExpand", "Expand")
  },
  {
    name: "locale-collapse",
    value: text("localeCollapse", "Collapse")
  },
  {
    name: "position",
    value: select("position", position.values, position.defaultValue)
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
    dedent`
    <calcite-action-group>
      <calcite-action text="Add" label="Add Item"><calcite-icon scale="s" icon="plus"></calcite-icon></calcite-action>
      <calcite-action text="Save" label="Save Item"><calcite-icon scale="s" icon="save"></calcite-icon></calcite-action>
    </calcite-action-group>
    <calcite-action-group>
      <calcite-action text="Layers" label="View Layers"><calcite-icon scale="s" icon="layers"></calcite-icon></calcite-action>
    </calcite-action-group>
  `
  );
