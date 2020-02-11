import { getSlotted } from "./dom";

describe("dom", () => {
  describe("getSlotted()", () => {
    const slotNameMultiple = "multiple";
    const slotNameSingle = "single";

    beforeAll(() => {
      class SlotTest extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }

        connectedCallback() {
          this.shadowRoot.innerHTML = `
            <slot name="${slotNameMultiple}"></slot>
            <slot name="${slotNameSingle}"></slot>
          `;
        }
      }

      customElements.define("slot-test", SlotTest);
    });

    beforeEach(() => {
      document.body.innerHTML = `
      <slot-test>
        <h2 slot=${slotNameMultiple}>😃</h2>
        <h2 slot=${slotNameMultiple}>😄</h2>
        <h2 slot=${slotNameSingle}>😂</h2>
      </slot-test>
    `;
    });

    afterEach(() => {
      while (document.body.firstChild) {
        document.body.firstChild.remove();
      }
    });

    it("returns elements with matching slot name", () => {
      expect(getSlotted(document.body, slotNameMultiple)).toHaveLength(2);
      expect(getSlotted(document.body, slotNameSingle)).toHaveLength(1);
    });

    it("returns null when no results", () => expect(getSlotted(document.body, "non-existent-slot")).toHaveLength(0));
  });
});
