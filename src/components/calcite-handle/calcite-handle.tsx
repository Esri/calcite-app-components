import { Component, Element, Event, EventEmitter, Method, Prop, h } from "@stencil/core";
import { CSS, ICONS } from "./resources";

@Component({
  tag: "calcite-handle",
  styleUrl: "calcite-handle.scss",
  shadow: true
})
export class CalciteHandle {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * @internal - stores the activated state of the drag handle.
   */
  @Prop({ mutable: true, reflect: true }) activated = false;

  /**
   * Value for the button title attribute
   */
  @Prop({ mutable: true, reflect: true }) textTitle = "handle";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteHandleElement;

  handleButton: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emmitted when the the handle is activated and the up or down arrow key is pressed.
   * @event calciteHandleNudge
   */
  @Event() calciteHandleNudge: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async setFocus() {
    this.handleButton.focus();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case " ":
        this.activated = !this.activated;
        break;
      case "ArrowUp":
      case "ArrowDown":
        if (!this.activated) {
          return;
        }
        const direction = event.key.toLowerCase().replace("arrow", "");
        this.calciteHandleNudge.emit({ handle: this.el, direction });
        break;
    }
  };

  handleBlur = () => {
    this.activated = false;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      // Needs to be a span because of https://github.com/SortableJS/Sortable/issues/1486
      <span
        role="button"
        tabindex="0"
        aria-pressed={this.activated.toString()}
        class={{ [CSS.handle]: true, [CSS.handleActivated]: this.activated }}
        onKeyDown={this.handleKeyDown}
        onBlur={this.handleBlur}
        title={this.textTitle}
        ref={(el) => (this.handleButton = el)}
      >
        <calcite-icon scale="s" icon={ICONS.drag} />
      </span>
    );
  }
}
