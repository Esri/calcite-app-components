import { newE2EPage } from "@stencil/core/testing";

describe.skip("calcite-action", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action></calcite-action>");
    const element = await page.find("calcite-action");
    expect(element).toHaveClass("hydrated");
  });
});
