import {
  array,
  boolean,
  button,
  color,
  date,
  files,
  number,
  object,
  optionsKnob as options,
  radios,
  select,
  text
} from "@storybook/addon-knobs";

import colors from "../node_modules/@esri/calcite-colors/colors.json";
import { DocsPage } from "@storybook/addon-docs/blocks";

export const darkBackground = [
  {
    name: "Dark",
    value: colors["blk-210"],
    default: true
  }
];

// the generated readme includes escape characters which actually get rendered, remove them
export const parseReadme = (content: string) => content.replace(/ \\\| /g, " | ");

export interface KnobbedAttribute {
  name: string;
  value: ReturnType<
    | typeof boolean
    | typeof color
    | typeof date
    | typeof number
    | typeof array
    | typeof files
    | typeof button
    | typeof object
    | typeof radios
    | typeof options
    | typeof select
    | typeof text
  >;
}

export interface SimpleAttribute {
  name: string;
  value: string | boolean | number;
}

export type Attributes = (KnobbedAttribute | SimpleAttribute)[];

export const createComponentHTML = (tagName: string, attributes: Attributes, contentHTML?: string) =>
  `<${tagName} ${attributes.map(({ name, value }) => `${name}="${value}"`).join(" ")}>${contentHTML}</${tagName}>`;

export const titlelessDocsPage: typeof DocsPage = () =>
  DocsPage({
    // no title since README already has one
    titleSlot: () => "",
    descriptionSlot: ({ parameters }) => {
      if (typeof parameters.notes === "string") {
        return parameters.notes;
      }

      return Object.keys(parameters.notes)
        .map((section) => parameters.notes[section])
        .join("\n");
    }
  });
