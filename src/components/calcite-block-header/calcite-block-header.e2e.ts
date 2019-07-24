import { newE2EPage } from "@stencil/core/testing";
import { CSS } from "./resources";

describe("calcite-block-header", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-block-header></calcite-block-header>");
    const element = await page.find("calcite-block-header");
    expect(element).toHaveClass("hydrated");
  });

  it("renders a heading", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-block-header heading="test-heading"></calcite-block-header>`);

    const heading = await page.find(`calcite-block-header >>> .${CSS.heading}`);
    expect(heading).toBeTruthy();
    expect(heading.innerText).toBe("test-heading");

    const summary = await page.find(`calcite-block-header >>> .${CSS.summary}`);
    expect(summary).toBeNull();
  });

  it("renders a heading with optional summary", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-block-header heading="test-heading" summary="test-summary"></calcite-block-header>`
    );

    const heading = await page.find(`calcite-block-header >>> .${CSS.heading}`);
    expect(heading).toBeTruthy();

    const summary = await page.find(`calcite-block-header >>> .${CSS.summary}`);
    expect(summary.innerText).toBe("test-summary");
  });

  it("supports a nested control", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-block-header heading="test-heading" summary="test-summary"><input class="nested-control" /></calcite-block-header>`
    );
    const element = await page.find("calcite-block-header");
    const elementClickSpy = await element.spyOnEvent("click");

    const control = await element.find(".nested-control");
    expect(control).toBeTruthy();

    await control.click();
    expect(elementClickSpy.firstEvent.defaultPrevented).toBe(true);

    await element.click();
    expect(elementClickSpy.lastEvent.defaultPrevented).toBe(false);
  });
});
