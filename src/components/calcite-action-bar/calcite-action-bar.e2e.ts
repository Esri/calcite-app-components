import { newE2EPage } from "@stencil/core/testing";
import { CalciteActionBar } from "./calcite-action-bar";

describe("calcite-action-bar", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-bar></calcite-action-bar>");
    const element = await page.find("calcite-action-bar");
    expect(element).toHaveClass("hydrated");
  });

  it("defaults", async () => {
    const bar = new CalciteActionBar();

    expect(bar.expand).toBe(true);
    expect(bar.expanded).toBe(false);
    expect(bar.labels.expand).toEqual("Expand");
    expect(bar.labels.collapse).toEqual("Collapse");
  });

  // it("Default label", async () => {
  //   const page = await newE2EPage();

  //   await page.setContent("<calcite-action-bar expand></calcite-action-bar>");

  //   await page.waitForChanges();

  //   const expandAction = await page.find(
  //     "calcite-action-bar >>> calcite-action"
  //   );

  //   expect(expandAction).not.toBeNull();
  //   expect(expandAction.getProperty("text")).toBe("Expand");
  // });

  // it("expand", async () => {
  //   const page = await newE2EPage();

  //   await page.setContent("<calcite-action-bar expand></calcite-action-bar>");

  //   await page.waitForChanges();

  //   const expandAction = await page.find(
  //     "calcite-action-bar >>> calcite-action"
  //   );

  //   expect(expandAction).not.toBeNull();
  // });

  // it("expanded", async () => {
  //   const page = await newE2EPage();

  //   await page.setContent("<calcite-action-bar expand></calcite-action-bar>");

  //   //const eventSpy = await page.spyOnEvent("calciteActionClick", "window");

  //   const bar = await page.find("calcite-action-bar");

  //   const button = await page.find(
  //     "calcite-action-bar >>> calcite-action >>> .button"
  //   );

  //   expect(button).not.toBeNull();

  //   button.click();

  //   await page.waitForChanges();

  //   //expect(eventSpy).toHaveReceivedEvent();
  //   expect(bar.getProperty("expanded")).toBe(true);
  // });
});
