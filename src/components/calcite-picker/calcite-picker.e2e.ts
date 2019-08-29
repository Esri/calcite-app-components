import { newE2EPage } from "@stencil/core/testing";
import { CSS, ICON_TYPES } from "./resources";

describe("calcite-picker", () => {
  it("should render", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-picker></calcite-picker>`);
    const picker = await page.find("calcite-picker");
    expect(picker).not.toBeNull();
    const isVisible = await picker.isVisible();
    expect(isVisible).toBe(true);
  });

  describe("Selection and Deselection", () => {
    describe("when multiple is false and a item is clicked", () => {
      it("should emit an event with the last selected item data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-picker>
          <calcite-picker-item value="one"></calcite-picker-item>
          <calcite-picker-item value="two"></calcite-picker-item>
        </calcite-picker>`);

        const picker = await page.find("calcite-picker");
        const item1 = await picker.find("[value=one]");
        const item2 = await picker.find("[value=two]");
        const toggleSpy = await picker.spyOnEvent("calcitePickerSelectionChange");

        await item1.click();
        await item2.click();
        expect(toggleSpy).toHaveReceivedEventTimes(2);
      });
    });
    describe("when multiple is true and a item is clicked", () => {
      it("should emit an event with each selected item's data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-picker multiple>
          <calcite-picker-item value="one"></calcite-picker-item>
          <calcite-picker-item value="two"></calcite-picker-item>
        </calcite-picker>`);

        const picker = await page.find("calcite-picker");
        const item1 = await picker.find("[value=one]");
        const item2 = await picker.find("[value=two]");
        const toggleSpy = await picker.spyOnEvent("calcitePickerSelectionChange");

        await item1.click();
        await item2.click();
        await item2.click(); // deselect
        expect(toggleSpy).toHaveReceivedEventTimes(3);
      });
    });
  });

  describe("icon logic", () => {
    it("should be 'circle' when in `selection` mode and multi-select is disabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-picker mode="selection">
        <calcite-picker-item value="one"></calcite-picker-item>
      </calcite-picker>`);

      const item = await page.find("calcite-picker-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBe(ICON_TYPES.circle);
    });
    it("should be 'square' when in `selection` mode and multi-select is enabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-picker mode="selection" multiple>
        <calcite-picker-item value="one"></calcite-picker-item>
      </calcite-picker>`);

      const item = await page.find("calcite-picker-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBe(ICON_TYPES.square);
    });
    it("should be 'grip' when in `configuration` mode drag and drop is enabled ", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-picker mode='configuration' drag-enabled>
        <calcite-picker-item value="one"></calcite-picker-item>
      </calcite-picker>`);

      const item = await page.find("calcite-picker-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBe(ICON_TYPES.grip);
    });
    it("should be null when in `configuration` mode drag and drop is enabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-picker mode='configuration'>
        <calcite-picker-item value="one"></calcite-picker-item>
      </calcite-picker>`);

      const item = await page.find("calcite-picker-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBeNull();
    });
  });
});
