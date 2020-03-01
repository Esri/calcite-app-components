import { CalciteTipManager } from "./calcite-tip-manager";

describe.skip("CalciteTipManager", () => {
  it("should increment/decrement the selectedIndex when the public next/prev methods are called", async () => {
    const tipManager = new CalciteTipManager();
    tipManager.total = 2;
    expect(tipManager.selectedIndex).toBe(0);
    await tipManager.nextTip();
    expect(tipManager.selectedIndex).toBe(1);
    await tipManager.previousTip();
    expect(tipManager.selectedIndex).toBe(0);
  });
});
