import { newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders } from "../../tests/commonTests";

describe("calcite-fab", () => {
  it("renders", async () => renders("calcite-fab"));

  it("honors hidden attribute", async () => hidden("calcite-fab"));

  it("should have visible text when text is enabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab text="hello world" text-enabled></calcite-fab>`);

    const button = await page.find("calcite-fab >>> .button");
    const text = button.textContent;

    expect(text).toBe("hello world");
  });

  it("should not have visible text when text is not enabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab text="hello world"></calcite-fab>`);

    const button = await page.find("calcite-fab >>> .button");
    const text = button.textContent;

    expect(text).toBe("");
  });

  it("should have label", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab text="hello world" label="hi"></calcite-fab>`);

    const button = await page.find("calcite-fab >>> .button");
    expect(button.getAttribute("title")).toBe("hi");
    expect(button.getAttribute("aria-label")).toBe("hi");
  });

  it("should be disabled", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab disabled></calcite-fab>`);

    const button = await page.find("calcite-fab >>> .button");
    expect(button).toHaveAttribute("disabled");
  });

  it("should have appearance=solid", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-fab text="hello world"></calcite-fab>`);

    const fab = await page.find("calcite-fab >>> .button");
    expect(fab.getAttribute("appearance")).toBe("solid");
  });

  it("should be accessible", async () => {
    await accessible(`<calcite-fab text="hello world"></calcite-fab>`);
    await accessible(`<calcite-fab text="hello world" disabled text-enabled></calcite-fab>`);
  });
});
