import { Component, Element, Host, Prop, h } from "@stencil/core";

import { CSS } from "./resources";

import { CalciteTheme, getTheme } from "../../utils/dom";

@Component({
  tag: "calcite-shell",
  styleUrl: "calcite-shell.scss",
  shadow: true
})
export class CalciteShell {
  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellElement;

  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Element styling
   */
  @Prop({ reflect: true }) theme: CalciteTheme = getTheme(this.el);

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
      <main class={CSS.main}>
        <slot name="primary-panel" />
        {this.renderContent()}
        <slot name="contextual-panel" />
        <slot name="tip-manager" />
      </main>
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
