import { Component, Element, Event, EventEmitter, Host, Prop, h, VNode } from "@stencil/core";
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

  onHeaderClick = (): void => {
    this.open = !this.open;
    this.calciteBlockToggle.emit();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render(): VNode {
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
      </header>
    );

    const slottedControl = el.querySelector(`[slot=${SLOTS.control}]`);

    const headerNode = (
      <div class={CSS.headerContainer}>
        {collapsible ? (
          <button
            aria-label={toggleLabel}
            class={CSS.toggle}
            onClick={this.onHeaderClick}
            title={toggleLabel}
          >
            {headerContent}
            {slottedControl ? null : (
              <calcite-icon scale="s" icon={open ? ICONS.close : ICONS.open} />
            )}
          </button>
        ) : (
          headerContent
        )}
        {loading ? (
          <calcite-loader inline is-active></calcite-loader>
        ) : (
          <slot name={SLOTS.control} />
        )}
      </div>
    );

    return (
      <Host tabIndex={disabled ? -1 : null}>
        <article aria-expanded={collapsible ? open.toString() : null} aria-busy={loading}>
          {headerNode}
          <div class={CSS.content} hidden={!open}>
            <CalciteScrim loading={loading} disabled={disabled}>
              <slot />
            </CalciteScrim>
          </div>
        </article>
      </Host>
    );
  }
}
