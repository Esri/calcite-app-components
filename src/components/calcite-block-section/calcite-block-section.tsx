import { Component, Element, Event, EventEmitter, Prop, h, VNode } from "@stencil/core";

import { getElementDir } from "../utils/dom";
import { CSS, ICONS, TEXT } from "./resources";
import { guid } from "../utils/guid";
import { CalciteBlockSectionToggleDisplay } from "../interfaces";

/**
 * @slot - A slot for adding content to the block section.
 */
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
   * Tooltip used for the toggle when expanded.
   */
  @Prop() intlCollapse?: string;

  /**
   * Tooltip used for the toggle when collapsed.
   */
  @Prop() intlExpand?: string;

  /**
   * When true, the block's section content will be displayed.
   */
  @Prop({ reflect: true }) open = false;

  /**
   * Text displayed in the button.
   */
  @Prop() text: string;

  /**
   * Tooltip used for the toggle when expanded.
   *
   * @deprecated use "intlCollapse" instead.
   */
  @Prop() textCollapse?: string;

  /**
   * Tooltip used for the toggle when collapsed.
   *
   * @deprecated use "intlExpand" instead.
   */
  @Prop() textExpand?: string;

  /**
   * This property determines the look of the section toggle.
   * If the value is "switch", a toggle-switch will be displayed.
   * If the value is "button", a clickable header is displayed.
   *
   * @todo revisit doc
   */
  @Prop({ reflect: true }) toggleDisplay: CalciteBlockSectionToggleDisplay = "button";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteBlockSectionElement;

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

  handleHeaderLabelKeyDown(this: HTMLLabelElement, event: KeyboardEvent): void {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.click();
    }
  }

  toggleSection = (): void => {
    this.open = !this.open;
    this.calciteBlockSectionToggle.emit();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
    const {
      el,
      guid: id,
      intlCollapse,
      intlExpand,
      open,
      text,
      textCollapse,
      textExpand,
      toggleDisplay
    } = this;
    const dir = getElementDir(el);
    const arrowIcon = open
      ? ICONS.menuOpen
      : dir === "rtl"
      ? ICONS.menuClosedLeft
      : ICONS.menuClosedRight;

    const toggleLabel = open
      ? intlCollapse || textCollapse || TEXT.collapse
      : intlExpand || textExpand || TEXT.expand;
    const labelId = `${id}__label`;

    const headerNode =
      toggleDisplay === "switch" ? (
        <label
          aria-label={toggleLabel}
          class={{
            [CSS.toggle]: true,
            [CSS.toggleSwitch]: true
          }}
          id={labelId}
          onKeyDown={this.handleHeaderLabelKeyDown}
          tabIndex={0}
        >
          {text}
          <calcite-switch
            aria-labelledby={labelId}
            switched={open}
            onChange={this.toggleSection}
            scale="s"
            tabIndex={-1}
          />
        </label>
      ) : (
        <calcite-action
          aria-label={toggleLabel}
          class={CSS.toggle}
          onClick={this.toggleSection}
          text={text}
          textEnabled={true}
          compact
          icon={arrowIcon}
        />
      );

    return (
      <section aria-expanded={open.toString()}>
        {headerNode}
        <div class={CSS.content} hidden={!open}>
          <slot />
        </div>
      </section>
    );
  }
}
