import { hidden, renders } from "../../tests/commonTests";

describe("calcite-tip-group", () => {
  it("renders", async () => renders("calcite-tip-group"));

  it("honors hidden attribute", async () => hidden("calcite-tip-group"));
});
