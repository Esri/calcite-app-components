import { accessible, hidden, renders } from "../../tests/commonTests";
import { newE2EPage } from "@stencil/core/testing";

describe("calcite-action-group", () => {
  it("renders", async () => renders("calcite-action-group"));

  it("honors hidden attribute", async () => hidden("calcite-action-group"));

  it("defaults", async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <calcite-action-pad>
        <calcite-action-group>
          <calcite-action text="hello"></calcite-action>
        </calcite-action-group>
      </calcite-action-pad>
      `);
    const element = await page.find("calcite-action-group");
    expect(element.getAttribute("layout")).toBe("vertical");
    expect(element.getAttribute("layout")).not.toBe("horizontal");
  });

  it("should be accessible", async () =>
    accessible(`
    <calcite-action-group>
        <calcite-action text="Add" icon="plus"></calcite-action>
      </calcite-action-group>
    `));
});
