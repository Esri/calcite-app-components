import { select, withKnobs } from "@storybook/addon-knobs";
import {
  Attributes,
  createComponentHTML as create,
  darkBackground,
  parseReadme,
  titlelessDocsPage
} from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { theme } = ATTRIBUTES;

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
