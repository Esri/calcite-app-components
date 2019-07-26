import { Component, Element, Host, h } from "@stencil/core";

import { CSS } from "./resources";

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
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHeader() {
    const hasHeader = !!this.el.querySelector("[slot=app-header]");

    return hasHeader ? <slot name="app-header" /> : null;
  }

  renderFooter() {
    const hasFooter = !!this.el.querySelector("[slot=app-footer]");

    return hasFooter ? <slot name="app-footer" /> : null;
  }

  renderMain() {
    return (
      <main class={CSS.main}>
        <slot name="primary-panel" />
        <slot name="content" />
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
