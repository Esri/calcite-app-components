import { select, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES, createAction } from "../../../.storybook/resources";
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
      ${createAction({ text: "Undo", label: "Undo Action" }, undo16)}
      ${createAction({ text: "Redo", label: "Redo Action" }, redo16)}
      </calcite-action-group>
      <calcite-action-group>
      ${createAction({ text: "Delete", label: "Delete Item" }, trash16)}
      </calcite-action-group>`
  );
