import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import { ATTRIBUTES, createAction } from "../../../.storybook/resources";
const { theme } = ATTRIBUTES;
import readme from "./readme.md";
import { SCALES } from "./resources";
import { attachment16, bluetooth16 } from "@esri/calcite-ui-icons";

export default {
  title: "components|calcite-panel",
  decorators: [withKnobs],
  parameters: {
    notes: parseReadme(readme),
    backgrounds: darkBackground
  }
};

const createAttributes: () => Attributes = () => [
  {
    name: "dismissed",
    value: boolean("dismissed", false)
  },
  {
    name: "disabled",
    value: boolean("disabled", false)
  },
  {
    name: "dismissible",
    value: boolean("dismissible", false)
  },
  {
    name: "height-scale",
    value: select("heightScale", SCALES, "m")
  },
  {
    name: "loading",
    value: boolean("loading", false)
  },
  {
    name: "text-close",
    value: text("textClose", "Close")
  },
  {
    name: "theme",
    value: select("theme", theme.values, theme.defaultValue)
  }
];

const headerHTML = `<h3 class="heading" slot="header-content">Heading</h3>`;

const contentHTML = `<p>
Enim nascetur erat faucibus ornare varius arcu fames bibendum habitant felis elit ante. Nibh morbi massa curae; leo semper diam aenean congue taciti eu porta. Varius faucibus ridiculus donec. Montes sit ligula purus porta ante lacus habitasse libero cubilia purus! In quis congue arcu maecenas felis cursus pellentesque nascetur porta donec non. Quisque, rutrum ligula pharetra justo habitasse facilisis rutrum neque. Magnis nostra nec nulla dictumst taciti consectetur. Non porttitor tempor orci dictumst magna porta vitae.
</p>
<p>
Ipsum nostra tempus etiam augue ullamcorper scelerisque sapien potenti erat nisi gravida. Vehicula sem tristique sed. Nullam, sociis imperdiet ullamcorper? Dapibus fames primis ridiculus vulputate, habitant inceptos! Nunc torquent lorem urna vehicula volutpat donec nec. Orci massa eu nec donec enim fames, faucibus quam aenean. Laoreet tellus tempor quisque ornare lobortis praesent erat senectus natoque consectetur donec imperdiet. Quis sem cum gravida dictumst a pretium purus aptent amet id. Orci habitasse, praesent facilisis condimentum. Nec elit turpis leo.
</p>
<p>
Tempus per volutpat diam tempor mauris parturient vulputate leo id libero quisque. Mattis aliquam dictum venenatis fringilla. Taciti venenatis, ultrices sollicitudin consequat. Sapien fusce est iaculis potenti ut auctor potenti. Nisi malesuada feugiat vulputate vitae porttitor. Nullam nullam nullam accumsan quis magna in. Elementum, nascetur gravida cras scelerisque inceptos aenean inceptos potenti. Lobortis condimentum accumsan posuere curabitur fermentum diam, natoque quisque. Eget placerat sed aptent orci urna fusce magnis. Vel lacus magnis nunc.
</p>`;

const footerHTML = `<calcite-button slot="footer" width="half" >Yeah!</calcite-button>
<calcite-button slot="footer" width="half" appearance="clear">Naw.</calcite-button>`;

export const basic = () =>
  create(
    "calcite-panel",
    createAttributes(),
    `${headerHTML}
    ${createAction({ text: "Some Action 1", slot: "header-leading-content" }, bluetooth16)}
    ${createAction({ text: "Some Action 1", slot: "header-trailing-content" }, attachment16)}
    ${contentHTML}
    ${footerHTML}`
  );
