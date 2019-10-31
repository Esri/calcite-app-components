import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";
import { ICON_TYPES } from "./resources";
import { hidden, renders } from "../../tests/commonTests";
import tests from "./shared-list-tests";

describe("calcite-pick-list", () => {
  it("renders", async () => renders("calcite-pick-list"));
  it("honors hidden attribute", async () => hidden("calcite-pick-list"));

  describe("Selection and Deselection", () => {
    tests.selectionAndDeselection("pick");
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

  describe("filter behavior (hide/show items)", () => {
    tests.filterBehavior("pick");
  });

  describe("disabled states", () => {
    tests.disabledStates("pick");
  });
});
