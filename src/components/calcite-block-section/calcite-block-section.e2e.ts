import { newE2EPage } from "@stencil/core/testing";
import { CSS } from "../calcite-block/resources";

describe("calcite-block-section", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-block-section></calcite-block-section>");
    const element = await page.find("calcite-block-section");
    expect(element).toHaveClass("hydrated");
  });

  it("is not collapsible by default", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <calcite-block-section open>
        <calcite-block-content>needed to receive clicks</calcite-block-content>
      </calcite-block-section>
    `);

    const element = await page.find("calcite-block-section");

    await element.click();
    let open = await element.getProperty("open");
    expect(open).toBe(true);

    await element.click();
    open = await element.getProperty("open");
    expect(open).toBe(true);
  });

  it("is closed by default", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block-section></calcite-block-section>");
    const element = await page.find("calcite-block-section");

    const openAttr = element.getAttribute("open");
    expect(openAttr).toBeNull();

    const openProp = await element.getProperty("open");
    expect(openProp).toBe(false);
  });

  it("open property is reflected", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block-section></calcite-block-section>");
    let element = await page.find("calcite-block-section");

    element.setProperty("open", true);
    await page.waitForChanges();

    element = await page.find("calcite-block-section[open]");
    expect(element).toBeTruthy();

    element.setProperty("open", false);
    await page.waitForChanges();

    element = await page.find("calcite-block-section[open]");
    expect(element).toBeNull();
  });

  it("can be toggled", async () => {
    const page = await newE2EPage();
    await page.setContent(
      "<calcite-block-section><calcite-block-header></calcite-block-header></calcite-block-section>"
    );
    const element = await page.find("calcite-block-section");
    const toggleSpy = await element.spyOnEvent("calciteBlockSectionToggle");
    const toggle = await page.find(`calcite-block-section >>> .${CSS.toggle}`);

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
    await page.setContent(`
      <calcite-block-section>
        <calcite-block-header></calcite-block-header>
        <calcite-block-content></calcite-block-content>
      </calcite-block-section>
    `);

    const element = await page.find("calcite-block-section");

    const children = await element.getProperty("children");
    // workaround since `children` value is missing `length`
    expect(Object.keys(children)).toHaveLength(2);

    const header = await element.find("calcite-block-header");
    const headerSlotName = await header.getProperty("slot");
    expect(headerSlotName).toBe("header");
  });
});
