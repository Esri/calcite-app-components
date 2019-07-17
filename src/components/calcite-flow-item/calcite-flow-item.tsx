import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { chevronLeft16, ellipsis16 } from "@esri/calcite-ui-icons";

import { CSS, TEXT } from "./resources";

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

  @Prop() heading: string;

  @Prop() textBack = TEXT.back;

  @Prop() textOpen = TEXT.open;

  @Prop() textClose = TEXT.close;

  @Prop({ reflect: true }) menuOpen = false;

  @Prop() showBackButton = false;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calciteFlowItemBackClick: EventEmitter;

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

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderBackButton() {
    const { showBackButton, textBack } = this;

    return showBackButton ? (
      <calcite-action
        key="back-button"
        aria-label={textBack}
        text={textBack}
        onCalciteActionClick={this.backButtonClick.bind(this)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
          <path d={chevronLeft16} />
        </svg>
      </calcite-action>
    ) : null;
  }

  renderMenuButton() {
    const { menuOpen, textOpen, textClose } = this;

    const menuLabel = menuOpen ? textClose : textOpen;

    return (
      <calcite-action
        key="menu-button"
        class={CSS.menuButton}
        aria-label={menuLabel}
        text={menuLabel}
        onCalciteActionClick={this.toggleMenuOpen.bind(this)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
          <path d={ellipsis16} />
        </svg>
      </calcite-action>
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
}
