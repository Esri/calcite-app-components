import { accessible, hidden, renders } from "../../tests/commonTests";

describe("calcite-action-pad", () => {
  it("renders", async () => renders("calcite-action-pad"));

  it("honors hidden attribute", async () => hidden("calcite-action-pad"));

  it("should be accessible", async () =>
    accessible(`
    <calcite-action-pad>
      <calcite-action-group>
        <calcite-action text="Add">
          <calcite-icon icon="plus" scale="s"></calcite-icon>
        </calcite-action>
      </calcite-action-group>
    </calcite-action-pad>
    `));
});
