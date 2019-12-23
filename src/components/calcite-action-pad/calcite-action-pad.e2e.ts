import { newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders } from "../../tests/commonTests";
import { setUpPage } from "../../tests/utils";

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

  it("expand: true", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-pad></calcite-action-pad>");

    await page.waitForChanges();

    const expandAction = await page.find("calcite-action-pad >>> calcite-action");

    expect(expandAction).not.toBeNull();
  });

  it("expand: false", async () => {
    const page = await newE2EPage();

    await page.setContent('<calcite-action-pad expand="false"></calcite-action-pad>');

    await page.waitForChanges();

    const expandAction = await page.find("calcite-action-pad >>> calcite-action");

    expect(expandAction).toBeNull();
  });

  it("expanded", async () => {
    const page = await setUpPage("<calcite-action-pad></calcite-action-pad>", {
      withPeerDependencies: true
    });

    const pad = await page.find("calcite-action-pad");

    const buttonGroup = await page.find("calcite-action-pad >>> .action-group--bottom");

    const button = await buttonGroup.find("calcite-action >>> .button");

    expect(button).not.toBeNull();

    await button.click();

    expect(pad).toHaveAttribute("expanded");
  });

  it("expanded change should fire event", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-pad></calcite-action-pad>");

    const element = await page.find("calcite-action-pad");

    const eventSpy = await page.spyOnEvent("calciteActionPadToggle", "window");

    element.setProperty("expanded", true);

    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("expanded by default", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-action-pad expanded></calcite-action-pad>");

    const buttonGroup = await page.find("calcite-action-pad >>> .action-group--bottom");

    const button = await buttonGroup.find("calcite-action");

    const textEnabled = await button.getProperty("textEnabled");

    expect(textEnabled).toBe(true);
  });

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

  it("should be accessible when expanded", async () =>
    accessible(`
    <calcite-action-pad expanded>
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
