import { Component, Host, h, Method, State, Element, Watch } from "@stencil/core";
import { x24, chevronLeft24, chevronRight24 } from "@esri/calcite-ui-icons";
import { DEFAULT_GROUP_TITLE } from './resources';

@Component({
  tag: "calcite-tip-manager",
  styleUrl: "./calcite-tip-manager.scss",
  shadow: true
})
export class CalciteTipManager {

  @Element() el: HTMLElement;

  // Lifecycle

  connectedCallback() {
    this.tips = this.el.querySelectorAll('calcite-tip');
    this.total = this.el.querySelectorAll('calcite-tip').length;
    this.tips.forEach((item, index) => {
      item.setAttribute("dismissible", "false");
      if(item.hasAttribute("selected")) {
        this.selectedIndex = index;
      }
    });
    this.updateSelectedTip();
  }

  // Props

  // State

  @State() dismissed = false;
  @State() selectedIndex = 0;
  DEFAULT_GROUP_TITLE = DEFAULT_GROUP_TITLE;
  groupTitle = '';
  total = 0;
  tips = null;
  title = null;
  tipContainer = null;
  direction: "forward" | "backward" = "forward";

  // Watchers

  @Watch('selectedIndex')
  selectedChangeHandler() {
    this.triggerAnimation();
    this.updateSelectedTip();
  }

  // Methods

  @Method()
  async hideTipManager() {
    this.dismissed = true;
  }
  @Method()
  async showTipManager() {
    this.dismissed = false;
  }

  nextTip() {
    this.direction = "forward";
    this.selectedIndex++;
    if(this.selectedIndex > this.total-1) {
      this.selectedIndex = 0;
    }
  }
  previousTip() {
    this.direction = "backward";
    this.selectedIndex--;
    if(this.selectedIndex < 0) {
      this.selectedIndex = this.total-1;
    }
  }

  triggerAnimation() {
    this.tipContainer.classList.remove("is-animating", "forward", "backward");
    void this.tipContainer.offsetWidth; // hack for restarting animation. https://css-tricks.com/restart-css-animation/
    this.tipContainer.classList.add('is-animating', this.direction);
  }

  updateSelectedTip() {
    this.tips.forEach((tip, index) => {
      if(index === this.selectedIndex) {
        this.groupTitle = tip.dataset.groupTitle ? tip.dataset.groupTitle : this.DEFAULT_GROUP_TITLE;
        tip.setAttribute("selected", "true");
      } else {
        tip.setAttribute("selected", "false");
      }
    });
  }

  // Render

  render() {
    return (
      <Host hidden={this.dismissed}>
        <header class="header">
          <h2 ref={(el) => this.title = el as HTMLInputElement} class="title" data-test-id="title">{this.groupTitle}</h2>
          <div class="close" onClick={() => this.hideTipManager()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={x24} />
            </svg>
          </div>
        </header>
        <div class="tipContainer" ref={el => this.tipContainer = el as HTMLElement}>
          <slot />
        </div>
        <footer class="pagination">
          <button class="pageControl pageControl--left" onClick={()=> { this.previousTip(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={chevronLeft24} />
            </svg>
          </button>
          <span class="pagePosition">{`Tip ${this.selectedIndex+1}/${this.total}`}</span>
          <button class="pageControl pageControl--right" onClick={()=> { this.nextTip(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={chevronRight24} />
            </svg>
          </button>
        </footer>
      </Host>
    );
  }
}
