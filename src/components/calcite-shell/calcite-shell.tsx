import { Component, Element, Host, Prop, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalciteTheme } from "../interfaces";

/**
 * @slot shell-header - A slot for adding header content. This content will be positioned at the top of the shell.
 * @slot shell-footer - A slot for adding footer content. This content will be positioned at the bottom of the shell.
 * @slot primary-panel - A slot for adding the leading `calcite-shell-panel`.
 * @slot contextual-panel - A slot for adding the trailing `calcite-shell-panel`.
 * @slot tip-manager - A slot for adding a `calcite-tip-manager`. This component will be absolutely positioned.
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

  renderHeader() {
    const hasHeader = !!this.el.querySelector("[slot=shell-header]");

    return hasHeader ? <slot name="shell-header" /> : null;
  }

  renderContent() {
    return (
      <div class={CSS.content}>
        <slot />
      </div>
    );
  }

  renderFooter() {
    const hasFooter = !!this.el.querySelector("[slot=shell-footer]");

    return hasFooter ? (
      <div class={CSS.footer}>
        <slot name="shell-footer" />
      </div>
    ) : null;
  }

  renderMain() {
    return (
      <div class={CSS.main}>
        <slot name="primary-panel" />
        {this.renderContent()}
        <slot name="contextual-panel" />
        <slot name="tip-manager" />
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.renderHeader()}
        {this.renderMain()}
        {this.renderFooter()}
      </Host>
    );
  }
}
