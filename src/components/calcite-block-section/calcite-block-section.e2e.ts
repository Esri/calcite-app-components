import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";

describe("calcite-block-section", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-block-section></calcite-block-section>");
    const element = await page.find("calcite-block-section");
    expect(element).toHaveClass("hydrated");
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

    expect(await element.getProperty("open")).toBe(false);
    expect(await content.isVisible()).toBe(false);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);

    await toggle.click();

    expect(await element.getProperty("open")).toBe(true);
    expect(await content.isVisible()).toBe(true);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.collapse);
    expect(toggleSpy).toHaveReceivedEventTimes(1);

    await toggle.click();

    expect(await element.getProperty("open")).toBe(false);
    expect(await content.isVisible()).toBe(false);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);
    expect(toggleSpy).toHaveReceivedEventTimes(2);
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
