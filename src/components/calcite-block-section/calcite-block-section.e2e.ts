import { CSS, TEXT } from "./resources";
import { hidden, reflects, renders } from "../../tests/commonTests";
import { setUpPage } from "../../tests/utils";
import { E2EPage } from "@stencil/core/testing";

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

  describe("toggle-display = 'switch'", () => {
    it("can display/hide content", async () => {
      const page = await setUpPage(
        `<calcite-block-section toggle-display="switch"><div>some content</div></calcite-block-section>`,
        {
          withPeerDependencies: true
        }
      );
      await assertContentIsDisplayedAndHidden(page);
    });

    it("can be toggled", async () => {
      const page = await setUpPage(`<calcite-block-section toggle-display="switch"></calcite-block-section>`, {
        withPeerDependencies: true
      });
      await assertToggleBehavior(page);
    });

    it("renders section text", async () => {
      const page = await setUpPage(
        `<calcite-block-section text="test text" open toggle-display="switch"></calcite-block-section>`,
        {
          withPeerDependencies: true
        }
      );
      const element = await page.find(`calcite-block-section >>> .${CSS.toggle}`);
      expect(element.textContent).toBe("test text");
    });
  });

  describe("toggle-display = 'button' (default)", () => {
    it("can display/hide content", async () => {
      const page = await setUpPage("<calcite-block-section><div>some content</div></calcite-block-section>");
      await assertContentIsDisplayedAndHidden(page);
    });

    it("can be toggled", async () => {
      const page = await setUpPage("<calcite-block-section></calcite-block-section>");
      await assertToggleBehavior(page);
    });

    it("renders section text", async () => {
      const page = await setUpPage(`<calcite-block-section text="test text" open="true"></calcite-block-section>`);
      const element = await page.find(`calcite-block-section >>> .${CSS.toggle}`);
      expect(await element.getProperty("text")).toBe("test text");
    });
  });

  async function assertContentIsDisplayedAndHidden(page: E2EPage): Promise<void> {
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
  }

  async function assertToggleBehavior(page: E2EPage): Promise<void> {
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
  }
});
