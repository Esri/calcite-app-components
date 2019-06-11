import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h
} from '@stencil/core';

import { chevronLeft16F, ellipsis16F } from '@esri/calcite-ui-icons';

const CSS = {
  container: 'calcite-flow-panel__container',
  header: 'calcite-flow-panel__header',
  heading: 'calcite-flow-panel__heading',
  backButton: 'calcite-flow-panel__back-button',
  menuContainer: 'calcite-flow-panel__menu-container',
  menuButton: 'calcite-flow-panel__menu-button',
  menu: 'calcite-flow-panel__menu',
  contentContainer: 'calcite-flow-panel__content-container',
  footer: 'calcite-flow-panel__footer'
};

export interface Labels {
  openMenu: string;
  closeMenu: string;
  back: string;
}

const DEFAULT_LABELS = {
  back: 'Back',
  openMenu: 'Open menu',
  closeMenu: 'Close menu'
};

// todo: key navigation for menu

@Component({
  tag: 'calcite-flow-panel',
  styleUrl: 'calcite-flow-panel.scss',
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
  //  backButton
  // ----------------------------------

  @Prop() backButton = false;

  // ----------------------------------
  //  labels
  // ----------------------------------

  @Prop() labels: Labels = DEFAULT_LABELS;

  // ----------------------------------
  //  heading
  // ----------------------------------

  @Prop() heading: string = null;

  // ----------------------------------
  //  menuOpen
  // ----------------------------------

  @Prop({ reflect: true }) menuOpen = false;

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
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  componentWillLoad() {
    this.calciteFlowPanelRegister.emit(this.el);
  }

  disconnectedCallback() {
    this.calciteFlowPanelUnregister.emit(this.el);
  }

  render() {
    const { backButton, el, heading, menuOpen, labels } = this;

    const backButtonNode = backButton ? (
      <button
        key="back-button"
        class={CSS.backButton}
        aria-label={labels.back}
        title={labels.back}
        onClick={this._backButtonClick.bind(this)}
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

    const hasMenuActions = !!el.querySelector('[slot=menu-actions]');
    const hasFooterActions = !!el.querySelector('[slot=footer-actions]');

    const menuLabel = menuOpen ? labels.closeMenu : labels.openMenu;

    const menuButtonNode = hasMenuActions ? (
      <button
        key="menu-button"
        class={CSS.menuButton}
        aria-label={menuLabel}
        title={menuLabel}
        onClick={this._toggleMenuOpen.bind(this)}
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
    ) : null;

    const menuActionsContainerNode =
      hasMenuActions && menuOpen ? (
        <div key="menu-actions" class={CSS.menu}>
          <slot name="menu-actions" />
        </div>
      ) : null;

    const footerActionsContainerNode = hasFooterActions ? (
      <footer class={CSS.footer}>
        <slot name="footer-actions" />
      </footer>
    ) : null;

    const contentContainerNode = (
      <section class={CSS.contentContainer}>
        <slot />
      </section>
    );

    const headingNode = <h2 class={CSS.heading}>{heading}</h2>;

    const menuContainerNode = hasMenuActions ? (
      <div class={CSS.menuContainer}>
        {menuButtonNode}
        {menuActionsContainerNode}
      </div>
    ) : null;

    const headerNode = (
      <header class={CSS.header}>
        {backButtonNode}
        {headingNode}
        {menuContainerNode}
      </header>
    );

    return (
      <Host>
        <article class={CSS.container}>
          {headerNode}
          {contentContainerNode}
          {footerActionsContainerNode}
        </article>
      </Host>
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private _toggleMenuOpen(): void {
    this.menuOpen = !this.menuOpen;
  }

  private _backButtonClick(): void {
    this.calciteFlowPanelBackClick.emit(this.el);
  }
}
