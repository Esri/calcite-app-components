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

  it("can display/hide content", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block-section><div>some content</div></calcite-block-section>");
    let element = await page.find("calcite-block-section");
    let content = await page.find(`calcite-block-section >>> .${CSS.content}`);

    expect(await content.isVisible()).toBe(false);

    element.setProperty("open", true);
    await page.waitForChanges();
    element = await page.find("calcite-block-section[open]");
    content = await page.find(`calcite-block-section >>> .${CSS.content}`);

    expect(element).toBeTruthy();
    expect(await content.isVisible()).toBe(true);

    element.setProperty("open", false);
    await page.waitForChanges();
    element = await page.find("calcite-block-section[open]");
    content = await page.find(`calcite-block-section >>> .${CSS.content}`);

    expect(element).toBeNull();
    expect(await content.isVisible()).toBe(false);
  });

  it("can be toggled", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block-section></calcite-block-section>");
    const element = await page.find("calcite-block-section");
    const toggleSpy = await element.spyOnEvent("calciteBlockSectionToggle");
    const toggle = await page.find(`calcite-block-section >>> .${CSS.toggle}`);

    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);

    await toggle.click();

    expect(toggleSpy).toHaveReceivedEventTimes(1);
    expect(await element.getProperty("open")).toBe(true);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.collapse);

    await toggle.click();

    expect(toggleSpy).toHaveReceivedEventTimes(2);
    expect(await element.getProperty("open")).toBe(false);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);
  });

  it("sets calcite-block-section renders section text", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <calcite-block-section text="test text" open="true"></calcite-block-section>
    `);

    const element = await page.find(`calcite-block-section >>> .${CSS.heading}`);
    expect(element.innerText).toBe("test text");
  });

  it("supports a nested control", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-block-section heading="test-heading" collapsible><input class="nested-control" slot="control" /></calcite-block-section>`
    );
    const element = await page.find("calcite-block-section");
    const elementToggleSpy = await element.spyOnEvent("calciteBlockSectionToggle");

    const control = await element.find(".nested-control");
    expect(await control.isVisible()).toBe(true);

    await control.click();
    expect(elementToggleSpy).toHaveReceivedEventTimes(0);

    await element.click();
    await element.click();
    expect(elementToggleSpy).toHaveReceivedEventTimes(2);
  });
});
