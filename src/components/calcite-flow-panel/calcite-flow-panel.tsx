import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h
} from "@stencil/core";

import { chevronLeft16F, ellipsis16F } from "@esri/calcite-ui-icons";

const CSS = {
  container: "calcite-flow-panel__container",
  header: "calcite-flow-panel__header",
  heading: "calcite-flow-panel__heading",
  backButton: "calcite-flow-panel__back-button",
  singleActionContainer: "calcite-flow-panel__single-action-container",
  menuContainer: "calcite-flow-panel__menu-container",
  menuButton: "calcite-flow-panel__menu-button",
  menu: "calcite-flow-panel__menu",
  contentContainer: "calcite-flow-panel__content-container",
  footer: "calcite-flow-panel__footer"
};

@Component({
  tag: "calcite-flow-panel",
  styleUrl: "calcite-flow-panel.scss",
  shadow: true
})
export class CalciteFlowPanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  // ----------------------------------
  //  el
  // ----------------------------------

  @Element() el: HTMLElement;

  // ----------------------------------
  //  heading
  // ----------------------------------

  @Prop() heading: string = null;

  // ----------------------------------
  //  labels
  // ----------------------------------

  @Prop() labels = {
    back: "Back",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  };

  // ----------------------------------
  //  menuOpen
  // ----------------------------------

  @Prop({ reflect: true }) menuOpen = false;

  // ----------------------------------
  //  showBackButton
  // ----------------------------------

  @Prop() showBackButton = false;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calciteFlowPanelRegister: EventEmitter;

  @Event() calciteFlowPanelUnregister: EventEmitter;

  @Event() calciteFlowPanelBackClick: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle Methods
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.calciteFlowPanelRegister.emit(this.el);
  }

  disconnectedCallback() {
    this.calciteFlowPanelUnregister.emit(this.el);
  }

  render() {
    const headerNode = (
      <header class={CSS.header}>
        {this.renderBackButton()}
        <h2 class={CSS.heading}>{this.heading}</h2>
        {this.renderHeaderActions()}
      </header>
    );

    const contentContainerNode = (
      <section class={CSS.contentContainer}>
        <slot />
      </section>
    );

    return (
      <Host>
        <article class={CSS.container}>
          {headerNode}
          {contentContainerNode}
          {this.renderFooterActions()}
        </article>
      </Host>
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  renderBackButton() {
    const { showBackButton, labels } = this;

    return showBackButton ? (
      <button
        key="back-button"
        class={CSS.backButton}
        aria-label={labels.back}
        title={labels.back}
        onClick={this.backButtonClick.bind(this)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 16 16"
        >
          <path d={chevronLeft16F} />
        </svg>
      </button>
    ) : null;
  }

  renderMenuButton() {
    const { menuOpen, labels } = this;

    const menuLabel = menuOpen ? labels.closeMenu : labels.openMenu;

    return (
      <button
        key="menu-button"
        class={CSS.menuButton}
        aria-label={menuLabel}
        title={menuLabel}
        onClick={this.toggleMenuOpen.bind(this)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 16 16"
        >
          <path d={ellipsis16F} />
        </svg>
      </button>
    );
  }

  renderMenuActions() {
    const { menuOpen } = this;

    return menuOpen ? (
      <div key="menu-actions" class={CSS.menu}>
        <slot name="menu-actions" />
      </div>
    ) : null;
  }

  renderFooterActions() {
    const hasFooterActions = !!this.el.querySelector("[slot=footer-actions]");

    return hasFooterActions ? (
      <footer class={CSS.footer}>
        <slot name="footer-actions" />
      </footer>
    ) : null;
  }

  renderSingleActionContainer() {
    return (
      <div class={CSS.singleActionContainer}>
        <slot name="menu-actions" />
      </div>
    );
  }

  renderMenuActionsContainer() {
    return (
      <div class={CSS.menuContainer}>
        {this.renderMenuButton()}
        {this.renderMenuActions()}
      </div>
    );
  }

  renderHeaderActions() {
    const menuActionsNode = this.el.querySelector("[slot=menu-actions]");
    const hasMenuActions = !!menuActionsNode;
    const actionCount = hasMenuActions ? menuActionsNode.childElementCount : 0;

    return actionCount === 1
      ? this.renderSingleActionContainer()
      : hasMenuActions
      ? this.renderMenuActionsContainer()
      : null;
  }

  toggleMenuOpen(): void {
    this.menuOpen = !this.menuOpen;
  }

  backButtonClick(): void {
    this.calciteFlowPanelBackClick.emit(this.el);
  }
}
