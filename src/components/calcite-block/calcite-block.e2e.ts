import { newE2EPage } from "@stencil/core/testing";
import { CSS, SLOTS, TEXT } from "./resources";
import { accessible, defaults, hidden, renders } from "../../tests/commonTests";

describe("calcite-block", () => {
  it("renders", async () => renders("calcite-block"));

  it("honors hidden attribute", async () => hidden("calcite-block"));

  it("has property defaults", async () =>
    defaults("calcite-block", [
      {
        propertyName: "collapsible",
        defaultValue: false
      },
      {
        propertyName: "open",
        defaultValue: false
      }
    ]));

  it("is accessible", async () =>
    accessible(`
      <calcite-block heading="heading" summary="summary" open collapsible>
        <div  slot=${SLOTS.icon}>✅</div>
        <div>content</div>
        <label slot=${SLOTS.control}>test <input placeholder="control"/></label>
      </calcite-block>
  `));

  it("can display/hide content", async () => {
    const page = await newE2EPage();
    await page.setContent("<calcite-block><div>some content</div></calcite-block>");
    let element = await page.find("calcite-block");
    let content = await page.find(`calcite-block >>> .${CSS.content}`);

    expect(await content.isVisible()).toBe(false);

    element.setProperty("open", true);
    await page.waitForChanges();
    element = await page.find("calcite-block[open]");
    content = await page.find(`calcite-block >>> .${CSS.content}`);

    expect(element).toBeTruthy();
    expect(await content.isVisible()).toBe(true);

    element.setProperty("open", false);
    await page.waitForChanges();
    element = await page.find("calcite-block[open]");
    content = await page.find(`calcite-block >>> .${CSS.content}`);

    expect(element).toBeNull();
    expect(await content.isVisible()).toBe(false);
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
    expect(await element.getProperty("open")).toBe(true);
    expect(toggle.getAttribute("aria-label")).toBe(TEXT.collapse);
    expect(toggle.getAttribute("title")).toBe(TEXT.collapse);

    await toggle.click();

    expect(toggleSpy).toHaveReceivedEventTimes(2);
    expect(await element.getProperty("open")).toBe(false);
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

    it("allows users to add a control in a collapsible block", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `<calcite-block heading="test-heading" collapsible><input class="nested-control" slot=${SLOTS.control} /></calcite-block>`
      );
      const control = await page.find(".nested-control");
      expect(await control.isVisible()).toBe(true);

      const controlSlot = await page.find(`calcite-block >>> slot[name=${SLOTS.control}]`);
      expect(await controlSlot.isVisible()).toBe(true);

      const collapsibleIcon = await page.find(`calcite-block >>> .${CSS.toggleIcon}`);
      expect(collapsibleIcon).toBeNull();

      const block = await page.find("calcite-block");
      const blockToggleSpy = await block.spyOnEvent("calciteBlockToggle");

      await control.click();
      expect(blockToggleSpy).toHaveReceivedEventTimes(0);

      await block.click();
      await block.click();
      expect(blockToggleSpy).toHaveReceivedEventTimes(2);
    });

    it("supports a header icon", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `<calcite-block heading="test-heading"><div class="header-icon" slot=${SLOTS.icon} /></calcite-block>`
      );

      const icon = await page.find(`.header-icon`);
      expect(await icon.isVisible()).toBe(true);

      const iconSlot = await page.find(`calcite-block >>> slot[name=${SLOTS.icon}]`);
      expect(await iconSlot.isVisible()).toBe(true);
    });
  });
});
