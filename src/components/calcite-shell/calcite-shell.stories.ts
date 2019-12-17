import { select, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { theme } = ATTRIBUTES;
import readme from "./readme.md";

export default {
  title: "calcite-shell",
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

const html = `
<header slot="shell-header">
  <h2>My Shell Header</h2>
</header>
<calcite-shell-panel slot="primary-panel" layout="leading">
My Leading Panel</calcite-shell-panel>
<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Light Gray Canvas" src="//www.arcgis.com/apps/Embed/index.html?webmap=8b3d38c0819547faa83f7b7aca80bd76&extent=-117.2942,33.9774,-117.071,34.1333&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe>
<calcite-shell-panel slot="contextual-panel" layout="trailing">My Trailing Panel</calcite-shell-panel>
<footer slot="shell-footer">My Shell Footer</footer>`;

export const basic = () => create("calcite-shell", createAttributes(), html);

// todo: shell panel props

// todo: demo with tip-manager
