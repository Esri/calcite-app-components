import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { x16 } from "@esri/calcite-ui-icons";
import { TEXT } from "./resources";
import CalciteIcon from "../utils/CalciteIcon";
import { CalciteTheme } from "../interfaces";

@Component({
  tag: "calcite-dismissible-panel",
  styleUrl: "calcite-dismissible-panel.scss",
  shadow: true
})
export class CalciteDismissiblePanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Heading text.
   */
  @Prop() heading: string;

  /**
   * 'Close' text string for the close button.
   */
  @Prop() textClose = TEXT.close;

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteDismissiblePanelElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the back button has been clicked.
   */

  @Event() calciteDismissiblePanelDismiss: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  close = (): void => {
    this.calciteDismissiblePanelDismiss.emit();
  };

  panelKeyUpHandler = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { heading, textClose, close } = this;

    return (
      <Host>
        <calcite-panel tabIndex={0} onKeyUp={this.panelKeyUpHandler}>
          <h2 slot="header-content">{heading}</h2>
          <div slot="header-trailing-content">
            <calcite-action
              key="back-button"
              aria-label={textClose}
              text={textClose}
              onClick={close}
            >
              <CalciteIcon size="16" path={x16} />
            </calcite-action>
          </div>
          <slot />
        </calcite-panel>
      </Host>
    );
  }
}
