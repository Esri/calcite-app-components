import { newE2EPage } from "@stencil/core/testing";

describe("calcite-shell-panel", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-panel></calcite-shell-panel>");
    const element = await page.find("calcite-shell-panel");
    expect(element).toHaveClass("hydrated");
  });

  it("defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell-panel></calcite-shell-panel>");
    const element = await page.find("calcite-shell-panel");

    const layout = await element.getProperty("layout");

    expect(layout).toBe("leading");
    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
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
});
