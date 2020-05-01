import { newE2EPage } from "@stencil/core/testing";

import { CSS } from "./resources";
import { accessible, defaults, hidden, renders } from "../../tests/commonTests";

describe("calcite-shell-center-row", () => {
  it("renders", async () => renders("calcite-shell-center-row"));

  it("honors hidden attribute", async () => hidden("calcite-shell-panel"));

  it("defaults", async () =>
    defaults("calcite-shell-panel", [
      {
        propertyName: "collapsed",
        defaultValue: false
      }
    ]));

  it("has a slot", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-center-row></calcite-shell-center-row>");
    const element = await page.find("calcite-shell-center-row");
    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });

  it("should show row content", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-center-row><div>content</div></calcite-shell-center-row>");

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-center-row >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(true);
  });

  it("collapsed property should hide row content", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-center-row collapsed><div>content</div></calcite-shell-center-row>");

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-center-row >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(false);
  });

  it("collapsed change should fire event", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-center-row><div>content</div></calcite-shell-center-row>");

    const element = await page.find(`calcite-shell-center-row`);

    const eventSpy = await page.spyOnEvent("calciteShellCenterRowToggle", "window");

    element.setProperty("collapsed", true);

    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("should be accessible", async () => {
    accessible("<calcite-shell-center-row collapsed><div>content</div></calcite-shell-center-row>");
  });
});
