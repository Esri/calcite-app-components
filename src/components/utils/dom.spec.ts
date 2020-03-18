import { getSlotted } from "./dom";

describe("dom", () => {
  describe("getSlotted()", () => {
    const testSlotName = "test";

    beforeAll(() => {
      class SlotTest extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }

        connectedCallback(): void {
          this.shadowRoot.innerHTML = `<slot name="${testSlotName}"></slot>`;
        }
      }

      customElements.define("slot-test", SlotTest);
    });

    beforeEach(() => {
      document.body.innerHTML = `
      <slot-test>
        <h2 slot=${testSlotName}><span>😃</span></h2>
        <h2 slot=${testSlotName}><span>😂</span></h2>
      </slot-test>
    `;
    });

    afterEach(() => {
      while (document.body.firstChild) {
        document.body.firstChild.remove();
      }
    });

    describe("single slotted", () => {
      it("returns elements with matching slot name", () =>
        expect(getSlotted(document.body, testSlotName)).toBeTruthy());

      it("returns null when no results", () => expect(getSlotted(document.body, "non-existent-slot")).toBeNull());

      describe("scoped selector", () => {
        it("returns element with matching nested selector", () =>
          expect(getSlotted(document.body, testSlotName, { selector: "span" })).toBeTruthy());

        it("returns nothing with non-matching child selector", () =>
          expect(getSlotted(document.body, testSlotName, { selector: "non-existent-slot" })).toBeNull());
      });
    });

    describe("multiple slotted", () => {
      it("returns elements with matching slot name", () =>
        expect(getSlotted(document.body, testSlotName, { all: true })).toHaveLength(2));

      it("returns empty list when no results", () =>
        expect(getSlotted(document.body, "non-existent-slot", { all: true })).toHaveLength(0));

      describe("scoped selector", () => {
        it("returns child elements matching selector", () =>
          expect(
            getSlotted(document.body, testSlotName, {
              all: true,
              selector: "span"
            })
          ).toHaveLength(2));

        it("returns empty list with non-matching child selector", () =>
          expect(
            getSlotted(document.body, testSlotName, {
              all: true,
              selector: "non-existent"
            })
          ).toHaveLength(0));
      });
    });
  });
});
