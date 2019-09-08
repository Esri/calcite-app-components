import { newE2EPage } from "@stencil/core/testing";

import { hidden, renders } from "../../tests/commonTests";

describe("calcite-popover", () => {
  it("renders", async () => renders("calcite-popover"));

  it("honors hidden attribute", async () => hidden("calcite-popover"));

  it("popover defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-popover></calcite-popover>");

    const element = await page.find("calcite-popover");

    const placement = await element.getProperty("placement");

    expect(placement).toBe("horizontal");

    const positionElement = await element.getProperty("positionElement");

    expect(positionElement).toBeUndefined();

    const xOffset = await element.getProperty("xOffset");

    expect(xOffset).toEqual(0);

    const yOffset = await element.getProperty("yOffset");

    expect(yOffset).toEqual(0);

    const computedStyle = await element.getComputedStyle();

    expect(computedStyle.zIndex).toBe("999");
    expect(computedStyle.position).toBe("absolute");
    expect(computedStyle.transform).toBe("none");
  });

  it("popover positiones when positionElement is set", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-popover placement="horizontal"></calcite-popover><div>positionElement</div>`);

    const element = await page.find("calcite-popover");

    await page.$eval("calcite-popover", (elm: any) => {
      const positionElement = document.createElement("div");
      document.body.appendChild(positionElement);
      elm.positionElement = positionElement;
    });

    await page.waitForChanges();

    const computedStyle = await element.getComputedStyle();

    expect(computedStyle.transform).toBe("matrix(1, 0, 0, 1, 8, 26)");
  });
});
