import { newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders } from "../../tests/commonTests";
import { CSS } from "./resources";

describe("calcite-fab", () => {
  it("renders", async () => renders("calcite-fab"));

  it("honors hidden attribute", async () => hidden("calcite-fab"));

  it("should have visible text when text is enabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab text="hello world" text-enabled></calcite-fab>`);

    const button = await page.find(`calcite-fab >>> .${CSS.button}`);
    const text = button.textContent;

    expect(text).toBe("hello world");
  });

  it("should not have visible text when text is not enabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab text="hello world"></calcite-fab>`);

    const button = await page.find(`calcite-fab >>> .${CSS.button}`);
    const text = button.textContent;

    expect(text).toBe("");
  });

  it("should have label", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab text="hello world" label="hi"></calcite-fab>`);

    const button = await page.find(`calcite-fab >>> .${CSS.button}`);
    expect(button.getAttribute("title")).toBe("hi");
    expect(button.getAttribute("aria-label")).toBe("hi");
  });

  it("should be disabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab disabled></calcite-fab>`);

    const button = await page.find(`calcite-fab >>> .${CSS.button}`);
    expect(button).toHaveAttribute("disabled");
  });

  it("should have appearance=outline", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab text="hello world"></calcite-fab>`);

    const fab = await page.find(`calcite-fab >>> .${CSS.button}`);
    expect(fab.getAttribute("appearance")).toBe("outline");
  });

  it("should be accessible", async () => {
    await accessible(`<calcite-fab text="hello world"></calcite-fab>`);
    await accessible(`<calcite-fab text="hello world" disabled text-enabled></calcite-fab>`);
  });
});
