import { CalciteTipManager } from './calcite-tip-manager';

describe("CalciteTipManager", () => {
  it('should toggle the dismissed property when calling the public hide/show methods', () => {
    const tipManager = new CalciteTipManager();
    expect(tipManager.dismissed).toBe(true);

    tipManager.showTipManager();
    expect(tipManager.dismissed).toBe(false);

    tipManager.hideTipManager();
    expect(tipManager.dismissed).toBe(true);
  });
});
