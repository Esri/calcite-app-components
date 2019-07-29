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

  renderContent() {
    return (
      <div class={CSS.content}>
        <slot />
      </div>
    );
  }

  renderFooter() {
    const hasFooter = !!this.el.querySelector("[slot=app-footer]");

    return hasFooter ? (
      <div class={CSS.footer}>
        <slot name="app-footer" />
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
