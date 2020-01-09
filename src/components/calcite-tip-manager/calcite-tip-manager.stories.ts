import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import {
  Attributes,
  createComponentHTML as create,
  darkBackground,
  parseReadme,
  titlelessDocsPage
} from "../../../.storybook/utils";
import readme from "./readme.md";
import { TEXT } from "./resources";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { dir, theme } = ATTRIBUTES;

export default {
  title: "components|calcite-tip-manager",
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
    name: "closed",
    value: boolean("closed", false)
  },
  {
    name: "dir",
    value: select("dir", dir.values, dir.defaultValue)
  },
  {
    name: "text-close",
    value: text("textClose", TEXT.close)
  },
  {
    name: "text-defalut-title",
    value: text("textDefaultTitle", TEXT.defaultGroupTitle)
  },
  {
    name: "text-pagination-label",
    value: text("textPaginationLabel", TEXT.defaultPaginationLabel)
  },
  {
    name: "text-next",
    value: text("textNext", TEXT.next)
  },
  {
    name: "text-previous",
    value: text("textPrevious", TEXT.previous)
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

export const basic = () =>
  create(
    "calcite-tip-manager",
    createAttributes(),
    `
    <calcite-tip-group text-group-title="Astronomy">
    <calcite-tip heading="The Red Rocks and Blue Water">
      <img slot="thumbnail" src="https://placeimg.com/1000/600/city" alt="This is an image." />
      <p>
        This tip is how a tip should really look. It has a landscape or square image and a small amount of text
        content. This paragraph is in an "info" slot.
      </p>
      <p>
        This is another paragraph in a subsequent "info" slot. In publishing and graphic design, Lorem ipsum is
        a placeholder text commonly used to demonstrate the visual form of a document without relying on
        meaningful content (also called greeking). Replacing the actual content with placeholder text allows
        designers to design the form of the content before the content itself has been produced.
      </p>
      <a href="http://www.esri.com">This is the "link" slot.</a>
    </calcite-tip>
    <calcite-tip heading="The Long Trees">
      <img slot="thumbnail" src="https://placeimg.com/1000/600/nature" alt="This is an image." />
      <p>
        This tip has an image that is a pretty tall. And the text will run out before the end of the image.
      </p>
      <p>In astronomy, the terms object and body are often used interchangeably.</p>
      <a href="http://www.esri.com">View Esri</a>
    </calcite-tip>
  </calcite-tip-group>
  <calcite-tip heading="Square Nature">
    <img slot="thumbnail" src="https://placeimg.com/1000/1000/nature" alt="This is an image." />
    <p>
      This tip has an image that is square. And the text will run out before the end of the image.
    </p>
    <p>In astronomy, the terms object and body are often used interchangeably.</p>
    <p>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
      visual form of a document without relying on meaningful content (also called greeking). Replacing the
      actual content with placeholder text allows designers to design the form of the content before the content
      itself has been produced.
    </p>
    <a href="http://www.esri.com">View Esri</a>
  </calcite-tip>
  <calcite-tip heading="The lack of imagery">
    <p>
      This tip has no image. As such, the content area will take up the entire width of the tip.
    </p>
    <p>
      This is the next paragraph and should show how wide the content area is now. Of course, the width of the
      overall tip will affect things. In astronomy, the terms object and body are often used interchangeably.
    </p>
    <a href="http://www.esri.com">View Esri</a>
  </calcite-tip>
`
  );
