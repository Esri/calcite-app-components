import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";

describe.skip("calcite-example", () => {
  it("renders and shows myString by default", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-example></calcite-example>");
    const element = await page.find("calcite-example");
    expect(element).toHaveClass("hydrated");

    const div = await page.find(`calcite-example >>> .${CSS.foo}`);
    expect(div.innerText).toBe(TEXT.myString);
  });

  it("hides myString when someProp is false", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-example some-prop="false"></calcite-example>`);
    const div = await page.find(`calcite-example >>> .${CSS.foo}`);
    expect(div.innerText).toBe("");
  });
});
