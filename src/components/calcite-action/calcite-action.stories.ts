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
import { APPEARANCE_VALUES } from "./resources";

const { theme } = ATTRIBUTES;

export default {
  title: "components|calcite-action",
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
    name: "appearance",
    value: select("appearance", APPEARANCE_VALUES, "solid")
  },
  {
    name: "active",
    value: boolean("active", false)
  },
  {
    name: "compact",
    value: boolean("compact", false)
  },
  {
    name: "disabled",
    value: boolean("disabled", false)
  },
  {
    name: "indicator",
    value: boolean("indicator", false)
  },
  {
    name: "label",
    value: text("label", "Label")
  },
  {
    name: "loading",
    value: boolean("loading", false)
  },
  {
    name: "text",
    value: text("text", "Text")
  },
  {
    name: "text-enabled",
    value: boolean("textEnabled", false)
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = () =>
  create("calcite-action", createAttributes(), `<calcite-icon scale="s" icon="beaker"></calcite-icon>`);
