import { accessible, hidden, renders } from "../../tests/commonTests";

describe("calcite-action-pad", () => {
  it("renders", async () => renders("calcite-action-pad"));

  it("honors hidden attribute", async () => hidden("calcite-action-pad"));

  it("should be accessible", async () =>
    accessible(`
    <calcite-action-pad>
      <calcite-action-group>
        <calcite-action text="Add">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path d="M9 7h5v2H9v5H7V9H2V7h5V2h2z" />
          </svg>
        </calcite-action>
      </calcite-action-group>
    </calcite-action-pad>
    `));
});
