import { hidden, renders } from "../../tests/commonTests";

describe("calcite-action-group", () => {
  it("renders", async () => renders("calcite-action-group"));

  it("honors hidden attribute", async () => hidden("calcite-action-group"));
});
