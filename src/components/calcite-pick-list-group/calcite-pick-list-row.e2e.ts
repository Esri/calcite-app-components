import { newE2EPage } from "@stencil/core/testing";
import { CSS } from "./resources";

describe("calcite-pick-list-group", () => {
  it("should render", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-pick-list-group></calcite-pick-list-group>`);
    const pickList = await page.find("calcite-pick-list-group");
    expect(pickList).not.toBeNull();
    const isVisible = await pickList.isVisible();
    expect(isVisible).toBe(true);
  });

  it("should render a header if one is provided", async () => {
    const page = await newE2EPage();
    const headingText = "testing";

    await page.setContent(`<calcite-pick-list-group text-group-title=${headingText}></calcite-pick-list-group>`);
    const heading = await page.find(`calcite-pick-list-group >>> .${CSS.heading}`);
    const isVisible = await heading.isVisible();
    expect(isVisible).toBe(true);
    expect(heading.innerText).toBe(headingText);
  });
});
