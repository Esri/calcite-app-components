import { Component, Element, Host, Prop, h } from "@stencil/core";
import { CSS } from "./resources";
import { getElementDir } from "../utils/dom";
import classnames from "classnames";
import { CSS_UTILITY } from "../utils/resources";
import { VNode } from "@stencil/core/dist/declarations";
import { CalciteTheme } from "../interfaces";

const SLOTS = {
  headerContent: "header-content",
  headerLeadingContent: "header-leading-content",
  headerTrailingContent: "header-trailing-content",
  footer: "footer"
};

@Component({
  tag: "calcite-panel",
  styleUrl: "calcite-panel.scss",
  shadow: true
})
export class CalcitePanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePanelElement;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHeaderLeadingContent(): VNode {
    return (
      <div class={CSS.headerLeadingContent}>
        <slot name={SLOTS.headerLeadingContent} />
      </div>
    );
  }

  renderHeaderContent(): VNode {
    return (
      <div class={CSS.headerContent}>
        <slot name={SLOTS.headerContent} />
      </div>
    );
  }

  renderHeaderTrailingContent(): VNode {
    return (
      <div class={CSS.headerTrailingContent}>
        <slot name={SLOTS.headerTrailingContent} />
      </div>
    );
  }

  renderHeader(): VNode {
    const { el } = this;

    const hasHeaderContent = el.querySelector(`[slot=${SLOTS.headerContent}]`);
    const hasHeaderLeadingContent = el.querySelector(`[slot=${SLOTS.headerLeadingContent}]`);
    const hasHeaderTrailingContent = el.querySelector(`[slot=${SLOTS.headerTrailingContent}]`);

    const headerLeadingContentNode = hasHeaderLeadingContent
      ? this.renderHeaderLeadingContent()
      : null;
    const headerContentNode = hasHeaderContent ? this.renderHeaderContent() : null;
    const headerTrailingContentNode = hasHeaderTrailingContent
      ? this.renderHeaderTrailingContent()
      : null;

    const canDisplayHeader =
      hasHeaderContent || hasHeaderLeadingContent || hasHeaderTrailingContent;

    return canDisplayHeader ? (
      <header
        class={classnames(CSS.header, {
          [CSS.headerHasLeadingContent]: hasHeaderLeadingContent,
          [CSS.headerHasTrailingContent]: hasHeaderTrailingContent
        })}
      >
        {headerLeadingContentNode}
        {headerContentNode}
        {headerTrailingContentNode}
      </header>
    ) : null;
  }

  renderFooter(): VNode {
    const { el } = this;

    const hasFooter = el.querySelector(`[slot=${SLOTS.footer}]`);

    return hasFooter ? (
      <footer class={CSS.footer}>
        <slot name={SLOTS.footer} />
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
