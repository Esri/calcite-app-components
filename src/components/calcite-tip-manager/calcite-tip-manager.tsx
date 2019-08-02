import { Component, Element, Host, Method, Prop, State, Watch, h } from "@stencil/core";
import { chevronLeft16, chevronRight16, x16 } from "@esri/calcite-ui-icons";
import classnames from "classnames";
import { CSS, DEFAULT_GROUP_TITLE, DEFAULT_PAGINATION_LABEL } from "./resources";
import CalciteIcon from "../_support/CalciteIcon";
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
   * The default group title for the Tip Manager.
   */
  @Prop({ reflect: true }) textDefaultTitle = DEFAULT_GROUP_TITLE;
  /**
   * Label that appears on hover of pagination icon.
   */
  @Prop({ reflect: true }) textPaginationLabel = DEFAULT_PAGINATION_LABEL;

  /**
   * Element styling
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
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpTips(): void {
    const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
    const selectedTip = this.el.querySelector<HTMLCalciteTipElement>("calcite-tip[selected]");

    this.tips = tips;
    this.total = tips.length;
    this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;

    tips.forEach((tip) => {
      tip.toggleAttribute("non-dismissible", true);
    });
    this.showSelectedTip();
    this.updateGroupTitle();
  }

  hideTipManager = (): void => {
    this.el.toggleAttribute("hidden");
    this.el.toggleAttribute("aria-hidden");
  };

  showSelectedTip() {
    this.tips.forEach((tip, index) => {
      tip.toggleAttribute("selected", this.selectedIndex === index);
      tip.toggleAttribute("hidden", this.selectedIndex !== index);
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
          <calcite-action onClick={this.hideTipManager} class={CSS.close}>
            <CalciteIcon size="16" path={x16} />
          </calcite-action>
        </header>
        <div class={classnames(CSS.tipContainer, this.direction)} key={this.selectedIndex}>
          <slot />
        </div>
        <footer class={CSS.pagination}>
          <calcite-action onClick={this.previousClicked} class={CSS.pagePrevious}>
            <CalciteIcon size="16" path={chevronLeft16} />
          </calcite-action>
          <span class={CSS.pagePosition}>
            {`${this.textPaginationLabel} ${this.selectedIndex + 1}/${this.total}`}
          </span>
          <calcite-action onClick={this.nextClicked} class={CSS.pageNext}>
            <CalciteIcon size="16" path={chevronRight16} />
          </calcite-action>
        </footer>
      </Host>
    );
  }
}
