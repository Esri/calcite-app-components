import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";

describe("calcite-pick-list-item", () => {
  it("should render", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-pick-list-item></calcite-pick-list-item>`);
    const item = await page.find("calcite-pick-list-item");
    expect(item).not.toBeNull();
    const isVisible = await item.isVisible();
    expect(isVisible).toBe(true);
  });

  it("should toggle selected attribute when clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-pick-list-item></calcite-pick-list-item>`);
    const item = await page.find("calcite-pick-list-item");
    expect(await item.getProperty("selected")).toBe(false);
    await item.click();
    expect(await item.getProperty("selected")).toBe(true);
    await item.click();
    expect(await item.getProperty("selected")).toBe(false);
  });
});
