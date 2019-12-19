import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { VNode } from "@stencil/core/dist/declarations";

import { chevronLeft16F, chevronRight16F, ellipsis16 } from "@esri/calcite-ui-icons";

import { getElementDir } from "../utils/dom";

import classnames from "classnames";

import { BLACKLISTED_MENU_ACTIONS_COMPONENTS, CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";

import { CalciteTheme } from "../interfaces";

/**
 * @slot menu-actions - A slot for adding `calcite-actions` to a menu under the `...` in the header. These actions are displayed when the menu is open.
 * @slot footer-actions - A slot for adding `calcite-actions` to the footer.
 * @slot - A slot for adding content to the flow item.
 */
@Component({
  tag: "calcite-flow-item",
  styleUrl: "calcite-flow-item.scss",
  shadow: true
})
export class CalciteFlowItem {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Heading text.
   */
  @Prop() heading: string;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * Opens the action menu.
   */
  @Prop({ reflect: true }) menuOpen = false;

  /**
   * Shows a back button in the header.
   */
  @Prop() showBackButton = false;

  /**
   * Summary text. A description displayed underneath the heading.
   */
  @Prop() summary: string;

  /**
   * 'Back' text string.
   */
  @Prop() textBack = TEXT.back;

  /**
   * 'Close' text string for the menu.
   */
  @Prop() textClose = TEXT.close;

  /**
   * 'Open' text string for the menu.
   */
  @Prop() textOpen = TEXT.open;

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFlowItemElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the back button has been clicked.
   */

  @Event() calciteFlowItemBackClick: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  toggleMenuOpen = (): void => {
    this.menuOpen = !this.menuOpen;
  };

  backButtonClick = (): void => {
    this.calciteFlowItemBackClick.emit();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderBackButton(rtl: boolean): VNode {
    const { showBackButton, textBack, backButtonClick } = this;

    const path = rtl ? chevronRight16F : chevronLeft16F;

    return showBackButton ? (
      <calcite-action
        slot="header-leading-content"
        key="back-button"
        aria-label={textBack}
        text={textBack}
        class={CSS.backButton}
        onClick={backButtonClick}
      >
        <CalciteIcon size="16" path={path} />
      </calcite-action>
    ) : null;
  }

  renderMenuButton(): VNode {
    const { menuOpen, textOpen, textClose } = this;

    const menuLabel = menuOpen ? textClose : textOpen;

    return (
      <calcite-action
        class={CSS.menuButton}
        aria-label={menuLabel}
        text={menuLabel}
        onClick={this.toggleMenuOpen}
      >
        <CalciteIcon size="16" path={ellipsis16} />
      </calcite-action>
    );
  }

  renderMenuActions(): VNode {
    const { menuOpen } = this;

    return (
      <div class={classnames(CSS.menu, { [CSS.menuOpen]: menuOpen })}>
        <slot name="menu-actions" />
      </div>
    );
  }

  renderFooterActions(): VNode {
    const hasFooterActions = !!this.el.querySelector("[slot=footer-actions]");

    return hasFooterActions ? (
      <div slot="footer" class={CSS.footerActions}>
        <slot name="footer-actions" />
      </div>
    ) : null;
  }

  renderSingleActionContainer(): VNode {
    return (
      <div class={CSS.singleActionContainer}>
        <slot name="menu-actions" />
      </div>
    );
  }

  renderMenuActionsContainer(): VNode {
    return (
      <div class={CSS.menuContainer}>
        {this.renderMenuButton()}
        {this.renderMenuActions()}
      </div>
    );
  }

  renderHeaderActions(): VNode {
    const menuActionsNode = this.el.querySelector("[slot=menu-actions]");

    const hasMenuActionsInBlacklisted =
      menuActionsNode && menuActionsNode.closest(BLACKLISTED_MENU_ACTIONS_COMPONENTS.join(","));

    const hasMenuActions = !!menuActionsNode && !hasMenuActionsInBlacklisted;
    const actionCount = hasMenuActions ? menuActionsNode.childElementCount : 0;

    const menuActionsNodes =
      actionCount === 1
        ? this.renderSingleActionContainer()
        : hasMenuActions
        ? this.renderMenuActionsContainer()
        : null;

    return menuActionsNodes ? <div slot="header-trailing-content">{menuActionsNodes}</div> : null;
  }

  renderHeading(): VNode {
    const { heading } = this;

    return heading ? <h3 class={CSS.heading}>{heading}</h3> : null;
  }

  renderSummary(): VNode {
    const { summary } = this;

    return summary ? <span class={CSS.summary}>{summary}</span> : null;
  }

  renderHeader(): VNode {
    const headingNode = this.renderHeading();

    const summaryNode = this.renderSummary();

    return headingNode || summaryNode ? (
      <header class={CSS.header} slot="header-content">
        {headingNode}
        {summaryNode}
      </header>
    ) : null;
  }

  render() {
    const { el } = this;

    const rtl = getElementDir(el) === "rtl";

    return (
      <Host>
        <calcite-panel loading={this.loading} disabled={this.disabled}>
          {this.renderBackButton(rtl)}
          {this.renderHeader()}
          {this.renderHeaderActions()}
          <slot />
          {this.renderFooterActions()}
        </calcite-panel>
      </Host>
    );
  }
}
