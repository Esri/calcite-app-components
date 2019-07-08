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

    const primary = await element.getProperty("primary");

    expect(primary).toBe(false);
    expect(element.shadowRoot.firstElementChild.tagName).toBe("DIV");
  });

  it("primary property should have action slot first ", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<calcite-shell-panel primary><div slot="action-bar">bar</div><div>content</div></calcite-shell-panel>'
    );

    const element = await page.find("calcite-shell-panel");

    await page.waitForChanges();

    expect(element.shadowRoot.firstElementChild.tagName).toBe("SLOT");
  });
});
