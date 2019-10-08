import { newE2EPage } from "@stencil/core/testing";
import { hidden, renders } from "../../tests/commonTests";

describe("calcite-action", () => {
  it("renders", async () => renders("calcite-action"));

  it("honors hidden attribute", async () => hidden("calcite-action"));

  it("should not have text container", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world"></calcite-action>`).catch((error) => {
      console.error(error);
    });

    const textcontainer = await page.find("calcite-action >>> .text-container");
    expect(textcontainer).toBeNull();
  });

  it("should have text container", async () => {
    const page = await newE2EPage();

    await page
      .setContent(`<calcite-action text="hello world" text-display="visible"></calcite-action>`)
      .catch((error) => {
        console.error(error);
      });

    const textcontainer = await page.find("calcite-action >>> .text-container");
    expect(textcontainer).not.toBeNull();
  });

  it("should have icon container", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action><svg><path></svg></calcite-action>`).catch((error) => {
      console.error(error);
    });

    const iconContainer = await page.find("calcite-action >>> .icon-container");
    expect(iconContainer).not.toBeNull();
  });

  it("should always have icon container", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action></calcite-action>`).catch((error) => {
      console.error(error);
    });

    const iconContainer = await page.find("calcite-action >>> .icon-container");
    expect(iconContainer).not.toBeNull();
  });

  it("should have fallback label", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world"></calcite-action>`).catch((error) => {
      console.error(error);
    });

    const button = await page.find("calcite-action >>> .button");
    expect(button.getAttribute("title")).toBe("hello world");
    expect(button.getAttribute("aria-label")).toBe("hello world");
  });

  it("should have label", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action text="hello world" label="hi"></calcite-action>`).catch((error) => {
      console.error(error);
    });

    const button = await page.find("calcite-action >>> .button");
    expect(button.getAttribute("title")).toBe("hi");
    expect(button.getAttribute("aria-label")).toBe("hi");
  });

  it("should be disabled", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-action disabled></calcite-action>`).catch((error) => {
      console.error(error);
    });

    const button = await page.find("calcite-action >>> .button");

    expect(button).toHaveAttribute("disabled");
  });
});
