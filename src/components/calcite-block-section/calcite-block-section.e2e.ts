import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";

describe("calcite-block-section", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-block-section></calcite-block-section>");
    const element = await page.find("calcite-block-section");
    expect(element).toHaveClass("hydrated");
  });

  it("should be collapsed by default", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <calcite-block-section>
        needed to receive clicks
      </calcite-block-section>
    `);

    const element = await page.find("calcite-block-section");
    const toggle = await page.find("calcite-block-section >>> calcite-action");

    await toggle.click();
    let open = await element.getProperty("open");
    expect(open).toBe(true);

    await toggle.click();
    open = await element.getProperty("open");
    expect(open).toBe(false);
  });

  it("is closed by default", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block-section></calcite-block-section>");
    const element = await page.find("calcite-block-section");

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
    await page.setContent("<calcite-block-section></calcite-block-section>");
    const element = await page.find("calcite-block-section");
    const content = await page.find(`calcite-block-section >>> .${CSS.content}`);
    const toggleSpy = await element.spyOnEvent("calciteBlockSectionToggle");
    const toggle = await page.find(`calcite-block-section >>> calcite-action`);

    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);
    expect(await content.isVisible()).toBe(false);

    await toggle.click();

    expect(toggleSpy).toHaveReceivedEventTimes(1);
    let open = await element.getProperty("open");
    expect(open).toBe(true);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.collapse);
    expect(await content.isVisible()).toBe(true);

    await toggle.click();

    expect(toggleSpy).toHaveReceivedEventTimes(2);
    open = await element.getProperty("open");
    expect(open).toBe(false);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);
    expect(await content.isVisible()).toBe(false);
  });

  it("sets calcite-block-section renders section text", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <calcite-block-section text="test text" open="true"></calcite-block-section>
    `);

    const element = await page.find(`calcite-block-section >>> calcite-action`);
    expect(await element.getProperty("text")).toBe("test text");
  });
});
