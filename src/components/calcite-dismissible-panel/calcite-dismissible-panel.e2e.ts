import { newE2EPage } from "@stencil/core/testing";
import { hidden, renders } from "../../tests/commonTests";

describe("calcite-dismissible-panel", () => {
  it("renders", async () => renders("calcite-dismissible-panel"));

  it("honors hidden attribute", async () => hidden("calcite-dismissible-panel"));

  it("should fire event when closed", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-dismissible-panel></calcite-dismissible-panel>");

    const eventSpy = await page.spyOnEvent("calciteDismissiblePanelDismiss", "window");

    const closeButton = await page.find("calcite-dismissible-panel >>> calcite-action");

    closeButton.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });
});
