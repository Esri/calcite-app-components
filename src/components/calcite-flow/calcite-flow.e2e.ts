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

    await page.setContent("<calcite-flow><calcite-flow-item></calcite-flow-item></calcite-flow>");

    const element = await page.find("calcite-flow");

    await element.callMethod("back");

    await page.waitForChanges();

    expect(element.innerHTML).toEqual("");
  });

  it("frame advancing", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow><calcite-flow-item></calcite-flow-item></calcite-flow>");

    const items = await page.findAll("calcite-flow-item");

    expect(items).toHaveLength(1);

    const element = await page.find("calcite-flow");

    element.innerHTML = "<calcite-flow-item>test</calcite-flow-item><calcite-flow-item>test</calcite-flow-item>";

    await page.waitForChanges();

    const items2 = await page.findAll("calcite-flow-item");

    expect(items2).toHaveLength(2);

    const frame = await page.find("calcite-flow >>> .frame");

    expect(frame).toHaveClass("frame--advancing");
  });

  it("frame retreating", async () => {
    const page = await newE2EPage();

    await page.setContent(
      "<calcite-flow><calcite-flow-item></calcite-flow-item><calcite-flow-item></calcite-flow-item><calcite-flow-item></calcite-flow-item></calcite-flow>"
    );

    const items = await page.findAll("calcite-flow-item");

    expect(items).toHaveLength(3);

    const frame = await page.find("calcite-flow >>> .frame");

    expect(frame).not.toHaveClass("frame--retreating");
    expect(frame).not.toHaveClass("frame--advancing");

    const element = await page.find("calcite-flow");

    await element.callMethod("back");

    await page.waitForChanges();

    const items2 = await page.findAll("calcite-flow-item");

    expect(items2).toHaveLength(2);

    /*
    // mutation observer not kicking in in tests

    const frame2 = await page.find("calcite-flow >>> .frame");

    expect(frame2).toHaveClass("frame--retreating");
    */
  });

  it("flow-item properties", async () => {
    const page = await newE2EPage();

    await page.setContent(
      "<calcite-flow><calcite-flow-item></calcite-flow-item><calcite-flow-item></calcite-flow-item><calcite-flow-item></calcite-flow-item></calcite-flow>"
    );

    const items = await page.findAll("calcite-flow-item");

    expect(items).toHaveLength(3);

    /*
    // mutation observer not kicking in in tests

    const showBackButton0 = await items[0].getProperty("showBackButton");
    const showBackButton2 = await items[2].getProperty("showBackButton");

    expect(items[0].getAttribute("hidden")).not.toBe(null);
    expect(showBackButton0).not.toBe(null);

    expect(items[2].getAttribute("hidden")).toBe(null);
    expect(showBackButton2).not.toBe(null);
    */
  });
});
