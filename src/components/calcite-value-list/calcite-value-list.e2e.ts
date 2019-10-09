import { newE2EPage } from "@stencil/core/testing";
import { CSS, ICON_TYPES } from "./resources";
import { hidden, renders } from "../../tests/commonTests";

describe("calcite-value-list", () => {
  it("renders", async () => renders("calcite-value-list"));
  it("honors hidden attribute", async () => hidden("calcite-value-list"));

  describe("Selection and Deselection", () => {
    describe("when multiple is false and a item is clicked", () => {
      it("should emit an event with the last selected item data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-value-list>
          <calcite-value-list-item value="one" text-label="test"></calcite-value-list-item>
          <calcite-value-list-item value="two" text-label="test"></calcite-value-list-item>
        </calcite-value-list>`);

        const valueList = await page.find("calcite-value-list");
        const item1 = await valueList.find("[value=one]");
        const item2 = await valueList.find("[value=two]");
        const toggleSpy = await valueList.spyOnEvent("calciteListChange");

        await item1.click();
        await item2.click();
        expect(toggleSpy).toHaveReceivedEventTimes(2);
      });
    });
    describe("when multiple is true and a item is clicked", () => {
      it("should emit an event with each selected item's data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-value-list multiple>
          <calcite-value-list-item value="one" text-label="test"></calcite-value-list-item>
          <calcite-value-list-item value="two" text-label="test"></calcite-value-list-item>
        </calcite-value-list>`);

        const valueList = await page.find("calcite-value-list");
        const item1 = await valueList.find("[value=one]");
        const item2 = await valueList.find("[value=two]");
        const toggleSpy = await valueList.spyOnEvent("calciteListChange");

        await item1.click();
        await item2.click();
        await item2.click(); // deselect
        expect(toggleSpy).toHaveReceivedEventTimes(3);
      });
    });
  });

  describe("icon logic", () => {
    it("should be 'grip' when in `configuration` mode drag and drop is enabled ", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-value-list drag-enabled>
        <calcite-value-list-item value="one"></calcite-value-list-item>
      </calcite-value-list>`);

      const item = await page.find("calcite-value-list-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBe(ICON_TYPES.grip);
    });
    it("should be null when drag and drop is disabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-value-list>
        <calcite-value-list-item value="one"></calcite-value-list-item>
      </calcite-value-list>`);

      const item = await page.find("calcite-value-list-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBeNull();
    });
  });
});
