import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { TEXT } from "./resources";
import { ATTRIBUTES } from "../../../.storybook/resources";

export default {
  title: "calcite-tip",
  decorators: [withKnobs],
  parameters: {
    notes: parseReadme(readme),
    backgrounds: darkBackground
  }
};

const { theme } = ATTRIBUTES;

const createAttributes: () => Attributes = () => [
  {
    name: "storage-id",
    value: text("storageId", "tip-12345")
  },
  {
    name: "non-dismissible",
    value: boolean("nonDismissible", false)
  },
  {
    name: "heading",
    value: text("heading", "My Tip")
  },
  {
    name: "text-close",
    value: text("textClose", TEXT.close)
  },
  {
    name: "text-thumbnail",
    value: text("textThumbnail", "A placeholder image")
  },
  {
    name: "thumbnail",
    value: text("thumbnail", "https://placeimg.com/1000/600")
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = () => create("calcite-tip", createAttributes());
