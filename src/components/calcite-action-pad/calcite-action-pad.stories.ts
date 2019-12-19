import { select, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES, createSVG } from "../../../.storybook/resources";
const { theme } = ATTRIBUTES;
import { redo16, trash16, undo16 } from "@esri/calcite-ui-icons";

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
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = () =>
  create(
    "calcite-action-pad",
    createAttributes(),
    `<calcite-action-group>
      <calcite-action text="Undo" label="Undo Action">${createSVG(undo16)}</calcite-action>
      <calcite-action text="Redo" label="Redo Action">${createSVG(redo16)}</calcite-action>
    </calcite-action-group>
    <calcite-action-group>
      <calcite-action text="Delete" label="Delete Item">${createSVG(trash16)}</calcite-action>
    </calcite-action-group>`
  );
