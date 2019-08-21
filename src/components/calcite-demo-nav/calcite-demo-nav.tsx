import { Component, Host, Prop, h } from "@stencil/core";
import CalciteIcon from "../utils/CalciteIcon";
import { home16 } from "@esri/calcite-ui-icons";

interface NavItem {
  id: string;
  path: string;
  content: any;
}

const CSS = {
  isActive: "is-active"
};

const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    path: "",
    content: <CalciteIcon size="16" path={home16} title="Home" />
  },
  {
    id: "calcite-action",
    path: "demos/calcite-action.html",
    content: "Action"
  },
  {
    id: "calcite-action-bar",
    path: "demos/calcite-action-bar.html",
    content: "Action Bar"
  },
  {
    id: "calcite-action-pad",
    path: "demos/calcite-action-pad.html",
    content: "Action Pad"
  },
  {
    id: "calcite-block",
    path: "demos/calcite-block.html",
    content: "Block"
  },
  {
    id: "calcite-flow",
    path: "demos/calcite-flow.html",
    content: "Flow"
  },
  {
    id: "calcite-flow-item",
    path: "demos/calcite-flow-item.html",
    content: "Flow Item"
  },
  {
    id: "calcite-picker",
    path: "demos/calcite-picker.html",
    content: "Picker"
  },
  {
    id: "calcite-shell",
    path: "demos/calcite-shell.html",
    content: "Shell"
  },
  {
    id: "calcite-shell-panel",
    path: "demos/calcite-shell-panel.html",
    content: "Shell Panel"
  },
  {
    id: "calcite-tip",
    path: "demos/calcite-tip.html",
    content: "Tip"
  },
  {
    id: "calcite-tip-manager",
    path: "demos/calcite-tip-manager.html",
    content: "Tip Manager"
  },
  {
    id: "calcite-typography",
    path: "demos/calcite-typography.html",
    content: "Typography"
  }
];

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
  pageId: string;

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

  renderNavItem(item: NavItem) {
    const { pageId, root } = this;
    const { content, id, path } = item;

    return (
      <li>
        <a class={id === pageId ? CSS.isActive : null} href={`${root}${path}`}>
          {content}
        </a>
      </li>
    );
  }

  render() {
    return (
      <Host>
        <ul>{NAV_ITEMS.map((item) => this.renderNavItem(item))}</ul>
      </Host>
    );
  }
}
