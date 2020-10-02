import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES } from "../../../.storybook/resources";
import { ICONS } from "./resources";
const { appearance, dir, scale, theme } = ATTRIBUTES;

export default {
  title: "components/calcite-fab",
  decorators: [withKnobs, withA11y],
  parameters: {
    backgrounds: darkBackground,
    notes: parseReadme(readme)
  }
};

const createAttributes: () => Attributes = () => [
  {
    name: "appearance",
    value: select("appearance", appearance.values, appearance.values[2])
  },
  {
    name: "dir",
    value: select("dir", dir.values, dir.defaultValue)
  },
  {
    name: "disabled",
    value: boolean("disabled", false)
  },
  {
    name: "icon",
    value: text("icon", ICONS.plus)
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
    name: "scale",
    value: select("scale", scale.values, scale.defaultValue)
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = (): string => create("calcite-fab", createAttributes());
