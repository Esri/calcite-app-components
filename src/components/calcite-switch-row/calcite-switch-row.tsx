import { Component, Element, Host, /*Method,*/ Prop, h } from "@stencil/core";

import { CalciteScale, CalciteTheme } from "../interfaces";

import classnames from "classnames";

import { CSS } from "./resources";

import { CSS_UTILITY } from "../utils/resources";

import { getElementDir } from "../utils/dom";
import { VNode } from "@stencil/core/internal";

@Component({
  tag: "calcite-switch-row",
  styleUrl: "calcite-switch-row.scss",
  shadow: true
})
export class CalciteSwitchRow {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * Specify the size of the switch, defaults to 's'.
   */
  @Prop({ reflect: true }) scale: CalciteScale = "s";

  /**
   * Specify if the switch is on or off, defaults to not switched.
   */
  @Prop({ reflect: true }) switched = false;

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Variables
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteSwitchRowElement;

  //   private buttonEl: HTMLButtonElement;

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  //   @Method()
  //   async setFocus() {
  //     this.buttonEl.focus();
  //   }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderTextContainer(): VNode {
    // const { text } = this;

    // const textContainerClasses = {
    //   [CSS.textContainerVisible]: textEnabled
    // };

    return (
      <div key="text-container" class={CSS.textContainer}>
        {/* {text} */}
        <slot />
      </div>
    );
  }

  //   renderIconContainer(): VNode {
  //     const { loading } = this;

  //     const slotContainerNode = (
  //       <div
  //         class={classnames(CSS.slotContainer, {
  //           [CSS.slotContainerHidden]: loading
  //         })}
  //       >
  //         <slot />
  //       </div>
  //     );

  //     const calciteLoaderNode = loading ? <calcite-loader is-active inline></calcite-loader> : null;

  //     return (
  //       <div key="icon-container" aria-hidden="true" class={CSS.iconContainer}>
  //         {slotContainerNode}
  //         {calciteLoaderNode}
  //       </div>
  //     );
  //   }

  render() {
    const { disabled, loading, el, /*label,*/ switched, scale /*, text*/ } = this;

    // const titleText = !textEnabled && text;
    // const title = label || text;
    const rtl = getElementDir(el) === "rtl";
    const rtlClass = {
      [CSS_UTILITY.rtl]: rtl
    };

    return (
      <Host>
        <label
          class={classnames(CSS.container, rtlClass)}
          //   title={title}
          //   aria-label={title}
          //   disabled={disabled}
          aria-disabled={disabled.toString()}
          aria-busy={loading.toString()}
        >
          {this.renderTextContainer()}
          <calcite-switch switched={switched} scale={scale}></calcite-switch>
        </label>
      </Host>
    );
  }
}
