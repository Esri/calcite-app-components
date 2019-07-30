import { newE2EPage } from "@stencil/core/testing";

describe("calcite-floating-panel", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-floating-panel></calcite-floating-panel>");
    const element = await page.find("calcite-floating-panel");
    expect(element).toHaveClass("hydrated");
  });

  it("position defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-floating-panel></calcite-floating-panel>");

    const element = await page.find("calcite-floating-panel");
    const placement = await element.getProperty("placement");
    const positionElement = await element.getProperty("positionElement");

    await page.waitForChanges();

    const style = element.getAttribute("style");

    expect(placement).toBeUndefined();
    expect(positionElement).toBeUndefined();
    expect(style).toBeNull();
  });
});
