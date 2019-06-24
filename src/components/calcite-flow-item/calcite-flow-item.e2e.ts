import { newE2EPage } from "@stencil/core/testing";

describe("calcite-flow-item", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow-item></calcite-flow-item>");
    const element = await page.find("calcite-flow-item");
    expect(element).toHaveClass("hydrated");
  });

  it("heading", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-flow-item heading="test"></calcite-flow-item>'
    );

    const element = await page.find("calcite-flow-item >>> .heading");

    expect(element).toEqualText("test");
  });

  it("text defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow-item></calcite-flow-item>");

    await page.waitForChanges();

    const element = await page.find("calcite-flow-item");

    const textBack = await element.getProperty("textBack");
    const textOpen = await element.getProperty("textOpen");
    const textClose = await element.getProperty("textClose");

    expect(textBack).toEqual("Back");
    expect(textOpen).toEqual("Open");
    expect(textClose).toEqual("Close");
  });

  it("menuOpen", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-flow-item><div slot="menu-actions"><calcite-action text="hello"></calcite-action><calcite-action text="hello"></calcite-action></div></calcite-flow-item>'
    );

    const element = await page.find("calcite-flow-item");

    expect(element.getAttribute("menuOpen")).toBeNull();

    element.setAttribute("menuOpen", true);

    await page.waitForChanges();

    expect(element.getAttribute("menuOpen")).not.toBeNull();

    const menuButton = await page.find("calcite-flow-item >>> .menu-button");

    expect(menuButton).not.toBeNull();
  });
});

// showBackButton
// no menu actions
// single menuaction
// no footer actions
// footer action

// calciteFlowItemRegister
// calciteFlowItemUnregister
// calciteFlowItemBackClick
