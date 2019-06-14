import { Component, Host, h, Method, Prop, State, Element } from "@stencil/core";
import { x24, chevronLeft24, chevronRight24 } from "@esri/calcite-ui-icons";

@Component({
  tag: "calcite-tip-manager",
  styleUrl: "./calcite-tip-manager.scss",
  shadow: true
})
export class CalciteTipManager {

  @Element() el: HTMLElement;

  // Lifecycle

  constructor() {
    this.total = this.el.querySelectorAll('calcite-tip').length;
    this.selectedIndex = this.selectedTipIndex;
  }

  // Props

  @Prop({ reflect: true }) selectedTipIndex = 0;

  // State

  @State() dismissed = true;
  @State() selectedIndex = -1;
  total = 0;

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

  }
  prevTip() {

  }

  // Render



  render() {
    return (
      <Host hidden={this.dismissed}>
        <header class="tipManagerHeader">
          <slot name="title"></slot>
          <div class="close" onClick={() => this.hideTipManager()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={x24} />
            </svg>
          </div>
        </header>
        <div class="tipManagerContent">
          <slot />
        </div>
        <footer>
          <button class="pageLeftControl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={chevronLeft24} />
            </svg>
          </button>
          <span class="pagePosition">{`Tip ${this.selectedIndex}/${this.total}`}</span>
          <button class="pageRightControl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={chevronRight24} />
            </svg>
          </button>
        </footer>
      </Host>
    );
  }
}
