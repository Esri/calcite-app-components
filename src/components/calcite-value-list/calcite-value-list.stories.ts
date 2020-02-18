import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";
import { ATTRIBUTES } from "../../../.storybook/resources";
import dedent from "dedent";
const { dir, theme } = ATTRIBUTES;

export default {
  title: "components|calcite-value-list",
  decorators: [withKnobs],
  parameters: {
    backgrounds: darkBackground,
    notes: parseReadme(readme)
  }
};

const createAttributes: () => Attributes = () => [
  {
    name: "compact",
    value: boolean("compact", false)
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
    name: "drag-enabled",
    value: boolean("dragEnabled", false)
  },
  {
    name: "filter-enabled",
    value: boolean("filterEnabled", false)
  },
  {
    name: "loading",
    value: boolean("loading", false)
  },
  {
    name: "multiple",
    value: boolean("multiple", false)
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

const action = dedent`
  <calcite-action slot="secondary-action" label="click-me" onClick="console.log('clicked');" appearance="clear">
    <calcite-icon icon="circle" scale="s" filled style="color: #f689d8;"></calcite-icon>
  </calcite-action>
`;

export const basic = () =>
  create(
    "calcite-value-list",
    createAttributes(),
    dedent`
    <calcite-value-list-item text-label="Dogs" text-description="Man's best friend" value="dogs" >
      ${action}
    </calcite-value-list-item>
    <calcite-value-list-item text-label="Cats" text-description="Independent and fluffy" value="cats" >
      ${action}
    </calcite-value-list-item>
    <calcite-value-list-item text-label="Fish. But not just any fish, a tiger fish caught live in the Atlantic Ocean while on vacation."
      text-description="Easy to care for." value="fish" >
      ${action}
    </calcite-value-list-item>
  `
  );
