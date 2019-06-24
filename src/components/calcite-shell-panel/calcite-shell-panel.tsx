import { Component, Host, Prop, h } from "@stencil/core";

const CSS = {
  actionBar: "action-bar",
  content: "content"
};

@Component({
  tag: "calcite-shell-panel",
  styleUrl: "calcite-shell-panel.scss",
  shadow: true
})
export class CalciteShellPanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) primary = false;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const contentNode = (
      <div class={CSS.content}>
        <slot />
      </div>
    );

    const actionBarNode = <slot name="action-bar" />;

    const mainNodes = [contentNode, actionBarNode];

    if (this.primary) {
      mainNodes.reverse();
    }

    const floatingNodes = [
      <slot name="floating-panel" />,
      <slot name="action-pad" />
    ];

    return (
      <Host>
        {mainNodes}
        {floatingNodes}
      </Host>
    );
  }
}
