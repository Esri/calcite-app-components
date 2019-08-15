import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";

describe("calcite-picker-row", () => {
  it("should render", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-picker-row></calcite-picker-row>`);
    const row = await page.find("calcite-picker-row");
    expect(row).not.toBeNull();
    const isVisible = await row.isVisible();
    expect(isVisible).toBe(true);
  });

  it("should toggle selected attribute when clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-picker-row></calcite-picker-row>`);
    const row = await page.find("calcite-picker-row");
    expect(row.selected).toBe(false);
    await row.click();
    expect(row.selected).toBe(true);
  });
});
