import { Component, Element, Host, Method, State, h } from "@stencil/core";

@Component({
  tag: "calcite-test",
  shadow: true
})
export class CalciteTest {

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  @State() items: string[] = ["one", "two", "three"];

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  sortHandler = (event: CustomEvent) => {
    console.log(event.detail);
    this.items = ["two", "one", "three"];
  }

  @Method() async foo() {
    this.items = ["two", "one", "three"];
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <calcite-sortable-list drag-enabled onCalciteListOrderChange={this.sortHandler}>
          {console.log(this.items)}
          {this.items.map( item => {
            return (
              <div>
                <calcite-handle></calcite-handle> {item}
              </div>
            );
          })}
        </calcite-sortable-list>
        {
          this.items.map( (item, key) => {
            return <p key={key}>{item}</p>
          })
        }
      </Host>
    );
  }
}
