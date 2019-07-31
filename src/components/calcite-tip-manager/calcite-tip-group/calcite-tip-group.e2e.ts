import { newE2EPage } from "@stencil/core/testing";

describe("calcite-tip-group", () => {
  it("should render without errors", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-tip-group></calcite-tip-group>`);
    const tipGroup = await page.find("calcite-tip-group");
    expect(tipGroup).not.toBeNull();
  });
});
