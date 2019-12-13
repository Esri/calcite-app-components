import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { VNode } from "@stencil/core/dist/declarations";

import { chevronLeft16F, chevronRight16F, ellipsis16 } from "@esri/calcite-ui-icons";

import { getElementDir } from "../utils/dom";

import classnames from "classnames";

import { BLACKLISTED_MENU_ACTIONS_COMPONENTS, CSS, SLOTS, TEXT } from "./resources";
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

  focusElement(el: HTMLCalciteActionElement | HTMLElement): void {
    if (!el) {
      return;
    }

    "setFocus" in el ? el.setFocus() : el.focus();
  }

  queryActions(): HTMLCalciteActionElement[] {
    return Array.from(this.el.querySelectorAll(`[slot=${SLOTS.menuActions}] > *`));
  }

  isValidKey(key: string, supportedKeys: string[]): boolean {
    return supportedKeys.indexOf(key) !== -1;
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

    if (!this.isValidKey(key, ["ArrowUp", "ArrowDown"])) {
      return;
    }

    const actions = this.queryActions();
    const { length } = actions;

    if (!length) {
      return;
    }

    if (!menuOpen) {
      this.menuOpen = true;
    }

    if (key === "ArrowUp") {
      const lastAction = actions[length - 1];
      this.focusElement(lastAction);
    }

    if (key === "ArrowDown") {
      const firstAction = actions[0];
      this.focusElement(firstAction);
    }
  };

  menuActionsKeydown = (event: KeyboardEvent): void => {
    const { key, target } = event;

    if (!this.isValidKey(key, ["ArrowUp", "ArrowDown"])) {
      return;
    }

    const actions = this.queryActions();
    const { length } = actions;
    const currentIndex = actions.indexOf(target as HTMLCalciteActionElement);

    if (!length || currentIndex === -1) {
      return;
    }

    if (key === "ArrowUp") {
      const previousIndex = currentIndex - 1;
      const value = (previousIndex + length) % length;
      const previousAction = actions[value];
      this.focusElement(previousAction);
    }

    if (key === "ArrowDown") {
      const nextIndex = currentIndex + 1;
      const value = (nextIndex + length) % length;
      const nextAction = actions[value];
      this.focusElement(nextAction);
    }
  };

  menuActionsContainerKeyDown = (event: KeyboardEvent): void => {
    const { key } = event;

    if (key === "Escape") {
      this.menuOpen = false;
      return;
    }
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
        onKeyDown={this.menuButtonKeyDown}
      >
        <CalciteIcon size="16" path={ellipsis16} />
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

    return menuActionsNodes ? <div slot="header-trailing-content">{menuActionsNodes}</div> : null;
  }

  renderHeading(): VNode {
    const { heading } = this;

    return heading ? (
      <h2 class={CSS.heading} slot="header-content">
        {heading}
      </h2>
    ) : null;
  }

  render() {
    const { el } = this;

    const rtl = getElementDir(el) === "rtl";

    return (
      <Host>
        <calcite-panel loading={this.loading} disabled={this.disabled}>
          {this.renderBackButton(rtl)}
          {this.renderHeading()}
          {this.renderHeaderActions()}
          <slot />
          {this.renderFooterActions()}
        </calcite-panel>
      </Host>
    );
  }
}
