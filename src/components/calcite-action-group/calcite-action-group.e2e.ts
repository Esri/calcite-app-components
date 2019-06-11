import { newE2EPage } from "@stencil/core/testing";

describe.skip("calcite-action-group", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-group></calcite-action-group>");
    const element = await page.find("calcite-action-group");
    expect(element).toHaveClass("hydrated");
  });
});
