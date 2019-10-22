import { newE2EPage } from "@stencil/core/testing";
import { CSS, TEXT } from "./resources";
import { accessible, hidden, renders } from "../../tests/commonTests";

describe.skip("calcite-example", () => {
  it("renders", async () => renders("calcite-example"));

  it("honors hidden attribute", async () => hidden("calcite-example"));

  it("is accessible", async () => accessible("calcite-example"));

  it("shows myString by default", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-example></calcite-example>");

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
