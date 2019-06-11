import { newE2EPage } from "@stencil/core/testing";

describe.skip("calcite-action-pad", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-pad></calcite-action-pad>");
    const element = await page.find("calcite-action-pad");
    expect(element).toHaveClass("hydrated");
  });
});
