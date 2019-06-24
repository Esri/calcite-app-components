import { newE2EPage } from "@stencil/core/testing";

describe("calcite-flow-item", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow-item></calcite-flow-item>");
    const element = await page.find("calcite-flow-item");
    expect(element).toHaveClass("hydrated");
  });

  it("no menu actions", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow-item></calcite-flow-item>");

    const menuContainer = await page.find(
      "calcite-flow-item >>> .menu-container"
    );

    const singleActionContainer = await page.find(
      "calcite-flow-item >>> .single-action-container"
    );

    expect(menuContainer).toBeNull();
    expect(singleActionContainer).toBeNull();
  });

  it("single menu action", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-flow-item><div slot="menu-actions"><calcite-action text="hello"></calcite-action></div></calcite-flow-item>'
    );

    const singleActionContainer = await page.find(
      "calcite-flow-item >>> .single-action-container"
    );

    expect(singleActionContainer).not.toBeNull();
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

it("back button / showBackButton", async () => {
  const page = await newE2EPage();

  await page.setContent("<calcite-flow-item></calcite-flow-item>");

  const element = await page.find("calcite-flow-item");

  const showBackButton = await element.getProperty("showBackButton");

  expect(showBackButton).toBe(false);

  element.setProperty("showBackButton", true);

  await page.waitForChanges();

  const backButton = await page.find("calcite-flow-item >>> .back-button");

  expect(backButton).not.toBeNull();

  const eventSpy = await page.spyOnEvent("calciteFlowItemBackClick", "window");

  backButton.click();

  await page.waitForChanges();

  expect(eventSpy).toHaveReceivedEvent();
});
