import { newE2EPage } from "@stencil/core/testing";
import { ICON_TYPES } from "./resources";
import { hidden, renders } from "../../tests/commonTests";
import { tests } from "../calcite-pick-list/shared-list-tests";

const { selectionAndDeselection, filterBehavior, disabledStates } = tests;

describe("calcite-value-list", () => {
  it("renders", async () => renders("calcite-value-list"));
  it("honors hidden attribute", async () => hidden("calcite-value-list"));

  describe("Selection and Deselection", () => {
    selectionAndDeselection("value");
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

  describe("filter behavior (hide/show items)", () => {
    filterBehavior("value");
  });

  describe("disabled states", () => {
    disabledStates("value");
  });
});
