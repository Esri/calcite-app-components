import { newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders } from "../../tests/commonTests";
import { setUpPage } from "../../tests/utils";
import { CSS } from "./resources";

describe("calcite-action-pad", () => {
  it("renders", async () => renders("calcite-action-pad"));

  it("honors hidden attribute", async () => hidden("calcite-action-pad"));

  it("defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-pad></calcite-action-pad>");
    const element = await page.find("calcite-action-pad");
    expect(element.getAttribute("expand")).not.toBeNull();
    expect(element.getAttribute("expanded")).toBeNull();
  });

  describe("expand functionality", () => {
    it("should show expand by default", async () => {
      const page = await newE2EPage();

      await page.setContent("<calcite-action-pad></calcite-action-pad>");

      await page.waitForChanges();

      const expandAction = await page.find("calcite-action-pad >>> calcite-action");

      expect(expandAction).not.toBeNull();
    });

    it("should not show expand when false", async () => {
      const page = await newE2EPage();

      await page.setContent('<calcite-action-pad expand="false"></calcite-action-pad>');

      await page.waitForChanges();

      const expandAction = await page.find("calcite-action-pad >>> calcite-action");

      expect(expandAction).toBeNull();
    });

    it("should toggle expanded", async () => {
      const page = await setUpPage("<calcite-action-pad></calcite-action-pad>", {
        withPeerDependencies: true
      });

      const pad = await page.find("calcite-action-pad");

      const buttonGroup = await page.find(`calcite-action-pad >>> .${CSS.actionGroupBottom}`);

      const button = await buttonGroup.find(`calcite-action`);

      expect(button).not.toBeNull();

      await button.click();

      expect(pad).toHaveAttribute("expanded");
    });

    it("should fire expanded event", async () => {
      const page = await newE2EPage();

      await page.setContent("<calcite-action-pad></calcite-action-pad>");

      const element = await page.find("calcite-action-pad");

      const eventSpy = await element.spyOnEvent("calciteActionPadToggle");

      element.setProperty("expanded", true);

      await page.waitForChanges();

      expect(eventSpy).toHaveReceivedEvent();
    });

    it("should have child actions be textEnabled when expanded is set", async () => {
      const page = await newE2EPage();

      await page.setContent("<calcite-action-pad expanded></calcite-action-pad>");

      const buttonGroup = await page.find(`calcite-action-pad >>> .${CSS.actionGroupBottom}`);

      const button = await buttonGroup.find("calcite-action");

      const textEnabled = await button.getProperty("textEnabled");

      expect(textEnabled).toBe(true);
    });
  });

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

  it("should be accessible when expanded", async () =>
    accessible(`
    <calcite-action-pad expanded>
      <calcite-action-group>
        <calcite-action text="Add">
          <calcite-icon icon="plus" scale="s"></calcite-icon>
        </calcite-action>
      </calcite-action-group>
    </calcite-action-pad>
    `));
});
