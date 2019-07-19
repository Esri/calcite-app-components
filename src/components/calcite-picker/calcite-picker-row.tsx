import { Component, Element, Host, Prop, h } from "@stencil/core";
import { CSS } from "./resources";

@Component({
  tag: "calcite-picker-row",
  styleUrl: "./calcite-picker.scss",
  shadow: true
})
export class CalcitePickerRow {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) heading: string;

  @Prop({ reflect: true }) description: string;

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

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    console.log(this.el.closest("calcite-picker").hasAttribute("multiple"));
    return <Host />;
  }
}
