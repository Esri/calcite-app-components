import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";
import { chevronLeft24, chevronRight24, x24 } from "@esri/calcite-ui-icons";
import { isEqual } from "lodash-es";
import classnames from "classnames";
import { DEFAULT_GROUP_TITLE } from "./resources";

const CSS = {
  header: "header",
  title: "title",
  close: "close",
  tipContainer: "tipContainer",
  pagination: "pagination",
  pageControl: "pageControl",
  pageControlPrevious: "pageControl--previous",
  pageControlNext: "pageControl--next",
  pagePosition: "pagePosition"
};
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

  @State() tips;

  @State() total: number;

  @State() direction: "advancing" | "retreating";

  groupTitle = this.textDefaultTitle;

  tipContainer = null;

  observer = null;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  constructor() {
    this.tips = Array.from(this.el.querySelectorAll("calcite-tip"));
    this.total = this.tips.length;
    this.tips.forEach((item, index) => {
      item.setAttribute("dismissible", "false");
      if (item.hasAttribute("selected")) {
        this.selectedIndex = index;
      }
    });
    this.selectedIndex = this.selectedIndex || 0; // need to set initial value here because of bug https://github.com/ionic-team/stencil/issues/1664.
  }

  connectedCallback() {
    this.updateSelectedTip();
  }

  componentDidLoad() {
    this.observer = new MutationObserver(() => {
      this.updateTipState(Array.from(this.el.querySelectorAll("calcite-tip")));
    });
    this.observer.observe(this.el, { childList: true });
  }

  componentDidUnload() {
    this.observer.disconnect();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  updateTipState(newTipList) {
    // TODO: think of a better name for this.
    if (!isEqual(this.tips, newTipList)) {
      this.tips = newTipList;
      this.total = this.tips.length;
      if (this.selectedIndex > this.total - 1) {
        this.selectedIndex = this.total - 1;
      }
      this.updateSelectedTip();
    }
  }

  hideTipManager() {
    this.el.toggleAttribute("hidden");
    this.el.toggleAttribute("aria-hidden");
  }

  nextTip() {
    this.direction = "advancing";
    const nextIndex = this.selectedIndex + 1;
    this.selectedIndex = (nextIndex + this.total) % this.total;
  }

  previousTip() {
    this.direction = "retreating";
    const previousIndex = this.selectedIndex - 1;
    this.selectedIndex = (previousIndex + this.total) % this.total;
  }

  updateSelectedTip() {
    this.tips.forEach((tip, index) => {
      if (index === this.selectedIndex) {
        this.groupTitle = tip.dataset.groupTitle || this.textDefaultTitle;
        tip.toggleAttribute("selected", true);
      } else {
        tip.removeAttribute("selected");
      }
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const tipContainerClasses = classnames(
      CSS.tipContainer,
      { "is-animating": this.direction },
      this.direction
    );
    if (this.total === 0) {
      // TODO: Empty state
      return <Host />;
    }
    return (
      <Host>
        <header class={CSS.header}>
          <h2 class={CSS.title} data-test-id="title">
            {this.groupTitle}
          </h2>
          <div class={CSS.close} onClick={() => this.hideTipManager()} data-test-id="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={x24} />
            </svg>
          </div>
        </header>
        <div class={tipContainerClasses} key={this.selectedIndex}>
          <slot />
        </div>
        <footer class={CSS.pagination}>
          <button
            class={`${CSS.pageControl} ${CSS.pageControlPrevious}`}
            onClick={() => this.previousTip()}
            data-test-id="previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={chevronLeft24} />
            </svg>
          </button>
          <span class={CSS.pagePosition}>{`Tip ${this.selectedIndex + 1}/${this.total}`}</span>
          <button
            class={`${CSS.pageControl} ${CSS.pageControlNext}`}
            onClick={() => this.nextTip()}
            data-test-id="next"
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
