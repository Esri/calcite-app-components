import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";
import { ICON_TYPES } from "./resources";
import { accessible, hidden, renders } from "../../tests/commonTests";
import { selectionAndDeselection, filterBehavior, disabledStates, keyboardNavigation } from "./shared-list-tests";

describe("calcite-pick-list", () => {
  it("renders", async () => renders("calcite-pick-list"));

  it("honors hidden attribute", async () => hidden("calcite-pick-list"));

  it("is accessible", async () =>
    accessible(
      `<calcite-pick-list><calcite-pick-list-item label="Sample" value="one"></calcite-pick-list-item></calcite-pick-list>`
    ));

  describe("Selection and Deselection", () => selectionAndDeselection("pick"));

  describe("Keyboard navigation", () => keyboardNavigation("pick"));

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

  describe("filter behavior (hide/show items)", () => {
    filterBehavior("pick");

    let page: E2EPage = null;
    let groupOrParentItem: E2EElement;
    let item1: E2EElement;
    let item2: E2EElement;

    async function assertGroupIsVisibleWhenChildMatches(
      page: E2EPage,
      groupOrParentItem: E2EElement,
      item1: E2EElement,
      item2: E2EElement
    ): Promise<void> {
      const item1ValueLowercased = (await item1.getProperty("label")).toLowerCase();

      await page.evaluate(
        (filterText) => {
          const filterInput = (window as any).filterInput;
          filterInput.value = filterText;
          filterInput.dispatchEvent(new Event("input"));
        },
        [item1ValueLowercased]
      );

      await item2.waitForNotVisible();

      const parentVisible = await groupOrParentItem.isVisible();

      expect(parentVisible).toBe(true);
    }

    describe("filtering with groups", () => {
      beforeEach(async () => {
        page = await newE2EPage({
          html: `<calcite-pick-list filter-enabled>
          <calcite-pick-list-group group-title="Numbers">
            <calcite-pick-list-item value="1" label="One" description="uno"></calcite-pick-list-item>
            <calcite-pick-list-item value="2" label="Two" description="dos"></calcite-pick-list-item>
          </calcite-pick-list-group>
        </calcite-pick-list>`
        });

        groupOrParentItem = await page.find(`calcite-pick-list-group`);
        item1 = await page.find(`calcite-pick-list-item[value="1"]`);
        item2 = await page.find(`calcite-pick-list-item[value="2"]`);

        item1.setProperty("metadata", { category: "first" });
        item2.setProperty("metadata", { category: "second" });

        await page.waitForChanges();
        await page.evaluate(() => {
          (window as any).filter = document
            .querySelector(`calcite-pick-list`)
            .shadowRoot.querySelector("calcite-filter");

          const filter = (window as any).filter;
          (window as any).filterInput = filter.shadowRoot.querySelector("input");
        });
      });

      it("should show the group parent if a match is found in a child", async () =>
        await assertGroupIsVisibleWhenChildMatches(page, groupOrParentItem, item1, item2));
    });

    describe("filtering with groups (nested)", () => {
      beforeEach(async () => {
        page = await newE2EPage({
          html: `<calcite-pick-list filter-enabled>
          <calcite-pick-list-group>
            <calcite-pick-list-item slot="parent-item" value="nums" label="Numbers"></calcite-pick-list-item>
            <calcite-pick-list-item value="1" label="One" description="uno"></calcite-pick-list-item>
            <calcite-pick-list-item value="2" label="Two" description="dos"></calcite-pick-list-item>
          </calcite-pick-list-group>
        </calcite-pick-list>`
        });

        groupOrParentItem = await page.find(`calcite-pick-list-item[slot="parent-item"]`);
        item1 = await page.find(`calcite-pick-list-item[value="1"]`);
        item2 = await page.find(`calcite-pick-list-item[value="2"]`);

        item1.setProperty("metadata", { category: "first" });
        item2.setProperty("metadata", { category: "second" });

        await page.waitForChanges();
        await page.evaluate(() => {
          (window as any).filter = document
            .querySelector(`calcite-pick-list`)
            .shadowRoot.querySelector("calcite-filter");

          const filter = (window as any).filter;
          (window as any).filterInput = filter.shadowRoot.querySelector("input");
        });
      });

      it("should show the group parent if a match is found in a child", async () =>
        await assertGroupIsVisibleWhenChildMatches(page, groupOrParentItem, item1, item2));

      it("should show the children of a group if the parent matches", async () => {
        await page.evaluate(() => {
          const filterInput = (window as any).filterInput;
          filterInput.value = "nums";
          filterInput.dispatchEvent(new Event("input"));
        });
        await page.waitFor(500);

        const item1Visible = await item1.isVisible();
        const item2Visible = await item2.isVisible();

        expect(item1Visible).toBe(true);
        expect(item2Visible).toBe(true);
      });
    });
  });

  describe("disabled states", () => disabledStates("pick"));
});
