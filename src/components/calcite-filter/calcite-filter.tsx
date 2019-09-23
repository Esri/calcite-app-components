import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { debounce, forIn } from "lodash-es";

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
    const find = (input, regex) => {
      let found = false;
      forIn(input, (value) => {
        if (typeof value === "function") {
          return;
        }
        if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
          if (find(value, regex)) {
            found = true;
          }
        } else if (regex.test(value)) {
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

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <label>
          {this.textLabel}
          <input type="text" placeholder={this.textPlaceholder} onInput={this.inputHandler} />
        </label>
      </Host>
    );
  }
}
