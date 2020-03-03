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

        connectedCallback() {
          this.shadowRoot.innerHTML = `<slot name="${testSlotName}"></slot>`;
        }
      }

      customElements.define("slot-test", SlotTest);
    });

    beforeEach(() => {
      document.body.innerHTML = `
      <slot-test>
        <h2 slot=${testSlotName}>😃</h2>
        <h2 slot=${testSlotName}>😂</h2>
      </slot-test>
    `;
    });

    afterEach(() => {
      while (document.body.firstChild) {
        document.body.firstChild.remove();
      }
    });

    describe("single slotted", () => {
      it("returns elements with matching slot name", () => {
        expect(getSlotted(document.body, testSlotName)).toBeTruthy();
      });

      it("returns null when no results", () => {
        expect(getSlotted(document.body, "non-existent-slot")).toBeNull();
      });
    });

    describe("multiple slotted", () => {
      it("returns elements with matching slot name", () => {
        expect(getSlotted(document.body, testSlotName, true)).toHaveLength(2);
      });

      it("returns empty list when no results", () => {
        expect(getSlotted(document.body, "non-existent-slot", true)).toHaveLength(0);
      });
    });
  });
});
