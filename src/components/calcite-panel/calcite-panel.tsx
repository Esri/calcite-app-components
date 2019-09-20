import { Component, Element, Host, h } from "@stencil/core";

import { CSS } from "./resources";

import { getElementDir } from "../utils/dom";

import classnames from "classnames";

import { CSS_UTILITY } from "../utils/resources";
import { VNode } from "@stencil/core/dist/declarations";

@Component({
  tag: "calcite-panel",
  styleUrl: "calcite-panel.scss",
  shadow: true
})
export class CalcitePanel {
  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePanelElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHeaderLeadingContent(): VNode {
    return (
      <div class={CSS.headerLeading}>
        <slot name="header-leading" />
      </div>
    );
  }

  renderHeaderCenterContent(): VNode {
    return (
      <div class={CSS.headerCenter}>
        <slot name="header" />
      </div>
    );
  }

  renderHeaderTrailingContent(): VNode {
    return (
      <div class={CSS.headerTrailing}>
        <slot name="header-leading" />
      </div>
    );
  }

  renderHeader(): VNode {
    const { el } = this;

    const hasHeader = el.querySelector("[slot=header-leading]");
    const hasHeaderLeading = el.querySelector("[slot=header-leading]");
    const hasHeaderTrailing = el.querySelector("[slot=header-trailing]");

    const headerLeadingNode = hasHeaderLeading ? this.renderHeaderLeadingContent() : null;
    const headerCenterNode = hasHeader ? this.renderHeaderCenterContent() : null;
    const headerTrailingNode = hasHeaderTrailing ? this.renderHeaderTrailingContent() : null;

    return hasHeader ? (
      <header
        class={classnames(CSS.header, {
          [CSS.headerHasLeading]: hasHeaderLeading,
          [CSS.headerHasTrailing]: hasHeaderTrailing
        })}
      >
        {headerLeadingNode}
        {headerCenterNode}
        {headerTrailingNode}
      </header>
    ) : null;
  }

  renderFooter(): VNode {
    const { el } = this;

    const hasFooter = el.querySelector("[slot=footer]");

    return hasFooter ? (
      <footer class={CSS.footer}>
        <slot name="footer-actions" />
      </footer>
    ) : null;
  }

  renderContent(): VNode {
    return (
      <section class={CSS.contentContainer}>
        <slot />
      </section>
    );
  }

  render() {
    const { el } = this;

    const rtl = getElementDir(el) === "rtl";

    return (
      <Host>
        <article
          class={classnames(CSS.container, {
            [CSS_UTILITY.rtl]: rtl
          })}
        >
          {this.renderHeader()}
          {this.renderContent()}
          {this.renderFooter()}
        </article>
      </Host>
    );
  }
}
