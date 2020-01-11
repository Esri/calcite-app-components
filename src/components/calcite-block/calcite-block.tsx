import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { CSS, ICONS, SLOTS, TEXT } from "./resources";
import { CalciteTheme } from "../interfaces";
import CalciteScrim from "../utils/CalciteScrim";

/**
 * @slot icon - A slot for adding a trailing header icon.
 * @slot control - A slot for adding a single HTML input element in a header.
 * @slot - A slot for adding content to the block.
 */
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
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Block heading.
   */
  @Prop()
  heading: string;

  /**
   * When true, the block's content will be displayed.
   */
  @Prop({
    reflect: true
  })
  open = false;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * Block summary.
   */
  @Prop()
  summary: string;

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
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element()
  el: HTMLCalciteBlockElement;

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

  onHeaderClick = (event: MouseEvent) => {
    const controlSlot = this.el.shadowRoot.querySelector<HTMLSlotElement>(
      `slot[name=${SLOTS.control}]`
    );
    const control = controlSlot && controlSlot.assignedNodes()[0];

    if (control && control.contains(event.target as Node)) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    this.open = !this.open;
    this.calciteBlockToggle.emit();
  };

  onHeaderKeyDownOrUp = (event: KeyboardEvent) => {
    const { currentTarget, key, target } = event;

    if (key === " " || key === "Enter") {
      const shouldBlockBubbledControlEvent = currentTarget !== target;

      if (shouldBlockBubbledControlEvent) {
        event.preventDefault();
      }
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const {
      collapsible,
      disabled,
      el,
      heading,
      loading,
      open,
      summary,
      textCollapse,
      textExpand
    } = this;
    const toggleLabel = open ? textCollapse : textExpand;
    const content = loading ? (
      <calcite-loader inline is-active></calcite-loader>
    ) : (
      <slot name={SLOTS.control} />
    );

    const hasIcon = el.querySelector(`[slot=${SLOTS.icon}]`);
    const headerContent = (
      <header class={CSS.header}>
        {hasIcon ? (
          <div class={CSS.icon}>
            <slot name={SLOTS.icon} />
          </div>
        ) : null}
        <div class={CSS.title}>
          <h3 class={CSS.heading}>{heading}</h3>
          {summary ? <div class={CSS.summary}>{summary}</div> : null}
        </div>
        {content}
      </header>
    );

    const controlSlot = el.querySelector(`[slot=${SLOTS.control}]`);
    const hasContent = el.children.length > (controlSlot ? 1 : 0);

    const headerNode = (
      <div class={CSS.headerContainer}>
        {collapsible ? (
          <button
            aria-label={toggleLabel}
            class={CSS.toggle}
            onClick={this.onHeaderClick}
            onKeyDown={this.onHeaderKeyDownOrUp}
            onKeyUp={this.onHeaderKeyDownOrUp}
            title={toggleLabel}
          >
            {headerContent}
            {controlSlot ? null : <calcite-icon scale="s" icon={open ? ICONS.close : ICONS.open} />}
          </button>
        ) : (
          headerContent
        )}
      </div>
    );

    return (
      <Host tabIndex={disabled ? -1 : null}>
        <article aria-expanded={collapsible ? open.toString() : null} aria-busy={loading}>
          {headerNode}
          <div class={CSS.content} hidden={!hasContent || !open}>
            <CalciteScrim loading={loading} disabled={disabled}>
              <slot />
            </CalciteScrim>
          </div>
        </article>
      </Host>
    );
  }
}
