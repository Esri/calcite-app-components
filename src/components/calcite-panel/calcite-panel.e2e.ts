import { newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders } from "../../tests/commonTests";
import { CSS, SLOTS } from "./resources";
import { setUpPage } from "../../tests/utils";

describe("calcite-panel", () => {
  it("renders", async () => renders("calcite-panel"));

  it("honors hidden attribute", async () => hidden("calcite-panel"));

  it("honors dismissed prop", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-panel dismissible>test</calcite-panel>");

    const element = await page.find("calcite-panel");
    const container = await page.find(`calcite-panel >>> .${CSS.container}`);

    await page.waitForChanges();

    expect(await container.isVisible()).toBe(true);

    element.setProperty("dismissed", true);

    await page.waitForChanges();

    expect(await container.isVisible()).toBe(false);
  });

  it("dismissible should fire event when closed", async () => {
    const page = await setUpPage("<calcite-panel dismissible>test</calcite-panel>", {
      withPeerDependencies: true
    });

    const eventSpy = await page.spyOnEvent("calcitePanelDismissedChange", "window");

    const closeButton = await page.find("calcite-panel >>> calcite-action");

    await closeButton.click();

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("should be accessible", async () =>
    accessible(`
    <calcite-panel>
      <div slot="${SLOTS.headerLeadingContent}">test L</div>
      <div slot="${SLOTS.headerContent}">test center</div>
      <div slot="${SLOTS.headerTrailingContent}">test T</div>
      <p>Content</p>
      <div slot="${SLOTS.footer}">test Footer</div>
    </calcite-panel>
    `));

  it("should focus on close button", async () => {
    const page = await setUpPage("<calcite-panel dismissible>test</calcite-panel>", {
      withPeerDependencies: true
    });

    const tagName = await page.evaluate(async () => {
      const calcitePanel = document.querySelector("calcite-panel");
      await calcitePanel.setFocus("dismiss-button");
      const activeElement = calcitePanel.shadowRoot.activeElement;
      return activeElement.tagName;
    });

    expect(tagName).toBe("CALCITE-ACTION");
  });

  it("should focus on container", async () => {
    const page = await setUpPage("<calcite-panel dismissible>test</calcite-panel>", {
      withPeerDependencies: true
    });

    const tagName = await page.evaluate(async () => {
      const calcitePanel = document.querySelector("calcite-panel");
      await calcitePanel.setFocus();
      const activeElement = calcitePanel.shadowRoot.activeElement;
      return activeElement.tagName;
    });

    expect(tagName).toBe("ARTICLE");
  });

  it("honors calcitePanelScroll event", async () => {
    const html = `
    <calcite-panel style="height:200px; width:200px;">
      <p style="height:1000px; width:200px;">Test content</p>
      <p id="scrollToMe">Scroll to me</p>
    </calcite-panel>
    `;

    const page = await newE2EPage({
      html
    });

    const scrollSpy = await page.spyOnEvent("calcitePanelScroll");

    await page.evaluate(() => {
      document.querySelector("calcite-panel #scrollToMe").scrollIntoView();
    });

    await page.waitForChanges();

    expect(scrollSpy).toHaveReceivedEventTimes(1);
  });
});
