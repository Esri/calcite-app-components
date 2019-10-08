import { newE2EPage } from "@stencil/core/testing";
import { CSS, ICON_TYPES } from "./resources";

describe("calcite-pick-list", () => {
  it("should render", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-pick-list></calcite-pick-list>`);
    const pickList = await page.find("calcite-pick-list");
    expect(pickList).not.toBeNull();
    const isVisible = await pickList.isVisible();
    expect(isVisible).toBe(true);
  });

  describe("Selection and Deselection", () => {
    describe("when multiple is false and a item is clicked", () => {
      it("should emit an event with the last selected item data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-pick-list>
          <calcite-pick-list-item value="one"></calcite-pick-list-item>
          <calcite-pick-list-item value="two"></calcite-pick-list-item>
        </calcite-pick-list>`);

        const pickList = await page.find("calcite-pick-list");
        const item1 = await pickList.find("[value=one]");
        const item2 = await pickList.find("[value=two]");
        const toggleSpy = await pickList.spyOnEvent("calciteListSelectionChange");

        await item1.click();
        await item2.click();
        expect(toggleSpy).toHaveReceivedEventTimes(2);
      });
    });
    describe("when multiple is true and a item is clicked", () => {
      it("should emit an event with each selected item's data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-pick-list multiple>
          <calcite-pick-list-item value="one"></calcite-pick-list-item>
          <calcite-pick-list-item value="two"></calcite-pick-list-item>
        </calcite-pick-list>`);

        const pickList = await page.find("calcite-pick-list");
        const item1 = await pickList.find("[value=one]");
        const item2 = await pickList.find("[value=two]");
        const toggleSpy = await pickList.spyOnEvent("calciteListSelectionChange");

        await item1.click();
        await item2.click();
        await item2.click(); // deselect
        expect(toggleSpy).toHaveReceivedEventTimes(3);
      });
    });
    describe("preselected items", () => {
      it("should be included in the list of selected items", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-pick-list multiple>
          <calcite-pick-list-item value="one" selected></calcite-pick-list-item>
          <calcite-pick-list-item value="two"></calcite-pick-list-item>
        </calcite-pick-list>`);

        const numSelected = await page.evaluate(() => {
          const pickList = document.querySelector("calcite-pick-list");
          return pickList.getSelectedItems().then((result) => {
            return result.size;
          });
        });

        expect(numSelected).toBe(1);
      });
    });
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
});
