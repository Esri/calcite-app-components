import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { search16, x16 } from "@esri/calcite-ui-icons";
import { debounce, forIn } from "lodash-es";
import CalciteIcon from "../utils/CalciteIcon";
import { CSS, TEXT } from "./resources";

const filterDebounceInMs = 250;

@Component({
  tag: "calcite-filter",
  styleUrl: "calcite-filter.scss",
  shadow: true
})
export class CalciteFilter {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The input data. The filter uses this as the starting point, and returns items
   * that contain the string entered in the input, using a partial match and recursive search.
   */
  @Prop() data: object[];

  /**
   * A text label that will appear next to the input field.
   */
  @Prop() textLabel: string;

  /**
   * Placeholder text for the input element's placeholder attribute
   */
  @Prop() textPlaceholder: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFilterElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calciteFilterChange: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  filter = debounce((value: string): void => {
    const regex = new RegExp(value, "ig");

    if (this.data.length === 0) {
      console.warn(`No data was passed to calcite-filter.
      The data property expects an array of objects`);
      this.calciteFilterChange.emit([]);
      return;
    }

    const find = (input: object, RE: RegExp) => {
      let found = false;
      forIn(input, (val) => {
        if (typeof val === "function") {
          return;
        }
        if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
          if (find(val, RE)) {
            found = true;
          }
        } else if (RE.test(val)) {
          found = true;
        }
      });
      return found;
    };

    const result = this.data.filter((item) => {
      return find(item, regex);
    });

    this.calciteFilterChange.emit(result);
  }, filterDebounceInMs);

  inputHandler = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.filter(target.value);
  };

  clear = (): void => {
    this.el.shadowRoot.querySelector("input").value = "";
    this.calciteFilterChange.emit(this.data);
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <label>
          <input
            type="text"
            value=""
            placeholder={this.textPlaceholder}
            onInput={this.inputHandler}
            aria-label={this.textLabel || TEXT.filterLabel}
          />
          <div class={CSS.searchIcon}>
            <CalciteIcon size="16" path={search16} />
          </div>
        </label>
        <button onClick={this.clear} class={CSS.clearButton} aria-label={TEXT.clear}>
          <CalciteIcon size="16" path={x16} />
        </button>
      </Host>
    );
  }
}
