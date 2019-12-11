import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import blockReadme from "./readme.md";
import sectionReadme from "../calcite-block-section/readme.md";

export default {
  title: "calcite-block",
  decorators: [withKnobs],
  parameters: {
    notes: {
      block: parseReadme(blockReadme),
      section: parseReadme(sectionReadme)
    },
    backgrounds: darkBackground
  }
};

const createBlockAttributes: () => Attributes = () => {
  const group = "block";
  const dirOptions = ["ltr", "rtl"];
  const themeOptions = ["light", "dark"];

  return [
    {
      name: "heading",
      value: text("heading", "Heading", group)
    },
    {
      name: "dir",
      value: select("dir", dirOptions, dirOptions[0], group)
    },
    {
      name: "summary",
      value: text("summary", "summary", group)
    },
    {
      name: "open",
      value: boolean("open", true, group)
    },
    {
      name: "collapsible",
      value: boolean("collapsible", true, group)
    },
    {
      name: "loading",
      value: boolean("loading", false, group)
    },
    {
      name: "disabled",
      value: boolean("disabled", false, group)
    },
    {
      name: "theme",
      value: select("theme", themeOptions, themeOptions[0], group)
    },
    {
      name: "text-collapse",
      value: text("text-collapse", "Collapse", group)
    },
    {
      name: "text-expand",
      value: text("text-expand", "Expand", group)
    }
  ];
};

const createSectionAttributes: () => Attributes = () => {
  const group = "section (animals)";
  const toggleDisplayOptions = ["button", "switch"];

  return [
    {
      name: "text",
      value: text("text", "Animals", group)
    },
    {
      name: "open",
      value: boolean("open", true, group)
    },
    {
      name: "toggle-display",
      value: select("toggle-display", toggleDisplayOptions, toggleDisplayOptions[0], group)
    },
    {
      name: "text-collapse",
      value: text("text-collapse", "Collapse", group)
    },
    {
      name: "text-expand",
      value: text("text-expand", "Expand", group)
    }
  ];
};

export const basic = () =>
  create(
    "calcite-block",
    createBlockAttributes(),
    `${create(
      "calcite-block-section",
      createSectionAttributes(),
      `<img alt="demo" src="https://placeimg.com/320/240/animals" />`
    )}

    <calcite-block-section text="Nature" open>
      <img alt="demo" src="https://placeimg.com/320/240/nature" />
    </calcite-block-section>
    `
  );

export const withHeaderControl = () =>
  create(
    "calcite-block",
    createBlockAttributes(),
    `<label slot="control">test <input placeholder="I'm a header control"/></label>`
  );

export const withIconAndHeader = () => create("calcite-block", createBlockAttributes(), `<div slot="icon">✅</div>`);
