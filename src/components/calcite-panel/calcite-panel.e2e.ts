import { newE2EPage } from "@stencil/core/testing";
import { hidden, renders } from "../../tests/commonTests";

describe("calcite-panel", () => {
  it("renders", async () => renders("calcite-panel"));

  it("honors hidden attribute", async () => hidden("calcite-panel"));

  it("should fire event when closed", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel></calcite-panel>");

    const eventSpy = await page.spyOnEvent("calcitePanelClose", "window");

    const closeButton = await page.find("calcite-panel >>> calcite-action");

    closeButton.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });
});
