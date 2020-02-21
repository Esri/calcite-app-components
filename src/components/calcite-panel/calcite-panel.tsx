import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h
} from "@stencil/core";
import { CSS, ICONS, SLOTS } from "./resources";
import { getElementDir } from "../utils/dom";
import classnames from "classnames";
import { CSS_UTILITY } from "../utils/resources";
import { VNode } from "@stencil/core/internal";
import { CalciteScale, CalciteTheme } from "../interfaces";
import CalciteScrim from "../utils/CalciteScrim";
import intl from "../intl/en-us";

type FocusId = "dismiss-button";

/**
 * @slot header-content - A slot for adding content in the center of the header.
 * @slot header-leading-content - A slot for adding a `calcite-action` on the leading side of the header.
 * @slot header-trailing-content - A slot for adding a `calcite-action` on the trailing side of the header.
 * @slot footer - A slot for adding `calcite-button`s to the footer.
 * @slot - A slot for adding content to the panel.
 */
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
   * Hides the panel.
   */
  @Prop({ mutable: true, reflect: true }) dismissed = false;

  @Watch("dismissed")
  dismissedHandler() {
    this.calcitePanelDismissedChange.emit();
  }

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Displays a close button in the trailing side of the header.
   */
  @Prop({ reflect: true }) dismissible = false;

  /**
   * Specifies the maxiumum height of the panel.
   */
  @Prop({ reflect: true }) heightScale: CalciteScale;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * 'Close' text string for the close button. The close button will only be shown when 'dismissible' is true.
   */
  @Prop() intlClose?: string;

  /**
   * 'Close' text string for the close button. The close button will only be shown when 'dismissible' is true.
   * @deprecated since 5.4.0 - use "intlClose" instead.
   */
  @Prop() textClose?: string;

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

  dismissButtonEl: HTMLCalciteActionElement;

  containerEl: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the close button has been clicked.
   */

  @Event() calcitePanelDismissedChange: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  panelKeyUpHandler = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      this.dismiss();
    }
  };

  dismiss = (): void => {
    this.dismissed = true;
  };

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async setFocus(focusId?: FocusId) {
    if (focusId === "dismiss-button") {
      this.dismissButtonEl?.setFocus();
      return;
    }

    this.containerEl?.focus();
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHeaderLeadingContent(): VNode {
    const hasLeadingContent = this.el.querySelector(`[slot=${SLOTS.headerLeadingContent}]`);
    return hasLeadingContent ? (
      <div key="header-leading-content" class={CSS.headerLeadingContent}>
        <slot name={SLOTS.headerLeadingContent} />
      </div>
    ) : null;
  }

  renderHeaderContent(): VNode {
    return (
      <div key="header-content" class={CSS.headerContent}>
        <slot name={SLOTS.headerContent} />
      </div>
    );
  }

  renderHeaderTrailingContent(): VNode {
    const { dismiss, dismissible, intlClose, textClose } = this;
    const text = intlClose || textClose || intl.close;

    const dismissibleNode = dismissible ? (
      <calcite-action
        ref={(dismissButtonEl) => (this.dismissButtonEl = dismissButtonEl)}
        aria-label={text}
        text={text}
        onClick={dismiss}
      >
        <calcite-icon scale="s" icon={ICONS.close} />
      </calcite-action>
    ) : null;

    const slotNode = <slot name={SLOTS.headerTrailingContent} />;

    return (
      <div key="header-trailing-content" class={CSS.headerTrailingContent}>
        {slotNode}
        {dismissibleNode}
      </div>
    );
  }

  renderHeader(): VNode {
    const headerLeadingContentNode = this.renderHeaderLeadingContent();
    const headerContentNode = this.renderHeaderContent();
    const headerTrailingContentNode = this.renderHeaderTrailingContent();

    const canDisplayHeader =
      headerContentNode || headerLeadingContentNode || headerTrailingContentNode;

    return canDisplayHeader ? (
      <header class={CSS.header}>
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
    const { dismissed, disabled, dismissible, el, loading, panelKeyUpHandler } = this;

    const rtl = getElementDir(el) === "rtl";

    return (
      <Host>
        <article
          aria-busy={loading.toString()}
          onKeyUp={panelKeyUpHandler}
          tabIndex={dismissible ? 0 : -1}
          hidden={dismissible && dismissed}
          ref={(containerEl) => (this.containerEl = containerEl)}
          class={classnames(CSS.container, {
            [CSS_UTILITY.rtl]: rtl
          })}
        >
          {this.renderHeader()}
          {this.renderContent()}
          {this.renderFooter()}
        </article>
        <CalciteScrim loading={loading} disabled={disabled} />
      </Host>
    );
  }
}
