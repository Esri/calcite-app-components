import { boolean, withKnobs } from "@storybook/addon-knobs";
import {
  Attributes,
  createComponentHTML as create,
  darkBackground,
  parseReadme,
  titlelessDocsPage
} from "../../../.storybook/utils";
import readme from "./readme.md";

export default {
  title: "components|calcite-value-list",
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
    name: "compact",
    value: boolean("compact", false)
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
  }
];

const action = `<calcite-action slot="secondaryAction" label="click-me" onClick="console.log('clicked');" appearance="clear">
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <circle cx="7" cy="7" r="7" fill="#f689d8" />
  </svg>
</calcite-action>`;

export const basic = () =>
  create(
    "calcite-value-list",
    createAttributes(),
    `
  <calcite-value-list-item text-label="Dogs" text-description="Man's best friend" value="dogs" >
    ${action}
  </calcite-value-list-item>
  <calcite-value-list-item text-label="Cats" text-description="Independent and fluffy" value="cats" >
    ${action}
  </calcite-value-list-item>
  <calcite-value-list-item text-label="Fish. But not just any fish, a tiger fish caught live in the Atlantic Ocean while on vacation."
    text-description="Easy to care for." value="fish" >
    ${action}
  </calcite-value-list-item>`
  );
