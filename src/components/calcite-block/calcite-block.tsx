import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { chevronDown16, chevronUp16 } from "@esri/calcite-ui-icons";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";
import { CalciteTheme } from "../interfaces";
import CalciteScrim from "../utils/CalciteScrim";

const CONTROL_SLOT_NAME = "control";

/**
 * @slot control - A slot for adding a single HTML input element in a header.
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
      `slot[name=${CONTROL_SLOT_NAME}]`
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
    ) : !disabled ? (
      <slot name={CONTROL_SLOT_NAME} />
    ) : null;

    const headerContent = (
      <header class={CSS.header}>
        <div class={CSS.title}>
          <h3 class={CSS.heading}>{heading}</h3>
          {summary ? <div class={CSS.summary}>{summary}</div> : null}
        </div>
        {content}
      </header>
    );

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

    const hasContent = !!Array.from(el.children).some((child) => child.slot !== CONTROL_SLOT_NAME);

    return (
      <Host>
        <article aria-expanded={collapsible ? (open ? "true" : "false") : null} aria-busy={loading}>
          {headerNode}
          <div class={CSS.content} hidden={!hasContent || !open}>
            <slot />
            {loading || disabled ? <CalciteScrim loading={false}></CalciteScrim> : null}
          </div>
        </article>
      </Host>
    );
  }
}
