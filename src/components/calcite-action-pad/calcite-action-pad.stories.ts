import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES } from "../../../.storybook/resources";
import dedent from "dedent";
const { dir, position, theme } = ATTRIBUTES;
import { TEXT } from "./resources";

export default {
  title: "components|calcite-action-pad",
  decorators: [withKnobs],
  parameters: {
    backgrounds: darkBackground,
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
    name: "intl-expand",
    value: text("intlExpand", TEXT.expand)
  },
  {
    name: "intl-collapse",
    value: text("intlCollapse", TEXT.collapse)
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = (): string =>
  create(
    "calcite-action-pad",
    createAttributes(),
    dedent`
    <calcite-action-group>
      <calcite-action text="Undo" label="Undo Action" icon="undo"></calcite-action>
      <calcite-action text="Redo" label="Redo Action" icon="redo"></calcite-action>
    </calcite-action-group>
    <calcite-action-group>
      <calcite-action text="Delete" label="Delete Item" icon="trash"></calcite-action>
    </calcite-action-group>
  `
  );
