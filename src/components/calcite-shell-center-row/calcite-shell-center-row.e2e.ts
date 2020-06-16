import { newE2EPage } from "@stencil/core/testing";

import { CSS, SLOTS } from "./resources";
import { accessible, defaults, hidden, renders } from "../../tests/commonTests";

describe("calcite-shell-center-row", () => {
  it("renders", async () => renders("calcite-shell-center-row"));

  it("honors hidden attribute", async () => hidden("calcite-shell-center-row"));

  it("defaults", async () =>
    defaults("calcite-shell-center-row", [
      {
        propertyName: "detached",
        defaultValue: false
      },
      {
        propertyName: "heightScale",
        defaultValue: "s"
      },
      {
        propertyName: "position",
        defaultValue: "end"
      }
    ]));

  it("should not render action bar container when there is no action-bar", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-center-row></calcite-shell-center-row>");

    const actionBarContainer = await page.find(`calcite-shell-center-row >>> .${CSS.actionBarContainer}`);

    expect(actionBarContainer).toBeNull();
  });

  it("should render action bar container when there is an action-bar", async () => {
    const page = await newE2EPage();

    const pageContent = `
    <calcite-shell-center-row>
      <calcite-action-bar slot=${SLOTS.actionBar}>
        <calcite-action text="hello" icon="banana"></calcite-action>
      </calcite-action-bar>
    </calcite-shell-center-row>
    `;
    await page.setContent(pageContent);

    const actionBarContainer = await page.find(`calcite-shell-center-row >>> .${CSS.actionBarContainer}`);

    expect(actionBarContainer).not.toBeNull();
  });

  it("should render action bar container first when action bar has start position", async () => {
    const page = await newE2EPage();

    const pageContent = `
    <calcite-shell-center-row>
      <div>Hello</div>
      <calcite-action-bar slot=${SLOTS.actionBar} position="start">
        <calcite-action text="hello" icon="banana"></calcite-action>
      </calcite-action-bar>
    </calcite-shell-center-row>
    `;
    await page.setContent(pageContent);

    const element = await page.find("calcite-shell-center-row");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild).toHaveClass(CSS.actionBarContainer);
  });

  it("should render action bar container last when action bar has end position", async () => {
    const page = await newE2EPage();

    const pageContent = `
    <calcite-shell-center-row>
      <calcite-action-bar slot=${SLOTS.actionBar} position="end">
        <calcite-action text="hello" icon="banana"></calcite-action>
      </calcite-action-bar>
      <div>Hello</div>
    </calcite-shell-center-row>
    `;
    await page.setContent(pageContent);

    const element = await page.find("calcite-shell-center-row");

    await page.waitForChanges();

    expect(element.shadowRoot.lastElementChild).toHaveClass(CSS.actionBarContainer);
  });

  it("should be accessible", async () =>
    accessible(`
    <calcite-shell-center-row>
      <div>content</div>
      <calcite-action-bar slot=${SLOTS.actionBar}>
        <calcite-action text="hello" icon="banana"></calcite-action>
      </calcite-action-bar>
    </calcite-shell-center-row>
    `));
});
