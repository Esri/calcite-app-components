import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";
import { CSS, TEXT } from "./resources";
import { getElementDir } from "../utils/dom";
import classnames from "classnames";
import { CSS_UTILITY } from "../utils/resources";
import { VNode } from "@stencil/core/dist/declarations";
import { CalciteTheme } from "../interfaces";
import CalciteIcon from "../utils/CalciteIcon";
import { x16 } from "@esri/calcite-ui-icons";

const SLOTS = {
  headerContent: "header-content",
  headerLeadingContent: "header-leading-content",
  headerTrailingContent: "header-trailing-content",
  footer: "footer"
};

/**
 * @slot header-content - A slot for adding content in the center of the header.
 * @slot header-leading-content - A slot for adding a `calcite-action` on the leading side of the header.
 * @slot header-trailing-content - A slot for adding a `calcite-action` on the trailing side of the header.
 * @slot footer - A slot for adding `calcite-actions` to the footer.
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
  @Prop({ reflect: true }) dismissed = false;

  @Watch("dismissed")
  dismissedHandler() {
    this.calcitePanelDismissedChange.emit();
  }

  /**
   * Displays a close button in the trailing side of the header.
   */
  @Prop({ reflect: true }) dismissible = false;

  /**
   * 'Close' text string for the close button. The close button will only be shown when 'dismissible' is true.
   */
  @Prop() textClose = TEXT.close;

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
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHeaderLeadingContent(): VNode {
    const hasHeaderLeadingContent = this.el.querySelector(`[slot=${SLOTS.headerLeadingContent}]`);

    return hasHeaderLeadingContent ? (
      <div key="header-leading-content" class={CSS.headerLeadingContent}>
        <slot name={SLOTS.headerLeadingContent} />
      </div>
    ) : null;
  }

  renderHeaderContent(): VNode {
    const hasHeaderContent = this.el.querySelector(`[slot=${SLOTS.headerContent}]`);

    return hasHeaderContent ? (
      <div key="header-content" class={CSS.headerContent}>
        <slot name={SLOTS.headerContent} />
      </div>
    ) : null;
  }

  renderHeaderTrailingContent(): VNode {
    const { dismiss, dismissible, el, textClose } = this;

    const dismissibleNode = dismissible ? (
      <calcite-action aria-label={textClose} text={textClose} onClick={dismiss}>
        <CalciteIcon size="16" path={x16} />
      </calcite-action>
    ) : null;

    const slotNode = <slot name={SLOTS.headerTrailingContent} />;
    const hasContent = dismissible || el.querySelector(`[slot=${SLOTS.headerTrailingContent}]`);

    return hasContent ? (
      <div key="header-trailing-content" class={CSS.headerTrailingContent}>
        {slotNode}
        {dismissibleNode}
      </div>
    ) : null;
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
    const { dismissed, dismissible, el, panelKeyUpHandler } = this;

    const rtl = getElementDir(el) === "rtl";

    return (
      <Host>
        <article
          onKeyUp={panelKeyUpHandler}
          tabIndex={dismissible ? 0 : -1}
          hidden={dismissible && dismissed}
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
