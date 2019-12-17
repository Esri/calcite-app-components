import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";

import { ATTRIBUTES } from "../../../.storybook/resources";
import { APPEARANCE_VALUES } from "./resources";
import { beaker16 } from "@esri/calcite-ui-icons";

export default {
  title: "calcite-action",
  decorators: [withKnobs],
  parameters: {
    notes: parseReadme(readme),
    backgrounds: darkBackground
  }
};

const { theme } = ATTRIBUTES;

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
    value: boolean("text-enabled", false)
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

const iconSize = 16;

const svgIcon = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  height="${iconSize}"
  width="${iconSize}"
  fill="currentColor"
  viewBox="0 0 ${iconSize} ${iconSize}"
>
  <path d="${beaker16}" />
</svg>
`;

export const basic = () => create("calcite-action", createAttributes(), svgIcon);
