import { newE2EPage } from "@stencil/core/testing";

export const tests = {
  selectionAndDeselection(listType) {
    describe("when multiple is false and a item is clicked", () => {
      it("should emit an event with the last selected item data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-${listType}-list>
          <calcite-${listType}-list-item value="one" text-label="One"></calcite-${listType}-list-item>
          <calcite-${listType}-list-item value="two" text-label="Two"></calcite-${listType}-list-item>
        </calcite-${listType}-list>`);

        const list = await page.find(`calcite-${listType}-list`);
        const item1 = await list.find("[value=one]");
        const item2 = await list.find("[value=two]");
        const toggleSpy = await list.spyOnEvent("calciteListChange");

        await item1.click();
        await item2.click();
        expect(toggleSpy).toHaveReceivedEventTimes(2);
      });
    });
    describe("when multiple is true and a item is clicked", () => {
      it("should emit an event with each selected item's data", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-${listType}-list multiple>
          <calcite-${listType}-list-item value="one" text-label="One"></calcite-${listType}-list-item>
          <calcite-${listType}-list-item value="two" text-label="Two"></calcite-${listType}-list-item>
        </calcite-${listType}-list>`);

        const list = await page.find(`calcite-${listType}-list`);
        const item1 = await list.find("[value=one]");
        const item2 = await list.find("[value=two]");
        const toggleSpy = await list.spyOnEvent("calciteListChange");

        await item1.click();
        await item2.click();
        await item2.click(); // deselect
        expect(toggleSpy).toHaveReceivedEventTimes(3);
      });
    });
    describe("preselected items", () => {
      it("should be included in the list of selected items", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-${listType}-list multiple>
          <calcite-${listType}-list-item value="one" text-label="One" selected></calcite-${listType}-list-item>
          <calcite-${listType}-list-item value="two" text-label="Two"></calcite-${listType}-list-item>
        </calcite-${listType}-list>`);

        const numSelected = await page.evaluate((listType) => {
          const list: HTMLCalcitePickListElement = document.querySelector(`calcite-${listType}-list`);
          return list.getSelectedItems().then((result) => {
            return result.size;
          });
        }, listType);

        expect(numSelected).toBe(1);
      });
    });
    describe("shift click behavior", () => {
      it.only("should multi-select", async () => {
        const page = await newE2EPage();
        await page.setContent(`<calcite-${listType}-list multiple>
          <calcite-${listType}-list-item value="one" text-label="One"></calcite-${listType}-list-item>
          <calcite-${listType}-list-item value="two" text-label="Two"></calcite-${listType}-list-item>
          <calcite-${listType}-list-item value="three" text-label="Three"></calcite-${listType}-list-item>
        </calcite-${listType}-list>`);

        const list = await page.find(`calcite-${listType}-list`);
        const item1 = await list.find("[value=one]");
        const item3 = await list.find("[value=three]");

        await item1.click();
        await page.keyboard.down("Shift");
        await item3.click();
        await page.keyboard.up("Shift");
        await page.waitFor(5000);

        const numSelected = await page.evaluate((listType) => {
          const list: HTMLCalcitePickListElement = document.querySelector(`calcite-${listType}-list`);
          return list.getSelectedItems().then((result) => {
            return result.size;
          });
        }, listType);

        expect(numSelected).toBe(3);
      });
    });
  }
};
export default tests;
