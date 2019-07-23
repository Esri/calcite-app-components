import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { chevronDown24, chevronUp24 } from "@esri/calcite-ui-icons";
import { CSS } from "./resources";

@Component({
  tag: "calcite-block",
  styleUrl: "calcite-block.scss",
  shadow: true
})
export class CalciteBlock {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, this block will be collapsible.
   */
  @Prop() collapsible = false;

  /**
   * When true, the block's content will be displayed.
   */
  @Prop({
    reflect: true
  })
  open = false;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element()
  el: HTMLElement;

  mutationObserver = new MutationObserver(() => this.placeHeader());

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.mutationObserver.observe(this.el, { childList: true });
  }

  componentWillLoad(): void {
    this.placeHeader();
  }

  disconnectedCallback(): void {
    this.mutationObserver.disconnect();
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------
  /**
   * Fires when the header is clicked.
   */
  @Event()
  calciteBlockToggle: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  onHeaderClick = () => {
    this.open = !this.open;
    this.calciteBlockToggle.emit();
  };

  placeHeader() {
    const header = this.el.querySelector("calcite-block-header");

    if (header && !header.slot) {
      header.slot = "header";
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { collapsible, open } = this;

    const headerContent = <slot name="header" />;

    const headerNode = (
      <div class={CSS.header}>
        {collapsible ? (
          <button class={CSS.toggle} onClick={this.onHeaderClick}>
            {headerContent}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class={CSS.toggleIcon}
            >
              <path d={open ? chevronUp24 : chevronDown24} />
            </svg>
          </button>
        ) : (
          headerContent
        )}
      </div>
    );

    return (
      <Host aria-expanded={collapsible ? (open ? "true" : "false") : null}>
        <article>
          {headerNode}
          {open ? (
            <div class={CSS.content}>
              <slot />
            </div>
          ) : null}
        </article>
      </Host>
    );
  }
}
