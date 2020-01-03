import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { VNode } from "@stencil/core/dist/declarations";
import { focusElement, getElementDir } from "../utils/dom";
import classnames from "classnames";
import { BLACKLISTED_MENU_ACTIONS_COMPONENTS, CSS, ICONS, SLOTS, TEXT } from "./resources";
import { getRoundRobinIndex } from "../utils/array";
import { CalciteScale, CalciteTheme } from "../interfaces";
import { CSS_UTILITY } from "../utils/resources";

const SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];

/**
 * @slot menu-actions - A slot for adding `calcite-action`s to a menu under the `...` in the header. These actions are displayed when the menu is open.
 * @slot footer-actions - A slot for adding `calcite-button`s to the footer.
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
   * When provided, this method will be called before it is removed from the parent flow.
   */
  @Prop() beforeBack?: () => Promise<void>;

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Specifies the maxiumum height of the panel that this wraps.
   */
  @Prop({ reflect: true }) heightScale: CalciteScale;

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
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the back button has been clicked.
   */

  @Event() calciteFlowItemBackClick: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFlowItemElement;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  queryActions(): HTMLCalciteActionElement[] {
    return Array.from(this.el.querySelectorAll(`[slot=${SLOTS.menuActions}] calcite-action`));
  }

  isValidKey(key: string, supportedKeys: string[]): boolean {
    return !!supportedKeys.find((k) => k === key);
  }

  toggleMenuOpen = (): void => {
    this.menuOpen = !this.menuOpen;
  };

  backButtonClick = (): void => {
    this.calciteFlowItemBackClick.emit();
  };

  menuButtonKeyDown = (event: KeyboardEvent): void => {
    const { key } = event;
    const { menuOpen } = this;

    if (!this.isValidKey(key, SUPPORTED_ARROW_KEYS)) {
      return;
    }

    const actions = this.queryActions();
    const { length } = actions;

    if (!length) {
      return;
    }

    event.preventDefault();

    if (!menuOpen) {
      this.menuOpen = true;
    }

    if (key === "ArrowUp") {
      const lastAction = actions[length - 1];
      focusElement(lastAction);
    }

    if (key === "ArrowDown") {
      const firstAction = actions[0];
      focusElement(firstAction);
    }
  };

  menuActionsKeydown = (event: KeyboardEvent): void => {
    const { key, target } = event;

    if (!this.isValidKey(key, SUPPORTED_ARROW_KEYS)) {
      return;
    }

    const actions = this.queryActions();
    const { length } = actions;
    const currentIndex = actions.indexOf(target as HTMLCalciteActionElement);

    if (!length || currentIndex === -1) {
      return;
    }

    event.preventDefault();

    if (key === "ArrowUp") {
      const value = getRoundRobinIndex(currentIndex - 1, length);
      const previousAction = actions[value];
      focusElement(previousAction);
    }

    if (key === "ArrowDown") {
      const value = getRoundRobinIndex(currentIndex + 1, length);
      const nextAction = actions[value];
      focusElement(nextAction);
    }
  };

  menuActionsContainerKeyDown = (event: KeyboardEvent): void => {
    const { key } = event;

    if (key === "Escape") {
      this.menuOpen = false;
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderBackButton(rtl: boolean): VNode {
    const { showBackButton, textBack, backButtonClick } = this;

    const icon = rtl ? ICONS.backRight : ICONS.backLeft;

    return showBackButton ? (
      <calcite-action
        slot={SLOTS.headerLeadingContent}
        key="back-button"
        aria-label={textBack}
        text={textBack}
        class={CSS.backButton}
        onClick={backButtonClick}
      >
        <calcite-icon scale="s" filled icon={icon} />
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
        onKeyDown={this.menuButtonKeyDown}
      >
        <calcite-icon scale="s" icon={ICONS.menu} />
      </calcite-action>
    );
  }

  renderMenuActions(): VNode {
    const { menuOpen } = this;

    return (
      <div
        class={classnames(CSS.menu, { [CSS.menuOpen]: menuOpen })}
        onKeyDown={this.menuActionsKeydown}
      >
        <slot name={SLOTS.menuActions} />
      </div>
    );
  }

  renderFooterActions(): VNode {
    const hasFooterActions = !!this.el.querySelector(`[slot=${SLOTS.footerActions}]`);

    return hasFooterActions ? (
      <div slot="footer" class={CSS.footerActions}>
        <slot name={SLOTS.footerActions} />
      </div>
    ) : null;
  }

  renderSingleActionContainer(): VNode {
    return (
      <div class={CSS.singleActionContainer}>
        <slot name={SLOTS.menuActions} />
      </div>
    );
  }

  renderMenuActionsContainer(): VNode {
    return (
      <div class={CSS.menuContainer} onKeyDown={this.menuActionsContainerKeyDown}>
        {this.renderMenuButton()}
        {this.renderMenuActions()}
      </div>
    );
  }

  renderHeaderActions(): VNode {
    const menuActionsNode = this.el.querySelector(`[slot=${SLOTS.menuActions}]`);

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

    return menuActionsNodes ? (
      <div slot={SLOTS.headerTrailingContent} class={CSS.headerActions}>
        {menuActionsNodes}
      </div>
    ) : null;
  }

  renderHeading(): VNode {
    const { heading } = this;

    return heading ? (
      <h2 class={CSS.heading} slot={SLOTS.headerContent}>
        {heading}
      </h2>
    ) : null;
  }

  renderSummary(): VNode {
    const { summary } = this;

    return summary ? <span class={CSS.summary}>{summary}</span> : null;
  }

  renderHeader(): VNode {
    const headingNode = this.renderHeading();

    const summaryNode = this.renderSummary();

    return headingNode || summaryNode ? (
      <header class={CSS.header} slot={SLOTS.headerContent}>
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
        <calcite-panel
          loading={this.loading}
          disabled={this.disabled}
          height-scale={this.heightScale}
          class={classnames({
            [CSS_UTILITY.rtl]: rtl
          })}
        >
          {this.renderBackButton(rtl)}
          <div class={CSS.header} slot="header-content">
            {this.renderHeading()}
            {this.renderSummary()}
          </div>
          {this.renderHeaderActions()}
          <slot />
          {this.renderFooterActions()}
        </calcite-panel>
      </Host>
    );
  }
}
