import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from "@stencil/core";
import { x24 } from "@esri/calcite-ui-icons";
import { getItem, setItem } from "../../utils/localStorage";

const CSS = {
  close: "close",
  content: "content",
  link: "link"
};

@Component({
  tag: "calcite-tip",
  styleUrl: "./calcite-tip.scss",
  shadow: true
})
export class CalciteTip {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop() storageId: string;
  @Prop() dismissible = true;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  @State() dismissed = getItem(`${this.el.tagName.toLowerCase()}-${this.storageId}`) !== null;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentDidLoad() {
    this.calciteTipRegister.emit(this.el);
  }

  componentDidUnload() {
    this.calciteTipUnregister.emit(this.el);
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calciteTipRegister: EventEmitter;
  @Event() calciteTipUnregister: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  hideTip() {
    this.dismissed = true;
    if (this.storageId) {
      setItem(`${this.el.tagName.toLowerCase()}-${this.storageId}`, "dismissed");
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host hidden={this.dismissed}>
        <slot name="heading" />
        {this.dismissible ? (
          <div class={CSS.close} onClick={() => this.hideTip()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={x24} />
            </svg>
          </div>
        ) : null}
        <div class={CSS.content}>
          <slot name="thumbnail" />
          <div>
            <slot />
            {this.el.querySelector("[slot=link]") ? (
              <p class={CSS.link}>
                <slot name="link" />
              </p>
            ) : null}
          </div>
        </div>
      </Host>
    );
  }
}
