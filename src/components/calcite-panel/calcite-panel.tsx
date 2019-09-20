import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { x16 } from "@esri/calcite-ui-icons";

import CalciteIcon from "../utils/CalciteIcon";

import { CSS, TEXT } from "./resources";

@Component({
  tag: "calcite-panel",
  styleUrl: "calcite-panel.scss",
  shadow: true
})
export class CalcitePanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Panel heading
   */
  @Prop({ reflect: true }) heading: string;

  /**
   * Alternate text for closing the panel.
   */
  @Prop() textClose = TEXT.close;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePanelElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the component has been closed.
   */
  @Event() calcitePanelClose: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  close = () => {
    this.calcitePanelClose.emit();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div class={CSS.container}>
          <header class={CSS.header}>
            <h3 class={CSS.heading}>{this.heading}</h3>
            <calcite-action onClick={this.close} text={this.textClose}>
              <CalciteIcon size="16" path={x16} />
            </calcite-action>
          </header>
          <div class={CSS.content}>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
