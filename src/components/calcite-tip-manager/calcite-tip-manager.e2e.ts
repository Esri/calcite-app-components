import { newE2EPage } from "@stencil/core/testing";
import { DEFAULT_GROUP_TITLE } from "./resources";

describe("calcite-tip-manager", () => {
  it("should render and show the default title", async () => {
    const page = await newE2EPage();

    await page
      .setContent(`<calcite-tip-manager><calcite-tip><p>basic render</p></calcite-tip></calcite-tip-manager>`)
      .catch((error) => {
        console.error(error);
      });
    const tipManager = await page.find("calcite-tip-manager");
    expect(tipManager).not.toBeNull();
    const isVisible = await tipManager.isVisible();
    expect(isVisible).toBe(true);

    const title = await page.find(`calcite-tip-manager >>> [data-test-id="title"]`);
    expect(title.innerText).toBe(DEFAULT_GROUP_TITLE);
  });

  it("should be hidden after the close button is clicked", async () => {
    const page = await newE2EPage();

    await page
      .setContent(`<calcite-tip-manager><calcite-tip><p>basic render</p></calcite-tip></calcite-tip-manager>`)
      .catch((error) => {
        console.error(error);
      });
    const tipManager = await page.find("calcite-tip-manager");

    const closeButton = await page.find(`calcite-tip-manager >>> [data-test-id="close"]`);
    closeButton.click();
    await page.waitForChanges();

    const isVisible = await tipManager.isVisible();
    expect(isVisible).toBe(false);
  });

  it("should select the first tip by default and change the selectedIndex when the previous or next buttons are clicked", async () => {
    const page = await newE2EPage();

    await page
      .setContent(
        `<calcite-tip-manager>
        <calcite-tip id="one"><p>basic render</p></calcite-tip>
        <calcite-tip id="two"><p>basic render</p></calcite-tip>
      </calcite-tip-manager>`
      )
      .catch((error) => {
        console.error(error);
      });
    const tipManager = await page.find("calcite-tip-manager");

    let selectedTip = await tipManager.find(`calcite-tip[selected="true"]`);
    expect(selectedTip.id).toEqual("one"); // default selected tip is index 0

    const nextButton = await page.find(`calcite-tip-manager >>> [data-test-id="next"]`);
    nextButton.click();
    await page.waitForChanges();

    selectedTip = await tipManager.find(`calcite-tip[selected="true"]`);
    expect(selectedTip.id).toEqual("two");

    const previousButton = await page.find(`calcite-tip-manager >>> [data-test-id="previous"]`);
    previousButton.click();
    await page.waitForChanges();

    selectedTip = await tipManager.find(`calcite-tip[selected="true"]`);
    expect(selectedTip.id).toEqual("one");
  });

  it("should update the group title to match the selected tips attribute", async () => {
    const page = await newE2EPage();
    const title1 = "group1";
    const title2 = "group2";

    await page
      .setContent(
        `<calcite-tip-manager>
        <calcite-tip data-group-title=${title1}><p>basic render</p></calcite-tip>
        <calcite-tip data-group-title=${title1}><p>basic render</p></calcite-tip>
        <calcite-tip data-group-title=${title2}><p>basic render</p></calcite-tip>
      </calcite-tip-manager>`
      )
      .catch((error) => {
        console.error(error);
      });
    const tipManager = await page.find("calcite-tip-manager");

    const title = await page.find(`calcite-tip-manager >>> [data-test-id="title"]`);
    expect(title.innerText).toBe(title1);

    const nextButton = await page.find(`calcite-tip-manager >>> [data-test-id="next"]`);
    nextButton.click();
    await page.waitForChanges();

    expect(title.innerText).toBe(title1);

    nextButton.click();
    await page.waitForChanges();

    expect(title.innerText).toBe(title2);
  });

  it("should pre-select the correct tip if the selected attribute is set", async () => {
    const page = await newE2EPage();
    await page
      .setContent(
        `<calcite-tip-manager>
        <calcite-tip id="one"><p>basic render</p></calcite-tip>
        <calcite-tip id="two" selected=""><p>other</p></calcite-tip>
      </calcite-tip-manager>`
      )
      .catch((error) => {
        console.error(error);
      });
    const tipManager = await page.find("calcite-tip-manager");

    const selectedTip = await tipManager.find(`calcite-tip[selected]`);
    expect(selectedTip.id).toEqual("two");
  });
});
