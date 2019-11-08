import { E2EPage, newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders } from "../../tests/commonTests";

describe("calcite-filter", () => {
  it("renders", async () => renders("calcite-filter"));

  it("honors hidden attribute", async () => hidden("calcite-filter"));
  it("is accessible", async () => accessible(`<calcite-filter></calcite-filter>`));

  describe("filter behavior", () => {
    let page: E2EPage;
    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent("<calcite-filter></calcite-filter>");
      await page.evaluate(() => {
        const filter = document.querySelector("calcite-filter");
        filter.data = [
          {
            name: "Harry",
            description: "developer",
            value: "harry",
            metadata: { haircolor: "red", favoriteBand: "MetallicA" }
          },
          {
            name: "Matt",
            description: "developer",
            value: "matt",
            metadata: { haircolor: "black", favoriteBand: "unknown" }
          },
          {
            name: "Franco",
            description: "developer",
            value: "franco",
            metadata: { haircolor: "black", favoriteBand: "The Mars Volta" }
          },
          {
            name: "Katy",
            description: "engineer",
            value: "katy",
            metadata: { haircolor: "red", favoriteBand: "unknown" }
          },
          {
            name: "Jon",
            description: "developer",
            value: "jon",
            metadata: { haircolor: "brown", favoriteBand: "Hippity Hops" }
          }
        ];
      });
    });
    it("emits an event with filtered data after a search query is typed into the input", async () => {
      await page.evaluate(() => {
        const filter = document.querySelector("calcite-filter");
        const filterInput = filter.shadowRoot.querySelector("input");
        filterInput.value = "developer";
        filterInput.dispatchEvent(new Event("input"));
      });
      const event = await page.waitForEvent("calciteFilterChange");
      expect(event.detail).toBeDefined();
      expect(event.detail.find((element) => element.value === "harry")).toBeDefined();
      expect(event.detail.find((element) => element.value === "matt")).toBeDefined();
      expect(event.detail.find((element) => element.value === "franco")).toBeDefined();
      expect(event.detail.find((element) => element.value === "jon")).toBeDefined();
      expect(event.detail.find((element) => element.value === "katy")).toBeUndefined();
    });
    it("searches recursively in data and works and matches on a partial string ignoring case", async () => {
      await page.evaluate(() => {
        const filter = document.querySelector("calcite-filter");
        const filterInput = filter.shadowRoot.querySelector("input");
        filterInput.value = "volt";
        filterInput.dispatchEvent(new Event("input"));
      });
      const event = await page.waitForEvent("calciteFilterChange");
      expect(event.detail).toBeDefined();
      expect(event.detail.length).toBe(1);
      expect(event.detail.find((element) => element.value === "franco")).toBeDefined();
    });
  });
});
