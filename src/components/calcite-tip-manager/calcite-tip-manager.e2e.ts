import { newE2EPage } from "@stencil/core/testing";
import { CSS, DEFAULT_GROUP_TITLE } from "./resources";

describe("calcite-tip-manager", () => {
  it("should render and show the default title", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-tip-manager><calcite-tip><p>basic render</p></calcite-tip></calcite-tip-manager>`);
    const tipManager = await page.find("calcite-tip-manager");
    expect(tipManager).not.toBeNull();
    const isVisible = await tipManager.isVisible();
    expect(isVisible).toBe(true);

    const title = await page.find(`calcite-tip-manager >>> .${CSS.title}`);
    expect(title.innerText).toBe(DEFAULT_GROUP_TITLE);
  });

  it("should be hidden after the close button is clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-tip-manager><calcite-tip><p>Close behavior</p></calcite-tip></calcite-tip-manager>`
    );
    const tipManager = await page.find("calcite-tip-manager");

    const closeButton = await page.find(`calcite-tip-manager >>> .${CSS.close}`);
    closeButton.click();
    await page.waitForChanges();

    const isVisible = await tipManager.isVisible();
    expect(isVisible).toBe(false);
  });

  it("should select the first tip by default and change the selectedIndex when the previous or next buttons are clicked", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-tip-manager>
        <calcite-tip id="one"><p>first tip default selected</p></calcite-tip>
        <calcite-tip id="two"><p>next/prev behavior</p></calcite-tip>
      </calcite-tip-manager>`
    );
    const tipManager = await page.find("calcite-tip-manager");

    let selectedTip = await tipManager.find(`calcite-tip[selected]`);
    expect(selectedTip.id).toEqual("one"); // default selected tip is index 0

    const nextButton = await page.find(`calcite-tip-manager >>> .${CSS.pageControl}.${CSS.pageControlNext}`);
    nextButton.click();
    await page.waitForChanges();

    selectedTip = await tipManager.find(`calcite-tip[selected]`);
    expect(selectedTip.id).toEqual("two");

    const previousButton = await page.find(`calcite-tip-manager >>> .${CSS.pageControl}.${CSS.pageControlPrevious}`);
    previousButton.click();
    await page.waitForChanges();

    selectedTip = await tipManager.find(`calcite-tip[selected]`);
    expect(selectedTip.id).toEqual("one");
  });

  it("should update the group title to match the selected tips attribute", async () => {
    const page = await newE2EPage();
    const sharedTitle = "group1";
    const title2 = "group2";

    await page.setContent(
      `<calcite-tip-manager>
        <calcite-tip data-group-title=${sharedTitle}><p>group title behavior</p></calcite-tip>
        <calcite-tip data-group-title=${sharedTitle}><p>same title as first one</p></calcite-tip>
        <calcite-tip data-group-title=${title2}><p>different title</p></calcite-tip>
      </calcite-tip-manager>`
    );
    const tipManager = await page.find("calcite-tip-manager");

    const title = await page.find(`calcite-tip-manager >>> .${CSS.title}`);
    expect(title.innerText).toBe(sharedTitle);

    const nextButton = await page.find(`calcite-tip-manager >>> .${CSS.pageControl}.${CSS.pageControlNext}`);
    nextButton.click();
    await page.waitForChanges();

    expect(title.innerText).toBe(sharedTitle);

    nextButton.click();
    await page.waitForChanges();

    expect(title.innerText).toBe(title2);
  });

  it("should pre-select the correct tip if the selected attribute is set", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-tip-manager>
        <calcite-tip id="one"><p>no pre-selected attribute</p></calcite-tip>
        <calcite-tip id="two" selected=""><p>pre-selected and not first</p></calcite-tip>
      </calcite-tip-manager>`
    );
    const tipManager = await page.find("calcite-tip-manager");

    const selectedTip = await tipManager.find(`calcite-tip[selected]`);
    expect(selectedTip.id).toEqual("two");
  });
  it("should update if tips are added after intial load", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-tip-manager>
        <calcite-tip><p>dynamically adding/removing tips</p></calcite-tip>
      </calcite-tip-manager>`
    );
    const tipManager = await page.find("calcite-tip-manager");
    const newTipId = "newTip";
    await page.evaluate((newTipId) => {
      const mgr = document.querySelector("calcite-tip-manager");
      const newTip = mgr.querySelector("calcite-tip:last-child").cloneNode(true);
      newTip.id = newTipId;
      mgr.appendChild(newTip);
    }, newTipId);
    await page.waitForChanges();

    const tips = await page.findAll("calcite-tip-manager calcite-tip");
    expect(tips.length).toBe(2);

    const nextButton = await page.find(`calcite-tip-manager >>> .${CSS.pageControl}.${CSS.pageControlNext}`);
    nextButton.click();
    await page.waitForChanges();

    const selectedTip = await tipManager.find(`calcite-tip[selected]`);
    expect(selectedTip.id).toEqual(newTipId);
  });
});
