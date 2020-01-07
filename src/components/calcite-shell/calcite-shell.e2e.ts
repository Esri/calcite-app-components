import { newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders } from "../../tests/commonTests";
import { CSS, SLOTS } from "./resources";

describe("calcite-shell", () => {
  it("renders", async () => renders("calcite-shell"));

  it("honors hidden attribute", async () => hidden("calcite-shell"));

  it("defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-shell></calcite-shell>");

    const footer = await page.find(`calcite-shell >>> slot[name="${SLOTS.footer}"]`);
    const header = await page.find(`calcite-shell >>> slot[name="${SLOTS.header}"]`);

    expect(footer).toBeNull();
    expect(header).toBeNull();
  });

  it("footer should be present when defined", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-shell><div slot="${SLOTS.footer}">Footer</div></calcite-shell>`);

    const footer = await page.find(`calcite-shell >>> slot[name="${SLOTS.footer}"]`);

    expect(footer).not.toBeNull();
  });

  it("header should be present when defined", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-shell><div slot="${SLOTS.header}">Header</div></calcite-shell>`);

    const header = await page.find(`calcite-shell >>> slot[name="${SLOTS.header}"]`);

    expect(header).not.toBeNull();
  });

  it("should be accessible", async () =>
    accessible(`
    <calcite-shell>
      <calcite-shell-panel slot="${SLOTS.primaryPanel}" layout="leading">
        <p>Primary Content</p>
      </calcite-shell-panel>
      <calcite-shell-panel slot="${SLOTS.contextualPanel}" layout="trailing">
        <p>Primary Content</p>
      </calcite-shell-panel>
    </calcite-shell>
    `));

  it("flex row should not be reversed", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-shell>
    <calcite-shell-panel slot="${SLOTS.primaryPanel}" layout="leading">
      <p>Primary Content</p>
    </calcite-shell-panel>
    <calcite-shell-panel slot="${SLOTS.contextualPanel}" layout="trailing">
      <p>Primary Content</p>
    </calcite-shell-panel>
  </calcite-shell>`);

    await page.waitForChanges();

    const mainReversed = await page.find(`calcite-shell >>> .${CSS.mainReversed}`);

    expect(mainReversed).toBeNull();
  });

  it("flex row should be reversed", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-shell>
    <calcite-shell-panel slot="${SLOTS.primaryPanel}" layout="trailing">
      <p>Primary Content</p>
    </calcite-shell-panel>
    <calcite-shell-panel slot="${SLOTS.contextualPanel}" layout="leading">
      <p>Primary Content</p>
    </calcite-shell-panel>
  </calcite-shell>`);

    await page.waitForChanges();

    const mainReversed = await page.find(`calcite-shell >>> .${CSS.mainReversed}`);

    expect(mainReversed).not.toBeNull();
  });
});
