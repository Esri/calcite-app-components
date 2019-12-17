import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { Attributes, createComponentHTML as create, darkBackground, parseReadme } from "../../../.storybook/utils";
import { ATTRIBUTES, createAction } from "../../../.storybook/resources";
const { theme } = ATTRIBUTES;
import readme from "./readme.md";
import panelReadme from "../calcite-shell-panel/readme.md";
import { CalciteLayoutValues } from "../calcite-shell-panel/resources";
import { layers16, plus16, save16 } from "@esri/calcite-ui-icons";

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

const createShellPanelAttributes: (group: "Leading" | "Trailing") => Attributes = (group) => {
  return [
    {
      name: "slot",
      value: group === "Leading" ? "primary-panel" : "contextual-panel"
    },
    {
      name: "collapsed",
      value: boolean("collapsed", false, group)
    },
    {
      name: "layout",
      value: select("layout", CalciteLayoutValues, group === "Leading" ? "leading" : "trailing", group)
    },
    {
      name: "theme",
      value: select("theme", theme.values, theme.defaultValue, group)
    }
  ];
};

const actionBarContentHTML = `<calcite-action-group>
${createAction({ text: "Add", label: "Add Item" }, plus16)}
${createAction({ text: "Save", label: "Save Item" }, save16)}
</calcite-action-group>
<calcite-action-group>
${createAction({ text: "Layers", label: "View Layers" }, layers16)}
</calcite-action-group>`;

const actionBarHTML = `<calcite-action-bar slot="action-bar">
${actionBarContentHTML}
</calcite-action-bar>`;

const leadingPanelHTML = `${actionBarHTML}
<p>My Leading Panel</p>`;

const trailingPanelHTML = `${actionBarHTML}
<p>My Trailing Panel</p>`;

const headerHTML = `<header slot="shell-header">
<h2>My Shell Header</h2>
</header>`;

const footerHTML = `<footer slot="shell-footer">My Shell Footer</footer>`;

const contentHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Light Gray Canvas" src="//www.arcgis.com/apps/Embed/index.html?webmap=8b3d38c0819547faa83f7b7aca80bd76&extent=-117.2942,33.9774,-117.071,34.1333&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe>`;

const tipManagerHTML = `<calcite-tip-manager slot="tip-manager">
<calcite-tip-group text-group-title="Astronomy">
  <calcite-tip
    heading="The Red Rocks and Blue Water"
    thumbnail="https://placeimg.com/1000/600"
    text-thumbnail="This is an image of nature."
  >
    <p slot="info">
      This tip is how a tip should really look. It has a landscape or square image and a small amount of text
      content. This paragraph is in an "info" slot.
    </p>
    <p slot="info">
      This is another paragraph in a subsequent "info" slot. In publishing and graphic design, Lorem ipsum is
      a placeholder text commonly used to demonstrate the visual form of a document without relying on
      meaningful content (also called greeking). Replacing the actual content with placeholder text allows
      designers to design the form of the content before the content itself has been produced.
    </p>
    <a slot="link" href="http://www.esri.com">This is the "link" slot.</a>
  </calcite-tip>
  <calcite-tip
    heading="The Long Trees"
    thumbnail="https://placeimg.com/600/1000"
    text-thumbnail="This is an image of nature."
  >
    <p slot="info">
      This tip has an image that is a pretty tall. And the text will run out before the end of the image.
    </p>
    <p slot="info">In astronomy, the terms object and body are often used interchangeably.</p>
    <a slot="link" href="http://www.esri.com">View Esri</a>
  </calcite-tip>
</calcite-tip-group>
<calcite-tip
  heading="Square Nature"
  thumbnail="https://placeimg.com/1000/1000"
  text-thumbnail="This is an image of nature."
>
  <p slot="info">
    This tip has an image that is square. And the text will run out before the end of the image.
  </p>
  <p slot="info">In astronomy, the terms object and body are often used interchangeably.</p>
  <p slot="info">
    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
    visual form of a document without relying on meaningful content (also called greeking). Replacing the
    actual content with placeholder text allows designers to design the form of the content before the content
    itself has been produced.
  </p>
  <a slot="link" href="http://www.esri.com">View Esri</a>
</calcite-tip>
<calcite-tip heading="The lack of imagery">
  <p slot="info">
    This tip has no image. As such, the content area will take up the entire width of the tip.
  </p>
  <p slot="info">
    This is the next paragraph and should show how wide the content area is now. Of course, the width of the
    overall tip will affect things. In astronomy, the terms object and body are often used interchangeably.
  </p>
  <a slot="link" href="http://www.esri.com">View Esri</a>
</calcite-tip>
</calcite-tip-manager>`;

export const basic = () =>
  create(
    "calcite-shell",
    createAttributes("Shell"),
    `${headerHTML}
    ${create("calcite-shell-panel", createShellPanelAttributes("Leading"), leadingPanelHTML)}
    ${contentHTML}
    ${create("calcite-shell-panel", createShellPanelAttributes("Trailing"), trailingPanelHTML)}
    ${footerHTML}`
  );

const advancedLeadingPanelHTML = `${actionBarHTML}<calcite-block collapsible open heading="Primary Content" summary="This is the primary.">
<calcite-block-content>
  <calcite-action text="horizontal ActionPad" text-display="visible" id="action-pad-button" indicator>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
      <path
        d="M13.071 1H1.93a.929.929 0 0 0-.93.929V13.07a.929.929 0 0 0 .929.929H13.07a.929.929 0 0 0 .929-.929V1.93a.929.929 0 0 0-.928-.93zM13 13H2V2h11zm-7-1V3l4.5 4.5zm1-2.414L9.086 7.5 7 5.414z"
      />
    </svg>
  </calcite-action>
  <calcite-action
    text="Vertical Shell Floating Panel"
    text-display="visible"
    id="shell-floating-panel-button"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
      <path d="M2 14h4v1H1v-5h1zm12-8h1V1h-5v1h4zm0 4v4h-4v1h5v-5zM1 6h1V2h4V1H1z" />
    </svg>
  </calcite-action>
  <calcite-action
    text="horizontal Shell Floating Panel"
    text-display="visible"
    id="shell-floating-panel-button-2"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
      <path d="M2.647 12.584L12.288 3H9V2h5v5h-1V3.702l-9.647 9.591z" />
    </svg>
  </calcite-action>
</calcite-block-content>
</calcite-block>
<calcite-block collapsible open heading="Another Block" summary="This is the primary.">
<calcite-block-content>
  <div style="height: 300px;">
    <p>Cool thing.</p>
  </div>
</calcite-block-content>
</calcite-block>
<calcite-block collapsible open heading="Additional Block" summary="This is the primary.">
<calcite-block-content>
  <div style="height: 300px;">
    <p>Cool thing.</p>
  </div>
</calcite-block-content>
</calcite-block>
<calcite-block collapsible open heading="More Block" summary="This is the primary.">
<calcite-block-content>
  <div style="height: 300px;">
    <p>Cool thang.</p>
  </div>
</calcite-block-content>
</calcite-block>`;

const advancedTrailingPanelHTMl = `${actionBarHTML}<calcite-flow id="flow">
<calcite-flow-item heading="Layer settings">
  <div slot="menu-actions">
    <calcite-action text="Do a cool thing" text-display="visible"></calcite-action>
    <calcite-action text="Do a cool thing" text-display="visible"></calcite-action>
    <calcite-action text="Do a cool thing" text-display="visible"></calcite-action>
  </div>
  <calcite-block collapsible open heading="Contextual Content" summary="Select goodness">
    <calcite-block-content>
      <img alt="demo" src="https://placeimg.com/640/480/any" width="100%" />
      <calcite-block-section text="Cool things">
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
      </calcite-block-section>
      <calcite-block-section text="Neat things">
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
      </calcite-block-section>
    </calcite-block-content>
  </calcite-block>
  <calcite-button slot="footer-actions" width="half" >Save</calcite-button>
  <calcite-button slot="footer-actions" width="half" appearance="clear">Cancel</calcite-button>
</calcite-flow-item>
<calcite-flow-item heading="Deeper flow item">
  <calcite-block collapsible open heading="Contextual Content" summary="Select goodness">
    <calcite-block-content>
      <calcite-block-section text="Cool things">
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
      </calcite-block-section>
      <img alt="demo" src="https://placeimg.com/640/480/any" width="100%" />
      <calcite-block-section text="Neat things">
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
      </calcite-block-section>
    </calcite-block-content>
  </calcite-block>
  <calcite-block collapsible open heading="Even more content" summary="Select goodness">
    <calcite-block-content>
      <calcite-block-section text="Cool things">
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
        <calcite-action text-display="visible" text="cool thing"></calcite-action>
      </calcite-block-section>
      <img alt="demo" src="https://placeimg.com/640/480/nature" width="100%" />
      <calcite-block-section text="Neat things">
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
        <calcite-action text-display="visible" text="neat thing"></calcite-action>
      </calcite-block-section>
    </calcite-block-content>
  </calcite-block>
  <calcite-button slot="footer-actions" width="half" >Save</calcite-button>
  <calcite-button slot="footer-actions" width="half" appearance="clear">Cancel</calcite-button>
</calcite-flow-item>
</calcite-flow>`;

export const advanced = () =>
  create(
    "calcite-shell",
    createAttributes("Shell"),
    `${headerHTML}
    ${create("calcite-shell-panel", createShellPanelAttributes("Leading"), advancedLeadingPanelHTML)}
    ${contentHTML}
    ${create("calcite-shell-panel", createShellPanelAttributes("Trailing"), advancedTrailingPanelHTMl)}
    ${tipManagerHTML}
    ${footerHTML}`
  );
