import { E2EPage, newE2EPage } from "@stencil/core/testing";
import { CSS, ICON_TYPES } from "./resources";
import { accessible, hidden, renders } from "../../tests/commonTests";
import {
  selectionAndDeselection,
  filterBehavior,
  disabledStates,
  keyboardNavigation
} from "../calcite-pick-list/shared-list-tests";
import { dragAndDrop } from "../../tests/utils";

describe("calcite-value-list", () => {
  it("renders", async () => renders("calcite-value-list"));
  it("honors hidden attribute", async () => hidden("calcite-value-list"));
  it("is accessible", async () =>
    accessible(
      `<calcite-value-list><calcite-value-list-item text-label="Sample" value="one"></calcite-value-list-item></calcite-value-list>`
    ));

  describe("Selection and Deselection", () => {
    selectionAndDeselection("value");
  });

  describe("Keyboard navigation", () => keyboardNavigation("value"));

  describe("icon logic", () => {
    it("should be 'grip' when in `configuration` mode drag and drop is enabled ", async () => {
      const page = await newE2EPage({
        html: `<calcite-value-list drag-enabled>
        <calcite-value-list-item value="one"></calcite-value-list-item>
      </calcite-value-list>`
      });

      const item = await page.find("calcite-value-list-item");
      const icon = await item.getProperty("icon");
      expect(icon).toBe(ICON_TYPES.grip);
    });
    it("should be null when drag and drop is disabled", async () => {
      const page = await newE2EPage({
        html: `<calcite-value-list>
        <calcite-value-list-item value="one"></calcite-value-list-item>
      </calcite-value-list>`
      });

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

  describe("drag and drop", () => {
    let page: E2EPage;

    beforeEach(
      async () =>
        (page = await newE2EPage({
          html: `<calcite-value-list drag-enabled>
        <calcite-value-list-item value="one" text-label="One"></calcite-value-list-item>
        <calcite-value-list-item value="two" text-label="Two"></calcite-value-list-item>
        <calcite-value-list-item value="three" text-label="Three"></calcite-value-list-item>
      </calcite-value-list>`
        }))
    );

    it("works using a mouse", async () => {
      await dragAndDrop(
        page,
        {
          host: `calcite-value-list-item[value="one"]`,
          shadow: `.${CSS.handle}`
        },
        {
          host: `calcite-value-list-item[value="two"]`,
          shadow: `.${CSS.handle}`
        }
      );

      const [first, second] = await page.findAll("calcite-value-list-item");
      expect(await first.getProperty("value")).toBe("two");
      expect(await second.getProperty("value")).toBe("one");
    });

    it("works using a keyboard", async () => {
      await page.keyboard.press("Tab");
      await page.keyboard.press("Space");
      await page.waitForChanges();

      async function assertKeyboardMove(direction: "down" | "up", expectedValueOrder: string[]): Promise<void> {
        const arrowKey = `Arrow${direction.charAt(0).toUpperCase() + direction.slice(1)}`;
        await page.keyboard.press(arrowKey);
        await page.waitForChanges();
        const itemsAfter = await page.findAll("calcite-value-list-item");

        for (let i = 0; i < itemsAfter.length; i++) {
          expect(await itemsAfter[i].getProperty("value")).toBe(expectedValueOrder[i]);
        }
      }

      await assertKeyboardMove("down", ["two", "one", "three"]);
      await assertKeyboardMove("down", ["two", "three", "one"]);
      await assertKeyboardMove("down", ["one", "two", "three"]);

      await assertKeyboardMove("up", ["two", "three", "one"]);
      await assertKeyboardMove("up", ["two", "one", "three"]);
      await assertKeyboardMove("up", ["one", "two", "three"]);
    });
  });
});
