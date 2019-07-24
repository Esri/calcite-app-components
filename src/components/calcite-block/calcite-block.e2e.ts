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
    await page.setContent(
      "<calcite-block><calcite-block-content>needed to render content</calcite-block-content></calcite-block>"
    );
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

    toggle.click();
    await page.waitForChanges();

    expect(toggleSpy).toHaveReceivedEventTimes(1);
    let open = await element.getProperty("open");
    expect(open).toBe(true);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.collapse);
    expect(toggle.getAttribute("title")).toBe(TEXT.collapse);

    toggle.click();
    await page.waitForChanges();

    expect(toggleSpy).toHaveReceivedEventTimes(2);
    open = await element.getProperty("open");
    expect(open).toBe(false);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.expand);
    expect(toggle.getAttribute("title")).toBe(TEXT.expand);
  });
});
