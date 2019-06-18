import { Component, Element, Host, h } from "@stencil/core";

const CSS = {
  header: "header",
  main: "main",
  content: "content",
  footer: "footer"
};

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
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  renderHeader() {
    const hasHeader = !!this.el.querySelector("[slot=header]");

    return hasHeader ? (
      <header class={CSS.header}>
        <slot name="header" />
      </header>
    ) : null;
  }

  renderFooter() {
    const hasFooter = !!this.el.querySelector("[slot=footer]");

    return hasFooter ? (
      <footer class={CSS.footer}>
        <slot name="footer" />
      </footer>
    ) : null;
  }

  renderContent() {
    return (
      <div class={CSS.content}>
        <slot />
        <slot name="tip-manager" />
      </div>
    );
  }

  renderMain() {
    return (
      <main class={CSS.main}>
        <slot name="primary-panel" />
        {this.renderContent()}
        <slot name="contextual-panel" />
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
