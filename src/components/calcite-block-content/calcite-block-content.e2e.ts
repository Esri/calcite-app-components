import { newE2EPage } from "@stencil/core/testing";

describe("calcite-block-content", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-block-content></calcite-block-content>");
    const element = await page.find("calcite-block-content");
    expect(element).toHaveClass("hydrated");
  });
});
