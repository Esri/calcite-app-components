import { newE2EPage } from "@stencil/core/testing";

describe("calcite-shell", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell></calcite-shell>");
    const element = await page.find("calcite-shell");
    expect(element).toHaveClass("hydrated");
  });

  it("defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell></calcite-shell>");

    const footer = await page.find(`calcite-shell >>> slot[name="shell-footer"]`);
    const header = await page.find(`calcite-shell >>> slot[name="shell-header"]`);

    expect(footer).toBeNull();
    expect(header).toBeNull();
  });

  it("footer should be present when defined", async () => {
    const page = await newE2EPage();

    await page.setContent('<calcite-shell><div slot="shell-footer">Footer</div></calcite-shell>');

    const footer = await page.find(`calcite-shell >>> slot[name="shell-footer"]`);

    expect(footer).not.toBeNull();
  });

  it("header should be present when defined", async () => {
    const page = await newE2EPage();

    await page.setContent('<calcite-shell><div slot="shell-header">Header</div></calcite-shell>');

    const header = await page.find(`calcite-shell >>> slot[name="shell-header"]`);

    expect(header).not.toBeNull();
  });
});
