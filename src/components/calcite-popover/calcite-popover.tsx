import { Component, Element, Host, Method, Prop, State, Watch, h } from "@stencil/core";

import { CalcitePlacement } from "../interfaces";

import Popper from "popper.js";

@Component({
  tag: "calcite-popover",
  styleUrl: "calcite-popover.scss",
  shadow: true
})
export class CalcitePopover {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Determines where the element will be positioned.
   * horizontal: Positioned to the left or right of the positionElement.
   * vertical: Positioned above or below the positionElement.
   */
  @Prop({ reflect: true }) placement: CalcitePlacement = "horizontal";

  @Watch("placement")
  placementHandler() {
    this.reposition();
  }

  /**
   * HTMLElement used to position this element according to the placement.
   */
  @Prop() positionElement: HTMLElement;

  @Watch("positionElement")
  positionElementHandler() {
    this.destroyPopper();
    this.reposition();
  }

  /**
   * Offset the position of the popover in the horizontal direction.
   */
  @Prop({ reflect: true }) xOffset = 0;

  @Watch("xOffset")
  xOffsetHandler() {
    this.reposition();
  }

  /**
   * Offset the position of the popover in the vertical direction.
   */
  @Prop({ reflect: true }) yOffset = 0;

  @Watch("yOffset")
  yOffsetHandler() {
    this.reposition();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteShellFloatingPanelElement;

  // https://www.npmjs.com/package/popper.js
  // https://popper.js.org/
  @State() popper: Popper;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentDidLoad() {
    this.reposition();
  }

  componentDidUnload() {
    this.destroyPopper();
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async reposition(): Promise<void> {
    const { el, placement: componentPlacement, popper, positionElement, xOffset, yOffset } = this;

    const placement = componentPlacement === "vertical" ? "bottom-start" : "auto-start";
    const boundariesElement: Popper.Boundary = "window";
    const offsetEnabled = yOffset || xOffset;

    const modifiers = {
      offset: {
        enabled: !!offsetEnabled,
        offset: `${yOffset}, ${xOffset}`
      },
      preventOverflow: {
        enabled: false,
        boundariesElement
      }
    };

    if (popper) {
      popper.options.placement = placement;
      popper.options.modifiers = { ...popper.options.modifiers, ...modifiers };
      popper.scheduleUpdate();
      return;
    }

    if (el && placement && positionElement) {
      this.popper = new Popper(positionElement, el, {
        eventsEnabled: false,
        placement,
        modifiers
      });
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  destroyPopper(): void {
    const { popper } = this;

    popper && popper.destroy();

    this.popper = null;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
