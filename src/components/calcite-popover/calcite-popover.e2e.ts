import { newE2EPage } from "@stencil/core/testing";

import { defaults, hidden, renders } from "../../tests/commonTests";

describe("calcite-popover", () => {
  it("renders", async () => renders("calcite-popover"));

  it("honors hidden attribute", async () => hidden("calcite-popover"));

  it("has property defaults", async () =>
    defaults("calcite-popover", [
      {
        propertyName: "placement",
        defaultValue: "horizontal"
      },
      {
        propertyName: "referenceElement",
        defaultValue: undefined
      },
      {
        propertyName: "xOffset",
        defaultValue: 0
      },
      {
        propertyName: "yOffset",
        defaultValue: 0
      }
    ]));

  it("popover positions when referenceElement is set", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-popover placement="horizontal"></calcite-popover><div>referenceElement</div>`);

    const element = await page.find("calcite-popover");

    await page.$eval("calcite-popover", (elm: any) => {
      const referenceElement = document.createElement("div");
      document.body.appendChild(referenceElement);
      elm.referenceElement = referenceElement;
    });

    await page.waitForChanges();

    const computedStyle = await element.getComputedStyle();

    expect(computedStyle.transform).not.toBe("none");
  });
});
