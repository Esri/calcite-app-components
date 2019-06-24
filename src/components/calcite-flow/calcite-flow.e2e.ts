import { newE2EPage } from "@stencil/core/testing";

describe("calcite-flow", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow></calcite-flow>");
    const element = await page.find("calcite-flow");
    expect(element).toHaveClass("hydrated");
  });

  it("has frame", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow></calcite-flow>");
    const element = await page.find("calcite-flow");
    expect(element).toHaveClass("frame");
  });

  // it("frame advancing", async () => {});

  // it("frame retreating", async () => {});

  // it("back()", async () => {});
});
