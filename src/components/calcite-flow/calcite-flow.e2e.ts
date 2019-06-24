import { newE2EPage } from "@stencil/core/testing";

describe("calcite-flow", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow></calcite-flow>");

    const element = await page.find("calcite-flow");

    expect(element).toHaveClass("hydrated");
  });

  it("frame defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow></calcite-flow>");

    const element = await page.find("calcite-flow >>> .frame");

    expect(element).toHaveClass("frame");
    expect(element).not.toHaveClass("frame--advancing");
    expect(element).not.toHaveClass("frame--retreating");
  });

  it("back()", async () => {
    const page = await newE2EPage();

    await page.setContent(
      "<calcite-flow><calcite-flow-item></calcite-flow-item></calcite-flow>"
    );

    const element = await page.find("calcite-flow");

    const methodValue = await element
      .callMethod("back")
      .catch(() => console.log);

    expect(methodValue).not.toBeNull();

    await page.waitForChanges();

    expect(element.innerHTML).toEqual("");
  });

  it("frame advancing", async () => {
    const page = await newE2EPage();

    await page.setContent(
      "<calcite-flow><calcite-flow-item></calcite-flow-item></calcite-flow>"
    );

    const element = await page.find("calcite-flow");

    element.innerHTML =
      "<calcite-flow-item>test</calcite-flow-item><calcite-flow-item>test</calcite-flow-item>";

    await page.waitForChanges();

    const frame = await page.find("calcite-flow >>> .frame");

    expect(frame).toHaveClass("frame--advancing");
  });

  it("frame retreating", async () => {
    const page = await newE2EPage();

    await page.setContent(
      "<calcite-flow><calcite-flow-item></calcite-flow-item><calcite-flow-item></calcite-flow-item><calcite-flow-item></calcite-flow-item></calcite-flow>"
    );

    const element = await page.find("calcite-flow");

    const methodValue = await element
      .callMethod("back")
      .catch(() => console.log);

    expect(methodValue).not.toBeNull();

    await page.waitForChanges();

    const frame = await page.find("calcite-flow >>> .frame");

    expect(frame).toHaveClass("frame--retreating");
  });

  it("flow-item properties", async () => {
    const page = await newE2EPage();

    await page.setContent(
      "<calcite-flow><calcite-flow-item></calcite-flow-item><calcite-flow-item></calcite-flow-item><calcite-flow-item></calcite-flow-item></calcite-flow>"
    );

    const items = await page.findAll("calcite-flow calcite-flow-item");

    expect(items).toHaveLength(3);

    const showBackButton0 = await items[0].getProperty("showBackButton");
    const showBackButton2 = await items[2].getProperty("showBackButton");

    expect(items[0].getAttribute("hidden")).not.toBe(null);
    expect(showBackButton0).not.toBe(null);

    expect(items[2].getAttribute("hidden")).toBe(null);
    expect(showBackButton2).not.toBe(null);
  });
});
