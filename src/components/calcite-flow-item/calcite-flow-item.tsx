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
  container: "container",
  header: "header",
  heading: "heading",
  backButton: "back-button",
  singleActionContainer: "single-action-container",
  menuContainer: "menu-container",
  menuButton: "menu-button",
  menu: "menu",
  contentContainer: "content-container",
  footer: "footer"
};

@Component({
  tag: "calcite-flow-item",
  styleUrl: "calcite-flow-item.scss",
  shadow: true
})
export class CalciteFlowItem {
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.calciteFlowItemRegister.emit(this.el);
  }

  disconnectedCallback() {
    this.calciteFlowItemUnregister.emit(this.el);
  }

  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop() heading: string;

  @Prop({ attribute: "i18n-back" }) i18nBack = "Back";

  @Prop({ attribute: "i18n-open" }) i18nOpen = "Open";

  @Prop({ attribute: "i18n-close" }) i18nClose = "Close";

  @Prop({ reflect: true }) menuOpen = false;

  @Prop() showBackButton = false;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calciteFlowItemRegister: EventEmitter;

  @Event() calciteFlowItemUnregister: EventEmitter;

  @Event() calciteFlowItemBackClick: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Variables
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  renderBackButton() {
    const { showBackButton, i18nBack } = this;

    return showBackButton ? (
      <button
        key="back-button"
        class={CSS.backButton}
        aria-label={i18nBack}
        title={i18nBack}
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
    const { menuOpen, i18nOpen, i18nClose } = this;

    const menuLabel = menuOpen ? i18nClose : i18nOpen;

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

  toggleMenuOpen(): void {
    this.menuOpen = !this.menuOpen;
  }

  backButtonClick(): void {
    this.calciteFlowItemBackClick.emit(this.el);
  }
}
