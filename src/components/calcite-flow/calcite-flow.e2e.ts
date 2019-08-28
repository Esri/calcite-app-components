import { newE2EPage } from "@stencil/core/testing";

import { CSS } from "./resources";
import { hidden, renders } from "../../tests/commonTests";

describe("calcite-flow", () => {
  it("renders", async () => renders("calcite-flow"));

  it("honors hidden attribute", async () => hidden("calcite-flow"));

  it("frame defaults", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow></calcite-flow>");

    const element = await page.find(`calcite-flow >>> .${CSS.frame}`);

    expect(element).toHaveClass(CSS.frame);
    expect(element).not.toHaveClass(CSS.frameAdvancing);
    expect(element).not.toHaveClass(CSS.frameRetreating);
  });

  it("back() method should remove item", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow><calcite-flow-item></calcite-flow-item></calcite-flow>");

    const element = await page.find("calcite-flow");

    await element.callMethod("back");

    await page.waitForChanges();

    expect(element.innerHTML).toEqual("");
  });

  it("frame advancing should add animation class", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow><calcite-flow-item></calcite-flow-item></calcite-flow>");

    const items = await page.findAll("calcite-flow-item");

    expect(items).toHaveLength(1);

    const element = await page.find("calcite-flow");

    element.innerHTML = "<calcite-flow-item>test</calcite-flow-item><calcite-flow-item>test</calcite-flow-item>";

    await page.waitForChanges();

    const items2 = await page.findAll("calcite-flow-item");

    expect(items2).toHaveLength(2);

    const frame = await page.find(`calcite-flow >>> .${CSS.frame}`);

    expect(frame).toHaveClass(CSS.frameAdvancing);
  });

  it("frame retreating should add animation class", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow></calcite-flow>");

    await page.$eval("calcite-flow", (elm: HTMLElement) => {
      elm.innerHTML = `
      <calcite-flow-item></calcite-flow-item>
      <calcite-flow-item></calcite-flow-item>
      <calcite-flow-item></calcite-flow-item>
      `;
    });

    const items = await page.findAll("calcite-flow-item");

    expect(items).toHaveLength(3);

    const frame = await page.find(`calcite-flow >>> .${CSS.frame}`);

    expect(frame).not.toHaveClass(CSS.frameRetreating);
    expect(frame).not.toHaveClass(CSS.frameAdvancing);

    await page.$eval("calcite-flow", (elm: HTMLCalciteFlowElement) => elm.back());

    await page.waitForChanges();

    const items2 = await page.findAll("calcite-flow-item");

    expect(items2).toHaveLength(2);

    const frame2 = await page.find(`calcite-flow >>> .${CSS.frame}`);

    expect(frame2).toHaveClass(CSS.frameRetreating);
    expect(frame2).not.toHaveClass(CSS.frameAdvancing);
  });

  it("flow-item properties should be set", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-flow></calcite-flow>");

    await page.$eval("calcite-flow", (elm: HTMLElement) => {
      elm.innerHTML = `
      <calcite-flow-item></calcite-flow-item>
      <calcite-flow-item></calcite-flow-item>
      <calcite-flow-item></calcite-flow-item>
      `;
    });

    const items = await page.findAll("calcite-flow-item");

    expect(items).toHaveLength(3);

    const showBackButton0 = await items[0].getProperty("showBackButton");
    const showBackButton2 = await items[2].getProperty("showBackButton");

    expect(items[0].getAttribute("hidden")).not.toBe(null);
    expect(showBackButton0).not.toBe(null);

    expect(items[2].getAttribute("hidden")).toBe(null);
    expect(showBackButton2).not.toBe(null);
  });
});
