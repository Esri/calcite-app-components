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
    describe("when multiple is false and a row is clicked", () => {
      it("should emit an event with the last selected row data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-picker>
          <calcite-picker-row value="one"></calcite-picker-row>
          <calcite-picker-row value="two"></calcite-picker-row>
        </calcite-picker>`);

        const picker = await page.find("calcite-picker");
        const row1 = await picker.find("[value=one]");
        const row2 = await picker.find("[value=two]");
        const toggleSpy = await picker.spyOnEvent("calcitePickerSelectionChange");

        await row1.click();
        await row2.click();
        expect(toggleSpy).toHaveReceivedEventTimes(2);
        expect(toggleSpy.events[0].detail["one"]).not.toBeUndefined();
        expect(toggleSpy.events[1].detail["one"]).toBeUndefined();
        expect(toggleSpy.events[1].detail["two"]).not.toBeUndefined();
      });
    });
    describe("when multiple is true and a row is clicked", () => {
      it("should emit an event with each selected row's data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-picker multiple>
          <calcite-picker-row value="one"></calcite-picker-row>
          <calcite-picker-row value="two"></calcite-picker-row>
        </calcite-picker>`);

        const picker = await page.find("calcite-picker");
        const row1 = await picker.find("[value=one]");
        const row2 = await picker.find("[value=two]");
        const toggleSpy = await picker.spyOnEvent("calcitePickerSelectionChange");

        await row1.click();
        await row2.click();
        await row2.click(); // deselect
        expect(toggleSpy).toHaveReceivedEventTimes(3);
        expect(toggleSpy.events[0].detail["one"]).not.toBeUndefined();
        expect(toggleSpy.events[1].detail["one"]).not.toBeUndefined();
        expect(toggleSpy.events[1].detail["two"]).not.toBeUndefined();
        expect(toggleSpy.events[2].detail["one"]).not.toBeUndefined();
        expect(toggleSpy.events[2].detail["two"]).toBeUndefined();
      });
    });
  });

  describe("icon logic", () => {
    it("should be 'circle' when in `selection` mode and multi-select is disabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-picker mode="selection">
        <calcite-picker-row value="one"></calcite-picker-row>
      </calcite-picker>`);

      const row = await page.find("calcite-picker-row");
      const icon = await row.getProperty("icon");
      expect(icon).toBe(ICON_TYPES["circle"]);
    });
    it("should be 'square' when in `selection` mode and multi-select is enabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-picker mode="selection" multiple>
        <calcite-picker-row value="one"></calcite-picker-row>
      </calcite-picker>`);

      const row = await page.find("calcite-picker-row");
      const icon = await row.getProperty("icon");
      expect(icon).toBe(ICON_TYPES["square"]);
    });
    it("should be 'grip' when in `configuration` mode drag and drop is enabled ", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-picker mode='configuration' drag-enabled>
        <calcite-picker-row value="one"></calcite-picker-row>
      </calcite-picker>`);

      const row = await page.find("calcite-picker-row");
      const icon = await row.getProperty("icon");
      expect(icon).toBe(ICON_TYPES["grip"]);
    });
    it("should be null when in `configuration` mode drag and drop is enabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-picker mode='configuration'>
        <calcite-picker-row value="one"></calcite-picker-row>
      </calcite-picker>`);

      const row = await page.find("calcite-picker-row");
      const icon = await row.getProperty("icon");
      expect(icon).toBe("null");
    });
  });
});
