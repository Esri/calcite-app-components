import { newE2EPage } from "@stencil/core/testing";

describe("calcite-shell-floating-panel", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-floating-panel></calcite-shell-floating-panel>");
    const element = await page.find("calcite-shell-floating-panel");
    expect(element).toHaveClass("hydrated");
  });

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
