import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { caretDown16F, caretLeft16F, caretRight16F } from "@esri/calcite-ui-icons";
import { getElementDir } from "calcite-components/dist/collection/utils/dom";
import { TEXT } from "./resources";

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
   * Text displayed in the button.
   */
  @Prop() text: string;

  /**
   * When true, the block's section content will be displayed.
   */
  @Prop({
    reflect: true
  })
  open = false;

  /**
   * Tooltip used for the toggle when collapsed.
   */
  @Prop()
  textExpand = TEXT.expand;

  /**
   * Tooltip used for the toggle when expanded.
   */
  @Prop()
  textCollapse = TEXT.collapse;

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
   * Emitted when the header has been clicked.
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
    const { el, open, textCollapse, textExpand } = this;
    const dir = getElementDir(el);
    const arrowIcon = open ? caretDown16F : dir === "rtl" ? caretLeft16F : caretRight16F;
    const toggleLabel = open ? textCollapse : textExpand;

    const headerNode = (
      <calcite-action
        aria-label={toggleLabel}
        onClick={this.onHeaderClick}
        text={this.text}
        text-enabled
        compact
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 16 16">
          <path d={arrowIcon} />
        </svg>
      </calcite-action>
    );

    return (
      <Host aria-expanded={open ? "true" : "false"}>
        {headerNode}
        {open ? <slot /> : null}
      </Host>
    );
  }
}
