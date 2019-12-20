import { boolean, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import readme from "./readme.md";

export default {
  title: "components|calcite-pick-list",
  decorators: [withKnobs],
  parameters: {
    notes: parseReadme(readme),
    backgrounds: darkBackground
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
  <calcite-icon icon="circle" scale="s" filled style="color: #f689d8;"></calcite-icon>
</calcite-action>`;

export const basic = () =>
  create(
    "calcite-pick-list",
    createAttributes(),
    `
  <calcite-pick-list-item text-heading="T. Rex" text-description="arm strength impaired" value="trex">
    ${action}
  </calcite-pick-list-item>
  <calcite-pick-list-item text-heading="Triceratops" text-description="3 horn" value="triceratops" selected>
    ${action}
  </calcite-pick-list-item>
  <calcite-pick-list-item text-heading="hi" text-description="there" value="helloWorld">
    ${action}
  </calcite-pick-list-item>`
  );

export const grouped = () =>
  create(
    "calcite-pick-list",
    createAttributes(),
    `
  <calcite-pick-list-group text-group-title="numbers">
    <calcite-pick-list-item text-heading="one" text-description="fish" value="one" icon="grip">
      ${action}
    </calcite-pick-list-item>
    <calcite-pick-list-item text-heading="two" text-description="fish" value="two" icon="grip">
      ${action}
    </calcite-pick-list-item>
  </calcite-pick-list-group>
  <calcite-pick-list-group text-group-title="colors">
    <calcite-pick-list-item text-heading="red" text-description="fish" value="red" icon="grip">
      ${action}
    </calcite-pick-list-item>
    <calcite-pick-list-item text-heading="blue" text-description="fish" value="blue" icon="grip">
      ${action}
    </calcite-pick-list-item>
  </calcite-pick-list-group>`
  );
