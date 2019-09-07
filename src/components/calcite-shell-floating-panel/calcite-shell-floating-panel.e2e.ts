import { newE2EPage } from "@stencil/core/testing";
import { hidden, renders } from "../../tests/commonTests";

describe("calcite-shell-floating-panel", () => {
  it("renders", async () => renders("calcite-shell-floating-panel"));

  it("honors hidden attribute", async () => hidden("calcite-shell-floating-panel"));

  it("should fire event when closed", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-floating-panel></calcite-shell-floating-panel>");

    const eventSpy = await page.spyOnEvent("calciteShellFloatingPanelClose", "window");

    const closeButton = await page.find("calcite-shell-floating-panel >>> calcite-action");

    closeButton.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });
});
