import { Component, Host, Prop, h } from "@stencil/core";

import { home16 } from "@esri/calcite-ui-icons";

import CalciteIcon from "../_support/CalciteIcon";

const CSS = {
  isActive: "is-active"
};

@Component({
  tag: "calcite-demo-nav",
  styleUrl: "calcite-demo-nav.scss",
  shadow: true
})
export class CalciteDemoNav {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop()
  page: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  root = window.location.origin + window.location.pathname.split("demos").shift();

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { page, root } = this;

    console.log(root);

    return (
      <Host>
        <ul>
          <li>
            <a class={page === "home" ? CSS.isActive : null} href={root}>
              <CalciteIcon size="16" path={home16} title="Home" />
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-action" ? CSS.isActive : null}
              href={`${root}demos/calcite-action.html`}
            >
              Action
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-action-bar" ? CSS.isActive : null}
              href={`${root}demos/calcite-action-bar.html`}
            >
              Action Bar
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-action-pad" ? CSS.isActive : null}
              href={`${root}demos/calcite-action-pad.html`}
            >
              Action Pad
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-block" ? CSS.isActive : null}
              href={`${root}demos/calcite-block.html`}
            >
              Block
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-flow" ? CSS.isActive : null}
              href={`${root}demos/calcite-flow.html`}
            >
              Flow
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-flow-item" ? CSS.isActive : null}
              href={`${root}demos/calcite-flow-item.html`}
            >
              Flow Item
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-shell" ? CSS.isActive : null}
              href={`${root}demos/calcite-shell.html`}
            >
              Shell
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-shell-panel" ? CSS.isActive : null}
              href={`${root}demos/calcite-shell-panel.html`}
            >
              Shell Panel
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-tip" ? CSS.isActive : null}
              href={`${root}demos/calcite-tip.html`}
            >
              Tip
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-tip-manager" ? CSS.isActive : null}
              href={`${root}demos/calcite-tip-manager.html`}
            >
              Tip Manager
            </a>
          </li>
          <li>
            <a
              class={page === "calcite-typography" ? CSS.isActive : null}
              href={`${root}demos/calcite-typography.html`}
            >
              Typography
            </a>
          </li>
        </ul>
      </Host>
    );
  }
}
