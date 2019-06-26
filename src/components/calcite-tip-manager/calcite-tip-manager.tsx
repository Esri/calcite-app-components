import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";
import { chevronLeft24, chevronRight24, x24 } from "@esri/calcite-ui-icons";
import { isEqual } from "lodash-es";
// import 'core-js/features/array/from';
import { DEFAULT_GROUP_TITLE } from "./resources";

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
    this.triggerAnimation();
    this.updateSelectedTip();
  }

  @State() tips;

  groupTitle = this.textDefaultTitle;

  total: number;

  tipContainer = null;

  direction: "advancing" | "retreating" = "advancing";

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
    this.el.shadowRoot.querySelector("slot").addEventListener("slotchange", (event) => {
      // @ts-ignore event.target is a slot and assignedElements is a valid method on a slot element
      this.updateTipState(event.target.assignedElements());
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  updateTipState(newTipList) {
    if (!isEqual(this.tips, newTipList)) {
      this.tips = newTipList;
      this.total = this.tips.length;
    }
  }

  hideTipManager() {
    this.el.toggleAttribute("hidden");
    this.el.toggleAttribute("aria-hidden");
  }
  nextTip() {
    this.direction = "advancing";
    this.selectedIndex++;
    if (this.selectedIndex > this.total - 1) {
      this.selectedIndex = 0;
    }
  }
  previousTip() {
    this.direction = "retreating";
    this.selectedIndex--;
    if (this.selectedIndex < 0) {
      this.selectedIndex = this.total - 1;
    }
  }

  triggerAnimation() {
    if (!this.tipContainer) {
      return;
    }
    this.tipContainer.classList.remove("is-animating", "advancing", "retreating");
    // tslint:disable-next-line
    void this.tipContainer.offsetWidth; // hack for restarting animation. https://css-tricks.com/restart-css-animation/
    this.tipContainer.classList.add("is-animating", this.direction);
  }

  updateSelectedTip() {
    this.tips.forEach((tip, index) => {
      if (index === this.selectedIndex) {
        this.groupTitle = tip.dataset.groupTitle ? tip.dataset.groupTitle : this.textDefaultTitle;
        tip.setAttribute("selected", "true");
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
    return (
      <Host>
        <header class="header">
          <h2 class="title" data-test-id="title">
            {this.groupTitle}
          </h2>
          <div class="close" onClick={() => this.hideTipManager()} data-test-id="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={x24} />
            </svg>
          </div>
        </header>
        <div class="tipContainer" ref={(el) => (this.tipContainer = el as HTMLElement)}>
          <slot />
        </div>
        <footer class="pagination">
          <button
            class="pageControl pageControl--left"
            onClick={() => this.previousTip()}
            data-test-id="previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={chevronLeft24} />
            </svg>
          </button>
          <span class="pagePosition">{`Tip ${this.selectedIndex + 1}/${this.total}`}</span>
          <button
            class="pageControl pageControl--right"
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
