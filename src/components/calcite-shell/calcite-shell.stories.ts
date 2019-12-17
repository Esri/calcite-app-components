import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { theme } = ATTRIBUTES;
import readme from "./readme.md";
import panelReadme from "../calcite-shell-panel/readme.md";
import { CalciteLayoutValues } from "../calcite-shell-panel/resources";

export default {
  title: "calcite-shell",
  decorators: [withKnobs],
  parameters: {
    notes: {
      shell: parseReadme(readme),
      panel: parseReadme(panelReadme)
    },
    backgrounds: darkBackground
  }
};

const createAttributes: (group: string) => Attributes = (group) => {
  return [
    {
      name: "theme",
      value: select("theme", theme.values, theme.defaultValue, group)
    }
  ];
};

const createShellPanelAttributes: (group: string, slot: "primary-panel" | "contextual-panel") => Attributes = (
  group,
  slot
) => {
  return [
    {
      name: "slot",
      value: slot
    },
    {
      name: "collapsed",
      value: boolean("collapsed", false, group)
    },
    {
      name: "layout",
      value: select("layout", CalciteLayoutValues, slot === "primary-panel" ? "leading" : "trailing", group)
    },
    {
      name: "theme",
      value: select("theme", theme.values, theme.defaultValue, group)
    }
  ];
};

const leadingPanelHTML = `My Leading Panel`;

const trailingPanelHTML = `My Trailing Panel`;

const headerHTML = `<header slot="shell-header">
<h2>My Shell Header</h2>
</header>`;

const footerHTML = `<footer slot="shell-footer">My Shell Footer</footer>`;

const contentHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Light Gray Canvas" src="//www.arcgis.com/apps/Embed/index.html?webmap=8b3d38c0819547faa83f7b7aca80bd76&extent=-117.2942,33.9774,-117.071,34.1333&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe>`;

const html = `
${headerHTML}
${create("calcite-shell-panel", createShellPanelAttributes("Leading", "primary-panel"), leadingPanelHTML)}
${contentHTML}
${create("calcite-shell-panel", createShellPanelAttributes("Trailing", "contextual-panel"), trailingPanelHTML)}
${footerHTML}`;

export const basic = () => create("calcite-shell", createAttributes("Shell"), html);

// todo: shell panel props

// todo: advanced demo with tip-manager
