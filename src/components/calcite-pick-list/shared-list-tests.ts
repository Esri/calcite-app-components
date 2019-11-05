import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

export const tests = {
  selectionAndDeselection(listType: "pick" | "value") {
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
          const list: HTMLCalcitePickListElement | HTMLCalciteValueListElement = document.querySelector(
            `calcite-${listType}-list`
          );
          return list.getSelectedItems().then((result) => {
            return result.size;
          });
        }, listType);

        expect(numSelected).toBe(1);
      });
    });

    describe("shift click behavior", () => {
      it("should multi-select", async () => {
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

        const numSelected = await page.evaluate((listType) => {
          const list: HTMLCalcitePickListElement | HTMLCalciteValueListElement = document.querySelector(
            `calcite-${listType}-list`
          );
          return list.getSelectedItems().then((result) => {
            return result.size;
          });
        }, listType);

        expect(numSelected).toBe(3);
      });
    });
  },
  filterBehavior(listType: "pick" | "value") {
    let page: E2EPage = null;
    let item1: E2EElement;
    let item2: E2EElement;
    let item1Visible;
    let item2Visible;

    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent(`<calcite-${listType}-list filter-enabled="true">
        <calcite-${listType}-list-item value="1" text-label="One" text-description="uno"></calcite-${listType}-list-item>
        <calcite-${listType}-list-item value="2" text-label="Two" text-description="dos"></calcite-${listType}-list-item>
      </calcite-${listType}-list>`);
      item1 = await page.find(`calcite-${listType}-list-item[value="1"]`);
      item2 = await page.find(`calcite-${listType}-list-item[value="2"]`);
      item1.setProperty("metadata", { category: "first" });
      item2.setProperty("metadata", { category: "second" });
      await page.waitForChanges();
      await page.evaluate((listType) => {
        (window as any).filter = document
          .querySelector(`calcite-${listType}-list`)
          .shadowRoot.querySelector("calcite-filter");
        const filter = (window as any).filter;
        (window as any).filterInput = filter.shadowRoot.querySelector("input");
      }, listType);
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
  },
  disabledStates(listType: "pick" | "value") {
    it("disabled", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-${listType}-list disabled>
        <calcite-${listType}-list-item value="one" text-label="One"></calcite-${listType}-list-item>
      </calcite-${listType}-list>`);

      const list = await page.find(`calcite-${listType}-list`);
      const item1 = await list.find("[value=one]");
      const toggleSpy = await list.spyOnEvent("calciteListChange");

      await item1.click();
      expect(toggleSpy).toHaveReceivedEventTimes(0);
    });

    it("loading", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-${listType}-list loading>
        <calcite-${listType}-list-item value="one" text-label="One"></calcite-${listType}-list-item>
      </calcite-${listType}-list>`);

      const list = await page.find(`calcite-${listType}-list`);
      const item1 = await list.find("[value=one]");
      const toggleSpy = await list.spyOnEvent("calciteListChange");

      await item1.click();
      expect(toggleSpy).toHaveReceivedEventTimes(0);
    });
  }
};
