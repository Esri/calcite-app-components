import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";
import { ICON_TYPES } from "./resources";
import { hidden, renders } from "../../tests/commonTests";
import tests from "./shared-list-tests";

describe("calcite-pick-list", () => {
  it("renders", async () => renders("calcite-pick-list"));
  it("honors hidden attribute", async () => hidden("calcite-pick-list"));

  describe("Selection and Deselection", () => {
    tests.selectionAndDeselection("pick");
    // TODO: shift click test
    // describe.skip("shift click behavior", () => {
    //   it("should multi-select", async () => {

    //   });
    // });
  });

  describe("icon logic", () => {
    it("should be 'circle' when multi-select is disabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-pick-list>
        <calcite-pick-list-item value="one"></calcite-pick-list-item>
      </calcite-pick-list>`);

      const item = await page.find("calcite-pick-list-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBe(ICON_TYPES.circle);
    });
    it("should be 'square' when multi-select is enabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-pick-list multiple>
        <calcite-pick-list-item value="one"></calcite-pick-list-item>
      </calcite-pick-list>`);

      const item = await page.find("calcite-pick-list-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBe(ICON_TYPES.square);
    });
  });

  // TODO: disabled state tests.
  // describe.skip('disabled states', () => {
  //   it("disabled", async () => {
  //   });
  //   it("loading", async () => {
  //   });
  // });
  describe("filter behavior (hide/show items)", () => {
    let page: E2EPage = null;
    let item1: E2EElement;
    let item2: E2EElement;
    let item1Visible;
    let item2Visible;
    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent(`<calcite-pick-list filter-enabled="true">
        <calcite-pick-list-item value="1" text-label="One" text-description="uno"></calcite-pick-list-item>
        <calcite-pick-list-item value="2" text-label="Two" text-description="dos"></calcite-pick-list-item>
      </calcite-pick-list>`);
      item1 = await page.find('calcite-pick-list-item[value="1"]');
      item2 = await page.find('calcite-pick-list-item[value="2"]');
      item1.setProperty("metadata", { category: "first" });
      item2.setProperty("metadata", { category: "second" });
      await page.waitForChanges();
      await page.evaluate(() => {
        (window as any).filter = document.querySelector("calcite-pick-list").shadowRoot.querySelector("calcite-filter");
        const filter = (window as any).filter;
        (window as any).filterInput = filter.shadowRoot.querySelector("input");
      });
    });
    it("should match text in the text-label prop", async () => {
      // Match first item
      await page.evaluate(() => {
        const filterInput = (window as any).filterInput;
        filterInput.value = "one";
        filterInput.dispatchEvent(new Event("input"));
      });
      await item2.waitForNotVisible();

      item1Visible = await item1.isVisible();
      item2Visible = await item2.isVisible();

      expect(item1Visible).toBe(true);
      expect(item2Visible).toBe(false);

      // Match second item
      await page.evaluate(() => {
        const filterInput = (window as any).filterInput;
        filterInput.value = "two";
        filterInput.dispatchEvent(new Event("input"));
      });
      await item1.waitForNotVisible();

      item1Visible = await item1.isVisible();
      item2Visible = await item2.isVisible();
      expect(item1Visible).toBe(false);
      expect(item2Visible).toBe(true);
    });
    it("should match text in the text-description prop", async () => {
      // Match first item
      await page.evaluate(() => {
        const filterInput = (window as any).filterInput;
        filterInput.value = "uno";
        filterInput.dispatchEvent(new Event("input"));
      });
      await item2.waitForNotVisible();

      item1Visible = await item1.isVisible();
      item2Visible = await item2.isVisible();

      expect(item1Visible).toBe(true);
      expect(item2Visible).toBe(false);

      // Match second item
      await page.evaluate(() => {
        const filterInput = (window as any).filterInput;
        filterInput.value = "dos";
        filterInput.dispatchEvent(new Event("input"));
      });
      await item1.waitForNotVisible();

      item1Visible = await item1.isVisible();
      item2Visible = await item2.isVisible();
      expect(item1Visible).toBe(false);
      expect(item2Visible).toBe(true);
    });
    it("should match text in the metadata prop", async () => {
      await page.evaluate(() => {
        const filterInput = (window as any).filterInput;
        filterInput.value = "first";
        filterInput.dispatchEvent(new Event("input"));
      });
      await item2.waitForNotVisible();

      let item1Visible = await item1.isVisible();
      let item2Visible = await item2.isVisible();
      expect(item1Visible).toBe(true);
      expect(item2Visible).toBe(false);

      await page.evaluate(() => {
        const filterInput = (window as any).filterInput;
        filterInput.value = "second";
        filterInput.dispatchEvent(new Event("input"));
      });
      await item1.waitForNotVisible();

      item1Visible = await item1.isVisible();
      item2Visible = await item2.isVisible();
      expect(item1Visible).toBe(false);
      expect(item2Visible).toBe(true);
    });
  });
});
