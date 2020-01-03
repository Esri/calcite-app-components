import { newE2EPage } from "@stencil/core/testing";

import { CSS } from "./resources";
import { accessible, defaults, hidden, renders } from "../../tests/commonTests";

describe("calcite-shell-panel", () => {
  it("renders", async () => renders("calcite-shell-panel"));

  it("honors hidden attribute", async () => hidden("calcite-shell-panel"));

  it("defaults", async () =>
    defaults("calcite-shell-panel", [
      {
        propertyName: "layout",
        defaultValue: "leading"
      },
      {
        propertyName: "collapsed",
        defaultValue: false
      }
    ]));

  it("has a slot", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-panel></calcite-shell-panel>");
    const element = await page.find("calcite-shell-panel");
    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });

  it("should show panel content", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-panel >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(true);
  });

  it("collapsed property should hide panel content", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel collapsed><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    await page.waitForChanges();

    const element = await page.find(`calcite-shell-panel >>> .${CSS.content}`);

    const isVisible = await element.isVisible();

    expect(isVisible).toBe(false);
  });

  it("collapsed change should fire event", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find(`calcite-shell-panel`);

    const eventSpy = await page.spyOnEvent("calciteShellPanelToggle", "window");

    element.setProperty("collapsed", true);

    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("leading layout property should have action slot first ", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel layout="leading"><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });

  it("trailing layout property should have DIV first ", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel layout="trailing"><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("DIV");
  });

  it("should be accessible", async () =>
    accessible(`
    <calcite-shell-panel slot="primary-panel" layout="leading">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
              <path d="M9 7h5v2H9v5H7V9H2V7h5V2h2z" />
            </svg>
          </calcite-action>
          <calcite-action text="Save">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
              <path
                d="M14 1H2a1 1 0 0 0-1 1v10a.99.99 0 0 0 .293.707l2 2A.995.995 0 0 0 4 15h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 14v-3h2v3zm6-.001V14h-1v-4H5v4H4v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zM12 6H4V2h8z"
              />
            </svg>
          </calcite-action>
          <calcite-action text="Layers">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
              <path
                d="M15.71 11.487l-7.4 4.441a.738.738 0 0 1-.635 0L.27 11.487a.272.272 0 0 1 0-.508l.913-.547 6.49 3.895a.738.738 0 0 0 .635 0l6.49-3.895.912.547a.271.271 0 0 1 0 .508zm0-3.74L14.8 7.2l-6.49 3.894a.738.738 0 0 1-.635 0L1.184 7.2l-.913.547a.272.272 0 0 0 0 .507l7.403 4.442a.738.738 0 0 0 .635 0l7.402-4.442a.271.271 0 0 0 0-.507zM.272 5.022l7.403 4.441a.738.738 0 0 0 .635 0l7.402-4.441a.271.271 0 0 0 0-.508L8.309.073a.738.738 0 0 0-.635 0L.27 4.514a.272.272 0 0 0 0 .508z"
              />
            </svg>
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <p>Primary Content</p>
    </calcite-shell-panel>
    `));

  it("should have detached class when detached", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-panel><div>content</div></calcite-shell-panel>");

    let detachedElement = await page.find(`calcite-shell-panel >>> .${CSS.contentDetached}`);

    expect(detachedElement).toBeNull();

    const panel = await page.find("calcite-shell-panel");

    panel.setProperty("detached", true);

    await page.waitForChanges();

    detachedElement = await page.find(`calcite-shell-panel >>> .${CSS.contentDetached}`);

    expect(detachedElement).not.toBeNull();
  });
});
