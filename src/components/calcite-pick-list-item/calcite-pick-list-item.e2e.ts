import { newE2EPage } from "@stencil/core/testing";

import { CSS } from "./resources";

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

    await page.setContent(`<calcite-pick-list-item text-label="test"></calcite-pick-list-item>`);
    const item = await page.find("calcite-pick-list-item");
    expect(await item.getProperty("selected")).toBe(false);
    await item.click();
    expect(await item.getProperty("selected")).toBe(true);
    await item.click();
    expect(await item.getProperty("selected")).toBe(false);
  });

  it("should fire event calciteListItemChange when item is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-pick-list-item text-label="test" value="example"></calcite-pick-list-item>`);
    const item = await page.find("calcite-pick-list-item");
    await page.evaluate(() => {
      document.addEventListener("calciteListItemChange", (event: CustomEvent) => {
        (window as any).eventDetail = event.detail;
      });
    });

    await item.click();

    await page.waitForChanges();

    const eventDetail: any = await page.evaluateHandle(() => {
      return (window as any).eventDetail;
    });
    const properties = await eventDetail.getProperties();
    expect(properties.get("item")).toBeDefined();
    expect(properties.get("value")._remoteObject.value).toBe("example");
    expect(properties.get("selected")._remoteObject.value).toBe(true);
    expect(properties.get("shiftPressed")._remoteObject.value).toBe(false);
  });

  it("prevents deselection when disableDeselect is true", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-pick-list-item text-label="test" value="example" disable-deselect selected></calcite-pick-list-item>`
    );
    const item = await page.find("calcite-pick-list-item");

    await item.click();
    await page.waitForChanges();

    expect(await item.getProperty("selected")).toBe(true);
  });

  it("displays the remove button when removable is true", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-pick-list-item text-label="test" value="example" removable></calcite-pick-list-item>`
    );

    page.debugger();

    const removeButton = await page.find(`calcite-pick-list-item >>> .${CSS.remove}`);
    expect(removeButton).not.toBe(null);
  });
});
