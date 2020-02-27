import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from "@stencil/core";
import { debounce, forIn } from "lodash-es";
import { CSS, ICONS, TEXT } from "./resources";

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
   * A text label that will appear on the clear button.
   */
  @Prop() intlClear?: string;

  /**
   * A text label that will appear next to the input field.
   */
  @Prop() intlLabel?: string;

  /**
   * Placeholder text for the input element's placeholder attribute
   */
  @Prop() placeholder?: string;

  /**
   * A text label that will appear next to the input field.
   *
   * @deprecated since 5.4.0 - use "intlLabel" instead.
   */
  @Prop() textLabel?: string;

  /**
   * Placeholder text for the input element's placeholder attribute
   *
   * @deprecated since 5.4.0 - use "placeholder" instead.
   */
  @Prop() textPlaceholder?: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFilterElement;

  @State() empty = true;

  textInput: HTMLInputElement;

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
    this.empty = target.value === "";
    this.filter(target.value);
  };

  clear = (): void => {
    this.textInput.value = "";
    this.empty = true;
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
            aria-label={this.intlLabel || this.textLabel || TEXT.filterLabel}
            ref={(el) => (this.textInput = el as HTMLInputElement)}
          />
          <div class={CSS.searchIcon}>
            <calcite-icon scale="s" icon={ICONS.search} />
          </div>
        </label>
        {!this.empty ? (
          <button
            onClick={this.clear}
            class={CSS.clearButton}
            aria-label={this.intlClear || TEXT.clear}
          >
            <calcite-icon icon={ICONS.close} />
          </button>
        ) : null}
      </Host>
    );
  }
}
