import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop
} from "@stencil/core";

import { chevronLeft16F, ellipsis16F } from "@esri/calcite-ui-icons";

const CSS = {
  frame: "calcite-flow-panel__frame",
  header: "calcite-flow-panel__header",
  headingContainer: "calcite-flow-panel__heading-container",
  backButton: "calcite-flow-panel__back-button",
  menuButton: "calcite-flow-panel__menu-button",
  menu: "calcite-flow-panel__menu",
  contentContainer: "calcite-flow-panel__content-container",
  footer: "calcite-flow-panel__footer"
};

interface Labels {
  openMenu: string;
  closeMenu: string;
  back: string;
}

const DEFAULT_LABELS = {
  back: "Back",
  openMenu: "Open menu",
  closeMenu: "Close menu"
};

@Component({
  tag: "calcite-flow-panel",
  styleUrl: "calcite-flow-panel.scss",
  shadow: true
})
export class CalciteFlowPanel {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  el
  //----------------------------------

  @Element() el: HTMLElement;

  //----------------------------------
  //  backButton
  //----------------------------------

  @Prop({ reflect: true }) backButton = false;

  //----------------------------------
  //  labels
  //----------------------------------

  @Prop() labels: Labels = DEFAULT_LABELS;

  //----------------------------------
  //  heading
  //----------------------------------

  @Prop({ reflect: true }) heading: string = null;

  //----------------------------------
  //  menuOpen
  //----------------------------------

  @Prop({ reflect: true }) menuOpen = false;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event() calciteFlowPanelBackClick: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

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

    const hasMenuActions = !!el.querySelector("[slot=menu-actions]");
    const hasFooterActions = !!el.querySelector("[slot=footer-actions]");

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

    const headingContainerNode = (
      <span class={CSS.headingContainer}>{heading}</span>
    );

    const headerNode = (
      <header class={CSS.header}>
        {backButtonNode}
        {headingContainerNode}
        {menuButtonNode}
        {menuActionsContainerNode}
      </header>
    );

    return (
      <Host>
        <article class={CSS.frame}>
          {headerNode}
          {contentContainerNode}
          {footerActionsContainerNode}
        </article>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _toggleMenuOpen(): void {
    this.menuOpen = !this.menuOpen;
  }

  private _backButtonClick(): void {
    this.calciteFlowPanelBackClick.emit(this);
  }
}
