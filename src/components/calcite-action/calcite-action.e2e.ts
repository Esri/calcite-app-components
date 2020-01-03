import { newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders } from "../../tests/commonTests";

describe("calcite-action", () => {
  it("renders", async () => renders("calcite-action"));

  it("honors hidden attribute", async () => hidden("calcite-action"));

  it("should have text container when text is not enabled", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world"></calcite-action>`);

    const textContainer = await page.find("calcite-action >>> .text-container");
    expect(textContainer).not.toBeNull();
  });

  it("should have text container when text is enabled", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world" text-enabled></calcite-action>`);

    const textContainer = await page.find("calcite-action >>> .text-container");

    expect(textContainer).not.toBeNull();
  });

  it("should have visible text", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world" text-enabled></calcite-action>`);

    const textContainer = await page.find("calcite-action >>> .text-container");

    const isVisible = await textContainer.isVisible();

    expect(isVisible).toBe(true);
  });

  it("should have icon container", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action><svg><path></svg></calcite-action>`);

    const iconContainer = await page.find("calcite-action >>> .icon-container");
    expect(iconContainer).not.toBeNull();
  });

  it("should always have icon container", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action></calcite-action>`);

    const iconContainer = await page.find("calcite-action >>> .icon-container");
    expect(iconContainer).not.toBeNull();
  });

  it("should use text prop for a11y attributes when text is not enabled", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world"></calcite-action>`);

    const button = await page.find("calcite-action >>> .button");
    expect(button.getAttribute("title")).toBe("hello world");
    expect(button.getAttribute("aria-label")).toBe("hello world");
  });

  it("should have label", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world" label="hi"></calcite-action>`);

    const button = await page.find("calcite-action >>> .button");
    expect(button.getAttribute("title")).toBe("hi");
    expect(button.getAttribute("aria-label")).toBe("hi");
  });

  it("should be disabled", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action disabled></calcite-action>`);

    const button = await page.find("calcite-action >>> .button");

    expect(button).toHaveAttribute("disabled");
  });

  it("should have appearance=solid", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world"></calcite-action>`);

    const action = await page.find("calcite-action");
    expect(action.getAttribute("appearance")).toBe("solid");
  });

  it("should be accessible", async () => {
    await accessible(`<calcite-action text="hello world"></calcite-action>`);

    await accessible(`<calcite-action text="hello world" disabled text-enabled></calcite-action>`);
  });
});
