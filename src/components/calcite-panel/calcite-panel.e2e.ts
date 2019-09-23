import { hidden, renders } from "../../tests/commonTests";

describe("calcite-panel", () => {
  it("renders", async () => renders("calcite-panel"));

  it("honors hidden attribute", async () => hidden("calcite-panel"));
});
