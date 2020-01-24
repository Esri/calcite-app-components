import { Component, Element, Host, Prop, h } from "@stencil/core";
import { CSS, SLOTS } from "./resources";
import classnames from "classnames";
import { CSS_UTILITY } from "../utils/resources";
import { getElementDir } from "../utils/dom";

/**
 * @slot - A slot for adding `calcite-pick-list-item` elements.
 */
@Component({
  tag: "calcite-pick-list-group",
  styleUrl: "./calcite-pick-list-group.scss",
  shadow: true
})
export class CalcitePickListGroup {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The title used for all nested `calcite-pick-list` rows
   */
  @Prop({ reflect: true }) textGroupTitle: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { el, textGroupTitle } = this;
    const rtl = getElementDir(el) === "rtl";
    const hasParentItem = el.querySelector(`[slot=${SLOTS.parentItem}]`);
    const sectionClasses = {
      [CSS.indented]: hasParentItem,
      [CSS_UTILITY.rtl]: rtl
    };

    return (
      <Host>
        {textGroupTitle ? <h3 class={CSS.heading}>{textGroupTitle}</h3> : null}
        <slot name={SLOTS.parentItem} />
        <section class={classnames(sectionClasses)}>
          <slot />
        </section>
      </Host>
    );
  }
}
