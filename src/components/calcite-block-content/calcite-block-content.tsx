import { Component, Element, Prop, h } from "@stencil/core";
import { CalciteTheme, getTheme } from "../../utils/dom";

@Component({
  tag: "calcite-block-content",
  styleUrl: "calcite-block-content.scss",
  shadow: true
})
export class CalciteBlockContent {
  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element()
  el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Element styling
   */
  @Prop({ reflect: true }) theme: CalciteTheme = getTheme(this.el);

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return <slot />;
  }
}
