import { Component, Element, Listen, Prop, h } from "@stencil/core";
import { CSS } from "./resources";

@Component({
  tag: "calcite-block-header",
  styleUrl: "calcite-block-header.scss",
  shadow: true
})
export class CalciteBlockHeader {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The text for the block header heading.
   */
  @Prop() heading: string;

  /**
   * The text for describe the block header.
   */
  @Prop() summary: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element()
  el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  @Listen("click")
  clickHandler(event: MouseEvent) {
    const [control] = this.el.shadowRoot.querySelector("slot").assignedElements();

    if (control && control.contains(event.target as Node)) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { heading, summary } = this;

    return (
      <header class={CSS.header}>
        <div class={CSS.title}>
          <h3 class={CSS.heading}>{heading}</h3>
          {summary ? <div class={CSS.summary}>{summary}</div> : null}
        </div>
        <slot />
      </header>
    );
  }
}
