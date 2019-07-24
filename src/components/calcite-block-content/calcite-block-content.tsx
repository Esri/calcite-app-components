import { Component, h } from "@stencil/core";

@Component({
  tag: "calcite-block-content",
  styleUrl: "calcite-block-content.scss",
  shadow: true
})
export class CalciteBlockContent {
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return <slot />;
  }
}
