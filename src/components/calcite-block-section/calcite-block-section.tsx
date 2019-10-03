import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { caretDown16, caretLeft16, caretRight16 } from "@esri/calcite-ui-icons";
import { getElementDir } from "../utils/dom";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";
import classnames from "classnames";

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

  /**
   * This property determines the look of the section toggle.
   * When true, a toggle-switch will be displayed to indicate a capability.
   * Otherwise, a clickable header is displayed.
   *
   * @todo revisit doc
   */
  @Prop({
    reflect: true
  })
  toggle = false;

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

  toggleSection = () => {
    this.open = !this.open;
    this.calciteBlockSectionToggle.emit();
  };

  handleSwitchClick = ({ currentTarget, target }: MouseEvent) => {
    const isDupeClick = target === currentTarget;

    if (isDupeClick) {
      return;
    }

    this.toggleSection();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, open, text, textCollapse, textExpand, toggle } = this;
    const dir = getElementDir(el);
    const arrowIcon = open ? caretDown16 : dir === "rtl" ? caretLeft16 : caretRight16;
    const toggleLabel = open ? textCollapse : textExpand;

    const headerNode = toggle ? (
      <label aria-label={toggleLabel} class={classnames(CSS.toggle, CSS.toggleSwitch)}>
        {text}
        <calcite-switch switched={open} onClick={this.handleSwitchClick} />
      </label>
    ) : (
      <calcite-action
        aria-label={toggleLabel}
        class={CSS.toggle}
        onClick={this.toggleSection}
        text={text}
        textDisplay="visible"
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
