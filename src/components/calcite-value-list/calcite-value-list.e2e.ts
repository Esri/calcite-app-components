import { E2EPage, newE2EPage } from "@stencil/core/testing";
import { CSS, ICON_TYPES } from "./resources";
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

  describe.only("drag and drop", () => {
    let page: E2EPage;
    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent(`<calcite-value-list multiple drag-enabled>
        <calcite-value-list-item value="one" text-label="One"></calcite-value-list-item>
        <calcite-value-list-item value="two" text-label="Two"></calcite-value-list-item>
        <calcite-value-list-item value="three" text-label="Three"></calcite-value-list-item>
      </calcite-value-list>`);
    });
    it.skip("works using a mouse", async () => {
      // TODO: remove skip once https://github.com/GoogleChrome/puppeteer/issues/1376 addressed
      const itemBoundingBox = await page.evaluate(() => {
        const { left, top, width, height } = document
          .querySelector(`calcite-value-list-item[value="one"]`)
          .getBoundingClientRect();
        return { left, top, width, height };
      });
      const handleBoundingBoxes = await page.evaluate((CSS) => {
        const { left, top, width, height } = document
          .querySelector(`calcite-value-list-item[value="one"]`)
          .shadowRoot.querySelector(`calcite-pick-list-item`)
          .shadowRoot.querySelector(`.${CSS.handle}`)
          .getBoundingClientRect();
        return { left, top, width, height };
      }, CSS);
      const xCenter = handleBoundingBoxes.left + handleBoundingBoxes.width / 2;
      const yCenter = handleBoundingBoxes.top + handleBoundingBoxes.height / 2;
      await page.mouse.move(xCenter, yCenter);
      await page.mouse.down();
      await page.mouse.move(xCenter, yCenter + itemBoundingBox.height + 2);
      await page.mouse.up();

      // position in DOM of first and second item should be flipped
      const itemsAfter = await page.findAll("calcite-value-list-item");
      expect(await itemsAfter[0].getProperty("value")).toBe("two");
      expect(await itemsAfter[1].getProperty("value")).toBe("one");
    });

    it("works using a keyboard", async () => {
      page.keyboard.press("Tab");
      page.keyboard.press("ArrowDown");
      page.debugger();
      const itemsAfter = await page.findAll("calcite-value-list-item");
      expect(await itemsAfter[0].getProperty("value")).toBe("two");
      expect(await itemsAfter[1].getProperty("value")).toBe("one");
    });
  });
});
