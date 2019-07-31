import { newE2EPage } from "@stencil/core/testing";
import { TEXT } from "./resources";

describe("calcite-block-section", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-block-section></calcite-block-section>");
    const element = await page.find("calcite-block-section");
    expect(element).toHaveClass("hydrated");
  });

  it("should be collapsible by default", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <calcite-block-section>
        needed to receive clicks
      </calcite-block-section>
    `);

    const element = await page.find("calcite-block-section");

    await element.click();
    let open = await element.getProperty("open");
    expect(open).toBe(true);

    await element.click();
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
    const toggleSpy = await element.spyOnEvent("calciteBlockSectionToggle");
    const toggle = await page.find(`calcite-block-section >>> calcite-action`);

    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);

    toggle.click();
    await page.waitForChanges();

    expect(toggleSpy).toHaveReceivedEventTimes(1);
    let open = await element.getProperty("open");
    expect(open).toBe(true);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.collapse);

    toggle.click();
    await page.waitForChanges();

    expect(toggleSpy).toHaveReceivedEventTimes(2);
    open = await element.getProperty("open");
    expect(open).toBe(false);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);
  });

  it("places calcite-action and slotted content inside calcite-block-content", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <calcite-block-section open>
        Slotted content.
      </calcite-block-section>
    `);

    const element = await page.find("calcite-block-section >>> calcite-block-content");

    const children = await element.getProperty("children");
    // workaround since `children` value is missing `length`
    expect(Object.keys(children)).toHaveLength(1);
  });

  it("sets calcite-block-section text-label to be text of calcite-action", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <calcite-block-section text="test text" open="true">
        Slotted content.
      </calcite-block-section>
    `);

    const element = await page.find(`calcite-block-section >>> calcite-action`);
    expect(element.shadowRoot.textContent).toEqualText("test text");
  });
});
