import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";
import { hidden, reflects, renders } from "../../tests/commonTests";

describe("calcite-block-section", () => {
  it("renders", async () => renders("calcite-block-section"));

  it("honors hidden attribute", async () => hidden("calcite-block-section"));

  it("reflects properties", async () =>
    reflects("calcite-block-section", [
      {
        propertyName: "open",
        value: true
      }
    ]));

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
    const toggle = await page.find(`calcite-block-section >>> calcite-action`);

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

    const element = await page.find(`calcite-block-section >>> calcite-action`);
    expect(await element.getProperty("text")).toBe("test text");
  });
});
