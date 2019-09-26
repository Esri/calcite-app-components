import { Component, Host, Prop, State, h } from "@stencil/core";
import CalciteIcon from "../utils/CalciteIcon";
import { home16 } from "@esri/calcite-ui-icons";

interface NavItem {
  id: string;
  path: string;
  content: any;
}

const CSS = {
  isActive: "is-active",
  link: "link",
  open: "open",
  close: "close"
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
    id: "calcite-pick-list",
    path: "demos/calcite-pick-list.html",
    content: "Pick List"
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
  },
  {
    id: "calcite-value-list",
    path: "demos/calcite-value-list.html",
    content: "Value List"
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

  @State() open = false;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  hamburgerClickHandler(e) {
    e.preventDefault();
    this.open = !this.open;
  }

  blurHandler() {
    this.open = false;
  }

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
        <a class={id === pageId ? `${CSS.isActive} ${CSS.link}` : CSS.link} href={`${root}${path}`}>
          {content}
        </a>
      </li>
    );
  }

  render() {
    return (
      <Host onBlur={this.blurHandler.bind(this)}>
        <button class="hamburger" onClick={this.hamburgerClickHandler.bind(this)}></button>
        <ul class={this.open ? CSS.open : CSS.close}>
          {NAV_ITEMS.map((item) => this.renderNavItem(item))}
        </ul>
      </Host>
    );
  }
}
