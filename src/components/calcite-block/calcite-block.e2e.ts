import { newE2EPage } from "@stencil/core/testing";
import { CSS } from "./resources";

describe("calcite-block", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block></calcite-block>");
    const element = await page.find("calcite-block");

    expect(element).toHaveClass("hydrated");
  });

  it("is not collapsible by default", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block></calcite-block>");
    const element = await page.find("calcite-block");

    const collapsibleProp = await element.getProperty("collapsible");
    expect(collapsibleProp).toBe(false);
  });

  it("is closed by default", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block></calcite-block>");
    const element = await page.find("calcite-block");

    const openAttr = element.getAttribute("open");
    expect(openAttr).toBeNull();

    const openProp = await element.getProperty("open");
    expect(openProp).toBe(false);
  });

  it("open property is reflected", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block></calcite-block>");
    let element = await page.find("calcite-block");

    element.setProperty("open", true);
    await page.waitForChanges();

    element = await page.find("calcite-block[open]");
    expect(element).toBeTruthy();

    element.setProperty("open", false);
    await page.waitForChanges();

    element = await page.find("calcite-block[open]");
    expect(element).toBeNull();
  });

  it("can be toggled", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block collapsible></calcite-block>");
    const element = await page.find("calcite-block");
    const toggleSpy = await element.spyOnEvent("calciteBlockToggle");
    const toggle = await page.find(`calcite-block >>> .${CSS.toggle}`);

    toggle.click();
    await page.waitForChanges();

    expect(toggleSpy).toHaveReceivedEventTimes(1);
    let open = await element.getProperty("open");
    expect(open).toBe(true);

    toggle.click();
    await page.waitForChanges();

    expect(toggleSpy).toHaveReceivedEventTimes(2);
    open = await element.getProperty("open");
    expect(open).toBe(false);
  });

  it("places header and content", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-block>
         <calcite-block-header></calcite-block-header>
         <calcite-block-content></calcite-block-content>
      </calcite-block>`
    );

    const element = await page.find("calcite-block");

    const children = await element.getProperty("children");
    // workaround since `children` value is missing `length`
    expect(Object.keys(children)).toHaveLength(2);

    const header = await element.find("calcite-block-header");
    const headerSlotName = await header.getProperty("slot");
    expect(headerSlotName).toBe("header");
  });
});
