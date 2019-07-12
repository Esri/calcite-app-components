import { Component, Element, Host, Method, Prop, State, Watch, h } from "@stencil/core";
import { chevronLeft24, chevronRight24, x24 } from "@esri/calcite-ui-icons";
import classnames from "classnames";
import { CSS, DEFAULT_GROUP_TITLE, DEFAULT_PAGINATION_LABEL } from "./resources";

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

  @Prop({ reflect: true }) textDefaultTitle = DEFAULT_GROUP_TITLE;

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

  hideTipManager(): void {
    this.el.toggleAttribute("hidden");
    this.el.toggleAttribute("aria-hidden");
  }

  updateSelectedTip(): void {
    this.tips.forEach((tip, index) => {
      const selected = index === this.selectedIndex;

      tip.toggleAttribute("selected", selected);

      if (selected) {
        this.groupTitle = tip.dataset.groupTitle || this.textDefaultTitle;
      }
    });
  }

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
          <h2 class={CSS.title}>{this.groupTitle}</h2>
          <button class={CSS.close} onClick={() => this.hideTipManager()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={x24} />
            </svg>
          </button>
        </header>
        <div class={classnames(CSS.tipContainer, this.direction)} key={this.selectedIndex}>
          <slot />
        </div>
        <footer class={CSS.pagination}>
          <button
            class={`${CSS.pageControl} ${CSS.pageControlPrevious}`}
            onClick={() => this.previousTip()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={chevronLeft24} />
            </svg>
          </button>
          <span class={CSS.pagePosition}>
            {`${this.textPaginationLabel} ${this.selectedIndex + 1}/${this.total}`}
          </span>
          <button
            class={`${CSS.pageControl} ${CSS.pageControlNext}`}
            onClick={() => this.nextTip()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={chevronRight24} />
            </svg>
          </button>
        </footer>
      </Host>
    );
  }
}
