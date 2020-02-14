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
import dedent from "dedent";
const { dir, position, theme } = ATTRIBUTES;

export default {
  title: "components|calcite-action-pad",
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
    name: "dir",
    value: select("dir", dir.values, dir.defaultValue)
  },
  {
    name: "expand",
    value: boolean("expand", true)
  },
  {
    name: "expanded",
    value: boolean("expanded", false)
  },
  {
    name: "position",
    value: select("position", position.values, position.defaultValue)
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
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = () =>
  create(
    "calcite-action-pad",
    createAttributes(),
    dedent`
    <calcite-action-group>
      <calcite-action text="Undo" label="Undo Action"><calcite-icon scale="s" icon="undo"></calcite-icon></calcite-action>
      <calcite-action text="Redo" label="Redo Action"><calcite-icon scale="s" icon="redo"></calcite-icon></calcite-action>
    </calcite-action-group>
    <calcite-action-group>
      <calcite-action text="Delete" label="Delete Item"><calcite-icon scale="s" icon="trash"></calcite-icon></calcite-action>
    </calcite-action-group>
  `
  );
