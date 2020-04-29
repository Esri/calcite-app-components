import { Component, Element, Host, Prop, h, VNode } from "@stencil/core";
import { CSS, SLOTS } from "./resources";
import { CalciteTheme } from "../interfaces";
import { getCalcitePosition, getSlotted } from "../utils/dom";

/**
 * @slot shell-header - A slot for adding header content. This content will be positioned at the top of the shell.
 * @slot shell-footer - A slot for adding footer content. This content will be positioned at the bottom of the shell.
 * @slot primary-panel - A slot for adding the leading `calcite-shell-panel`.
 * @slot contextual-panel - A slot for adding the trailing `calcite-shell-panel`.
 * @slot tip-manager - **[DEPRECATED]** use "bottom-panel" instead.
 * @slot bottom-panel - A slot for adding a bottom floating panel such as a chart or `calcite-tip-manager`.
 * @slot - A slot for adding content to the shell. This content will appear between any leading and trailing panels added to the shell. (eg. a map)
 */
@Component({
  tag: "calcite-shell",
  styleUrl: "calcite-shell.scss",
  shadow: true
})
export class CalciteShell {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellElement;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHeader(): VNode {
    const hasHeader = !!getSlotted(this.el, SLOTS.header);

    return hasHeader ? <slot name={SLOTS.header} /> : null;
  }

  renderContent(): VNode {
    return (
      <div class={CSS.content}>
        <slot />
      </div>
    );
  }

  renderFooter(): VNode {
    const hasFooter = !!getSlotted(this.el, SLOTS.footer);

    return hasFooter ? (
      <div class={CSS.footer}>
        <slot name={SLOTS.footer} />
      </div>
    ) : null;
  }

  renderMain(): VNode {
    const primaryPanel = getSlotted<HTMLCalciteShellPanelElement>(this.el, SLOTS.primaryPanel);

    const mainClasses = {
      [CSS.main]: true,
      [CSS.mainReversed]: getCalcitePosition(primaryPanel?.position, primaryPanel?.layout) === "end"
    };

    return (
      <div class={mainClasses}>
        <slot name={SLOTS.primaryPanel} />
        {this.renderContent()}
        <slot name={SLOTS.bottomPanel} />
        <slot name={SLOTS.contextualPanel} />
        {/* <slot name={SLOTS.tipManager} /> */}
        {/* <div class={CSS.bottomSlotContainer}> */}
        {/* </div> */}
      </div>
    );
  }

  render(): VNode {
    return (
      <Host>
        {this.renderHeader()}
        {this.renderMain()}
        {this.renderFooter()}
      </Host>
    );
  }
}
