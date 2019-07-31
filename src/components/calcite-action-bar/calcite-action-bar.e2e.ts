import { newE2EPage } from "@stencil/core/testing";

describe("calcite-action-bar", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-bar></calcite-action-bar>");
    const element = await page.find("calcite-action-bar");
    expect(element).toHaveClass("hydrated");
  });

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

    button.click();

    await page.waitForChanges();

    expect(bar).toHaveAttribute("expanded");
  });
});
