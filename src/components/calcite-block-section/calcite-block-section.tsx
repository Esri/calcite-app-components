import { Component, Element, Event, EventEmitter, Prop, h } from "@stencil/core";

import { caretDown16, caretLeft16, caretRight16 } from "@esri/calcite-ui-icons";
import { getElementDir } from "../utils/dom";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";
import { guid } from "../utils/guid";
import classnames from "classnames";
import { CalciteBlockSectionToggleDisplay } from "../interfaces";

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
   * If the value is "switch", a toggle-switch will be displayed.
   * If the value is "button", a clickable header is displayed.
   *
   * @todo revisit doc
   */
  @Prop({
    reflect: true
  })
  toggleDisplay: CalciteBlockSectionToggleDisplay = "button";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element()
  el: HTMLCalciteBlockSectionElement;

  guid = `calcite-block-section-${guid()}`;

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

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, guid: id, open, text, textCollapse, textExpand, toggleDisplay } = this;
    const dir = getElementDir(el);
    const arrowIcon = open ? caretDown16 : dir === "rtl" ? caretLeft16 : caretRight16;
    const toggleLabel = open ? textCollapse : textExpand;
    const labelId = `${id}__label`;

    const headerNode =
      toggleDisplay === "switch" ? (
        <label
          aria-label={toggleLabel}
          class={classnames(CSS.toggle, CSS.toggleSwitch)}
          id={labelId}
        >
          {text}
          <calcite-switch
            aria-labelledby={labelId}
            switched={open}
            onChange={this.toggleSection}
            scale="s"
          />
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
      <section aria-expanded={open ? "true" : "false"}>
        {headerNode}
        <div class={CSS.content} hidden={!open}>
          <slot />
        </div>
      </section>
    );
  }
}
