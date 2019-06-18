import { newE2EPage } from "@stencil/core/testing";
import { DEFAULT_GROUP_TITLE } from './localized_text';

describe("calcite-tip-manager", () => {
  it("should render and show the default title", async () => {
    const page = await newE2EPage();

    await page
      .setContent(`<calcite-tip-manager><calcite-tip><p>basic render</p></calcite-tip></calcite-tip-manager>`)
      .catch(error => {
        console.error(error);
      });

    const tipManager = await page.find("calcite-tip-manager");
    expect(tipManager).not.toBeNull();
    const title = await page.find(`calcite-tip-manager >>> [data-test-id="title"]`);
    expect(title.innerText).toBe(DEFAULT_GROUP_TITLE);
  });

  // it("should render", async () => {
  //   const page = await newE2EPage();

  //   await page
  //     .setContent(`<calcite-tip-manager><calcite-tip><p>basic render</p></calcite-tip></calcite-tip-manager>`)
  //     .catch(error => {
  //       console.error(error);
  //     });

  //   const tipManager = await page.find("calcite-tip-manager");
  //   expect(tipManager).not.toBeNull();
  // });
});

