import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { theme } = ATTRIBUTES;
import readme from "./readme.md";
import itemReadme from "../calcite-flow-item/readme.md";

export default {
  title: "components|calcite-flow",
  decorators: [withKnobs],
  parameters: {
    notes: {
      flow: parseReadme(readme),
      item: parseReadme(itemReadme)
    },
    backgrounds: darkBackground
  }
};

const createAttributes: () => Attributes = () => {
  const group = "Flow";

  return [
    {
      name: "theme",
      value: select("theme", theme.values, theme.defaultValue, group)
    }
  ];
};

const createFlowItemAttributes: (group: string) => Attributes = (group) => {
  return [
    {
      name: "disabled",
      value: boolean("disabled", false, group)
    },
    {
      name: "heading",
      value: text("heading", "Flow-heading", group)
    },
    {
      name: "loading",
      value: boolean("loading", false, group)
    },
    {
      name: "menu-open",
      value: boolean("menuOpen", false, group)
    },
    {
      name: "text-back",
      value: text("textBack", "Back", group)
    },
    {
      name: "text-open",
      value: text("textOpen", "Open", group)
    },
    {
      name: "theme",
      value: select("theme", theme.values, theme.defaultValue, group)
    }
  ];
};

const menuActionsHTML = `<div slot="menu-actions">
  <calcite-action text="Add" label="Add Item"><calcite-icon icon="plus"></calcite-icon></calcite-action>
  <calcite-action text="Save" label="Save Item"><calcite-icon icon="save"></calcite-icon></calcite-action>
  <calcite-action text="Layers" label="View Layers"><calcite-icon icon="layers"></calcite-icon></calcite-action>
</div>`;

const footerActionsHTML = `<calcite-button slot="footer-actions" width="half">Save</calcite-button>
<calcite-button slot="footer-actions" width="half" appearance="clear">Cancel</button>`;

function createItemHTML(content: string): string {
  return `${menuActionsHTML}${content}${footerActionsHTML}`;
}

const item1HTML = `<p>
Enim nascetur erat faucibus ornare varius arcu fames bibendum habitant felis elit ante. Nibh morbi massa curae; leo semper diam aenean congue taciti eu porta. Varius faucibus ridiculus donec. Montes sit ligula purus porta ante lacus habitasse libero cubilia purus! In quis congue arcu maecenas felis cursus pellentesque nascetur porta donec non. Quisque, rutrum ligula pharetra justo habitasse facilisis rutrum neque. Magnis nostra nec nulla dictumst taciti consectetur. Non porttitor tempor orci dictumst magna porta vitae.
</p>
<p>
Ipsum nostra tempus etiam augue ullamcorper scelerisque sapien potenti erat nisi gravida. Vehicula sem tristique sed. Nullam, sociis imperdiet ullamcorper? Dapibus fames primis ridiculus vulputate, habitant inceptos! Nunc torquent lorem urna vehicula volutpat donec nec. Orci massa eu nec donec enim fames, faucibus quam aenean. Laoreet tellus tempor quisque ornare lobortis praesent erat senectus natoque consectetur donec imperdiet. Quis sem cum gravida dictumst a pretium purus aptent amet id. Orci habitasse, praesent facilisis condimentum. Nec elit turpis leo.
</p>
<p>
Tempus per volutpat diam tempor mauris parturient vulputate leo id libero quisque. Mattis aliquam dictum venenatis fringilla. Taciti venenatis, ultrices sollicitudin consequat. Sapien fusce est iaculis potenti ut auctor potenti. Nisi malesuada feugiat vulputate vitae porttitor. Nullam nullam nullam accumsan quis magna in. Elementum, nascetur gravida cras scelerisque inceptos aenean inceptos potenti. Lobortis condimentum accumsan posuere curabitur fermentum diam, natoque quisque. Eget placerat sed aptent orci urna fusce magnis. Vel lacus magnis nunc.
</p>
<p>
Magna ligula neque phasellus. Velit duis auctor etiam nullam sociis nam neque quis. Donec fusce bibendum quam egestas sociosqu orci tempus vulputate egestas penatibus urna sociosqu. Nulla nam potenti diam egestas litora lobortis tristique maecenas pulvinar maecenas vitae tortor. Lacus purus facilisi est accumsan varius gravida facilisis rutrum tortor potenti rhoncus id. Ipsum praesent tristique blandit taciti morbi torquent pharetra fermentum aenean!
</p>
<p>
Congue eu duis integer nisl molestie nostra dis auctor lobortis tellus parturient. Porttitor dis curae; maecenas quis praesent ridiculus posuere mus. Dictumst, vivamus fames semper congue fusce! Nunc placerat enim fermentum posuere magna justo habitasse. Tristique placerat mauris, per nulla gravida dui urna ut nec venenatis! Non lacus iaculis quisque, neque erat integer. Duis tortor ad habitant turpis dis eu mollis at facilisis. Tellus nisl amet morbi fringilla mus dui neque himenaeos maecenas platea venenatis. Tristique nisl quisque ad aliquam senectus pulvinar litora.
</p>`;

const item2HTML = `<ul>
<li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
<li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
<li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
<li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
</ul>`;

export const basic = () =>
  create(
    "calcite-flow",
    createAttributes(),
    `${create("calcite-flow-item", createFlowItemAttributes("Flow Item 1"), createItemHTML(item1HTML))}
    ${create("calcite-flow-item", createFlowItemAttributes("Flow Item 2"), createItemHTML(item2HTML))}`
  );
