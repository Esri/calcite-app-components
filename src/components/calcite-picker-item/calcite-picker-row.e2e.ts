import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";

describe("calcite-picker-item", () => {
  it("should render", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-picker-item></calcite-picker-item>`);
    const item = await page.find("calcite-picker-item");
    expect(item).not.toBeNull();
    const isVisible = await item.isVisible();
    expect(isVisible).toBe(true);
  });

  it("should toggle selected attribute when clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-picker-item></calcite-picker-item>`);
    const item = await page.find("calcite-picker-item");
    expect(await item.getProperty("selected")).toBe(false);
    await item.click();
    expect(await item.getProperty("selected")).toBe(true);
  });
});
