import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";
import classnames from "classnames";
import { CSS, ICONS, TEXT } from "./resources";
import { getElementDir } from "../utils/dom";
import { CalciteTheme } from "../interfaces";

/**
 * @slot - A slot for adding `calcite-tips`.
 */
@Component({
  tag: "calcite-tip-manager",
  styleUrl: "./calcite-tip-manager.scss",
  shadow: true
})
export class CalciteTipManager {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------
  /**
   * Alternate text for closing the Tip Manager.
   */
  @Prop({ reflect: true }) closed = false;

  @Watch("closed")
  closedChangeHandler() {
    this.direction = null;
    this.calciteTipManagerToggle.emit();
  }

  /**
   * Alternate text for closing the Tip Manager.
   */
  @Prop() textClose = TEXT.close;

  /**
   * The default group title for the Tip Manager.
   */
  @Prop({ reflect: true }) textDefaultTitle = TEXT.defaultGroupTitle;

  /**
   * Alternate text for navigating to the next tip.
   */
  @Prop() textNext = TEXT.next;

  /**
   * Label that appears on hover of pagination icon.
   */
  @Prop({ reflect: true }) textPaginationLabel = TEXT.defaultPaginationLabel;

  /**
   * Alternate text for navigating to the previous tip.
   */
  @Prop() textPrevious = TEXT.previous;

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteTipManagerElement;

  @State() selectedIndex: number;

  @Watch("selectedIndex")
  selectedChangeHandler() {
    this.showSelectedTip();
    this.updateGroupTitle();
  }

  @State() tips: HTMLCalciteTipElement[];

  @State() total: number;

  @State() direction: "advancing" | "retreating";

  @State() groupTitle = this.textDefaultTitle;

  observer = new MutationObserver(() => this.setUpTips());

  container: HTMLDivElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.setUpTips();
  }

  componentDidLoad() {
    this.observer.observe(this.el, { childList: true, subtree: true });
  }

  componentDidUnload() {
    this.observer.disconnect();
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async nextTip(): Promise<void> {
    this.direction = "advancing";
    const nextIndex = this.selectedIndex + 1;
    this.selectedIndex = (nextIndex + this.total) % this.total;
  }

  @Method()
  async previousTip(): Promise<void> {
    this.direction = "retreating";
    const previousIndex = this.selectedIndex - 1;
    this.selectedIndex = (previousIndex + this.total) % this.total;
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the TipManager has been toggled closed or opened.
   */
  @Event() calciteTipManagerToggle: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpTips(): void {
    const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
    this.total = tips.length;
    if (this.total === 0) {
      return;
    }
    const selectedTip = this.el.querySelector<HTMLCalciteTipElement>("calcite-tip[selected]");

    this.tips = tips;
    this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;

    tips.forEach((tip) => {
      tip.nonDismissible = true;
    });
    this.showSelectedTip();
    this.updateGroupTitle();
  }

  hideTipManager = (): void => {
    this.closed = true;
    this.calciteTipManagerToggle.emit();
  };

  showSelectedTip() {
    this.tips.forEach((tip, index) => {
      const isSelected = this.selectedIndex === index;
      tip.selected = isSelected;
      tip.hidden = !isSelected;
    });
  }

  updateGroupTitle() {
    const selectedTip = this.tips[this.selectedIndex];
    const tipParent = selectedTip.closest("calcite-tip-group");
    this.groupTitle = (tipParent && tipParent.textGroupTitle) || this.textDefaultTitle;
  }

  previousClicked = (): void => {
    this.previousTip();
  };

  nextClicked = (): void => {
    this.nextTip();
  };

  tipManagerKeyUpHandler = (event: KeyboardEvent): void => {
    if (event.target !== this.container) {
      return;
    }

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        this.nextTip();
        break;
      case "ArrowLeft":
        event.preventDefault();
        this.previousTip();
        break;
      case "Home":
        event.preventDefault();
        this.selectedIndex = 0;
        break;
      case "End":
        event.preventDefault();
        this.selectedIndex = this.total - 1;
        break;
    }
  };

  storeContainerRef = (el: HTMLDivElement) => {
    this.container = el;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderPagination() {
    const dir = getElementDir(this.el);
    const { selectedIndex, tips, total } = this;

    return tips.length > 1 ? (
      <footer class={CSS.pagination}>
        <calcite-action
          text={this.textPrevious}
          onClick={this.previousClicked}
          class={CSS.pagePrevious}
        >
          <calcite-icon scale="s" icon={dir === "ltr" ? ICONS.chevronLeft : ICONS.chevronRight} />
        </calcite-action>
        <span class={CSS.pagePosition}>
          {`${this.textPaginationLabel} ${selectedIndex + 1}/${total}`}
        </span>
        <calcite-action text={this.textNext} onClick={this.nextClicked} class={CSS.pageNext}>
          <calcite-icon scale="s" icon={dir === "ltr" ? ICONS.chevronRight : ICONS.chevronLeft} />
        </calcite-action>
      </footer>
    ) : null;
  }

  render() {
    const { closed, direction, groupTitle, selectedIndex, textClose, total } = this;

    if (total === 0) {
      return <Host />;
    }
    return (
      <Host>
        <div
          class={CSS.container}
          hidden={closed}
          aria-hidden={closed.toString()}
          tabIndex={0}
          onKeyUp={this.tipManagerKeyUpHandler}
          ref={this.storeContainerRef}
        >
          <header class={CSS.header}>
            <h2 key={selectedIndex} class={CSS.heading}>
              {groupTitle}
            </h2>
            <calcite-action text={textClose} onClick={this.hideTipManager} class={CSS.close}>
              <calcite-icon scale="s" icon={ICONS.close} />
            </calcite-action>
          </header>
          <div
            tabIndex={0}
            class={classnames(CSS.tipContainer, {
              [CSS.tipContainerAdvancing]: !closed && direction === "advancing",
              [CSS.tipContainerRetreating]: !closed && direction === "retreating"
            })}
            key={selectedIndex}
          >
            <slot />
          </div>
          {this.renderPagination()}
        </div>
      </Host>
    );
  }
}
