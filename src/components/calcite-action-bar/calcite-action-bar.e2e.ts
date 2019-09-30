import { newE2EPage } from "@stencil/core/testing";
import { hidden, renders } from "../../tests/commonTests";

describe("calcite-action-bar", () => {
  it("renders", async () => renders("calcite-action-bar"));

  it("honors hidden attribute", async () => hidden("calcite-action-bar"));

  it("defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-bar></calcite-action-bar>");
    const element = await page.find("calcite-action-bar");
    expect(element.getAttribute("expand")).not.toBeNull();
    expect(element.getAttribute("expanded")).toBeNull();
  });

  it("expand: true", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-bar></calcite-action-bar>");

    await page.waitForChanges();

    const expandAction = await page.find("calcite-action-bar >>> calcite-action");

    expect(expandAction).not.toBeNull();
  });

  it("expand: false", async () => {
    const page = await newE2EPage();

    await page.setContent('<calcite-action-bar expand="false"></calcite-action-bar>');

    await page.waitForChanges();

    const expandAction = await page.find("calcite-action-bar >>> calcite-action");

    expect(expandAction).toBeNull();
  });

  it("expanded", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-bar></calcite-action-bar>");

    const bar = await page.find("calcite-action-bar");

    const buttonGroup = await page.find("calcite-action-bar >>> .action-group--bottom");

    const button = await buttonGroup.find("calcite-action >>> .button");

    expect(button).not.toBeNull();

    await button.click();

    expect(bar).toHaveAttribute("expanded");
  });

  it("expanded change should fire event", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-bar></calcite-action-bar>");

    const element = await page.find("calcite-action-bar");

    const eventSpy = await page.spyOnEvent("calciteActionBarToggle", "window");

    element.setProperty("expanded", true);

    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("expanded by default", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-bar expanded></calcite-action-bar>");

    const buttonGroup = await page.find("calcite-action-bar >>> .action-group--bottom");

    const button = await buttonGroup.find("calcite-action");

    const textMode = await button.getProperty("textMode");

    expect(textMode).toBe("visible");
  });
});
