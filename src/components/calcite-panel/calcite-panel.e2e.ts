import { newE2EPage } from "@stencil/core/testing";
import { hidden, renders } from "../../tests/commonTests";
import { CSS } from "./resources";

describe("calcite-panel", () => {
  it("renders", async () => renders("calcite-panel"));

  it("honors hidden attribute", async () => hidden("calcite-panel"));

  it("honors dismissed prop", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel dismissible>test</calcite-panel>");

    const element = await page.find("calcite-panel");
    const container = await page.find(`calcite-panel >>> .${CSS.container}`);

    await page.waitForChanges();

    expect(await container.isVisible()).toBe(true);

    element.setProperty("dismissed", true);

    await page.waitForChanges();

    expect(await container.isVisible()).toBe(false);
  });

  it("dismissible should fire event when closed", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel dismissible>test</calcite-panel>");

    const eventSpy = await page.spyOnEvent("calcitePanelDismissedChange", "window");

    const closeButton = await page.find("calcite-panel >>> calcite-action");

    await closeButton.click();

    expect(eventSpy).toHaveReceivedEvent();
  });
});
