import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

import { CalcitePositionType } from "../interfaces";

import { getOffsetTop } from "../utils/position";

import { x16 } from "@esri/calcite-ui-icons";

const CSS = {
  header: "header",
  heading: "heading",
  content: "content",
  close: "close"
};

@Component({
  tag: "calcite-floating-panel",
  styleUrl: "calcite-floating-panel.scss",
  shadow: true
})
export class CalciteFloatingPanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /*
  side: dynamically left or right based on whether we're in the primary or secondary shell-panel.
  over: centered on top of trigger and covers trigger.
  anchor: dynamically above or below based on how close trigger is to top or bottom of window.
  */
  @Prop({ reflect: true }) positionType: CalcitePositionType;

  @Prop({ reflect: true }) heading: string;

  @Prop() positionElement: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteFloatingPanelElement;

  @State() offsetTop = 0;

  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { offsetTop } = this;

    const style = {
      top: `${offsetTop}px`
    };

    return (
      <Host style={style}>
        <header class={CSS.header}>
          <h3 class={CSS.heading}>{this.heading}</h3>
          <calcite-action onCalciteActionClick={this.hidePanel}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
              <path d={x16} />
            </svg>
          </calcite-action>
        </header>
        <div class={CSS.content}>
          <slot />
        </div>
      </Host>
    );
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  @Watch("positionType")
  positionTypeHandler(newValue: CalcitePositionType) {
    this.offsetTop = getOffsetTop({
      floatingElement: this.el,
      positionType: newValue,
      positionElement: this.positionElement
    });
  }

  @Watch("positionElement")
  positionElementHandler(newValue: HTMLElement) {
    this.offsetTop = getOffsetTop({
      floatingElement: this.el,
      positionType: this.positionType,
      positionElement: newValue
    });
  }

  hidePanel = () => {
    this.el.toggleAttribute("hidden", true);
  };
}
