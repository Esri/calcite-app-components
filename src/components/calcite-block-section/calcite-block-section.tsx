import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { caretDown16F, caretLeft16F, caretRight16F } from "@esri/calcite-ui-icons";
import { getElementDir } from "../utils/dom";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";

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
  el: HTMLCalciteBlockSectionElement;

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
        textMode="show"
        compact
      >
        <CalciteIcon size="16" path={arrowIcon} />
      </calcite-action>
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
