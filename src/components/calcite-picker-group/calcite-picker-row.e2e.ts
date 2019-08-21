import { newE2EPage } from "@stencil/core/testing";
import { CSS } from "./resources";

describe("calcite-picker-group", () => {
  it("should render", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-picker-group></calcite-picker-group>`);
    const picker = await page.find("calcite-picker-group");
    expect(picker).not.toBeNull();
    const isVisible = await picker.isVisible();
    expect(isVisible).toBe(true);
  });

  it("should render a header if one is provided", async () => {
    const page = await newE2EPage();
    const headingText = "testing";

    await page.setContent(`<calcite-picker-group text-group-title=${headingText}></calcite-picker-group>`);
    const heading = await page.find(`calcite-picker-group >>> .${CSS.heading}`);
    const isVisible = await heading.isVisible();
    expect(isVisible).toBe(true);
    expect(heading.innerText).toBe(headingText);
  });
});
