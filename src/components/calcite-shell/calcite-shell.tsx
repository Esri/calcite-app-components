import { Component, Host, h } from "@stencil/core";

const CSS = {
  headerContainer: "header-container",
  primaryPanel: "primary-panel",
  contentContainer: "content-container",
  contextualPanel: "contextual-panel",
  tipManagerContainer: "tip-mananger-container"
};

@Component({
  tag: "calcite-shell",
  styleUrl: "calcite-shell.scss",
  shadow: true
})
export class CalciteShell {
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div class={CSS.headerContainer}>
          <slot name="header" />
        </div>

        <div class={CSS.primaryPanel}>
          <slot name="primary-panel" />
        </div>

        <div class={CSS.contentContainer}>
          <slot />
        </div>

        <div class={CSS.contextualPanel}>
          <slot name="contextual-panel" />
        </div>

        <div class={CSS.tipManagerContainer}>
          <slot name="tip-manager" />
        </div>

        <slot name="floating-panel" />

        <slot name="action-pad" />
      </Host>
    );
  }
}
