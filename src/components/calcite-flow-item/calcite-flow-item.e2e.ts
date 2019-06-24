import { newE2EPage } from "@stencil/core/testing";

describe("calcite-flow-item", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow-item></calcite-flow-item>");
    const element = await page.find("calcite-flow-item");
    expect(element).toHaveClass("hydrated");
  });
});
