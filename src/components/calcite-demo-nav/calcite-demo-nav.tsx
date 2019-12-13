import { Component, Host, Prop, State, h } from "@stencil/core";
import CalciteIcon from "../utils/CalciteIcon";
import { chevronDown16, hamburger32, home16 } from "@esri/calcite-ui-icons";

interface NavItem {
  id: string;
  path: string;
  content: any;
  children?: NavItem[];
  target?: string;
}

const CSS = {
  mainHeading: "main-heading",
  isActive: "is-active",
  link: "link",
  open: "open",
  close: "close",
  hamburger: "hamburger",
  menu: "menu",
  childMenu: "child-menu"
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
    id: "calcite-panel",
    path: "demos/calcite-panel.html",
    content: "Panel"
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
  },
  {
    id: "advanced",
    path: null,
    content: ["Advanced ", <CalciteIcon size="16" path={chevronDown16} title="Home" />],
    children: [
      {
        id: "block-value-list",
        path: "demos/advanced/block-with-value-list.html",
        content: "Block with Nested ValueList"
      },
      {
        id: "flow-adding-items",
        path: "demos/advanced/flow-adding-items.html",
        content: "Flow add flow-items dynamically"
      },
      {
        id: "shell-panel-action-bar",
        path: "demos/advanced/shell-panel-with-action-bar.html",
        content: "Shell Panel with Action Bar"
      },
      {
        id: "shell-demo-app",
        path: "demos/advanced/shell-demo-app.html",
        content: "Shell Demo App"
      },
      {
        id: "shell-demo-app-rtl",
        path: "demos/advanced/shell-demo-app-rtl.html",
        content: "Shell Demo App RTL"
      },
      {
        id: "shell-full-window",
        path: "demos/advanced/shell-demo-app-full-window.html",
        content: "Shell Full Window App",
        target: "_blank"
      }
    ]
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

  hamburgerClickHandler = (e) => {
    e.preventDefault();
    this.open = !this.open;
  };

  blurHandler = () => {
    this.open = false;
  };

  subMenuClickHandler = (e) => {
    e.preventDefault();
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderNavItem(item: NavItem) {
    const { pageId, root } = this;
    const { content, id, path, target } = item;
    const clickHandler = item.children ? this.subMenuClickHandler : null;
    return (
      <li>
        <a
          class={id === pageId ? `${CSS.isActive} ${CSS.link}` : CSS.link}
          href={`${root}${path}`}
          onClick={clickHandler}
          target={target}
        >
          {content}
        </a>
        {this.renderChildren(item.children)}
      </li>
    );
  }

  renderChildren(items: NavItem[]) {
    if (!items) {
      return;
    }
    return (
      <ul class={CSS.childMenu} hidden>
        {items.map((item) => this.renderNavItem(item))}
      </ul>
    );
  }

  render() {
    return (
      <Host onBlur={this.blurHandler}>
        <button class={CSS.hamburger} onClick={this.hamburgerClickHandler}>
          <CalciteIcon size="32" path={hamburger32} title="Home" />
        </button>
        <h1 class={CSS.mainHeading}>Calcite App Components</h1>
        <ul class={{ [CSS.menu]: true, [CSS.open]: this.open }}>
          {NAV_ITEMS.map((item) => this.renderNavItem(item))}
        </ul>
      </Host>
    );
  }
}
