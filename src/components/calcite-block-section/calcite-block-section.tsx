import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { caretDown16, caretLeft16, caretRight16 } from "@esri/calcite-ui-icons";
import { getElementDir } from "calcite-components/dist/collection/utils/dom";
import { CSS } from "./resources";

@Component({
  tag: "calcite-block-section",
  styleUrl: "calcite-block-section.scss",
  shadow: true
})
export class CalciteBlockSection {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, the block's section content will be displayed.
   */
  @Prop({
    reflect: true
  })
  open = false;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element()
  el: HTMLElement;

  mutationObserver = new MutationObserver(() => this.placeHeader());

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.mutationObserver.observe(this.el, { childList: true });
  }

  componentWillLoad(): void {
    this.placeHeader();
  }

  disconnectedCallback(): void {
    this.mutationObserver.disconnect();
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------
  /**
   * Toggles the section open or closed when the header is clicked.
   */
  @Event() calciteBlockSectionToggle: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  onHeaderClick = () => {
    this.open = !this.open;
    this.calciteBlockSectionToggle.emit();
  };

  placeHeader() {
    const header = this.el.querySelector("calcite-block-header");

    if (header && !header.slot) {
      header.slot = "header";
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, open } = this;
    const dir = getElementDir(el);
    const arrowIcon = open ? caretDown16 : dir === "rtl" ? caretLeft16 : caretRight16;
    const hasHeader = !!this.el.querySelector<HTMLCalciteBlockHeaderElement>(
      "calcite-block-header"
    );

    const headerNode = hasHeader ? (
      <button class={CSS.toggle} onClick={this.onHeaderClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
          <path d={arrowIcon} />
        </svg>
        <slot name="header" />
      </button>
    ) : null;

    return (
      <Host aria-expanded={open ? "true" : "false"}>
        <section>
          {headerNode}
          {open ? <slot /> : null}
        </section>
      </Host>
    );
  }
}
