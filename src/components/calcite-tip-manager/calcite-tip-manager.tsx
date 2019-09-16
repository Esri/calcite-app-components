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
import { chevronLeft16, chevronRight16, x16 } from "@esri/calcite-ui-icons";
import classnames from "classnames";
import { CSS, TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";
import { getElementDir } from "../utils/dom";
import { CalciteTheme } from "../interfaces";

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

  @Element() el: HTMLElement;

  @State() selectedIndex: number;

  @Watch("selectedIndex")
  selectedChangeHandler() {
    this.showSelectedTip();
    this.updateGroupTitle();
  }

  @State() tips: HTMLCalciteTipElement[];

  @State() total: number;

  @State() direction: "advancing" | "retreating";

  groupTitle = this.textDefaultTitle;

  observer = new MutationObserver(() => this.setUpTips());

  tabindex = "0";

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.setUpTips();
    if (this.el.hasAttribute("tabindex")) {
      this.tabindex = this.el.getAttribute("tabindex");
    }
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
   * Emitted when the component has been closed.
   */
  @Event() calciteTipManagerClose: EventEmitter;

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
      tip.setAttribute("non-dismissible", "");
    });
    this.showSelectedTip();
    this.updateGroupTitle();
  }

  hideTipManager = (): void => {
    this.el.setAttribute("hidden", "");
    this.el.setAttribute("aria-hidden", "");
    this.calciteTipManagerClose.emit();
  };

  showSelectedTip() {
    this.tips.forEach((tip, index) => {
      const isSelected = this.selectedIndex === index;
      isSelected ? tip.setAttribute("selected", "") : tip.removeAttribute("selected");
      isSelected ? tip.removeAttribute("hidden") : tip.setAttribute("hidden", "");
    });
  }

  updateGroupTitle() {
    const selectedTip = this.tips[this.selectedIndex];
    const tipParent = selectedTip.closest("calcite-tip-group");
    this.groupTitle = tipParent ? tipParent.textGroupTitle : this.textDefaultTitle;
  }

  previousClicked = (): void => {
    this.previousTip();
  };

  nextClicked = (): void => {
    this.nextTip();
  };

  tipManagerKeyDownHandler = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
      case "ArrowRight":
        this.nextTip();
        break;
      case "ArrowDown":
        event.preventDefault();
      case "ArrowLeft":
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

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderPagination() {
    const dir = getElementDir(this.el);
    return this.tips.length > 1 ? (
      <footer class={CSS.pagination}>
        <calcite-action
          text={this.textPrevious}
          onClick={this.previousClicked}
          class={CSS.pagePrevious}
        >
          <CalciteIcon size="16" path={dir === "ltr" ? chevronLeft16 : chevronRight16} />
        </calcite-action>
        <span class={CSS.pagePosition}>
          {`${this.textPaginationLabel} ${this.selectedIndex + 1}/${this.total}`}
        </span>
        <calcite-action text={this.textNext} onClick={this.nextClicked} class={CSS.pageNext}>
          <CalciteIcon size="16" path={dir === "ltr" ? chevronRight16 : chevronLeft16} />
        </calcite-action>
      </footer>
    ) : null;
  }

  render() {
    if (this.total === 0) {
      return <Host />;
    }
    return (
      <Host onKeydown={this.tipManagerKeyDownHandler} tabindex={this.tabindex}>
        <header class={CSS.header}>
          <h2 class={CSS.heading}>{this.groupTitle}</h2>
          <calcite-action text={this.textClose} onClick={this.hideTipManager} class={CSS.close}>
            <CalciteIcon size="16" path={x16} />
          </calcite-action>
        </header>
        <div class={classnames(CSS.tipContainer, this.direction)} key={this.selectedIndex}>
          <slot />
        </div>
        {this.renderPagination()}
      </Host>
    );
  }
}
