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
   * horizontal: Positioned to the left or right of the referenceElement.
   * vertical: Positioned above or below the referenceElement.
   */
  @Prop({ reflect: true }) placement: CalcitePlacement = "horizontal";

  @Watch("placement")
  placementHandler() {
    this.reposition();
  }

  /**
   * Reference HTMLElement used to position this component according to the placement property.
   */
  @Prop() referenceElement: HTMLElement;

  @Watch("referenceElement")
  referenceElementHandler() {
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

  @Element() el: HTMLCalcitePopoverElement;

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
    const { el, placement: componentPlacement, popper, referenceElement, xOffset, yOffset } = this;

    const placement = componentPlacement === "vertical" ? "bottom-start" : "auto-start";
    const offsetEnabled = !!(yOffset || xOffset);

    const modifiers: Popper.Modifiers = {
      hide: {
        enabled: false
      },
      offset: {
        enabled: offsetEnabled,
        offset: `${yOffset}, ${xOffset}`
      },
      preventOverflow: {
        enabled: false
      }
    };

    if (popper) {
      popper.options.placement = placement;
      popper.options.modifiers = { ...popper.options.modifiers, ...modifiers };
      popper.scheduleUpdate();
      return;
    }

    if (referenceElement) {
      const newPopper = new Popper(referenceElement, el, {
        eventsEnabled: false,
        placement,
        modifiers,
        onCreate: (data) => {
          if (
            data.originalPlacement === "bottom-start" &&
            data.offsets.reference.left > document.body.clientWidth / 2
          ) {
            data.instance.options.placement = "bottom-end";
            data.instance.scheduleUpdate();
          }
        }
      });

      window.addEventListener("resize", newPopper.scheduleUpdate, { passive: true });

      this.popper = newPopper;
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  destroyPopper(): void {
    const { popper } = this;

    if (popper) {
      window.removeEventListener("resize", popper.scheduleUpdate);
      popper.destroy();
    }

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
