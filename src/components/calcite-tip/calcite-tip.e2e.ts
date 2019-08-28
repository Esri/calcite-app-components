import { newE2EPage } from "@stencil/core/testing";
import { hidden, renders } from "../../tests/commonTests";

describe("calcite-tip", () => {
  it("renders", async () => renders("calcite-tip"));

  it("honors hidden attribute", async () => hidden("calcite-tip"));

  it("should remove the closeButton if nonDismissible prop is true", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-tip non-dismissible><p>not dismissible</p></calcite-tip>`).catch((error) => {
      console.error(error);
    });

    const closeButton = await page.find("calcite-tip >>> .close");
    expect(closeButton).toBeNull();
  });

  it("should be hidden after the close button is clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-tip><p>testing close button</p></calcite-tip>`).catch((error) => {
      console.error(error);
    });

    const eventSpy = await page.spyOnEvent("calciteTipDismiss", "window");

    const tip = await page.find("calcite-tip");
    const closeButton = await page.find("calcite-tip >>> .close");

    closeButton.click();
    await page.waitForChanges();
    const isVisible = await tip.isVisible();
    expect(isVisible).toBe(false);

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("should hide by default if tip with an id is dismissed", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-tip storage-id="foo"><p>testing localstorage</p></calcite-tip>`).catch((error) => {
      console.error(error);
    });

    const closeButton = await page.find("calcite-tip >>> .close");
    closeButton.click();
    await page.waitForChanges();

    const page2 = await newE2EPage();
    await page2.setContent(`<calcite-tip storage-id="foo"><p>testing localstorage</p></calcite-tip>`).catch((error) => {
      console.error(error);
    });

    const tip = await page2.find("calcite-tip");
    const isVisible = await tip.isVisible();
    expect(isVisible).toBe(false);
  });
});
