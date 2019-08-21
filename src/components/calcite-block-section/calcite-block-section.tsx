import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { caretDown16F, caretLeft16F, caretRight16F } from "@esri/calcite-ui-icons";
import { getElementDir } from "../utils/dom";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";

const CONTROL_SLOT_NAME = "control";

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

  /**
   * Text displayed in the button.
   */
  @Prop() text: string;

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

  onHeaderClick = (event: MouseEvent) => {
    const controlSlot = this.el.shadowRoot.querySelector<HTMLSlotElement>(
      `slot[name=${CONTROL_SLOT_NAME}]`
    );
    const control = controlSlot && controlSlot.assignedNodes()[0];

    if (control && control.contains(event.target as Node)) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    this.open = !this.open;
    this.calciteBlockSectionToggle.emit();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, open, text, textCollapse, textExpand } = this;
    const dir = getElementDir(el);
    const arrowIcon = open ? caretDown16F : dir === "rtl" ? caretLeft16F : caretRight16F;
    const toggleLabel = open ? textCollapse : textExpand;

    const headerContent = (
      <header class={CSS.header}>
        <h4 class={CSS.heading}>{text}</h4>
        <slot name={CONTROL_SLOT_NAME} />
      </header>
    );

    const headerNode = (
      <div class={CSS.headerContainer}>
        <button
          aria-label={toggleLabel}
          class={CSS.toggle}
          onClick={this.onHeaderClick}
          title={toggleLabel}
        >
          <CalciteIcon size="16" path={arrowIcon} svgAttributes={{ class: CSS.toggleIcon }} />
          {headerContent}
        </button>
      </div>
    );

    return (
      <Host aria-expanded={open ? "true" : "false"}>
        {headerNode}
        <div class={CSS.content} hidden={!open}>
          <slot />
        </div>
      </Host>
    );
  }
}
