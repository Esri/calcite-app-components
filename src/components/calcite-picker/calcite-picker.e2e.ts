import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";

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
});
