import { newE2EPage } from "@stencil/core/testing";

import { CSS } from "./resources";
import { defaults, hidden, renders } from "../../tests/commonTests";

describe("calcite-shell-panel", () => {
  it("renders", async () => renders("calcite-shell-panel"));

  it("honors hidden attribute", async () => hidden("calcite-shell-panel"));

  it("defaults", async () =>
    defaults("calcite-shell-panel", [
      {
        propertyName: "layout",
        defaultValue: "leading"
      },
      {
        propertyName: "collapsed",
        defaultValue: false
      }
    ]));

  it("has a slot", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-panel></calcite-shell-panel>");
    const element = await page.find("calcite-shell-panel");
    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });

  it("should show panel content", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-panel >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(true);
  });

  it("collapsed property should hide panel content", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel collapsed><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-panel >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(false);
  });

  it("collapsed change should fire event", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find(`calcite-shell-panel`);

    const eventSpy = await page.spyOnEvent("calciteShellPanelCollapsedToggle", "window");

    element.setProperty("collapsed", true);

    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("leading layout property should have action slot first ", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel layout="leading"><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });

  it("trailing layout property should have DIV first ", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel layout="trailing"><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("DIV");
  });
});
