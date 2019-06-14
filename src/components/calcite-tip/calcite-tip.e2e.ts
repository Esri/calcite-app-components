import { newE2EPage } from "@stencil/core/testing";

describe("calcite-tip", () => {
  it("should render and be visible", async () => {
    const page = await newE2EPage();

    await page
      .setContent(`<calcite-tip><p>basic render</p></calcite-tip>`)
      .catch(error => {
        console.error(error);
      });

    const tip = await page.find("calcite-tip");
    expect(tip).not.toBeNull();
    const isVisible = await tip.isVisible();
    expect(isVisible).toBe(true);
  });

  it("should remove the closeButton if dismissible prop is false", async () => {
    const page = await newE2EPage();

    await page
      .setContent(`<calcite-tip dismissible="false"><p>not dismissible</p></calcite-tip>`)
      .catch(error => {
        console.error(error);
      });

    const closeButton = await page.find("calcite-tip >>> .close");
    expect(closeButton).toBeNull();
  });

  it("should be hidden after the close button is clicked", async () => {
    const page = await newE2EPage();
    await page
      .setContent(`<calcite-tip><p>testing close button</p></calcite-tip>`)
      .catch(error => {
        console.error(error);
      });
    const tip = await page.find("calcite-tip");
    const closeButton = await page.find("calcite-tip >>> .close");

    closeButton.click();
    await page.waitForChanges();
    const isVisible = await tip.isVisible();
    expect(isVisible).toBe(false);
  });

  it("should hide by default if tip with an id is dismissed", async () => {
    const page = await newE2EPage();
    await page
      .setContent(
        `<calcite-tip storage-id="foo"><p>testing localstorage</p></calcite-tip>`
      )
      .catch(error => {
        console.error(error);
      });

    const closeButton = await page.find("calcite-tip >>> .close");
    closeButton.click();
    await page.waitForChanges();

    const page2 = await newE2EPage();
    await page2
      .setContent(
        `<calcite-tip storage-id="foo"><p>testing localstorage</p></calcite-tip>`
      )
      .catch(error => {
        console.error(error);
      });

    const tip = await page2.find("calcite-tip");
    const isVisible = await tip.isVisible();
    expect(isVisible).toBe(false);
  });
});
