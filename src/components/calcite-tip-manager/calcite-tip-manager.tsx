import { Component, Element, Host, Method, Prop, State, Watch, h } from "@stencil/core";
import { chevronLeft16, chevronRight16, x16 } from "@esri/calcite-ui-icons";
import classnames from "classnames";
import { CSS, DEFAULT_GROUP_TITLE, DEFAULT_PAGINATION_LABEL } from "./resources";
import CalciteIcon from "../_support/CalciteIcon";

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
   * The default group title for the Tip Manager.
   */
  @Prop({ reflect: true }) textDefaultTitle = DEFAULT_GROUP_TITLE;
  /**
   * Label that appears on hover of pagination icon.
   */
  @Prop({ reflect: true }) textPaginationLabel = DEFAULT_PAGINATION_LABEL;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  @State() selectedIndex: number;

  @Watch("selectedIndex")
  selectedChangeHandler() {
    this.updateSelectedTip();
  }

  @State() tips: HTMLCalciteTipElement[];

  @State() total: number;

  @State() direction: "advancing" | "retreating";

  groupTitle = this.textDefaultTitle;

  observer = new MutationObserver(() => this.setUpTips());

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad() {
    this.setUpTips();
  }

  componentDidLoad() {
    this.observer.observe(this.el, { childList: true });
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
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpTips(): void {
    const tips = Array.from(this.el.querySelectorAll("calcite-tip"));

    this.tips = tips;
    this.total = tips.length;

    let selectedIndex: number = null;

    tips.forEach((tip, index) => {
      tip.toggleAttribute("non-dismissible", true);

      if (selectedIndex === null && tip.hasAttribute("selected")) {
        selectedIndex = index;
        return;
      }

      tip.removeAttribute("selected");
    });

    this.selectedIndex = selectedIndex || 0;
  }

  hideTipManager = (): void => {
    this.el.toggleAttribute("hidden");
    this.el.toggleAttribute("aria-hidden");
  };

  updateSelectedTip(): void {
    this.tips.forEach((tip, index) => {
      const selected = index === this.selectedIndex;

      tip.toggleAttribute("selected", selected);

      if (selected) {
        this.groupTitle = tip.dataset.groupTitle || this.textDefaultTitle;
      }
    });
  }

  previousClicked = (): void => {
    this.previousTip();
  };

  nextClicked = (): void => {
    this.nextTip();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    if (this.total === 0) {
      // TODO: Empty state
      return <Host />;
    }
    return (
      <Host>
        <header class={CSS.header}>
          <h2 class={CSS.heading}>{this.groupTitle}</h2>
          <calcite-action onCalciteActionClick={this.hideTipManager} class={CSS.close}>
            <CalciteIcon size="16" path={x16} />
          </calcite-action>
        </header>
        <div class={classnames(CSS.tipContainer, this.direction)} key={this.selectedIndex}>
          <slot />
        </div>
        <footer class={CSS.pagination}>
          <calcite-action onCalciteActionClick={this.previousClicked} class={CSS.pagePrevious}>
            <CalciteIcon size="16" path={chevronLeft16} />
          </calcite-action>
          <span class={CSS.pagePosition}>
            {`${this.textPaginationLabel} ${this.selectedIndex + 1}/${this.total}`}
          </span>
          <calcite-action onCalciteActionClick={this.nextClicked} class={CSS.pageNext}>
            <CalciteIcon size="16" path={chevronRight16} />
          </calcite-action>
        </footer>
      </Host>
    );
  }
}
