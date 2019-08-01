import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";

describe("calcite-block", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block></calcite-block>");
    const element = await page.find("calcite-block");

    expect(element).toHaveClass("hydrated");
  });

  it("defaults", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block></calcite-block>");
    const element = await page.find("calcite-block");

    const collapsibleProp = await element.getProperty("collapsible");
    expect(collapsibleProp).toBe(false);

    const openProp = await element.getProperty("open");
    expect(openProp).toBe(false);
  });

  it("can display/hide content", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block><div>some content</div></calcite-block>");
    let element = await page.find("calcite-block");
    let content = await page.find(`calcite-block >>> .${CSS.content}`);

    expect(content).toBeNull();

    element.setProperty("open", true);
    await page.waitForChanges();
    element = await page.find("calcite-block[open]");
    content = await page.find(`calcite-block >>> .${CSS.content}`);

    const visible = await content.isVisible();
    expect(element).toBeTruthy();
    expect(visible).toBe(true);

    element.setProperty("open", false);
    await page.waitForChanges();
    element = await page.find("calcite-block[open]");
    content = await page.find(`calcite-block >>> .${CSS.content}`);

    expect(element).toBeNull();
    expect(content).toBeNull();
  });

  it("allows toggling its content", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block collapsible></calcite-block>");
    const element = await page.find("calcite-block");
    const toggleSpy = await element.spyOnEvent("calciteBlockToggle");
    const toggle = await page.find(`calcite-block >>> .${CSS.toggle}`);

    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);
    expect(toggle.getAttribute("title")).toBe(TEXT.expand);

    await toggle.click();

    expect(toggleSpy).toHaveReceivedEventTimes(1);
    let open = await element.getProperty("open");
    expect(open).toBe(true);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.collapse);
    expect(toggle.getAttribute("title")).toBe(TEXT.collapse);

    await toggle.click();

    expect(toggleSpy).toHaveReceivedEventTimes(2);
    open = await element.getProperty("open");
    expect(open).toBe(false);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);
    expect(toggle.getAttribute("title")).toBe(TEXT.expand);
  });

  describe("header", () => {
    it("renders a heading", async () => {
      const page = await newE2EPage();

      await page.setContent(`<calcite-block heading="test-heading"></calcite-block>`);

      const heading = await page.find(`calcite-block >>> .${CSS.heading}`);
      expect(heading).toBeTruthy();
      expect(heading.innerText).toBe("test-heading");

      const summary = await page.find(`calcite-block >>> .${CSS.summary}`);
      expect(summary).toBeNull();
    });

    it("renders a heading with optional summary", async () => {
      const page = await newE2EPage();

      await page.setContent(`<calcite-block heading="test-heading" summary="test-summary"></calcite-block>`);

      const heading = await page.find(`calcite-block >>> .${CSS.heading}`);
      expect(heading).toBeTruthy();

      const summary = await page.find(`calcite-block >>> .${CSS.summary}`);
      expect(summary.innerText).toBe("test-summary");
    });

    it("supports a nested control", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `<calcite-block heading="test-heading" collapsible><input class="nested-control" slot="control" /></calcite-block>`
      );
      const element = await page.find("calcite-block");
      const elementToggleSpy = await element.spyOnEvent("calciteBlockToggle");

      const control = await element.find(".nested-control");
      expect(control).toBeTruthy();

      await control.click();
      expect(elementToggleSpy).toHaveReceivedEventTimes(0);

      await element.click();
      await element.click();
      expect(elementToggleSpy).toHaveReceivedEventTimes(2);
    });
  });
});
