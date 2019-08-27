import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { debounce, forIn } from "lodash-es";

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

  @Prop() textLabel: string;

  @Prop() textPlaceholder: string;

  @Prop() data: object[];

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

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

  filter = debounce((value: string) => {
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
  }, 250);

  inputHandler(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.filter(target.value);
  }

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
          <input
            type="text"
            placeholder={this.textPlaceholder}
            onInput={this.inputHandler.bind(this)}
          />
        </label>
      </Host>
    );
  }
}
