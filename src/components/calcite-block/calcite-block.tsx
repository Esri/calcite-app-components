import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { chevronDown16, chevronUp16 } from "@esri/calcite-ui-icons";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../_support/CalciteIcon";
import { CalciteTheme } from "../../utils/dom";

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

  /**
   * Tooltip used for the toggle when collapsed.
   */
  @Prop()
  textExpand = TEXT.expand;

  /**
   * Tooltip used for the toggle when expanded.
   */
  @Prop()
  textCollapse = TEXT.collapse;

  /**
   * Element styling
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

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
   * Emitted when the header has been clicked.
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
    const { collapsible, el, open, textCollapse, textExpand } = this;
    const toggleLabel = open ? textCollapse : textExpand;

    const headerContent = <slot name="header" />;

    const headerNode = (
      <div class={CSS.header}>
        {collapsible ? (
          <button
            aria-label={toggleLabel}
            class={CSS.toggle}
            onClick={this.onHeaderClick}
            title={toggleLabel}
          >
            {headerContent}
            <CalciteIcon
              size="16"
              path={open ? chevronUp16 : chevronDown16}
              svgAttributes={{ class: CSS.toggleIcon }}
            />
          </button>
        ) : (
          headerContent
        )}
      </div>
    );

    const hasContent = !!el.querySelector("calcite-block-content");

    return (
      <Host aria-expanded={collapsible ? (open ? "true" : "false") : null}>
        <article>
          {headerNode}
          {hasContent && open ? (
            <div class={CSS.content}>
              <slot />
            </div>
          ) : null}
        </article>
      </Host>
    );
  }
}
